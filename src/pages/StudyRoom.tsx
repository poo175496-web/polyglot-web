import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Volume2, Mic, CheckCircle2, RotateCcw } from 'lucide-react';

export default function StudyRoom() {
  const { courseId } = useParams();
  const [flipped, setFlipped] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);

  const mockCards = [
    { word: 'Accomplish', phonetic: '/əˈkʌmplɪʃ/', meaning: '完成；实现；达到', root: 'ac- (加强语气) + complish (完成) ➔ 强调去完成', example: 'We have accomplished a lot today.' },
    { word: 'Persistent', phonetic: '/pərˈsɪstənt/', meaning: '坚持不懈的；执着的', root: 'per- (始终) + sist (站立) + -ent (形容词后缀) ➔ 始终站立 ➔ 坚持的', example: 'She has been persistent in her studies.' },
    { word: 'Innovative', phonetic: '/ɪˈnɒvətɪv/', meaning: '创新的；革新的', root: 'in- (进入) + nov (新) + -ative (形容词后缀) ➔ 引入新的事物 ➔ 创新的', example: 'They came up with an innovative solution.' },
  ];

  const handleNext = () => {
    setFlipped(false);
    if (currentCard < mockCards.length - 1) {
      setCurrentCard(prev => prev + 1);
    }
  };

  const handleFlip = () => setFlipped(!flipped);

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
                <div className="absolute top-6 right-6 p-3 bg-gray-50 rounded-full text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
                  <Volume2 className="w-6 h-6" />
                </div>
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

        <div className="mt-12 flex items-center justify-center gap-6 w-full">
          <button className="flex-1 max-w-[200px] flex items-center justify-center gap-2 py-4 bg-white border-2 border-gray-100 text-gray-600 rounded-2xl font-bold hover:bg-gray-50 hover:text-indigo-600 hover:border-indigo-100 transition-all shadow-sm">
            <Mic className="w-5 h-5" />
            口语跟读
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
      </main>
    </div>
  );
}
