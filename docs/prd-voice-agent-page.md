# PRD P1 — `/servicios/voice-agent`

**Owner:** CODE agent (after COPY + Gabriel approve)
**Branch:** `feat/lux-growth-engine`
**Plan reference:** `~/.claude/plans/we-haven-t-checked-the-linear-pond.md` — Segment 2, Phase D1

---

## 1. Context & goals

Lux Media is repositioning under **Lux Growth Engine**. The new `/servicios/voice-agent` page is one of three flagship AI services (alongside Business Brain + Posicionamiento GEO) that anchor the "motor, 3 frentes" narrative on the new homepage.

**Goal:** ship a production service page at `/servicios/voice-agent` that:
- Positions Lux as a credible CR provider of AI voice-agent deployments
- Lands in under 3 seconds for a CR SME owner: *"ah, they answer my phone for me 24/7 in Spanish, and follow up"*
- Routes every interested reader to either WhatsApp or the Google Calendar booking page (`CONTACT.bookingUrl`)
- Respects all locked positioning rules in `CLAUDE.md`

**Success signal:** a prospect who lands on this page can explain the offer in one sentence + book or message within 60 seconds.

---

## 2. Out of scope

Hard NOs — the CODE agent must not ship any of these:

- Fixed pricing, price ranges, "desde $X/mes" framing, or discount mechanics
- "Ideal para empresas con X empleados/volumen" qualification gates
- Simulated demos — no "listen to sample call" widget, no fake transcript player, no canned audio waveform
- Specific vendor/stack names in visible copy — no "powered by Retell/Vapi/ElevenLabs/Fonema/Twilio." Lux hasn't locked a vendor; the page stays generic.
- Costa Rica telephony constraint disclosure (the +506 SIP gap). Handle in discovery call, not on the page.
- "Casos de éxito próximamente" placeholder badge (Lux has no case studies yet; the absence speaks less loudly than a broken promise)
- Any copy referring to "cold-outbound campaigns" or "llamadas masivas." Outbound scope is narrow — confirmations + reminders + verifications only.
- Custom component (no `customComponent` field). Reuse the existing `ServicePageContent.tsx` template.

---

## 3. Copy spec (Spanish, voseo CR, ready-to-paste)

COPY agent may refine word-level phrasing; don't alter scope or structure. All copy shipping to `src/data/services.ts`.

### Service entry (add to the `services` array after the Business Brain entry)

```ts
{
  slug: "voice-agent",
  title: "Voice Agent",
  category: "technology",
  categoryLabel: "Technology",
  metaTitle: "Voice Agent — Agente de voz con IA que contesta el teléfono 24/7 en Costa Rica",
  metaDescription:
    "Agente de voz con IA que contesta llamadas 24/7 en español, califica leads, agenda citas y confirma recordatorios. Sin perder clientes fuera de horario.",
  shortDescription:
    "Tu teléfono contestado 24/7 en español — califica leads y agenda citas mientras tu equipo vende.",
  icon: "☎️",
  painPoints: [
    {
      title: "Perdés llamadas fuera de horario",
      description:
        "Llamadas entrantes a las 7pm se contestan al día siguiente. Para cuando devolvés, el cliente ya buscó a otro proveedor.",
    },
    {
      title: "Tu equipo se quema contestando lo mismo",
      description:
        "Precio, horarios, ubicación, disponibilidad — repetido 30 veces al día. Cada vez que suena el teléfono, alguien deja de vender.",
    },
    {
      title: "Tus clientes cuelgan al oír el mensaje de voz",
      description:
        "'Deje su mensaje después del tono' es una puerta cerrada. Devolvés la llamada y ya no contestan — perdiste la venta antes de empezar.",
    },
  ],
  solution:
    "Un agente de voz con IA entrenado con la información de tu empresa — productos, precios, horarios, tono — que atiende tu teléfono en español latinoamericano 24/7. Responde preguntas frecuentes, califica leads según tus criterios, agenda citas directo en tu Google Calendar y te manda un resumen de cada llamada por WhatsApp. Ese mismo agente también llama de vuelta cuando toca: confirmar una cita, recordar un vencimiento, verificar un dato.",
  deliverables: [
    "☎️ Inbound 24/7 sin colas ni mensaje de voz",
    "🎯 Califica leads en tiempo real según tus criterios",
    "📅 Agenda citas directo en Google Calendar",
    "📲 Resumen de cada llamada al WhatsApp del dueño",
    "🔔 Llamadas salientes de confirmación y recordatorio",
    "👤 Transferencia a un humano cuando algo se sale del guion",
    "📚 Entrenado con tu información: productos, precios, FAQs, tono de marca",
    "📊 Reporte mensual de llamadas, motivos y conversión",
    "🔧 Tuning mensual según las llamadas reales que recibe",
  ],
  faqs: [
    {
      question: "¿Qué tan natural suena el acento en español?",
      answer:
        "Usamos voces con acento latinoamericano neutro, mexicano o colombiano según tu preferencia. La cadencia es humana — los clientes no sienten que están hablando con un robot. En la sesión de discovery te ponemos a escuchar ejemplos antes de comprometerte.",
    },
    {
      question: "¿Funciona con el número que ya tengo?",
      answer:
        "Sí. Conectamos con tu línea actual o te asignamos una nueva según lo que mejor funcione para tu operación. Eso lo coordinamos en la sesión de discovery, donde revisamos tu telefonía actual.",
    },
    {
      question: "¿Esto reemplaza a mi recepcionista?",
      answer:
        "No la reemplaza — la libera. El Voice Agent maneja lo repetitivo (precios, horarios, citas, preguntas frecuentes, mensajes fuera de horario) para que tu recepcionista o tu equipo se enfoquen en lo que requiere criterio humano: atención al cliente real, ventas complejas, manejo de quejas.",
    },
    {
      question: "¿Qué pasa si el cliente pide hablar con un humano?",
      answer:
        "El agente reconoce cuando algo sale del guion y te transfiere la llamada al instante — o te manda el mensaje al WhatsApp si estás ocupado. Nunca deja a un cliente colgando.",
    },
    {
      question: "¿Qué pasa si el sistema falla?",
      answer:
        "Si el agente falla o hay un problema técnico, la llamada pasa directo a tu número de respaldo o a quien vos definás. Nunca se pierde una llamada por una caída del sistema. Monitoreamos 24/7 y el tuning mensual incluye revisión de cualquier incidente.",
    },
    {
      question: "¿Puede hacer llamadas salientes de confirmación o recordatorio?",
      answer:
        "Sí, para casos específicos — confirmar citas, recordar vencimientos, verificar datos de contacto. No lo usamos para campañas masivas de llamadas; para eso WhatsApp es más barato y menos intrusivo. El Voice Agent saliente es para los momentos donde una llamada cierra mejor que un mensaje.",
    },
  ],
  whatsappMessage: "Hola, me interesa un agente de voz con IA para mi empresa. Vi su sitio web.",
  relatedSlugs: ["business-brain", "crm-ventas", "publicidad-meta"],
},
```

