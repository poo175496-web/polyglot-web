# 第 4 步后半：新前端页面骨架与 API Client

## 本阶段目标

在 `apps/web` 下不再只保留蓝图文件，而是正式建立：

- API client
- 页面数据模型
- 应用壳
- 路由表
- React 根组件

让新前端具备接新 API 的基础。

## 已落地文件

- [client.ts](file:///Users/Zhuanz/Desktop/trae/polyglot/apps/web/src/api/client.ts)
- [view-models.ts](file:///Users/Zhuanz/Desktop/trae/polyglot/apps/web/src/view-models.ts)
- [app-shell.tsx](file:///Users/Zhuanz/Desktop/trae/polyglot/apps/web/src/app-shell.tsx)
- [pages.tsx](file:///Users/Zhuanz/Desktop/trae/polyglot/apps/web/src/pages.tsx)
- [routes.tsx](file:///Users/Zhuanz/Desktop/trae/polyglot/apps/web/src/routes.tsx)
- [App.tsx](file:///Users/Zhuanz/Desktop/trae/polyglot/apps/web/src/App.tsx)
- [main.tsx](file:///Users/Zhuanz/Desktop/trae/polyglot/apps/web/src/main.tsx)

## 已实现能力

### 1. 新 API Client

当前已接好的客户端方法：

- `getDecks`
- `getDeckDetail`
- `getProgressOverview`
- `startStudySession`
- `submitStudySessionReviews`

这意味着新前端访问新后端不再需要沿用旧 `src/lib/api.ts`。

### 2. 页面数据模型

当前已抽象：

- `buildDashboardViewModel`
- `buildStudyRoomViewModel`

用途：

- 把后端返回结构整理成前端页面直接可渲染的数据
- 降低页面组件直接处理原始接口结构的耦合

### 3. 页面骨架

当前已有骨架页面：

- Dashboard
- Decks
- Study
- Review
- Mistakes
- Stats

### 4. 可挂载路由表

当前新前端路由已正式定义：

- `/`
- `/dashboard`
- `/decks`
- `/study/:deckId`
- `/review`
- `/mistakes`
- `/stats`

### 5. React 根组件

已补：

- `App.tsx`
- `main.tsx`

当前意义：

- 新前端已经具备独立运行的基本结构
- 后续只需要继续把真实数据流塞进去，而不是从零搭壳

## 测试

新增测试：

- [rebuild-web-client.test.ts](file:///Users/Zhuanz/Desktop/trae/polyglot/src/lib/rebuild-web-client.test.ts)
- [rebuild-web-view-models.test.ts](file:///Users/Zhuanz/Desktop/trae/polyglot/src/lib/rebuild-web-view-models.test.ts)
- [rebuild-web-routes-config.test.ts](file:///Users/Zhuanz/Desktop/trae/polyglot/src/lib/rebuild-web-routes-config.test.ts)

验证通过：

- API client 路径与 body 正确
- view model 计算正确
- 路由表结构正确
- 构建通过

## 当前状态

到这里，新系统已经具备：

- 新后端运行入口
- 新前端运行骨架
- 新 API client
- 新页面数据模型
- 新前端路由结构

也就是说，下一步可以正式开始做：

- decks 列表真实渲染
- deck detail 页面
- study session 联调
- overview 仪表盘联调
- 用新前端逐步替换旧前端

## 下一步建议

下一轮直接进入真正联调：

1. 给 `apps/web` 增加 `loaders` 或页面数据 hooks
2. 接 `GET /v1/decks`
3. 接 `GET /v1/decks/:deckId`
4. 接 `POST /v1/study-sessions`
5. 接 `GET /v1/progress/overview`
6. 做第一版真实 dashboard / decks / study 页面
