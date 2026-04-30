import { describe, expect, it } from 'vitest';

import { applyProgressSyncResult } from './progress';

describe('applyProgressSyncResult', () => {
  it('keeps the current unlock when the server sync fails', () => {
    expect(applyProgressSyncResult(2, null)).toBe(2);
  });

  it('uses the server unlock when sync succeeds', () => {
    expect(applyProgressSyncResult(1, 3)).toBe(3);
  });

  it('never lets stale responses move progress backwards', () => {
    expect(applyProgressSyncResult(4, 2)).toBe(4);
  });
});
