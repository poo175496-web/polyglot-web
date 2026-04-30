import { describe, expect, it } from 'vitest';

import { buildApiUrl, resolveApiBaseUrl } from './api';

describe('resolveApiBaseUrl', () => {
  it('uses the configured base url and removes a trailing slash', () => {
    expect(resolveApiBaseUrl('https://example.com/')).toBe('https://example.com');
  });

  it('falls back to the deployed backend when env is empty', () => {
    expect(resolveApiBaseUrl('')).toBe('https://polyglot-web-g2pa.onrender.com');
  });
});

describe('buildApiUrl', () => {
  it('joins the base url and api path without duplicate slashes', () => {
    expect(buildApiUrl('https://example.com/', '/api/login')).toBe('https://example.com/api/login');
  });
});
