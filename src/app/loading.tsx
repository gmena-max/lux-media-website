// Intentionally disabled.
//
// The previous Loading UI caused a dev-mode UX bug: Next.js 16's App Router
// wraps every segment with `loading.tsx` in a Suspense boundary. On cold
// dev-server requests to "/", Turbopack must compile ~13 homepage sections
// (all importing framer-motion) before the real <main> can stream in. During
// that 10-25s window, users saw a pulsing "Cargando..." and assumed the site
// was broken. The DOM briefly contains two <main> elements (fallback +
// hidden real) until the real tree is revealed.
//
// In prod (`next start`) the homepage is fully static-ish and renders in
// <100ms, so the fallback would only ever flash — not worth the dev-mode
// cost. If a specific slow route (e.g. /blog/[slug] with heavy MDX) needs a
// skeleton later, add a `loading.tsx` in that segment's folder instead of
// at the app root.
//
// Re-enable by exporting a default component from this file.
export default function Loading() {
  return null;
}
