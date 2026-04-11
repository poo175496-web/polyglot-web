import { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Volume2, Mic, CheckCircle2, RotateCcw, Search, Lightbulb, BookOpen } from 'lucide-react';
import { vocabularyData, WordItem } from '../data/vocabulary';

export default function StudyRoom() {
  const { courseId } = useParams();
  const [activeGroupId, setActiveGroupId] = useState<number | null>(null);
  const [flipped, setFlipped] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  
  const [isRecording, setIsRecording] = useState(false);
  const [speechResult, setSpeechResult] = useState('');

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

  // 3. 支持全局搜索（如果搜索词不为空，则显示所有匹配的词汇作为一个大组）
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
  }, [activeGroupId, searchTerm]);

  // 添加键盘快捷键支持
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 只有在进入了具体的学习界面（或者搜索界面有结果时）才响应快捷键
      if (activeCards.length === 0) return;
      
      if (e.code === 'Space') {
        e.preventDefault();
        handleFlip();
      } else if (e.code === 'ArrowRight' && flipped && currentCard < activeCards.length - 1) {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [flipped, currentCard, activeCards.length]);

  const handleNext = () => {
    setFlipped(false);
    setSpeechResult('');
    if (currentCard < activeCards.length - 1) {
      setCurrentCard(prev => prev + 1);
    }
  };

  const handleFlip = () => setFlipped(!flipped);

  const playAudio = (text: string, e: React.MouseEvent) => {
    e.stopPropagation(); // 阻止卡片翻转
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9; 
    window.speechSynthesis.speak(utterance);
  };

  const handleRecord = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
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

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      const targetWord = activeCards[currentCard].word.toLowerCase();
      
      if (transcript.includes(targetWord) || targetWord.includes(transcript)) {
        setSpeechResult('🎉 发音非常标准！(得分: 95)');
      } else {
        setSpeechResult(`🤔 识别结果: "${transcript}"，再试一次吧！`);
      }
    };

    recognition.onerror = (event: any) => {
      setSpeechResult(`❌ 录音失败: ${event.error}`);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognition.start();
  };

  // 渲染：分组列表视图（当没有进行搜索，且未选择具体分组时）
  if (activeGroupId === null && !searchTerm) {
    return (
      <div className="min-h-[calc(100vh-6rem)] flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-700">
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
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition-all"
            />
          </div>
        </header>

        <div className="max-w-5xl w-full mx-auto pb-12">
          <div className="mb-8">
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">选择学习单元</h1>
            <p className="text-gray-500 mt-2 font-medium">按照 A-Z 顺序排列，每组 {WORDS_PER_GROUP} 个词汇，科学记忆不疲劳。</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((group, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setActiveGroupId(idx)}
                className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-indigo-200 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center font-black text-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    {idx + 1}
                  </div>
                  <span className="px-3 py-1 bg-gray-50 text-gray-500 rounded-lg text-xs font-bold font-mono">
                    {group.length} Words
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Unit {idx + 1}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                  <BookOpen className="w-4 h-4 text-indigo-400" />
                  <span>
                    <strong className="text-gray-900">{group[0].word.charAt(0).toUpperCase()}</strong>
                    {group[0].word.slice(1)} - <strong className="text-gray-900">{group[group.length-1].word.charAt(0).toUpperCase()}</strong>
                    {group[group.length-1].word.slice(1)}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 渲染：学习视图（搜索结果 或 具体某个分组）
  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <button 
          onClick={() => {
            if (searchTerm) {
              setSearchTerm('');
            } else {
              setActiveGroupId(null);
            }
          }}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900 font-bold transition-colors bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-sm hover:shadow-md"
        >
          <ChevronLeft className="w-5 h-5" />
          {searchTerm ? '返回单元列表' : `返回单元列表`}
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
                  transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
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
                  onClick={handleNext}
                  disabled={currentCard === activeCards.length - 1 && flipped}
                  className={`flex-1 max-w-[200px] flex items-center justify-center gap-2 py-4 rounded-2xl font-bold transition-all shadow-lg ${
                    currentCard === activeCards.length - 1 && flipped
                      ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
                >
                  {currentCard === activeCards.length - 1 && flipped ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      完成学习
                    </>
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
