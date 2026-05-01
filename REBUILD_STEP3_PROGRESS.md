# 第 3 步：新后端核心学习闭环

## 当前已完成

本阶段先完成了新架构下最小可运行的“后端核心闭环”，不再依赖旧页面状态作为业务真相。

已落地文件：

- [study-service.ts](file:///Users/Zhuanz/Desktop/trae/polyglot/apps/api/src/services/study-service.ts)
- [index.ts](file:///Users/Zhuanz/Desktop/trae/polyglot/apps/api/src/index.ts)
- [rebuild-study-service.test.ts](file:///Users/Zhuanz/Desktop/trae/polyglot/src/lib/rebuild-study-service.test.ts)
- [file-study-repository.ts](file:///Users/Zhuanz/Desktop/trae/polyglot/apps/api/src/repositories/file-study-repository.ts)
- [router.ts](file:///Users/Zhuanz/Desktop/trae/polyglot/apps/api/src/http/router.ts)
- [rebuild-api-routes.test.ts](file:///Users/Zhuanz/Desktop/trae/polyglot/src/lib/rebuild-api-routes.test.ts)

## 已实现能力

### 1. 内容种子编排

- 基于共享词库 `vocabularyData`
- 自动构建 4 套考试 deck
- 每 20 个词自动切成一个 unit
- 自动生成最小卡片集合

当前采用的最小卡片模板：

- `WORD_TO_MEANING`

后续会继续扩展：

- `MEANING_TO_WORD`
- `SPELLING`
- `LISTENING`
- `EXAMPLE_CLOZE`

### 2. 学习会话启动

- 根据用户当前 `unlockedUnitIndex` 启动会话
- 当前优先走 `LEARN` 模式
- 从当前可学单元装载卡片
- 使用 `packages/domain` 的学习队列规则生成顺序

### 3. 作答提交与日志写入

- 提交当前 session 的答案集合
- 为每次作答生成一条 review log
- 写入：
- 卡片 ID
- 对错
- 评分
- 耗时
- 下次复习时间

### 4. 课程解锁推进

- 只有当前单元全部通过，才解锁下一单元
- 解锁规则复用 `packages/domain` 中的规则函数
- 不再依赖前端“看起来学完了”这种假状态

### 5. 进度聚合

- 可按用户获取当前后端进度概览
- 当前已能聚合：
- review log 数量
- 各 deck 的进度

### 6. 文件持久化仓储

- 已新增文件仓储层
- session、review log、deck progress 不再只存在内存中
- 服务重建后仍可恢复用户进度

### 7. API 路由编排

- 已新增新的 API 路由层
- 当前已暴露的核心能力：
- decks list
- deck detail
- study session start
- study session submit
- progress overview

## 当前设计价值

这一步的关键不是页面，而是把后端真相建立起来：

- deck 是课程容器
- unit 是学习关卡
- card 是训练对象
- session 是一次学习过程
- review log 是统计与调度的基础
- progress 是用户在 deck 上的真实状态

这意味着后续前端不管怎么重做，核心学习真相都在新后端里。

## 当前仍是最小闭环

这一步先故意做小，没有一次性把所有复杂度堆上去。

当前还没做：

- 关系型数据库持久化
- Express 适配层接线
- 新鉴权系统接线
- 多题型卡片生成
- FSRS 调度
- 管理端内容导入

这些会在第 3 步后半段继续补齐。

## 下一段要继续做的内容

1. 把 `study-service` 从内存实现切到数据库仓储层
2. 给 `apps/api` 接上 Express HTTP 适配层
3. 把 deck/card/session/progress 暴露成正式 API
4. 增加更多卡片模板
5. 给新前端预留稳定接口