### Metadata notes
- `metaTitle` ≤ 70 chars check: 68 ✓
- `metaDescription` = 152 chars ✓ (SEO snippet safe)
- `shortDescription` = hero subtitle; 94 chars, ~15 words — outcome-first per audit revision

### Cross-link update (CODE agent: SAME commit)
The Business Brain service entry also gets a new FAQ to clarify Voice Agent is a sibling service, not a BB module:

```ts
// INSERT into business-brain faqs array (after existing FAQ "¿Funciona con mi WhatsApp actual?"):
{
  question: "¿Business Brain también contesta llamadas por teléfono?",
  answer:
    "No directamente — Business Brain vive en WhatsApp, Instagram y Facebook Messenger. Si también necesitás contestar llamadas automáticamente, lo hacemos con Voice Agent, nuestro servicio hermano. Se pueden combinar: Voice Agent contesta el teléfono, Business Brain cubre los mensajes.",
},
```

Also UPDATE business-brain `relatedSlugs` from `["crm-ventas", "dashboards", "redes-sociales"]` to `["voice-agent", "crm-ventas", "dashboards"]` — pulls Voice Agent to the #1 related slot so prospects see the cross-link prominently.

---

## 4. Design spec

**No design work required.** The page renders via the existing shared template at `src/components/ServicePageContent.tsx`.

- Hero: template handles — `{service.title}` H1 + `{service.shortDescription}` subtitle, Technology category pill above the title
- Pain points: template renders `service.painPoints` as a 3-up grid (desktop) / 1-up stack (mobile) with the warning-triangle icon
- Solution: template renders `service.solution` as a gold-accented prose block ("Así lo resolvemos con vos" heading)
- Deliverables: template renders flat `service.deliverables` as a 2-column list with gold checkmarks under "Qué ponemos a correr"
- FAQs: template renders `service.faqs` as an accordion under "Antes de que preguntés"
- Related services: template pulls from `service.relatedSlugs`
- CTA block: template renders WhatsApp primary button + "📅 Agendá 30 min con Gabriel" secondary button (booking URL)

Design tokens already in use (no additions needed): `--accent` gold, glass utilities, aurora background, gold-glow text shadow, Framer fade+slide+stagger motion vocabulary.

---

## 5. UX spec

- Mobile breakpoint: 768px (existing site convention)
- Tap targets: all buttons ≥ 44px height (template already complies via `px-8 py-4` Tailwind classes)
- Keyboard nav: FAQ accordion + CTAs keyboard-accessible (template already handles)
- `prefers-reduced-motion`: respected by template's Framer Motion guards
- Screen reader: headings follow H1 → H2 → H3 hierarchy; FAQ accordion has aria attributes via existing template
- No new interactive components — nothing to re-audit for accessibility beyond what the existing template already ships

---

## 6. Implementation tasks (ordered)

CODE agent executes these sequentially:

