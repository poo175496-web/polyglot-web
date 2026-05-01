import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { BookOpen, CheckCircle2, ChevronRight, Layers3, LoaderCircle, RefreshCcw, Sparkles, Volume2, XCircle } from 'lucide-react';

import {
  createRebuildApiClient,
  type RebuildDeckDetail,
  type RebuildDeckSummary,
} from '../../apps/web/src/api/client';
import {
  loadRebuildDashboardData,
  loadRebuildStudyData,
} from '../../apps/web/src/loaders';
import {
  buildDeckDetailViewModel,
  buildMistakesViewModel,
  buildReviewViewModel,
} from '../../apps/web/src/view-models';
import { getDeckPresentation } from '../../apps/web/src/presentation';
import {
  buildChoiceOptions,
  buildStudyCompletionSummary,
  buildClozeText,
  buildPracticeLaunchPath,
  buildStudyMissionSummary,
  buildPracticeSteps,
  buildStudyReviewAnswers,
  canUseSpeechSynthesis,
  speakVocabularyWord,
  checkSpellingAnswer,
  getNextStudyStep,
  shouldRefreshStudyStateAfterSubmit,
} from '../../apps/web/src/study-session';
import { useStore } from '@/store/useStore';

const api = createRebuildApiClient({
  baseUrl: import.meta.env.VITE_REBUILD_API_BASE_URL || '',
});

type WorkspaceMode = 'dashboard' | 'decks' | 'deck-detail' | 'study' | 'review' | 'mistakes';

interface DashboardModel {
  hero: {
    title: string;
    subtitle: string;
    primaryAction: { label: string; href: string };
    secondaryAction: { label: string; href: string };
  };
  stats: {
    dueReviews: number;
    trackedDecks: number;
    todayReviewedLabel: string;
    accuracyLabel: string;
    weakDeckLabel: string;
  };
  deckCards: Array<{ id: string; title: string; progressLabel: string }>;
}

interface StudyModel {
  headerTitle: string;
  activeUnitLabel: string;
  cardCountLabel: string;
  unlockedSummary: string;
  progressPercentLabel: string;
  sessionId: string;
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

interface DeckDetailModel {
  title: string;
  summary: string;
  unitCards: Array<{
    id: string;
    title: string;
    status: 'completed' | 'available' | 'locked';
  }>;
}

interface ReviewPageModel {
  totalDue: number;
  summary: {
    totalDecks: number;
    primaryDeckLabel: string;
    primaryBatchLaunch: {
      deckId: string;
      cardIds: string[];
    } | null;
  };
  deckSignals: Array<{
    deckId: string;
    count: number;
    batchCardIds: string[];
  }>;
  cards: Array<{
    id: string;
    deckId: string;
    title: string;
    subtitle: string;
    dueLabel: string;
  }>;
}

interface MistakesPageModel {
  totalMistakes: number;
  summary: {
    highRiskCount: number;
    watchingCount: number;
    focusDeckLabel: string;
    focusLaunch: {
      deckId: string;
      cardIds: string[];
    } | null;
  };
  cards: Array<{
    id: string;
    deckId: string;
    title: string;
    subtitle: string;
    wrongCountLabel: string;
    riskLabel: string;
  }>;
}

export default function RebuildWorkspace({ mode }: { mode: WorkspaceMode }) {
  const { deckId } = useParams();
  const location = useLocation();
  const user = useStore((state) => state.user);
  const userId = user?.id || 'guest';

  const [dashboard, setDashboard] = useState<DashboardModel | null>(null);
  const [decks, setDecks] = useState<RebuildDeckSummary[] | null>(null);
  const [deckDetail, setDeckDetail] = useState<DeckDetailModel | null>(null);
  const [study, setStudy] = useState<StudyModel | null>(null);
  const [reviewPage, setReviewPage] = useState<ReviewPageModel | null>(null);
  const [mistakesPage, setMistakesPage] = useState<MistakesPageModel | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [choiceFeedback, setChoiceFeedback] = useState<{ selected: string; correct: boolean } | null>(null);
  const [spellingInput, setSpellingInput] = useState('');
  const [spellingFeedback, setSpellingFeedback] = useState<{ correct: boolean } | null>(null);
  const [reviewDecisions, setReviewDecisions] = useState<
    Array<{ cardId: string; remembered: boolean; elapsedMs: number }>
  >([]);
  const [submittingReview, setSubmittingReview] = useState(false);
  const [reviewResult, setReviewResult] = useState<{
    reviewCount: number;
    unlockedUnitIndex: number;
    masteredCardCount: number;
    decisions: Array<{ cardId: string; remembered: boolean; elapsedMs: number }>;
    mode: 'LEARN' | 'REVIEW';
  } | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const pageTitle = useMemo(() => {
    if (mode === 'dashboard') return '新学习站仪表盘';
    if (mode === 'decks') return '新课程库';
    if (mode === 'deck-detail') return '课程详情';
    if (mode === 'review') return '今日复习';
    if (mode === 'mistakes') return '错词本';
    return '新学习页';
  }, [mode]);
  const pageLead = useMemo(() => {
    if (mode === 'dashboard') {
      return '不再是后台面板，而是把主路线推进、复习压力和薄弱词书放到同一个指挥台里。';
    }
    if (mode === 'decks') {
      return '把中考、高考、雅思、托福做成清晰的考试路线入口，而不是一排普通课程卡。';
    }
    if (mode === 'deck-detail') {
      return '每个单元都作为路线阶段呈现，前进感和解锁感必须一眼可见。';
    }
    if (mode === 'study') {
      return '把训练主舞台收拢到一个焦点区域，让你进入页面就知道现在该做什么。';
    }
    if (mode === 'review') {
      return '先消灭今天最该处理的复习压力，再切换到其他路线，不浪费动作。';
    }
    return '把高风险错词和观察错词分开处理，让纠错更像攻坚战，而不是被动翻列表。';
  }, [mode]);

  const studyLaunch = useMemo(() => {
    const params = new URLSearchParams(location.search);
    const cardIds = (params.get('cards') || '')
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);

    return {
      mode: params.get('mode') === 'REVIEW' ? ('REVIEW' as const) : ('LEARN' as const),
      cardIds,
    };
  }, [location.search]);
  const featuredDeckPresentation = useMemo(() => {
    const featuredDeckId = deckId || dashboard?.deckCards[0]?.id || decks?.[0]?.id || 'zhongkao';
    return getDeckPresentation(featuredDeckId);
  }, [dashboard?.deckCards, deckId, decks]);
  const heroPrimaryAction = dashboard?.hero.primaryAction || {
    label: mode === 'review' ? '连续进入复习' : '直接开始学习',
    href: mode === 'review' ? '/rebuild/review' : `/rebuild/study/${deckId || 'zhongkao'}`,
  };
  const heroSecondaryAction = dashboard?.hero.secondaryAction || {
    label: mode === 'mistakes' ? '查看错词本' : '返回仪表盘',
    href: mode === 'mistakes' ? '/rebuild/mistakes' : '/rebuild/dashboard',
  };

