# 部署指南：如何将多语种学习平台部署到云端

如果您想要让您的亲戚朋友也能访问这个项目，您可以将代码部署到云端。目前有许多免费的云服务平台可供选择。

## 前端部署 (Vercel)

前端页面我们可以部署在 **Vercel** 上，它对个人项目是永久免费的，而且在全球访问速度都非常快。

### 准备工作
1. 将您的代码上传到 GitHub。
2. 注册并登录 [Vercel](https://vercel.com)。

### 部署步骤
1. 在 Vercel 后台点击 **Add New...** -> **Project**。
2. 关联您的 GitHub 账号，并选择您刚才上传的 `polyglot` 仓库。
3. 如果 Vercel 询问 `Framework Preset`，它会自动识别为 `Vite`。
4. **重要设置**：
   - **Root Directory**：填写 `polyglot`。因为我们的前端代码是在 `polyglot` 文件夹下。
   - **Build Command**：默认的 `npm run build` 即可。
   - **Output Directory**：默认的 `dist` 即可。
5. 点击 **Deploy**。稍等一两分钟，Vercel 就会为您生成一个可以在微信里直接访问的公网链接（例如：`polyglot-xxxx.vercel.app`）。

## 后端部署 (Render)

后端包含 Node.js 代码和数据库。我们可以部署在 **Render** 上，它的 Web Services 提供免费额度（每月有免费运行时长，对于五六个人用完全足够）。

### 准备工作
1. 您需要把刚刚写好的后台代码也推送到 GitHub 仓库（通常和前端放在同一个仓库的 `polyglot/backend` 目录下）。
2. 注册并登录 [Render](https://render.com)。

### 部署步骤
1. 在 Render 后台点击 **New** -> **Web Service**。
2. 选择 **Build and deploy from a Git repository**，关联您的 GitHub 并选择仓库。
3. **重要设置**：
   - **Name**：给服务起个名字，比如 `polyglot-api`。
   - **Root Directory**：填写 `polyglot/backend`。
   - **Environment**：选择 `Node`。
   - **Build Command**：填写 `npm install && npm run build`。
   - **Start Command**：填写 `npm start`。
4. 选择 **Free** 套餐。
5. 点击 **Create Web Service**。
6. 部署成功后，Render 会给您一个后端 API 地址（例如：`https://polyglot-api-xxxx.onrender.com`）。

## 关联前后端

现在前端和后端都部署在云端了，但是它们还互相不认识。您需要告诉前端去哪里请求后台数据：

1. 在您的前端代码中（如果有请求后端的地方），将原来写的 `http://localhost:3000` 替换成 Render 给您的后台 API 地址 `https://polyglot-api-xxxx.onrender.com`。
2. 修改完代码后推送到 GitHub，Vercel 会自动为您重新部署前端。

> **提示：** SQLite 是一个本地文件数据库。在 Render 的免费实例中，每次服务器重启（比如一段时间没人访问后休眠唤醒），数据库里的数据可能会被清空。对于真正需要永久保存数据的项目，建议在 Render 上额外创建一个免费的 **PostgreSQL** 数据库，并修改 Node.js 代码连接到该数据库。

如果您在这个过程中遇到任何问题，例如不知道怎么用 GitHub，或者部署时遇到报错，随时问我！
