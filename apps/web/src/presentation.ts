export interface DeckPresentation {
  accentLabel: string;
  accentWord: string;
  accentFrom: string;
  accentTo: string;
  accentGlow: string;
  primaryColor: string;
  secondaryColor: string;
}

const DECK_PRESENTATIONS: Record<string, DeckPresentation> = {
  zhongkao: {
    accentLabel: 'Foundation Route',
    accentWord: '中考冲刺',
    accentFrom: 'rgba(34, 211, 238, 0.18)',
    accentTo: 'rgba(59, 130, 246, 0.16)',
    accentGlow: 'text-cyan-200',
    primaryColor: '#22d3ee',
    secondaryColor: '#3b82f6',
  },
  gaokao: {
    accentLabel: 'Summit Route',
    accentWord: '高考破峰',
    accentFrom: 'rgba(167, 139, 250, 0.18)',
    accentTo: 'rgba(99, 102, 241, 0.18)',
    accentGlow: 'text-violet-200',
    primaryColor: '#a78bfa',
    secondaryColor: '#6366f1',
  },
  ielts: {
    accentLabel: 'Global Route',
    accentWord: '雅思跃迁',
    accentFrom: 'rgba(52, 211, 153, 0.18)',
    accentTo: 'rgba(6, 182, 212, 0.18)',
    accentGlow: 'text-emerald-200',
    primaryColor: '#34d399',
    secondaryColor: '#06b6d4',
  },
  toefl: {
    accentLabel: 'Campus Route',
    accentWord: '托福远征',
    accentFrom: 'rgba(252, 211, 77, 0.18)',
    accentTo: 'rgba(249, 115, 22, 0.18)',
    accentGlow: 'text-amber-200',
    primaryColor: '#fcd34d',
    secondaryColor: '#f97316',
  },
};

const FALLBACK_PRESENTATION: DeckPresentation = {
  accentLabel: 'Core Route',
  accentWord: '核心学习',
  accentFrom: 'rgba(56, 189, 248, 0.18)',
  accentTo: 'rgba(99, 102, 241, 0.18)',
  accentGlow: 'text-sky-200',
  primaryColor: '#38bdf8',
  secondaryColor: '#6366f1',
};

export function getDeckPresentation(deckId: string) {
  return DECK_PRESENTATIONS[deckId] || FALLBACK_PRESENTATION;
}
