# Homepage Browser-Review Fixes

> Status: **complete for this checkpoint.** Focused visual corrections to the polished homepage from a real-browser review. No redesign, no route/architecture changes, visual direction preserved. Homepage only.

## Issues fixed

### 1. Header contrast — two accessible states
`src/components/layout/Header.tsx`. Introduced an `onDark` state (`= !scrolled && !open`):
- **Over the dark hero (top):** transparent header, **ivory** logo + nav (`text-ivory`, inactive `text-ivory/75`), gold-soft sub-label, ivory-bordered toggle.
- **After scroll (or menu open):** warm ivory bar (`bg-ivory/90` + light blur), **navy** text.
Active **gold underline** preserved in both states; restrained transition; blur kept light. Keyboard focus uses the global ivory+gold ring (visible on both). Mobile menu forces the light bar when open so the panel and toggle read clearly.

### 2. Footer contrast
`src/components/layout/Footer.tsx`. Raised text to accessible levels on navy: primary `text-ivory`, supporting `text-ivory/85`, muted note `text-ivory/70`, bottom bar `text-ivory/75`. Links are full `text-ivory` with `hover:/focus-visible:text-gold-soft` + underline. Gold headings preserved; divider border strengthened to `border-ivory/20`; restrained `OrnamentDivider` kept at top.

### 3. Hero viewport fit
`src/components/home/Hero.tsx` + `HeroMedia.tsx`. Reduced vertical padding (`py-14 md:py-16 lg:py-16 xl:py-24`), tightened title scale (`2.35rem`→`3.35rem` on lg, `3.75rem` only at xl), smaller inter-element margins, and reduced media width (`lg:max-w-[22rem]`, aspect `4/5`). The full composition incl. CTAs now fits ~1366×768 and 1440×900 without forced empty space; 390px stacks naturally; large desktop keeps breathing room at `xl`.

### 4. Hero media placeholder
`src/components/home/HeroMedia.tsx`. Replaced the human-silhouette art (read as a profile/avatar) with **culturally neutral editorial** treatments: a **film-frame** (sprocket rails + framed linework) large frame and a layered **landscape/archival** small frame. No people, no authenticity claim. Labels changed from "PHOTO PENDING" to a two-line **"Community photography" / "Awaiting approved media."** Governance metadata unchanged.

### 5. Governance-label presentation (dev mode)
New `src/lib/governance.ts` (`GOVERNANCE_DEBUG` via `NEXT_PUBLIC_GOVERNANCE_DEBUG=true` or a local const) and `src/components/ui/GovernanceLabel.tsx`.
- **Default (public preview):** quiet, editorial one-line note (e.g. "Sample · not a real event").
- **Debug on:** full `status · permission · review · locale · updated` metadata for internal review.
Content records keep **all** governance metadata; only on-screen prominence changes. The site-wide provisional banner and subtle notices remain — provisional status is never hidden. Wired into `EventCard`, `FeaturedEvent`, `WorkCard`.

### 6. Events composition
`src/app/page.tsx` + new `src/components/cards/FeaturedEvent.tsx`. Replaced three identical cards with **one featured** event (larger, editorial split with placeholder panel; spans 2 cols) + **two supporting** `EventCard`s stacked. Exact provisional sample data retained (no invented dates/locations). Status metadata secondary via `GovernanceLabel`. Improved CTA hierarchy and responsive stacking.

### 7. Gallery placeholder polish
`src/components/gallery/PlaceholderFrame.tsx`. Replaced the "generic mountains" art with **four rotating editorial treatments** (film-strip frame, archival corner marks, concentric geometric linework, layered photo-frame stack) selected by seed. Asymmetric masonry preserved. Explicit replacement points kept; label aligned to "Awaiting approved media." No fetching or fake photos.

### 8. Get Involved composition
`src/app/page.tsx`. Replaced four equal cards with a hierarchy: **Attend** as a featured navy panel + **Volunteer / Partner / Support** as supporting cards. All provisional text and the no-payment note preserved. Mobile stacks cleanly.

## Motion / accessibility / performance

Motion unchanged in character (Framer + CSS, reduced-motion honored). No raw `<img>`; all placeholder art is decorative inline SVG (`aria-hidden` where decorative, `role="img"` + label where representing pending media). Single `h1` preserved. Homepage First Load JS 135 kB (unchanged).

## Deferred

Automated axe/Lighthouse + Playwright E2E; real cross-browser verification; final palette contrast audit; inner-page parity. See `prototype-qa-audit.md`.
