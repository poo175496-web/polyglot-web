import { describe, expect, it } from 'vitest';

import { apiContract, workspaceBlueprint } from '../../packages/contracts/src/blueprint';

describe('rebuild contracts blueprint', () => {
  it('defines the required API boundaries for the rebuilt platform', () => {
    expect(Object.keys(apiContract)).toEqual([
      'authRegister',
      'authLogin',
      'decksList',
      'deckDetail',
      'studySessionStart',
      'studySessionSubmit',
      'reviewsDue',
      'progressOverview',
      'adminContentImport',
    ]);
  });

  it('declares the new monorepo workspace layout', () => {
    expect(workspaceBlueprint.apps).toEqual(['apps/web', 'apps/api']);
    expect(workspaceBlueprint.packages).toEqual([
      'packages/domain',
      'packages/contracts',
      'packages/scheduler',
      'packages/content',
    ]);
  });
});
