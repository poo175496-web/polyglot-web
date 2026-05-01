import { describe, expect, it } from 'vitest';

import { RebuildPlaceholderPage } from '../../apps/web/src/pages';
import { createRebuildWebRoutes } from '../../apps/web/src/routes';

describe('rebuild web routes config', () => {
  it('creates page route records for the rebuilt frontend shell', () => {
    const routes = createRebuildWebRoutes();

    expect(routes.map((route) => route.path)).toEqual([
      '/',
      '/dashboard',
      '/decks',
      '/study/:deckId',
      '/review',
      '/mistakes',
      '/stats',
    ]);
  });

  it('re-exports the placeholder page from the pages module', () => {
    expect(RebuildPlaceholderPage).toBeTypeOf('function');
  });
});
