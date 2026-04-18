# Mobile Hero Dashboard Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace poster-only mobile hero with an animated "Live Dashboard" background built as inline React components (no Remotion).

**Architecture:** One `MobileHeroDashboard` component rendered in Hero.tsx when `isMobile && mounted`. Uses CSS animations for continuous effects (ticker scroll, ring fill, data flow dots) and Framer Motion for entrance animations (fade-in, pop-in). Respects `prefers-reduced-motion`.

**Tech Stack:** React 19, Framer Motion, Tailwind CSS, SVG, CSS keyframes

---

## File Structure

| File | Action | Responsibility |
|------|--------|---------------|
| `src/components/MobileHeroDashboard.tsx` | Create | All 5 bands: ticker, rings, chart, stats, platforms + data flow lines |
| `src/components/Hero.tsx` | Modify | Render `MobileHeroDashboard` on mobile instead of poster-only |

Two files. That's it. The dashboard is one self-contained component — the bands are simple enough to live in a single file (~300 lines). No need to split into 5 micro-components that are only used in one place.

---

### Task 1: Create MobileHeroDashboard component

**Files:**
- Create: `src/components/MobileHeroDashboard.tsx`

- [ ] **Step 1: Create the component with all 5 bands**

The component renders 5 vertically stacked content bands using absolute positioning (percentage-based) inside a full-screen container. All animations are CSS-driven for performance.

**Band layout (percentage of viewport height):**
- Band 1 (Ticker): top 5-8%
- Band 2 (Rings): top 10-32%
- Band 3 (Chart): top 35-57%
- Band 4 (Stats): top 60-72%
- Band 5 (Platforms): top 74-80%
- Bottom 20%: empty (HTML text overlay zone)

**Animations:**
- Ticker: CSS `translateX` infinite loop
- Rings: CSS `stroke-dashoffset` with delays (0s, 0.3s, 0.6s)
- Chart: CSS `stroke-dashoffset` draw + gradient fill fade
- Stats: Framer Motion `motion.div` staggered pop-in
- Platforms: Framer Motion `motion.div` staggered scale-in + CSS pulse loop
- Data flow dots: CSS `translateX` infinite on 3 horizontal lines

**Reduced motion:** Wrap in a check — if `prefers-reduced-motion`, render static (no animations, all elements visible at final state).

**Platform icons (7):** Facebook, Instagram, TikTok, Google, YouTube, LinkedIn, WhatsApp — inline SVG paths.

**Metrics data:** Hardcoded in a const array at top of file for easy updates:
```tsx
const METRICS = [
  { value: "85%", label: "META ADS", color: "#22c55e", percent: 85 },
  { value: "4.2x", label: "ROAS", color: "#D4A843", percent: 92 },
  { value: "73%", label: "SEO", color: "#3b82f6", percent: 73 },
];
const STATS = [
  { value: "$2.1", delta: "▲ 31%", label: "COST/LEAD", color: "#D4A843" },
  { value: "156", delta: "▲ 33%", label: "VENTAS", color: "#22c55e" },
  { value: "#1", delta: "★", label: "GOOGLE", color: "#fff" },
  { value: "+47%", delta: "▲", label: "ENGAGEMENT", color: "#22c55e" },
];
const TICKER_ITEMS = ["ROAS 4.2x", "Leads +312%", "CTR 3.8%", "CPC -23%", "Revenue +$18K", "Engagement +47%"];
```

- [ ] **Step 2: Run build to verify no errors**

Run: `npm run build`
Expected: PASS — new component isn't imported yet, but should have no syntax errors if imported.

- [ ] **Step 3: Commit**

```bash
git add src/components/MobileHeroDashboard.tsx
git commit -m "feat: add MobileHeroDashboard component with 5 animated bands"
```

---

### Task 2: Integrate into Hero.tsx

**Files:**
- Modify: `src/components/Hero.tsx`

- [ ] **Step 1: Import and render MobileHeroDashboard**

Changes to Hero.tsx:
1. Add import: `import MobileHeroDashboard from "./MobileHeroDashboard";`
2. After the poster `<picture>` block (line 89) and before the desktop video block, add:
```tsx
{/* Mobile: animated dashboard background */}
{isMobile && mounted && <MobileHeroDashboard />}
```

This renders the dashboard on mobile instead of the video. Desktop keeps the video unchanged.

- [ ] **Step 2: Run build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 3: Visual check**

Run: `rm -rf .next && npm run dev`
Open localhost on mobile viewport (375px width in DevTools). Verify:
- Ticker scrolls left continuously
- 3 rings fill with color + values appear
- Area chart draws left to right
- 4 stat cards pop in
- 7 platform icons appear with pulse
- Text overlay at bottom is fully readable
- No dead space

- [ ] **Step 4: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat: render MobileHeroDashboard on mobile hero instead of poster-only"
```
