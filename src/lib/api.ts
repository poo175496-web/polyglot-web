const DEFAULT_API_BASE_URL = 'https://polyglot-web-g2pa.onrender.com';

export function resolveApiBaseUrl(rawBaseUrl?: string) {
  const normalizedBaseUrl = rawBaseUrl?.trim().replace(/\/+$/, '');
  return normalizedBaseUrl || DEFAULT_API_BASE_URL;
}

export function buildApiUrl(baseUrl: string, path: string) {
  const normalizedBaseUrl = resolveApiBaseUrl(baseUrl);
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${normalizedBaseUrl}${normalizedPath}`;
}

const API_BASE_URL = resolveApiBaseUrl(import.meta.env.VITE_API_BASE_URL);

export function getApiUrl(path: string) {
  return buildApiUrl(API_BASE_URL, path);
}

interface FetchJsonOptions extends RequestInit {
  timeoutMs?: number;
}

export async function fetchJson<T>(path: string, options: FetchJsonOptions = {}): Promise<T> {
  const { timeoutMs = 10000, ...requestInit } = options;
  const controller = new AbortController();
  const timeoutId = globalThis.setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(getApiUrl(path), {
      ...requestInit,
      signal: controller.signal,
    });

    const data = await response.json().catch(() => null);
    if (!response.ok) {
      const message =
        (data && typeof data === 'object' && 'error' in data && typeof data.error === 'string' && data.error) ||
        `请求失败 (${response.status})`;
      throw new Error(message);
    }

    return data as T;
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('请求超时，请稍后重试');
    }
    throw error;
  } finally {
    globalThis.clearTimeout(timeoutId);
  }
}
