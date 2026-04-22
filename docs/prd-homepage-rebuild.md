# PRD P4 — Homepage rebuild

**Owner:** CODE agent (after COPY + DESIGN + Gabriel approve)
**Branch:** `feat/lux-growth-engine`
**Plan reference:** `~/.claude/plans/we-haven-t-checked-the-linear-pond.md` — Segment 2, Phase D4 (SERIAL — must land AFTER Navbar mega-menu P3)

---

## 1. Context & goals

Current homepage composes 12 sections. Data-backed decision (CXL + 8 top B2B agency homepages — NoGood, Single Grain, Thrive, WebFX, Superside, 11x, Relevance AI, KEY Difference — all run 11–20 sections with heavy social proof): keep all existing sections, **add one new flagship-spotlight section + one minor reorder fix**.

**The ONE new section:** `ThreeFrentesSpotlight` — surfaces the three flagship AI services (Voice Agent + Business Brain + Posicionamiento GEO) as a "Un motor, 3 frentes" hero-adjacent moment. This is the single biggest homepage differentiator vs other CR marketing agencies who just list services.

**Nothing gets cut.** ClientLogos, ResultsTicker, Portfolio, DashboardTeaser, Testimonials, BlogPreview, FAQ all stay — confirmed by the earlier homepage-research agent.

**DashboardTeaser does NOT move up** (earlier draft proposed moving it to position 6; audit caught this would create 4 dashboard/metrics visuals in the first 2 mobile viewports because the Mobile Hero already IS a dashboard via `MobileHeroDashboard.tsx`). Keep DashboardTeaser at its current position (after Process).

**Goal:** ship the "3 frentes" spotlight as position 4 + minimal orchestration of page.tsx + stale-reference sweep on Testimonials/FAQ/ClientLogos. No visual redesign of other existing sections.

**Success signal:** a prospect scrolling the homepage sees, in order: Lux positioning → real client logos (trust) → metric proof (ResultsTicker) → **the 3 flagship AI frentes** (differentiation) → full service grid → ... Every top-agency pattern in the research anchors flagship differentiation early, right after social proof.

---

## 2. Out of scope

- Cutting or removing any existing homepage section (ClientLogos, ResultsTicker, Portfolio, DashboardTeaser, Testimonials, About, BlogPreview, FAQ all stay — research confirmed cuts were ungrounded)
- Moving DashboardTeaser up (dual-Hero / mobile redundancy risk — documented in memory `project_dual_hero_pattern.md`)
- Redesigning Hero (desktop Remotion video + mobile `MobileHeroDashboard` pattern stays)
- Redesigning any existing section visual treatment — copy sweeps only (Segment 3 handles motion/visual polish later)
- Rotating `ServicesPreview` featured slugs (currently: publicidad-meta / redes-sociales / business-brain / seo / video-reels / desarrollo-web). Voice Agent + Posicionamiento GEO landing as services doesn't require rotating the 6 featured slots in this PRD — deferred to a follow-up after those pages ship and Gabriel decides what to demote.
- Redesigning navbar (P3 owns)
- Changing Hero H1/subtitle (already Lux Growth Engine copy)
- Simulated demos or mock data on the new spotlight section
- Any new schema beyond the optional `ItemList` JSON-LD for the 3 frentes (nice-to-have, not blocking)

---

## 3. Copy spec (Spanish, voseo CR, ready-to-paste)

Only the new `ThreeFrentesSpotlight` needs copy. Everything else inherits existing homepage copy.

### `ThreeFrentesSpotlight` content

**Section wrapper:**
- **Eyebrow** (gold uppercase tracking-widest): `LUX GROWTH ENGINE`
- **H2**: `Un motor, 3 frentes`
- **Subtitle** (below H2, gray-400): `Tres servicios de IA que corren juntos para hacer crecer tu negocio — sin agencias fragmentadas ni integraciones rotas.`

**Three cards** (equal visual weight — no BB featured; reading order optimized for F-pattern scan):

