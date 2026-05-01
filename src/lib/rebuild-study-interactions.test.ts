import { describe, expect, it } from 'vitest';

import {
  buildChoiceOptions,
  buildClozeText,
  buildPracticeLaunchPath,
  buildStudyCompletionSummary,
  buildStudyMissionSummary,
  buildPracticeSteps,
  buildStudyReviewAnswers,
  canUseSpeechSynthesis,
  checkSpellingAnswer,
  getNextStudyStep,
  speakVocabularyWord,
} from '../../apps/web/src/study-session';

describe('rebuild study interactions', () => {
  it('builds review answers from remembered and forgotten card decisions', () => {
    expect(
      buildStudyReviewAnswers([
        { cardId: 'card-1', remembered: true, elapsedMs: 1800 },
        { cardId: 'card-2', remembered: false, elapsedMs: 2600 },
      ])
    ).toEqual([
      { cardId: 'card-1', isCorrect: true, rating: 'GOOD', elapsedMs: 1800 },
      { cardId: 'card-2', isCorrect: false, rating: 'AGAIN', elapsedMs: 2600 },
    ]);
  });

  it('moves to the next card until the session reaches the finished state', () => {
    expect(getNextStudyStep({ currentIndex: 0, cardCount: 3 })).toEqual({
      nextIndex: 1,
      finished: false,
    });

    expect(getNextStudyStep({ currentIndex: 2, cardCount: 3 })).toEqual({
      nextIndex: 2,
      finished: true,
    });
  });

  it('builds launch paths for targeted review drills', () => {
    expect(
      buildPracticeLaunchPath({
        deckId: 'zhongkao',
        mode: 'REVIEW',
        cardIds: ['card-4', 'card-2'],
      })
    ).toBe('/rebuild/study/zhongkao?mode=REVIEW&cards=card-4%2Ccard-2');
  });

  it('builds mixed practice steps so a session is not only flashcards', () => {
    expect(
      buildPracticeSteps({
        mode: 'LEARN',
        cards: new Array(4).fill(null).map((_, index) => ({ id: `card-${index}`, answer: `meaning-${index}` })),
      }).map((step) => step.kind)
    ).toEqual(['flashcard', 'choice', 'spelling', 'cloze']);
  });

  it('builds a mission summary for targeted review sessions', () => {
    expect(
      buildStudyMissionSummary({
        mode: 'REVIEW',
        totalCards: 4,
        currentIndex: 2,
        decisions: [
          { cardId: 'card-1', remembered: true, elapsedMs: 1200 },
          { cardId: 'card-2', remembered: false, elapsedMs: 1800 },
        ],
      })
    ).toEqual({
      missionTitle: '复习攻坚任务',
      progressLabel: '已完成 2 / 4 张',
      remainingLabel: '还差 2 张完成本轮复习',
      accuracyLabel: '当前命中率 50%',
      completionRatio: 50,
    });
  });

  it('builds a mission summary for learn sessions before answers are submitted', () => {
    expect(
      buildStudyMissionSummary({
        mode: 'LEARN',
        totalCards: 5,
        currentIndex: 0,
        decisions: [],
      })
    ).toEqual({
      missionTitle: '新词推进任务',
      progressLabel: '已完成 0 / 5 张',
      remainingLabel: '还差 5 张推进当前单元',
      accuracyLabel: '当前命中率 暂无',
      completionRatio: 0,
    });
  });

  it('builds a completion summary after a study mission is submitted', () => {
    expect(
      buildStudyCompletionSummary({
        mode: 'REVIEW',
        reviewCount: 4,
        masteredCardCount: 18,
        unlockedUnitIndex: 2,
        decisions: [
          { cardId: 'card-1', remembered: true, elapsedMs: 1200 },
          { cardId: 'card-2', remembered: false, elapsedMs: 1800 },
          { cardId: 'card-3', remembered: true, elapsedMs: 1500 },
          { cardId: 'card-4', remembered: true, elapsedMs: 1600 },
        ],
      })
    ).toEqual({
      title: '复习攻坚完成',
      statsLabel: '本轮命中 3 / 4',
      accuracyLabel: '综合命中率 75%',
      progressLabel: '累计掌握 18 张卡片',
      nextActionLabel: '下一步建议回到错词本继续压高风险词',
    });
  });

  it('builds choice options with the correct meaning included', () => {
    const options = buildChoiceOptions({
      cards: [
        { id: 'card-1', answer: '放弃' },
        { id: 'card-2', answer: '能力' },
        { id: 'card-3', answer: '吸收' },
        { id: 'card-4', answer: '接受' },
      ],
      currentCardId: 'card-1',
    });

    expect(options).toHaveLength(4);
    expect(options).toContain('放弃');
  });

  it('checks spelling answers with case-insensitive normalization', () => {
    expect(checkSpellingAnswer({ expected: 'Abandon', input: ' abandon ' })).toBe(true);
    expect(checkSpellingAnswer({ expected: 'Abandon', input: 'ability' })).toBe(false);
  });

  it('builds cloze text from example sentences', () => {
    expect(buildClozeText({
      sentence: 'We should abandon the bad habit before the exam.',
      word: 'abandon',
    })).toBe('We should ____ the bad habit before the exam.');
  });

  it('detects speech synthesis availability from browser capabilities', () => {
    expect(canUseSpeechSynthesis({
      speechSynthesis: { speak: () => undefined, cancel: () => undefined },
      Utterance: class MockUtterance {
        lang = '';
        rate = 1;
        constructor(public text: string) {}
      },
    })).toBe(true);
    expect(canUseSpeechSynthesis({})).toBe(false);
  });

  it('speaks the vocabulary word with the configured locale when supported', () => {
    const spoken: Array<{ text: string; lang: string }> = [];
    class MockUtterance {
      text: string;
      lang = '';
      rate = 1;
      constructor(text: string) {
        this.text = text;
      }
    }

    const didSpeak = speakVocabularyWord({
      word: 'abandon',
      lang: 'en-GB',
      speechSynthesis: {
        cancel: () => undefined,
        speak: (utterance: { text: string; lang: string }) => {
          spoken.push({ text: utterance.text, lang: utterance.lang });
        },
      },
      Utterance: MockUtterance,
    });

    expect(didSpeak).toBe(true);
    expect(spoken).toEqual([{ text: 'abandon', lang: 'en-GB' }]);
  });
});
