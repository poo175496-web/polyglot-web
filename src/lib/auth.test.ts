import { describe, expect, it } from 'vitest';

import { validatePassword } from './auth';

describe('validatePassword', () => {
  it('rejects passwords shorter than 8 characters', () => {
    expect(validatePassword('abc12')).toEqual({
      valid: false,
      message: '密码至少需要 8 位，并同时包含字母和数字'
    });
  });

  it('rejects passwords without numbers', () => {
    expect(validatePassword('abcdefgh')).toEqual({
      valid: false,
      message: '密码至少需要 8 位，并同时包含字母和数字'
    });
  });

  it('accepts passwords with letters and numbers', () => {
    expect(validatePassword('abc12345')).toEqual({
      valid: true,
      message: ''
    });
  });
});
