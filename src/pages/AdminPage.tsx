import { useCallback, useEffect, useState } from 'react';
import { Users, ShieldCheck, RefreshCcw, BookOpen } from 'lucide-react';

import { fetchJson } from '@/lib/api';
import { useStore } from '@/store/useStore';

interface AdminUserSummary {
  id: number;
  name: string;
  email: string;
  role: 'user' | 'admin';
  targetLanguage: string;
  level: string;
  unlockedUnit: number;
  trackedCourses: number;
}

interface AdminOverviewResponse {
  stats: {
    totalUsers: number;
    adminUsers: number;
    learnersWithProgress: number;
    progressRecords: number;
  };
  users: AdminUserSummary[];
}

export default function AdminPage() {
  const authToken = useStore((state) => state.authToken);
  const [data, setData] = useState<AdminOverviewResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadOverview = useCallback(async () => {
    if (!authToken) {
      setError('登录状态失效，请重新登录');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError('');
    try {
      const response = await fetchJson<AdminOverviewResponse>('/api/admin/overview', {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      setData(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : '加载后台数据失败');
    } finally {
      setLoading(false);
    }
  }, [authToken]);

  useEffect(() => {
    void loadOverview();
  }, [loadOverview]);

  const stats = data?.stats;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">后台管理</h1>
          <p className="text-gray-500 mt-2 font-medium">查看注册用户、学习进度和管理员状态。</p>
        </div>
        <button
          onClick={() => void loadOverview()}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50"
        >
          <RefreshCcw className="w-4 h-4" />
          刷新数据
        </button>
      </div>

      {error && (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm font-medium text-rose-700">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <Users className="w-8 h-8 text-indigo-600 mb-4" />
          <p className="text-sm text-gray-500 font-medium">注册用户</p>
          <p className="text-3xl font-black text-gray-900 mt-1">{loading ? '--' : stats?.totalUsers ?? 0}</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <ShieldCheck className="w-8 h-8 text-emerald-600 mb-4" />
          <p className="text-sm text-gray-500 font-medium">管理员</p>
          <p className="text-3xl font-black text-gray-900 mt-1">{loading ? '--' : stats?.adminUsers ?? 0}</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <BookOpen className="w-8 h-8 text-amber-600 mb-4" />
          <p className="text-sm text-gray-500 font-medium">有进度的用户</p>
          <p className="text-3xl font-black text-gray-900 mt-1">{loading ? '--' : stats?.learnersWithProgress ?? 0}</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <BookOpen className="w-8 h-8 text-sky-600 mb-4" />
          <p className="text-sm text-gray-500 font-medium">进度记录</p>
          <p className="text-3xl font-black text-gray-900 mt-1">{loading ? '--' : stats?.progressRecords ?? 0}</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-lg font-black text-gray-900">用户列表</h2>
          <span className="text-sm font-medium text-gray-500">{data?.users.length ?? 0} 人</span>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-gray-500">
              <tr>
                <th className="text-left px-6 py-4 font-bold">用户</th>
                <th className="text-left px-6 py-4 font-bold">身份</th>
                <th className="text-left px-6 py-4 font-bold">目标语种</th>
                <th className="text-left px-6 py-4 font-bold">等级</th>
                <th className="text-left px-6 py-4 font-bold">已解锁单元</th>
                <th className="text-left px-6 py-4 font-bold">课程记录</th>
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-500 font-medium">
                    正在加载后台数据...
                  </td>
                </tr>
              )}
              {!loading && !data?.users.length && (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-500 font-medium">
                    目前还没有可展示的用户数据。
                  </td>
                </tr>
              )}
              {!loading && data?.users.map((user) => (
                <tr key={user.id} className="border-t border-gray-100">
                  <td className="px-6 py-4">
                    <div className="font-bold text-gray-900">{user.name}</div>
                    <div className="text-gray-500">{user.email}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                      user.role === 'admin' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {user.role === 'admin' ? '管理员' : '普通用户'}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-700">{user.targetLanguage}</td>
                  <td className="px-6 py-4 font-medium text-gray-700">{user.level}</td>
                  <td className="px-6 py-4 font-medium text-gray-700">Unit {user.unlockedUnit + 1}</td>
                  <td className="px-6 py-4 font-medium text-gray-700">{user.trackedCourses}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
