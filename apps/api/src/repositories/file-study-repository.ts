import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

import type { DeckProgressState, ReviewLogEntry, StudySessionState } from '../services/study-service';

interface RepositoryState {
  progresses: DeckProgressState[];
  sessions: StudySessionState[];
  reviewLogs: ReviewLogEntry[];
}

const defaultState: RepositoryState = {
  progresses: [],
  sessions: [],
  reviewLogs: [],
};

export function createFileStudyRepository(filePath: string) {
  function readState(): RepositoryState {
    if (!existsSync(filePath)) {
      return structuredClone(defaultState);
    }

    const raw = readFileSync(filePath, 'utf-8');
    return JSON.parse(raw) as RepositoryState;
  }

  function writeState(state: RepositoryState) {
    mkdirSync(dirname(filePath), { recursive: true });
    writeFileSync(filePath, JSON.stringify(state, null, 2), 'utf-8');
  }

  return {
    getProgress(userId: string, deckId: string) {
      return readState().progresses.find((item) => item.userId === userId && item.deckId === deckId) ?? null;
    },

    saveProgress(progress: DeckProgressState) {
      const state = readState();
      state.progresses = state.progresses.filter(
        (item) => !(item.userId === progress.userId && item.deckId === progress.deckId)
      );
      state.progresses.push(progress);
      writeState(state);
      return progress;
    },

    listDeckProgress(userId: string) {
      return readState().progresses.filter((item) => item.userId === userId);
    },

    createSession(session: StudySessionState) {
      const state = readState();
      state.sessions.push(session);
      writeState(state);
      return session;
    },

    getSession(sessionId: string) {
      return readState().sessions.find((item) => item.sessionId === sessionId) ?? null;
    },

    nextSessionId() {
      return `session-${readState().sessions.length + 1}`;
    },

    appendReviewLogs(logs: ReviewLogEntry[]) {
      const state = readState();
      state.reviewLogs.push(...logs);
      writeState(state);
      return logs;
    },

    listReviewLogs(userId: string) {
      return readState().reviewLogs.filter((item) => item.userId === userId);
    },

    nextLogBaseIndex() {
      return readState().reviewLogs.length;
    },
  };
}
