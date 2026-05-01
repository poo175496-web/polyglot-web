export interface ReviewQueueCard {
  cardId: string;
  dueAt: string;
  difficulty: number;
}

export interface NewQueueCard {
  cardId: string;
}

interface BuildStudyQueueInput {
  now: string;
  maxNewCards: number;
  reviewCards: ReviewQueueCard[];
  newCards: NewQueueCard[];
}

interface QueueItem {
  cardId: string;
  type: 'review' | 'new';
}

interface GetNextUnitToUnlockInput {
  unitCount: number;
  completedUnitIds: number[];
  currentUnlockedUnitId: number;
  passedUnitId: number;
}

export function buildStudyQueue(input: BuildStudyQueueInput): QueueItem[] {
  const now = new Date(input.now).getTime();

  const reviewItems = [...input.reviewCards]
    .filter((card) => new Date(card.dueAt).getTime() <= now)
    .sort((left, right) => new Date(left.dueAt).getTime() - new Date(right.dueAt).getTime())
    .map((card) => ({
      cardId: card.cardId,
      type: 'review' as const,
    }));

  const newItems = input.newCards.slice(0, input.maxNewCards).map((card) => ({
    cardId: card.cardId,
    type: 'new' as const,
  }));

  return [...reviewItems, ...newItems];
}

export function getNextUnitToUnlock(input: GetNextUnitToUnlockInput) {
  const completedUnits = new Set(input.completedUnitIds);

  for (let unitId = 0; unitId < input.currentUnlockedUnitId; unitId += 1) {
    if (!completedUnits.has(unitId)) {
      return input.currentUnlockedUnitId;
    }
  }

  if (input.passedUnitId !== input.currentUnlockedUnitId) {
    return input.currentUnlockedUnitId;
  }

  return Math.min(input.currentUnlockedUnitId + 1, input.unitCount - 1);
}
