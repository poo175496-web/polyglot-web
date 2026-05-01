import { describe, expect, it } from 'vitest';

import { buildSidebarNavItems } from '../../src/components/layout/navigation';

describe('sidebar navigation', () => {
  it('includes the rebuilt app entry for normal users', () => {
    const items = buildSidebarNavItems('user');

    expect(items.map((item) => item.path)).toContain('/rebuild/dashboard');
  });

  it('keeps admin entry for admin users', () => {
    const items = buildSidebarNavItems('admin');

    expect(items.map((item) => item.path)).toContain('/admin');
    expect(items.map((item) => item.path)).toContain('/rebuild/dashboard');
  });
});
