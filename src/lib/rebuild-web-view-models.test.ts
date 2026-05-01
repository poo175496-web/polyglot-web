import { describe, expect, it } from 'vitest';

import { buildDashboardViewModel, buildStudyRoomViewModel } from '../../apps/web/src/view-models';

describe('rebuild web view models', () => {
  it('builds dashboard data from overview and deck responses', () => {
    const model = buildDashboardViewModel({
      overview: {
        dueReviews: 32,
        studyStats: {
          todayReviewedCount: 18,
          accuracyRate: 87,
          weakDecks: [{ deckId: 'ielts', wrongCount: 4 }],
        },
        deckProgress: [
          { deckId: 'gaokao', unlockedUnitIndex: 2, masteredCardCount: 40 },
          { deckId: 'ielts', unlockedUnitIndex: 0, masteredCardCount: 0 },
        ],
      },
      decks: [
        { id: 'gaokao', title: '高考高频词汇全覆盖', unitCount: 3, unlockedUnitIndex: 2 },
        { id: 'ielts', title: '雅思核心学术词库', unitCount: 3, unlockedUnitIndex: 0 },
      ],
    });

    expect(model.hero.title).toBe('高考高频词汇全覆盖');
    expect(model.hero.primaryAction).toEqual({
      label: '继续主路线',
      href: '/rebuild/study/gaokao',
    });
    expect(model.hero.secondaryAction).toEqual({
      label: '查看复习总控',
      href: '/rebuild/review',
    });
    expect(model.stats.dueReviews).toBe(32);
    expect(model.stats.todayReviewedLabel).toBe('今日已练 18 题');
    expect(model.stats.accuracyLabel).toBe('正确率 87%');
    expect(model.stats.weakDeckLabel).toBe('薄弱词书 IELTS');
    expect(model.deckCards[0].progressLabel).toBe('3 / 3 单元可学');
  });

  it('builds the study room header and active unit summary from deck detail and session data', () => {
    const model = buildStudyRoomViewModel({
      deckDetail: {
        deck: { id: 'toefl', title: '托福学术词汇精讲', unitCount: 3 },
        units: [
          { id: 'toefl-unit-0', index: 0, title: 'Unit 1' },
          { id: 'toefl-unit-1', index: 1, title: 'Unit 2' },
        ],
        progress: {
          unlockedUnitIndex: 1,
          masteredCardCount: 20,
        },
      },
      session: {
        sessionId: 'session-1',
        unit: { id: 'toefl-unit-1', index: 1, title: 'Unit 2' },
        cards: new Array(20).fill(null).map((_, index) => ({
          id: `card-${index}`,
          phonetic: '/test/',
          root: 'root',
          example: 'example',
          theme: 'education',
        })),
      },
    });

    expect(model.headerTitle).toBe('托福学术词汇精讲');
    expect(model.activeUnitLabel).toBe('当前学习 Unit 2');
    expect(model.cardCountLabel).toBe('20 张学习卡');
    expect(model.cards[0].phonetic).toBe('/test/');
    expect(model.progressPercentLabel).toBe('已完成 66% 的课程解锁');
  });
});