  function resetPracticeUiState() {
    setRevealed(false);
    setChoiceFeedback(null);
    setSpellingInput('');
    setSpellingFeedback(null);
  }

  useEffect(() => {
    let cancelled = false;

    async function run() {
      setLoading(true);
      setError('');
      setReviewResult(null);
      setCurrentCardIndex(0);
      resetPracticeUiState();
      setReviewDecisions([]);

      try {
        if (mode === 'dashboard') {
          const model = await loadRebuildDashboardData(api, userId);
          if (!cancelled) {
            setDashboard(model as DashboardModel);
          }
        }

        if (mode === 'decks') {
          const deckList = await api.getDecks(userId);
          if (!cancelled) {
            setDecks(deckList);
          }
        }

        if (mode === 'deck-detail' && deckId) {
          const detail = await api.getDeckDetail(userId, deckId);
          if (!cancelled) {
            setDeckDetail(
              buildDeckDetailViewModel({
                deckDetail: detail as RebuildDeckDetail,
              }) as DeckDetailModel
            );
          }
        }

        if (mode === 'study' && deckId) {
          const model = await loadRebuildStudyData(api, {
            userId,
            deckId,
            mode: studyLaunch.mode,
            cardIds: studyLaunch.cardIds,
          });
          if (!cancelled) {
            setStudy(model as StudyModel);
          }
        }

        if (mode === 'review') {
          const reviews = await api.getDueReviews(userId);
          if (!cancelled) {
            setReviewPage(buildReviewViewModel({ reviews }) as ReviewPageModel);
          }
        }

        if (mode === 'mistakes') {
          const mistakes = await api.getMistakes(userId);
          if (!cancelled) {
            setMistakesPage(buildMistakesViewModel({ mistakes }) as MistakesPageModel);
          }
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : '加载新学习站失败');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void run();

    return () => {
      cancelled = true;
    };
  }, [deckId, mode, studyLaunch.cardIds, studyLaunch.mode, userId]);

  const practiceSteps = useMemo(
    () => (study ? buildPracticeSteps({ mode: studyLaunch.mode, cards: study.cards }) : []),
    [study, studyLaunch.mode]
  );
  const activeStudyCard = study?.cards[currentCardIndex] ?? null;
  const activePracticeKind = practiceSteps[currentCardIndex]?.kind || 'flashcard';
  const missionSummary = useMemo(
    () =>
      study
        ? buildStudyMissionSummary({
            mode: studyLaunch.mode,
            totalCards: study.cards.length,
            currentIndex: currentCardIndex,
            decisions: reviewDecisions,
          })
        : null,
    [currentCardIndex, reviewDecisions, study, studyLaunch.mode]
  );
  const completionSummary = useMemo(
    () =>
      reviewResult
        ? buildStudyCompletionSummary({
            mode: reviewResult.mode,
            reviewCount: reviewResult.reviewCount,
            masteredCardCount: reviewResult.masteredCardCount,
            unlockedUnitIndex: reviewResult.unlockedUnitIndex,
            decisions: reviewResult.decisions,
          })
        : null,
    [reviewResult]
  );
  const choiceOptions = useMemo(() => {
    if (!study || !activeStudyCard || activePracticeKind !== 'choice') {
      return [];
    }
    return buildChoiceOptions({
      cards: study.cards,
      currentCardId: activeStudyCard.id,
    });
  }, [activePracticeKind, activeStudyCard, study]);
  const audioAvailable = useMemo(
    () =>
      typeof window !== 'undefined' &&
      canUseSpeechSynthesis({
        speechSynthesis: window.speechSynthesis,
        Utterance: window.SpeechSynthesisUtterance,
      }),
    []
  );
  const mistakeRiskPanels = useMemo(() => {
    const cards = mistakesPage?.cards || [];
    return {
      highRisk: cards.filter((card) => card.riskLabel === '高风险'),
      watching: cards.filter((card) => card.riskLabel !== '高风险'),
    };
  }, [mistakesPage]);

  async function handleStudyDecision(remembered: boolean) {
    if (!study || !activeStudyCard || submittingReview) {
      return;
    }

    const nextDecisions = [
      ...reviewDecisions,
      {
        cardId: activeStudyCard.id,
        remembered,
        elapsedMs: 1500 + currentCardIndex * 120,
      },
    ];

    setReviewDecisions(nextDecisions);
    resetPracticeUiState();

    const nextStep = getNextStudyStep({
      currentIndex: currentCardIndex,
      cardCount: study.cards.length,
    });

    if (!nextStep.finished) {
      setCurrentCardIndex(nextStep.nextIndex);
      return;
    }

    setSubmittingReview(true);
    setError('');

    try {
      const result = await api.submitStudySessionReviews({
        userId,
        sessionId: study.sessionId,
        answers: buildStudyReviewAnswers(nextDecisions),
      });

      setReviewResult({
        reviewCount: result.reviewLogs.length,
        unlockedUnitIndex: result.progress.unlockedUnitIndex,
        masteredCardCount: result.progress.masteredCardCount,
        decisions: nextDecisions,
        mode: studyLaunch.mode,
      });

      if (shouldRefreshStudyStateAfterSubmit({
        reviewCount: result.reviewLogs.length,
        unlockedUnitIndex: result.progress.unlockedUnitIndex,
        mode: studyLaunch.mode,
      })) {
        const refreshed = await loadRebuildStudyData(api, {
          userId,
          deckId: deckId || 'zhongkao',
          mode: studyLaunch.mode,
          cardIds: studyLaunch.cardIds,
        });
        setStudy(refreshed as StudyModel);
        setCurrentCardIndex(0);
        resetPracticeUiState();
        setReviewDecisions([]);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : '提交学习结果失败');
    } finally {
      setSubmittingReview(false);
    }
  }

  function handleChoiceSelect(option: string) {
    if (!activeStudyCard || submittingReview || choiceFeedback) {
      return;
    }

    setChoiceFeedback({
      selected: option,
      correct: option === (activeStudyCard.answer || ''),
    });
  }

  function handleSpellingCheck() {
    if (!activeStudyCard || submittingReview || spellingFeedback) {
      return;
    }

    setSpellingFeedback({
      correct: checkSpellingAnswer({
        expected: activeStudyCard.vocabularyWord || activeStudyCard.prompt || '',
        input: spellingInput,
      }),
    });
  }

  function handleSpeakCurrentWord() {
    if (!activeStudyCard || typeof window === 'undefined') {
      return;
    }

    speakVocabularyWord({
      word: activeStudyCard.vocabularyWord || activeStudyCard.prompt || '',
      lang: 'en-US',
      speechSynthesis: window.speechSynthesis,
      Utterance: window.SpeechSynthesisUtterance,
    });
  }

  const studyProgressPercent = study ? Math.round(((currentCardIndex + 1) / study.cards.length) * 100) : 0;

  return (
    <div className="relative space-y-8 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div
        className="aurora-shift pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${featuredDeckPresentation.accentFrom} 0%, transparent 72%)` }}
      />
      <div
        className="flagship-float pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${featuredDeckPresentation.accentTo} 0%, transparent 74%)` }}
      />
      <div className="premium-panel relative overflow-hidden rounded-[2.9rem] px-8 py-10 text-white sm:px-10">
        <div className="hero-spotlight pointer-events-none absolute -left-16 top-0 h-72 w-72 rounded-full blur-3xl" />
        <div
          className="pointer-events-none absolute -right-20 top-12 h-80 w-80 rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${featuredDeckPresentation.accentTo} 0%, transparent 74%)` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.02),transparent_38%,rgba(56,189,248,0.06)_100%)]" />
        <div className="relative grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-4xl">
            <div
              className="inline-flex items-center gap-3 rounded-full border px-4 py-2 text-[11px] font-black uppercase tracking-[0.35em]"
              style={{
                borderColor: `${featuredDeckPresentation.primaryColor}33`,
                backgroundColor: `${featuredDeckPresentation.primaryColor}1A`,
                color: featuredDeckPresentation.primaryColor,
              }}
            >
              <Sparkles className="h-4 w-4" />
              {featuredDeckPresentation.accentLabel}
            </div>
            <p className="mt-6 text-sm font-black uppercase tracking-[0.32em]" style={{ color: featuredDeckPresentation.primaryColor }}>
              {featuredDeckPresentation.accentWord}
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[0.96] text-white sm:text-6xl xl:text-[4.8rem]">
              {pageTitle}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">{pageLead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                className="rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-100"
                to={heroPrimaryAction.href}
              >
                {heroPrimaryAction.label}
              </Link>
              <Link
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-300/30 hover:bg-white/10"
                to={heroSecondaryAction.href}
              >
                {heroSecondaryAction.label}
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              <Link className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-cyan-300/30 hover:bg-white/10" to="/rebuild/dashboard">
                仪表盘
              </Link>
              <Link className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-cyan-300/30 hover:bg-white/10" to="/rebuild/decks">
                课程库
              </Link>
              <Link className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-cyan-300/30 hover:bg-white/10" to="/rebuild/study/zhongkao">
                学习页
              </Link>
              <Link className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-cyan-300/30 hover:bg-white/10" to="/rebuild/review">
                今日复习
              </Link>
              <Link className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-cyan-300/30 hover:bg-white/10" to="/rebuild/mistakes">
                错词本
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-5">
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-slate-500">Runtime</p>
              <p className="mt-3 text-3xl font-black text-white">Real Data</p>
              <p className="mt-2 text-sm leading-7 text-slate-400">学习会话、复习记录、错词压力都由真实链路驱动，不再是展示假面板。</p>
            </div>
            <div className="rounded-[2rem] border border-cyan-300/15 bg-cyan-300/10 p-5">
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-cyan-200">Focus</p>
              <p className="mt-3 text-3xl font-black text-white">Single Route</p>
              <p className="mt-2 text-sm leading-7 text-cyan-100/80">每个页面都应该只强调一个核心动作，而不是把所有功能同时抛给你。</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-5">
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-slate-500">Quality</p>
              <p className="mt-3 text-3xl font-black text-white">Premium</p>
              <p className="mt-2 text-sm leading-7 text-slate-400">这次前端不是再叠玻璃卡，而是做成真正像学习产品的叙事和舞台。</p>
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="signal-ring glass-panel flex min-h-60 items-center justify-center rounded-[2.5rem]">
          <div className="flex items-center gap-3 text-slate-300">
            <LoaderCircle className="h-5 w-5 animate-spin" />
            正在加载新学习站数据...
          </div>
        </div>
      ) : error ? (
        <div className="signal-ring rounded-[2.5rem] border border-rose-400/20 bg-rose-500/10 p-6 text-rose-100">
          <div className="flex items-center gap-3 font-bold text-rose-100">
            <RefreshCcw className="h-5 w-5" />
            {error}
          </div>
          <p className="mt-2 text-sm text-rose-100/80">请确认新 API 已启动，并检查 `VITE_REBUILD_API_BASE_URL` 是否正确。</p>
        </div>
      ) : null}

      {!loading && !error && mode === 'dashboard' && dashboard ? (
        <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
          <div className="premium-panel relative overflow-hidden rounded-[2.75rem] p-8 sm:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.02),transparent_40%,rgba(129,140,248,0.08)_100%)]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.3em] text-cyan-200">
                <Sparkles className="h-4 w-4" />
                Command Center
              </div>
              <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
                <div className="max-w-3xl">
                  <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl">{dashboard.hero.title}</h2>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">{dashboard.hero.subtitle}</p>
                </div>
                <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 px-5 py-4">
                  <p className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-200">Primary Route</p>
                  <p className="mt-2 text-2xl font-black text-white">{featuredDeckPresentation.accentWord}</p>
                </div>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-4">
                <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-5">
                  <p className="text-[11px] font-black uppercase tracking-[0.24em] text-slate-500">Due</p>
                  <p className="mt-3 text-4xl font-black text-white">{dashboard.stats.dueReviews}</p>
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-5">
                  <p className="text-[11px] font-black uppercase tracking-[0.24em] text-slate-500">Decks</p>
                  <p className="mt-3 text-4xl font-black text-white">{dashboard.stats.trackedDecks}</p>
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-5">
                  <p className="text-[11px] font-black uppercase tracking-[0.24em] text-slate-500">Today</p>
                  <p className="mt-3 text-base font-black text-white">{dashboard.stats.todayReviewedLabel}</p>
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-5">
                  <p className="text-[11px] font-black uppercase tracking-[0.24em] text-slate-500">Accuracy</p>
                  <p className="mt-3 text-base font-black text-white">{dashboard.stats.accuracyLabel}</p>
                </div>
              </div>
              <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                  <p className="text-[11px] font-black uppercase tracking-[0.24em] text-slate-500">Today Focus</p>
                  <p className="mt-3 text-2xl font-black text-white">{dashboard.stats.weakDeckLabel}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-400">先处理最弱路线，再回到主课程推进新单元，整个学习节奏会更稳。</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link to={dashboard.hero.primaryAction.href} className="rounded-full bg-white px-4 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-100">
                      {dashboard.hero.primaryAction.label}
                    </Link>
                    <Link to={dashboard.hero.secondaryAction.href} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-bold text-slate-200 transition hover:border-cyan-300/30 hover:bg-white/[0.08]">
                      {dashboard.hero.secondaryAction.label}
                    </Link>
                  </div>
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                  <p className="text-[11px] font-black uppercase tracking-[0.24em] text-slate-500">System Readout</p>
                  <div className="mt-4 space-y-4">
                    <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.05] p-4">
                      <p className="text-sm font-bold text-white">真实学习数据</p>
                      <p className="mt-2 text-sm leading-7 text-slate-400">前端状态、复习任务、错词压力全部来自实际 API 链路。</p>
                    </div>
                    <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.05] p-4">
                      <p className="text-sm font-bold text-white">连续训练主路径</p>
                      <p className="mt-2 text-sm leading-7 text-slate-400">把学习路线收拢到少数明确动作，不再像后台一样四处跳转。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="premium-panel rounded-[2.5rem] p-6">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">Route Stack</p>
              <div className="mt-5 space-y-3">
                {dashboard.deckCards.map((deck, index) => (
                  <Link
                    key={deck.id}
                    to={`/rebuild/study/${deck.id}`}
                    className="block rounded-[1.9rem] border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:bg-white/[0.08]"
                    style={{ boxShadow: `inset 0 0 0 1px ${getDeckPresentation(deck.id).primaryColor}15` }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[11px] font-black uppercase tracking-[0.24em]" style={{ color: getDeckPresentation(deck.id).primaryColor }}>
                          Route {String(index + 1).padStart(2, '0')}
                        </p>
                        <p className="mt-3 text-xl font-black text-white">{deck.title}</p>
                        <p className="mt-2 text-sm leading-7 text-slate-400">{deck.progressLabel}</p>
                      </div>
                      <ChevronRight className="mt-1 h-5 w-5 text-slate-500" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {!loading && !error && mode === 'decks' && decks ? (
        <div className="grid gap-6 xl:grid-cols-[0.78fr_1.22fr]">
          <div className="premium-panel rounded-[2.5rem] p-7">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">Route Overview</p>
            <h2 className="mt-4 text-4xl font-black text-white">考试路线库</h2>
            <p className="mt-4 text-sm leading-8 text-slate-400">
              这里不是普通课程列表，而是四条不同目标路线。你应该一眼看到自己现在在哪条线、还差多少、下一步该进哪门。
            </p>
            <div className="mt-8 space-y-4">
              {decks.map((deck) => (
                <div key={deck.id} className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-[11px] font-black uppercase tracking-[0.24em]" style={{ color: getDeckPresentation(deck.id).primaryColor }}>
                    {getDeckPresentation(deck.id).accentLabel}
                  </p>
                  <p className="mt-2 text-lg font-black text-white">{deck.title}</p>
                  <p className="mt-2 text-sm text-slate-400">
                    已开放 {Math.min(deck.unlockedUnitIndex + 1, deck.unitCount)} / {deck.unitCount} 单元
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
          {decks.map((deck) => (
            <Link
              key={deck.id}
              to={`/rebuild/decks/${deck.id}`}
              className="group premium-panel relative overflow-hidden rounded-[2.5rem] p-7 transition duration-300 hover:-translate-y-1.5"
            >
              <div
                className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at top left, ${getDeckPresentation(deck.id).accentFrom}, transparent 28%), radial-gradient(circle at bottom right, ${getDeckPresentation(deck.id).accentTo}, transparent 30%)`,
                }}
              />
              <div className="relative flex items-center justify-between">
                <div
                  className="rounded-[1.6rem] border p-4"
                  style={{
                    borderColor: `${getDeckPresentation(deck.id).primaryColor}33`,
                    backgroundColor: `${getDeckPresentation(deck.id).primaryColor}1A`,
                    color: getDeckPresentation(deck.id).primaryColor,
                  }}
                >
                  <BookOpen className="h-6 w-6" />
                </div>
                <ChevronRight className="h-5 w-5 text-slate-500 transition" style={{ color: getDeckPresentation(deck.id).primaryColor }} />
              </div>
              <div className="relative">
                <p className="mt-8 text-[11px] font-black uppercase tracking-[0.28em]" style={{ color: getDeckPresentation(deck.id).primaryColor }}>
                  {getDeckPresentation(deck.id).accentWord}
                </p>
                <h2 className="mt-4 text-4xl font-black leading-tight text-white">{deck.title}</h2>
              </div>
              <div className="relative mt-8 flex items-center gap-4 text-sm text-slate-400">
                <span className="inline-flex items-center gap-2 text-slate-300">
                  <Layers3 className="h-4 w-4" />
                  {deck.unitCount} 单元
                </span>
                <span>已开放 {Math.min(deck.unlockedUnitIndex + 1, deck.unitCount)} 单元</span>
              </div>
              <div className="relative mt-6 h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${getDeckPresentation(deck.id).primaryColor} 0%, ${getDeckPresentation(deck.id).secondaryColor} 100%)`,
                    width: `${(Math.min(deck.unlockedUnitIndex + 1, deck.unitCount) / deck.unitCount) * 100}%`,
                  }}
                />
              </div>
              <div className="relative mt-8 flex items-center justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">Route Status</p>
                  <p className="mt-2 text-sm font-bold text-slate-300">进入这条路线的下一阶段</p>
                </div>
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-200 transition group-hover:bg-cyan-300/15">
                  进入学习
                </span>
              </div>
            </Link>
          ))}
          </div>
        </div>
      ) : null}

      {!loading && !error && mode === 'deck-detail' && deckDetail ? (
        <div className="space-y-6">
          <div className="premium-panel relative overflow-hidden rounded-[2.7rem] p-8 sm:p-10">
            <div
              className="absolute inset-0 aurora-shift"
              style={{
                background: `radial-gradient(circle at top left, ${featuredDeckPresentation.accentFrom}, transparent 26%), radial-gradient(circle at bottom right, ${featuredDeckPresentation.accentTo}, transparent 32%)`,
              }}
            />
            <div className="relative">
              <div className="grid gap-6 xl:grid-cols-[1fr_0.72fr]">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">Course Mission</p>
                  <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">{deckDetail.title}</h2>
                  <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-300">{deckDetail.summary}</p>
                  <p className="mt-5 text-sm font-black uppercase tracking-[0.28em]" style={{ color: featuredDeckPresentation.primaryColor }}>
                    {featuredDeckPresentation.accentLabel} / {featuredDeckPresentation.accentWord}
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                  <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-5">
                    <p className="text-[11px] font-black uppercase tracking-[0.24em] text-slate-500">Unlocked</p>
                    <p className="mt-3 text-4xl font-black text-white">
                      {deckDetail.unitCards.filter((unit) => unit.status !== 'locked').length}
                    </p>
                    <p className="mt-2 text-sm text-slate-400">已进入的阶段数</p>
                  </div>
                  <div className="rounded-[1.8rem] border border-cyan-300/20 bg-cyan-300/10 p-5">
                    <p className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-200">Next Stage</p>
                    <p className="mt-3 text-xl font-black text-white">
                      {deckDetail.unitCards.find((unit) => unit.status === 'available')?.title || '继续复习已完成阶段'}
                    </p>
                    <p className="mt-2 text-sm text-cyan-100/80">路线会随着完成度继续解锁</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {deckDetail.unitCards.map((unit, index) => (
              <div
                key={unit.id}
                className={`premium-panel relative overflow-hidden rounded-[2.1rem] p-6 ${
                  unit.status === 'completed'
                    ? 'border border-emerald-300/20 bg-emerald-400/10'
                    : unit.status === 'available'
                      ? 'border border-cyan-300/20 bg-cyan-400/10'
                      : 'border border-white/10 bg-slate-950/55'
                }`}
              >
                <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-black uppercase tracking-[0.22em] text-slate-400">
                  Stage {index + 1}
                </div>
                <p className="text-lg font-black text-white">{unit.title}</p>
                <p className="mt-2 text-sm font-bold text-slate-300">
                  {unit.status === 'completed' ? '已完成' : unit.status === 'available' ? '可学习' : '未解锁'}
                </p>
                <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`h-full rounded-full ${
                      unit.status === 'completed'
                        ? 'bg-gradient-to-r from-emerald-300 to-emerald-500'
                        : unit.status === 'available'
                          ? 'bg-gradient-to-r from-cyan-300 to-indigo-400'
                          : 'bg-white/10'
                    }`}
                    style={{ width: unit.status === 'completed' ? '100%' : unit.status === 'available' ? '72%' : '18%' }}
                  />
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {unit.status === 'completed'
                    ? '这一阶段已经掌握，可以继续拉高复习准确率。'
                    : unit.status === 'available'
                      ? '当前阶段已开放，建议现在进入并完成这一轮训练。'
                      : '继续完成前置阶段，系统会自动为你解锁后续任务。'}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {!loading && !error && mode === 'study' && study ? (
        <div className="grid gap-6 xl:grid-cols-[0.72fr_1.18fr_0.72fr]">
          <div className="space-y-6">
            {activeStudyCard ? (
              <div className="premium-panel rounded-[2.6rem] p-6">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">Word Rail</p>
                <h3 className="mt-4 text-4xl font-black text-white">
                  {activeStudyCard.vocabularyWord || activeStudyCard.prompt || activeStudyCard.id}
                </h3>
                <div className="mt-5 grid gap-4">
                  <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-4">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">音标</p>
                    <p className="mt-3 text-sm font-bold text-slate-100">{activeStudyCard.phonetic || '待补充'}</p>
                  </div>
                  <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-4">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">词根</p>
                    <p className="mt-3 text-sm font-bold text-slate-100">{activeStudyCard.root || '待补充'}</p>
                  </div>
                </div>
                <div className="mt-4 rounded-[1.9rem] border border-cyan-300/10 bg-cyan-300/10 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">例句语境</p>
                  <p className="mt-3 text-sm leading-7 text-slate-100">{activeStudyCard.example || '当前单词暂未配置例句。'}</p>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={handleSpeakCurrentWord}
                    disabled={!audioAvailable}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-cyan-100 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <Volume2 className="h-4 w-4" />
                    播放发音
                  </button>
                  {activeStudyCard.theme ? (
                    <span className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
                      主题: {activeStudyCard.theme}
                    </span>
                  ) : null}
                </div>
              </div>
            ) : null}
            {!audioAvailable ? (
              <div className="rounded-[2rem] border border-amber-300/20 bg-amber-400/10 p-5 text-sm font-bold text-amber-200">
                当前浏览器不支持语音播放，建议使用系统浏览器或桌面浏览器体验完整训练流程。
              </div>
            ) : null}
          </div>
          <div className="space-y-6">
            <div className="premium-panel relative overflow-hidden rounded-[2.75rem] p-8 sm:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(129,140,248,0.18),transparent_26%)]" />
              <div className="relative">
                <p className="text-xs font-black uppercase tracking-[0.32em] text-slate-500">Study Stage</p>
                <h2 className="mt-4 text-4xl font-black leading-tight text-white">{study.headerTitle}</h2>
                <p className="mt-4 text-lg font-bold text-cyan-200">{study.activeUnitLabel}</p>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">{study.unlockedSummary}</p>
                <p className="mt-4 text-sm font-black uppercase tracking-[0.24em] text-slate-400">{study.progressPercentLabel}</p>
              </div>
              <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 transition-all duration-500"
                  style={{ width: `${studyProgressPercent}%` }}
                />
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-slate-200">
                  {activePracticeKind === 'flashcard'
                    ? 'Flashcard'
                    : activePracticeKind === 'choice'
                      ? 'Choice Drill'
                      : activePracticeKind === 'spelling'
                        ? 'Spelling Drill'
                        : 'Cloze Drill'}
                </span>
                <span className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-xs font-bold text-cyan-200">
                  {studyLaunch.mode === 'REVIEW' ? '复习强化模式' : '新词掌握模式'}
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-bold text-slate-300">
                  当前进度 {Math.min(currentCardIndex + 1, study.cards.length)} / {study.cards.length}
                </span>
              </div>
            </div>
            <div className="premium-panel rounded-[2.75rem] p-6 sm:p-8">
              {activeStudyCard ? (
                <div className="space-y-4">
                  {activePracticeKind === 'flashcard' ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setRevealed((value) => !value)}
                        className="w-full rounded-[2.2rem] border border-white/10 bg-white/[0.05] p-7 text-left transition hover:border-cyan-300/20 hover:bg-white/[0.08]"
                      >
                        <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-200">Flashcard</p>
                        <h3 className="mt-4 text-4xl font-black text-white">
                          {activeStudyCard.vocabularyWord || activeStudyCard.prompt || activeStudyCard.id}
                        </h3>
                        <p className="mt-5 text-base leading-8 text-slate-300">
                          {revealed
                            ? activeStudyCard.answer || '当前卡片暂无答案内容'
                            : '先在脑子里完整回忆，再翻开答案，然后判断自己是否真的记住。'}
                        </p>
                      </button>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => handleStudyDecision(false)}
                          disabled={!revealed || submittingReview}
                          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-rose-300/20 bg-rose-400/10 px-4 py-3 font-bold text-rose-100 transition hover:bg-rose-400/15 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <XCircle className="h-5 w-5" />
                          还没记住
                        </button>
                        <button
                          type="button"
                          onClick={() => handleStudyDecision(true)}
                          disabled={!revealed || submittingReview}
                          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-300/20 bg-emerald-400/10 px-4 py-3 font-bold text-emerald-100 transition hover:bg-emerald-400/15 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <CheckCircle2 className="h-5 w-5" />
                          记住了
                        </button>
                      </div>
                    </>
                  ) : null}
                  {activePracticeKind === 'choice' ? (
                    <>
                      <div className="rounded-[2.2rem] border border-white/10 bg-white/[0.05] p-7">
                        <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-200">Choice Drill</p>
                        <h3 className="mt-4 text-4xl font-black text-white">
                          {activeStudyCard.vocabularyWord || activeStudyCard.prompt || activeStudyCard.id}
                        </h3>
                        <p className="mt-3 text-sm text-slate-300">选择最准确的中文释义。</p>
                        <div className="mt-5 grid gap-3">
                          {choiceOptions.map((option) => {
                            const isCorrect = option === activeStudyCard.answer;
                            const isSelected = choiceFeedback?.selected === option;
                            return (
                              <button
                                key={option}
                                type="button"
                                onClick={() => handleChoiceSelect(option)}
                                disabled={Boolean(choiceFeedback) || submittingReview}
                                className={`rounded-2xl border px-4 py-4 text-left font-bold transition ${
                                  choiceFeedback
                                    ? isCorrect
                                      ? 'border-emerald-300/20 bg-emerald-400/10 text-emerald-100'
                                      : isSelected
                                        ? 'border-rose-300/20 bg-rose-400/10 text-rose-100'
                                        : 'border-white/10 bg-white/[0.03] text-slate-500'
                                    : 'border-white/10 bg-white/[0.03] text-slate-100 hover:border-cyan-300/20 hover:bg-white/[0.08]'
                                }`}
                              >
                                {option}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      {choiceFeedback ? (
                        <div className="space-y-3">
                          <div className={`rounded-2xl p-4 text-sm font-bold ${choiceFeedback.correct ? 'bg-emerald-400/10 text-emerald-100' : 'bg-rose-400/10 text-rose-100'}`}>
                            {choiceFeedback.correct
                              ? '回答正确，这张卡可以进入更深一层练习。'
                              : `这题答错了，正确释义是：${activeStudyCard.answer || '暂无答案'}`}
                          </div>
                          <button
                            type="button"
                            onClick={() => void handleStudyDecision(choiceFeedback.correct)}
                            disabled={submittingReview}
                            className="w-full rounded-2xl bg-white px-4 py-3 font-black text-slate-950 transition hover:bg-cyan-100 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            继续下一题
                          </button>
                        </div>
                      ) : null}
                    </>
                  ) : null}
                  {activePracticeKind === 'spelling' ? (
                    <>
                      <div className="rounded-[2.2rem] border border-white/10 bg-white/[0.05] p-7">
                        <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-200">Spelling Drill</p>
                        <h3 className="mt-4 text-3xl font-black text-white">{activeStudyCard.answer || '暂无释义'}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-300">
                          根据释义和例句拼出英文单词。{activeStudyCard.example ? ` 例句: ${activeStudyCard.example}` : ''}
                        </p>
                        <input
                          value={spellingInput}
                          onChange={(event) => setSpellingInput(event.target.value)}
                          placeholder="输入英文单词"
                          className="mt-5 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4 text-base font-bold text-white outline-none transition focus:border-cyan-300/30"
                        />
                      </div>
                      {!spellingFeedback ? (
                        <button
                          type="button"
                          onClick={handleSpellingCheck}
                          disabled={!spellingInput.trim() || submittingReview}
                          className="w-full rounded-2xl bg-white px-4 py-3 font-black text-slate-950 transition hover:bg-cyan-100 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          检查拼写
                        </button>
                      ) : (
                        <div className="space-y-3">
                          <div className={`rounded-2xl p-4 text-sm font-bold ${spellingFeedback.correct ? 'bg-emerald-400/10 text-emerald-100' : 'bg-amber-400/10 text-amber-100'}`}>
                            {spellingFeedback.correct
                              ? '拼写正确，继续保持。'
                              : `拼写不对，正确答案是：${activeStudyCard.vocabularyWord || activeStudyCard.prompt || activeStudyCard.id}`}
                          </div>
                          <button
                            type="button"
                            onClick={() => void handleStudyDecision(spellingFeedback.correct)}
                            disabled={submittingReview}
                            className="w-full rounded-2xl bg-white px-4 py-3 font-black text-slate-950 transition hover:bg-cyan-100 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            继续下一题
                          </button>
                        </div>
                      )}
                    </>
                  ) : null}
                  {activePracticeKind === 'cloze' ? (
                    <>
                      <div className="rounded-[2.2rem] border border-white/10 bg-white/[0.05] p-7">
                        <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-200">Cloze Drill</p>
                        <h3 className="mt-4 text-3xl font-black text-white">把空缺单词补完整</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-300">
                          {buildClozeText({
                            sentence: activeStudyCard.example || '',
                            word: activeStudyCard.vocabularyWord || activeStudyCard.prompt || '',
                          }) || '当前卡片暂无可挖空的例句，先根据词义回忆单词。'}
                        </p>
                        <p className="mt-3 text-sm text-slate-400">提示释义: {activeStudyCard.answer || '暂无释义'}</p>
                        <input
                          value={spellingInput}
                          onChange={(event) => setSpellingInput(event.target.value)}
                          placeholder="输入缺失的英文单词"
                          className="mt-5 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4 text-base font-bold text-white outline-none transition focus:border-cyan-300/30"
                        />
                      </div>
                      {!spellingFeedback ? (
                        <button
                          type="button"
                          onClick={handleSpellingCheck}
                          disabled={!spellingInput.trim() || submittingReview}
                          className="w-full rounded-2xl bg-white px-4 py-3 font-black text-slate-950 transition hover:bg-cyan-100 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          检查填空
                        </button>
                      ) : (
                        <div className="space-y-3">
                          <div className={`rounded-2xl p-4 text-sm font-bold ${spellingFeedback.correct ? 'bg-emerald-400/10 text-emerald-100' : 'bg-amber-400/10 text-amber-100'}`}>
                            {spellingFeedback.correct
                              ? '填空正确，说明你已经能把单词放回语境。'
                              : `填空不对，正确答案是：${activeStudyCard.vocabularyWord || activeStudyCard.prompt || activeStudyCard.id}`}
                          </div>
                          <button
                            type="button"
                            onClick={() => void handleStudyDecision(spellingFeedback.correct)}
                            disabled={submittingReview}
                            className="w-full rounded-2xl bg-white px-4 py-3 font-black text-slate-950 transition hover:bg-cyan-100 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            继续下一题
                          </button>
                        </div>
                      )}
                    </>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
          <div className="space-y-6">
            <div className="premium-panel rounded-[2.6rem] p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">Mission Brief</p>
                  <p className="mt-3 text-3xl font-black text-white">{study.cardCountLabel}</p>
                </div>
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-cyan-200">
                  {activePracticeKind}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-400">
                当前进度 {Math.min(currentCardIndex + 1, study.cards.length)} / {study.cards.length}
              </p>
              {missionSummary ? (
                <div className="mt-5 space-y-4">
                  <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-500">Stage</p>
                    <p className="mt-3 text-xl font-black text-white">{missionSummary.stageLabel}</p>
                    <p className="mt-2 text-sm text-slate-400">{missionSummary.missionTitle}</p>
                  </div>
                  <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-5">
                    <div className="flex items-center justify-between gap-3 text-sm text-slate-300">
                      <span>{missionSummary.progressLabel}</span>
                      <span>{missionSummary.accuracyLabel}</span>
                    </div>
                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400 transition-all duration-500"
                        style={{ width: `${missionSummary.completionRatio}%` }}
                      />
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-400">{missionSummary.remainingLabel}</p>
                  </div>
                </div>
              ) : null}
            </div>
            {reviewResult && completionSummary ? (
              <div className="signal-ring overflow-hidden rounded-[2.4rem] border border-emerald-300/20 bg-emerald-400/10 p-6 text-emerald-100">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-200">{completionSummary.title}</p>
                <div className="mt-4 grid gap-4">
                  <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.08] p-4">
                    <p className="text-[11px] font-black uppercase tracking-[0.24em] text-emerald-200">Hit Rate</p>
                    <p className="mt-3 text-2xl font-black text-white">{completionSummary.accuracyLabel}</p>
                  </div>
                  <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.08] p-4">
                    <p className="text-[11px] font-black uppercase tracking-[0.24em] text-emerald-200">Mission Stats</p>
                    <p className="mt-3 text-2xl font-black text-white">{completionSummary.statsLabel}</p>
                  </div>
                  <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.08] p-4">
                    <p className="text-[11px] font-black uppercase tracking-[0.24em] text-emerald-200">Progress</p>
                    <p className="mt-3 text-2xl font-black text-white">{completionSummary.progressLabel}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-emerald-100/90">{completionSummary.nextActionLabel}</p>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      {!loading && !error && mode === 'review' && reviewPage ? (
        <div className="space-y-6">
          <div className="premium-panel relative overflow-hidden rounded-[2.7rem] p-8 sm:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.18),transparent_32%)]" />
            <div className="relative">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">Review Queue</p>
              <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">{reviewPage.totalDue} 张待复习卡片</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                现在会先告诉你复习压力主要集中在哪些词书，再把可执行入口直接摆到前面，减少无意义跳转。
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-5">
                  <p className="text-[11px] font-black uppercase tracking-[0.24em] text-slate-400">Deck Coverage</p>
                  <p className="mt-4 text-4xl font-black text-white">{reviewPage.summary.totalDecks}</p>
                  <p className="mt-2 text-sm text-slate-400">涉及词书数量</p>
                </div>
                <div className="rounded-[1.8rem] border border-cyan-300/20 bg-cyan-300/10 p-5">
                  <p className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-200">Primary Front</p>
                  <p className="mt-4 text-xl font-black text-white">{reviewPage.summary.primaryDeckLabel}</p>
                  <p className="mt-2 text-sm text-cyan-100/80">先打掉压力最大的复习词书</p>
                </div>
                <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-5">
                  <p className="text-[11px] font-black uppercase tracking-[0.24em] text-slate-400">Execution</p>
                  <p className="mt-4 text-xl font-black text-white">
                    {reviewPage.totalDue > 0 ? `建议先完成前 ${Math.min(3, reviewPage.totalDue)} 张` : '当前队列已清空'}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">完成一轮集中处理后再切换路线</p>
                </div>
              </div>
            </div>
          </div>
          {reviewPage.cards.length > 0 ? (
            <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
              <div className="space-y-6">
                <div className="premium-panel rounded-[2.4rem] p-6">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">Deck Signals</p>
                  <div className="mt-5 space-y-3">
                    {reviewPage.deckSignals.map((signal, index) => {
                      const presentation = getDeckPresentation(signal.deckId);
                      return (
                        <div
                          key={signal.deckId}
                          className="rounded-[1.75rem] border p-4"
                          style={{
                            borderColor: `${presentation.primaryColor}26`,
                            background: `linear-gradient(135deg, ${presentation.primaryColor}14 0%, rgba(15,23,42,0.35) 100%)`,
                          }}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="text-[11px] font-black uppercase tracking-[0.24em]" style={{ color: presentation.primaryColor }}>
                                Route 0{index + 1}
                              </p>
                              <p className="mt-2 text-lg font-black text-white">{presentation.accentWord}</p>
                              <p className="mt-2 text-sm text-slate-300">{signal.count} 张卡片等待处理</p>
                            </div>
                            <Link
                              to={buildPracticeLaunchPath({
                                deckId: signal.deckId,
                                mode: 'REVIEW',
                                cardIds: signal.batchCardIds,
                              })}
                              className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-slate-200 transition hover:bg-white/20"
                            >
                              {signal.deckId.toUpperCase()}
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="premium-panel rounded-[2.4rem] p-6">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">Quick Command</p>
                  <p className="mt-4 text-2xl font-black text-white">优先清主战线，再把其余到期卡逐张扫掉。</p>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    现在可以一键拉起一小段连续复习，而不是每次只点一张卡，整体体验更像真正的训练控制台。
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {reviewPage.summary.primaryBatchLaunch ? (
                      <Link
                        to={buildPracticeLaunchPath({
                          deckId: reviewPage.summary.primaryBatchLaunch.deckId,
                          mode: 'REVIEW',
                          cardIds: reviewPage.summary.primaryBatchLaunch.cardIds,
                        })}
                        className="rounded-full bg-white px-4 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-100"
                      >
                        连续复习主战线
                      </Link>
                    ) : null}
                    <Link
                      to="/rebuild/dashboard"
                      className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-bold text-slate-200 transition hover:border-cyan-300/30 hover:bg-white/[0.08]"
                    >
                      返回总控台
                    </Link>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {reviewPage.cards.map((card, index) => {
                  const presentation = getDeckPresentation(card.deckId);
                  return (
                    <div key={card.id} className="premium-panel rounded-[2rem] p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[11px] font-black uppercase tracking-[0.24em]" style={{ color: presentation.primaryColor }}>
                            Queue {String(index + 1).padStart(2, '0')}
                          </p>
                          <p className="mt-3 text-xl font-black text-white">{card.title}</p>
                        </div>
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-slate-300">
                          {card.deckId.toUpperCase()}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-slate-400">{card.subtitle}</p>
                      <div className="mt-5 rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4">
                        <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: presentation.primaryColor }}>
                          Due Time
                        </p>
                        <p className="mt-2 text-sm text-slate-200">{card.dueLabel}</p>
                      </div>
                      <Link
                        to={buildPracticeLaunchPath({
                          deckId: card.deckId,
                          mode: 'REVIEW',
                          cardIds: [card.id],
                        })}
                        className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-cyan-100"
                      >
                        开始复习
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="premium-panel rounded-[2.4rem] p-8 text-center">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-200">Queue Clear</p>
              <h3 className="mt-4 text-3xl font-black text-white">今天的待复习队列已经清空</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">继续去课程库推进新单元，或者回到学习页制造新的复习记录。</p>
            </div>
          )}
        </div>
      ) : null}

      {!loading && !error && mode === 'mistakes' && mistakesPage ? (
        <div className="space-y-6">
          <div className="premium-panel relative overflow-hidden rounded-[2.7rem] p-8 sm:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.16),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.14),transparent_28%)]" />
            <div className="relative">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">Mistake Vault</p>
              <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">{mistakesPage.totalMistakes} 个重点错词</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                错词本现在会把危险项和观察项分开，先把高风险词压下去，再去扫尾，避免所有错词都看起来一样重。
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-[1.8rem] border border-rose-300/20 bg-rose-400/10 p-5">
                  <p className="text-[11px] font-black uppercase tracking-[0.24em] text-rose-200">High Risk</p>
                  <p className="mt-4 text-4xl font-black text-white">{mistakesPage.summary.highRiskCount}</p>
                  <p className="mt-2 text-sm text-rose-100/80">连续错误 3 次及以上</p>
                </div>
                <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-5">
                  <p className="text-[11px] font-black uppercase tracking-[0.24em] text-slate-400">Watching</p>
                  <p className="mt-4 text-4xl font-black text-white">{mistakesPage.summary.watchingCount}</p>
                  <p className="mt-2 text-sm text-slate-400">仍需持续观察的错词</p>
                </div>
                <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-5">
                  <p className="text-[11px] font-black uppercase tracking-[0.24em] text-slate-400">Action</p>
                  <p className="mt-4 text-xl font-black text-white">{mistakesPage.summary.focusDeckLabel}</p>
                  <p className="mt-2 text-sm text-slate-400">把最高风险词优先拉回安全区</p>
                </div>
              </div>
            </div>
          </div>
          {mistakesPage.cards.length > 0 ? (
            <div className="grid gap-6 xl:grid-cols-2">
              <div className="premium-panel rounded-[2.4rem] p-6">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-rose-200">High Risk Zone</p>
                    <h3 className="mt-3 text-3xl font-black text-white">需要优先压制的错词</h3>
                  </div>
                  <span className="rounded-full border border-rose-300/20 bg-rose-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-rose-100">
                    {mistakeRiskPanels.highRisk.length} 条
                  </span>
                </div>
                <div className="mt-5 space-y-4">
                  {mistakeRiskPanels.highRisk.length > 0 ? (
                    mistakeRiskPanels.highRisk.map((card) => {
                      const presentation = getDeckPresentation(card.deckId);
                      return (
                        <div
                          key={card.id}
                          className="rounded-[1.8rem] border p-5"
                          style={{
                            borderColor: `${presentation.primaryColor}24`,
                            background: `linear-gradient(135deg, rgba(244,63,94,0.12) 0%, ${presentation.primaryColor}10 100%)`,
                          }}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="text-xl font-black text-white">{card.title}</p>
                              <p className="mt-2 text-sm text-slate-300">{card.subtitle}</p>
                            </div>
                            <span className="rounded-full border border-rose-300/20 bg-rose-400/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-rose-100">
                              {card.riskLabel}
                            </span>
                          </div>
                          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2 font-bold text-slate-100">{card.wrongCountLabel}</span>
                            <span className="font-bold" style={{ color: presentation.primaryColor }}>
                              {card.deckId.toUpperCase()}
                            </span>
                          </div>
                          <Link
                            to={buildPracticeLaunchPath({
                              deckId: card.deckId,
                              mode: 'REVIEW',
                              cardIds: [card.id],
                            })}
                            className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-rose-100"
                          >
                            立即重练
                          </Link>
                        </div>
                      );
                    })
                  ) : (
                    <div className="rounded-[1.8rem] border border-emerald-300/20 bg-emerald-400/10 p-5 text-sm text-emerald-100">
                      当前没有高风险错词，说明最危险的一批已经被你压下去了。
                    </div>
                  )}
                  {mistakesPage.summary.focusLaunch ? (
                    <Link
                      to={buildPracticeLaunchPath({
                        deckId: mistakesPage.summary.focusLaunch.deckId,
                        mode: 'REVIEW',
                        cardIds: mistakesPage.summary.focusLaunch.cardIds,
                      })}
                      className="inline-flex rounded-full bg-white px-4 py-3 text-sm font-black text-slate-950 transition hover:bg-rose-100"
                    >
                      连续攻坚重点错词
                    </Link>
                  ) : null}
                </div>
              </div>
              <div className="premium-panel rounded-[2.4rem] p-6">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">Watch List</p>
                    <h3 className="mt-3 text-3xl font-black text-white">观察中的错词</h3>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-slate-300">
                    {mistakeRiskPanels.watching.length} 条
                  </span>
                </div>
                <div className="mt-5 space-y-4">
                  {mistakeRiskPanels.watching.length > 0 ? (
                    mistakeRiskPanels.watching.map((card) => {
                      const presentation = getDeckPresentation(card.deckId);
                      return (
                        <div key={card.id} className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-5">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="text-lg font-black text-white">{card.title}</p>
                              <p className="mt-2 text-sm text-slate-400">{card.subtitle}</p>
                            </div>
                            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-slate-300">
                              {card.riskLabel}
                            </span>
                          </div>
                          <div className="mt-4 flex items-center justify-between gap-3">
                            <span className="text-sm font-bold text-slate-300">{card.wrongCountLabel}</span>
                            <span className="text-xs font-black uppercase tracking-[0.24em]" style={{ color: presentation.primaryColor }}>
                              {card.deckId.toUpperCase()}
                            </span>
                          </div>
                          <Link
                            to={buildPracticeLaunchPath({
                              deckId: card.deckId,
                              mode: 'REVIEW',
                              cardIds: [card.id],
                            })}
                            className="mt-5 inline-flex rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-bold text-slate-100 transition hover:border-cyan-300/30 hover:bg-white/[0.08]"
                          >
                            重点重练
                          </Link>
                        </div>
                      );
                    })
                  ) : (
                    <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-slate-400">
                      当前没有观察区错词，可以继续推进课程，等待系统积累新的复习信号。
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="premium-panel rounded-[2.4rem] p-8 text-center">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-200">Vault Clear</p>
              <h3 className="mt-4 text-3xl font-black text-white">错词本暂时为空</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">继续学习和复习，系统会在你真正出错时自动把词拉进这里。</p>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
