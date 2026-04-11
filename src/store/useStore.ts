import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
  avatar: string;
  level: string;
  targetLanguage: string;
  email?: string;
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
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
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
        try {
          if (user.email) {
            const res = await fetch('https://polyglot-api.onrender.com/api/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email: user.email })
            });
            if (res.ok) {
              const data = await res.json();
              set({ user: data.user });
              return;
            }
          }
          set({ user });
        } catch (err) {
          console.error('Login failed', err);
          set({ user });
        }
      },
      logout: () => set({ user: null })
    }),
    {
      name: 'polyglot-storage', // localStorage 中的 key 名称
    }
  )
);
