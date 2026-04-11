# GitHub 注册与代码上传指南

作为个人开发者，将代码托管到 GitHub 是实现免费云端部署（如 Vercel、Render）的必经之路。因为云服务平台需要从您的 GitHub 仓库中拉取最新的代码来构建网页。

## 第一阶段：注册 GitHub 账号

1. **访问官网**：打开浏览器，访问 [https://github.com/](https://github.com/)。
2. **开始注册**：点击页面右上角的 **Sign up** 按钮。
3. **输入信息**：
   - 网页会出现一个炫酷的打字机特效，提示 `Enter your email`（输入您的邮箱）。输入一个常用的邮箱（如 QQ邮箱、163邮箱或 Gmail）。
   - 点击 **Continue**，接着输入一个安全的密码（`Create a password`）。
   - 点击 **Continue**，输入一个用户名（`Enter a username`）。这个用户名会作为您以后的个人主页链接（如 `github.com/您的用户名`），必须是唯一的。
   - 接下来可能会询问是否接收邮件通知，输入 `y` 或 `n` 即可。
4. **人机验证**：完成一个简单的拼图或旋转图片的验证码，证明您是人类。
5. **验证邮箱**：点击 **Create account** 后，GitHub 会向您的邮箱发送一封包含验证码的邮件。打开邮箱，将验证码填入网页即可完成注册。

## 第二阶段：在电脑上安装并配置 Git

Git 是一个工具，用来把您电脑上的代码“推”到 GitHub 网站上。

1. **下载 Git**：访问 [https://git-scm.com/downloads](https://git-scm.com/downloads) 下载适合您电脑系统的版本（Windows/Mac）并一路“下一步”安装完成。
2. **告诉 Git 您是谁**：打开电脑的终端（Terminal）或命令行工具（CMD），输入以下两行命令（将括号里的内容替换为您刚注册的 GitHub 邮箱和用户名）：
   ```bash
   git config --global user.name "您的用户名"
   git config --global user.email "您的邮箱"
   ```

## 第三阶段：将项目代码传到 GitHub

1. **在 GitHub 上新建仓库**：
   - 登录 GitHub 后，点击右上角的 **+** 号，选择 **New repository**。
   - 在 `Repository name` 填入项目名字（例如 `polyglot-learning`）。
   - 勾选 `Private`（私有，只有您自己能看）或 `Public`（公开，所有人可见），建议选 `Private`。
   - 不要勾选 `Add a README file`，直接点击绿色的 **Create repository** 按钮。

2. **把本地代码推送到仓库**：
   - GitHub 页面会显示一堆命令。您只需要在您电脑的终端里，进入到 `polyglot` 项目文件夹下（例如 `cd Desktop/trae/polyglot`）。
   - 依次运行以下命令（这些命令在 GitHub 刚才的页面上也能复制）：
     ```bash
     # 初始化本地仓库
     git init
     
     # 把所有文件添加到准备上传的列表中
     git add .
     
     # 给这次上传打个标签（说明）
     git commit -m "第一次提交代码"
     
     # 关联您刚才在 GitHub 创建的仓库（注意把链接替换成您自己的）
     git remote add origin https://github.com/您的用户名/polyglot-learning.git
     
     # 把代码推送到 GitHub 的 main 分支
     git branch -M main
     git push -u origin main
     ```

**完成！**
刷新您的 GitHub 页面，您就会看到代码已经稳稳地躺在云端仓库里了。接下来就可以授权 Vercel 等平台去读取它并生成网页啦。
