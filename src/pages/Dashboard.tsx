import { useStore } from '@/store/useStore';
import { Play, Flame, Clock, BookOpen, ChevronRight, Layers3, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { vocabularyData } from '@/data/vocabulary';

const dashboardCourses = [
  {
    id: 'zhongkao',
    title: '中考核心词汇冲刺',
    description: '基础词汇巩固，适合做日常打卡。',
    accentClassName: 'from-sky-500 to-blue-600',
  },
  {
    id: 'gaokao',
    title: '高考高频词汇全覆盖',
    description: '覆盖阅读、写作与语法填空高频词。',
    accentClassName: 'from-indigo-500 to-violet-600',
  },
  {
    id: 'ielts',
    title: '雅思核心学术词库',
    description: '适合冲刺学术阅读与写作表达。',
    accentClassName: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'toefl',
    title: '托福学术词汇精讲',
    description: '偏学术与课堂场景，适合长线进阶。',
    accentClassName: 'from-rose-500 to-orange-600',
  },
];

export default function Dashboard() {
  const { user, stats } = useStore();
  const courseProgress = dashboardCourses.map((course) => {
    const words = vocabularyData[course.id] || [];
    const unitCount = Math.ceil(words.length / 20);
    const unlockedUnit = user?.progress?.[course.id] || 0;
    const completedUnits = Math.min(unlockedUnit + 1, unitCount);
    const percent = Math.round((completedUnits / unitCount) * 100);

    return {
      ...course,
      wordCount: words.length,
      unitCount,
      unlockedUnit,
      completedUnits,
      percent,
    };
  });

  const continueCourse =
    courseProgress.find((course) => course.percent < 100) ?? courseProgress[0];

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
          <div className={`bg-gradient-to-br ${continueCourse.accentClassName} rounded-3xl p-8 text-white relative overflow-hidden shadow-xl`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-lg text-sm font-bold backdrop-blur-sm mb-4">
                为你推荐
              </span>
              <h2 className="text-3xl font-black mb-2">{continueCourse.title}</h2>
              <p className="text-white/85 mb-8 max-w-xl leading-7">
                {continueCourse.description} 当前词库共 {continueCourse.wordCount} 词，分为 {continueCourse.unitCount} 个闯关单元，
                学完并同步进度后自动解锁下一单元。
              </p>
              
              <div className="flex items-center justify-between bg-white/10 rounded-2xl p-4 backdrop-blur-md border border-white/10">
                <div className="flex-1 mr-8">
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span>当前进度</span>
                    <span>{continueCourse.percent}%</span>
                  </div>
                  <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white rounded-full transition-all duration-700" style={{ width: `${continueCourse.percent}%` }} />
                  </div>
                </div>
                <Link 
                  to={`/study/${continueCourse.id}`}
                  className="flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-slate-50 transition-colors shadow-lg"
                >
                  <Play className="w-5 h-5 fill-current" />
                  继续学习
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courseProgress.slice(0, 2).map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wide">{course.id}</p>
                    <h3 className="text-xl font-black text-gray-900 mt-1">{course.title}</h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-gray-50 text-gray-600 text-xs font-bold">
                    {course.wordCount} 词
                  </span>
                </div>

                <p className="text-sm text-gray-500 leading-6 mb-5">{course.description}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-5">
                  <div className="flex items-center gap-1">
                    <Layers3 className="w-4 h-4" />
                    <span>{course.unitCount} 单元</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Target className="w-4 h-4" />
                    <span>已解锁 {course.completedUnits} / {course.unitCount}</span>
                  </div>
                </div>

                <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
                  <div className={`h-full bg-gradient-to-r ${course.accentClassName} rounded-full transition-all duration-700`} style={{ width: `${course.percent}%` }} />
                </div>

                <Link
                  to={`/study/${course.id}`}
                  className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-700"
                >
                  进入课程
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar Area */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-bold text-gray-900 text-lg">学习总览</h3>
              <span className="text-xs font-bold text-gray-400">实时同步</span>
            </div>
            <div className="space-y-4">
              {courseProgress.map((course) => (
                <Link
                  key={course.id}
                  to={`/study/${course.id}`}
                  className="block rounded-2xl border border-gray-100 p-4 hover:border-indigo-200 hover:bg-indigo-50/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">{course.title}</span>
                    <span className="text-sm font-bold text-indigo-600">{course.percent}%</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">{course.completedUnits} / {course.unitCount} 单元可学</p>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${course.accentClassName} rounded-full`} style={{ width: `${course.percent}%` }} />
                  </div>
                </Link>
              ))}
            </div>
          </div>

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
