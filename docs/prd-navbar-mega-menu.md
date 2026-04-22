# PRD P3 — Navbar mega-menu rebuild

**Owner:** CODE agent (after COPY + DESIGN + Gabriel approve)
**Branch:** `feat/lux-growth-engine`
**Plan reference:** `~/.claude/plans/we-haven-t-checked-the-linear-pond.md` — Segment 2, Phase D3 (serial; must land before D4 homepage rebuild)

---

## 1. Context & goals

Current navbar is flat: Inicio / Servicios / Portafolio / Nosotros / Blog / Contacto — "Servicios" links to `/servicios` index page. Discoverability for flagship services (Business Brain, Voice Agent, Posicionamiento GEO, Dashboards) depends entirely on that index page.

Locked decision: rebuild "Servicios" as a **3-column mega-menu** that opens on hover (desktop) / tap (mobile), with Spanish column headers **Crecimiento / Contenido / Tecnología**. Every service gets a card with emoji icon + short description pulled from `services.ts`.

**Goals:**
- Flagship services surface from any page in the site (not buried in /servicios)
- Matches the "Lux Growth Engine" positioning — integrated motor, not a list
- Mobile experience uses stacked accordion (Gabriel's locked decision)
- Z-index / overlap-safe — must NOT re-introduce the breadcrumb-overlap class of bug

**Success signal:** prospect lands on any page, hovers "Servicios", sees Business Brain / Voice Agent / Posicionamiento GEO within 1 second without scrolling.

---

## 2. Out of scope

- Full visual Navbar redesign (Segment 3 motion overhaul handles that)
- Dropdowns for Portafolio / Nosotros / Blog / Contacto — those stay as flat top-level links
- Changes to the "Consulta gratis" gold CTA button — stays where it is, same WhatsApp deep link
- Changes to the mobile hamburger icon or drawer visual style — drawer pattern stays, only "Servicios" behavior changes inside the drawer
- Featured-service highlighting (no gold border, no "Destacado" star) — all services render equal weight inside their column
- Search box in the mega-menu
- Recently-viewed or personalized sections
- Analytics tracking per-service click (can add later — out of scope here)
- Copy rewrites to `shortDescription` strings in `services.ts` (use existing copy as-is)

---

## 3. Copy spec

**Column headers (Spanish):**
- `Crecimiento` — mapped to `category: "growth"` services
- `Contenido` — mapped to `category: "content"` services
- `Tecnología` — mapped to `category: "technology"` services

**Service cards** use existing data from `src/data/services.ts`:
- Title: `service.title`
- Icon: `service.icon` (emoji)
- Description: `service.shortDescription` (first ~15–20 words — the existing one-liner, don't truncate)

**Footer link** below the 3 columns: `Ver todos los servicios →` — routes to `/servicios`

**Mobile accordion labels:**
- Each category header renders the Spanish label from above
- Tapping a header toggles expand/collapse with a caret ▾/▸ indicator

**No additional copy work for COPY agent** — everything pulls from existing `services.ts`. COPY agent is SKIPPED for P3.

---

## 4. Design spec

### Desktop — mega-menu panel

**Trigger behavior:**
- Primary: hover over "Servicios" → panel opens after 150ms delay (prevents accidental-hover flicker)
- Secondary: click/tap → panel toggles
- Close: mouse leaves panel area (300ms delay), click outside, Escape key, or route change

**Panel geometry:**
- Position: `absolute top-full`, top-aligned to navbar bottom so panel tracks the navbar's own height change (navbar is `py-4 md:py-5` unscrolled → `py-3` scrolled; panel must follow)
- Width: `max-w-7xl` matching the navbar inner container
- Horizontal alignment: centered under the navbar; NOT full-viewport-width (avoids awkward edges on 1920px+ monitors)
- Height: auto (fits content); overflow-y auto if viewport too short (edge case)

**Visual language (reuse existing design tokens):**
- Background: glass effect — same `glass` utility used by the scrolled navbar
- Border radius: `rounded-2xl` matching existing card components
- Border: 1px `border-[var(--card-border)]`
- Shadow: subtle `shadow-2xl` + 1px gold-tinted inner glow (matches site's aurora / gold aesthetic)
- Padding: `p-8 md:p-10`

**3-column grid:**
- `grid grid-cols-3 gap-8` (desktop)
- Each column has:
  - Column header: `Crecimiento` / `Contenido` / `Tecnología` — gold uppercase tracking-widest text (`.gold-glow-subtle`)
  - Divider: 1px gold-tinted line below header
  - Service cards: stacked vertically with `space-y-3`

**Service card:**
- Layout: icon (emoji, size ~24px) + text block (title + shortDescription)
- Hover state: subtle background tint (`bg-[var(--accent)]/5`) + gold left border (`border-l-2 border-[var(--accent)]`) + slight scale 1.01
- Title: `font-semibold text-white`
- Description: `text-sm text-gray-400 leading-relaxed line-clamp-2` — existing `shortDescription` strings run 15–20 words; in a 3-column grid at 1280px viewport that wraps to 4+ lines and breaks rhythm. `line-clamp-2` caps at 2 lines with ellipsis on any longer string.
- Full card is clickable — links to `/servicios/{slug}`
- Cursor: pointer

**Footer link:**
- Below the 3-column grid, centered or right-aligned
- Text: `Ver todos los servicios` + gold arrow →
- Style: matches existing subtle link pattern in the site

**Animation:**
- Entry: Framer Motion `AnimatePresence` + `motion.div` with `initial={{ opacity: 0, y: -8 }}`, `animate={{ opacity: 1, y: 0 }}`, `exit={{ opacity: 0, y: -4 }}`, `transition={{ duration: 0.2, ease: "easeOut" }}`
- Matches existing navbar motion vocabulary (no new easing curves)
- Respects `prefers-reduced-motion` — instant show/hide if user preference set

### Mobile — flat list with sticky category headers (2-level)

**Trigger:** tap "Servicios" inside the mobile drawer → reveal all 11 services inline, grouped under 3 **non-interactive sticky headers** (no second tap to expand categories).

**Structure:**
- Tap hamburger → drawer opens (existing pattern)
- Tap "Servicios" → reveals all services grouped visually, no further taps needed:
  ```
  Inicio
  Servicios ▾
    ━━ CRECIMIENTO ━━
    🎯 Meta Ads
    🎯 Google Ads
    📈 SEO
    ✨ Posicionamiento GEO
    🤝 CRM y Ventas
    ━━ CONTENIDO ━━
    📱 Redes Sociales
    🎬 Video & Reels
    🎨 Branding
    🎪 Eventos
    ━━ TECNOLOGÍA ━━
    🧠 Business Brain
    ☎️ Voice Agent
    📊 Dashboards
    💻 Desarrollo Web
    → Ver todos los servicios
  Portafolio
  Nosotros
  ...
  ```
- Second tap on "Servicios" (parent) collapses everything back to the drawer's flat list
- Closing the drawer (hamburger X) collapses all state

**Visual language:**
- Section headers (CRECIMIENTO / CONTENIDO / TECNOLOGÍA): non-interactive, gold uppercase tracking-widest, with subtle 1px divider lines on either side (like a horizontal rule with text inline). Matches the desktop mega-menu column header typography.
- Service card on mobile: icon + title on one line; description on next line; full card tappable.
- Tap target ≥ 44px on every service row.
- Card divider: 1px `border-t border-[var(--card-border)]/50`.
- NO hover states (touch-primary).
- NO expand/collapse caret on category headers (they're not interactive — just visual grouping).

**Why flat over 3-level accordion:** category labels (Crecimiento / Contenido / Tecnología) are abstract to a CR SME looking for a specific service like "Business Brain" or "Meta Ads". The flat-with-headers pattern shows service names directly, so the prospect's target is visible without an additional tap. Same information hierarchy, half the taps to leaf.

**Animation:**
- When "Servicios" expands: single smooth height transition using Framer Motion `AnimatePresence` matching existing mobile drawer pattern (lines 172–231 in current Navbar.tsx).
- Duration 200ms.
- No nested animations (everything reveals in one motion).

### Accessibility

- Trigger `<button>` (not `<a>`) on desktop since it's a toggle. Attributes:
  - `aria-expanded={isOpen}`
  - `aria-haspopup="true"`
  - `aria-controls="mega-menu-panel"` (must match the panel's `id`)
- Panel container: `id="mega-menu-panel"`, `role="region"`, `aria-label="Menú de servicios"` (Spanish label). Strict `role="menu"` is rejected — it requires arrow-key navigation + `role="menuitem"` on every link and breaks standard Tab semantics.
- **Enter on the "Servicios" trigger TOGGLES the panel** (standard aria-haspopup behavior). It does NOT navigate to `/servicios`. Users who want the index page find it via the "Ver todos los servicios →" link inside the panel — this is the first focusable element after open, so Tab lands there first.
- Service cards are `<Link>` (standard anchor); Tab navigates through them linearly after the "Ver todos los servicios →" first link.
- **No focus trap.** Standard WAI-ARIA APG "disclosure" pattern — tabbing out of the last focusable element closes the panel naturally. A focus trap would over-engineer this + create a escape-hatch problem for keyboard users.
- Keyboard:
  - `Enter` / `Space` on "Servicios" trigger → toggle panel
  - `Tab` from trigger → lands on "Ver todos los servicios →" → then through all service cards top-down, left-to-right
  - `Shift+Tab` reverses
  - `Escape` closes panel + returns focus to "Servicios" trigger
  - No custom arrow-key navigation (Tab is enough; arrow-keys multiply test surface)
- Focus ring: visible on keyboard-focused elements (use `focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50 focus-visible:ring-offset-0`)
- Touch devices fire both `touchstart` and `click`; implementation must guard against double-toggle (use `onClick` only, not both).

### Z-index / overlap safety (critical — prevents re-regression)

Current navbar recently fixed the breadcrumb overlap by shrinking logo (h-36 → h-24). When the mega-menu opens and extends below the navbar, its layer must:
- Use `z-50` (same as fixed navbar) OR `z-40` and be rendered as a child of the navbar `<nav>` element so it inherits stacking context
- Verify via Playwright after build: hit-test a link that sits ~200–300px below the navbar while the mega-menu is open; the link should STILL be unreachable (expected — mega-menu IS blocking it intentionally when open)
- Verify mega-menu CLOSED state leaves `<main>` content at y=160+ fully clickable (breadcrumb fix stays intact)

---

## 5. UX spec

- Desktop breakpoint: 768px (`md:` in Tailwind)
- Mobile breakpoint: < 768px
- Mouse delay on hover-open: 150ms (prevents accidental flicker when mousing past "Servicios" toward other nav items)
- Mouse delay on hover-close (leaving panel): 300ms (gives user time to move from trigger down to panel content)
- Tap interaction on desktop (e.g., touch-enabled laptop): also toggles panel (don't rely on hover alone)
- Panel MUST close on `pathname` change (same pattern as existing mobile drawer in Navbar.tsx line 38–40). Prevents stuck-open state after navigation.
- Scroll behavior: if user scrolls the page while panel is open, panel closes. Matches "Slack app" mental model.

---

## 6. Implementation tasks — split into Task A + Task B (serial dispatch)

The CODE agent dispatch is split to reduce blast radius: Task A is mechanical data migration (15 min, low risk, safe if Task B later needs revision). Task B is the actual mega-menu build.

### Task A — Spanish category label migration (dispatch FIRST)

1. Open `src/data/services.ts` and update:
   ```ts
   export const CATEGORY_LABELS: Record<ServiceCategory, string> = {
     growth: "Crecimiento",
     content: "Contenido",
     technology: "Tecnología",
   };
   ```

2. Update the `categoryLabel` field on every existing service entry (11 entries total) from English to Spanish. Map:
   - `categoryLabel: "Growth"` → `categoryLabel: "Crecimiento"`
   - `categoryLabel: "Content"` → `categoryLabel: "Contenido"`
   - `categoryLabel: "Technology"` → `categoryLabel: "Tecnología"`

3. **Sync sibling PRDs** — the voice-agent and posicionamiento-geo PRDs currently specify English `categoryLabel`. Update:
   - `docs/prd-voice-agent-page.md`: change `categoryLabel: "Technology"` → `categoryLabel: "Tecnología"` in the code block under §3
   - `docs/prd-posicionamiento-geo-page.md`: change `categoryLabel: "Growth"` → `categoryLabel: "Crecimiento"` in the code block under §3

4. Verify render impact:
   - `src/components/ServicesGrid.tsx` uses `CATEGORY_LABELS` as section eyebrow — now Spanish.
   - `src/components/ServicePageContent.tsx` renders `service.categoryLabel` as a visible pill on each service detail page — now Spanish across all 11.
   - Grep for literal "Growth" / "Content" / "Technology" in `src/`; flag anything that needs updating (there should be none after the above).

5. `npm run build` → pass

6. Commit:
   ```
   chore(P3-A): migrate CATEGORY_LABELS English → Spanish

   Mega-menu rebuild needs Spanish column labels
   (Crecimiento / Contenido / Tecnología). CATEGORY_LABELS
   constant + categoryLabel field on every service updated.
   Sibling PRDs (voice-agent, posicionamiento-geo) synced.

   Site-wide visible change: category pill on service detail
   pages + category eyebrow on /servicios grid now in Spanish.
   ```

7. Push.

### Task B — Mega-menu build (dispatch AFTER Task A lands)

1. **Create** `src/components/MegaMenuPanel.tsx`:
   - Props: `{ isOpen: boolean; onClose: () => void }`
   - Reads `services` + `CATEGORY_LABELS` from `@/data/services`
   - Groups services by category into 3 arrays
   - Renders:
     - Desktop (md+): 3-column grid with Framer Motion entrance, service cards with `line-clamp-2` on description
     - Mobile (<md): NOT rendered here — mobile logic lives in Navbar's drawer (see task 3 below). `MegaMenuPanel` is desktop-only.
   - Accepts a ref for click-outside detection
   - Container: `id="mega-menu-panel"`, `role="region"`, `aria-label="Menú de servicios"`
   - First focusable element is "Ver todos los servicios →" link
   - Position: `absolute top-full left-0 right-0` inside a wrapper that's `max-w-7xl mx-auto`

2. **Update `src/components/Navbar.tsx` — desktop path**:
   - Add state: `const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)`
   - Replace the flat "Servicios" desktop link with a `<button>` (not `<a>`) that toggles `isMegaMenuOpen`. Do NOT navigate on Enter — Enter TOGGLES per a11y spec.
   - Add hover intent timers via `setTimeout` refs (cancel on re-enter, 150ms delay on open, 300ms delay on close).
   - Render `<MegaMenuPanel isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />` inside the `<nav>` element (so panel inherits the nav's z-50 stacking context — do NOT use a Portal).
   - Auto-close on `pathname` change (extend existing useEffect at line 38–40 to include `setIsMegaMenuOpen(false)`).
   - Auto-close on scroll (listen to `scroll` event while panel is open).
   - Escape-key close: add a keydown listener while panel is open.
   - `onTouchStart` must NOT fire the same toggle as `onClick` (avoid double-fire on mobile-size viewports that still land on the desktop path).

3. **Update the mobile drawer section of `src/components/Navbar.tsx` — flat 2-level**:
   - When user taps "Servicios" inside the mobile drawer, toggle expand/collapse of a single inline block
   - That block renders all 11 services grouped under 3 non-interactive section headers (CRECIMIENTO / CONTENIDO / TECNOLOGÍA) — see Design §4 for the layout
   - Section headers are visual dividers only (no tap behavior, no carets)
   - Services within render as individual `<Link>` elements to `/servicios/{slug}`
   - Closing the drawer (hamburger X) resets the "Servicios" section to collapsed

4. **Accessibility wiring** on the desktop trigger button:
   - `aria-expanded={isMegaMenuOpen}`
   - `aria-haspopup="true"`
   - `aria-controls="mega-menu-panel"`
   - Escape keydown while panel is open → close + refocus trigger

5. **Update CLAUDE.md**:
   - Add a "Navbar patterns" section documenting: Servicios uses mega-menu on desktop (`MegaMenuPanel.tsx`) + flat-with-headers on mobile. Adding a new service requires no Navbar changes — the mega-menu reads from `services.ts`.

6. **Build check:** `npm run build` passes. Expected Navbar.tsx size after rebuild: 350–450 lines (vs current 235); `MegaMenuPanel.tsx` (~150–200 lines) is the split that keeps this manageable.

7. **Playwright hit-test** (see §7) — run before commit.

8. **Commit on `feat/lux-growth-engine`**:
   ```
   feat(P3-B): Navbar mega-menu + mobile flat-with-headers

   Replaces flat "Servicios" nav link with:
   - Desktop: 3-column mega-menu (Crecimiento / Contenido /
     Tecnología) via new MegaMenuPanel.tsx subcomponent
   - Mobile: flat service list with 3 non-interactive section
     headers (no nested accordion — prospects see service names
     directly)

   Per PRD (docs/prd-navbar-mega-menu.md):
   - Glass panel, Framer fade+slide motion, top-full positioning
   - Hover 150/300ms intent delays, auto-close on pathname/
     scroll/Escape/click-outside
   - role=region, aria-label="Menú de servicios", aria-controls
     matches id="mega-menu-panel", no focus trap
   - Enter on trigger toggles (not navigates) — "Ver todos los
     servicios →" is the first focusable link inside
   - line-clamp-2 on card descriptions
   - z-50 inherits from parent nav — does NOT re-introduce
     breadcrumb overlap class of bug
   ```

9. Push to origin.

Do NOT touch: `ServicePageContent.tsx`, routes, `page.tsx`, homepage components.

---

## 7. Verification checklist

Post-commit, run these checks (CODE agent + E1 Playwright agent collaborate):

**Build-level:**
- [ ] `npm run build` passes with no TS / lint errors
- [ ] `src/components/MegaMenuPanel.tsx` exists
- [ ] Navbar.tsx imports MegaMenuPanel
- [ ] CATEGORY_LABELS now Spanish; `categoryLabel` field in every service entry matches
- [ ] No stale hardcoded "Growth"/"Content"/"Technology" strings in components (grep)

**Desktop interactive (Playwright, 1440×900):**
- [ ] Hover over "Servicios" → mega-menu appears within ~200ms
- [ ] Mega-menu has exactly 3 columns with headers `Crecimiento` / `Contenido` / `Tecnología`
- [ ] Every service card links to correct `/servicios/{slug}`
- [ ] Service icons + descriptions render from `services.ts` (no hardcoded strings)
- [ ] Click-outside closes panel
- [ ] Escape key closes panel
- [ ] Route change (click any service card) closes panel + navigates
- [ ] "Ver todos los servicios →" link routes to `/servicios`
- [ ] **Z-index hit-test:** with mega-menu OPEN, confirm the content below the navbar that's *covered by the panel* is unclickable (expected — panel is the intended blocker). With mega-menu CLOSED, confirm breadcrumbs on service pages are still clickable (breadcrumb fix intact)
- [ ] Keyboard Tab navigation reaches every service card in order

**Mobile interactive (Playwright, 390×844):**
- [ ] Hamburger opens drawer
- [ ] Tap "Servicios" → all 11 services appear grouped under 3 non-interactive section headers (CRECIMIENTO / CONTENIDO / TECNOLOGÍA). No second tap needed.
- [ ] Service rows are individually tappable; navigation works
- [ ] Tap target heights ≥44px on every service row
- [ ] Section headers (CRECIMIENTO / CONTENIDO / TECNOLOGÍA) render as visual dividers — NOT tappable (no caret, no hover/tap effect)
- [ ] Second tap on "Servicios" collapses the service list back to just the nav items
- [ ] Closing drawer (tap X) resets "Servicios" to collapsed
- [ ] No horizontal scroll introduced anywhere

**A11y:**
- [ ] "Servicios" trigger has `aria-expanded` that toggles
- [ ] Focus ring visible when Tab-focused on any service card
- [ ] `prefers-reduced-motion` disables the Framer entrance animation

**Lighthouse:**
- [ ] Accessibility ≥95 on homepage
- [ ] Best Practices ≥95
- [ ] No regression vs `docs/baseline-pre-v2.md`

**AI-assisted Spanish editorial pass:**
- [ ] Confirm `Crecimiento` / `Contenido` / `Tecnología` as the final column labels (not `Growth` / `Content` / `Technology`)
- [ ] Confirm "Ver todos los servicios →" reads naturally
- [ ] Confirm existing service `shortDescription` strings still read cleanly when displayed in narrower mega-menu column width (may surface any overlong descriptions)

---

## 8. Agent assignments

| Role | Owner | Deliverable |
|---|---|---|
| COPY | **Skip** | No new strings; everything pulls from existing `services.ts` |
| DESIGN | `general-purpose` subagent + `frontend-design` skill + Chrome DevTools MCP | Reference 2–3 top agency mega-menus (Superside, NoGood, Dept), screenshot patterns, write the Tailwind class recommendations for the panel layout. Deliverable: a design notes doc or Tailwind class list inline in this PRD before CODE agent runs. |
| CODE | `general-purpose` subagent | Executes §6 implementation tasks |
| REVIEW | `superpowers:code-reviewer` subagent | Diff vs PRD — flags: z-index regression risk, `pathname` auto-close missing, English labels lingering, a11y attribute missing, hover-delay magic numbers not matching spec |

**Serial dependency:** P3 must land BEFORE P4 (homepage rebuild). P4's "Un motor, 3 frentes" section visually connects to the mega-menu — testing them together catches any IA conflict.

---

## 9. Open questions

All resolved in audit pass (2026-04-20):
- ✅ Spanish column headers (`Crecimiento` / `Contenido` / `Tecnología`)
- ✅ Mobile: **flat list with 3 non-interactive section headers** (swapped from nested accordion — auditor flagged 3-level UX too deep; CR SMEs scan for service names, not category labels)
- ✅ Icons from existing services.ts emoji data
- ✅ `shortDescription` used in full + `line-clamp-2` to prevent wrapping breakage in narrow column
- ✅ Hover + click desktop; hover intent delays 150ms open / 300ms close
- ✅ Container width `max-w-7xl`, position `absolute top-full` (tracks navbar height change)
- ✅ Framer fade+slide motion (match existing)
- ✅ Enter-key behavior: TOGGLES (not navigates); "Ver todos los servicios →" is first focusable link
- ✅ A11y: `id="mega-menu-panel"`, `role="region"`, `aria-label="Menú de servicios"`, no focus trap (WAI-ARIA disclosure pattern)
- ✅ CODE scope split: Task A (CATEGORY_LABELS migration + sibling PRD sync) → Task B (mega-menu build)

**Flagged for DESIGN agent (non-blocking — CODE can start with placeholder classes):**
- Exact column-divider treatment (gold hairline vs subtle gray) — pick based on reference patterns
- Hover card state — border-left (spec default) vs full card background tint. DESIGN picks after seeing reference extractions.
- Footer "Ver todos" placement — centered vs right-aligned — minor detail.

---

## 10. Links

- Plan: `~/.claude/plans/we-haven-t-checked-the-linear-pond.md`
- Current navbar: `src/components/Navbar.tsx` (235 lines)
- Services data: `src/data/services.ts` (already has `category`, `icon`, `shortDescription` on every entry)
- Glass utility: `.glass` class in `src/app/globals.css`
- Mobile drawer pattern to extend: `Navbar.tsx:172-231` (existing `AnimatePresence` accordion)
- Breadcrumb overlap fix context: `src/app/servicios/[slug]/page.tsx` + `Breadcrumbs.tsx` + recent logo shrink (h-36 → h-24). New mega-menu must not re-introduce this class of bug.
