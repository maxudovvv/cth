# Decision Log — Crimean Tatar Heritage Canada

> Lightweight record of significant project decisions. Each entry has a **status**: **Proposed** (recommended, awaiting confirmation) · **Accepted** (confirmed) · **Rejected** · **Superseded** (replaced by a later decision, linked).
>
> This is Phase 1: most entries are **Proposed** and await stakeholder answers (`../discovery/stakeholder-questionnaire.md`). Do not treat Proposed items as settled. As decisions firm up, update the status and date, and add detail. Larger decisions may graduate to their own numbered ADR file in this folder.

| ID | Decision | Status | Date | Summary |
| --- | --- | --- | --- | --- |
| DEC-001 | Organization naming | Proposed | 2026-07-23 | Use "Crimean Tatar Heritage Canada" as the public working name; treat "Canada Crimea Cultural Committee" as an unconfirmed prior/related identity. |
| DEC-002 | CACT separation | Accepted | 2026-07-23 | Keep CTHC's cultural/educational identity clearly distinct from CACT; acknowledge/link only per agreed wording. |
| DEC-003 | Primary audience | Proposed | 2026-07-23 | Launch primarily for English-speaking newcomers + the community; final ranking pending stakeholder. |
| DEC-004 | Initial language | Proposed | 2026-07-23 | Build i18n-ready; launch in English; add next language when reviewed translations exist. |
| DEC-005 | MVP scope | Proposed | 2026-07-23 | Six-section, content-gated MVP (see `../discovery/mvp-recommendation.md`). |
| DEC-006 | CMS selection | Proposed (deferred) | 2026-07-23 | No CMS chosen yet; evaluate Sanity/Payload/alternatives after discovery. |
| DEC-007 | Hosting | Proposed (deferred) | 2026-07-23 | Undecided; likely decided alongside CMS (e.g. Vercel vs self-host). |
| DEC-008 | Donations | Proposed (deferred) | 2026-07-23 | Only if charitable status + platform + receipts confirmed; otherwise a "contact to support" placeholder. |
| DEC-009 | Analytics | Proposed | 2026-07-23 | Lean toward privacy-friendly analytics; confirm consent needs. |
| DEC-010 | Imagery permissions | Accepted (policy) | 2026-07-23 | No image published without owner, permission, captions, and consent for identifiable people; Facebook sources pending. |
| DEC-011 | Map usage | Proposed | 2026-07-23 | Interactive map deferred to Phase 7 (accessibility/performance cost). |
| DEC-012 | Historical sourcing | Accepted (policy) | 2026-07-23 | Every historical claim requires a cited source; sensitive periods require organizational approval; nothing unsourced published as fact. |
| DEC-013 | Prototype stack & version pinning | Accepted (provisional) | 2026-07-23 | Provisional MVP built on Next 14 / React 18 / Tailwind 3.4 (mature line) rather than latest majors, for build reliability; upgrade later. |
| DEC-014 | Prototype fonts | Accepted (provisional) | 2026-07-23 | Intended fonts Fraunces + Inter (OFL); offline build uses system-stack fallback with documented swap-in. |
| DEC-015 | No public deployment (prototype) | Accepted | 2026-07-23 | Prototype is local-only, `noindex`; no public/production deployment during discovery. |
| DEC-016 | Homepage motion via Framer/CSS (no GSAP yet) | Accepted (provisional) | 2026-07-23 | Homepage polish uses Framer Motion + CSS (incl. SVG `pathLength` draw); GSAP stays reserved — not added just to satisfy the tech choice. |
| DEC-017 | Add `secondary` button variant | Accepted | 2026-07-23 | Navy-optimized secondary CTA (API-additive) fixes low-contrast hero button; variants: solid/secondary/outline/ghost. |
| DEC-018 | Header two-state contrast | Accepted | 2026-07-23 | Header switches ivory-on-dark (over hero) ↔ navy-on-ivory (scrolled) for WCAG contrast; gold underline preserved. |
| DEC-019 | Governance debug display mode | Accepted | 2026-07-23 | `GOVERNANCE_DEBUG` flag: quiet editorial notes by default, full metadata when enabled; metadata never removed. |
| DEC-020 | Editorial placeholder art | Accepted (provisional) | 2026-07-23 | Hero/gallery placeholders use neutral film/archival/geometric treatments (no human silhouettes, no fake people/authenticity). |
| DEC-021 | Editorial Heritage design system | Accepted (provisional) | 2026-07-24 | Original system (structural inspiration only from WaPo DS / BBC GEL); restrained turquoise/gold/cream/graphite palette; serif display + sans body. |
| DEC-022 | Brand structure (public vs operator) | Accepted | 2026-07-24 | Public brand = Crimean Tatar Heritage Canada everywhere; footer says exactly "Operated by Canada Crimea Cultural Committee"; CACT separate. |
| DEC-023 | MediaSlot future-media architecture | Accepted | 2026-07-24 | Reusable image/video-ready slots (poster/desktop/mobile video/fallback/reduced-motion/alt); 8 reserved animation slots; photos as fallback, no grey boxes. |
| DEC-024 | Provisional use of supplied media | Accepted (provisional) | 2026-07-24 | Supplied pending media used in dev via next/image; kept in pending/ (not approved); official-archive excluded from public; low-res textiles/memory small only; no names. |
| DEC-025 | Content review-mode toggle | Accepted | 2026-07-24 | `NEXT_PUBLIC_CONTENT_REVIEW_MODE` hides per-item review labels in normal preview (one top banner remains); metadata retained in code. |
| DEC-026 | Media reclassification (community vs memory) | Accepted | 2026-07-24 | 702746399 (names a person) excluded everywhere; 702848138 ("Memories of Survivors") restricted to History; community sections use genuine community photos with intentional object-position. |
| DEC-027 | Header two deterministic states (no blur) | Accepted | 2026-07-24 | Hero = transparent/navy + cream text; scrolled = fully opaque cream + navy text; no backdrop blur / no content bleed. |

