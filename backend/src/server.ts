import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';

import {
  createSessionToken,
  hashPassword,
  normalizeEmail,
  type UserRole,
  validatePassword,
  verifyPassword,
  verifySessionToken,
} from './auth.js';

const app = express();
const port = Number(process.env.PORT) || 3000;
const adminEmail = normalizeEmail(process.env.ADMIN_EMAIL || '');
const seedUserEmail = 'test@family.com';
const seedUserPassword = 'family123';

interface ProgressRow {
  course_id: string;
  unlocked_unit: number;
}

interface UserRow {
  id: number;
  name: string;
  email: string;
  password_hash: string;
  role: UserRole;
  targetLanguage: string;
  level: string;
  progress?: Record<string, number>;
}

interface CountRow {
  count: number;
}

interface AdminUserRow {
  id: number;
  name: string;
  email: string;
  targetLanguage: string;
  level: string;
  role: UserRole;
  unlocked_unit: number;
  tracked_courses: number;
}

interface AuthenticatedRequest extends Request {
  auth?: {
    sub: number;
    email: string;
    role: UserRole;
  };
}

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error('数据库连接失败:', err.message);
    return;
  }

  console.log('✅ 已连接到本地 SQLite 数据库.');
  db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password_hash TEXT DEFAULT '',
        role TEXT DEFAULT 'user',
        targetLanguage TEXT NOT NULL,
        level TEXT DEFAULT 'A1'
      )
    `);
    db.run(`ALTER TABLE users ADD COLUMN password_hash TEXT DEFAULT ''`, () => {});
    db.run(`ALTER TABLE users ADD COLUMN role TEXT DEFAULT 'user'`, () => {});
    db.run(`
      CREATE TABLE IF NOT EXISTS user_progress (
        user_id INTEGER,
        course_id TEXT,
        unlocked_unit INTEGER DEFAULT 0,
        PRIMARY KEY (user_id, course_id)
      )
    `);
    db.run(
      `INSERT OR IGNORE INTO users (name, email, password_hash, role, targetLanguage) VALUES (?, ?, ?, ?, ?)`,
      ['测试亲戚', seedUserEmail, hashPassword(seedUserPassword), 'user', 'en']
    );
  });
});

function sanitizeUser(user: UserRow) {
  return {
    id: String(user.id),
    name: user.name,
    email: user.email,
    targetLanguage: user.targetLanguage,
    level: user.level,
    role: user.role,
    progress: user.progress || {}
  };
}

function getUserProgress(userId: number, callback: (progress: Record<string, number>) => void) {
  db.all(`SELECT course_id, unlocked_unit FROM user_progress WHERE user_id = ?`, [userId], (err, rows) => {
    const progress: Record<string, number> = {};
    if (!err && rows) {
      (rows as ProgressRow[]).forEach((row) => {
        progress[row.course_id] = row.unlocked_unit;
      });
    }
    callback(progress);
  });
}

function sendAuthResponse(res: Response, row: UserRow, message: string) {
  getUserProgress(row.id, (progress) => {
    row.progress = progress;
    const token = createSessionToken({
      sub: row.id,
      email: row.email,
      role: row.role || 'user'
    });
    res.json({ message, token, user: sanitizeUser(row) });
  });
}

function ensureAdminRole(row: UserRow, callback: (nextRow: UserRow) => void) {
  if (row.role === 'admin' || row.email === seedUserEmail) {
    callback(row);
    return;
  }

  const shouldPromoteByEmail = Boolean(adminEmail) && row.email === adminEmail;
  db.get(
    `SELECT COUNT(*) as count FROM users WHERE role = 'admin' AND email != ?`,
    [seedUserEmail],
    (err, countRow: CountRow | undefined) => {
      if (err) {
        callback(row);
        return;
      }

      const shouldPromote = shouldPromoteByEmail || (countRow?.count ?? 0) === 0;
      if (!shouldPromote) {
        callback(row);
        return;
      }

      db.run(`UPDATE users SET role = 'admin' WHERE id = ?`, [row.id], (updateErr) => {
        if (updateErr) {
          callback(row);
          return;
        }
        callback({ ...row, role: 'admin' });
      });
    }
  );
}

function requireAuth(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  const token = header?.startsWith('Bearer ') ? header.slice(7) : '';
  const payload = verifySessionToken(token);

  if (!payload) {
    return res.status(401).json({ error: '登录状态已失效，请重新登录' });
  }

  req.auth = {
    sub: payload.sub,
    email: payload.email,
    role: payload.role
  };
  next();
}

function requireAdmin(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  if (req.auth?.role !== 'admin') {
    return res.status(403).json({ error: '只有管理员可以访问该接口' });
  }
  next();
}

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: '服务器正常运行中！' });
});

app.post('/api/register', (req, res) => {
  const name = typeof req.body.name === 'string' ? req.body.name.trim() : '';
  const email = normalizeEmail(typeof req.body.email === 'string' ? req.body.email : '');
  const password = typeof req.body.password === 'string' ? req.body.password.trim() : '';
  const targetLanguage = typeof req.body.targetLanguage === 'string' ? req.body.targetLanguage : 'en';

  if (!name || !email || !password) {
    return res.status(400).json({ error: '昵称、邮箱和密码不能为空' });
  }

  const passwordCheck = validatePassword(password);
  if (!passwordCheck.valid) {
    return res.status(400).json({ error: passwordCheck.message });
  }

  db.get(
    `SELECT COUNT(*) as count FROM users WHERE email != ?`,
    [seedUserEmail],
    (countErr, countRow: CountRow | undefined) => {
      if (countErr) {
        return res.status(500).json({ error: '服务器错误，暂时无法创建账号' });
      }

      const role: UserRole = email === adminEmail || (countRow?.count ?? 0) === 0 ? 'admin' : 'user';
      const stmt = db.prepare(
        `INSERT INTO users (name, email, password_hash, role, targetLanguage) VALUES (?, ?, ?, ?, ?)`
      );

      stmt.run([name, email, hashPassword(password), role, targetLanguage], function (err) {
        if (err) {
          return res.status(500).json({ error: '注册失败，可能邮箱已存在' });
        }

        db.get(`SELECT * FROM users WHERE id = ?`, [this.lastID], (userErr, row: UserRow | undefined) => {
          if (userErr || !row) {
            return res.status(500).json({ error: '账号已创建，但读取用户信息失败' });
          }
          sendAuthResponse(res, row, '注册成功');
        });
      });
    }
  );
});

app.post('/api/login', (req, res) => {
  const email = normalizeEmail(typeof req.body.email === 'string' ? req.body.email : '');
  const password = typeof req.body.password === 'string' ? req.body.password.trim() : '';

  if (!email || !password) {
    return res.status(400).json({ error: '邮箱和密码不能为空' });
  }

  db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, row: UserRow | undefined) => {
    if (err) {
      return res.status(500).json({ error: '服务器错误' });
    }
    if (!row) {
      return res.status(404).json({ error: '找不到该账号，请先注册' });
    }
    if (!row.password_hash) {
      const legacyPasswordCheck = validatePassword(password);
      if (!legacyPasswordCheck.valid) {
        return res.status(400).json({ error: '这是旧账号，请输入一个至少 8 位且包含字母和数字的新密码完成升级' });
      }

      const upgradedRow = { ...row, password_hash: hashPassword(password) };
      db.run(`UPDATE users SET password_hash = ? WHERE id = ?`, [upgradedRow.password_hash, row.id], (updateErr) => {
        if (updateErr) {
          return res.status(500).json({ error: '旧账号升级失败，请稍后再试' });
        }

        ensureAdminRole(upgradedRow, (nextRow) => {
          sendAuthResponse(res, nextRow, '旧账号已升级并登录成功');
        });
      });
      return;
    }
    if (!verifyPassword(password, row.password_hash)) {
      return res.status(401).json({ error: '密码错误，请重新输入' });
    }

    ensureAdminRole(row, (nextRow) => {
      sendAuthResponse(res, nextRow, '登录成功');
    });
  });
});

app.post('/api/progress', requireAuth, (req: AuthenticatedRequest, res) => {
  const courseId = typeof req.body.courseId === 'string' ? req.body.courseId : '';
  const completedUnit = Number(req.body.completedUnit);
  const userId = req.auth?.sub;

  if (!userId || !courseId || Number.isNaN(completedUnit)) {
    return res.status(400).json({ error: '进度参数不完整' });
  }

  const nextUnlock = completedUnit + 1;
  db.get(
    `SELECT unlocked_unit FROM user_progress WHERE user_id = ? AND course_id = ?`,
    [userId, courseId],
    (err, row: ProgressRow | undefined) => {
      if (err) {
        return res.status(500).json({ error: '数据库错误' });
      }

      if (row) {
        if (nextUnlock > row.unlocked_unit) {
          db.run(
            `UPDATE user_progress SET unlocked_unit = ? WHERE user_id = ? AND course_id = ?`,
            [nextUnlock, userId, courseId],
            () => res.json({ success: true, unlocked_unit: nextUnlock })
          );
          return;
        }

        return res.json({ success: true, unlocked_unit: row.unlocked_unit });
      }

      db.run(
        `INSERT INTO user_progress (user_id, course_id, unlocked_unit) VALUES (?, ?, ?)`,
        [userId, courseId, nextUnlock],
        () => res.json({ success: true, unlocked_unit: nextUnlock })
      );
    }
  );
});

app.get('/api/admin/overview', requireAuth, requireAdmin, (_req, res) => {
  db.get(
    `SELECT COUNT(*) as count FROM users WHERE email != ?`,
    [seedUserEmail],
    (_usersErr, usersRow: CountRow | undefined) => {
      db.get(
        `SELECT COUNT(*) as count FROM users WHERE role = 'admin'`,
        [],
        (_adminErr, adminRow: CountRow | undefined) => {
          db.get(
            `SELECT COUNT(DISTINCT user_id) as count FROM user_progress`,
            [],
            (_learnerErr, learnerRow: CountRow | undefined) => {
              db.get(
                `SELECT COUNT(*) as count FROM user_progress`,
                [],
                (_progressErr, progressRow: CountRow | undefined) => {
                  db.all(
                    `
                      SELECT
                        u.id,
                        u.name,
                        u.email,
                        u.targetLanguage,
                        u.level,
                        u.role,
                        COALESCE(MAX(p.unlocked_unit), 0) as unlocked_unit,
                        COUNT(p.course_id) as tracked_courses
                      FROM users u
                      LEFT JOIN user_progress p ON p.user_id = u.id
                      WHERE u.email != ?
                      GROUP BY u.id, u.name, u.email, u.targetLanguage, u.level, u.role
                      ORDER BY u.id DESC
                    `,
                    [seedUserEmail],
                    (listErr, rows) => {
                      if (listErr) {
                        return res.status(500).json({ error: '读取后台数据失败' });
                      }

                      const users = (rows as AdminUserRow[]).map((row) => ({
                        id: row.id,
                        name: row.name,
                        email: row.email,
                        role: row.role,
                        targetLanguage: row.targetLanguage,
                        level: row.level,
                        unlockedUnit: row.unlocked_unit,
                        trackedCourses: row.tracked_courses
                      }));

                      res.json({
                        stats: {
                          totalUsers: usersRow?.count ?? 0,
                          adminUsers: adminRow?.count ?? 0,
                          learnersWithProgress: learnerRow?.count ?? 0,
                          progressRecords: progressRow?.count ?? 0
                        },
                        users
                      });
                    }
                  );
                }
              );
            }
          );
        }
      );
    }
  );
});

app.get('/api/courses', (_req, res) => {
  res.json([
    { id: 'zhongkao', title: '中考核心词汇冲刺', lang: 'en', level: '中考' },
    { id: 'gaokao', title: '高考高频词汇全覆盖', lang: 'en', level: '高考' },
    { id: 'ielts', title: '雅思必背核心词汇', lang: 'en', level: 'IELTS' },
    { id: 'toefl', title: '托福学术词汇精讲', lang: 'en', level: 'TOEFL' }
  ]);
});

app.listen(port, () => {
  console.log(`🚀 后台服务已启动: http://localhost:${port}`);
  console.log(`💡 测试账号: ${seedUserEmail} / ${seedUserPassword}`);
});
