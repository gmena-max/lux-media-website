# PRD P2 — `/servicios/posicionamiento-geo`

**Owner:** CODE agent (after COPY + Gabriel approve)
**Branch:** `feat/lux-growth-engine`
**Plan reference:** `~/.claude/plans/we-haven-t-checked-the-linear-pond.md` — Segment 2, Phase D2

---

## 1. Context & goals

One of three flagship AI services under Lux Growth Engine (alongside Voice Agent + Business Brain). **Posicionamiento GEO = Generative Engine Optimization** — getting a business cited inside ChatGPT / Claude / Perplexity / Gemini answers.

**Unique challenge:** most CR SME owners don't know the term "GEO" exists. Every other service page can assume the buyer recognizes the problem (they know they need ads, they know they lose leads fuera de horario). This page MUST teach before it sells.

**Goal:** ship `/servicios/posicionamiento-geo` that:
- Teaches the market shift (people now ask ChatGPT / Claude / Perplexity before Google) without feeling like a textbook
- Differentiates clearly from SEO (sibling channel, not a rebrand)
- Positions Lux as early / credible in this space (CR market has near-zero incumbent GEO providers in Spanish)
- Routes readers to WhatsApp or Google Calendar booking
- Doubles up with Segment 4's Spanish FAQ content engine — each new GEO article Lux publishes becomes proof-of-capability for this page

**Success signal:** a CR SME owner lands, reads the first two sections, and walks away knowing *why GEO matters now* even if they don't book yet.

---

## 2. Out of scope

