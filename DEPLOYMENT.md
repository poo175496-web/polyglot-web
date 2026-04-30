# 部署指南：把 Polyglot 正式上线

这份项目现在已经是前后端分离结构：
- 前端：Vite + React，部署到 **Vercel**
- 后端：Node.js + Express + SQLite，部署到 **Render**

## 上线前确认

当前仓库根目录就是前端项目目录，所以：
- Vercel 的 **Root Directory** 不要再填 `polyglot`
- Render 的 **Root Directory** 应该填 `backend`

另外，项目新增了真实登录和管理员后台，所以上线前必须配置环境变量。

## 前端部署到 Vercel

### 第一次创建项目
1. 登录 [Vercel](https://vercel.com)。
2. 点击 **Add New** -> **Project**。
3. 选择 GitHub 仓库 `polyglot-web`。
4. 保持默认识别为 `Vite`。
5. 关键配置如下：
   - **Root Directory**：留空，使用仓库根目录
   - **Build Command**：`npm run build`
   - **Output Directory**：`dist`

### 前端环境变量
在 Vercel 项目的 **Settings** -> **Environment Variables** 中新增：

```bash
VITE_API_BASE_URL=https://你的-render-后端地址.onrender.com
```

示例文件见：
- [.env.example](file:///Users/Zhuanz/Desktop/trae/polyglot/.env.example)

### 发布
1. 保存环境变量后点击部署。
2. 后续只要你推送 GitHub，Vercel 会自动重新部署。

## 后端部署到 Render

### 第一次创建服务
1. 登录 [Render](https://render.com)。
2. 点击 **New** -> **Web Service**。
3. 连接 GitHub 仓库 `polyglot-web`。
4. 关键配置如下：
   - **Root Directory**：`backend`
   - **Environment**：`Node`
   - **Build Command**：`npm install && npm run build`
   - **Start Command**：`npm start`
   - **Plan**：`Free`

### 后端环境变量
在 Render 的环境变量中新增：

```bash
AUTH_SECRET=换成一段很长的随机字符串
ADMIN_EMAIL=你的管理员邮箱
```

说明：
- `AUTH_SECRET`：用于登录令牌签名，必须设置
- `ADMIN_EMAIL`：这个邮箱登录后会被识别为管理员，可进入 `/admin`

示例文件见：
- [backend/.env.example](file:///Users/Zhuanz/Desktop/trae/polyglot/backend/.env.example)

### Render 蓝图配置
如果你想后面更方便复用，可以直接使用仓库里的 Render 配置：
- [render.yaml](file:///Users/Zhuanz/Desktop/trae/polyglot/render.yaml)

## 管理员登录说明

项目已经支持后台管理页：
- 管理地址：`/admin`
- 只有管理员账号能访问

管理员来源有两种：
1. 邮箱与 `ADMIN_EMAIL` 一致
2. 当前线上还没有真实管理员时，首个真实用户会自动补成管理员

## 老账号兼容

如果你之前线上已经有“只有邮箱、没有密码”的旧账号：
- 第一次登录时直接输入一个新密码
- 系统会自动把这个旧账号升级成密码账号

## 上线后自检

请按这个顺序检查：
1. 打开前端首页能正常访问
2. 注册一个新用户
3. 用新账号重新登录
4. 学完一个单元后确认进度可同步
5. 用管理员邮箱登录后访问 `/admin`
6. 刷新页面后确认仍保持登录

## 重要提醒

- 现在后端仍然用的是 SQLite 文件数据库
- Render 免费服务休眠或重建后，数据库仍然可能丢失
- 如果你要长期正式使用，下一步应该把 SQLite 换成 PostgreSQL

如果你现在要我继续，我下一步可以直接帮你做两件事中的一种：
- 帮你把本地代码提交并推到 GitHub
- 帮你逐项核对 Vercel 和 Render 后台该怎么填
