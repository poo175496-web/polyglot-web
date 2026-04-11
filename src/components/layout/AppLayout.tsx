import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import { useStore } from '@/store/useStore';
import { Navigate, useLocation } from 'react-router-dom';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const user = useStore((state) => state.user);
  const location = useLocation();

  if (!user && location.pathname !== '/' && location.pathname !== '/login') {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1F2937] font-sans flex">
      <Sidebar />
      <main className="flex-1 ml-64 p-8 overflow-y-auto relative h-screen">
        <div className="max-w-6xl mx-auto pb-24">
          {children}
        </div>
      </main>
    </div>
  );
}
