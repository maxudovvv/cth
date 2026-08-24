# Design System — Crimean Tatar Heritage Canada (Provisional)

> Status: **provisional prototype.** All color values, type choices, and rules below are starting points that require contrast testing (WCAG 2.1 AA) and organizational approval before being treated as final. Tokens live in `src/app/globals.css` (CSS variables) and are surfaced to Tailwind via `tailwind.config.ts`.

## Token source of truth

CSS variables in `src/app/globals.css` define every token. `tailwind.config.ts` maps utilities (e.g. `bg-navy`, `text-gold`) to those variables, so there is one place to change a value.

## Color tokens (PROVISIONAL values)

| Token | Variable | Provisional value | Intended role |
| --- | --- | --- | --- |
| Midnight Navy | `--color-navy` | `#0e1b2a` | Deep base, dark sections, headings |
| Navy 700 / 600 | `--color-navy-700/600` | `#16293c` / `#21384d` | Layering on navy, muted text on light |
| Crimean Gold | `--color-gold` | `#c39a3f` | Primary accent (darkened for contrast on ivory) |
| Gold soft | `--color-gold-soft` | `#d9bd77` | Accent on dark backgrounds |
| Sea Turquoise | `--color-turquoise` | `#1f6f77` | Secondary accent, links, eyebrows |
| Warm Sand | `--color-sand` | `#d9c7a8` | Neutral warm surface |
| Pomegranate Red | `--color-pomegranate` | `#9e2b25` | Emphasis / errors, used sparingly |
| Warm Ivory | `--color-ivory` | `#f7f2e8` | Light base / reading surface |
| Ink | `--color-ink` | `#17222e` | Body text on light |

**Contrast note (provisional, must be re-tested):** gold was darkened from a brighter tone so gold-on-navy and ink-on-ivory pass AA; turquoise deepened for link contrast on ivory. Gold is used as a background with navy text (not as small text on ivory). Final values require a full contrast audit.

## Typography

- **Intended:** Fraunces (display serif) + Inter (body sans), both SIL OFL. Inter covers Crimean Tatar Latin diacritics (â ç ğ ı İ ñ ö ş ü).
- **Prototype reality:** this offline build cannot fetch Google Fonts, so it uses **system stacks** (`--font-display`, `--font-body`).
- **Swap-in:** re-enable `next/font` per the documented snippet in `src/lib/fonts.ts`, add the font variables to `<html>` in `src/app/layout.tsx`, and point `--font-display`/`--font-body` at `var(--font-fraunces)` / `var(--font-inter)`. Alternatively self-host OFL files via `next/font/local`.
- **Base size:** 17px body, line-height 1.65 — comfortable for older readers. Headings use the display family, tight leading, balanced wrapping.
- **Reading width:** `max-w-prose` (~68ch).

## Spacing scale

Tailwind's default 4px-based scale, plus semantic `--space-*` variables. Sections use `py-16 md:py-24`. Page gutters via `.container-content` (max-width 84rem, responsive padding).

## Content widths

`prose` = 68ch · `content` = 72rem · `wide` = 84rem (`.container-content`).

## Border & radius

Hairlines use `--color-line`. Radius scale: `--radius-sm` 2px, `--radius` 4px, `--radius-lg` 8px. Deliberately restrained — **no excessive rounding**; cards use subtle radius + hairline rings, not heavy pill shapes.

## Elevation

Two soft shadows (`shadow-soft`, `shadow-lift`) — low, warm, restrained. **No glassmorphism.**

## Image treatment rules

- Real photography uses `next/image` reading from `public/media/approved/` only.
- Aspect ratios fixed (e.g. gallery `4/3`) to prevent layout shift.
- Every image needs alt text; captions carry credit + date when known.
- The prototype shows **placeholder frames**, never real or social-media photos. See `media-workflow.md`.

## Motion tokens & rules

- Durations: `--dur-fast` 180ms, `--dur-base` 320ms, `--dur-slow` 620ms.
- Easing: entrance `cubic-bezier(0.16,1,0.3,1)`, exit `cubic-bezier(0.4,0,1,1)`.
- Motion is **restrained** (not on every element): hero entrance, one ornament draw, in-view section reveals, hover/focus feedback.
- **Reduced motion:** `prefers-reduced-motion` disables transforms/animation globally (CSS) and in Framer Motion (`useReducedMotion`), and `.reveal-init` content becomes visible. Content is never gated behind animation.
- Framer Motion for simple component transitions; GSAP reserved for future advanced narrative/SVG sequences (installed, not yet needed).

