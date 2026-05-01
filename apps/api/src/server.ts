import cors from 'cors';
import express from 'express';

import { createHttpHandlers } from './http/handlers';
import { createApiRouter } from './http/router';
import { createFileStudyRepository } from './repositories/file-study-repository';

export function createExpressApp(storageFilePath = './apps/api/.runtime/study-state.json') {
  const repository = createFileStudyRepository(storageFilePath);
  const router = createApiRouter({ repository });
  const handlers = createHttpHandlers({ router });

  const app = express();
  app.use(cors());
  app.use(express.json());

  app.get('/v1/health', async (_req, res) => {
    const response = await handlers.health();
    res.status(response.status).json(response.body);
  });

  app.get('/v1/decks', async (req, res) => {
    const response = await handlers.decksList({
      query: { userId: String(req.query.userId || 'guest') },
    });
    res.status(response.status).json(response.body);
  });

  app.get('/v1/decks/:deckId', async (req, res) => {
    const response = await handlers.deckDetail({
      params: { deckId: req.params.deckId },
      query: { userId: String(req.query.userId || 'guest') },
    });
    res.status(response.status).json(response.body);
  });

  app.post('/v1/study-sessions', async (req, res) => {
    const response = await handlers.studySessionStart({
      body: {
        userId: String(req.body.userId || 'guest'),
        deckId: String(req.body.deckId || ''),
        mode: req.body.mode === 'REVIEW' || req.body.mode === 'TEST' ? req.body.mode : 'LEARN',
        cardIds: Array.isArray(req.body.cardIds) ? req.body.cardIds.map((cardId) => String(cardId)) : undefined,
      },
    });
    res.status(response.status).json(response.body);
  });

  app.post('/v1/study-sessions/:sessionId/reviews', async (req, res) => {
    const response = await handlers.studySessionSubmit({
      params: { sessionId: req.params.sessionId },
      body: {
        userId: String(req.body.userId || 'guest'),
        answers: Array.isArray(req.body.answers) ? req.body.answers : [],
      },
    });
    res.status(response.status).json(response.body);
  });

  app.get('/v1/progress/overview', async (req, res) => {
    const response = await handlers.progressOverview({
      query: { userId: String(req.query.userId || 'guest') },
    });
    res.status(response.status).json(response.body);
  });

  app.get('/v1/reviews/due', async (req, res) => {
    const response = await handlers.reviewsDue({
      query: { userId: String(req.query.userId || 'guest') },
    });
    res.status(response.status).json(response.body);
  });

  app.get('/v1/mistakes', async (req, res) => {
    const response = await handlers.mistakesList({
      query: { userId: String(req.query.userId || 'guest') },
    });
    res.status(response.status).json(response.body);
  });

  return app;
}

if (process.env.NODE_ENV !== 'test') {
  const port = Number(process.env.REBUILD_API_PORT || 3010);
  const app = createExpressApp();
  app.listen(port, () => {
    console.log(`polyglot rebuild api running on http://localhost:${port}`);
  });
}
