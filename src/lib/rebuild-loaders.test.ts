import { describe, expect, it } from 'vitest';

import {
  loadRebuildDashboardData,
  loadRebuildStudyData,
} from '../../apps/web/src/loaders';

describe('rebuild loaders', () => {
  it('loads dashboard data from decks and overview endpoints together', async () => {
    const calls: string[] = [];
    const api = {
      getDecks: async (userId: string) => {
        calls.push(`decks:${userId}`);
        return [{ id: 'gaokao', title: '高考高频词汇全覆盖', unitCount: 3, unlockedUnitIndex: 2 }];
      },
      getProgressOverview: async (userId: string) => {
        calls.push(`overview:${userId}`);
        return {
          dueReviews: 12,
          studyStats: {
            todayReviewedCount: 8,
            accuracyRate: 88,
            weakDecks: [{ deckId: 'gaokao', wrongCount: 2 }],
          },
          deckProgress: [{ deckId: 'gaokao', unlockedUnitIndex: 2, masteredCardCount: 40 }],
        };
      },
    };

    const result = await loadRebuildDashboardData(api, 'user-1');

    expect(calls).toEqual(['decks:user-1', 'overview:user-1']);
    expect(result.hero.title).toBe('高考高频词汇全覆盖');
    expect(result.stats.dueReviews).toBe(12);
  });

  it('loads study data from deck detail and study session endpoints', async () => {
    const calls: string[] = [];
    const api = {
      getDeckDetail: async (userId: string, deckId: string) => {
        calls.push(`detail:${userId}:${deckId}`);
        return {
          deck: { id: deckId, title: '托福学术词汇精讲', unitCount: 3 },
          units: [{ id: 'toefl-unit-0', index: 0, title: 'Unit 1' }],
          progress: { unlockedUnitIndex: 0, masteredCardCount: 20 },
        };
      },
      startStudySession: async (input: {
        userId: string;
        deckId: string;
        mode: 'LEARN' | 'REVIEW';
        cardIds?: string[];
      }) => {
        calls.push(`session:${input.userId}:${input.deckId}:${input.mode}:${(input.cardIds || []).join(',')}`);
        return {
          sessionId: 'session-1',
          unit: { id: 'toefl-unit-0', index: 0, title: 'Unit 1' },
          cards: [{ id: 'card-1' }, { id: 'card-2' }],
        };
      },
    };

    const result = await loadRebuildStudyData(api, {
      userId: 'user-1',
      deckId: 'toefl',
    });

    expect(calls).toEqual([
      'detail:user-1:toefl',
      'session:user-1:toefl:LEARN:',
    ]);
    expect(result.headerTitle).toBe('托福学术词汇精讲');
    expect(result.cardCountLabel).toBe('2 张学习卡');
  });

  it('passes review mode and selected card ids to the session endpoint', async () => {
    const calls: string[] = [];
    const api = {
      getDeckDetail: async () => ({
        deck: { id: 'zhongkao', title: '中考核心词汇冲刺', unitCount: 3 },
        units: [{ id: 'zhongkao-unit-0', index: 0, title: 'Unit 1' }],
        progress: { unlockedUnitIndex: 0, masteredCardCount: 20 },
      }),
      startStudySession: async (input: {
        userId: string;
        deckId: string;
        mode: 'LEARN' | 'REVIEW';
        cardIds?: string[];
      }) => {
        calls.push(`session:${input.userId}:${input.deckId}:${input.mode}:${(input.cardIds || []).join(',')}`);
        return {
          sessionId: 'session-review',
          unit: { id: 'zhongkao-unit-0', index: 0, title: 'Unit 1' },
          cards: [{ id: 'card-4' }, { id: 'card-2' }],
        };
      },
    };

    const result = await loadRebuildStudyData(api, {
      userId: 'user-2',
      deckId: 'zhongkao',
      mode: 'REVIEW',
      cardIds: ['card-4', 'card-2'],
    });

    expect(calls).toEqual(['session:user-2:zhongkao:REVIEW:card-4,card-2']);
    expect(result.sessionId).toBe('session-review');
  });
});
