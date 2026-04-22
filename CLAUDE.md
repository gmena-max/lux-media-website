# CLAUDE.md — Lux Media Website

Project-specific context for the Lux Media marketing website.

## v2 Positioning — Durable Decisions (April 2026)

Active repositioning to **Lux Growth Engine** brand with **Business Brain** as the productized AI offering. These four rules are load-bearing across all copy, service pages, and marketing assets — do not override without Gabriel's explicit approval.

1. **Product name lock — Business Brain.** The productized AI system is branded **"Business Brain."** Never "Claude Brain," "AI Brain," "Cerebro de Operaciones," or "cerebro-operaciones." URL slug is `/servicios/business-brain`. **Scope:** Business Brain is the *umbrella* AI offering — it covers WhatsApp + Instagram DM + Facebook Messenger qualifiers, embedded CRM, lead nurture + follow-up + campaigns, knowledge-base over client docs, calendar booking, internal-employee queries, and process automations. Deprecated separate services `/servicios/chatbots-ia` and `/servicios/automatizacion-ia` redirect permanently to `/servicios/business-brain`.

2. **No public pricing, no qualification gates.** Every service page drives to a discovery booking — no fixed tiers, no ranges, no "desde $X," no "Ideal para…" filters. Gabriel's explicit call: broad-market inbound, qualify on the discovery call. Trade-off accepted: more discovery calls (some wrong-fit) in exchange for wider top-of-funnel.

3. **No simulated demos.** Service pages carry themselves with strong copy + real interface screenshots + booking CTA. No mock dashboards, no canned conversation UIs, no "Casos de éxito próximamente" badges. If prospects ask to see something live on a sales call, Gabriel figures it out then.

4. **Spanish editorial gate.** Every copy sub-PR goes through an AI-assisted Spanish polish pass (Claude reviews for regionalisms, calques, awkward phrasing, tone), then Gabriel approves before merge. Not self-skim, not external editor — structured AI pass with human sign-off.

Named system across site: **Lux Growth Engine** replaces "agencia de marketing" / "departamento externo" / "departamento de marketing" framing.

Plan and segment breakdown: `~/.claude/plans/we-haven-t-checked-the-linear-pond.md`.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **React:** 19
- **Styling:** Tailwind CSS 4
- **Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Geist (body), Plus Jakarta Sans (display headings)

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint check
```

## Design Tokens

```css
--background: #0a0a0a      /* Deep black (matches hero/footer) */
--foreground: #ededed      /* Light text */
--accent: #F5B51A          /* Gold/yellow - primary brand color */
--accent-light: #FFD54F    /* Lighter gold for gradients */
--accent-muted: #D4A843    /* Muted gold for subtle accents */
--card-bg: #111111         /* Subtle lift for glass cards */
--card-border: #333333     /* Borders */
```

### Glass Utilities (globals.css)
- `.glass-card` — glassmorphism card with blur
- `.glass-card-hover` — adds gold border/glow on hover
- `.gold-glow` — text shadow for numbers
- `.gold-glow-subtle` — subtle text shadow for eyebrows
- `.aurora-bg` — fixed ambient gold orbs background

## Brand Guidelines

- **Primary color:** Gold (#F5B51A) on dark backgrounds
- **Logo:** Stylized "L" with parallel diagonal lines
- **Tone:** Professional but approachable, premium feel
- **Language:** Spanish (Costa Rica)

## Skills to Use

Before making design changes, read these skills at `~/dev/.claude/skills/`:

- **frontend-design** — Visual hierarchy, avoiding "AI slop", animations
- **shadcn-tailwind** — Component patterns, theming
- **react-mastery** — React best practices

Key patterns from skills:
- Use CSS variables for colors (not hardcoded)
- Add hover states and transitions to interactive elements
- Use `font-display` class for headings (Plus Jakarta Sans)
- Add decorative blurs for visual interest
- Stagger animations for lists

## Component Patterns

### Section Structure
```tsx
<section className="py-24 bg-[var(--card-bg)] relative overflow-hidden">
  {/* Optional: Decorative blur */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl" />

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    {/* Eyebrow text */}
    <span className="text-[var(--accent)] text-sm font-medium uppercase tracking-widest">
      Section Label
    </span>
    {/* Heading with gradient */}
    <h2 className="text-3xl md:text-5xl font-bold mt-4">
      Title <span className="gradient-text">Highlight</span>
    </h2>
  </div>
</section>
```

### Animation Pattern
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.1 }}
>
```

### Card with Hover
```tsx
<div className="p-6 rounded-2xl bg-[var(--background)] border border-[var(--card-border)] hover:border-[var(--accent)]/50 transition-all duration-300 group">
  {/* Glow on hover */}
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
</div>
```

## File Structure

```
src/
├── app/
│   ├── globals.css      # CSS variables, animations
│   ├── layout.tsx       # Metadata, fonts
│   └── page.tsx         # Main page composition
├── components/
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── SwipeableServices.tsx
│   ├── Portfolio.tsx
│   ├── Process.tsx
│   ├── CtaBanner.tsx
│   ├── Stats.tsx
│   ├── About.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── WhatsAppButton.tsx
│   ├── ClientLogos.tsx
│   └── ScrollProgress.tsx
├── constants/
│   └── contact.ts       # WhatsApp number, links
└── lib/
    └── utils.ts         # cn() utility
```

## Git & Deployment

- **GitHub:** https://github.com/gmena-max/lux-media-website
- **Vercel:** Auto-deploys on push to main
- **Live URL:** https://luxmediacr.com
- Each **commit** is a save point — can revert if changes aren't liked
- `git push` → GitHub → Vercel auto-deploy → live
- To undo: "go back to commit [hash]"

Note: Original repo (Juuice10/Lux-media-website) exists but isn't connected. Gabriel owns current setup.

## Images

- **Service backgrounds:** `/public/bg-service-*.jpg` (optimized, ~200KB each)
- **Portfolio:** `/public/portfolio/*.jpg` (6 project images)
- **Logos:** `/public/logos/` (client logos for marquee, naming: `[brand]-white.png` / `[brand]-dark.png`, or just `[brand].ext` if only one version)
- **OG Image:** `/public/og-image.png` (1200x630, for social sharing previews)

## Rules (Learned)

- Portfolio images should be horizontal (4:3 ratio) — vertical gets cropped
- OG image is NOT displayed on website — it's for link previews on WhatsApp/social
- Optimize images before adding (use sips: `sips -s format jpeg -s formatOptions 80 -Z 1200 input.png --out output.jpg`)
- WhatsApp number: 50671911587 (single canonical — see `src/constants/contact.ts`)
- Always test with `npm run build` before pushing

## Current Status (April 2026)

**Live:**
- Full landing page + glassmorphism/gold aurora design system
- Portfolio with real projects, OG image, scroll progress, client logos marquee
- Deployed to Vercel (luxmediacr.com); domain via GoDaddy DNS
- Google Analytics GA4 (G-XKSDRLY742)
- EmailJS contact form (service_fne0p1e / template_ekh8oaa)
- Spanish copy across all sections, footer tagline current

**In progress — v2 repositioning (Lux Growth Engine + Business Brain):**
See plan at `~/.claude/plans/we-haven-t-checked-the-linear-pond.md`. Active segments:
- PR 1: David Montero + bio rebalance (direct to main)
- Branch `feat/lux-growth-engine`: positioning copy + 4 new service pages + navbar update + motion polish + GEO content engine
