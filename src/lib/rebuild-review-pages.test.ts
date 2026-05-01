import { describe, expect, it } from 'vitest';

import {
  buildMistakesViewModel,
  buildReviewViewModel,
} from '../../apps/web/src/view-models';

describe('rebuild review pages', () => {
  it('builds review page data from due review cards', () => {
    const model = buildReviewViewModel({
      reviews: [
        { cardId: 'card-1', deckId: 'zhongkao', word: 'abandon', meaning: 'v. 放弃', nextDueAt: '2026-05-01T12:00:00.000Z' },
        { cardId: 'card-3', deckId: 'zhongkao', word: 'brief', meaning: 'adj. 简短的', nextDueAt: '2026-05-01T12:10:00.000Z' },
        { cardId: 'card-2', deckId: 'gaokao', word: 'accurate', meaning: 'adj. 准确的', nextDueAt: '2026-05-01T12:30:00.000Z' },
      ],
    });

    expect(model.totalDue).toBe(3);
    expect(model.summary.totalDecks).toBe(2);
    expect(model.summary.primaryDeckLabel).toBe('重点词书 ZHONGKAO');
    expect(model.summary.primaryBatchLaunch).toEqual({
      deckId: 'zhongkao',
      cardIds: ['card-1', 'card-3'],
    });
    expect(model.deckSignals[0]).toEqual({
      deckId: 'zhongkao',
      count: 2,
      batchCardIds: ['card-1', 'card-3'],
    });
    expect(model.cards[0].title).toBe('abandon');
    expect(model.cards[0].deckId).toBe('zhongkao');
  });

  it('builds mistakes page data from wrong-answer logs', () => {
    const model = buildMistakesViewModel({
      mistakes: [
        { cardId: 'card-1', deckId: 'zhongkao', word: 'abandon', meaning: 'v. 放弃', wrongCount: 3 },
        { cardId: 'card-2', deckId: 'gaokao', word: 'benefit', meaning: 'n. 益处', wrongCount: 1 },
      ],
    });

    expect(model.totalMistakes).toBe(2);
    expect(model.summary.highRiskCount).toBe(1);
    expect(model.summary.watchingCount).toBe(1);
    expect(model.summary.focusDeckLabel).toBe('重点攻坚 ZHONGKAO');
    expect(model.summary.focusLaunch).toEqual({
      deckId: 'zhongkao',
      cardIds: ['card-1'],
    });
    expect(model.cards[0].riskLabel).toBe('高风险');
    expect(model.cards[0].wrongCountLabel).toBe('错了 3 次');
    expect(model.cards[0].deckId).toBe('zhongkao');
  });
});
