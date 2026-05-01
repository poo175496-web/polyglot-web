import { describe, expect, it } from 'vitest';

import {
  createInMemoryStudyService,
  createSeedCatalog,
} from '../../apps/api/src/services/study-service';

describe('rebuild study service', () => {
  it('builds exam decks from the shared vocabulary catalog', () => {
    const catalog = createSeedCatalog();

    expect(catalog.decks).toHaveLength(4);
    expect(catalog.decks[0].unitCount).toBeGreaterThanOrEqual(3);
    expect(catalog.cards.filter((card) => card.deckId === catalog.decks[0].id).length).toBeGreaterThanOrEqual(60);
  });

  it('starts a study session from the user unlocked unit', () => {
    const service = createInMemoryStudyService();

    const session = service.startSession({
      userId: 'user-1',
      deckId: 'zhongkao',
      mode: 'LEARN',
    });

    expect(session.deck.id).toBe('zhongkao');
    expect(session.unit.index).toBe(0);
    expect(session.cards).toHaveLength(20);
    expect(session.cards[0].templateType).toBe('WORD_TO_MEANING');
    expect(session.cards[0].phonetic).toBeTruthy();
    expect(session.cards[0].root).toBeTruthy();
    expect(session.cards[0].example).toBeTruthy();
  });

  it('writes review logs and unlocks the next unit after the full unit is passed', () => {
    const service = createInMemoryStudyService();
    const session = service.startSession({
      userId: 'user-1',
      deckId: 'zhongkao',
      mode: 'LEARN',
    });

    const result = service.submitReviews({
      userId: 'user-1',
      sessionId: session.sessionId,
      answers: session.cards.map((card, index) => ({
        cardId: card.id,
        isCorrect: true,
        rating: index % 2 === 0 ? 'GOOD' : 'EASY',
        elapsedMs: 1800 + index,
      })),
    });

    expect(result.reviewLogs).toHaveLength(20);
    expect(result.progress.unlockedUnitIndex).toBe(1);
    expect(result.progress.masteredCardCount).toBe(20);
    expect(service.getProgressOverview('user-1').dueReviews).toBe(20);
  });
});
