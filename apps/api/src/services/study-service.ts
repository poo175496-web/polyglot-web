import { vocabularyData } from '../../../../src/data/vocabulary';
import { buildStudyQueue, getNextUnitToUnlock } from '../../../../packages/domain/src/progress';

export type StudyMode = 'LEARN' | 'REVIEW' | 'TEST';
export type CardTemplateType = 'WORD_TO_MEANING';
export type ReviewRating = 'AGAIN' | 'HARD' | 'GOOD' | 'EASY';

export interface SeedDeck {
  id: string;
  title: string;
  examType: string;
  unitCount: number;
}

export interface SeedUnit {
  id: string;
  deckId: string;
  index: number;
  title: string;
}

export interface SeedCard {
  id: string;
  deckId: string;
  unitId: string;
  vocabularyWord: string;
  phonetic: string;
  root: string;
  example: string;
  theme?: string;
  templateType: CardTemplateType;
  prompt: string;
  answer: string;
}

export interface SeedCatalog {
  decks: SeedDeck[];
  units: SeedUnit[];
  cards: SeedCard[];
}

interface StartSessionInput {
  userId: string;
  deckId: string;
  mode: StudyMode;
  cardIds?: string[];
}

export interface SubmitReviewAnswer {
  cardId: string;
  isCorrect: boolean;
  rating: ReviewRating;
  elapsedMs: number;
}

interface SubmitReviewsInput {
  userId: string;
  sessionId: string;
  answers: SubmitReviewAnswer[];
}

export interface StudySessionState {
  sessionId: string;
  userId: string;
  deckId: string;
  unitId: string;
  unitIndex: number;
  mode: StudyMode;
  cardIds: string[];
  startedAt: string;
}

export interface ReviewLogEntry {
  id: string;
  userId: string;
  sessionId: string;
  cardId: string;
  isCorrect: boolean;
  rating: ReviewRating;
  elapsedMs: number;
  reviewedAt: string;
  nextDueAt: string;
}

export interface DeckProgressState {
  userId: string;
  deckId: string;
  unlockedUnitIndex: number;
  masteredCardCount: number;
  completedUnitIndexes: number[];
}

const WORDS_PER_UNIT = 20;

const deckMeta: Record<string, { title: string; examType: string }> = {
  zhongkao: { title: '中考核心词汇冲刺', examType: 'ZHONGKAO' },
  gaokao: { title: '高考高频词汇全覆盖', examType: 'GAOKAO' },
  ielts: { title: '雅思核心学术词库', examType: 'IELTS' },
  toefl: { title: '托福学术词汇精讲', examType: 'TOEFL' },
};

export function createSeedCatalog(): SeedCatalog {
  const decks: SeedDeck[] = [];
  const units: SeedUnit[] = [];
  const cards: SeedCard[] = [];

  Object.entries(vocabularyData).forEach(([deckId, words]) => {
    const meta = deckMeta[deckId];
    const unitCount = Math.ceil(words.length / WORDS_PER_UNIT);

    decks.push({
      id: deckId,
      title: meta?.title || deckId,
      examType: meta?.examType || 'CUSTOM',
      unitCount,
    });

    for (let index = 0; index < unitCount; index += 1) {
      const unitId = `${deckId}-unit-${index}`;
      units.push({
        id: unitId,
        deckId,
        index,
        title: `Unit ${index + 1}`,
      });

      words.slice(index * WORDS_PER_UNIT, (index + 1) * WORDS_PER_UNIT).forEach((word, wordIndex) => {
        cards.push({
          id: `${unitId}-card-${wordIndex}`,
          deckId,
          unitId,
          vocabularyWord: word.word,
          phonetic: word.phonetic,
          root: word.root,
          example: word.example,
          theme: word.theme,
          templateType: 'WORD_TO_MEANING',
          prompt: word.word,
          answer: word.meaning,
        });
      });
    }
  });

  return { decks, units, cards };
}

