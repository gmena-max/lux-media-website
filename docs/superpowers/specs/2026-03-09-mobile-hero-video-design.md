# Mobile Hero Video — Live Dashboard Design

**Date:** 2026-03-09
**Status:** Approved
**Project:** ~/dev/luxmedia/remotion-hero/
**Output:** 1080×1920 @ 30fps, 25.5s (765 frames), VP9 + H.264

## Problem

The desktop hero video (Meta Ads dashboards, WhatsApp chat, methodology cycle, tagline) has embedded text/UI that fights with the HTML headline overlay on mobile. Double text = unreadable. Poster-only was deployed as a stopgap, but a purpose-built mobile video is the upgrade.

## Direction: Live Dashboard

5 stacked content bands filling the full 1080×1920 portrait canvas. No dead space. Every zone has visual content. Text overlay occupies bottom ~25% with gradient fade.

## Layout (top to bottom)

### Band 1: Metric Ticker (top 5-8%)
- Horizontal scrolling gold text: "ROAS 4.2x | Leads +312% | CTR 3.8% | CPC -23% | Revenue +$18K | Engagement +47%"
- Thin gold border lines top/bottom
- Continuous left scroll, seamless loop

### Band 2: Progress Rings (8-32%)
- 3 large circular SVG rings side by side
- Ring 1: Green, fills to 85%, label "META ADS"
- Ring 2: Gold, fills to 92%, value "4.2x", label "ROAS"
- Ring 3: Blue, fills to 73%, label "SEO"
- Fill animation: stroke-dashoffset from 0 to target, ease-out, ~1.5s each, staggered 0.3s
- Values fade in after rings fill
- Glowing drop-shadow on each ring in its color

### Band 3: Mini Area Chart (35-57%)
- Dark glass card with subtle gold border
- Header: "LEADS ESTE MES" (left) + "312" in green + "+24% vs anterior" (right)
- Green area chart drawing left-to-right (stroke-dasharray animation)
- Gradient fill below line (green to transparent)
- 3-4 node dots that pulse as line passes through
- Peak dot at end with persistent glow pulse

### Band 4: Stat Cards Strip (60-70%)
- 4 mini cards in a row, equal width
- Card 1: "$2.1" (gold), "▲ 31%", "COST/LEAD"
- Card 2: "156" (green), "▲ 33%", "VENTAS"
- Card 3: "#1" (white), "★", "GOOGLE"
- Card 4: "+47%" (green), "▲", "ENGAGEMENT"
- Spring pop-in animation, staggered 0.2s

### Band 5: Platform Icons (72-78%)
- 7 platform icons in a row, circular backgrounds
- Facebook (#1877F2), Instagram (#E4405F), TikTok (#fff on dark), Google (multicolor), YouTube (#FF0000), LinkedIn (#0A66C2), WhatsApp (#25D366)
- Sequential pulse animation (scale 1→1.15→1, staggered 0.15s)

### Band 6: Text Overlay Zone (75-100%)
- This is the HTML overlay on the website, NOT part of the Remotion video
- The video's bottom 25% should be dark/empty to work with the gradient overlay
- In the Remotion composition, fade elements to black in this zone

## Connecting Elements

- Data flow lines: 1px horizontal lines at ~33%, ~58%, ~72% with small gold dots traveling left-to-right
- These create visual connection between the bands

## Animation Timeline (765 frames @ 30fps)

| Frames | What happens |
|--------|-------------|
| 0-10 | Ticker starts scrolling |
| 10-60 | Ring 1 fills (green) |
| 25-75 | Ring 2 fills (gold) |
| 40-90 | Ring 3 fills (blue) |
| 60-90 | Ring values fade in |
| 80-180 | Area chart line draws left to right |
| 120-150 | Chart node dots appear sequentially |
| 150-180 | "312" value + "+24%" fade in |
| 160-220 | Stat cards pop in (staggered) |
| 200-250 | Platform icons pop + begin pulse cycle |
| 250-700 | Everything holds, ticker scrolls, icons pulse, data dots flow |
| 700-765 | Gentle fade-out for seamless loop reset |

## Design Tokens

- Gold: #D4A843 (primary accent)
- Green: #22c55e (positive metrics)
- Blue: #3b82f6 (SEO ring)
- Background: #0a0a0a
- Card bg: rgba(17,17,17,0.7)
- Card border: rgba(212,168,67,0.1)
- Text primary: rgba(255,255,255,0.85)
- Text muted: rgba(255,255,255,0.3)

## Files to Create/Modify

- `src/scenes/SceneDashboardMobile.tsx` — new single-scene composition (replaces 4-scene mobile approach)
- `src/components/ProgressRing.tsx` — reusable animated ring
- `src/components/MetricTicker.tsx` — scrolling ticker
- `src/components/MiniChart.tsx` — area chart with draw animation
- `src/components/StatCard.tsx` — animated stat card
- `src/components/PlatformIcons.tsx` — icon row with pulse
- `src/HeroVideoMobile.tsx` — update to use single scene
- `src/Root.tsx` — may need composition update

## Mockup Reference

Visual companion mockups saved at:
`.superpowers/brainstorm/93072-1773100741/live-dashboard-v2.html`
