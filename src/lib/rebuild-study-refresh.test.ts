import { describe, expect, it } from 'vitest';

import { shouldRefreshStudyStateAfterSubmit } from '../../apps/web/src/study-session';

describe('rebuild study refresh', () => {
  it('refreshes study state after a successful session submission', () => {
    expect(
      shouldRefreshStudyStateAfterSubmit({
        reviewCount: 20,
        unlockedUnitIndex: 1,
        mode: 'LEARN',
      })
    ).toBe(true);
  });

  it('does not refresh if nothing was submitted', () => {
    expect(
      shouldRefreshStudyStateAfterSubmit({
        reviewCount: 0,
        unlockedUnitIndex: 0,
        mode: 'LEARN',
      })
    ).toBe(false);
  });

  it('does not auto-refresh a targeted review drill after submission', () => {
    expect(
      shouldRefreshStudyStateAfterSubmit({
        reviewCount: 1,
        unlockedUnitIndex: 0,
        mode: 'REVIEW',
      })
    ).toBe(false);
  });
});
