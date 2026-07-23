# Bootstrap & Discovery Plan — Crimean Tatar Heritage Canada

> Status: **active** — this is the staged roadmap. Phase 0 is complete on delivery of this bootstrap. Do **not** begin full page implementation before Phases 1–4 are addressed.

## Guiding rules

- Culture and education first; keep CTHC distinct from CACT at every phase.
- No fabricated cultural content; everything sourced and status-labeled.
- Accessible, mobile-first, multilingual-ready, performant, museum-quality.
- Small checkpoints, independent QA, honest reporting of what was and wasn't verified.

---

## Phase 0 — Repository bootstrap ✅ (this deliverable)

Establish the Claude Code operating system: skills, subagents, `CLAUDE.md`, documentation, a conservative hooks proposal, and validation. No website implementation.

**Exit criteria:** skills and agents present and valid; docs written; config validated; repo initialized. **Done when** validation passes and this plan is in place.

---

## Phase 1 — Discovery & content audit

Gather real inputs from the organization: organizational details and stakeholders; confirmed audiences; content sources and permissions (photos, films, books, oral histories, event materials, including the previously identified Facebook event materials — with explicit permission); logo, tamga artwork, and branding; language priorities; required launch features.

**Deliverables:** completed `project-brief.md` (assumptions confirmed), populated `content-source-register.md`, prioritized feature/content list.
**Exit criteria:** enough verified content and permissions to design a real MVP; branding assets in hand; CMS decision inputs known.

---

## Phase 2 — Information architecture

Finalize sitemap and MVP navigation; define user journeys; finalize the content model; set MVP scope.

**Deliverables:** confirmed `information-architecture.md`, confirmed `content-model-draft.md`, journey maps.
**Exit criteria:** agreed MVP scope and IA; content model reviewed by `content-historian`.

---

## Phase 3 — Visual direction

Moodboards, typography exploration, color exploration (turning palette **directions** into tested values), ornament system (authentic, verified), motion principles.

**Deliverables:** approved direction in `design-direction.md`; contrast-tested palette; type choices with full glyph coverage.
**Exit criteria:** organizational sign-off on visual direction; tamga/ornament usage approved.

---

## Phase 4 — Design system & prototypes

Design tokens (colors, type, spacing, motion), core components, a homepage prototype, and a mobile prototype.

**Deliverables:** token set, component inventory, homepage + mobile prototypes reviewed against `ui-ux-pro-max`.
**Exit criteria:** prototypes pass the interface-quality checklist and cultural review.

---

## Phase 5 — Foundation implementation

Scaffold the application: Next.js + strict TypeScript, Tailwind/tokens, base layout and navigation, localization plumbing, CMS foundation, linting/formatting, CI checks. Install dependencies only with documented reasons.

**Deliverables:** running app skeleton, localization wiring, CMS connected, CI green.
**Exit criteria:** typecheck/lint/build pass; base a11y and performance budgets wired.

---

## Phase 6 — Core pages

Implement MVP pages with real, approved content: Home, Our Heritage hub + initial sections, Events, Films & Books, About/Contact/Support.

**Deliverables:** MVP pages with `verified`/`organization-approved` content, responsive and accessible.
**Exit criteria:** each page meets the definition of done and passes `quality-auditor` review.

---

## Phase 7 — Cultural experiences

Build prioritized museum experiences (subset — not all at once): History Timeline, Digital Archive, Learn a Phrase, Gallery, Explore the Homeland (map), Films/screenings, Oral histories.

**Deliverables:** the agreed subset, each accessible (keyboard/screen-reader) and performant.
**Exit criteria:** experiences reviewed for accessibility, performance, and cultural accuracy.

---

## Phase 8 — QA & content approval

Full accessibility and performance audits, visual QA, cultural review, and organizational approval of all published content.

**Deliverables:** audit reports with per-check status; content-status sign-off; fixes applied.
**Exit criteria:** no `draft`/`requires-source`/`requires-cultural-review` content presented as fact; a11y/perf budgets met; `quality-auditor` recommends ship.

---

## Phase 9 — Launch

Deployment, analytics, SEO, redirects, monitoring, and editorial training for staff.

**Deliverables:** production deployment, analytics + monitoring, SEO/sitemap/redirects, editor runbook.
**Exit criteria:** site live, staff able to publish events/galleries, monitoring in place.

---

## Immediate next step after this bootstrap

Begin **Phase 1 — Discovery**: collect real organizational information, permissions, branding (logo/tamga), photographs, historical sources, and event materials, and confirm the assumptions in `project-brief.md`. Do not start implementation until MVP scope and visual direction (Phases 2–4) are agreed.
