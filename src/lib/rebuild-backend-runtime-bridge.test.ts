import { afterEach, describe, expect, it } from 'vitest';
import type { Server } from 'node:http';

import { createBackendApp } from '../../backend/src/server';

let server: Server | null = null;

afterEach(async () => {
  if (!server) {
    return;
  }

  await new Promise<void>((resolve, reject) => {
    server?.close((error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve();
    });
  });
  server = null;
});

describe('rebuild backend runtime bridge', () => {
  it('serves the rebuilt v1 routes from the production backend entry', async () => {
    const app = createBackendApp();
    server = app.listen(0);

    const address = server.address();
    if (!address || typeof address === 'string') {
      throw new Error('failed to bind test server');
    }

    const baseUrl = `http://127.0.0.1:${address.port}`;
    const healthResponse = await fetch(`${baseUrl}/v1/health`);
    const decksResponse = await fetch(`${baseUrl}/v1/decks?userId=guest`);

    expect(healthResponse.ok).toBe(true);
    expect(await healthResponse.json()).toMatchObject({
      status: 'ok',
      service: 'polyglot-rebuild-api',
    });

    expect(decksResponse.ok).toBe(true);
    expect(await decksResponse.json()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 'zhongkao',
        }),
      ])
    );
  });
});
