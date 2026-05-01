import { describe, expect, it } from 'vitest';

import { getDeckPresentation } from '../../apps/web/src/presentation';

describe('rebuild presentation system', () => {
  it('maps exam decks to distinct flagship presentation themes', () => {
    expect(getDeckPresentation('zhongkao')).toMatchObject({
      accentLabel: 'Foundation Route',
      accentWord: '中考冲刺',
    });
    expect(getDeckPresentation('gaokao')).toMatchObject({
      accentLabel: 'Summit Route',
      accentWord: '高考破峰',
    });
    expect(getDeckPresentation('ielts')).toMatchObject({
      accentLabel: 'Global Route',
      accentWord: '雅思跃迁',
    });
    expect(getDeckPresentation('toefl')).toMatchObject({
      accentLabel: 'Campus Route',
      accentWord: '托福远征',
    });
  });

  it('falls back to a neutral flagship palette for unknown decks', () => {
    expect(getDeckPresentation('custom')).toMatchObject({
      accentLabel: 'Core Route',
      accentWord: '核心学习',
    });
  });
});
