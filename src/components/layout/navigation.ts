import { BookOpenCheck, LayoutDashboard, Library, Rocket, Users } from 'lucide-react';

export type AppNavRole = 'user' | 'admin' | undefined;

export interface SidebarNavItem {
  name: string;
  path: string;
  icon: typeof LayoutDashboard;
}

export function buildSidebarNavItems(role: AppNavRole): SidebarNavItem[] {
  const items: SidebarNavItem[] = [
    { name: '控制台', path: '/dashboard', icon: LayoutDashboard },
    { name: '课程大厅', path: '/courses', icon: Library },
    { name: '学习社区', path: '/community', icon: Users },
    { name: '新学习站', path: '/rebuild/dashboard', icon: Rocket },
    { name: '新课程页', path: '/rebuild/decks', icon: BookOpenCheck },
  ];

  if (role === 'admin') {
    items.push({ name: '后台管理', path: '/admin', icon: LayoutDashboard });
  }

  return items;
}
