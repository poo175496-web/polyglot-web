import { describe, expect, it } from 'vitest';

import { createWebAppBlueprint } from '../../apps/web/src/blueprint';

describe('rebuild web shell', () => {
  it('defines the core navigation for the rebuilt word learning app', () => {
    const blueprint = createWebAppBlueprint();

    expect(blueprint.navigation.map((item) => item.label)).toEqual([
      '仪表盘',
      '课程库',
      '今日复习',
      '错词本',
      '学习统计',
    ]);
  });

  it('defines the new frontend route skeleton', () => {
    const blueprint = createWebAppBlueprint();

    expect(blueprint.routes).toEqual([
      '/',
      '/dashboard',
      '/decks',
      '/decks/:deckId',
      '/study/:deckId',
      '/review',
      '/mistakes',
      '/stats',
    ]);
  });
});
