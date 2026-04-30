export function validatePassword(password: string) {
  const valid = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password);
  return {
    valid,
    message: valid ? '' : '密码至少需要 8 位，并同时包含字母和数字'
  };
}
