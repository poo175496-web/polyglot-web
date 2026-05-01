# Frontend Flagship Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 `RebuildWorkspace` 重构成未来旗舰版前端界面，让首页、课程页、详情页、学习页都具备高级视觉层级，同时保留现有真实学习数据链路。

**Architecture:** 保留现有 `loader -> view-model -> RebuildWorkspace` 的数据结构，只对视觉结构、Tailwind className 和少量全局样式做大规模升级。优先升级首页和学习页，随后统一课程页与详情页的视觉系统，最后做全量验证。

**Tech Stack:** React、TypeScript、Tailwind CSS、Vite、Vitest

---

### Task 1: 锁定首页分析卡与英雄区文案

**Files:**
- Modify: `src/lib/rebuild-web-view-models.test.ts`
- Modify: `apps/web/src/view-models.ts`
- Test: `src/lib/rebuild-web-view-models.test.ts`

- [ ] **Step 1: 写失败测试，锁定首页关键信息不丢**

```ts
it('builds dashboard data from overview and deck responses', () => {
  const model = buildDashboardViewModel({
    overview: {
      dueReviews: 32,
      studyStats: {
        todayReviewedCount: 18,
        accuracyRate: 87,
        weakDecks: [{ deckId: 'ielts', wrongCount: 4 }],
      },
      deckProgress: [
        { deckId: 'gaokao', unlockedUnitIndex: 2, masteredCardCount: 40 },
        { deckId: 'ielts', unlockedUnitIndex: 0, masteredCardCount: 0 },
      ],
    },
    decks: [
      { id: 'gaokao', title: '高考高频词汇全覆盖', unitCount: 3, unlockedUnitIndex: 2 },
      { id: 'ielts', title: '雅思核心学术词库', unitCount: 3, unlockedUnitIndex: 0 },
    ],
  });

  expect(model.hero.title).toBe('高考高频词汇全覆盖');
  expect(model.stats.todayReviewedLabel).toBe('今日已练 18 题');
  expect(model.stats.accuracyLabel).toBe('正确率 87%');
  expect(model.stats.weakDeckLabel).toBe('薄弱词书 IELTS');
});
```

- [ ] **Step 2: 运行测试确认失败**

Run: `npm test -- src/lib/rebuild-web-view-models.test.ts`
Expected: FAIL，缺少新的统计字段或映射字段

- [ ] **Step 3: 用最小实现补齐 view model 字段**

```ts
stats: {
  dueReviews: overview.dueReviews,
  trackedDecks: decks.length,
  todayReviewedLabel: `今日已练 ${overview.studyStats.todayReviewedCount} 题`,
  accuracyLabel: `正确率 ${overview.studyStats.accuracyRate}%`,
  weakDeckLabel: overview.studyStats.weakDecks[0]
    ? `薄弱词书 ${overview.studyStats.weakDecks[0].deckId.toUpperCase()}`
    : '薄弱词书 暂无',
},
```

- [ ] **Step 4: 再次运行测试确认通过**

Run: `npm test -- src/lib/rebuild-web-view-models.test.ts`
Expected: PASS

- [ ] **Step 5: 提交**

```bash
git add src/lib/rebuild-web-view-models.test.ts apps/web/src/view-models.ts
git commit -m "feat: enrich dashboard flagship stats copy"
```

### Task 2: 升级全局背景与旗舰样式基底

**Files:**
- Modify: `src/index.css`
- Test: `npm run build`

- [ ] **Step 1: 先写最小样式目标说明到计划执行上下文**

```css
body {
  background:
    radial-gradient(circle at top, rgba(56, 189, 248, 0.18), transparent 35%),
    radial-gradient(circle at 80% 20%, rgba(129, 140, 248, 0.16), transparent 28%),
    linear-gradient(180deg, #050816 0%, #0b1023 42%, #090d1a 100%);
}
```

- [ ] **Step 2: 运行构建确认当前版本可作为对照**

Run: `npm run build`
Expected: PASS，作为视觉升级前基线

- [ ] **Step 3: 写最小实现，增加旗舰背景与辅助类**

```css
body {
  min-height: 100vh;
  background:
    radial-gradient(circle at top, rgba(56, 189, 248, 0.18), transparent 35%),
    radial-gradient(circle at 80% 20%, rgba(129, 140, 248, 0.16), transparent 28%),
    linear-gradient(180deg, #050816 0%, #0b1023 42%, #090d1a 100%);
  color: #e5eefc;
}

@layer utilities {
  .glass-panel {
    @apply border border-white/10 bg-white/[0.04] backdrop-blur-2xl;
  }

  .signal-ring {
    box-shadow:
      0 0 0 1px rgba(255, 255, 255, 0.06),
      0 20px 60px rgba(15, 23, 42, 0.35),
      inset 0 1px 0 rgba(255, 255, 255, 0.08);
  }
}
```