| Card | Icon | Title | 1-sentence value prop | CTA |
|---|---|---|---|---|
| 1 | 🧠 | **Business Brain** | *"Un cerebro que aprende tu negocio y responde en WhatsApp, IG y Facebook mientras vos dormís."* | `Ver más →` → `/servicios/business-brain` |
| 2 | ☎️ | **Voice Agent** | *"Contesta tu teléfono 24/7 en español, califica leads y agenda citas sin que tu equipo deje de vender."* | `Ver más →` → `/servicios/voice-agent` |
| 3 | ✨ | **Posicionamiento GEO** | *"Cuando tu cliente le pregunta a ChatGPT, que tu marca sea la respuesta."* | `Ver más →` → `/servicios/posicionamiento-geo` |

**Reading order rationale:** F-pattern eye tracking on 3-up grids = leftmost ~40% attention / center ~35% / right ~25%. BB leads as the umbrella (broadest scope, natural entry). Voice Agent takes the center (most concrete outcome = strongest hook for skeptics). GEO closes (aspirational / frontier wedge).

**Closing bridge line** (below 3 cards):
> `Meta Ads, SEO, video, web — lo demás del motor, abajo. ↓`

Short, no fragile count ("11 servicios" breaks if service count shifts), reinforces the "motor" metaphor. Arrow bridges visually into ServicesPreview immediately below.

### Stale-reference sweep copy (minor)

During implementation the CODE agent also checks for lingering old-positioning copy in these files:

