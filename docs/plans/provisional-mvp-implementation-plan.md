# Provisional MVP Implementation Plan

> Status: **in progress — prototype delivered.** This documents the reversible, provisional implementation begun ahead of full stakeholder answers, and the path to a real launch. It complements (does not replace) `bootstrap-and-discovery-plan.md`.

## Intent

Stand up a high-quality, working local prototype that makes the design, structure, and experience tangible and easy to revise once stakeholder answers and real content arrive. Everything is provisional and reversible; no public deployment.

## Stack (as built)

Next.js 14 (App Router) · React 18 · TypeScript (strict) · Tailwind CSS 3.4 · ESLint · Framer Motion (component transitions) · GSAP (installed, reserved for future advanced motion). No CMS, no donations, no analytics.

### Note on versions
Latest published majors (Next 16 / React 19 / Tailwind 4) were available but the prototype deliberately pins to the mature, well-supported line (Next 14 / React 18 / Tailwind 3.4) for build reliability and predictability during discovery. Upgrading is a documented, low-risk future step (DEC-013).

### Note on fonts
Intended fonts are Fraunces + Inter (SIL OFL) via `next/font`. This offline build cannot fetch Google Fonts, so the prototype uses system stacks with the exact swap-in documented in `src/lib/fonts.ts` and `design-system.md`.

## Checkpoints completed

1. Config & tooling (TS strict, Tailwind, ESLint, Next config with no remote image hosts).
2. Design tokens (CSS variables) + provisional palette + ornament system + neutral tamga placeholder.
3. Content layer with governance metadata (`status/source/permissionStatus/reviewStatus/locale/lastUpdated`) and structured local data — no invented facts.
4. Accessible layout: skip link, sticky header with accessible mobile menu, footer with CACT note, provisional banner.
5. Museum-quality homepage: hero (image-free, restrained motion), A Living Heritage, editorial heritage pathways, events preview, films & books, gallery preview, get involved.
6. All routes: `/`, `/about`, `/heritage` (+ `/history`, `/traditions`, `/language`), `/events`, `/films-and-books`, `/gallery`, `/get-involved`, `/contact`, plus 404.
7. Accessible local-only prototype forms (contact, volunteer, partnership/screening).
8. Media workflow folders + example manifest + gitignore governance.
9. Documentation (this plan, design-system, provisional-content-policy, media-workflow) + decision log + README.
10. Checks: typecheck, lint, production build, runtime smoke test.

## Verification status (this build)

- **TypeScript** (`tsc --noEmit`): passed.
- **ESLint** (`next lint`): passed, no warnings.
- **Production build** (`next build`): passed — 14 static routes, First Load JS ~87–134 kB.
- **Smoke test**: `/`, `/contact`, `/gallery` → 200; unknown → 404; skip link, provisional banner, footer CACT note, gallery aria-labels present.
- **Reduced motion / keyboard / responsive**: implemented to spec; automated a11y and cross-device/browser testing is **not yet run** (see "Not done").

## Not done (explicit)

- Automated accessibility audit (axe) and Playwright E2E — environment time-boxed; recommended next.
- Real browser console-error check across pages (structural review only).
- Real content, real images, real fonts, final palette, CMS, donations, analytics, localization content.
- Public deployment (intentionally excluded).

## Path to real launch (future)

1. **Discovery answers** → confirm name, audience, CACT wording, content readiness.
2. **Content** → replace provisional copy/events/works with verified, approved material; clear and add approved photography.
3. **Branding** → real logo/tamga, final palette (contrast-tested), fonts wired via `next/font`.
4. **Forms** → wire to a monitored recipient (server action / email service) with spam protection + privacy.
5. **CMS** → evaluate & integrate (Sanity/Payload) per `technical-options.md`.
6. **Localization** → add locale routing + reviewed translations (English already the default).
7. **QA & approval** → accessibility + performance audits, cultural review, organizational sign-off.
8. **Deploy** → only after approval.

## Reversibility

The prototype is additive and isolated: all app code lives under `src/`, `public/media/`, and config files; discovery docs are untouched. Provisional content is centralized in `src/content/data/*` and clearly labeled, so revising after stakeholder input is low-effort.
