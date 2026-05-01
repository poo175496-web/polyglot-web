import { describe, expect, it } from 'vitest';

import { vocabularyData } from './vocabulary';

describe('vocabularyData', () => {
  it('keeps each course rich enough for multi-unit study', () => {
    for (const [courseId, words] of Object.entries(vocabularyData)) {
      expect(words.length, `${courseId} should contain at least 60 words`).toBeGreaterThanOrEqual(60);
    }
  });

  it('provides memory root and example sentence for every word', () => {
    for (const [courseId, words] of Object.entries(vocabularyData)) {
      for (const word of words) {
        expect(word.root, `${courseId}:${word.word} is missing root`).toBeTruthy();
        expect(word.example, `${courseId}:${word.word} is missing example`).toBeTruthy();
      }
    }
  });
});
