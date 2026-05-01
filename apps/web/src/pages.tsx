import type { ReactNode } from 'react';

import { createAppShellModel } from './app-shell';

function PageSection({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-black text-slate-900">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
      {children ? <div className="mt-5">{children}</div> : null}
    </section>
  );
}

export function RebuildPlaceholderPage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return <PageSection title={title} description={description} />;
}

export function RebuildDashboardPage() {
  return (
    <PageSection
      title="新仪表盘骨架"
      description="这里会接入 progress overview、推荐继续学习 deck、到期复习提醒和学习趋势图。"
    />
  );
}

export function RebuildDecksPage() {
  return (
    <PageSection
      title="新课程库骨架"
      description="这里会接入 decks list、deck detail、单元卡片统计和考试分类筛选。"
    />
  );
}

export function RebuildStudyPage() {
  return (
    <PageSection
      title="新学习页骨架"
      description="这里会接入 study session、翻卡流程、听写模式、提交作答和进度推进。"
    />
  );
}

export function RebuildAppShellPreview() {
  const shell = createAppShellModel();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-indigo-500">Rebuild</p>
            <h1 className="text-2xl font-black">{shell.appName}</h1>
          </div>
          <nav className="flex flex-wrap items-center gap-2">
            {shell.navigation.map((item) => (
              <span
                key={item.href}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-600"
              >
                {item.label}
              </span>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-6 px-6 py-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RebuildDashboardPage />
        </div>
        <div className="space-y-6">
          <RebuildDecksPage />
          <RebuildStudyPage />
        </div>
      </main>
    </div>
  );
}
