interface OverviewInput {
  dueReviews: number;
  studyStats: {
    todayReviewedCount: number;
    accuracyRate: number;
    weakDecks: Array<{
      deckId: string;
      wrongCount: number;
    }>;
  };
  deckProgress: Array<{
    deckId: string;
    unlockedUnitIndex: number;
    masteredCardCount: number;
  }>;
}

interface DeckInput {
  id: string;
  title: string;
  unitCount: number;
  unlockedUnitIndex: number;
}

export function buildDashboardViewModel({
  overview,
  decks,
}: {
  overview: OverviewInput;
  decks: DeckInput[];
}) {
  const heroDeck =
    decks
      .map((deck) => {
        const progress = overview.deckProgress.find((item) => item.deckId === deck.id);
        return {
          ...deck,
          unlockedUnitIndex: progress?.unlockedUnitIndex ?? deck.unlockedUnitIndex ?? 0,
          masteredCardCount: progress?.masteredCardCount ?? 0,
        };
      })
      .sort((left, right) => right.unlockedUnitIndex - left.unlockedUnitIndex)[0] ?? decks[0];

  return {
    hero: {
      title: heroDeck?.title || '开始你的学习计划',
      subtitle: heroDeck
        ? `已解锁 ${Math.min(heroDeck.unlockedUnitIndex + 1, heroDeck.unitCount)} / ${heroDeck.unitCount} 单元`
        : '连接新 API 后显示真实数据',
      primaryAction: {
        label: '继续主路线',
        href: `/rebuild/study/${heroDeck?.id || 'zhongkao'}`,
      },
      secondaryAction: {
        label: '查看复习总控',
        href: '/rebuild/review',
      },
    },
    stats: {
      dueReviews: overview.dueReviews,
      trackedDecks: decks.length,
      todayReviewedLabel: `今日已练 ${overview.studyStats.todayReviewedCount} 题`,
      accuracyLabel: `正确率 ${overview.studyStats.accuracyRate}%`,
      weakDeckLabel: overview.studyStats.weakDecks[0]
        ? `薄弱词书 ${overview.studyStats.weakDecks[0].deckId.toUpperCase()}`
        : '薄弱词书 暂无',
    },
    deckCards: decks.map((deck) => ({
      id: deck.id,
      title: deck.title,
      progressLabel: `${Math.min(deck.unlockedUnitIndex + 1, deck.unitCount)} / ${deck.unitCount} 单元可学`,
    })),
  };
}

export function buildStudyRoomViewModel({
  deckDetail,
  session,
}: {
  deckDetail: {
    deck: { id: string; title: string; unitCount: number };
    units: Array<{ id: string; index: number; title: string }>;
    progress: { unlockedUnitIndex: number; masteredCardCount: number };
  };
  session: {
    sessionId: string;
    unit: { id: string; index: number; title: string };
    cards: Array<{
      id: string;
      vocabularyWord?: string;
      phonetic?: string;
      root?: string;
      example?: string;
      theme?: string;
      prompt?: string;
      answer?: string;
      templateType?: string;
    }>;
  };
}) {
  return {
    headerTitle: deckDetail.deck.title,
    activeUnitLabel: `当前学习 Unit ${session.unit.index + 1}`,
    cardCountLabel: `${session.cards.length} 张学习卡`,
    unlockedSummary: `当前已解锁 ${Math.min(deckDetail.progress.unlockedUnitIndex + 1, deckDetail.deck.unitCount)} / ${deckDetail.deck.unitCount} 单元`,
    progressPercentLabel: `已完成 ${Math.floor(((deckDetail.progress.unlockedUnitIndex + 1) / deckDetail.deck.unitCount) * 100)}% 的课程解锁`,
    sessionId: session.sessionId,
    cards: session.cards,
  };
}

