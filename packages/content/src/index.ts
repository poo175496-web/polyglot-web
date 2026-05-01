export interface ContentBlueprint {
  sources: Array<'exam-vocabulary' | 'manual-import' | 'future-reader-import'>;
  requiredFields: Array<'word' | 'meaning' | 'example' | 'audioKey'>;
}

export const contentBlueprint: ContentBlueprint = {
  sources: ['exam-vocabulary', 'manual-import', 'future-reader-import'],
  requiredFields: ['word', 'meaning', 'example', 'audioKey'],
};