- `src/components/Testimonials.tsx` — scan for any "24h respuesta" / "departamento de marketing" / "agencia de marketing" phrases that should align with Lux Growth Engine. If found, flag (don't edit; testimonials are verbatim client quotes).
- `src/components/FAQ.tsx` — scan for any references to deleted services (`chatbots-ia`, `automatizacion-ia`). If found, update link targets to `/servicios/business-brain` or rewrite.
- `src/components/ClientLogos.tsx` — scan heading text for old "agencia" framing. If found, update to Lux Growth Engine framing.

None of these are expected to need changes (most already swept in earlier segments), but the sweep is documented for audit trail.

---

## 4. Design spec — `ThreeFrentesSpotlight.tsx`

**New file:** `src/components/ThreeFrentesSpotlight.tsx`

**Visual anchors** (DESIGN agent should screenshot via Chrome DevTools MCP for Tailwind extraction):
- **11x.ai** — product personas grid (equal 3-up card weight, generous whitespace, dark background with aurora glow)
- **Relevance AI** — agent templates section (card layout, subtle gold accents)
- Skip Superside-style feature matrix (overkill for 3 cards)

**Section geometry:**
- Full-width `<section>` with `py-20 md:py-28` vertical rhythm (matches existing homepage section cadence)
- Inner container: `max-w-7xl mx-auto px-6`
- Background: solid `var(--background)` with a radial aurora glow anchored top-center (`bg-[radial-gradient(ellipse_at_top,rgba(245,181,26,0.08)_0%,transparent_60%)]`) — subtle gold spotlight, matches existing aurora aesthetic but slightly stronger since this is the differentiator moment

**Header block (above cards):**
- Centered text alignment
- Eyebrow: `text-[var(--accent)] text-sm font-medium uppercase tracking-widest gold-glow-subtle`
- H2: `text-4xl md:text-6xl font-bold font-display mt-4`
- Subtitle: `text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mt-6 leading-relaxed`

**Card grid:**
- `grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16`
- All 3 cards equal weight — identical padding, identical height (use `items-stretch` + `h-full` on card root)

**Card styling:**
- Root: `p-8 rounded-2xl glass-card relative overflow-hidden group`
- Icon: render emoji at large size — `text-5xl md:text-6xl mb-6 block`
- Title: `text-2xl md:text-3xl font-bold font-display text-white mb-3`
- Value prop: `text-gray-400 leading-relaxed`
- CTA `<Link>`: `text-[var(--accent)] font-medium inline-flex items-center gap-2 mt-6 group-hover:gap-3 transition-all`
- Hover state: `hover:border-[var(--accent)]/30 transition-all duration-300`
- Subtle gold glow on hover: absolute pseudo via existing `glow` utility

**Animation:**
- Framer Motion stagger on entrance (matches existing vocabulary):
  - Section header fades in first (`opacity 0→1, y 15→0, duration 0.5`)
  - Cards cascade on desktop with `delay: index * 0.1, duration: 0.5, initial: {opacity: 0, y: 20}, whileInView: {opacity: 1, y: 0}, viewport: {once: true, margin: "-50px"}`
- Respects `prefers-reduced-motion`
- **Mobile: lightweight opacity-only fade** — `initial={isMobile ? {opacity: 0} : {opacity: 0, y: 20}}, whileInView: {opacity: 1, y: 0}, transition: {duration: isMobile ? 0.3 : 0.5, delay: isMobile ? 0 : index * 0.1}`. Previous draft's `isMobile ? false` kills animation entirely and risks "dead wall" feel; opacity-only fade costs near-zero GPU and keeps content feeling alive on scroll into view.

**Closing bridge line:**
- Centered below the card grid, `mt-16`
- Text: `text-gray-500 text-base md:text-lg`
- Down-arrow: lucide `ArrowDown` icon, `text-[var(--accent)]` next to or below the text

**Mobile (single column):**
- Stacked 1-up, same card styling
- `gap-6` vertical spacing
- Cards stretch to container width

---

## 5. UX spec

- Breakpoint 768px (existing)
- Cards fully clickable (entire card root wraps in a `<Link>`) — not just the "Ver más →" text
- Each card's focus ring: `focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50`
- Keyboard Tab through 3 cards in order
- Screen reader: section header renders as proper H2; each card has H3 title inside
- `prefers-reduced-motion` → disable entrance stagger (show final state immediately)

---

## 6. Implementation tasks (ordered)

CODE agent executes serially:

1. **Create `src/components/ThreeFrentesSpotlight.tsx`** per the design spec in §4. Use Framer Motion (already a dependency). Full card wrapped in `<Link>`. Three cards read from a local const array (not services.ts — the value props are homepage-specific copy, not the same as service-page `shortDescription`).

2. **Update `src/app/page.tsx`**:
   - Import `ThreeFrentesSpotlight` at top of imports
   - Insert `<ThreeFrentesSpotlight />` between `<ResultsTicker />` and `<ServicesPreview />` (position 4 in final order)
   - Do NOT move `<DashboardTeaser />` — keep it in its existing position (after `<Process />`). Its post-insert position in the 13-section layout is position 8.
   - Final ordering after insert (13 visible sections): Hero → ClientLogos → ResultsTicker → **ThreeFrentesSpotlight (NEW, position 4)** → ServicesPreview → Portfolio → Process → DashboardTeaser → Testimonials → About → BlogPreview → FAQ → CtaBanner

3. **Optional: add `ItemList` JSON-LD** for the 3 frentes. In `src/app/page.tsx`, after the existing FAQPage JSON-LD, add:
   ```ts
   const threeFrentesJsonLd = {
     "@context": "https://schema.org",
     "@type": "ItemList",
     name: "Lux Growth Engine — Servicios flagship de IA",
     itemListElement: [
       { "@type": "Service", position: 1, name: "Voice Agent", url: "https://luxmediacr.com/servicios/voice-agent" },
       { "@type": "Service", position: 2, name: "Business Brain", url: "https://luxmediacr.com/servicios/business-brain" },
       { "@type": "Service", position: 3, name: "Posicionamiento GEO", url: "https://luxmediacr.com/servicios/posicionamiento-geo" },
     ],
   };
   // Render it the same way as faqJsonLd — another <script type="application/ld+json"> in the <main> prelude
   ```

4. **Stale-reference sweep** (broadened per audit):
   - `grep -rn "24h respuesta\|departamento de marketing\|agencia de marketing\|growth partner\|Business AI Brain" src/components/ src/app/` — flag any hits; update if they're agency copy (leave client quotes / testimonials verbatim)
   - `grep -rn "chatbot\|chatbots" src/components/ src/app/` — should not reference deleted services outside legitimate mentions (e.g., a blog post about chatbots generically is fine; a service-grid card is not)
   - `grep -rn "/servicios/chatbots-ia\|/servicios/automatizacion-ia" src/` — should return zero results (earlier redirects handle old URLs; no component should still link to them)
   - **Inspect `src/components/ServicesPreview.tsx` header copy** — if it re-pitches "motor integrado" or "Lux Growth Engine" language, trim to avoid 4-way positioning repetition (Hero → 3 frentes → ServicesPreview → Portfolio). Generic heading like "Nuestros servicios" is fine; "Un motor completo" is not.

5. **Responsive spot-check** (before committing): run `npm run dev`, view homepage at both 1440×900 (desktop) and 390×844 (mobile) in Playwright. Confirm:
   - Desktop: 3-up card grid, Hero video plays, DashboardTeaser still after Process
   - Mobile: Hero dashboard renders (MobileHeroDashboard), 1-up cards stack, no horizontal scroll, no duplicate dashboard visuals in first 2 viewports

6. **`npm run build`** → pass.

7. **Commit on `feat/lux-growth-engine`**:
   ```
   feat(P4): homepage ThreeFrentesSpotlight section

   Adds the "Un motor, 3 frentes" flagship spotlight between
   ResultsTicker and ServicesPreview on the homepage. Cards for
   Voice Agent / Business Brain / Posicionamiento GEO, equal
   visual weight, full-card links to each service page.

   Per PRD (docs/prd-homepage-rebuild.md):
   - New component: src/components/ThreeFrentesSpotlight.tsx
   - page.tsx insertion at position 4 (not 6 — DashboardTeaser
     stays after Process because mobile Hero already IS a
     dashboard; moving would quadruple metrics visuals in mobile
     first 2 viewports)
   - ItemList JSON-LD bonus for GEO citations
   - Respects existing motion vocabulary (fade+slide+stagger)
   - Stale-reference sweep on Testimonials/FAQ/ClientLogos
     confirmed clean

   No existing homepage sections cut — research (CXL + 8 top B2B
   agency homepages) confirmed social proof density outperforms
   minimalism for service businesses in this price band.
   ```

8. Push to origin.

Do NOT touch: Hero, MobileHeroDashboard, any existing homepage section's internals. Navbar (owned by P3).

---

## 7. Verification checklist

**Build-level:**
- [ ] `npm run build` passes
- [ ] `src/components/ThreeFrentesSpotlight.tsx` exists
- [ ] `page.tsx` imports and renders it at position 4
- [ ] `DashboardTeaser` still at its original position (not moved up)

**Desktop Playwright (1440×900):**
- [ ] Homepage scroll order matches spec (13 visible sections)
- [ ] ThreeFrentesSpotlight renders with eyebrow / H2 "Un motor, 3 frentes" / subtitle / 3 cards / closing bridge line
- [ ] All 3 cards link to correct service pages; hover state shows gold accent
- [ ] Framer entrance cascade plays (first load)
- [ ] ItemList JSON-LD present in page source (verify via `curl -s | grep ItemList` or View Source)

**Mobile Playwright (390×844):**
- [ ] Hero renders `MobileHeroDashboard` (existing behavior)
- [ ] Below Hero: ClientLogos → ResultsTicker → **3 cards stacked 1-up** → ServicesPreview → Process → DashboardTeaser → ...
- [ ] No horizontal scroll
- [ ] No visual redundancy between MobileHeroDashboard and DashboardTeaser (verified by them being separated by multiple sections)
- [ ] Tap targets on cards ≥44px
- [ ] Section spacing doesn't break rhythm (check alternating dark/card-bg backgrounds hold)

**Lighthouse:**
- [ ] Homepage Accessibility ≥95, Best Practices ≥95, SEO ≥95 (no regression vs baseline)
- [ ] Mobile Performance ≥70 on 3G emulation (existing baseline per docs)

**Stale-reference sweep:**
- [ ] No "/servicios/chatbots-ia" or "/servicios/automatizacion-ia" URLs in src/
- [ ] Testimonials / ClientLogos / FAQ don't use old "agencia de marketing" / "departamento externo" framing (client quotes OK verbatim; agency-owned copy must be LGE-aligned)

**AI-assisted Spanish editorial pass:**
- [ ] Closing bridge line reads naturally: "Y 11 servicios más integrados — desde Meta Ads y SEO hasta producción de video."
- [ ] Card value props pass voseo CR check — Claude confirms no regionalism issues

---

## 8. Agent assignments

| Role | Owner | Deliverable |
|---|---|---|
| COPY | `general-purpose` subagent (optional — PRD ships ready copy; only dispatch for refinement) | Word-level edits on the 3 card value props + subtitle + closing bridge line |
| DESIGN | `general-purpose` subagent + `frontend-design` skill + Chrome DevTools MCP | Screenshot 11x.ai + Relevance AI spotlight sections, write final Tailwind class recommendations for card layout, icon size, aurora glow intensity |
| CODE | `general-purpose` subagent | §6 implementation tasks |
| REVIEW | `superpowers:code-reviewer` subagent | Diff vs PRD + CLAUDE.md. Flags: card link mismatches, DashboardTeaser accidentally moved, homepage section cut, animation overshooting `prefers-reduced-motion` |

**Serial dependency:** P4 must land AFTER P3 (navbar mega-menu). P4's "3 frentes" cards link to the same services that the mega-menu surfaces — testing them together catches IA disconnects (e.g., if mega-menu says "Business Brain" and homepage says "Business AI Brain", that's drift).

