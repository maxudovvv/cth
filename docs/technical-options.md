# Technical Options — Crimean Tatar Heritage Canada

> Status: **draft** — trade-off comparison only. **No final choices** are made here. Decisions follow Phase 1 discovery (content volume, staff capacity, budget, hosting, feature scope).

The default direction from `CLAUDE.md` is Next.js + TypeScript + Tailwind, with GSAP where justified and a CMS chosen after evaluation. This document records the options and trade-offs behind each area.

## 1. Next.js architecture

| Option | Pros | Cons | Notes |
| --- | --- | --- | --- |
| **App Router (RSC), mostly static / SSG + ISR** | Fast, cacheable, great for content sites; strong image and i18n support; SEO-friendly | Newer patterns; RSC learning curve | **Leaning here** for a content/museum site. |
| Pages Router | Mature, lots of examples | Legacy direction; fewer new features | Only if a dependency forces it. |
| Static export (`output: export`) | Cheap hosting, simple | No ISR/server features; harder previews/i18n | Possible if CMS builds are infrequent. |

**Direction (tentative):** App Router with static generation + incremental revalidation for content pages; server rendering only where needed (search, forms).

## 2. CMS (compare — do not pre-select; see `cms-content-manager`)

| Option | Pros | Cons |
| --- | --- | --- |
| **Sanity** | Flexible structured content, real-time editing, strong image pipeline, good i18n patterns, generous free tier | Hosted dataset (data lives with vendor); GROQ learning curve |
| **Payload** | TypeScript-native, self-hosted, own your database, strong access control/roles | You operate the infra (DB, hosting, backups) |
| Other headless (e.g. Strapi, Directus, Keystone) | Various strengths | Evaluate only if a clear advantage emerges |

**Decision inputs needed:** content volume, number/skill of editors, budget, data-ownership/hosting preferences, multilingual depth. Editorial workflow must support drafts, review, and the content-status system.

## 3. Animation architecture

| Option | Use for |
| --- | --- |
| **CSS transitions/animations** | Simple hovers, fades, small reveals — the default. |
| **GSAP (+ ScrollTrigger)** | Sequenced storytelling, scroll-linked reveals, timelines — only where it clearly adds value. |
| Framer Motion | Possible for React component transitions; evaluate vs GSAP to avoid overlapping libraries. |

Constraint: reduced-motion first-class; no scroll hijacking; measure on mid-range mobile. See `motion-design-gsap`.

## 4. Multilingual architecture

| Option | Pros | Cons |
| --- | --- | --- |
| **Next.js i18n routing + message catalogs** (e.g. next-intl / next-i18next) | Locale-aware routes, translated metadata, standard tooling | Requires disciplined key management |
| CMS-driven localization (fields per locale) | Editors manage translations in one place | Ties UI strings to CMS unless separated |

**Direction (tentative):** locale-aware routes (`/en`, later `/crh`, possibly `/fr`, `/uk`), UI strings in message catalogs, content translations in the CMS. English at launch. See `multilingual-editor`.

## 5. Media hosting & image storage

| Option | Pros | Cons |
| --- | --- | --- |
| CMS-native asset pipeline (e.g. Sanity CDN) | Integrated transforms, simple for editors | Vendor coupling |
| Dedicated media service (e.g. Cloudinary / imgix) | Powerful transforms, DAM features | Extra cost/integration |
| Next/Image + object storage (S3/R2) | Control and cost | More setup; you manage variants |

Requirements: responsive formats (AVIF/WebP), art-directed crops, captions/credits metadata, permission tracking (see `content-source-register.md`).

## 6. Search

Options: built-in static filtering for small datasets; a hosted search (Algolia/Typesense/Meilisearch) as the archive grows. **Direction:** defer real search until content volume justifies it; start with structured browse (timeline, categories, events).

## 7. Event management

Options: model events in the CMS (recommended, keeps data owned and on-brand) vs embedding a third-party calendar/ticketing. **Direction (tentative):** CMS-modeled events (see `content-model-draft.md`), linking out to external registration/ticketing when needed.

## 8. Donation integrations

Options: Stripe, PayPal, CanadaHelps (Canada-specific, tax-receipt handling), or a donate link to an existing platform. **Decision inputs:** the organization's legal/charitable status, tax-receipt needs, fees. Keep donation flows clearly within the CTHC identity; do not blend with CACT. Defer until discovery.

## 9. Analytics

Options: privacy-friendly (Plausible, Fathom, Umami) vs Google Analytics 4. **Leaning** privacy-friendly for a cultural/community audience; confirm consent requirements. Avoid heavy trackers that hurt performance.

## Cross-cutting

- Hosting: Vercel (first-class Next.js) vs self-host; decide with CMS choice.
- Testing: Playwright for key flows; component/unit tests; strict TypeScript; lint/format in CI (Phase 5+).
- Accessibility/performance budgets enforced in CI later (see `accessibility-and-performance.md`).

## Open decisions (to resolve in discovery)

CMS selection · hosting · donation platform · analytics · whether/when to add search · media host · which additional locales and when.
