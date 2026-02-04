# CLAUDE.md — Lux Media Website

Project-specific context for the Lux Media marketing website.

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
--background: #1a1a1a      /* Dark background */
--foreground: #ededed      /* Light text */
--accent: #F5B51A          /* Gold/yellow - primary brand color */
--accent-light: #FFD54F    /* Lighter gold for gradients */
--card-bg: #242424         /* Card backgrounds */
--card-border: #333333     /* Borders */
```

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

## Git Workflow

- Each **commit** is a save point — can revert if changes aren't liked
- **Push** uploads to GitHub: https://github.com/Juuice10/Lux-media-website
- Commit related changes together with descriptive messages
- To undo: "go back to commit [hash]"

## Images

- **Service backgrounds:** `/public/bg-service-*.jpg` (optimized, ~200KB each)
- **Portfolio:** `/public/portfolio/*.jpg` (6 project images)
- **Logos:** `/public/logos/` (client logos for marquee)
- **OG Image:** `/public/og-image.png` (1200x630, for social sharing previews)

## Rules (Learned)

- Portfolio images should be horizontal (4:3 ratio) — vertical gets cropped
- OG image is NOT displayed on website — it's for link previews on WhatsApp/social
- Optimize images before adding (use sips: `sips -s format jpeg -s formatOptions 80 -Z 1200 input.png --out output.jpg`)
- WhatsApp number: 50686555888
- Always test with `npm run build` before pushing

## Current Status

**Completed:**
- Full landing page with all sections
- Image optimization (93% reduction)
- Portfolio with real project images
- OG image for social sharing
- Scroll progress indicator
- Client logos marquee

**Pending:**
- Deploy to Vercel
- Add Google Analytics
- Set up EmailJS for contact form
- Add real testimonials with photos
