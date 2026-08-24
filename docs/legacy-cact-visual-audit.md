# Legacy CACT Website — Visual & Motion Audit

> Reference only. The legacy Canadian Association of Crimean Tatars (CACT) website (`cact-website.zip`) was extracted to a temporary folder **outside** the active repo (`/…/cact-legacy-audit/`, git-ignored). The original ZIP is untouched; no repository was initialized inside it; the old project is **not** copied wholesale into this repo. We recreate its strongest visual/motion patterns while replacing its content, IA, branding, photography, and political/advocacy focus.

## Legacy stack & architecture

- **Next.js 14.2 (App Router) · React 18 · TypeScript · Tailwind 3.4 · Framer Motion 11 · @phosphor-icons/react.** No GSAP, WebGL, or canvas. Static export (`out/`).
- Same stack as our project → patterns port directly; no new heavy dependencies needed.
- Fonts loaded at **runtime via a Google Fonts `@import`** in `globals.css` (Playfair Display, Cormorant Garamond, Outfit) — deliberately avoids build-time font fetching. **This solves our offline-build font limitation** and lets us finally use real display type.

## Strongest visual ideas (worth recreating)

1. **Immersive full-viewport video hero** (`Hero` + `ClientVideoBackground`): `min-h-[100dvh]`, muted/looped/playsInline video with a poster `<img>` fallback and stacked `<source>` (ping-pong → base), a left-to-right darkening gradient for text contrast, and a bottom blend into the page. Large display headline + two pill CTAs. Hydration-safe (static markup).
2. **Dark/light section rhythm** (`Section` tones: `sand` / `white` / `ink`): alternating warm-cream and deep-ink sections create a premium editorial cadence. Ink sections carry a faint `ornament-tile` texture and gold accents.
3. **Editorial split layouts**: image on one side (rounded-3xl, gradient scrim, hover ken-burns zoom, corner caption chip), `SectionHeading` (eyebrow + serif title + intro) on the other; order flips per section (asymmetry).
4. **Parallax history band**: `background-attachment: fixed` cultural image + dark overlay + centered heading + ornament divider + a light content card floating over it.
5. **Ornament system** (`OrnamentMark` / `OrnamentDivider` / `OrnamentBand`): a stylized tamga/star-tulip lattice as SVG mark, a centered divider with fading rules, and a tiled texture (`ornament-tile`, inline SVG data-URI).
6. **Animated navigation**: fixed transparent nav → dark translucent blur on scroll; center-expanding gradient hover underline; a `layoutId` spring "active indicator" that slides between items; full-screen mobile overlay with staggered items; distinct gold **Donate** pill.
7. **Reveal / Stagger primitives** (`Reveal`, `StaggerGroup`, `StaggerItem`): in-view fade+rise, reduced-motion aware — the backbone of the scroll storytelling.
8. **Page transitions** (`PageTransition`): `AnimatePresence` keyed by pathname, `initial={false}` (no hydration flash), reduced-motion aware.
9. **Interactive stepped story** (`Motion3DStory`): a 5-step cultural narrative with prev/next, deterministic particle field, and masked reveals — an engaging scrollytelling centerpiece.
10. **Craft details**: animated gradient link-underline, `text-gradient-gold`, tinted diffusion shadows (not neon glows), `gold-line` hairline, ken-burns and floaty keyframes, elegant scrollbar.

## Animation inventory

| Pattern | Mechanism | Keep? |
| --- | --- | --- |
| Video-background hero | `<video>` + poster fallback | **Yes** — as a future media slot (`hero-film`) with our photo fallback |
| In-view reveal + stagger | Framer Motion variants | **Yes** (we already have `Reveal`; add `StaggerGroup`) |
| Page transition | AnimatePresence keyed by path | **Yes** |
| Nav hover underline + `layoutId` active indicator | CSS + Framer layout | **Yes** |
| Mobile overlay menu (staggered) | Framer AnimatePresence | **Yes** |
| Parallax `bg-fixed` band | CSS background-attachment | **Adapt** — `bg-fixed` is janky/expensive on mobile; use a contained parallax/scale with reduced-motion fallback |
| Ken-burns image zoom on hover/idle | CSS `kenburns` / transform | **Yes** (subtle, hover-only) |
| Floaty / particle / shimmer / sweep loops | CSS keyframes | **Sparingly** — avoid constant decorative motion |
| Interactive stepped story | Framer state machine | **Recreate later** (restrained) as a cultural story on About Crimean Tatars |

## Reusable technical patterns

- `Section` tone component; `SectionHeading` (eyebrow/title/intro); `Reveal`/`Stagger`; `PageTransition`; `Ornament*`; animated-underline utility; `ornament-tile`/`gold-line`/`glass` CSS; runtime Google-Fonts `@import`; Phosphor icons via a small `Icon` wrapper.
- Our project already has equivalents for several (`Section`, `Reveal`, `MediaSlot`, `Primitives`), so we **extend** rather than replace.

## Accessibility & performance concerns (fix on recreation)

- **`background-attachment: fixed`** — poor mobile performance and can break with transforms; replace with a lighter parallax or static image + overlay.
- **Autoplaying video** — must stay muted, `playsInline`, `preload` light; provide poster + reduced-motion still (no audio ever).
- **Glassmorphism / backdrop-blur** — used heavily; keep restrained and ensure text contrast (our brief limits glass).
- **Bright azure (#2D9CDB) + crimson** — too "campaign"/political; replace with Crimean Tatar **turquoise**, restrained **gold**, warm **cream**, deep **navy/graphite**. Drop crimson.
- **Custom smooth-scroll hijack** in the navbar — keep native/anchor scrolling; avoid overriding scroll (respect reduced motion).
- **Decorative loops** (floaty/particle/shimmer) — gate behind `prefers-reduced-motion` and use sparingly.
- Ensure keyboard focus visibility and single `h1` per page.

## Content / brand that must NOT be reused

The political slogan hero ("MİLLET! VETAN! QIRIM!"), "free Crimea"/advocacy framing, human-rights/partnerships messaging, CACT branding and logo, crimson campaign palette, and any conference/podium imagery. Our site is **cultural & educational**, publicly branded **Crimean Tatar Heritage Canada**, operated by **Canada Crimea Cultural Committee**; CACT remains a separate advocacy organization.

## Proposed mapping into the new site

| Legacy pattern | New home |
| --- | --- |
| Video hero | Home hero (`hero-film` slot) — fallback = our community paddling/flag photo |
| Section tone rhythm | All pages |
| Editorial split + image ken-burns | Home mission/About/Activities previews; About |
| Parallax history band (fixed→contained) | Home "History & Memory" transition (`history-memory-film`); About Crimean Tatars |
| Ornament mark/divider/tile | Global accents, dividers, footer (`footer-ornament`), dark sections |
| Animated nav + Donate pill | New 7-item Navbar |
| Reveal/Stagger/PageTransition | Global motion |
| Interactive stepped story | About Crimean Tatars (restrained cultural story) |
| Gallery hover/scrim | Gallery (masonry + lightbox) — our community media |

## Media

Legacy ships its own hero/CTA videos and cultural PNGs. We do **not** copy these; we recreate the *pattern* and use **our supplied community photography** (`public/media/pending/`) as fallbacks, reserving media slots (`hero-film`, `cultural-transition`, `textile-motion`, `history-memory-film`, `gallery-sequence`, `footer-ornament`) for future custom-generated video/animation.
