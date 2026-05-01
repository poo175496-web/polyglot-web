# Frontend Flagship Redesign

## Goal

将当前 `RebuildWorkspace` 从“功能可用但视觉偏平”的学习站，升级为一版具有强烈高级感、未来感与产品完成度的前端界面。

这次重构不改变当前学习闭环的核心能力，不推翻现有 API，而是在保留真实学习功能的前提下，把首页、课程页、详情页、学习页和状态反馈统一成一套旗舰级视觉语言。

成功标准：

- 首屏就有明显冲击力，而不是传统后台面板气质
- 首页具备“英雄区 + 战情板 + 学习分析 + 课程矩阵”的高级产品层级
- 学习页具备沉浸感，重点突出训练流程与单词情报
- 保留现有真实数据链路，不做纯静态海报
- 保持构建、类型检查、测试全部通过

## Current Problems

- 顶部英雄区有基础渐变，但版面仍然像“普通卡片容器”
- 首页核心内容仍偏列表化，缺少强节奏和视觉中心
- 课程页与详情页结构清楚，但缺乏品牌感和记忆点
- 学习页功能越来越完整，但布局仍是“左右两栏 + 白卡片”思路，沉浸感不够
- 全局背景、边框、阴影、颜色、发光、交互动效还没有形成统一设计系统

## Design Direction

### Recommended Direction

采用“未来科技感 + 苹果级极简奢华”的融合方案。

目标不是做廉价赛博朋克，而是做一版：

- 背景深色但不脏
- 发光明确但不刺眼
- 层级强烈但不堆满装饰
- 动效克制但有高级响应

整体关键词：

- dark premium
- glass layers
- aurora gradients
- signal dashboard
- immersive study cockpit

### Alternatives Considered

#### Option A: 深色未来旗舰版（推荐）

- 优点：最能快速提升“高级感”和“震撼感”，适合当前产品阶段
- 缺点：实现复杂度最高，需要较细的样式控制

#### Option B: 黑白极简奢华版

- 优点：更克制、更像高端工具产品
- 缺点：冲击力不足，不符合“界面无趣”的直接诉求

#### Option C: 强游戏化成长版

- 优点：更燃，更像任务冲榜产品
- 缺点：容易偏“炫”和“热闹”，而不是“贵”和“强”

结论：选择 Option A。

## Visual System

### Global Surface

- 页面主背景改为深色宇宙基底，不再使用浅灰底
- 使用大面积模糊光晕、径向渐变和细颗粒网格，营造旗舰感
- 主内容卡片采用深浅分层玻璃拟态，而不是统一白卡

### Color Language

- 主色：电蓝 / 冷紫 / 青色
- 强调色：极光青、能量蓝、少量琥珀风险色
- 中性色：深蓝黑、石墨灰、雾白文本

### Typography

- 页面大标题更大更紧凑，形成品牌海报感
- 数据数字采用更强字号对比
- 辅助说明使用高透明度浅色文本，减少界面噪音

### Motion

- 页面进入：渐显 + 上浮
- 卡片 hover：轻微位移 + 边缘发光
- 进度条：能量流式渐变
- 按钮：发光压感反馈
- 不引入大面积炫技动画，避免性能和廉价感问题

## Information Architecture

### Dashboard

仪表盘重构成四层：

1. Hero Layer
   品牌主标题、学习状态、主 CTA、信号感背景装饰

2. Battle Stats Layer
   待复习、词书数量、今日学习、正确率、薄弱词书

3. Deck Matrix Layer
   课程矩阵卡片，以更强的视觉区分不同考试路线

4. Insight Layer
   风险提示、推荐继续学习、近期训练焦点

### Decks

- 课程卡从普通信息卡升级为品牌化矩阵卡
- 每张卡具备更强的考试属性识别、开放进度条和行动按钮
- 卡片 hover 时增强沉浸反馈

### Deck Detail

- 单元状态不只显示“可学/未解锁”
- 增加路线感、阶段感和课程掌握氛围
- 做成更像“学习任务地图”

### Study

学习页改造成三层结构：

1. Left Rail
   单词情报、词根、音标、例句、发音、主题、风险标签

2. Main Training Stage
   当前题型主舞台，视觉焦点集中到训练行为

3. Context / Session Support
   进度、当前模式、结算反馈、掌握节奏、复习状态

目标是让用户一眼感知：

- 我在学什么
- 我现在处于哪种训练
- 我已经完成了多少
- 我还差什么

## Component Strategy

### Reuse vs Change

保留：

- 现有数据请求逻辑
- 现有学习模式与练习流
- 现有 API client / loader / view-model / study-session 工具

重构：

- `src/pages/RebuildWorkspace.tsx` 视觉结构和大部分 className
- `src/index.css` 全局背景与旗舰级辅助样式

必要时可抽出：

- `HeroPanel`
- `SignalStatCard`
- `DeckShowcaseCard`
- `StudyCockpitPanel`
- `GlassSurface`

但首轮实现优先在单文件内完成，避免无关拆分带来过多风险。

## Data Flow

- 不新增后端接口作为本轮硬依赖
- 使用现有 `dashboard`、`deck detail`、`study`、`review`、`mistakes` 数据
- 所有新视觉模块都基于已有真实数据映射
- 若某个视觉块缺少数据，必须优雅降级，而不是展示假数据

## Accessibility and Performance

- 深色主题下保持足够文字对比度
- 所有按钮保持真实文本，不只依赖图标
- 控制滤镜、阴影和模糊层数，避免页面显著变卡
- 延续现有 chunk 控制，不因视觉重构打破构建质量

## Error Handling

- 加载、错误状态沿用现有逻辑，但视觉上升级为旗舰风格
- 错误提示仍然明确指出 API、环境变量等问题，不能只剩“酷炫外壳”

## Testing Strategy

本轮以最小必要回归为主：

- 扩展前端 view-model 测试，锁住首页分析文案和关键展示字段
- 保留现有学习交互测试，防止视觉重构影响行为
- 完成 `npm run lint`、`npm run check`、`npm test`、`npm run build`

不为纯 className 细节编写低价值测试。

## Scope Boundaries

本轮包含：

- 首页视觉重构
- 课程列表视觉重构
- 课程详情视觉重构
- 学习页视觉重构
- 全局背景与视觉系统升级

本轮不包含：

- 新后端能力
- 新账号体系
- 真正的外部音频资源接入
- 新题型协议修改

## Implementation Notes

- 优先从 `dashboard` 和 `study` 两个最关键页面开始，做到“第一眼惊艳”
- 课程页和详情页跟随同一视觉语言统一升级
- 样式优先使用 Tailwind 原子类，必要时在 `src/index.css` 增加少量全局旗舰样式

## Final Recommendation

直接执行“未来旗舰版前端重构”。

判断标准不是“是不是更复杂”，而是：

- 是否明显摆脱普通后台模板感
- 是否提升学习产品的品牌记忆点
- 是否让真实学习数据变得更有存在感

如果实现正确，这一轮会让项目从“功能越来越强”进一步跃迁到“看起来也像真正的大产品”。