- [ ] **Step 4: 运行构建确认样式改动不破坏编译**

Run: `npm run build`
Expected: PASS

- [ ] **Step 5: 提交**

```bash
git add src/index.css
git commit -m "feat: add flagship global visual system"
```

### Task 3: 重构首页 Hero 与战情板

**Files:**
- Modify: `src/pages/RebuildWorkspace.tsx`
- Test: `src/lib/rebuild-web-view-models.test.ts`

- [ ] **Step 1: 先锁定首页必须保留的数据文案**

```ts
expect(model.stats.todayReviewedLabel).toBe('今日已练 18 题');
expect(model.stats.accuracyLabel).toBe('正确率 87%');
expect(model.stats.weakDeckLabel).toBe('薄弱词书 IELTS');
```

- [ ] **Step 2: 运行相关测试确保文案回归受保护**

Run: `npm test -- src/lib/rebuild-web-view-models.test.ts`
Expected: PASS

- [ ] **Step 3: 重写 `mode === 'dashboard'` 区块为旗舰布局**

```tsx
<div className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
  <section className="signal-ring glass-panel relative overflow-hidden rounded-[2.5rem] p-8">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(129,140,248,0.16),transparent_28%)]" />
    <div className="relative">
      <p className="text-xs font-black uppercase tracking-[0.35em] text-cyan-300/80">Flagship Dashboard</p>
      <h2 className="mt-4 max-w-3xl text-5xl font-black leading-tight text-white">
        {dashboard.hero.title}
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">{dashboard.hero.subtitle}</p>
      <div className="mt-8 grid gap-4 md:grid-cols-5">
        ...
      </div>
    </div>
  </section>
  <aside className="signal-ring glass-panel rounded-[2.5rem] p-6">
    ...
  </aside>
</div>
```

- [ ] **Step 4: 运行测试与构建，确认数据仍正常绑定**

Run: `npm test -- src/lib/rebuild-web-view-models.test.ts && npm run build`
Expected: PASS

- [ ] **Step 5: 提交**

```bash
git add src/pages/RebuildWorkspace.tsx
git commit -m "feat: redesign flagship dashboard hero"
```

### Task 4: 重构课程矩阵卡片

**Files:**
- Modify: `src/pages/RebuildWorkspace.tsx`
- Test: `npm run build`

- [ ] **Step 1: 先确认课程数据接口无需新增**

```ts
{decks.map((deck) => (
  <Link key={deck.id} to={`/rebuild/decks/${deck.id}`}>
    {deck.title}
  </Link>
))}
```

- [ ] **Step 2: 运行构建确认当前课程页是稳定基线**

Run: `npm run build`
Expected: PASS

- [ ] **Step 3: 将课程页卡片升级为品牌化矩阵卡**

```tsx
className="group relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30"
```

卡片内加入：

```tsx
<p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300/70">{deck.id}</p>
<h2 className="mt-5 text-3xl font-black text-white">{deck.title}</h2>
<div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
  <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400" style={{ width: `${((deck.unlockedUnitIndex + 1) / deck.unitCount) * 100}%` }} />
</div>
```

- [ ] **Step 4: 运行构建确认新样式无语法问题**

Run: `npm run build`
Expected: PASS

- [ ] **Step 5: 提交**

```bash
git add src/pages/RebuildWorkspace.tsx
git commit -m "feat: redesign flagship deck matrix"
```

### Task 5: 重构课程详情页为学习任务地图

**Files:**
- Modify: `src/pages/RebuildWorkspace.tsx`
- Test: `src/lib/rebuild-deck-detail.test.ts`

- [ ] **Step 1: 保留详情状态语义测试**

```ts
expect(unit.status).toBe('available');
```

- [ ] **Step 2: 运行测试确认状态语义已有保护**

Run: `npm test -- src/lib/rebuild-deck-detail.test.ts`
Expected: PASS

- [ ] **Step 3: 将详情页列表改为“路径式任务地图”视觉**

```tsx
<div className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-3">
  {deckDetail.unitCards.map((unit, index) => (
    <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
      <span className="text-xs font-black uppercase tracking-[0.25em] text-slate-400">Stage {index + 1}</span>
      <p className="mt-3 text-xl font-black text-white">{unit.title}</p>
      ...
    </div>
  ))}
</div>
```

- [ ] **Step 4: 运行测试和构建确认数据逻辑不变**

Run: `npm test -- src/lib/rebuild-deck-detail.test.ts && npm run build`
Expected: PASS

- [ ] **Step 5: 提交**

```bash
git add src/pages/RebuildWorkspace.tsx
git commit -m "feat: redesign flagship deck detail map"
```

### Task 6: 重构学习页左侧情报区为沉浸式驾驶舱

**Files:**
- Modify: `src/pages/RebuildWorkspace.tsx`
- Test: `src/lib/rebuild-web-view-models.test.ts`

