export type StudyMode = 'list' | 'flashcard' | 'dictation' | 'finished';

interface SessionStateInput {
  studyMode: StudyMode;
  activeGroupId: number | null;
  unlockedUnit: number;
  hasSearchTerm: boolean;
}

interface SessionStateOutput {
  studyMode: StudyMode;
  activeGroupId: number | null;
}

export function getSessionStateForUnlockedUnit({
  studyMode,
  activeGroupId,
  unlockedUnit,
  hasSearchTerm,
}: SessionStateInput): SessionStateOutput {
  if (hasSearchTerm) {
    return {
      studyMode,
      activeGroupId,
    };
  }

  if (activeGroupId === null) {
    return {
      studyMode,
      activeGroupId,
    };
  }

  if (activeGroupId > unlockedUnit) {
    return {
      studyMode: 'list',
      activeGroupId: null,
    };
  }

  return {
    studyMode,
    activeGroupId,
  };
}
