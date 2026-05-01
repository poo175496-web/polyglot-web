import { afterEach, describe, expect, it } from 'vitest';
import { rmSync } from 'node:fs';

import { createApiRouter } from '../../apps/api/src/http/router';
import { createFileStudyRepository } from '../../apps/api/src/repositories/file-study-repository';

const tempFile = '/Users/Zhuanz/Desktop/trae/polyglot/.tmp-rebuild-api-test.json';

afterEach(() => {
  try {
    rmSync(tempFile);
  } catch {
    // ignore cleanup errors for missing files
  }
});

describe('rebuild api routes', () => {
  it('persists progress to file storage across service recreation', async () => {
    const firstRepository = createFileStudyRepository(tempFile);
    const firstRouter = createApiRouter({ repository: firstRepository });

    const session = await firstRouter.studySessionStart({
      userId: 'user-1',
      deckId: 'zhongkao',
      mode: 'LEARN',
    });

    await firstRouter.studySessionSubmit({
      userId: 'user-1',
      sessionId: session.sessionId,
      answers: session.cards.map((card) => ({
        cardId: card.id,
        isCorrect: true,
        rating: 'GOOD',
        elapsedMs: 1500,
      })),
    });

    const secondRepository = createFileStudyRepository(tempFile);
    const secondRouter = createApiRouter({ repository: secondRepository });
    const overview = await secondRouter.progressOverview({ userId: 'user-1' });

    expect(overview.deckProgress[0].unlockedUnitIndex).toBe(1);
    expect(overview.dueReviews).toBe(20);
    expect(overview.studyStats.todayReviewedCount).toBe(20);
    expect(overview.studyStats.accuracyRate).toBe(100);
  });

  it('exposes contract-shaped deck and study endpoints', async () => {
    const router = createApiRouter({
      repository: createFileStudyRepository(tempFile),
    });

    const decks = await router.decksList({ userId: 'user-1' });
    const deckDetail = await router.deckDetail({ userId: 'user-1', deckId: 'gaokao' });
    const session = await router.studySessionStart({
      userId: 'user-1',
      deckId: 'gaokao',
      mode: 'LEARN',
    });

    expect(decks[0]).toMatchObject({
      id: 'zhongkao',
      title: expect.any(String),
      unitCount: expect.any(Number),
    });
    expect(deckDetail.deck.id).toBe('gaokao');
    expect(deckDetail.units.length).toBeGreaterThanOrEqual(3);
    expect(session.cards).toHaveLength(20);
  });

  it('starts a targeted review session for selected cards', async () => {
    const router = createApiRouter({
      repository: createFileStudyRepository(tempFile),
    });

    const learnSession = await router.studySessionStart({
      userId: 'user-1',
      deckId: 'zhongkao',
      mode: 'LEARN',
    });

    const reviewSession = await router.studySessionStart({
      userId: 'user-1',
      deckId: 'zhongkao',
      mode: 'REVIEW',
      cardIds: [learnSession.cards[3].id, learnSession.cards[1].id],
    });

    expect(reviewSession.unit.id).toBe(learnSession.unit.id);
    expect(reviewSession.cards.map((card) => card.id)).toEqual([
      learnSession.cards[3].id,
      learnSession.cards[1].id,
    ]);
  });

  it('builds dashboard analytics for accuracy and weak deck signals', async () => {
    const router = createApiRouter({
      repository: createFileStudyRepository(tempFile),
    });

    const session = await router.studySessionStart({
      userId: 'user-2',
      deckId: 'ielts',
      mode: 'LEARN',
    });

    await router.studySessionSubmit({
      userId: 'user-2',
      sessionId: session.sessionId,
      answers: session.cards.map((card, index) => ({
        cardId: card.id,
        isCorrect: index < 12,
        rating: index < 12 ? 'GOOD' : 'AGAIN',
        elapsedMs: 1200,
      })),
    });

    const overview = await router.progressOverview({ userId: 'user-2' });

    expect(overview.studyStats.todayReviewedCount).toBe(20);
    expect(overview.studyStats.accuracyRate).toBe(60);
    expect(overview.studyStats.weakDecks[0]).toMatchObject({
      deckId: 'ielts',
      wrongCount: 8,
    });
  });
});
