# 第 2 步：领域模型、数据库结构与项目骨架

## 目标

这一阶段不再继续扩旧站页面，而是为全新单词学习平台落下真正可开发的底层骨架：

- 新 monorepo 目录结构
- 新领域模型
- 新数据库草案
- 新 API 契约
- 新学习调度边界

## 新目录结构

```text
polyglot/
├─ apps/
│  ├─ web/
│  └─ api/
├─ packages/
│  ├─ domain/
│  ├─ contracts/
│  ├─ scheduler/
│  └─ content/
```

### `apps/web`

- 新前端应用
- 只负责界面、交互、学习流程表现层

### `apps/api`

- 新后端应用
- 负责鉴权、课程、卡片、学习会话、复习日志、统计聚合

### `packages/domain`

- 核心业务规则
- 比如学习队列排序、单元解锁规则、进度口径

### `packages/contracts`

- API 契约、DTO、共享常量
- 保证前后端对接口边界认知一致

### `packages/scheduler`

- 复习调度引擎
- 当前先用规则版，后续可替换为 FSRS

### `packages/content`

- 词书导入、课程编排、内容清洗
- 后续可接考试词书和人工导入后台

## 新领域模型

### 核心实体

- `User`
- `Deck`
- `DeckUnit`
- `VocabularyItem`
- `LearningCard`
- `DeckProgress`
- `StudySession`
- `ReviewLog`

### 模型关系

- 一个 `Deck` 对应一个词书或课程
- 一个 `Deck` 下有多个 `DeckUnit`
- 一个 `VocabularyItem` 是一个标准化词条
- 一个 `VocabularyItem` 可以生成多张 `LearningCard`
- 一个用户对每个 `Deck` 有一条 `DeckProgress`
- 每次学习产生一个 `StudySession`
- 每次作答都写入 `ReviewLog`

## 数据库结构

数据库草案已落到：

- [schema.prisma](file:///Users/Zhuanz/Desktop/trae/polyglot/apps/api/prisma/schema.prisma)

### 关键设计点

- 不再只保存“当前解锁到第几单元”
- 增加 `ReviewLog`，为真实统计和调度提供依据
- `LearningCard` 与 `VocabularyItem` 分离，支持一个单词生成多种题型
- `StudySession` 单独建模，支持学习中断、恢复、统计
- `DeckUnit` 独立存在，保证课程结构可管理

## API 契约

契约定义已落到：

- [blueprint.ts](file:///Users/Zhuanz/Desktop/trae/polyglot/packages/contracts/src/blueprint.ts)

### 当前保留的核心接口

- `POST /v1/auth/register`
- `POST /v1/auth/login`
- `GET /v1/decks`
- `GET /v1/decks/:deckId`
- `POST /v1/study-sessions`
- `POST /v1/study-sessions/:sessionId/reviews`
- `GET /v1/reviews/due`
- `GET /v1/progress/overview`
- `POST /v1/admin/content/import`

## 调度与进度规则

规则实现草案已落到：

- [progress.ts](file:///Users/Zhuanz/Desktop/trae/polyglot/packages/domain/src/progress.ts)

### 当前约束

- 复习卡优先于新卡
- 已到期复习卡按最早到期优先
- 新卡数量受 `maxNewCards` 控制
- 只有当前解锁单元真正通过，才会解锁下一单元

## 这一步完成后意味着什么

从现在开始，后续第 3 步不再是“继续修旧学习页”，而是基于这套新骨架正式开发：

- 新 API
- 新数据库
- 新学习流程
- 新复习系统
- 新统计系统

## 下一步

第 3 步会进入真正的开发阶段，优先实现：

1. 用户与鉴权
2. Deck / Unit / VocabularyItem / LearningCard 的基础 CRUD
3. 学习会话创建与提交
4. ReviewLog 写入
5. 课程进度聚合
