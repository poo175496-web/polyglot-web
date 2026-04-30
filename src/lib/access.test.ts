import { describe, expect, it } from 'vitest';

import { getRouteAccessDecision } from './access';

describe('getRouteAccessDecision', () => {
  it('redirects guests away from protected pages', () => {
    expect(getRouteAccessDecision(null, { requireAuth: true })).toEqual({
      allowed: false,
      redirectTo: '/login'
    });
  });

  it('redirects non-admin users away from admin pages', () => {
    expect(
      getRouteAccessDecision(
        { role: 'user' },
        { requireAuth: true, requireAdmin: true }
      )
    ).toEqual({
      allowed: false,
      redirectTo: '/dashboard'
    });
  });

  it('allows admins into admin pages', () => {
    expect(
      getRouteAccessDecision(
        { role: 'admin' },
        { requireAuth: true, requireAdmin: true }
      )
    ).toEqual({
      allowed: true
    });
  });
});