export function createInMemoryStudyService() {
  const catalog = createSeedCatalog();
  const sessionMap = new Map<string, StudySessionState>();
  const progressMap = new Map<string, DeckProgressState>();
  const reviewLogs: ReviewLogEntry[] = [];

  function getDeck(deckId: string) {
    const deck = catalog.decks.find((item) => item.id === deckId);
    if (!deck) {
      throw new Error(`Unknown deck: ${deckId}`);
    }
    return deck;
  }

  function getProgressKey(userId: string, deckId: string) {
    return `${userId}:${deckId}`;
  }

  function getOrCreateProgress(userId: string, deckId: string) {
    const key = getProgressKey(userId, deckId);
    const existing = progressMap.get(key);
    if (existing) {
      return existing;
    }

    const created: DeckProgressState = {
      userId,
      deckId,
      unlockedUnitIndex: 0,
      masteredCardCount: 0,
      completedUnitIndexes: [],
    };
    progressMap.set(key, created);
    return created;
  }

  return {
    createSeedCatalog,

    startSession(input: StartSessionInput) {
      const deck = getDeck(input.deckId);
      const progress = getOrCreateProgress(input.userId, input.deckId);
      const targetedCards =
        input.cardIds
          ?.map((cardId) => catalog.cards.find((card) => card.id === cardId && card.deckId === input.deckId))
          .filter((card): card is SeedCard => Boolean(card)) || [];
      const targetedUnit = targetedCards[0]
        ? catalog.units.find((item) => item.id === targetedCards[0].unitId)
        : null;
      const unit =
        targetedUnit ||
        catalog.units.find((item) => item.deckId === input.deckId && item.index === progress.unlockedUnitIndex);

      if (!unit) {
        throw new Error(`Unknown unit for deck ${input.deckId}`);
      }

      const unitCards = catalog.cards.filter((card) => card.unitId === unit.id);
      const orderedCards =
        targetedCards.length > 0
          ? targetedCards
          : buildStudyQueue({
              now: new Date().toISOString(),
              maxNewCards: unitCards.length,
              reviewCards: [],
              newCards: unitCards.map((card) => ({ cardId: card.id })),
            })
              .map((item) => unitCards.find((card) => card.id === item.cardId))
              .filter((card): card is SeedCard => Boolean(card));

      const sessionId = `session-${sessionMap.size + 1}`;
      sessionMap.set(sessionId, {
        sessionId,
        userId: input.userId,
        deckId: input.deckId,
        unitId: unit.id,
        unitIndex: unit.index,
        mode: input.mode,
        cardIds: orderedCards.map((card) => card.id),
        startedAt: new Date().toISOString(),
      });

      return {
        sessionId,
        deck,
        unit,
        cards: orderedCards,
      };
    },

    submitReviews(input: SubmitReviewsInput) {
      const session = sessionMap.get(input.sessionId);
      if (!session || session.userId !== input.userId) {
        throw new Error('Study session not found');
      }

      const progress = getOrCreateProgress(input.userId, session.deckId);
      const now = Date.now();

      const createdLogs = input.answers.map((answer, index) => {
        const log: ReviewLogEntry = {
          id: `log-${reviewLogs.length + index + 1}`,
          userId: input.userId,
          sessionId: input.sessionId,
          cardId: answer.cardId,
          isCorrect: answer.isCorrect,
          rating: answer.rating,
          elapsedMs: answer.elapsedMs,
          reviewedAt: new Date(now).toISOString(),
          nextDueAt: new Date(now + 24 * 60 * 60 * 1000).toISOString(),
        };
        reviewLogs.push(log);
        return log;
      });

      const passedCurrentUnit =
        input.answers.length === session.cardIds.length && input.answers.every((answer) => answer.isCorrect);

      if (passedCurrentUnit && !progress.completedUnitIndexes.includes(session.unitIndex)) {
        progress.completedUnitIndexes = [...progress.completedUnitIndexes, session.unitIndex].sort((a, b) => a - b);
        progress.masteredCardCount += session.cardIds.length;
        progress.unlockedUnitIndex = getNextUnitToUnlock({
          unitCount: getDeck(session.deckId).unitCount,
          completedUnitIds: progress.completedUnitIndexes,
          currentUnlockedUnitId: progress.unlockedUnitIndex,
          passedUnitId: session.unitIndex,
        });
      }

      return {
        reviewLogs: createdLogs,
        progress,
      };
    },

    getProgressOverview(userId: string) {
      const userLogs = reviewLogs.filter((log) => log.userId === userId);
      const deckProgress = [...progressMap.values()].filter((item) => item.userId === userId);

      return {
        dueReviews: userLogs.length,
        deckProgress,
      };
    },
  };
}
