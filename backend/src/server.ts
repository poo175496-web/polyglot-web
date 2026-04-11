import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';

const app = express();
const port = 3000;

// 开启跨域，允许前端调用
app.use(cors());
// 解析JSON请求体
app.use(express.json());

// 初始化一个简单的本地数据库 (SQLite)
// 在实际部署时，我们会把它换成云端数据库（如 MySQL 或 PostgreSQL）
const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error('数据库连接失败:', err.message);
  } else {
    console.log('✅ 已连接到本地 SQLite 数据库.');
    // 创建一个用户表
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        targetLanguage TEXT NOT NULL,
        level TEXT DEFAULT 'A1'
      )
    `, () => {
      // 插入一条测试数据
      db.run(`INSERT OR IGNORE INTO users (name, email, targetLanguage) VALUES ('测试亲戚', 'test@family.com', 'en')`);
    });

    // 创建用户学习进度表
    db.run(`
      CREATE TABLE IF NOT EXISTS user_progress (
        user_id INTEGER,
        course_id TEXT,
        unlocked_unit INTEGER DEFAULT 0,
        PRIMARY KEY (user_id, course_id)
      )
    `);
  }
});

// 测试接口：检查服务器是否运行
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: '服务器正常运行中！' });
});

// 辅助函数：获取用户进度
const getUserProgress = (userId: number, callback: (progress: Record<string, number>) => void) => {
  db.all(`SELECT course_id, unlocked_unit FROM user_progress WHERE user_id = ?`, [userId], (err, rows) => {
    const progress: Record<string, number> = {};
    if (!err && rows) {
      rows.forEach((row: any) => {
        progress[row.course_id] = row.unlocked_unit;
      });
    }
    callback(progress);
  });
};

// 注册接口：您的亲戚朋友可以通过这个接口注册账号
app.post('/api/register', (req, res) => {
  const { name, email, targetLanguage } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: '名字和邮箱不能为空' });
  }

  const stmt = db.prepare(`INSERT INTO users (name, email, targetLanguage) VALUES (?, ?, ?)`);
  stmt.run([name, email, targetLanguage], function(err) {
    if (err) {
      return res.status(500).json({ error: '注册失败，可能邮箱已存在' });
    }
    res.json({ 
      message: '注册成功！',
      user: { id: this.lastID, name, email, targetLanguage, level: 'A1', progress: {} } 
    });
  });
});

// 登录接口：登录时验证账号
app.post('/api/login', (req, res) => {
  const { email } = req.body;
  
  db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, row: any) => {
    if (err) {
      return res.status(500).json({ error: '服务器错误' });
    }
    if (!row) {
      return res.status(404).json({ error: '找不到该账号，请先注册' });
    }
    
    // 登录成功时，同时查出该用户解锁的单元进度
    getUserProgress(row.id, (progress) => {
      row.progress = progress;
      res.json({ message: '登录成功', user: row });
    });
  });
});

// 更新学习进度接口：每次学完听写提交后调用
app.post('/api/progress', (req, res) => {
  const { userId, courseId, completedUnit } = req.body;
  const nextUnlock = completedUnit + 1; // 解锁下一单元

  db.get(`SELECT unlocked_unit FROM user_progress WHERE user_id = ? AND course_id = ?`, [userId, courseId], (err, row: any) => {
    if (err) return res.status(500).json({ error: '数据库错误' });

    if (row) {
      // 只有在完成的新单元 > 已解锁进度时才更新（防止重复学习旧单元导致进度回退）
      if (nextUnlock > row.unlocked_unit) {
        db.run(`UPDATE user_progress SET unlocked_unit = ? WHERE user_id = ? AND course_id = ?`, [nextUnlock, userId, courseId], () => {
          res.json({ success: true, unlocked_unit: nextUnlock });
        });
      } else {
        res.json({ success: true, unlocked_unit: row.unlocked_unit });
      }
    } else {
      // 第一次完成该课程的第0单元
      db.run(`INSERT INTO user_progress (user_id, course_id, unlocked_unit) VALUES (?, ?, ?)`, [userId, courseId, nextUnlock], () => {
        res.json({ success: true, unlocked_unit: nextUnlock });
      });
    }
  });
});

// 获取所有课程数据
app.get('/api/courses', (req, res) => {
  const courses = [
    { id: 'en-1', title: '零基础英语入门', lang: 'en', level: 'A1' },
    { id: 'ja-1', title: '五十音图速记', lang: 'ja', level: 'N5' },
    // 实际项目中这些数据存在数据库中
  ];
  res.json(courses);
});

app.listen(port, () => {
  console.log(`🚀 后台服务已启动: http://localhost:${port}`);
  console.log(`💡 您现在可以把这个项目部署到云服务器上了！`);
});
