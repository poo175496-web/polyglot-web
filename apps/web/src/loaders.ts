import { buildDashboardViewModel, buildStudyRoomViewModel } from './view-models';

interface DashboardApi {
  getDecks: (userId: string) => Promise<Array<{ id: string; title: string; unitCount: number; unlockedUnitIndex: number }>>;
  getProgressOverview: (userId: string) => Promise<{
    dueReviews: number;
    studyStats: {
      todayReviewedCount: number;
      accuracyRate: number;
      weakDecks: Array<{ deckId: string; wrongCount: number }>;
    };
    deckProgress: Array<{ deckId: string; unlockedUnitIndex: number; masteredCardCount: number }>;
  }>;
}

interface StudyApi {
  getDeckDetail: (
    userId: string,
    deckId: string
  ) => Promise<{
    deck: { id: string; title: string; unitCount: number };
    units: Array<{ id: string; index: number; title: string }>;
    progress: { unlockedUnitIndex: number; masteredCardCount: number };
  }>;
  startStudySession: (input: {
    userId: string;
    deckId: string;
    mode: 'LEARN' | 'REVIEW';
    cardIds?: string[];
  }) => Promise<{
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
  }>;
}

export async function loadRebuildDashboardData(api: DashboardApi, userId: string) {
  const [decks, overview] = await Promise.all([
    api.getDecks(userId),
    api.getProgressOverview(userId),
  ]);

  return buildDashboardViewModel({
    overview,
    decks,
  });
}

export async function loadRebuildStudyData(
  api: StudyApi,
  input: { userId: string; deckId: string; mode?: 'LEARN' | 'REVIEW'; cardIds?: string[] }
) {
  const deckDetail = await api.getDeckDetail(input.userId, input.deckId);
  const session = await api.startStudySession({
    userId: input.userId,
    deckId: input.deckId,
    mode: input.mode || 'LEARN',
    cardIds: input.cardIds,
  });

  return buildStudyRoomViewModel({
    deckDetail,
    session,
  });
}