---

## Entry details

### DEC-001 — Organization naming — *Proposed*
Public working name: **Crimean Tatar Heritage Canada**. "Canada Crimea Cultural Committee" is treated as a historical/related identity **requiring confirmation**; it is not assumed to be the legal or public name. **Needs:** confirmed legal name, public name, and charity/registration number (questionnaire A/B).

### DEC-002 — CACT separation — *Accepted*
CTHC is cultural/educational; **CACT** is a separate advocacy/human-rights organization. The site keeps identities distinct and does not let advocacy dominate. Cross-linking is permitted only with agreed wording. Rationale and rules: `../organization-separation.md`. **Open:** exact treatment/wording of any CACT reference (questionnaire D).

### DEC-003 — Primary audience — *Proposed*
Working priority: English-speaking Canadians new to the topic **and** the Crimean Tatar community (younger + older). **Needs:** stakeholder ranking (questionnaire E14), which will shape homepage/nav emphasis.

### DEC-004 — Initial language — *Proposed*
Launch English-only but **i18n-ready** (no hardcoded copy, locale-aware routes). Next language (Crimean Tatar / French / Ukrainian) added when reviewed translations exist. See `../../.claude/skills/multilingual-editor/SKILL.md`.

### DEC-005 — MVP scope — *Proposed*
Six primary sections (Home, About, Heritage, Events, Films & Books, Get Involved) + Contact; content-gated. Full detail: `../discovery/mvp-recommendation.md`; IA: `../information-architecture.md`.

### DEC-006 — CMS selection — *Proposed (deferred)*
No CMS chosen. Evaluate Sanity vs Payload vs alternatives against volume, staffing, budget, hosting, and data-ownership after discovery. See `../technical-options.md`, `../../.claude/skills/cms-content-manager/SKILL.md`. **Do not commit in Phase 1.**

### DEC-007 — Hosting — *Proposed (deferred)*
Decide with the CMS. Options include Vercel (first-class Next.js) vs self-hosting. **Needs:** budget and ops capacity.

### DEC-008 — Donations — *Proposed (deferred)*
Enable donations only if **charitable status + platform + tax-receipt handling** are confirmed (e.g. CanadaHelps/Stripe/PayPal). Keep clearly within CTHC identity, not political fundraising. Otherwise ship a simple "support/contact" placeholder.

### DEC-009 — Analytics — *Proposed*
Prefer privacy-friendly analytics (Plausible/Fathom/Umami) over heavier trackers for a community audience; confirm consent/privacy requirements and add a privacy policy.

### DEC-010 — Imagery permissions — *Accepted (policy)*
No image is published without: confirmed owner, publication permission, captions/dates, and consent for identifiable people. Facebook sources SRC-FB-01/02 are **pending** and unapproved. See `../content-source-register.md`.

### DEC-011 — Map usage — *Proposed*
An interactive "Explore the Homeland" map is **deferred to Phase 7** due to accessibility and performance cost; a static, accessible alternative may be used earlier if needed.

### DEC-012 — Historical sourcing — *Accepted (policy)*
Every substantive historical/cultural claim carries a content status and, to be published as fact, a credible cited source. Sensitive history (e.g. the 1944 deportation) is contextual, sourced, `requires-cultural-review`, and needs organizational approval. See `../../.claude/skills/crimean-tatar-cultural-reviewer/SKILL.md`.

---

