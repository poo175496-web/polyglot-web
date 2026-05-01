# Frontend Last Chance Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the `RebuildWorkspace` frontend so the new learning site feels like a real premium vocabulary product instead of a decorated admin panel.

**Architecture:** Keep the existing API, loaders, study flow, and view-models, but replace the page composition and visual hierarchy inside `src/pages/RebuildWorkspace.tsx`. Split the current monolithic "glass panel grid" feel into a stronger landing narrative, a focused training stage, and sharper review/mistake consoles while preserving all real data and tests.

**Tech Stack:** React, TypeScript, Vite, Tailwind CSS, Vitest

---

### Task 1: Lock the new presentation contract with tests

**Files:**
- Modify: `src/lib/rebuild-web-view-models.test.ts`
- Modify: `src/lib/rebuild-study-interactions.test.ts`
- Test: `src/lib/rebuild-web-view-models.test.ts`
- Test: `src/lib/rebuild-study-interactions.test.ts`

- [ ] **Step 1: Write the failing tests**

```ts
it('builds a dashboard hero with focused primary and secondary actions', () => {
  expect(model.hero.primaryAction).toEqual({
    label: '继续主路线',
    href: '/rebuild/study/zhongkao',
  });
  expect(model.hero.secondaryAction).toEqual({
    label: '查看复习总控',
    href: '/rebuild/review',
  });
});

it('builds a study mission status with stage labels for each practice kind', () => {
  expect(
    buildStudyMissionSummary({
      mode: 'REVIEW',
      totalCards: 4,
      currentIndex: 1,
      decisions: [{ cardId: 'card-1', remembered: true, elapsedMs: 1200 }],
    }).stageLabel
  ).toBe('高压巩固阶段');
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm test -- src/lib/rebuild-web-view-models.test.ts src/lib/rebuild-study-interactions.test.ts`
Expected: FAIL because `primaryAction`, `secondaryAction`, and `stageLabel` do not exist yet.

- [ ] **Step 3: Write the minimal implementation**

```ts
hero: {
  title: '...',
  subtitle: '...',
  primaryAction: {
    label: '继续主路线',
    href: `/rebuild/study/${featuredDeckId}`,
  },
  secondaryAction: {
    label: '查看复习总控',
    href: '/rebuild/review',
  },
}
```

```ts
return {
  missionTitle: ...,
  stageLabel: mode === 'REVIEW' ? '高压巩固阶段' : '新词建立阶段',
  ...
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npm test -- src/lib/rebuild-web-view-models.test.ts src/lib/rebuild-study-interactions.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/lib/rebuild-web-view-models.test.ts src/lib/rebuild-study-interactions.test.ts apps/web/src/view-models.ts apps/web/src/study-session.ts
git commit -m "test(frontend): lock redesigned workspace presentation contract"
```

### Task 2: Rebuild the global visual system

**Files:**
- Modify: `src/index.css`
- Test: `npm run build`

- [ ] **Step 1: Write the failing visual requirement as checklist comments in the plan execution notes**

```css
/* Required surfaces:
   - darker premium background
   - reduced grid noise
   - spotlight hero glow
   - stronger panel depth classes
*/
```

- [ ] **Step 2: Run build baseline**

Run: `npm run build`
Expected: PASS before styling changes

- [ ] **Step 3: Write the minimal implementation**

```css
body {
  background:
    radial-gradient(circle at 15% 10%, rgba(56, 189, 248, 0.18), transparent 22%),
    radial-gradient(circle at 82% 14%, rgba(139, 92, 246, 0.16), transparent 24%),
    radial-gradient(circle at 50% 120%, rgba(14, 165, 233, 0.12), transparent 35%),
    linear-gradient(180deg, #020617 0%, #050b17 48%, #02050d 100%);
}

.premium-panel {
  @apply border border-white/10 bg-slate-950/55 backdrop-blur-2xl;
  box-shadow:
    0 24px 80px rgba(2, 6, 23, 0.48),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.hero-spotlight {
  background: radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, transparent 70%);
}
```

- [ ] **Step 4: Run build to verify it still passes**

