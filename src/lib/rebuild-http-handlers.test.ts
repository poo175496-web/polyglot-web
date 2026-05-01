import { afterEach, describe, expect, it } from 'vitest';
import { rmSync } from 'node:fs';

import { createApiRouter } from '../../apps/api/src/http/router';
import { createHttpHandlers } from '../../apps/api/src/http/handlers';
import { createFileStudyRepository } from '../../apps/api/src/repositories/file-study-repository';

const tempFile = '/Users/Zhuanz/Desktop/trae/polyglot/.tmp-rebuild-handlers-test.json';

afterEach(() => {
  try {
    rmSync(tempFile);
  } catch {
    // ignore
  }
});

describe('rebuild http handlers', () => {
  it('returns health information for the new api runtime', async () => {
    const handlers = createHttpHandlers({
      router: createApiRouter({
        repository: createFileStudyRepository(tempFile),
      }),
    });

    const response = await handlers.health();

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: 'ok',
      service: 'polyglot-rebuild-api',
      version: 'v1',
    });
  });

  it('exposes session and overview handlers through the runtime facade', async () => {
    const handlers = createHttpHandlers({
      router: createApiRouter({
        repository: createFileStudyRepository(tempFile),
      }),
    });

    const session = await handlers.studySessionStart({
      body: {
        userId: 'user-1',
        deckId: 'ielts',
        mode: 'LEARN',
      },
    });
    const sessionBody = session.body as {
      sessionId: string;
      cards: Array<{ id: string }>;
    };

    const submit = await handlers.studySessionSubmit({
      params: { sessionId: sessionBody.sessionId },
      body: {
        userId: 'user-1',
        answers: sessionBody.cards.map((card) => ({
          cardId: card.id,
          isCorrect: true,
          rating: 'GOOD',
          elapsedMs: 1200,
        })),
      },
    });

    const overview = await handlers.progressOverview({
      query: { userId: 'user-1' },
    });
    const overviewBody = overview.body as {
      dueReviews: number;
      deckProgress: Array<{ deckId: string }>;
    };

    expect(session.status).toBe(200);
    expect(submit.status).toBe(200);
    expect(overviewBody.deckProgress[0].deckId).toBe('ielts');
    expect(overviewBody.dueReviews).toBe(20);
  });
});