export function buildDeckDetailViewModel({
  deckDetail,
}: {
  deckDetail: {
    deck: { id: string; title: string; unitCount: number };
    units: Array<{ id: string; index: number; title: string }>;
    progress: { unlockedUnitIndex: number; masteredCardCount: number };
  };
}) {
  return {
    title: deckDetail.deck.title,
    summary: `已解锁 ${Math.min(deckDetail.progress.unlockedUnitIndex + 1, deckDetail.deck.unitCount)} / ${deckDetail.deck.unitCount} 单元`,
    unitCards: deckDetail.units.map((unit) => ({
      id: unit.id,
      title: unit.title,
      status:
        unit.index < deckDetail.progress.unlockedUnitIndex
          ? 'completed'
          : unit.index === deckDetail.progress.unlockedUnitIndex
            ? 'available'
            : 'locked',
    })),
  };
}

export function buildReviewViewModel({
  reviews,
}: {
  reviews: Array<{
    cardId: string;
    deckId: string;
    word: string;
    meaning: string;
    nextDueAt: string;
  }>;
}) {
  const deckCountMap = new Map<string, number>();
  const deckCardIdsMap = new Map<string, string[]>();
  for (const review of reviews) {
    deckCountMap.set(review.deckId, (deckCountMap.get(review.deckId) || 0) + 1);
    deckCardIdsMap.set(review.deckId, [...(deckCardIdsMap.get(review.deckId) || []), review.cardId]);
  }
  const deckSignals = [...deckCountMap.entries()]
    .map(([deckId, count]) => ({
      deckId,
      count,
      batchCardIds: (deckCardIdsMap.get(deckId) || []).slice(0, 3),
    }))
    .sort((left, right) => right.count - left.count);
  const primaryDeck = deckSignals[0];

  return {
    totalDue: reviews.length,
    summary: {
      totalDecks: deckCountMap.size,
      primaryDeckLabel: primaryDeck ? `重点词书 ${primaryDeck.deckId.toUpperCase()}` : '重点词书 暂无',
      primaryBatchLaunch: primaryDeck
        ? {
            deckId: primaryDeck.deckId,
            cardIds: primaryDeck.batchCardIds,
          }
        : null,
    },
    deckSignals,
    cards: reviews.map((review) => ({
      id: review.cardId,
      deckId: review.deckId,
      title: review.word,
      subtitle: review.meaning,
      dueLabel: review.nextDueAt,
    })),
  };
}

export function buildMistakesViewModel({
  mistakes,
}: {
  mistakes: Array<{
    cardId: string;
    deckId: string;
    word: string;
    meaning: string;
    wrongCount: number;
  }>;
}) {
  const highRiskMistakes = mistakes.filter((mistake) => mistake.wrongCount >= 3);
  const focusMistakes = highRiskMistakes.length > 0 ? highRiskMistakes : mistakes;
  const focusDeck = focusMistakes[0]?.deckId;
  const focusLaunchCardIds = focusDeck
    ? focusMistakes
        .filter((mistake) => mistake.deckId === focusDeck)
        .map((mistake) => mistake.cardId)
        .slice(0, 3)
    : [];

  return {
    totalMistakes: mistakes.length,
    summary: {
      highRiskCount: highRiskMistakes.length,
      watchingCount: mistakes.length - highRiskMistakes.length,
      focusDeckLabel: focusDeck ? `重点攻坚 ${focusDeck.toUpperCase()}` : '重点攻坚 暂无',
      focusLaunch: focusDeck
        ? {
            deckId: focusDeck,
            cardIds: focusLaunchCardIds,
          }
        : null,
    },
    cards: mistakes.map((mistake) => ({
      id: mistake.cardId,
      deckId: mistake.deckId,
      title: mistake.word,
      subtitle: mistake.meaning,
      wrongCountLabel: `错了 ${mistake.wrongCount} 次`,
      riskLabel: mistake.wrongCount >= 3 ? '高风险' : '观察中',
    })),
  };
}
