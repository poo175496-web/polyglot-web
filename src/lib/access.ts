type RouteUser = {
  role?: 'user' | 'admin';
} | null;

interface RouteAccessOptions {
  requireAuth?: boolean;
  requireAdmin?: boolean;
}

export function getRouteAccessDecision(user: RouteUser, options: RouteAccessOptions) {
  if (options.requireAuth && !user) {
    return { allowed: false as const, redirectTo: '/login' };
  }

  if (options.requireAdmin && user?.role !== 'admin') {
    return { allowed: false as const, redirectTo: '/dashboard' };
  }

  return { allowed: true as const };
}
