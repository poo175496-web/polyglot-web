import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  avatar: string;
  level: string;
  targetLanguage: string;
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
  login: (user: User) => void;
  logout: () => void;
}

export const useStore = create<StoreState>((set) => ({
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
  login: (user) => set({ user }),
  logout: () => set({ user: null })
}));
