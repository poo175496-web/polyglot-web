import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Book, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const mockCourses = [
  { id: 'zhongkao', title: '中考核心词汇冲刺', lang: 'en', level: '中考', rating: 4.8, students: 12500, image: 'https://images.unsplash.com/photo-1546410531-bea5aadcb8ce?w=500&q=80', color: 'blue' },
  { id: 'gaokao', title: '高考高频词汇全覆盖', lang: 'en', level: '高考', rating: 4.9, students: 38500, image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&q=80', color: 'indigo' },
  { id: 'ielts', title: '雅思必背8000词', lang: 'en', level: 'IELTS', rating: 4.7, students: 23000, image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=500&q=80', color: 'emerald' },
  { id: 'toefl', title: '托福学术词汇精讲', lang: 'en', level: 'TOEFL', rating: 4.9, students: 15800, image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&q=80', color: 'rose' },
];

export default function CourseList() {
  const [filter, setFilter] = useState('all');

  const filteredCourses = filter === 'all' 
    ? mockCourses 
    : mockCourses.filter(c => c.lang === filter);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">探索课程</h1>
          <p className="text-gray-500 mt-2 font-medium">从零基础到大师级，海量资源等你解锁</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="搜索课程..." 
              className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm w-64 transition-all"
            />
          </div>
          <button className="p-2.5 bg-white border border-gray-200 rounded-full text-gray-600 hover:bg-gray-50 hover:text-indigo-600 shadow-sm transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {[{ id: 'all', label: '全部语种' }, { id: 'en', label: '英语' }, { id: 'ja', label: '日语' }, { id: 'ko', label: '韩语' }].map(tab => (
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
              <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors z-10" />
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 z-20">
                <span className={`px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-black uppercase tracking-wider text-${course.color}-600 shadow-sm`}>
                  {course.level}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-1">
                {course.title}
              </h3>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 font-medium mb-6">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                  <span className="text-gray-700">{course.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Book className="w-4 h-4" />
                  <span>24 节课</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.students} 人在学</span>
                </div>
              </div>
              
              <Link 
                to={`/study/${course.id}`}
                className="block w-full py-3 text-center bg-gray-50 hover:bg-indigo-50 text-gray-900 hover:text-indigo-600 rounded-xl font-bold transition-colors"
              >
                查看详情
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
