import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import { motion } from 'framer-motion';
import { Sparkles, BrainCircuit, Users, Award } from 'lucide-react';

export default function LandingPage() {
  const features = [
    {
      icon: BrainCircuit,
      title: '沉浸式学习体验',
      description: '基于遗忘曲线的四维互动模块，听说读写全面提升。',
      color: 'bg-indigo-100 text-indigo-600',
    },
    {
      icon: Sparkles,
      title: '个性化路径推荐',
      description: 'AI智能评测当前水平，量身定制专属学习计划。',
      color: 'bg-pink-100 text-pink-600',
    },
    {
      icon: Users,
      title: '活跃的语伴社区',
      description: '与全球学习者实时互动，分享动态，组队打卡。',
      color: 'bg-emerald-100 text-emerald-600',
    },
    {
      icon: Award,
      title: '趣味成就系统',
      description: '收集专属徽章，攀登每周排行榜，让学习像游戏一样上瘾。',
      color: 'bg-amber-100 text-amber-600',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-indigo-100">
      <Navbar />
      
      <main className="pt-24 pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center pt-20 pb-24 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-indigo-50 to-pink-50 rounded-full blur-3xl opacity-50 -z-10" />
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-black tracking-tight text-gray-900 mb-8"
          >
            打破语言壁垒
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
              探索无限世界
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto"
          >
            首创多语种沉浸式学习平台，结合互动模块、智能推荐与社区生态，带你高效掌握英语、日语、韩语。
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/login" 
              className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold text-lg hover:bg-gray-800 hover:-translate-y-1 transition-all shadow-xl shadow-gray-900/20"
            >
              免费开启学习之旅
            </Link>
            <a 
              href="#features" 
              className="px-8 py-4 bg-gray-100 text-gray-900 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors"
            >
              了解核心功能
            </a>
          </motion.div>
        </div>

        <div id="features" className="py-24 border-t border-gray-100">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
