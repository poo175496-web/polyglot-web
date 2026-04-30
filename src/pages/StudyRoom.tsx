import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Volume2, Mic, RotateCcw, Search, Lightbulb, BookOpen, Lock, PartyPopper } from 'lucide-react';
import { vocabularyData, WordItem } from '../data/vocabulary';
import { useStore } from '../store/useStore';

interface SpeechRecognitionResultEvent {
  results: ArrayLike<ArrayLike<{ transcript: string }>>;
}

interface SpeechRecognitionErrorEvent {
  error: string;
}

interface BrowserSpeechRecognition {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  onstart: (() => void) | null;
  onresult: ((event: SpeechRecognitionResultEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
  start: () => void;
}

interface BrowserSpeechRecognitionConstructor {
  new (): BrowserSpeechRecognition;
}

export default function StudyRoom() {
  const { courseId } = useParams();
  const { user, updateProgress } = useStore();
  
  // 模式：单元列表 -> 翻卡片学习 -> 听写测验 -> 恭喜完成
  const [studyMode, setStudyMode] = useState<'list' | 'flashcard' | 'dictation' | 'finished'>('list');
  const [activeGroupId, setActiveGroupId] = useState<number | null>(null);
  const [currentCard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // 听写相关状态
  const [dictationInput, setDictationInput] = useState('');
  const [dictationStatus, setDictationStatus] = useState<'idle' | 'error' | 'success'>('idle');
  const dictationInputRef = useRef<HTMLInputElement>(null);
  const dictationTimeoutRef = useRef<number | null>(null);
  const focusTimeoutRef = useRef<number | null>(null);

  const [isRecording, setIsRecording] = useState(false);
  const [speechResult, setSpeechResult] = useState('');
  const [syncStatus, setSyncStatus] = useState<'idle' | 'syncing' | 'success' | 'error'>('idle');
  const [syncMessage, setSyncMessage] = useState('');

  // 获取用户在该课程的解锁进度（默认第 0 单元）
  const unlockedUnit = user?.progress?.[courseId || ''] || 0;

  // 1. 获取当前词库并按 A-Z 排序
  const fullVocabulary = useMemo(() => {
    const vocab = courseId && vocabularyData[courseId] ? vocabularyData[courseId] : vocabularyData['zhongkao'];
    return [...vocab].sort((a, b) => a.word.localeCompare(b.word));
  }, [courseId]);

  // 2. 将词库按 20 个单词一组进行分组
  const WORDS_PER_GROUP = 20;
  const groups = useMemo(() => {
    const res: WordItem[][] = [];
    for (let i = 0; i < fullVocabulary.length; i += WORDS_PER_GROUP) {
      res.push(fullVocabulary.slice(i, i + WORDS_PER_GROUP));
    }
    return res;
  }, [fullVocabulary]);

  // 3. 支持全局搜索
  const searchResults = useMemo(() => {
    if (!searchTerm) return null;
    return fullVocabulary.filter(item => 
      item.word.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.meaning.includes(searchTerm)
    );
  }, [fullVocabulary, searchTerm]);

  // 4. 当前正在学习的卡片集合
  const activeCards = useMemo(() => {
    if (searchResults !== null) return searchResults;
    if (activeGroupId !== null && groups[activeGroupId]) return groups[activeGroupId];
    return [];
  }, [searchResults, activeGroupId, groups]);

  // 状态重置逻辑
  useEffect(() => {
    setCurrentCard(0);
    setFlipped(false);
    setSpeechResult('');
    setDictationInput('');
    setDictationStatus('idle');
    setSyncStatus('idle');
    setSyncMessage('');
  }, [activeGroupId, searchTerm, studyMode]);

  const handleNextFlashcard = useCallback(() => {
    setFlipped(false);
    setSpeechResult('');
    if (currentCard < activeCards.length - 1) {
      setCurrentCard(prev => prev + 1);
    } else {
      // 学完本组，进入听写模式
      setStudyMode('dictation');
    }
  }, [currentCard, activeCards.length]);

  const syncUnitProgress = useCallback(async () => {
    if (activeGroupId === null || searchTerm) {
      setSyncStatus('idle');
      setSyncMessage('');
      return;
    }

    setSyncStatus('syncing');
    setSyncMessage('正在同步学习进度到云端...');
    const result = await updateProgress(courseId || '', activeGroupId);

    if (result.synced) {
      setSyncStatus('success');
      if (result.unlockedUnit + 1 < groups.length) {
        setSyncMessage(`云端同步成功，已解锁 Unit ${result.unlockedUnit + 1}。`);
      } else {
        setSyncMessage('云端同步成功，当前课程单元已全部解锁。');
      }
      return;
    }

    setSyncStatus('error');
    setSyncMessage(result.error || '进度同步失败，请稍后重试。');
  }, [activeGroupId, searchTerm, updateProgress, courseId, groups.length]);

  const handleFlip = useCallback(() => {
    setFlipped(prev => !prev);
  }, []);

  const playAudio = useCallback((text: string, e: React.MouseEvent | null) => {
    if (e) e.stopPropagation();
    if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
      setSpeechResult('当前浏览器不支持网页发音，请尝试使用较新的 Chrome。');
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    utterance.onerror = () => {
      setSpeechResult('发音播放失败，请稍后再试。');
    };
    window.speechSynthesis.speak(utterance);
  }, []);

  const handleDictationSubmit = useCallback(async () => {
    if (!dictationInput.trim() || !activeCards[currentCard]) return;
    
    const targetWord = activeCards[currentCard].word.toLowerCase();
    if (dictationInput.trim().toLowerCase() === targetWord) {
      setDictationStatus('success');
      if (dictationTimeoutRef.current) {
        window.clearTimeout(dictationTimeoutRef.current);
      }
      dictationTimeoutRef.current = window.setTimeout(async () => {
        if (currentCard < activeCards.length - 1) {
          setCurrentCard(prev => prev + 1);
          setDictationInput('');
          setDictationStatus('idle');
        } else {
          setStudyMode('finished');
          void syncUnitProgress();
        }
      }, 250);
    } else {
      setDictationStatus('error');
      // 拼写错误时可以再次播放读音
      playAudio(activeCards[currentCard].word, null);
    }
  }, [activeCards, currentCard, dictationInput, playAudio, syncUnitProgress]);

  const handleRecord = () => {
    if (!activeCards[currentCard] || isRecording) return;

    const speechWindow = window as Window & {
      SpeechRecognition?: BrowserSpeechRecognitionConstructor;
      webkitSpeechRecognition?: BrowserSpeechRecognitionConstructor;
    };
    const SpeechRecognition = speechWindow.SpeechRecognition || speechWindow.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("抱歉，您的浏览器不支持语音识别功能，请尝试使用 Chrome 浏览器。");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsRecording(true);
      setSpeechResult('正在倾听...');
    };

    recognition.onresult = (event: SpeechRecognitionResultEvent) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      const targetWord = activeCards[currentCard].word.toLowerCase();
      
      if (transcript.includes(targetWord) || targetWord.includes(transcript)) {
        setSpeechResult('🎉 发音非常标准！(得分: 95)');
      } else {
        setSpeechResult(`🤔 识别结果: "${transcript}"，再试一次吧！`);
      }
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      setSpeechResult(`❌ 录音失败: ${event.error}`);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognition.start();
  };

  // 添加键盘快捷键支持
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 在听写模式下，空格键不应翻转卡片，而是作为正常输入
      if (studyMode === 'dictation') return;
      if (activeCards.length === 0) return;
      
      if (e.code === 'Space') {
        e.preventDefault();
        handleFlip();
      } else if (e.code === 'ArrowRight' && flipped && currentCard < activeCards.length - 1) {
        handleNextFlashcard();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCards.length, currentCard, flipped, handleFlip, handleNextFlashcard, studyMode]);

  // 听写模式自动播放发音和聚焦
  useEffect(() => {
    if (studyMode === 'dictation' && activeCards[currentCard]) {
      playAudio(activeCards[currentCard].word, null);
      if (focusTimeoutRef.current) {
        window.clearTimeout(focusTimeoutRef.current);
      }
      focusTimeoutRef.current = window.setTimeout(() => {
        dictationInputRef.current?.focus();
      }, 100);
    }

    return () => {
      if (focusTimeoutRef.current) {
        window.clearTimeout(focusTimeoutRef.current);
        focusTimeoutRef.current = null;
      }
    };
  }, [activeCards, currentCard, playAudio, studyMode]);

  useEffect(() => {
    return () => {
      if (dictationTimeoutRef.current) {
        window.clearTimeout(dictationTimeoutRef.current);
      }
      if (focusTimeoutRef.current) {
        window.clearTimeout(focusTimeoutRef.current);
      }
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // 渲染：单元列表视图
  if (studyMode === 'list' && !searchTerm) {
    return (
      <div className="min-h-[calc(100vh-6rem)] flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
        <header className="flex items-center justify-between mb-12 flex-wrap gap-4">
          <Link 
            to="/courses" 
            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 font-bold transition-colors bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-sm hover:shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
            返回课程大厅
          </Link>
          
          <div className="relative flex-1 max-w-md mx-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={`在 ${fullVocabulary.length} 个词汇中搜索...`}
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                if (e.target.value) setStudyMode('flashcard');
              }}
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition-all"
            />
          </div>
        </header>

        <div className="max-w-5xl w-full mx-auto pb-12">
          <div className="mb-8">
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">选择学习单元</h1>
            <p className="text-gray-500 mt-2 font-medium">每组 {WORDS_PER_GROUP} 个词汇，学完并完成听写测验后即可解锁下一关。</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((group, idx) => {
              const isLocked = idx > unlockedUnit;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => {
                    if (!isLocked) {
                      setActiveGroupId(idx);
                      setStudyMode('flashcard');
                    }
                  }}
                  className={`group relative bg-white p-6 rounded-3xl border transition-all duration-300 ${
                    isLocked 
                      ? 'border-gray-200 opacity-60 cursor-not-allowed' 
                      : 'border-gray-100 cursor-pointer shadow-sm hover:shadow-xl hover:border-indigo-200 hover:-translate-y-1'
                  }`}
                >
                  {isLocked && (
                    <div className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full">
                      <Lock className="w-5 h-5 text-gray-400" />
                    </div>
                  )}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl transition-colors ${
                      isLocked ? 'bg-gray-100 text-gray-400' : 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white'
                    }`}>
                      {idx + 1}
                    </div>
                    <span className="px-3 py-1 bg-gray-50 text-gray-500 rounded-lg text-xs font-bold font-mono">
                      {group.length} Words
                    </span>
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${isLocked ? 'text-gray-400' : 'text-gray-900'}`}>Unit {idx + 1}</h3>
                  <div className={`flex items-center gap-2 text-sm font-medium ${isLocked ? 'text-gray-400' : 'text-gray-500'}`}>
                    <BookOpen className={`w-4 h-4 ${isLocked ? 'text-gray-300' : 'text-indigo-400'}`} />
                    <span>
                      <strong className={isLocked ? 'text-gray-400' : 'text-gray-900'}>{group[0].word.charAt(0).toUpperCase()}</strong>
                      {group[0].word.slice(1)} - <strong className={isLocked ? 'text-gray-400' : 'text-gray-900'}>{group[group.length-1].word.charAt(0).toUpperCase()}</strong>
                      {group[group.length-1].word.slice(1)}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // 渲染：完成恭喜视图
  if (studyMode === 'finished') {
    return (
      <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center animate-in fade-in zoom-in duration-300">
        <div className="w-full max-w-lg mx-auto bg-white p-12 rounded-[2.5rem] shadow-2xl text-center border-2 border-emerald-100">
          <PartyPopper className="w-24 h-24 text-emerald-500 mx-auto mb-6 animate-bounce" />
          <h2 className="text-4xl font-black text-gray-900 mb-4">太棒了！</h2>
          <p className="text-xl text-gray-500 mb-8">您已完美完成本单元的学习和听写测验！</p>
          
          {syncMessage && (
            <div className={`px-6 py-4 rounded-2xl font-bold mb-6 flex items-center justify-center gap-3 border ${
              syncStatus === 'success'
                ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                : syncStatus === 'error'
                ? 'bg-amber-50 text-amber-700 border-amber-100'
                : 'bg-slate-50 text-slate-700 border-slate-100'
            }`}>
              <span className="text-2xl">
                {syncStatus === 'success' ? '🔓' : syncStatus === 'error' ? '⚠️' : '⏳'}
              </span>
              <span>{syncMessage}</span>
            </div>
          )}

          {syncStatus === 'error' && activeGroupId !== null && !searchTerm && (
            <button
              onClick={() => void syncUnitProgress()}
              className="w-full py-4 mb-4 bg-amber-500 text-white rounded-2xl font-bold text-lg hover:bg-amber-600 transition-colors shadow-lg hover:-translate-y-0.5"
            >
              重新同步进度
            </button>
          )}
          
          <button 
            onClick={() => { 
              setStudyMode('list'); 
              setActiveGroupId(null); 
              setSearchTerm(''); 
            }} 
            className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold text-lg hover:bg-gray-800 transition-colors shadow-lg hover:-translate-y-1"
          >
            返回单元大厅
          </button>
        </div>
      </div>
    );
  }

  // 渲染：听写测验视图
  if (studyMode === 'dictation') {
    return (
      <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center animate-in slide-in-from-right duration-300">
        <div className="w-full max-w-lg mx-auto bg-white p-12 rounded-[2.5rem] shadow-2xl text-center border-2 border-indigo-100">
          <div className="flex justify-between items-center mb-8">
            <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-bold tracking-widest">
              听写模式 {currentCard + 1} / {activeCards.length}
            </span>
            <button 
              onClick={(e) => playAudio(activeCards[currentCard].word, e)}
              className="p-3 bg-gray-50 hover:bg-indigo-50 hover:text-indigo-600 rounded-full transition-colors text-gray-400"
            >
              <Volume2 className="w-6 h-6" />
            </button>
          </div>
          
          <h3 className="text-3xl font-black text-gray-900 mb-4">{activeCards[currentCard].meaning}</h3>
          <p className="text-gray-500 mb-10 font-medium">请听发音并拼写出对应的英文单词</p>
          
          <input 
            ref={dictationInputRef}
            type="text" 
            value={dictationInput}
            onChange={e => { setDictationInput(e.target.value); setDictationStatus('idle'); }}
            onKeyDown={e => e.key === 'Enter' && handleDictationSubmit()}
            className={`w-full text-center text-4xl font-black font-serif border-b-4 pb-4 focus:outline-none bg-transparent transition-colors ${
              dictationStatus === 'error' ? 'border-rose-500 text-rose-500' : 
              dictationStatus === 'success' ? 'border-emerald-500 text-emerald-500' : 
              'border-gray-200 focus:border-indigo-500 text-gray-900'
            }`}
            placeholder="Type here..."
          />
          
          <div className="h-12 mt-4 flex items-center justify-center">
            {dictationStatus === 'error' && <p className="text-rose-500 font-bold animate-bounce">拼写错误，请仔细听发音并重新输入！</p>}
            {dictationStatus === 'success' && <p className="text-emerald-500 font-bold text-lg">🎉 拼写正确！</p>}
          </div>
          
          <button 
            onClick={handleDictationSubmit} 
            className="mt-8 w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-colors shadow-lg hover:-translate-y-0.5"
          >
            提交验证
          </button>
        </div>
      </div>
    );
  }

  // 渲染：翻卡片学习视图 (flashcard)
  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
      <header className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <button 
          onClick={() => {
            if (searchTerm) {
              setSearchTerm('');
              setStudyMode('list');
            } else {
              setStudyMode('list');
              setActiveGroupId(null);
            }
          }}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900 font-bold transition-colors bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-sm hover:shadow-md"
        >
          <ChevronLeft className="w-5 h-5" />
          返回单元列表
        </button>
        
        {/* 仅在搜索状态下显示搜索框 */}
        {searchTerm && (
          <div className="relative flex-1 max-w-md mx-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-500" />
            <input
              type="text"
              placeholder={`在 ${fullVocabulary.length} 个词汇中搜索...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border-2 border-indigo-200 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
              autoFocus
            />
          </div>
        )}

        <div className="flex items-center gap-4 ml-auto">
          <div className="text-sm font-bold text-gray-500">
            进度: {activeCards.length > 0 ? currentCard + 1 : 0} / {activeCards.length}
          </div>
          <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-indigo-600 rounded-full transition-all duration-500" 
              style={{ width: activeCards.length > 0 ? `${((currentCard + 1) / activeCards.length) * 100}%` : '0%' }} 
            />
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto w-full">
        {activeCards.length === 0 ? (
          <div className="text-center text-gray-500 mt-20">
            <h2 className="text-2xl font-bold mb-4">找不到匹配的单词 😅</h2>
            <p>请尝试换个搜索词，或者清空搜索框。</p>
          </div>
        ) : (
          <>
            <div className="w-full aspect-[4/3] perspective-1000 relative max-w-lg mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCard}
                  className="w-full h-full relative preserve-3d cursor-pointer"
                  animate={{ rotateY: flipped ? 180 : 0 }}
                  transition={{ duration: 0.3, type: 'spring', stiffness: 400, damping: 25 }}
                  onClick={handleFlip}
                >
                  {/* Front */}
                  <div className="absolute inset-0 backface-hidden bg-white border-2 border-gray-100 rounded-[2.5rem] shadow-2xl flex flex-col items-center justify-center p-12 text-center hover:border-indigo-300 transition-all hover:shadow-indigo-100">
                    <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-indigo-50/50 to-transparent pointer-events-none" />
                    <button 
                      onClick={(e) => playAudio(activeCards[currentCard].word, e)}
                      className="absolute top-6 right-6 p-4 bg-white shadow-sm border border-gray-100 rounded-full text-indigo-500 hover:text-indigo-700 hover:bg-indigo-50 hover:scale-110 transition-all z-10"
                    >
                      <Volume2 className="w-6 h-6" />
                    </button>
                    <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6 tracking-tight font-serif">
                      {activeCards[currentCard].word}
                    </h2>
                    <p className="text-2xl text-indigo-400 font-mono tracking-widest bg-indigo-50 px-6 py-2 rounded-2xl">
                      {activeCards[currentCard].phonetic}
                    </p>
                    <div className="absolute bottom-8 left-0 right-0 text-gray-400 font-bold flex items-center justify-center gap-2 animate-pulse">
                      <RotateCcw className="w-5 h-5" />
                      点击卡片或按空格键翻转
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 text-white rounded-[2.5rem] shadow-2xl flex flex-col items-center justify-center p-10 sm:p-12 text-center [transform:rotateY(180deg)] overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
                    
                    <h3 className="text-4xl sm:text-5xl font-black mb-8 z-10">
                      {activeCards[currentCard].meaning}
                    </h3>
                    
                    <div className="bg-white/10 px-6 py-4 rounded-3xl mb-8 backdrop-blur-md border border-white/20 w-full z-10 shadow-inner">
                      <div className="flex items-center justify-center gap-2 mb-2 text-indigo-200">
                        <Lightbulb className="w-5 h-5" />
                        <p className="text-sm font-bold tracking-wider uppercase">词根词缀记忆法</p>
                      </div>
                      <p className="text-lg text-white font-medium">
                        {activeCards[currentCard].root}
                      </p>
                    </div>

                    <div className="w-24 h-1 bg-white/20 rounded-full mb-8 z-10" />
                    <p className="text-xl sm:text-2xl text-indigo-100 font-medium italic leading-relaxed z-10">
                      "{activeCards[currentCard].example}"
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-12 flex flex-col items-center justify-center gap-6 w-full">
              {speechResult && (
                <div className={`px-6 py-3 rounded-full font-bold text-sm ${
                  speechResult.includes('🎉') 
                    ? 'bg-emerald-100 text-emerald-700' 
                    : speechResult.includes('正在倾听')
                    ? 'bg-blue-100 text-blue-700 animate-pulse'
                    : 'bg-amber-100 text-amber-700'
                }`}>
                  {speechResult}
                </div>
              )}
              
              <div className="flex items-center justify-center gap-6 w-full">
                <button 
                  onClick={handleRecord}
                  disabled={isRecording}
                  className={`flex-1 max-w-[200px] flex items-center justify-center gap-2 py-4 border-2 border-gray-100 rounded-2xl font-bold transition-all shadow-sm ${
                    isRecording 
                      ? 'bg-rose-50 text-rose-600 border-rose-200' 
                      : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-indigo-600 hover:border-indigo-100'
                  }`}
                >
                  <Mic className={`w-5 h-5 ${isRecording ? 'animate-pulse' : ''}`} />
                  {isRecording ? '正在录音...' : '口语跟读'}
                </button>
                <button 
                  onClick={handleNextFlashcard}
                  disabled={currentCard === activeCards.length - 1 && !flipped}
                  className={`flex-1 max-w-[200px] flex items-center justify-center gap-2 py-4 rounded-2xl font-bold transition-all shadow-lg ${
                    currentCard === activeCards.length - 1
                      ? 'bg-amber-500 text-white hover:bg-amber-600'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
                >
                  {currentCard === activeCards.length - 1 ? (
                    '进入听写测验'
                  ) : (
                    '掌握，下一个'
                  )}
                </button>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
