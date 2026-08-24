# Editorial Heritage — Design System

> Status: **active (provisional values).** An original system for Crimean Tatar Heritage Canada. Inspired *only structurally* by the editorial discipline of large publication design systems (e.g. the Washington Post design system and BBC GEL) — for hierarchy, typographic scale, layout discipline, responsive behaviour, accessibility, and meaningful motion. **No** branding, logos, proprietary type, exact layouts, or source were copied. Colour values remain provisional pending organizational approval.

## What it should feel like

A premium cultural publication · a digital museum · a living community archive — modern, warm, credible, emotionally engaging. **Not** a news clone, government site, political campaign, SaaS dashboard, mobile-app UI, or generic nonprofit template.

## Brand structure (must hold everywhere)

- **Public brand:** *Crimean Tatar Heritage Canada* — header, nav, hero, metadata, page titles, main content, social previews.
- **Operating organization:** *Canada Crimea Cultural Committee* — appears only as the footer line **"Operated by Canada Crimea Cultural Committee"** on every page. The site is never renamed to the committee.
- **CACT** — a separate advocacy/human-rights organization; never merged.

## Colour tokens (provisional)

Restrained, archival-warm palette. Values in `src/app/globals.css`; Tailwind aliases in `tailwind.config.ts`.

| Token | Var | Provisional value | Role |
| --- | --- | --- | --- |
| Turquoise | `--color-turquoise` | `#1f6f77` | Crimean Tatar turquoise — accent, links, eyebrows |
| Turquoise deep | `--color-turquoise-deep` | `#17565c` | hover/darker accent |
| Gold | `--color-gold` | `#c39a3f` | warm gold — primary accent / CTAs |
| Gold soft | `--color-gold-soft` | `#d9bd77` | gold on dark |
| Cream | `--color-ivory` (`cream`) | `#f7f2e8` | warm cream — light base |
| Cream dim | `--color-ivory-dim` | `#efe7d6` | secondary surface |
| Graphite | `--color-navy` (`graphite`) | `#0e1b2a` | deep graphite — dark base, headings, text |
| Graphite 700/600 | `--color-navy-700/600` | `#16293c` / `#21384d` | layering, muted text |
| Archival neutral | `--color-sand` | `#d9c7a8` | muted archival neutral surface |
| Pomegranate | `--color-pomegranate` | `#9e2b25` | rare emphasis / errors |
| Ink / line | `--color-ink` / `--color-line` | `#17222e` / `#e0d6c2` | body text / hairlines |

> Token names `navy`/`ivory` are retained in code (widely referenced) but represent the **graphite** and **cream** directions above. Renaming is deferred to avoid churn; the mapping is documented here.

## Typography

- **Display serif** — selected display headings and pull-quotes only (`--font-display`). Intended face: Fraunces (OFL); offline fallback = system serif stack.
- **Sans-serif** — navigation, body, controls, metadata, forms (`--font-body`). Intended: Inter (OFL, covers Crimean Tatar Latin diacritics); offline fallback = system sans stack.
- **Scale (fluid where useful):** hero `~2.35→3.75rem`; h2 `~1.9→2.6rem`; h3 `~1.25→1.5rem`; body `1.0625rem` (17px) / lead `1.125–1.25rem`; small `0.8125–0.875rem`. Line-height 1.65 body, ~1.05–1.1 display. Reading width ~68ch.
- Serif is used **sparingly** for emotional/editorial moments; sans carries the working UI.

## Grid & layout discipline

- Container: `.container-content` max 84rem, responsive gutters (1.25rem → 2rem).
- **Varied compositions** — sections deliberately differ (split hero, editorial bento, full-bleed media band, asymmetric masonry, feature+supporting). Not every section sits in an identical card container.
- Generous editorial whitespace; asymmetry; image-led storytelling; subtle borders and layering; restrained shadows (`shadow-soft`, `shadow-lift`).

## Breakpoints

Tailwind defaults — `sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280. Mobile-first; verified at 1440 / 1024 / 768 / 390 / 360.

## Motion (summary)

Tokenized (see `motion-and-future-media-slots.md`): durations, easing, stagger, reveal distance, hover scale. Transform/opacity only; `prefers-reduced-motion` fully honoured; no scroll hijacking, aggressive parallax, long loaders, or constant decorative movement.

## Ornament & symbols

- Abstract original ornament (`OrnamentDivider/Line/Motif`) used **sparingly**; not claimed as authentic historical ornament.
- Tamga: neutral placeholder only; never redrawn/distorted; awaiting approved artwork.

## Prohibited

Repetitive three-card grids · excessive rounded cards · excessive gradients · glassmorphism · decorative UI clutter · oversized pills everywhere · random floating shapes · low-contrast text · every section in an identical container.

## Accessibility baseline

WCAG 2.1 AA target: semantic landmarks, single `h1` per page, keyboard operability, visible focus (ivory+gold ring), ≥4.5:1 text contrast, ≥44px targets, captions/alt for media, reduced-motion. Header maintains contrast in both over-media and scrolled states.
