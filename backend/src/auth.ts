import crypto from 'crypto';

export type UserRole = 'user' | 'admin';

export interface SessionTokenPayload {
  sub: number;
  email: string;
  role: UserRole;
  exp: number;
}

const TOKEN_SECRET = process.env.AUTH_SECRET || 'polyglot-dev-secret-change-me';
const TOKEN_TTL_SECONDS = 60 * 60 * 24 * 7;

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export function validatePassword(password: string) {
  const valid = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password);
  return {
    valid,
    message: valid ? '' : '密码至少需要 8 位，并同时包含字母和数字'
  };
}

export function hashPassword(password: string) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, storedHash: string) {
  if (!storedHash || !storedHash.includes(':')) {
    return false;
  }

  const [salt, originalHash] = storedHash.split(':');
  const hashBuffer = crypto.scryptSync(password, salt, 64);
  const originalBuffer = Buffer.from(originalHash, 'hex');

  if (hashBuffer.length !== originalBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(hashBuffer, originalBuffer);
}

export function createSessionToken(input: Omit<SessionTokenPayload, 'exp'>) {
  const payload: SessionTokenPayload = {
    ...input,
    exp: Math.floor(Date.now() / 1000) + TOKEN_TTL_SECONDS
  };
  const payloadBase64 = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signature = crypto.createHmac('sha256', TOKEN_SECRET).update(payloadBase64).digest('base64url');
  return `${payloadBase64}.${signature}`;
}

export function verifySessionToken(token: string) {
  const [payloadBase64, signature] = token.split('.');
  if (!payloadBase64 || !signature) {
    return null;
  }

  const expectedSignature = crypto.createHmac('sha256', TOKEN_SECRET).update(payloadBase64).digest('base64url');
  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {
    return null;
  }

  try {
    const payload = JSON.parse(Buffer.from(payloadBase64, 'base64url').toString('utf8')) as SessionTokenPayload;
    if (!payload.exp || payload.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }
    return payload;
  } catch {
    return null;
  }
}