- [ ] **Step 1: 确认学习页关键字段已有测试保护**

```ts
expect(model.cards[0].phonetic).toBe('/test/');
expect(model.progressPercentLabel).toBe('已完成 66% 的课程解锁');
```

- [ ] **Step 2: 运行测试确认基线通过**

Run: `npm test -- src/lib/rebuild-web-view-models.test.ts`
Expected: PASS

- [ ] **Step 3: 把左侧信息区改为深色玻璃驾驶舱**

```tsx
<div className="space-y-6">
  <section className="signal-ring glass-panel rounded-[2.5rem] p-8">
    ...
  </section>
  <section className="signal-ring glass-panel rounded-[2.5rem] p-8">
    ...
  </section>
</div>
```

要求保留：

- `study.headerTitle`
- `study.activeUnitLabel`
- `study.progressPercentLabel`
- `activeStudyCard.phonetic`
- `activeStudyCard.root`
- `activeStudyCard.example`
- 发音按钮

- [ ] **Step 4: 运行测试和构建确认字段未丢失**

Run: `npm test -- src/lib/rebuild-web-view-models.test.ts && npm run build`
Expected: PASS

- [ ] **Step 5: 提交**

```bash
git add src/pages/RebuildWorkspace.tsx
git commit -m "feat: redesign flagship study cockpit"
```

### Task 7: 重构学习页主训练舞台

**Files:**
- Modify: `src/pages/RebuildWorkspace.tsx`
- Test: `src/lib/rebuild-study-interactions.test.ts`

- [ ] **Step 1: 保留训练模式行为测试**

```ts
expect(
  buildPracticeSteps({
    mode: 'LEARN',
    cards: new Array(4).fill(null).map((_, index) => ({ id: `card-${index}`, answer: `meaning-${index}` })),
  }).map((step) => step.kind)
).toEqual(['flashcard', 'choice', 'spelling', 'cloze']);
```

- [ ] **Step 2: 运行测试确认行为基线**

Run: `npm test -- src/lib/rebuild-study-interactions.test.ts`
Expected: PASS

- [ ] **Step 3: 把右侧训练区升级为主舞台视觉**

```tsx
<div className="signal-ring glass-panel rounded-[2.5rem] p-6">
  <div className="flex items-center justify-between">
    <p className="text-sm font-bold text-slate-400">学习会话</p>
    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
      {activePracticeKind}
    </span>
  </div>
  ...
</div>
```

要求保留现有：

- `flashcard`
- `choice`
- `spelling`
- `cloze`

且按钮逻辑、作答逻辑、提交逻辑不变。

- [ ] **Step 4: 运行交互测试与构建**

Run: `npm test -- src/lib/rebuild-study-interactions.test.ts && npm run build`
Expected: PASS

- [ ] **Step 5: 提交**

```bash
git add src/pages/RebuildWorkspace.tsx
git commit -m "feat: redesign flagship study stage"
```

### Task 8: 统一 review / mistakes / loading / error 状态的旗舰风格

**Files:**
- Modify: `src/pages/RebuildWorkspace.tsx`
- Test: `npm run build`

- [ ] **Step 1: 识别需要统一的状态区块**

```tsx
loading
error
mode === 'review'
mode === 'mistakes'
```

- [ ] **Step 2: 运行构建确认当前可作为对照**

Run: `npm run build`
Expected: PASS

- [ ] **Step 3: 升级这些状态区块视觉**

```tsx
className="signal-ring glass-panel rounded-[2.5rem] ..."
```

错误态保留明确文案：

```tsx
请确认新 API 已启动，并检查 `VITE_REBUILD_API_BASE_URL` 是否正确。
```

- [ ] **Step 4: 运行构建确认所有 JSX 结构正确**

Run: `npm run build`
Expected: PASS

- [ ] **Step 5: 提交**

```bash
git add src/pages/RebuildWorkspace.tsx
git commit -m "feat: unify flagship runtime states"
```

### Task 9: 全量回归与收尾

**Files:**
- Verify: `src/pages/RebuildWorkspace.tsx`
- Verify: `src/index.css`
- Verify: `apps/web/src/view-models.ts`

- [ ] **Step 1: 跑 lint**

Run: `npm run lint`
Expected: PASS

- [ ] **Step 2: 跑类型检查**

Run: `npm run check`
Expected: PASS

- [ ] **Step 3: 跑全量测试**

Run: `npm test`
Expected: PASS

- [ ] **Step 4: 跑生产构建**

Run: `npm run build`
Expected: PASS

- [ ] **Step 5: 最终提交**

```bash
git add src/pages/RebuildWorkspace.tsx src/index.css apps/web/src/view-models.ts docs/superpowers/specs/2026-05-01-frontend-flagship-design.md docs/superpowers/plans/2026-05-01-frontend-flagship-redesign.md
git commit -m "feat: ship flagship frontend redesign"
```
