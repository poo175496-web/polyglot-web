import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Volume2, Mic, CheckCircle2, RotateCcw, ArrowRight, Lightbulb } from 'lucide-react';
import { vocabularyData } from '../data/vocabulary';

export default function StudyRoom() {
  const { courseId } = useParams();
  const [flipped, setFlipped] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  
  const [isRecording, setIsRecording] = useState(false);
  const [speechResult, setSpeechResult] = useState('');

  // 根据路由参数加载对应的词库，如果没有匹配到则默认加载中考词汇
  const mockCards = courseId && vocabularyData[courseId] ? vocabularyData[courseId] : vocabularyData['zhongkao'];

  // 添加键盘快捷键支持
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        handleFlip();
      } else if (e.code === 'ArrowRight' && flipped && currentCard < mockCards.length - 1) {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [flipped, currentCard, mockCards.length]);

  const handleNext = () => {
    setFlipped(false);
    setSpeechResult('');
    if (currentCard < mockCards.length - 1) {
      setCurrentCard(prev => prev + 1);
    }
  };

  const handleFlip = () => setFlipped(!flipped);

  const playAudio = (text: string, e: React.MouseEvent) => {
    e.stopPropagation(); // 阻止卡片翻转
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9; // 稍微放慢语速方便听清
    window.speechSynthesis.speak(utterance);
  };

  const handleRecord = () => {
    // 检查浏览器是否支持语音识别
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
      const targetWord = mockCards[currentCard].word.toLowerCase();
      
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

  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex items-center justify-between mb-8">
        <Link 
          to="/courses" 
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900 font-bold transition-colors bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-sm hover:shadow-md"
        >
          <ChevronLeft className="w-5 h-5" />
          返回课程大厅
        </Link>
        <div className="flex items-center gap-4">
          <div className="text-sm font-bold text-gray-500">
            进度: {currentCard + 1} / {mockCards.length}
          </div>
          <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-indigo-600 rounded-full transition-all duration-500" 
              style={{ width: `${((currentCard + 1) / mockCards.length) * 100}%` }} 
            />
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto w-full">
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
                  onClick={(e) => playAudio(mockCards[currentCard].word, e)}
                  className="absolute top-6 right-6 p-4 bg-white shadow-sm border border-gray-100 rounded-full text-indigo-500 hover:text-indigo-700 hover:bg-indigo-50 hover:scale-110 transition-all z-10"
                >
                  <Volume2 className="w-6 h-6" />
                </button>
                <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6 tracking-tight font-serif">
                  {mockCards[currentCard].word}
                </h2>
                <p className="text-2xl text-indigo-400 font-mono tracking-widest bg-indigo-50 px-6 py-2 rounded-2xl">
                  {mockCards[currentCard].phonetic}
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
                  {mockCards[currentCard].meaning}
                </h3>
                
                <div className="bg-white/10 px-6 py-4 rounded-3xl mb-8 backdrop-blur-md border border-white/20 w-full z-10 shadow-inner">
                  <div className="flex items-center justify-center gap-2 mb-2 text-indigo-200">
                    <Lightbulb className="w-5 h-5" />
                    <p className="text-sm font-bold tracking-wider uppercase">词根词缀记忆法</p>
                  </div>
                  <p className="text-lg text-white font-medium">
                    {mockCards[currentCard].root}
                  </p>
                </div>

                <div className="w-24 h-1 bg-white/20 rounded-full mb-8 z-10" />
                <p className="text-xl sm:text-2xl text-indigo-100 font-medium italic leading-relaxed z-10">
                  "{mockCards[currentCard].example}"
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
              disabled={currentCard === mockCards.length - 1 && flipped}
              className={`flex-1 max-w-[200px] flex items-center justify-center gap-2 py-4 rounded-2xl font-bold transition-all shadow-lg ${
                currentCard === mockCards.length - 1 && flipped
                  ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              {currentCard === mockCards.length - 1 && flipped ? (
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
      </main>
    </div>
  );
}
