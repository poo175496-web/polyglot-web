import type { ReactNode } from 'react';

import {
  RebuildDashboardPage,
  RebuildDecksPage,
  RebuildPlaceholderPage,
  RebuildStudyPage,
} from './pages';

interface RouteRecord {
  path: string;
  element: ReactNode;
}

export function createRebuildWebRoutes(): RouteRecord[] {
  return [
    { path: '/', element: <RebuildDashboardPage /> },
    { path: '/dashboard', element: <RebuildDashboardPage /> },
    { path: '/decks', element: <RebuildDecksPage /> },
    { path: '/study/:deckId', element: <RebuildStudyPage /> },
    {
      path: '/review',
      element: <RebuildPlaceholderPage title="今日复习" description="这里会展示到期卡片、今日目标和开始复习入口。" />,
    },
    {
      path: '/mistakes',
      element: <RebuildPlaceholderPage title="错词本" description="这里会展示高频错词、错题回放和专项强化训练。" />,
    },
    {
      path: '/stats',
      element: <RebuildPlaceholderPage title="学习统计" description="这里会展示掌握率、作答趋势和课程完成度。" />,
    },
  ];
}
