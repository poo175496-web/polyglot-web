import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Book, Clock, Star, Layers3, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { vocabularyData } from '../data/vocabulary';

const courseCatalog = [
  {
    id: 'zhongkao',
    title: '中考核心词汇冲刺',
    lang: 'en',
    level: '中考',
    rating: 4.8,
    students: 12500,
    image: 'https://images.unsplash.com/photo-1546410531-bea5aadcb8ce?w=500&q=80',
    tagClassName: 'text-sky-700 bg-sky-50 border-sky-100',
    gradientClassName: 'from-sky-500/90 via-blue-500/85 to-indigo-500/80',
    description: '围绕校内阅读、完形与写作高频场景，适合夯实基础与提分。',
    highlights: ['单元闯关', '听写训练', '词义速记'],
  },
  {
    id: 'gaokao',
    title: '高考高频词汇全覆盖',
    lang: 'en',
    level: '高考',
    rating: 4.9,
    students: 38500,
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&q=80',
    tagClassName: 'text-indigo-700 bg-indigo-50 border-indigo-100',
    gradientClassName: 'from-indigo-500/90 via-violet-500/85 to-fuchsia-500/80',
    description: '覆盖阅读理解、七选五与写作常见高频词，适合系统刷词。',
    highlights: ['考纲高频', '阅读语境', '解锁进阶'],
  },
  {
    id: 'ielts',
    title: '雅思核心学术词库',
    lang: 'en',
    level: 'IELTS',
    rating: 4.7,
    students: 23000,
    image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=500&q=80',
    tagClassName: 'text-emerald-700 bg-emerald-50 border-emerald-100',
    gradientClassName: 'from-emerald-500/90 via-teal-500/85 to-cyan-500/80',
    description: '强化图表写作、阅读定位和学术表达，适合备考雅思的提分阶段。',
    highlights: ['学术表达', '阅读定位', '高频搭配'],
  },
  {
    id: 'toefl',
    title: '托福学术词汇精讲',
    lang: 'en',
    level: 'TOEFL',
    rating: 4.9,
    students: 15800,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&q=80',
    tagClassName: 'text-rose-700 bg-rose-50 border-rose-100',
    gradientClassName: 'from-rose-500/90 via-pink-500/85 to-orange-500/80',
    description: '以学术讲座和校园场景为主线，帮助快速适应托福阅读与听力词汇。',
    highlights: ['学术场景', '课堂高频', '精听精读'],
  },
];

export default function CourseList() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return courseCatalog
      .filter((course) => filter === 'all' || course.lang === filter)
      .filter((course) => {
        if (!normalizedSearch) return true;
        return (
          course.title.toLowerCase().includes(normalizedSearch) ||
          course.level.toLowerCase().includes(normalizedSearch) ||
          course.description.toLowerCase().includes(normalizedSearch)
        );
      })
      .map((course) => {
        const words = vocabularyData[course.id] || [];
        return {
          ...course,
          wordCount: words.length,
          unitCount: Math.ceil(words.length / 20),
          previewWords: words.slice(0, 3).map((item) => item.word),
        };
      });
  }, [filter, searchTerm]);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">探索课程</h1>
          <p className="text-gray-500 mt-2 font-medium">按考试目标选择词库，直接进入分单元学习、翻卡、听写与解锁式训练。</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="搜索考试方向、课程名..." 
              className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm w-72 transition-all"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {[{ id: 'all', label: '全部课程' }, { id: 'en', label: '英语词库' }].map(tab => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
              filter === tab.id 
                ? 'bg-gray-900 text-white shadow-md' 
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm">
          <p className="text-sm font-bold text-gray-500 mb-2">课程规模</p>
          <p className="text-3xl font-black text-gray-900">
            {courseCatalog.length}
            <span className="text-base font-bold text-gray-400 ml-2">门考试课程</span>
          </p>
        </div>
        <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm">
          <p className="text-sm font-bold text-gray-500 mb-2">词汇总量</p>
          <p className="text-3xl font-black text-gray-900">
            {Object.values(vocabularyData).reduce((total, words) => total + words.length, 0)}
            <span className="text-base font-bold text-gray-400 ml-2">词</span>
          </p>
        </div>
        <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm">
          <p className="text-sm font-bold text-gray-500 mb-2">学习形式</p>
          <p className="text-lg font-black text-gray-900">翻卡 + 听写 + 解锁式闯关</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course, idx) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${course.gradientClassName} group-hover:opacity-80 transition-opacity z-10`} />
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <span className={`px-3 py-1 backdrop-blur-sm rounded-lg text-xs font-black uppercase tracking-wider shadow-sm border ${course.tagClassName}`}>
                  {course.level}
                </span>
                <span className="px-3 py-1 bg-white/85 text-gray-700 rounded-lg text-xs font-bold shadow-sm">
                  {course.unitCount} Unit
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-1">
                {course.title}
              </h3>

              <p className="text-sm text-gray-500 leading-6 mb-4 min-h-12">
                {course.description}
              </p>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 font-medium mb-6">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                  <span className="text-gray-700">{course.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Book className="w-4 h-4" />
                  <span>{course.wordCount} 词</span>
                </div>
                <div className="flex items-center gap-1">
                  <Layers3 className="w-4 h-4" />
                  <span>{course.unitCount} 单元</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.students} 人在学</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {course.highlights.map((item) => (
                  <span key={item} className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-xs font-bold">
                    {item}
                  </span>
                ))}
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-4 mb-5">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-600 mb-2">
                  <Sparkles className="w-4 h-4" />
                  词汇预览
                </div>
                <p className="text-sm text-slate-500">
                  {course.previewWords.join(' · ')}
                </p>
              </div>
              
              <Link 
                to={`/study/${course.id}`}
                className="block w-full py-3 text-center bg-gray-900 hover:bg-indigo-600 text-white rounded-xl font-bold transition-colors"
              >
                开始学习
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
