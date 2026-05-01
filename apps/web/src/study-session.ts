import type { ReviewRating } from '../../../apps/api/src/services/study-service';

export interface StudyDecision {
  cardId: string;
  remembered: boolean;
  elapsedMs: number;
}

export type PracticeKind = 'flashcard' | 'choice' | 'spelling' | 'cloze';

interface PracticeCardLike {
  id: string;
  answer?: string;
}

export function buildPracticeSteps({
  mode,
  cards,
}: {
  mode: 'LEARN' | 'REVIEW';
  cards: PracticeCardLike[];
}) {
  const kinds: PracticeKind[] = mode === 'REVIEW'
    ? ['choice', 'spelling', 'cloze', 'flashcard']
    : ['flashcard', 'choice', 'spelling', 'cloze'];

  return cards.map((card, index) => ({
    cardId: card.id,
    kind: kinds[index % kinds.length],
  }));
}

export function buildChoiceOptions({
  cards,
  currentCardId,
}: {
  cards: PracticeCardLike[];
  currentCardId: string;
}) {
  const currentCard = cards.find((card) => card.id === currentCardId);
  const correctAnswer = currentCard?.answer || '';
  const distractors = cards
    .filter((card) => card.id !== currentCardId && card.answer && card.answer !== correctAnswer)
    .map((card) => card.answer as string)
    .slice(0, 3);

  return [correctAnswer, ...distractors].filter(Boolean);
}

export function checkSpellingAnswer({
  expected,
  input,
}: {
  expected: string;
  input: string;
}) {
  const normalize = (value: string) => value.trim().toLowerCase().replace(/\s+/g, ' ');
  return normalize(expected) === normalize(input);
}

export function buildClozeText({
  sentence,
  word,
}: {
  sentence: string;
  word: string;
}) {
  if (!sentence.trim() || !word.trim()) {
    return sentence;
  }

  const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return sentence.replace(new RegExp(`\\b${escapedWord}\\b`, 'i'), '____');
}

interface SpeechCapabilityInput {
  speechSynthesis?: { speak: (utterance: unknown) => void; cancel: () => void };
  Utterance?: new (text: string) => { text: string; lang: string; rate: number };
}

export function canUseSpeechSynthesis(input: SpeechCapabilityInput) {
  return Boolean(input.speechSynthesis && input.Utterance);
}

export function speakVocabularyWord({
  word,
  lang = 'en-US',
  speechSynthesis,
  Utterance,
}: {
  word: string;
  lang?: string;
} & SpeechCapabilityInput) {
  if (!word.trim() || !canUseSpeechSynthesis({ speechSynthesis, Utterance })) {
    return false;
  }

  const utterance = new Utterance!(word);
  utterance.lang = lang;
  utterance.rate = 0.9;
  speechSynthesis!.cancel();
  speechSynthesis!.speak(utterance);
  return true;
}

export function buildPracticeLaunchPath({
  deckId,
  mode,
  cardIds,
}: {
  deckId: string;
  mode: 'LEARN' | 'REVIEW';
  cardIds?: string[];
}) {
  const params = new URLSearchParams();
  if (mode !== 'LEARN') {
    params.set('mode', mode);
  }
  if (cardIds && cardIds.length > 0) {
    params.set('cards', cardIds.join(','));
  }

  const query = params.toString();
  return query ? `/rebuild/study/${deckId}?${query}` : `/rebuild/study/${deckId}`;
}

export function buildStudyReviewAnswers(decisions: StudyDecision[]) {
  return decisions.map((decision) => ({
    cardId: decision.cardId,
    isCorrect: decision.remembered,
    rating: (decision.remembered ? 'GOOD' : 'AGAIN') as ReviewRating,
    elapsedMs: decision.elapsedMs,
  }));
}

export function buildStudyMissionSummary({
  mode,
  totalCards,
  decisions,
}: {
  mode: 'LEARN' | 'REVIEW';
  totalCards: number;
  currentIndex: number;
  decisions: StudyDecision[];
}) {
  const completedCount = decisions.length;
  const remainingCount = Math.max(totalCards - completedCount, 0);
  const correctCount = decisions.filter((decision) => decision.remembered).length;
  const accuracyLabel =
    completedCount > 0 ? `当前命中率 ${Math.round((correctCount / completedCount) * 100)}%` : '当前命中率 暂无';

  return {
    missionTitle: mode === 'REVIEW' ? '复习攻坚任务' : '新词推进任务',
    progressLabel: `已完成 ${completedCount} / ${totalCards} 张`,
    remainingLabel:
      mode === 'REVIEW'
        ? `还差 ${remainingCount} 张完成本轮复习`
        : `还差 ${remainingCount} 张推进当前单元`,
    accuracyLabel,
    completionRatio: totalCards > 0 ? Math.round((completedCount / totalCards) * 100) : 0,
  };
}

export function buildStudyCompletionSummary({
  mode,
  reviewCount,
  masteredCardCount,
  unlockedUnitIndex,
  decisions,
}: {
  mode: 'LEARN' | 'REVIEW';
  reviewCount: number;
  masteredCardCount: number;
  unlockedUnitIndex: number;
  decisions: StudyDecision[];
}) {
  const correctCount = decisions.filter((decision) => decision.remembered).length;
  const accuracy = reviewCount > 0 ? Math.round((correctCount / reviewCount) * 100) : 0;

  return {
    title: mode === 'REVIEW' ? '复习攻坚完成' : '新词推进完成',
    statsLabel: `本轮命中 ${correctCount} / ${reviewCount}`,
    accuracyLabel: `综合命中率 ${accuracy}%`,
    progressLabel: `累计掌握 ${masteredCardCount} 张卡片`,
    nextActionLabel:
      mode === 'REVIEW'
        ? '下一步建议回到错词本继续压高风险词'
        : `下一步建议继续推进 Unit ${unlockedUnitIndex + 1}`,
  };
}

export function getNextStudyStep({
  currentIndex,
  cardCount,
}: {
  currentIndex: number;
  cardCount: number;
}) {
  if (currentIndex >= cardCount - 1) {
    return {
      nextIndex: Math.max(cardCount - 1, 0),
      finished: true,
    };
  }

  return {
    nextIndex: currentIndex + 1,
    finished: false,
  };
}

export function shouldRefreshStudyStateAfterSubmit({
  reviewCount,
  mode,
}: {
  reviewCount: number;
  unlockedUnitIndex: number;
  mode: 'LEARN' | 'REVIEW';
}) {
  return reviewCount > 0 && mode === 'LEARN';
}