Run: `npm run build`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/index.css
git commit -m "feat(frontend): upgrade workspace visual system"
```

### Task 3: Rebuild the dashboard and decks pages into a product landing flow

**Files:**
- Modify: `src/pages/RebuildWorkspace.tsx`
- Modify: `apps/web/src/view-models.ts`
- Test: `src/lib/rebuild-web-view-models.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
expect(model.hero.primaryAction.href).toBe('/rebuild/study/zhongkao');
expect(model.hero.secondaryAction.href).toBe('/rebuild/review');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- src/lib/rebuild-web-view-models.test.ts`
Expected: FAIL with missing hero action fields

- [ ] **Step 3: Write the minimal implementation**

```tsx
<section className="premium-panel ...">
  <div className="hero-spotlight ..." />
  <div className="grid xl:grid-cols-[1.2fr_0.8fr]">
    <div>{/* brand story, CTA, trust strip */}</div>
    <div>{/* today focus, due review count, current route */}</div>
  </div>
</section>

<section className="grid xl:grid-cols-[1.1fr_0.9fr]">
  <div>{/* command center */}</div>
  <div>{/* route cards */}</div>
</section>
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- src/lib/rebuild-web-view-models.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/pages/RebuildWorkspace.tsx apps/web/src/view-models.ts src/lib/rebuild-web-view-models.test.ts
git commit -m "feat(frontend): redesign dashboard and deck flow"
```

### Task 4: Rebuild the study page into a single focused training stage

**Files:**
- Modify: `src/pages/RebuildWorkspace.tsx`
- Modify: `apps/web/src/study-session.ts`
- Test: `src/lib/rebuild-study-interactions.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
expect(
  buildStudyMissionSummary({
    mode: 'REVIEW',
    totalCards: 4,
    currentIndex: 1,
    decisions: [{ cardId: 'card-1', remembered: true, elapsedMs: 1200 }],
  }).stageLabel
).toBe('高压巩固阶段');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- src/lib/rebuild-study-interactions.test.ts`
Expected: FAIL with missing `stageLabel`

- [ ] **Step 3: Write the minimal implementation**

```tsx
<section className="grid xl:grid-cols-[0.9fr_1.1fr_0.7fr]">
  <aside>{/* word intelligence rail */}</aside>
  <main>{/* single question stage */}</main>
  <aside>{/* mission brief, streak, next move */}</aside>
</section>
```

```ts
stageLabel:
  mode === 'REVIEW'
    ? '高压巩固阶段'
    : '新词建立阶段',
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- src/lib/rebuild-study-interactions.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/pages/RebuildWorkspace.tsx apps/web/src/study-session.ts src/lib/rebuild-study-interactions.test.ts
git commit -m "feat(frontend): refocus study stage experience"
```

### Task 5: Rebuild review and mistakes into cleaner mission consoles

**Files:**
- Modify: `src/pages/RebuildWorkspace.tsx`
- Modify: `apps/web/src/view-models.ts`
- Test: `src/lib/rebuild-review-pages.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
expect(model.summary.primaryBatchLaunch?.cardIds).toEqual(['card-1', 'card-3']);
expect(model.summary.focusDeckLabel).toBe('重点攻坚 ZHONGKAO');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- src/lib/rebuild-review-pages.test.ts`
Expected: FAIL if those summary contracts drift

- [ ] **Step 3: Write the minimal implementation**

```tsx
<section>{/* summary strip */}</section>
<section>{/* focused primary action */}</section>
<section>{/* cleaner queue list / risk list */}</section>
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- src/lib/rebuild-review-pages.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/pages/RebuildWorkspace.tsx apps/web/src/view-models.ts src/lib/rebuild-review-pages.test.ts
git commit -m "feat(frontend): streamline review and mistakes consoles"
```

### Task 6: Final regression and deployment handoff

**Files:**
- Modify: `backend/src/server.ts` (only if deployment glue needs adjustment)
- Modify: `apps/web/src/api/client.ts` (only if deployment glue needs adjustment)

- [ ] **Step 1: Run lint**

Run: `npm run lint`
Expected: PASS

- [ ] **Step 2: Run type check**

Run: `npm run check`
Expected: PASS

- [ ] **Step 3: Run full tests**

Run: `npm test`
Expected: PASS

- [ ] **Step 4: Run production build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 5: Push the final frontend rewrite**

```bash
git add -A
git commit -m "feat(frontend): complete premium learning site rewrite"
git push origin main
```
