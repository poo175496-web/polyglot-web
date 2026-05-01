import { buildStudyQueue, getNextUnitToUnlock } from '../../../../packages/domain/src/progress';
import {
  createSeedCatalog,
  type DeckProgressState,
  type ReviewLogEntry,
  type StudySessionState,
  type StudyMode,
  type SubmitReviewAnswer,
} from '../services/study-service';

interface StudyRepository {
  getProgress: (userId: string, deckId: string) => DeckProgressState | null;
  saveProgress: (progress: DeckProgressState) => DeckProgressState;
  listDeckProgress: (userId: string) => DeckProgressState[];
  createSession: (session: StudySessionState) => StudySessionState;
  getSession: (sessionId: string) => StudySessionState | null;
  nextSessionId: () => string;
  appendReviewLogs: (logs: ReviewLogEntry[]) => ReviewLogEntry[];
  listReviewLogs: (userId: string) => ReviewLogEntry[];
  nextLogBaseIndex: () => number;
}

export function createApiRouter({ repository }: { repository: StudyRepository }) {
  const catalog = createSeedCatalog();

  function getDeck(deckId: string) {
    const deck = catalog.decks.find((item) => item.id === deckId);
    if (!deck) {
      throw new Error(`Unknown deck: ${deckId}`);
    }
    return deck;
  }

  function getOrCreateProgress(userId: string, deckId: string) {
    return (
      repository.getProgress(userId, deckId) ??
      repository.saveProgress({
        userId,
        deckId,
        unlockedUnitIndex: 0,
        masteredCardCount: 0,
        completedUnitIndexes: [],
      })
    );
  }

  return {
    async decksList({ userId }: { userId: string }) {
      const progressList = repository.listDeckProgress(userId);

      return catalog.decks.map((deck) => {
        const progress = progressList.find((item) => item.deckId === deck.id);
        return {
          ...deck,
          unlockedUnitIndex: progress?.unlockedUnitIndex ?? 0,
        };
      });
    },

    async deckDetail({ userId, deckId }: { userId: string; deckId: string }) {
      const deck = getDeck(deckId);
      const units = catalog.units.filter((item) => item.deckId === deckId);
      const progress = getOrCreateProgress(userId, deckId);

      return {
        deck,
        units,
        progress,
      };
    },

    async studySessionStart({
      userId,
      deckId,
      mode,
      cardIds,
    }: {
      userId: string;
      deckId: string;
      mode: StudyMode;
      cardIds?: string[];
    }) {
      const deck = getDeck(deckId);
      const progress = getOrCreateProgress(userId, deckId);
      const targetedCards =
        cardIds?.map((cardId) => catalog.cards.find((card) => card.id === cardId && card.deckId === deckId)).filter(
          (card): card is (typeof catalog.cards)[number] => Boolean(card)
        ) || [];
      const targetedUnit = targetedCards[0]
        ? catalog.units.find((item) => item.id === targetedCards[0].unitId)
        : null;
      const unit = targetedUnit || catalog.units.find((item) => item.deckId === deckId && item.index === progress.unlockedUnitIndex);

      if (!unit) {
        throw new Error(`Unknown unit for deck ${deckId}`);
      }

      const unitCards = catalog.cards.filter((card) => card.unitId === unit.id);
      const cards =
        targetedCards.length > 0
          ? targetedCards
          : buildStudyQueue({
              now: new Date().toISOString(),
              maxNewCards: unitCards.length,
              reviewCards: [],
              newCards: unitCards.map((card) => ({ cardId: card.id })),
            })
              .map((item) => unitCards.find((card) => card.id === item.cardId))
              .filter((card): card is (typeof unitCards)[number] => Boolean(card));

      const session = repository.createSession({
        sessionId: repository.nextSessionId(),
        userId,
        deckId,
        unitId: unit.id,
        unitIndex: unit.index,
        mode,
        cardIds: cards.map((card) => card.id),
        startedAt: new Date().toISOString(),
      });

      return {
        sessionId: session.sessionId,
        deck,
        unit,
        cards,
      };
    },

    async studySessionSubmit({
      userId,
      sessionId,
      answers,
    }: {
      userId: string;
      sessionId: string;
      answers: SubmitReviewAnswer[];
    }) {
      const session = repository.getSession(sessionId);
      if (!session || session.userId !== userId) {
        throw new Error('Study session not found');
      }

      const progress = getOrCreateProgress(userId, session.deckId);
      const now = Date.now();
      const logBaseIndex = repository.nextLogBaseIndex();

      const reviewLogs = repository.appendReviewLogs(
        answers.map((answer, index) => ({
          id: `log-${logBaseIndex + index + 1}`,
          userId,
          sessionId,
          cardId: answer.cardId,
          isCorrect: answer.isCorrect,
          rating: answer.rating,
          elapsedMs: answer.elapsedMs,
          reviewedAt: new Date(now).toISOString(),
          nextDueAt: new Date(now + 24 * 60 * 60 * 1000).toISOString(),
        }))
      );

      const passedCurrentUnit =
        answers.length === session.cardIds.length && answers.every((answer) => answer.isCorrect);

      let nextProgress = progress;
      if (passedCurrentUnit && !progress.completedUnitIndexes.includes(session.unitIndex)) {
        nextProgress = repository.saveProgress({
          ...progress,
          completedUnitIndexes: [...progress.completedUnitIndexes, session.unitIndex].sort((a, b) => a - b),
          masteredCardCount: progress.masteredCardCount + session.cardIds.length,
          unlockedUnitIndex: getNextUnitToUnlock({
            unitCount: getDeck(session.deckId).unitCount,
            completedUnitIds: [...progress.completedUnitIndexes, session.unitIndex].sort((a, b) => a - b),
            currentUnlockedUnitId: progress.unlockedUnitIndex,
            passedUnitId: session.unitIndex,
          }),
        });
      }

      return {
        reviewLogs,
        progress: nextProgress,
      };
    },

    async progressOverview({ userId }: { userId: string }) {
      const logs = repository.listReviewLogs(userId);
      const today = new Date().toISOString().slice(0, 10);
      const todayLogs = logs.filter((log) => log.reviewedAt.startsWith(today));
      const correctCount = logs.filter((log) => log.isCorrect).length;
      const wrongDeckMap = new Map<string, number>();

      for (const log of logs) {
        if (log.isCorrect) {
          continue;
        }
        const card = catalog.cards.find((item) => item.id === log.cardId);
        const deckId = card?.deckId || 'unknown';
        wrongDeckMap.set(deckId, (wrongDeckMap.get(deckId) || 0) + 1);
      }

      return {
        dueReviews: logs.length,
        studyStats: {
          todayReviewedCount: todayLogs.length,
          accuracyRate: logs.length > 0 ? Math.round((correctCount / logs.length) * 100) : 0,
          weakDecks: [...wrongDeckMap.entries()]
            .map(([deckId, wrongCount]) => ({ deckId, wrongCount }))
            .sort((left, right) => right.wrongCount - left.wrongCount)
            .slice(0, 3),
        },
        deckProgress: repository.listDeckProgress(userId),
      };
    },

    async reviewsDue({ userId }: { userId: string }) {
      return repository.listReviewLogs(userId).map((log) => {
        const card = catalog.cards.find((item) => item.id === log.cardId);
        return {
          cardId: log.cardId,
          deckId: card?.deckId || 'unknown',
          word: card?.vocabularyWord || card?.prompt || log.cardId,
          meaning: card?.answer || '',
          nextDueAt: log.nextDueAt,
        };
      });
    },

    async mistakesList({ userId }: { userId: string }) {
      const wrongMap = new Map<string, { wrongCount: number }>();

      for (const log of repository.listReviewLogs(userId)) {
        if (log.isCorrect) {
          continue;
        }

        wrongMap.set(log.cardId, {
          wrongCount: (wrongMap.get(log.cardId)?.wrongCount || 0) + 1,
        });
      }

      return [...wrongMap.entries()].map(([cardId, value]) => {
        const card = catalog.cards.find((item) => item.id === cardId);
        return {
          cardId,
          deckId: card?.deckId || 'unknown',
          word: card?.vocabularyWord || card?.prompt || cardId,
          meaning: card?.answer || '',
          wrongCount: value.wrongCount,
        };
      }).sort((left, right) => right.wrongCount - left.wrongCount);
    },
  };
}
