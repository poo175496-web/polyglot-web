import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { fetchJson } from '@/lib/api';
import { applyProgressSyncResult } from '@/lib/progress';

export interface User {
  id: string;
  name: string;
  avatar?: string;
  level: string;
  targetLanguage: string;
  role?: 'user' | 'admin';
  email?: string;
  progress?: Record<string, number>;
}

interface AuthSession {
  user: User;
  token: string;
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
  authToken: string | null;
  stats: UserStats;
  login: (session: AuthSession) => Promise<void>;
  logout: () => void;
  updateProgress: (courseId: string, completedUnit: number) => Promise<{
    synced: boolean;
    unlockedUnit: number;
    error?: string;
  }>;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      user: null,
      authToken: null,
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
      login: async (session) => {
        set({ user: session.user, authToken: session.token });
      },
      updateProgress: async (courseId, completedUnit) => {
        const { user, authToken } = get();
        if (!user || !authToken) {
          return { synced: false, unlockedUnit: 0, error: '请先登录后再同步进度' };
        }

        const currentUnlock = user.progress?.[courseId] || 0;

        try {
          const data = await fetchJson<{ unlocked_unit: number }>('/api/progress', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${authToken}`
            },
            body: JSON.stringify({ courseId, completedUnit })
          });

          const unlockedUnit = applyProgressSyncResult(currentUnlock, data.unlocked_unit);
          set({
            user: {
              ...user,
              progress: {
                ...(user.progress || {}),
                [courseId]: unlockedUnit
              }
            }
          });

          return { synced: true, unlockedUnit };
        } catch (err) {
          console.error('Update progress failed', err);
          return {
            synced: false,
            unlockedUnit: currentUnlock,
            error: err instanceof Error ? err.message : '进度同步失败，请稍后重试'
          };
        }
      },
      logout: () => set({ user: null, authToken: null })
    }),
    {
      name: 'polyglot-storage', // localStorage 中的 key 名称
    }
  )
);
