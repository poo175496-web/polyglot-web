export const apiContract = {
  authRegister: {
    method: 'POST',
    path: '/v1/auth/register',
    auth: false,
  },
  authLogin: {
    method: 'POST',
    path: '/v1/auth/login',
    auth: false,
  },
  decksList: {
    method: 'GET',
    path: '/v1/decks',
    auth: true,
  },
  deckDetail: {
    method: 'GET',
    path: '/v1/decks/:deckId',
    auth: true,
  },
  studySessionStart: {
    method: 'POST',
    path: '/v1/study-sessions',
    auth: true,
  },
  studySessionSubmit: {
    method: 'POST',
    path: '/v1/study-sessions/:sessionId/reviews',
    auth: true,
  },
  reviewsDue: {
    method: 'GET',
    path: '/v1/reviews/due',
    auth: true,
  },
  progressOverview: {
    method: 'GET',
    path: '/v1/progress/overview',
    auth: true,
  },
  adminContentImport: {
    method: 'POST',
    path: '/v1/admin/content/import',
    auth: true,
  },
} as const;

export const workspaceBlueprint = {
  apps: ['apps/web', 'apps/api'],
  packages: [
    'packages/domain',
    'packages/contracts',
    'packages/scheduler',
    'packages/content',
  ],
} as const;
