import { describe, expect, it } from 'vitest';

import { buildStudyQueue, getNextUnitToUnlock } from '../../packages/domain/src/progress';

describe('rebuild domain blueprint', () => {
  it('prioritizes overdue review cards before new cards in the new scheduler queue', () => {
    const queue = buildStudyQueue({
      now: '2026-05-01T10:00:00.000Z',
      maxNewCards: 2,
      reviewCards: [
        { cardId: 'review-late', dueAt: '2026-04-30T08:00:00.000Z', difficulty: 4.2 },
        { cardId: 'review-soon', dueAt: '2026-05-01T09:30:00.000Z', difficulty: 2.1 },
      ],
      newCards: [
        { cardId: 'new-1' },
        { cardId: 'new-2' },
        { cardId: 'new-3' },
      ],
    });

    expect(queue.map((item) => item.cardId)).toEqual([
      'review-late',
      'review-soon',
      'new-1',
      'new-2',
    ]);
  });

  it('only unlocks the next unit when the current unit is fully passed', () => {
    expect(
      getNextUnitToUnlock({
        unitCount: 6,
        completedUnitIds: [0, 1],
        currentUnlockedUnitId: 2,
        passedUnitId: 2,
      })
    ).toBe(3);

    expect(
      getNextUnitToUnlock({
        unitCount: 6,
        completedUnitIds: [0, 1],
        currentUnlockedUnitId: 2,
        passedUnitId: 4,
      })
    ).toBe(2);
  });
});
