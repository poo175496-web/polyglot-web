import { afterEach, describe, expect, it } from 'vitest';
import { rmSync } from 'node:fs';

import { createApiRouter } from '../../apps/api/src/http/router';
import { createFileStudyRepository } from '../../apps/api/src/repositories/file-study-repository';

const tempFile = '/Users/Zhuanz/Desktop/trae/polyglot/.tmp-rebuild-review-api-test.json';

afterEach(() => {
  try {
    rmSync(tempFile);
  } catch {
    // ignore
  }
});

describe('rebuild review api', () => {
  it('returns due reviews and mistakes after a mixed study submission', async () => {
    const router = createApiRouter({
      repository: createFileStudyRepository(tempFile),
    });

    const session = await router.studySessionStart({
      userId: 'user-1',
      deckId: 'zhongkao',
      mode: 'LEARN',
    });

    await router.studySessionSubmit({
      userId: 'user-1',
      sessionId: session.sessionId,
      answers: session.cards.map((card, index) => ({
        cardId: card.id,
        isCorrect: index % 2 === 0,
        rating: index % 2 === 0 ? 'GOOD' : 'AGAIN',
        elapsedMs: 1000,
      })),
    });

    const reviews = await router.reviewsDue({ userId: 'user-1' });
    const mistakes = await router.mistakesList({ userId: 'user-1' });

    expect(reviews.length).toBe(20);
    expect(reviews[0]).toMatchObject({
      deckId: 'zhongkao',
      word: expect.any(String),
      meaning: expect.any(String),
    });
    expect(mistakes[0]).toMatchObject({
      deckId: 'zhongkao',
      word: expect.any(String),
      wrongCount: expect.any(Number),
    });
  });
});
