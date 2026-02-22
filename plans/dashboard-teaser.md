# Dashboard Teaser Section — Homepage

## Goal
Add a teaser section on the homepage that showcases the interactive dashboard demo (`/dashboard`) and drives clicks to it. The dashboard already exists at `src/app/dashboard/page.tsx` using `src/components/DashboardDemo.tsx`.

---

## New Component: `src/components/DashboardTeaser.tsx`

### Placement on Homepage
In `src/app/page.tsx`, add between `<Process />` and `<Testimonials />`:

```tsx
import DashboardTeaser from "@/components/DashboardTeaser";
// ...
<Process />
<DashboardTeaser />
<Testimonials />
```

### Design Spec

**Layout:** Full-width section, dark background matching site (`bg-[var(--background)]`). Max-width container (`max-w-5xl`).

**Structure (desktop):** Two-column grid.
- **Left column (text):** Tag + headline + body + CTA button
- **Right column (preview):** 2x2 grid of static KPI cards mimicking the real dashboard style, with a subtle gold glow/gradient behind them to make it feel alive

**Structure (mobile):** Single column — text on top, KPI preview below, stacked.

### Copy (Spanish)

- **Tag:** `REPORTES EN TIEMPO REAL`
- **Headline:** `Cada colón que invertís, medido en tiempo real`
- **Body:** `Nada de reportes genéricos en PDF. Tu dashboard dedicado con leads, conversiones, ROAS y fuentes de tráfico — actualizado en tiempo real.`
- **CTA button:** `Ver dashboard en vivo →` — links to `/dashboard`
  - Style: gold outline button matching the navbar CTA style (border gold, text gold, hover fills with gold/8%)
  - Use `<Link href="/dashboard">` (NOT plain `<a>`)

### Static KPI Preview Cards (right column)

Use 4 hardcoded KPI cards that mimic the real dashboard's `KPICard` style. These are STATIC (no randomization, no intervals) to avoid SSR hydration issues.

```
Card 1: "Leads este mes" → "127" → "+18%" (green badge)
Card 2: "Tasa de conversión" → "3.8%" → "+0.6%" (green badge)
Card 3: "ROAS promedio" → "4.2x" → "+0.5x" (green badge)
Card 4: "Alcance social" → "340K" → "+24%" (green badge)
```

Card styling — **match the real dashboard's Tremor look:**
- Use Tremor's `Card`, `Metric`, `Text`, `Flex`, `BadgeDelta` from `@tremor/react` (already installed)
- This ensures visual consistency between the teaser and the actual `/dashboard` page — visitors who click through won't see a style mismatch
- Apply `decorationColor="amber"` on the Card to tie into the gold accent system
- If Tremor's default card background doesn't match the dark theme, override with `className="!bg-[#1a1a1a] !border-white/10"`

**Demo data disclaimer:**
- Below the 2x2 KPI grid, add a subtle disclaimer line:
  ```tsx
  <p className="text-gray-500 text-xs mt-3 text-center">*Datos de demostración</p>
  ```
- This prevents visitors from reading the numbers as real Lux Media results

### Visual Polish

- Add a subtle radial gold glow behind the KPI grid: `absolute` div with `radial-gradient(ellipse, rgba(212,168,67,0.06) 0%, transparent 70%)` and `pointer-events-none`
- The KPI grid container should have `relative z-10` (lesson from prior bug fixes — always do this when using decorative overlays)
- Entrance animation: use Framer Motion `whileInView` on desktop, `initial={false}` on mobile (existing pattern in this codebase to avoid double pop-in — see `ServicesPreview.tsx` for reference)

### Section ID

Add `id="reportes"` to the section element (for potential future anchor linking).

---

## Validation Checklist

1. `rm -rf .next && npm run build` — must pass with zero errors
2. No `Math.random()` in SSR — all KPI values are hardcoded strings
3. Internal link uses `<Link>` from `next/link`, not plain `<a>`
4. All decorative `absolute` elements have `pointer-events-none`
5. Content container has `relative z-10`
6. No forbidden words: integral, de calidad, innovador, a tu medida, personalizado, equipo de profesionales, amplia experiencia
7. No English leaked into Spanish copy
8. Mobile: `initial={false}` on Framer Motion animations, zero stagger delays
9. KPI cards use Tremor components (`Card`, `Metric`, `BadgeDelta`) — NOT raw Tailwind cards — to match the real dashboard
10. Demo disclaimer `*Datos de demostración` is visible below the KPI grid

---

## Tech Notes

- **Stack:** Next.js 16, React 19, Tailwind 4, Framer Motion
- **Pattern references:** Look at `ServicesPreview.tsx` for the section layout pattern, `CtaBanner.tsx` for decorative overlay pattern
- **Do NOT import or reuse DashboardDemo.tsx** — the teaser uses static hardcoded cards, not the interactive component with `Math.random()` and intervals
- **Do NOT add to Navbar** — this is a homepage section teaser only, not a nav item
