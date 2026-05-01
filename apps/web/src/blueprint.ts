interface NavigationItem {
  label: string;
  href: string;
  description: string;
}

interface WebAppBlueprint {
  appName: string;
  navigation: NavigationItem[];
  routes: string[];
}

export function createWebAppBlueprint(): WebAppBlueprint {
  return {
    appName: 'Polyglot Rebuild Web',
    navigation: [
      { label: '仪表盘', href: '/dashboard', description: '学习概览、连续打卡与推荐任务' },
      { label: '课程库', href: '/decks', description: '浏览考试词书、进入单元和查看详情' },
      { label: '今日复习', href: '/review', description: '优先处理到期卡片和待复习内容' },
      { label: '错词本', href: '/mistakes', description: '集中回练经常出错的单词与题型' },
      { label: '学习统计', href: '/stats', description: '掌握率、作答日志、学习趋势分析' },
    ],
    routes: [
      '/',
      '/dashboard',
      '/decks',
      '/decks/:deckId',
      '/study/:deckId',
      '/review',
      '/mistakes',
      '/stats',
    ],
  };
}