### DEC-013 — Prototype stack & version pinning — *Accepted (provisional)*
Built on Next.js 14 / React 18 / Tailwind 3.4 / Framer Motion 11 / GSAP 3. Latest majors (Next 16 / React 19 / Tailwind 4) were available but intentionally not used, to keep the prototype build predictable and correct during discovery. Upgrading is a documented future step. See `../plans/provisional-mvp-implementation-plan.md`.

### DEC-014 — Prototype fonts — *Accepted (provisional)*
Intended typefaces are Fraunces (display) + Inter (body), both SIL OFL. The offline build environment cannot fetch Google Fonts, so the prototype uses system-font stacks with an exact `next/font` swap-in documented in `src/lib/fonts.ts` and `../design-system.md`. No font files are committed.

### DEC-015 — No public deployment (prototype) — *Accepted*
The prototype is local-only and marked `noindex`. No public or production deployment occurs during discovery; go-live follows QA and organizational approval.

### DEC-016 — Homepage motion via Framer Motion + CSS (GSAP reserved) — *Accepted (provisional)*
The homepage polish uses Framer Motion (staggered entrance, media reveal, SVG `pathLength` ornament draw) and CSS (depth textures, scroll-indicator nudge). GSAP remains installed but unused, per the instruction not to add it merely to satisfy the technology choice; it is reserved for a genuinely advanced future narrative/SVG sequence. See `../plans/homepage-premium-polish-plan.md`.

### DEC-017 — Add `secondary` button variant — *Accepted*
Added a navy-optimized `secondary` variant to `ButtonLink` (soft-gold border + ivory text, fills on hover) to fix the low-contrast hero "See events" CTA. Additive to the existing API (solid/outline/ghost retained). See `../design-system.md`.

### DEC-018 — Header two-state contrast — *Accepted*
The sticky header adopts light (ivory) logo/nav while over the dark hero/page-header and switches to a warm ivory bar with navy text after scroll (or when the mobile menu is open). Fixes dark-on-dark text from the browser review; preserves the active gold underline and visible focus. See `homepage-browser-review-fixes.md`.

### DEC-019 — Governance debug display mode — *Accepted*
Added `GOVERNANCE_DEBUG` (`NEXT_PUBLIC_GOVERNANCE_DEBUG` or local const) and `GovernanceLabel`. Public preview shows quiet editorial notices; debug shows full provisional/source/permission/review metadata. Metadata is retained in all content records and the provisional banner remains — provisional status is never hidden.

### DEC-020 — Editorial placeholder art — *Accepted (provisional)*
Hero and gallery placeholders use culturally neutral editorial treatments (film-frame, archival marks, geometric linework, layered frames) instead of a human silhouette (which read as a profile/avatar) or generic scenery. No fake people; no authenticity claim. Replacement points to approved `next/image` media unchanged.

### DEC-021 — Editorial Heritage design system — *Accepted (provisional)*
Adopted an original "Editorial Heritage" system, taking **structural** inspiration only (hierarchy, type scale, layout discipline, a11y, motion) from large publication design systems — no branding/logos/type/layout/source copied. Restrained palette (Crimean Tatar turquoise, warm gold, warm cream, deep graphite, muted archival neutrals); serif display for select headings/quotes, sans for UI/body. See `../editorial-heritage-design-system.md`.

### DEC-022 — Brand structure (public brand vs operator) — *Accepted*
Public-facing brand is **Crimean Tatar Heritage Canada** in header, nav, hero, metadata, titles, content, and social previews. The operating organization appears only as the footer line **"Operated by Canada Crimea Cultural Committee"** on every page. CACT remains a separate advocacy organization. The site is never renamed to the committee.

### DEC-023 — MediaSlot future-media architecture — *Accepted*
Introduced `MediaSlot` + `MediaSlotConfig` (`mediaType`, `futureAnimationSlot`, `posterSrc`, `desktopVideoSrc`, `mobileVideoSrc`, `fallbackImageSrc`, `reducedMotionImageSrc`, `mobileImageSrc`, `alt`, `decorativeSvg`, `priority`, `meta`). Renders supplied photos today; video-ready (muted/looped/playsInline, no audio autoplay) later. Eight reserved animation slots. No grey placeholders. See `../motion-and-future-media-slots.md`.

### DEC-024 — Provisional use of supplied media — *Accepted (provisional)*
Supplied media (in `public/media/pending/`, git-ignored) used provisionally via `next/image`; NOT moved to `approved/`. Every asset `permissionStatus: requires-permission`. `official-archive` (advocacy/conference) excluded from the public homepage; low-res textiles/history-memory (206px) used small only; no individuals named. See `../media-placement-plan.md`.

## Adding a decision

Append a row to the table and a details subsection. Use a new `DEC-0NN` id, set the status, date it, and link related docs. When a decision changes, mark the old one **Superseded** and reference the replacement rather than deleting history.
