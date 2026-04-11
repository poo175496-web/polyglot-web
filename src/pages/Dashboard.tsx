import { useStore } from '@/store/useStore';
import { Play, Flame, Clock, BookOpen, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { user, stats } = useStore();

  const statCards = [
    { label: '学习时长', value: `${stats.totalHours}h`, icon: Clock, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: '掌握词汇', value: stats.wordsLearned, icon: BookOpen, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: '连续打卡', value: `${stats.streakDays}天`, icon: Flame, color: 'text-orange-600', bg: 'bg-orange-50' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">
            欢迎回来，{user?.name}! 👋
          </h1>
          <p className="text-gray-500 mt-2 font-medium">今天也是进步的一天，准备好开始学习了吗？</p>
        </div>
        <Link 
          to="/courses"
          className="hidden sm:flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-700 bg-indigo-50 px-4 py-2 rounded-xl transition-colors"
        >
          浏览全部课程
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statCards.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow"
            >
              <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                <Icon className="w-7 h-7" />
              </div>
              <div>
                <p className="text-gray-500 font-medium text-sm mb-1">{stat.label}</p>
                <h3 className="text-2xl font-black text-gray-900">{stat.value}</h3>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
          {/* Continue Learning */}
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl shadow-indigo-200">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-lg text-sm font-bold backdrop-blur-sm mb-4">
                为你推荐
              </span>
              <h2 className="text-3xl font-black mb-2">职场英语：商务邮件沟通</h2>
              <p className="text-indigo-100 mb-8 max-w-md">
                学习如何撰写专业、地道的商务英文邮件，包含常用句型与实战演练。
              </p>
              
              <div className="flex items-center justify-between bg-white/10 rounded-2xl p-4 backdrop-blur-md border border-white/10">
                <div className="flex-1 mr-8">
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span>当前进度</span>
                    <span>65%</span>
                  </div>
                  <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white rounded-full" style={{ width: '65%' }} />
                  </div>
                </div>
                <Link 
                  to="/study/course-1"
                  className="flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors shadow-lg"
                >
                  <Play className="w-5 h-5 fill-current" />
                  继续学习
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Area */}
        <div className="space-y-8">
          {/* Achievements */}
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-gray-900 text-lg">我的徽章</h3>
              <button className="text-sm font-bold text-indigo-600 hover:text-indigo-700">查看全部</button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {stats.achievements.map((badge) => (
                <div key={badge.id} className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-full bg-gray-50 border-2 border-gray-100 flex items-center justify-center text-2xl shadow-sm hover:scale-110 transition-transform cursor-pointer">
                    {badge.iconUrl}
                  </div>
                  <span className="text-xs font-bold text-gray-600 text-center">{badge.badgeName}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
