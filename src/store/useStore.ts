import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
  avatar: string;
  level: string;
  targetLanguage: string;
  email?: string;
  progress?: Record<string, number>;
}

interface Achievement {
  id: string;
  badgeName: string;
  iconUrl: string;
}

interface UserStats {
  totalHours: number;
  wordsLearned: number;
  streakDays: number;
  achievements: Achievement[];
}

interface StoreState {
  user: User | null;
  stats: UserStats;
  login: (user: User) => Promise<void>;
  logout: () => void;
  updateProgress: (courseId: string, completedUnit: number) => Promise<void>;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      user: null,
      stats: {
        totalHours: 42.5,
        wordsLearned: 1250,
        streakDays: 15,
        achievements: [
          { id: '1', badgeName: '初出茅庐', iconUrl: '🏆' },
          { id: '2', badgeName: '连续七天', iconUrl: '🔥' },
          { id: '3', badgeName: '百词斩', iconUrl: '📖' }
        ]
      },
      login: async (user) => {
        set({ user });
      },
      updateProgress: async (courseId, completedUnit) => {
        const { user } = get();
        if (!user) return;
        
        try {
          const res = await fetch('https://polyglot-web-g2pa.onrender.com/api/progress', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: user.id, courseId, completedUnit })
          });
          if (res.ok) {
            const data = await res.json();
            set({
              user: {
                ...user,
                progress: {
                  ...(user.progress || {}),
                  [courseId]: data.unlocked_unit
                }
              }
            });
            return;
          }
        } catch (err) {
          console.error('Update progress failed', err);
        }
        
        // 降级处理：如果后台请求失败，前端依然更新本地状态，保证用户能继续学
        const currentUnlock = user.progress?.[courseId] || 0;
        const nextUnlock = Math.max(currentUnlock, completedUnit + 1);
        set({
          user: {
            ...user,
            progress: {
              ...(user.progress || {}),
              [courseId]: nextUnlock
            }
          }
        });
      },
      logout: () => set({ user: null })
    }),
    {
      name: 'polyglot-storage', // localStorage 中的 key 名称
    }
  )
);