## Focus styles

Global `:focus-visible` ring (`--focus-ring`: ivory inset + gold outer) — visible on all interactive elements. Skip link (`.skip-link`) appears on focus.

## Responsive breakpoints

Tailwind defaults: `sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280. Mobile-first: layouts defined for small screens, enhanced up. Primary nav collapses to an accessible mobile menu below `lg`.

## Ornament & symbol rules

- `src/components/ornament/Ornament.tsx` — **original abstract** geometric motifs (divider, animatable line, corner motif). **Not** claimed as authentic Crimean Tatar ornament; authentic ornament requires sourcing + cultural review.
- `src/components/ornament/TamgaPlaceholder.tsx` — a **neutral placeholder mark**, explicitly **not** the tamga. Replacement point: swap in approved tamga artwork with usage rules; never redraw/distort the tamga.

## Prohibited patterns (enforced)

No generic SaaS/nonprofit templates, no repeated identical-card grids (heritage uses an editorial feature+list), no excessive glassmorphism or rounding, no random gradients (hero uses two intentional tonal glows), no huge empty hero, no fake cultural patterns, no stereotypical "Oriental" imagery, no animation on every element.

## Hero depth & atmosphere (CSS-only)

Added in the homepage polish checkpoint — all decorative, `aria-hidden`, and reduced-motion safe; none reduce text contrast:

- `.hero-atmosphere` — layered radial tonal shifts (gold ambient top-right, turquoise undertone lower-left) over a navy vertical gradient.
- `.hero-grid` — faint textile/architectural grid, radially masked, low opacity.
- `.grain` — cheap CSS dot-field grain (no image asset).
- `.paper` — warm paper texture for light media frames (dot field + diagonal sand wash).
- `.scroll-nudge` + `@keyframes scroll-nudge` — the hero scroll indicator's gentle loop (disabled under reduced motion).

No canvas, WebGL, animated noise, or image textures are used.

## Button variants (`ButtonLink`)

- `solid` — primary gold on navy text (any background).
- `secondary` — **new**: soft-gold border + ivory text for **dark/navy** backgrounds, fills gold on hover; visually subordinate to `solid`, meets contrast (fixes the previously low-contrast hero "See events"). API-additive.
- `outline` — border/current for **light** backgrounds.
- `ghost` — underlined text link-button.

## Status signalling & governance display

- `.status-pill` / `--provisional` — original pill (still used).
- `.status-note` — quieter, museum-label marker (gold dot + muted uppercase text); `--on-dark` variant for navy surfaces.
- **`GovernanceLabel`** (`src/components/ui/GovernanceLabel.tsx`) + **`src/lib/governance.ts`** — controls how much provisional metadata each item shows. Default = quiet editorial preview note; with `NEXT_PUBLIC_GOVERNANCE_DEBUG=true` (or the local const) = full `status · permission · review · locale · updated`. Metadata is never removed from content records — only its prominence changes. The site-wide provisional banner always remains, so provisional status is never hidden.

## Header contrast states

`Header` renders two accessible states via `onDark = !scrolled && !open`: over the dark hero/page-header (transparent bar, ivory logo + nav, gold-soft sub-label) and after scroll or when the mobile menu is open (ivory bar, navy text, light blur). The active gold underline persists in both; the global ivory+gold focus ring stays visible on either background.

## Components (prototype inventory)

Layout: `Header` (accessible mobile menu, scroll-compact + active-link indicator), `Footer` (CACT note), `PageHeader`, `ProvisionalBanner`. UI: `Section`, `Eyebrow`, `ButtonLink` (solid/secondary/outline/ghost), `StatusPill`, `ProvisionalNote`. Content: `EventCard`, `WorkCard`, `PlaceholderFrame` (ratio variants + hover reveal), `TopicScaffold`. Home: `Hero` (split editorial + scroll indicator + ornament path-draw), `HeroMedia` (layered placeholder media composition). Motion: `Reveal`. Forms: `PrototypeForm`. Ornament: `OrnamentDivider/Line/Motif`, `TamgaPlaceholder`.
