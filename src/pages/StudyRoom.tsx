import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Volume2, Mic, CheckCircle2, RotateCcw } from 'lucide-react';

export default function StudyRoom() {
  const { courseId } = useParams();
  const [flipped, setFlipped] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);

  const [isRecording, setIsRecording] = useState(false);
  const [speechResult, setSpeechResult] = useState('');

  const mockCards = [
    { word: 'Accomplish', phonetic: '/əˈkʌmplɪʃ/', meaning: '完成；实现；达到', root: 'ac- (加强语气) + complish (完成) ➔ 强调去完成', example: 'We have accomplished a lot today.' },
    { word: 'Persistent', phonetic: '/pərˈsɪstənt/', meaning: '坚持不懈的；执着的', root: 'per- (始终) + sist (站立) + -ent (形容词后缀) ➔ 始终站立 ➔ 坚持的', example: 'She has been persistent in her studies.' },
    { word: 'Innovative', phonetic: '/ɪˈnɒvətɪv/', meaning: '创新的；革新的', root: 'in- (进入) + nov (新) + -ative (形容词后缀) ➔ 引入新的事物 ➔ 创新的', example: 'They came up with an innovative solution.' },
    { word: 'Enthusiastic', phonetic: '/ɪnˌθjuːziˈæstɪk/', meaning: '热情的；热心的', root: 'en- (在...内) + theos (神) ➔ 神灵附体 ➔ 充满热情的', example: 'The crowd was very enthusiastic.' },
    { word: 'Resilient', phonetic: '/pərˈzɪliənt/', meaning: '有弹性的；能恢复活力的', root: 're- (回) + salire (跳) ➔ 弹回 ➔ 恢复力强的', example: 'She is a resilient girl who bounces back quickly.' },
    { word: 'Meticulous', phonetic: '/mɪˈtɪkjələs/', meaning: '一丝不苟的；精确的', root: 'metus (恐惧) ➔ 因害怕出错而极度小心 ➔ 一丝不苟的', example: 'He is meticulous in his work.' },
    { word: 'Spontaneous', phonetic: '/spɒnˈteɪniəs/', meaning: '自发的；自然的', root: 'sponte (自愿地) ➔ 发自内心的 ➔ 自发的', example: 'We took a spontaneous trip to the beach.' },
    { word: 'Versatile', phonetic: '/ˈvɜːrsətl/', meaning: '多才多艺的；多用途的', root: 'vers (转) ➔ 能转向多种用途的 ➔ 多才多艺的', example: 'He is a versatile actor who can play any role.' },
    { word: 'Tenacious', phonetic: '/tɪˈneɪʃəs/', meaning: '顽强的；坚韧的', root: 'ten (握住) ➔ 紧紧抓住不放 ➔ 顽强的', example: 'She is known for her tenacious spirit.' },
    { word: 'Pragmatic', phonetic: '/præɡˈmætɪk/', meaning: '务实的；实用的', root: 'pragma (行为、事实) ➔ 注重实际效果的 ➔ 务实的', example: 'We need a pragmatic approach to solve this problem.' },
  ];

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
        <div className="w-full aspect-[4/3] perspective-1000 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCard}
              className="w-full h-full relative preserve-3d cursor-pointer"
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
              onClick={handleFlip}
            >
              {/* Front */}
              <div className="absolute inset-0 backface-hidden bg-white border-2 border-gray-100 rounded-3xl shadow-xl flex flex-col items-center justify-center p-12 text-center hover:border-indigo-200 transition-colors">
                <button 
                  onClick={(e) => playAudio(mockCards[currentCard].word, e)}
                  className="absolute top-6 right-6 p-3 bg-gray-50 rounded-full text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors z-10"
                >
                  <Volume2 className="w-6 h-6" />
                </button>
                <h2 className="text-6xl font-black text-gray-900 mb-4 tracking-tight">
                  {mockCards[currentCard].word}
                </h2>
                <p className="text-xl text-gray-400 font-mono tracking-widest">
                  {mockCards[currentCard].phonetic}
                </p>
                <div className="absolute bottom-8 left-0 right-0 text-gray-400 font-medium flex items-center justify-center gap-2">
                  <RotateCcw className="w-4 h-4" />
                  点击卡片翻转查看释义
                </div>
              </div>

              {/* Back */}
              <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-indigo-600 to-indigo-800 text-white rounded-3xl shadow-xl flex flex-col items-center justify-center p-12 text-center [transform:rotateY(180deg)]">
                <h3 className="text-4xl font-black mb-6">
                  {mockCards[currentCard].meaning}
                </h3>
                
                <div className="bg-white/10 px-6 py-3 rounded-2xl mb-6 backdrop-blur-sm border border-white/20">
                  <p className="text-sm text-indigo-200 font-bold mb-1 tracking-wider uppercase">词根词缀</p>
                  <p className="text-lg text-white font-medium">
                    {mockCards[currentCard].root}
                  </p>
                </div>

                <div className="w-16 h-1 bg-white/20 rounded-full mb-6" />
                <p className="text-xl text-indigo-100 font-medium italic leading-relaxed">
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
