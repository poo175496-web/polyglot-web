# 第 4 步前半：运行时服务入口与前端应用骨架

## 本阶段目标

把前面已经完成的：

- 新领域模型
- 新仓储层
- 新 API 路由层

真正接成一个可以启动的服务入口，并同时把新前端的应用骨架定义出来。

## 已完成内容

### 1. 新 API Handler 层

已落地：

- [handlers.ts](file:///Users/Zhuanz/Desktop/trae/polyglot/apps/api/src/http/handlers.ts)

作用：

- 把路由能力整理成统一 handler 接口
- 为后续接 Express、测试和未来网关层做适配

当前提供：

- `health`
- `decksList`
- `deckDetail`
- `studySessionStart`
- `studySessionSubmit`
- `progressOverview`

### 2. 新 Express 服务入口

已落地：

- [server.ts](file:///Users/Zhuanz/Desktop/trae/polyglot/apps/api/src/server.ts)

作用：

- 正式提供新 API 运行入口
- 当前服务地址：`http://localhost:3010`

当前已接好的接口：

- `GET /v1/health`
- `GET /v1/decks`
- `GET /v1/decks/:deckId`
- `POST /v1/study-sessions`
- `POST /v1/study-sessions/:sessionId/reviews`
- `GET /v1/progress/overview`

### 3. 新前端骨架蓝图

已落地：

- [blueprint.ts](file:///Users/Zhuanz/Desktop/trae/polyglot/apps/web/src/blueprint.ts)

当前已定义：

- 顶部导航结构
- 新前端路由骨架

导航：

- 仪表盘
- 课程库
- 今日复习
- 错词本
- 学习统计

路由：

- `/`
- `/dashboard`
- `/decks`
- `/decks/:deckId`
- `/study/:deckId`
- `/review`
- `/mistakes`
- `/stats`

### 4. 运行脚本

已补充根项目脚本：

- `npm run api:dev`
- `npm run api:start`

## 测试与验证

新增测试：

- [rebuild-http-handlers.test.ts](file:///Users/Zhuanz/Desktop/trae/polyglot/src/lib/rebuild-http-handlers.test.ts)
- [rebuild-web-shell.test.ts](file:///Users/Zhuanz/Desktop/trae/polyglot/src/lib/rebuild-web-shell.test.ts)

本阶段已验证：

- handler 测试通过
- web shell 测试通过
- 根项目构建通过
- 新 API 服务已成功启动
- 健康检查返回：

```json
{
  "status": "ok",
  "service": "polyglot-rebuild-api",
  "version": "v1"
}
```

## 当前意义

到这里，新系统已经不是只有“设计图”：

- 有领域规则
- 有持久化仓储
- 有 API 路由
- 有 handler
- 有 Express 服务入口
- 有前端导航和路由骨架

也就是说，下一步可以正式进入：

- 新前端页面开发
- 新 API 联调
- 新学习流程接线

## 下一步建议

下一轮直接做第 4 步后半：

1. 在 `apps/web` 下创建真正的 React 页面骨架
2. 写新 API client
3. 接通 decks / deck detail / study session / overview
4. 把旧前端逐步废弃，切到新架构前端
