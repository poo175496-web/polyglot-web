import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2, Flame, Award, TrendingUp } from 'lucide-react';
import { useStore } from '@/store/useStore';

const mockPosts = [
  {
    id: 1,
    user: { name: 'Sarah Chen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', level: 'C1' },
    content: '今天终于突破了托福听力28分！给大家分享几个精听的小技巧：1. 先盲听抓大意 2. 逐句精听写 3. 对照文本跟读 4. 总结生词和连读规律。坚持一个月，一定会有质的飞跃！🎧📚',
    time: '2小时前',
    likes: 128,
    comments: 45,
    lang: 'English'
  },
  {
    id: 2,
    user: { name: 'Kenji Sato', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kenji', level: 'N2' },
    content: 'N2词汇量突破6000大关！纪念一下。顺便求助大家，敬语部分总是搞混，有没有什么好的记忆口诀？🙇‍♂️',
    time: '4小时前',
    likes: 85,
    comments: 32,
    lang: 'Japanese'
  },
  {
    id: 3,
    user: { name: 'Min-ho Kim', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Minho', level: 'TOPIK 4' },
    content: '分享一个超棒的韩剧台词打卡群，每天跟着读一句经典台词，口语语感提升非常快！谁要一起来？🎬🗣️',
    time: '5小时前',
    likes: 210,
    comments: 89,
    lang: 'Korean'
  }
];

const mockLeaderboard = [
  { rank: 1, name: 'Alex Wang', score: 12500, streak: 45 },
  { rank: 2, name: 'Emma Liu', score: 11800, streak: 32 },
  { rank: 3, name: 'David Smith', score: 10500, streak: 28 },
  { rank: 4, name: 'Sarah Chen', score: 9800, streak: 15 },
  { rank: 5, name: 'Yuki Tanaka', score: 9200, streak: 21 },
];

export default function Community() {
  const [activeTab, setActiveTab] = useState('feed');
  const user = useStore(state => state.user);

  return (
    <div className="flex gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex-1 max-w-3xl space-y-8">
        <header className="mb-8">
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">学习社区</h1>
          <p className="text-gray-500 mt-2 font-medium">与全球语伴一起交流、成长、互相激励</p>
        </header>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex gap-4">
          <img 
            src={user?.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.name}`} 
            alt={user?.name} 
            className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200"
          />
          <div className="flex-1 space-y-4">
            <textarea 
              placeholder="分享你今天的学习心得..." 
              className="w-full bg-gray-50 rounded-2xl p-4 resize-none h-24 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all text-sm font-medium text-gray-700 placeholder-gray-400 border border-transparent focus:border-indigo-100"
            />
            <div className="flex justify-end">
              <button className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-sm">
                发布动态
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {mockPosts.map((post, idx) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img src={post.user.avatar} alt={post.user.name} className="w-10 h-10 rounded-full border border-gray-200" />
                  <div>
                    <h4 className="font-bold text-gray-900">{post.user.name}</h4>
                    <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                      <span>{post.time}</span>
                      <span>·</span>
                      <span className="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">{post.lang} {post.user.level}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6 font-medium">
                {post.content}
              </p>
              
              <div className="flex items-center gap-6 text-gray-500 border-t border-gray-50 pt-4">
                <button className="flex items-center gap-2 hover:text-rose-500 transition-colors font-medium">
                  <Heart className="w-5 h-5" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 hover:text-indigo-500 transition-colors font-medium">
                  <MessageCircle className="w-5 h-5" />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 hover:text-indigo-500 transition-colors font-medium ml-auto">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <aside className="w-80 space-y-8 hidden xl:block">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-8">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-6 h-6 text-indigo-600" />
            <h3 className="text-xl font-black text-gray-900">本周排行榜</h3>
          </div>
          
          <div className="space-y-4">
            {mockLeaderboard.map((user, idx) => (
              <div key={idx} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-sm
                  ${idx === 0 ? 'bg-amber-100 text-amber-600' : 
                    idx === 1 ? 'bg-gray-100 text-gray-600' : 
                    idx === 2 ? 'bg-orange-100 text-orange-600' : 
                    'bg-white text-gray-400 font-bold'}`}
                >
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-sm">{user.name}</h4>
                  <div className="flex items-center gap-3 text-xs font-medium text-gray-500 mt-1">
                    <span className="flex items-center gap-1"><Award className="w-3 h-3 text-indigo-500" /> {user.score}</span>
                    <span className="flex items-center gap-1"><Flame className="w-3 h-3 text-orange-500" /> {user.streak}天</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-6 py-3 text-sm font-bold text-indigo-600 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-colors">
            查看完整榜单
          </button>
        </div>
      </aside>
    </div>
  );
}
