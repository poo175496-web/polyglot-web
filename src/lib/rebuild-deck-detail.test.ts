import { describe, expect, it } from 'vitest';

import { buildDeckDetailViewModel } from '../../apps/web/src/view-models';

describe('rebuild deck detail view model', () => {
  it('builds unit progress cards from deck detail response', () => {
    const model = buildDeckDetailViewModel({
      deckDetail: {
        deck: { id: 'gaokao', title: '高考高频词汇全覆盖', unitCount: 3 },
        units: [
          { id: 'gaokao-unit-0', index: 0, title: 'Unit 1' },
          { id: 'gaokao-unit-1', index: 1, title: 'Unit 2' },
          { id: 'gaokao-unit-2', index: 2, title: 'Unit 3' },
        ],
        progress: { unlockedUnitIndex: 1, masteredCardCount: 20 },
      },
    });

    expect(model.title).toBe('高考高频词汇全覆盖');
    expect(model.unitCards).toEqual([
      { id: 'gaokao-unit-0', title: 'Unit 1', status: 'completed' },
      { id: 'gaokao-unit-1', title: 'Unit 2', status: 'available' },
      { id: 'gaokao-unit-2', title: 'Unit 3', status: 'locked' },
    ]);
  });
});
