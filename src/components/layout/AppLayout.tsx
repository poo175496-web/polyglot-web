import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import { useStore } from '@/store/useStore';
import { Navigate } from 'react-router-dom';
import { getRouteAccessDecision } from '@/lib/access';

interface AppLayoutProps {
  children: ReactNode;
  requireAdmin?: boolean;
  requireAuth?: boolean;
}

export default function AppLayout({ children, requireAdmin = false, requireAuth = true }: AppLayoutProps) {
  const user = useStore((state) => state.user);
  const decision = getRouteAccessDecision(user, { requireAuth, requireAdmin });

  if (!decision.allowed) {
    return <Navigate to={decision.redirectTo} replace />;
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
