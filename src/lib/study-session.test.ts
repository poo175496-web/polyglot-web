import { describe, expect, it } from 'vitest';

import { getSessionStateForUnlockedUnit } from './study-session';

describe('getSessionStateForUnlockedUnit', () => {
  it('resets back to unit list when the current unit is locked for the new user', () => {
    expect(
      getSessionStateForUnlockedUnit({
        studyMode: 'flashcard',
        activeGroupId: 3,
        unlockedUnit: 0,
        hasSearchTerm: false,
      })
    ).toEqual({
      studyMode: 'list',
      activeGroupId: null,
    });
  });

  it('keeps search mode available even if no unit is unlocked yet', () => {
    expect(
      getSessionStateForUnlockedUnit({
        studyMode: 'flashcard',
        activeGroupId: null,
        unlockedUnit: 0,
        hasSearchTerm: true,
      })
    ).toEqual({
      studyMode: 'flashcard',
      activeGroupId: null,
    });
  });
});
