import type { ReviewRating, StudyMode } from '../../../api/src/services/study-service';

type Fetcher = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;
const DEFAULT_REBUILD_API_BASE_URL = 'https://polyglot-web-g2pa.onrender.com';

export interface RebuildDeckSummary {
  id: string;
  title: string;
  unitCount: number;
  unlockedUnitIndex: number;
}

export interface RebuildProgressOverview {
  dueReviews: number;
  studyStats: {
    todayReviewedCount: number;
    accuracyRate: number;
    weakDecks: Array<{
      deckId: string;
      wrongCount: number;
    }>;
  };
  deckProgress: Array<{
    deckId: string;
    unlockedUnitIndex: number;
    masteredCardCount: number;
  }>;
}

export interface RebuildDeckDetail {
  deck: { id: string; title: string; unitCount: number };
  units: Array<{ id: string; index: number; title: string }>;
  progress: { unlockedUnitIndex: number; masteredCardCount: number };
}

export interface RebuildStudySession {
  sessionId: string;
  unit: { id: string; index: number; title: string };
  cards: Array<{
    id: string;
    vocabularyWord?: string;
    phonetic?: string;
    root?: string;
    example?: string;
    theme?: string;
    prompt?: string;
    answer?: string;
    templateType?: string;
  }>;
}

export interface RebuildDueReview {
  cardId: string;
  deckId: string;
  word: string;
  meaning: string;
  nextDueAt: string;
}

export interface RebuildMistake {
  cardId: string;
  deckId: string;
  word: string;
  meaning: string;
  wrongCount: number;
}

function trimBaseUrl(baseUrl: string) {
  return baseUrl.replace(/\/+$/, '');
}

async function parseJson<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export function createRebuildApiClient({
  baseUrl = DEFAULT_REBUILD_API_BASE_URL,
  fetcher = fetch,
}: {
  baseUrl?: string;
  fetcher?: Fetcher;
}) {
  const normalizedBaseUrl = trimBaseUrl(baseUrl || DEFAULT_REBUILD_API_BASE_URL);

  async function requestJson<T>(url: string, init?: RequestInit) {
    const response = await fetcher(url, init);
    return parseJson<T>(response);
  }

  return {
    getDecks(userId: string) {
      return requestJson<RebuildDeckSummary[]>(`${normalizedBaseUrl}/v1/decks?userId=${encodeURIComponent(userId)}`);
    },

    getDeckDetail(userId: string, deckId: string) {
      return requestJson<RebuildDeckDetail>(
        `${normalizedBaseUrl}/v1/decks/${encodeURIComponent(deckId)}?userId=${encodeURIComponent(userId)}`
      );
    },

    getProgressOverview(userId: string) {
      return requestJson<RebuildProgressOverview>(`${normalizedBaseUrl}/v1/progress/overview?userId=${encodeURIComponent(userId)}`);
    },

    getDueReviews(userId: string) {
      return requestJson<RebuildDueReview[]>(`${normalizedBaseUrl}/v1/reviews/due?userId=${encodeURIComponent(userId)}`);
    },

    getMistakes(userId: string) {
      return requestJson<RebuildMistake[]>(`${normalizedBaseUrl}/v1/mistakes?userId=${encodeURIComponent(userId)}`);
    },

    startStudySession(input: {
      userId: string;
      deckId: string;
      mode: StudyMode;
      cardIds?: string[];
    }) {
      return requestJson<RebuildStudySession>(`${normalizedBaseUrl}/v1/study-sessions`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(input),
        });
    },

    submitStudySessionReviews(input: {
      userId: string;
      sessionId: string;
      answers: Array<{
        cardId: string;
        isCorrect: boolean;
        rating: ReviewRating;
        elapsedMs: number;
      }>;
    }) {
      return requestJson<{
        reviewLogs: Array<{
          id: string;
          cardId: string;
          isCorrect: boolean;
          rating: ReviewRating;
          elapsedMs: number;
        }>;
        progress: {
          userId: string;
          deckId: string;
          unlockedUnitIndex: number;
          masteredCardCount: number;
          completedUnitIndexes: number[];
        };
      }>(`${normalizedBaseUrl}/v1/study-sessions/${encodeURIComponent(input.sessionId)}/reviews`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId: input.userId,
            answers: input.answers,
          }),
        });
    },
  };
}
