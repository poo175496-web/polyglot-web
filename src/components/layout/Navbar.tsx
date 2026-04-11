import { Link } from 'react-router-dom';
import { useStore } from '@/store/useStore';
import { Globe, LogIn } from 'lucide-react';

export default function Navbar() {
  const user = useStore((state) => state.user);

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 px-6 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2 text-indigo-600">
        <Globe className="w-8 h-8" />
        <span className="text-xl font-bold font-sans tracking-tight">Polyglot</span>
      </Link>
      
      <div className="flex items-center gap-4">
        {user ? (
          <Link to="/dashboard" className="px-4 py-2 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200">
            进入控制台
          </Link>
        ) : (
          <Link to="/login" className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-all hover:shadow-lg hover:-translate-y-0.5">
            <LogIn className="w-4 h-4" />
            登录 / 注册
          </Link>
        )}
      </div>
    </nav>
  );
}