---

## 9. Open questions

All resolved through audits (P1 + P2 + P3 + this PRD's intake):
- ✅ Keep all existing sections (data-backed, CXL + 8 top agencies)
- ✅ Don't move DashboardTeaser (dual-Hero / mobile redundancy risk)
- ✅ Equal card weight for 3 frentes
- ✅ Card reading order: **BB → Voice Agent → GEO** (F-pattern attention optimization; umbrella lead → concrete hook center → aspirational close)
- ✅ Icons: 🧠 / ☎️ / ✨ (existing BB / P1 / P2)
- ✅ `ItemList` JSON-LD: yes, worth the extra bytes for GEO citations
- ✅ Closing bridge line: *"Meta Ads, SEO, video, web — lo demás del motor, abajo. ↓"* (no fragile count)
- ✅ Mobile animation: opacity-only fade (not disabled) — removes dead-wall feel
- ✅ Stale-reference sweep broadened to `src/components/ src/app/` with extended patterns
- ✅ ServicesPreview header copy inspection added to implementation tasks
- ✅ ServicesPreview featured slugs rotation: DEFERRED out of P4 scope

**Nothing open that would block CODE.**

---

## 10. Links

- Plan: `~/.claude/plans/we-haven-t-checked-the-linear-pond.md`
- Positioning rules: `/Users/gabrielmena/dev/luxmedia/website/CLAUDE.md`
- Current homepage composition: `src/app/page.tsx`
- Dual-Hero memory: `~/.claude/projects/-Users-gabrielmena-dev-luxmedia-website/memory/project_dual_hero_pattern.md`
- Existing design tokens + utilities: `src/app/globals.css` (aurora, glass-card, gold-glow)
- Existing Framer motion vocabulary reference: any homepage section component (ServicesPreview, Portfolio, Process)
- Sibling PRDs: P1 (voice-agent), P2 (posicionamiento-geo), P3 (navbar mega-menu)
- Mobile Hero pattern (do NOT break): `src/components/Hero.tsx` desktop/mobile split at line 17, MobileHeroDashboard integration at line 84
