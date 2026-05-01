import type { ReviewRating, StudyMode } from '../services/study-service';

interface RouterShape {
  decksList: (input: { userId: string }) => Promise<unknown>;
  deckDetail: (input: { userId: string; deckId: string }) => Promise<unknown>;
  studySessionStart: (input: { userId: string; deckId: string; mode: StudyMode; cardIds?: string[] }) => Promise<unknown>;
  studySessionSubmit: (input: {
    userId: string;
    sessionId: string;
    answers: Array<{
      cardId: string;
      isCorrect: boolean;
      rating: ReviewRating;
      elapsedMs: number;
    }>;
  }) => Promise<unknown>;
  progressOverview: (input: { userId: string }) => Promise<unknown>;
  reviewsDue: (input: { userId: string }) => Promise<unknown>;
  mistakesList: (input: { userId: string }) => Promise<unknown>;
}

interface HandlerResponse<T> {
  status: number;
  body: T;
}

export function createHttpHandlers({ router }: { router: RouterShape }) {
  return {
    async health(): Promise<HandlerResponse<{ status: string; service: string; version: string }>> {
      return {
        status: 200,
        body: {
          status: 'ok',
          service: 'polyglot-rebuild-api',
          version: 'v1',
        },
      };
    },

    async decksList({ query }: { query: { userId: string } }) {
      return {
        status: 200,
        body: await router.decksList({ userId: query.userId }),
      };
    },

    async deckDetail({ params, query }: { params: { deckId: string }; query: { userId: string } }) {
      return {
        status: 200,
        body: await router.deckDetail({
          userId: query.userId,
          deckId: params.deckId,
        }),
      };
    },

    async studySessionStart({
      body,
    }: {
      body: { userId: string; deckId: string; mode: StudyMode; cardIds?: string[] };
    }) {
      return {
        status: 200,
        body: await router.studySessionStart(body),
      };
    },

    async studySessionSubmit({
      params,
      body,
    }: {
      params: { sessionId: string };
      body: {
        userId: string;
        answers: Array<{
          cardId: string;
          isCorrect: boolean;
          rating: ReviewRating;
          elapsedMs: number;
        }>;
      };
    }) {
      return {
        status: 200,
        body: await router.studySessionSubmit({
          userId: body.userId,
          sessionId: params.sessionId,
          answers: body.answers,
        }),
      };
    },

    async progressOverview({ query }: { query: { userId: string } }) {
      return {
        status: 200,
        body: await router.progressOverview({ userId: query.userId }),
      };
    },

    async reviewsDue({ query }: { query: { userId: string } }) {
      return {
        status: 200,
        body: await router.reviewsDue({ userId: query.userId }),
      };
    },

    async mistakesList({ query }: { query: { userId: string } }) {
      return {
        status: 200,
        body: await router.mistakesList({ userId: query.userId }),
      };
    },
  };
}
