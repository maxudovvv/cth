# Homepage Premium Polish Plan

> Status: **in progress.** Scope is the **homepage only** (`/`). Route structure, content governance, CMS-absence, and no-deploy constraints are unchanged. Inner pages are intentionally out of scope for this checkpoint.

## Objective

Transform the homepage from a clean functional prototype into a cinematic, museum-quality, culturally specific experience — adding depth, atmosphere, refined motion, and editorial hierarchy — while preserving all accessibility, performance, and content-governance work.

## Files modified

- `src/app/globals.css` — hero depth utilities (layered radial tone, CSS paper grain, faint textile grid, gold/turquoise ambient), scroll-indicator keyframes, media-frame/paper styles, refined focus.
- `src/components/ui/Primitives.tsx` — new navy-optimized `secondary` button variant (API-additive), refined states.
- `src/components/home/Hero.tsx` — split editorial hero, background depth, scroll indicator, ornament path-draw.
- `src/components/home/HeroMedia.tsx` — **new** layered placeholder media composition (governance-labeled).
- `src/components/layout/Header.tsx` — scroll-compact state + refined active-link indicator.
- `src/app/page.tsx` — redesigned sections (Living Heritage, Heritage pathways, Events, Films & Books, Gallery preview, Get involved).
- `src/components/cards/EventCard.tsx`, `WorkCard.tsx` — quieter status labels, better hierarchy.
- `src/components/gallery/PlaceholderFrame.tsx` — aspect-ratio variants + hover caption reveal (no raw `<img>`).
- `src/components/ornament/Ornament.tsx` — refined motif/path for the hero draw.

## Hero composition

- **Left:** eyebrow → title → positioning → ornament draw → supporting line → primary (gold `solid`) + secondary (`secondary`) CTAs. Improved hierarchy and spacing; readable at every breakpoint.
- **Right:** a layered cultural media composition using **placeholders only**: one large frame + one smaller overlapping "archival" frame, warm paper texture, a restrained ornament motif, and small metadata labels (Culture · Community · Language · Across Canada). Intentional caption: *"Community photography — awaiting approved media."*
- **Depth:** layered radial tonal shifts, subtle CSS paper grain, a faint textile/architectural grid, one soft gold ambient glow, a restrained turquoise undertone. No heavy gradients, no animated noise, no canvas.
- **Scroll indicator:** "Scroll to explore" + a restrained animated line; reduced-motion fallback; non-essential; may hide on very small screens.

## Media replacement points

The hero media frames and all gallery frames render **placeholder art only** — no real, community, or Facebook imagery, nothing fetched. Replacement points (documented in `../media-workflow.md`): `HeroMedia` frames and `PlaceholderFrame` are where a `next/image` `<Image src="/media/approved/…">` is introduced once an approved file + manifest entry exist. The "awaiting approved media" caption is intentional, not an error state.

## Motion decisions

- Restrained, reduced-motion-aware throughout (`useReducedMotion` + global CSS reduce rule).
- Hero: staggered entrance, one SVG **path-draw** ornament (Framer Motion `pathLength`), subtle media-frame reveal, gentle hover lift on media.
- Sections: in-view `Reveal` (once).
- Header: compact/translucent transition on scroll.
- Scroll indicator: short looping nudge (disabled under reduced motion).
- **GSAP not used here** — Framer Motion + CSS deliver the needed effects; GSAP remains reserved for genuinely advanced future sequences (per instruction not to add GSAP just to satisfy the tech choice).
- No scroll hijacking, no long delays, no motion on every heading, no content gated behind animation.

## Accessibility decisions

- Preserve skip link, landmarks, keyboard nav, visible focus, accessible mobile menu, heading hierarchy (single `h1` in hero), 44px targets, reduced motion.
- All decorative SVG/ornament/texture `aria-hidden`; media placeholders carry meaningful alt/caption text.
- Secondary CTA meets contrast on navy (not color-only).
- Metadata labels and status pills are text, not color-only signals.

## Mobile behavior

- Hero stacks: text block first, media composition below; overlapping frames constrained so they never clip; reduced decoration on the smallest screens.
- Title uses fluid sizing to avoid overflow at 320px; CTAs wrap and stay ≥44px.
- Gallery/pathways collapse to single/'stacked columns; no excessive vertical whitespace.
- Reviewed at 1440 / 1024 / 768 / 390 / 320.

## Content governance

All provisional text/media keep their `status/source/permissionStatus/reviewStatus/locale/lastUpdated` metadata in `src/content/data/*`. The UI presents governance more elegantly (quieter pills, intentional captions) but never removes traceability. Prototype banner and provisional notes remain.

## Deferred work (not in this checkpoint)

Inner-page polish; real imagery/fonts/palette finalization; automated a11y (axe) and Playwright E2E; cross-browser/device verification in a real browser; CMS/forms wiring; deployment.
