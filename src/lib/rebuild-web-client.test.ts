import { describe, expect, it } from 'vitest';

import { createRebuildApiClient } from '../../apps/web/src/api/client';

describe('rebuild web api client', () => {
  it('falls back to the deployed render backend when rebuild env is missing', async () => {
    const requests: string[] = [];
    const client = createRebuildApiClient({
      baseUrl: '',
      fetcher: async (url) => {
        requests.push(String(url));
        return {
          ok: true,
          json: async () => ([]),
        } as Response;
      },
    });

    await client.getDecks('user-1');

    expect(requests).toEqual([
      'https://polyglot-web-g2pa.onrender.com/v1/decks?userId=user-1',
    ]);
  });

  it('calls the new deck and overview endpoints with the expected query parameters', async () => {
    const requests: string[] = [];
    const client = createRebuildApiClient({
      baseUrl: 'http://localhost:3010',
      fetcher: async (url) => {
        requests.push(String(url));
        return {
          ok: true,
          json: async () => ([]),
        } as Response;
      },
    });

    await client.getDecks('user-1');
    await client.getProgressOverview('user-1');
    await client.getDeckDetail('user-1', 'zhongkao');

    expect(requests).toEqual([
      'http://localhost:3010/v1/decks?userId=user-1',
      'http://localhost:3010/v1/progress/overview?userId=user-1',
      'http://localhost:3010/v1/decks/zhongkao?userId=user-1',
    ]);
  });

  it('posts study session start and review submission to the new runtime api', async () => {
    const requests: Array<{ url: string; body?: string }> = [];
    const client = createRebuildApiClient({
      baseUrl: 'http://localhost:3010',
      fetcher: async (url, init) => {
        requests.push({
          url: String(url),
          body: typeof init?.body === 'string' ? init.body : undefined,
        });
        return {
          ok: true,
          json: async () => ({ sessionId: 'session-1', cards: [] }),
        } as Response;
      },
    });

    await client.startStudySession({
      userId: 'user-1',
      deckId: 'ielts',
      mode: 'REVIEW',
      cardIds: ['card-3', 'card-1'],
    });
    await client.submitStudySessionReviews({
      userId: 'user-1',
      sessionId: 'session-1',
      answers: [],
    });

    expect(requests).toEqual([
      {
        url: 'http://localhost:3010/v1/study-sessions',
        body: JSON.stringify({ userId: 'user-1', deckId: 'ielts', mode: 'REVIEW', cardIds: ['card-3', 'card-1'] }),
      },
      {
        url: 'http://localhost:3010/v1/study-sessions/session-1/reviews',
        body: JSON.stringify({ userId: 'user-1', answers: [] }),
      },
    ]);
  });
});
