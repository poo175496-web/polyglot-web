import { Link, useLocation } from 'react-router-dom';
import { useStore } from '@/store/useStore';
import { 
  LayoutDashboard, 
  Library, 
  Users, 
  LogOut,
  Globe
} from 'lucide-react';
import { clsx } from 'clsx';

export default function Sidebar() {
  const location = useLocation();
  const { user, logout } = useStore();

  const navItems = [
    { name: '控制台', path: '/dashboard', icon: LayoutDashboard },
    { name: '课程大厅', path: '/courses', icon: Library },
    { name: '学习社区', path: '/community', icon: Users },
  ];
  const adminItems = user?.role === 'admin'
    ? [{ name: '后台管理', path: '/admin', icon: LayoutDashboard }]
    : [];
  const allNavItems = [...navItems, ...adminItems];

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col justify-between p-4 fixed left-0 top-0 z-40">
      <div>
        <div className="flex items-center gap-3 px-2 py-4 mb-6">
          <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
            <Globe className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">Polyglot</span>
        </div>

        <nav className="flex flex-col gap-2">
          {allNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={clsx(
                  "flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200",
                  isActive 
                    ? "bg-indigo-50 text-indigo-600" 
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <Icon className={clsx("w-5 h-5", isActive ? "text-indigo-600" : "text-gray-400")} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex flex-col gap-4 mt-8">
        {user && (
          <div className="p-4 bg-gray-50 rounded-2xl flex items-center gap-3">
            <img 
              src={user.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} 
              alt={user.name} 
              className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-200"
            />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-900">{user.name}</span>
              <span className="text-xs text-gray-500 font-medium">级别: {user.level}</span>
            </div>
          </div>
        )}
        
        <button
          onClick={logout}
          className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
        >
          <LogOut className="w-4 h-4" />
          退出登录
        </button>
      </div>
    </aside>
  );
}