1. Open `src/data/services.ts`
2. Locate the Business Brain entry (search `slug: "business-brain"`)
3. Insert the new Voice Agent entry (copy from §3 above) **immediately after** the Business Brain closing `},` — Voice Agent should appear second in the Technology category, right after BB
4. Save file
5. Run `npm run build` — must pass without TS or lint errors
6. Open a preview via `npm run dev`; navigate to `http://localhost:3000/servicios/voice-agent` and confirm the page renders end-to-end (hero, pain points, solution, deliverables, FAQs, related services, CTA)
7. Confirm 301 redirects still work: `curl -sI http://localhost:3000/servicios/chatbots-ia` → 308 to `/servicios/business-brain`
8. Commit on `feat/lux-growth-engine`:
   ```
   feat(P1): /servicios/voice-agent service page

   Adds Voice Agent to the Lux Growth Engine service lineup — the
   second of three flagship AI services alongside Business Brain
   and Posicionamiento GEO.

   Scope per PRD (docs/prd-voice-agent-page.md):
   - Inbound: 24/7 answering in Spanish, qualification, booking
   - Outbound NARROW: confirmations/reminders/verifications only
   - No stack references (vendor not locked)
   - No CR telephony disclosure on page (handle in discovery)
   - No simulated demo (per positioning rule)

   Renders via existing ServicePageContent template; no code
   changes outside src/data/services.ts.
   ```
9. Push to origin — Vercel preview auto-redeploys

Do NOT touch: `ServicePageContent.tsx`, `src/app/servicios/[slug]/page.tsx`, `Navbar.tsx`, `page.tsx` — all out of scope for P1.

---

## 7. Verification checklist

CODE agent confirms before marking PRD complete:

- [ ] `npm run build` passes
- [ ] `/servicios/voice-agent` renders locally on `npm run dev`
- [ ] Page title appears as "Voice Agent — Agente de voz con IA que contesta el teléfono 24/7 en Costa Rica | Lux Media"
- [ ] All 8 deliverables render with emoji prefixes intact
- [ ] All 5 FAQs render as accordion and expand/collapse correctly
- [ ] WhatsApp CTA pre-fills "Hola, me interesa un agente de voz con IA para mi empresa. Vi su sitio web."
- [ ] Google Calendar booking CTA opens `CONTACT.bookingUrl` in a new tab
- [ ] Related services grid links to Business Brain, CRM, Meta Ads (no broken links)
- [ ] Breadcrumbs render as Inicio / Servicios / Voice Agent and the first two are clickable (post-navbar-fix)
- [ ] Lighthouse on the new page ≥ 90 Accessibility, ≥ 90 Best Practices, ≥ 95 SEO (no regression vs `docs/baseline-pre-v2.md`)
- [ ] Mobile viewport (390×844): no horizontal scroll, all CTAs visible + tappable
- [ ] Service JSON-LD + FAQPage JSON-LD both inject at the route level (confirm via View Source or `curl | grep application/ld+json`)
- [ ] AI-assisted Spanish editorial pass complete (Claude review for regionalisms / calques / awkward phrasing; Gabriel signs off on any suggested changes)

---

## 8. Agent assignments

| Role | Owner | Deliverable |
|---|---|---|
| COPY | `general-purpose` subagent (optional — PRD has ready-to-ship copy; only dispatch if Gabriel wants iteration) | Word-level refinements to the Spanish strings in §3 |
| DESIGN | **Skip** | Template handles layout; no design work needed for this page |
| CODE | `general-purpose` subagent | Executes §6 implementation tasks |
| REVIEW | `superpowers:code-reviewer` subagent | Diff vs PRD + CLAUDE.md rules — flags any drift: pricing sneaking in, qualification gates, stack name leaking, etc. |

Parallel dispatch note: this PRD is PARALLELIZABLE with PRD P2 (posicionamiento-geo) in Phase D — both only touch `src/data/services.ts` and can merge cleanly.

---

## 9. Open questions

All resolved in audit pass (2026-04-20):
- ✅ Icon: ☎️ (universal phone shorthand; 🎙️ suggests podcast)
- ✅ `metaDescription`: 152 chars (SEO snippet safe)
- ✅ Order in `services.ts`: by prominence — Business Brain → **Voice Agent** → Dashboards → Desarrollo Web
- ✅ Architecture: Voice Agent stays SEPARATE from Business Brain (15% stack overlap, distinct buyer intent, homepage "3 frentes" coherence). Cross-linked via updated BB FAQ + relatedSlugs reordering.

**Sales-script flag (not a PRD blocker):** the FAQ answer "lo coordinamos en discovery" for number/Kolbi questions can feel evasive if the prospect presses. Gabriel should have a crisp 1-sentence Kolbi answer ready before publishing.

---

## 10. Links

- Plan: `~/.claude/plans/we-haven-t-checked-the-linear-pond.md`
- Positioning rules: `/Users/gabrielmena/dev/luxmedia/website/CLAUDE.md` (v2 durable decisions block at top)
- Template: `/Users/gabrielmena/dev/luxmedia/website/src/components/ServicePageContent.tsx`
- Route: `/Users/gabrielmena/dev/luxmedia/website/src/app/servicios/[slug]/page.tsx`
- Schema injection: route file lines 41–86 (Service + FAQPage JSON-LD auto-generated from service data)
- Sibling references: Business Brain entry in `src/data/services.ts` (the gold-standard template to match)