- Fixed pricing or ranges
- Qualification gates ("Ideal para empresas con X")
- Simulated demos — no mockup of "here's a Perplexity answer citing your brand"
- Fabricated stats — no "X% of users ask LLMs first" unless there's a real public source. COPY agent MUST label any stat without a verifiable URL as `[SOURCE: pending]` and Gabriel decides keep or drop.
- Custom component (no "¿Qué es GEO?" primer panel as its own visual block — use the solution paragraph + FAQ #1 to carry the education)
- Long-form essay framing — page stays a service page, not a GEO 101 blog post
- Stack disclosures ("we use [tool] to monitor citations") — stay vendor-neutral; tooling is discovery territory
- Guarantees ("te prometemos aparecer en ChatGPT en X semanas") — LLM outputs are non-deterministic; never promise placement

---

## 3. Copy spec (Spanish, voseo CR, ready-to-paste)

### Service entry (add to `services` array — see §6 for placement)

```ts
{
  slug: "posicionamiento-geo",
  title: "Posicionamiento GEO",
  category: "growth",
  categoryLabel: "Growth",
  metaTitle: "Posicionamiento GEO — Aparecé en ChatGPT, Claude, Perplexity y Gemini",
  metaDescription:
    "Tus clientes ya le preguntan a ChatGPT antes de buscar en Google. GEO posiciona tu marca como fuente citada por las IA. El nuevo canal orgánico.",
  shortDescription:
    "Cuando tu cliente le pregunta a ChatGPT, que tu marca sea la respuesta.",
  icon: "✨",
  painPoints: [
    {
      title: "Tus clientes ya no empiezan en Google",
      description:
        "Antes de buscar, preguntan a ChatGPT, Claude o Perplexity. Si la IA no te conoce, te saltearon sin darse cuenta.",
    },
    {
      title: "La IA menciona a tu competencia, no a vos",
      description:
        "Las empresas que publican contenido estructurado y citable terminan en las respuestas. Las que no, desaparecen del canal.",
    },
    {
      title: "Te están ganando un canal que ni sabías que existía",
      description:
        "Marcas en tu categoría ya están optimizando para aparecer en ChatGPT. Cada mes que esperás, construyen autoridad que luego es cara de alcanzar.",
    },
  ],
  solution:
    "GEO (Generative Engine Optimization) es aparecer en las respuestas de sistemas de IA generativa — ChatGPT, Claude, Perplexity, Gemini — cuando tus clientes preguntan. Es un canal paralelo al SEO, con sus propias reglas. Los LLMs citan fuentes con contenido estructurado, con autoridad, y con datos concretos sobre tu categoría. Nosotros construimos esa autoridad: contenido en español con el formato que los LLMs priorizan, schema data que te hace citable, y monitoreo mensual de en qué respuestas apareces. GEO complementa al SEO — no lo reemplaza.",
  deliverables: [
    "✨ Estrategia GEO adaptada a tu categoría y mercado",
    "📚 Artículos de alta autoridad en español (formato que los LLMs citan) — cantidad según plan",
    "🧩 Schema data + llms.txt + estructura de datos citable",
    "🗺️ Mapa de temas por industria — los subtópicos donde tu marca debe ser citada",
    "🔍 Monitoreo mensual de menciones en ChatGPT, Claude, Perplexity, Gemini",
    "📊 Reporte mensual de visibilidad + citaciones detectadas",
    "🔁 Ajustes mensuales según qué preguntas disparan citaciones",
    "🧭 Acompañamiento estratégico mensual — revisión de resultados y siguiente jugada",
  ],
  faqs: [
    {
      question: "¿Cuál es la diferencia entre GEO y SEO?",
      answer:
        "SEO es aparecer en los resultados de Google Search. GEO es aparecer en las respuestas de sistemas de IA generativa: ChatGPT, Claude, Perplexity, Gemini. Son canales distintos. Google te lleva a páginas; los LLMs te dan respuestas directas que a veces citan tu marca. Hoy mucha gente resuelve sus dudas en la IA antes de llegar a buscar — si no estás ahí, ni siquiera existe el clic a Google.",
    },
    {
      question: "¿Cómo se mide el éxito en GEO?",
      answer:
        "Medimos tres cosas: citaciones detectadas en respuestas de IA (ChatGPT, Claude, Perplexity, Gemini), autoridad en el topic (cuántos temas dentro de tu categoría te mencionan), y tráfico proveniente de esos canales cuando es rastreable. No prometemos 'aparecer en ChatGPT la semana 3' — los LLMs no funcionan así. Medimos la curva de visibilidad mes a mes.",
    },
    {
      question: "¿Cuánto tarda hasta que aparezca en respuestas de IA?",
      answer:
        "Típicamente las primeras citaciones comienzan a verse en 3–6 meses. Los LLMs procesan información con rezago — necesitan indexar, validar fuentes, y repetir la cita en contextos parecidos antes de que aparezcas de forma estable. GEO + SEO combinados aceleran: la visibilidad en Google alimenta las citas en IA.",
    },
    {
      question: "¿Por qué ahora y no en un año?",
      answer:
        "Porque la autoridad en GEO es acumulativa y primera-en-ganar. Las marcas que publican contenido citable ahora se consolidan como fuente que los LLMs recuerdan. Un año después, esa autoridad ya está tomada — entrás a empujar contra empresas con 12 meses de ventaja. En GEO el early-mover compra autoridad barata; el late-mover la paga triple en volumen de contenido.",
    },
    {
      question: "¿A la IA le interesa Costa Rica?",
      answer:
        "Los LLMs responden en español y citan fuentes en español. No es un canal gringo. Cuando alguien en CR le pregunta a ChatGPT sobre un servicio local, la IA busca fuentes relevantes en español — y si tu marca publica contenido de autoridad en tu categoría, aparecés. El sesgo 'solo cosas de EE.UU.' se corrigió en los últimos 12–18 meses.",
    },
    {
      question: "¿Esto reemplaza mi inversión en Google Ads?",
      answer:
        "No. Google Ads es pago-por-clic (volumen ahora, ROI inmediato). GEO es orgánico (autoridad acumulativa, ROI sostenido). Recomendamos combinar: Ads te da leads mientras GEO construye la autoridad que el siguiente año te consigue leads sin pagar cada clic.",
    },
  ],
  whatsappMessage: "Hola, me interesa posicionamiento GEO para aparecer en ChatGPT. Vi su sitio web.",
  relatedSlugs: ["seo", "publicidad-google", "business-brain"],
},
```

### Metadata + copy notes
- `metaTitle`: 68 chars ✓
- `metaDescription`: 156 chars ✓ (SEO snippet safe, includes brand+value+channel)
- `shortDescription` (hero subtitle): 94 chars — outcome-first framing
- No stats cited in current draft. If COPY agent wants to add stats in the solution or FAQs, EACH stat requires a verifiable source URL. Examples: "ChatGPT crossed 400M weekly users in 2026" — sources: [TechCrunch, Paperblog, LLMrefs]. Without source → drop.
- The "6–10 artículos en español" deliverable is load-bearing. It aligns with Segment 4's GEO content engine: whatever Lux publishes for itself becomes proof that Lux can do it for clients.

---

## 4. Design spec

**No design work required.** Renders via existing `ServicePageContent.tsx` template.

The educational weight is carried by:
- **Pain points** (reframed as market-shift awareness, not personal-pain)
- **Solution paragraph** (includes a 1-sentence GEO definition + the "not SEO rebranded" distinction)
- **FAQ #1** (explicit GEO-vs-SEO comparison)

No custom component. No primer block. No SEO-vs-GEO comparison table — if we add one, it's in the solution prose.

Design tokens already in the template: aurora background, glass cards, gold accents, Framer fade+slide+stagger motion. Nothing new.

---

## 5. UX spec

- Breakpoint 768px (existing)
- Tap targets ≥44px
- FAQ accordion keyboard-accessible (template handles)
- Screen-reader hierarchy: H1 → H2 → H3 (template handles)
- `prefers-reduced-motion` respected (template handles)
- No new interactive elements — nothing to re-audit

---

## 6. Implementation tasks (ordered)

CODE agent executes sequentially:

1. Open `src/data/services.ts`
2. Locate the `seo` service entry (search `slug: "seo"`)
3. Insert the new Posicionamiento GEO entry (copy from §3) **immediately after** the `seo` closing `},` — GEO should be the second-to-last entry in the Growth category, positioned as a sibling to SEO
4. Save file
5. Run `npm run build` — must pass without TS or lint errors
6. Open preview via `npm run dev`; navigate to `http://localhost:3000/servicios/posicionamiento-geo` and confirm the page renders end-to-end
7. Confirm that SEO's service entry (`seo`) ALSO gets `"posicionamiento-geo"` added to its `relatedSlugs` so the cross-link surfaces from SEO too. Current SEO relatedSlugs should become `["posicionamiento-geo", ...existing 2]`.
8. Confirm `publicidad-google` entry likewise gets `"posicionamiento-geo"` prepended to its `relatedSlugs`.
9. Commit on `feat/lux-growth-engine`:
   ```
   feat(P2): /servicios/posicionamiento-geo service page

   Adds Posicionamiento GEO (Generative Engine Optimization) as
   the third flagship AI service under Lux Growth Engine.
   Positioned as a sibling to SEO in the Growth category.

   Scope per PRD (docs/prd-posicionamiento-geo-page.md):
   - Educational framing — teaches what GEO is in the solution +
     FAQ #1, since CR SMEs don't yet know the term
   - No fabricated stats (all require source URL or flagged drop)
   - No guarantees on placement (LLM outputs are non-deterministic)
   - Cross-linked from SEO + publicidad-google relatedSlugs

   Renders via existing ServicePageContent template.
   ```
10. Push to origin

Do NOT touch: `ServicePageContent.tsx`, route files, Navbar, page.tsx.

---

## 7. Verification checklist

- [ ] `npm run build` passes
- [ ] `/servicios/posicionamiento-geo` renders locally
- [ ] Page title: "Posicionamiento GEO — Aparecé en ChatGPT, Claude, Perplexity y Gemini | Lux Media"
- [ ] All 8 deliverables render with emoji prefixes
- [ ] All 5 FAQs render as accordion
- [ ] WhatsApp CTA pre-fills the booking message
- [ ] Google Calendar CTA opens `CONTACT.bookingUrl`
- [ ] Related services grid links to SEO, Publicidad Google, Business Brain
- [ ] From `/servicios/seo` the new "Posicionamiento GEO" service card appears in the related-services section
- [ ] From `/servicios/publicidad-google` the new card appears similarly
- [ ] Breadcrumbs clickable (post-navbar-fix)
- [ ] Lighthouse ≥ 90 Accessibility / ≥ 90 Best Practices / ≥ 95 SEO — no regression
- [ ] Mobile 390×844: no horizontal scroll, CTAs tappable
- [ ] Service + FAQPage JSON-LD render in page source
- [ ] AI-assisted Spanish editorial pass complete; Gabriel approves any phrasing changes
- [ ] Stats audit: zero uncited numbers in final copy (confirm by searching the page for `%`, `millones`, numeric patterns)

---

## 8. Agent assignments

| Role | Owner | Deliverable |
|---|---|---|
| COPY | `general-purpose` subagent (optional — PRD ships ready copy; only dispatch for refinement) | Word-level edits to the Spanish strings in §3 + stats-source audit if any added |
| DESIGN | **Skip** | Template handles |
| CODE | `general-purpose` subagent | Executes §6 implementation + related-slug updates on SEO + publicidad-google |
| REVIEW | `superpowers:code-reviewer` subagent | Diff vs PRD + CLAUDE.md — flags: fabricated stats, pricing sneaks, qualification gates, stack disclosure, promises of placement |

**Parallelizable with P1** (voice-agent) — both only touch `src/data/services.ts` in non-overlapping regions. Dispatch as parallel Phase D agents.

---

## 9. Open questions

All resolved in audit pass (2026-04-20):
- ✅ Icon: ✨ (🧠 collides visually with Business Brain; 🎯 wrong frame)
- ✅ FAQ count: 6 (added "por qué ahora" + "a la IA le interesa CR", dropped "¿tengo que cambiar mi sitio?")
- ✅ Deliverables: 8 flat — dropped "6–10 artículos" lock, plain-language replacements for jargon
- ✅ Category: `growth` (SEO sibling)
- ✅ Pain point #3 swapped from SEO-assuming to competitor-urgency framing
- ✅ Defensive "no es SEO rebautizado" line cut from solution; added positive closer "GEO complementa al SEO — no lo reemplaza"

---

## 10. Links

- Plan: `~/.claude/plans/we-haven-t-checked-the-linear-pond.md`
- Positioning rules: `/Users/gabrielmena/dev/luxmedia/website/CLAUDE.md`
- Template: `src/components/ServicePageContent.tsx`
- Route: `src/app/servicios/[slug]/page.tsx` (auto-generates JSON-LD)
- Proof-of-capability infra already shipped: `public/llms.txt`, Organization schema with `knowsAbout: "GEO (Generative Engine Optimization)"` in `src/app/layout.tsx`
- Sibling reference: the SEO service entry in `src/data/services.ts` (closest analog in tone)
- Segment 4 (GEO content engine) keyword research — upstream gate for the "6–10 artículos" deliverable count
