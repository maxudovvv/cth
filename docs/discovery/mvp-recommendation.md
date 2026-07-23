# MVP Recommendation — Crimean Tatar Heritage Canada

> Status: **draft recommendation for stakeholder review.** Proposes a focused, achievable first launch. **No final technical stack or CMS is selected here** — the evidence is not yet sufficient (see `technical-options.md`). The recommendation is deliberately shaped around the reality that most content is not yet cleared (see `content-inventory.md`).

## Guiding idea

Launch a **small, credible, museum-quality first version** that clearly establishes the cultural/educational identity, presents whatever is genuinely ready, and gives visitors a way to engage — rather than a large site full of empty sections. Grow into the full digital heritage museum as content and permissions mature.

## Intended launch audience

Primary (proposed): **English-speaking Canadians new to the topic** and the **Crimean Tatar community** (younger and older). Final priority pending stakeholder answer (questionnaire E14). This split favors a clear introductory experience plus up-to-date events.

## Key objective

Establish a trustworthy, authentic home for Crimean Tatar Heritage Canada that (1) explains who the Crimean Tatars are and what the organization does, (2) surfaces current events and core programs (translated books, subtitled films/screenings), and (3) makes it easy to get in touch — all clearly distinct from CACT.

## Top user journeys (from `user-journeys.md`)

1. Understand who the Crimean Tatars are (Journey 1).
2. Find an upcoming event (Journey 4).
3. Contact the organization (Journey 11).
4. Learn what the organization does — books, films, screenings (Journeys 6–7).
5. Understand the CTHC/CACT distinction (Journey 12).

## Proposed navigation (MVP — 6 top-level items)

`Home` · `About` · `Heritage` · `Events` · `Films & Books` · `Get Involved` — plus `Contact` in the header/footer. (Analysis and rationale in `../information-architecture.md`.)

## Required pages

- **Home** — hero, one-paragraph "who we are", intro to the Crimean Tatars, featured event(s), links to programs, clear identity.
- **About** — mission, story, team (if ready), and the explicit CTHC/CACT distinction.
- **Heritage** — a hub with at least a "Who are the Crimean Tatars" overview; History/Language/Traditions sections added as content clears.
- **Events** — list of upcoming (and, later, past) events with detail pages.
- **Films & Books** — combined listings of subtitled films/screenings and translated books.
- **Get Involved / Support** — how to help (volunteer, partner, support), scaled to what's confirmed.
- **Contact** — details + form.
- Utility: privacy policy, 404, accessible footer.

## Required content (minimum to launch credibly)

- Approved **"Who are the Crimean Tatars"** overview (verified, cultural review passed).
- Confirmed **organization name**, mission, and CACT-distinction wording.
- At least a few **upcoming events** with dates/locations, **or** a clearly framed "events coming soon" state.
- Basic **films** and **books** entries (with rights confirmed) — or an honest "coming soon".
- **Contact details** and a monitored recipient inbox.
- At least one or two **cleared, high-quality images** for the hero and key pages.
- Ideally one fully **cleared event gallery** (permissions + captions + consent).

## Required forms

- **Contact form** (must have) → monitored inbox.
- **Screening / partnership request** (should have) → recipient + process.
- **Volunteer sign-up** (should have, if roles/recipient confirmed).
- **Newsletter sign-up** (could have, if a mailing tool exists).
- All forms: accessible, spam-protected, with confirmation and a privacy note.

## Essential animations (restrained)

- Gentle hero and section reveals (CSS-first), image fade-ins, hover/focus feedback.
- Subtle, authentic ornament accents (static or lightly animated), only if verified.
- Every animation ships with a `prefers-reduced-motion` fallback; content is readable before motion.

## Animations to postpone

Scroll-driven storytelling, parallax, interactive/animated tamga, animated map, elaborate timeline motion, permanent background motion. (See `feature-prioritization.md` and `motion-design-gsap`.)

## CMS requirements

Needed capabilities (selection deferred): easy **event** and **gallery** publishing for nontechnical staff; **draft → review → approved → published** workflow supporting the content-status system; structured **media metadata** (caption, credit, permission, alt text); **multilingual-ready** fields; portable/exportable data. Evaluate Sanity vs Payload vs alternatives against the stakeholder answers on volume, staffing, budget, and hosting (see `cms-content-manager`, `technical-options.md`). **Do not commit to a CMS in Phase 1.**

## Multilingual recommendation

Build **i18n-ready from day one** (no hardcoded UI copy, locale-aware routes), **launch in English**, and add the next language — Crimean Tatar, French, or Ukrainian per stakeholder priority — when reviewed translations exist. Keep culturally fixed Crimean Tatar terms untranslated with a short gloss. (See `multilingual-editor`.)

## Accessibility requirements (launch)

Target **WCAG 2.1 AA** on all MVP pages: semantic HTML, full keyboard access, visible focus, sufficient contrast, alt text, captions/transcripts for any media, reduced-motion support, comfortable type sizes and tap targets for older visitors. (See `../accessibility-and-performance.md`.)

## Performance requirements (launch)

Provisional Core Web Vitals on mid-range mobile: LCP < 2.5s, INP < 200ms, CLS < 0.1; responsive/lazy images; non-blocking fonts with correct glyph coverage; lean initial JS; content-first rendering. Confirm budgets in Phase 8.

## Content blockers (must resolve before/at build)

1. **Photo permissions** — SRC-FB-01/02 pending; galleries blocked until cleared, captioned, consented.
2. **Verified cultural/history copy** — needs writing + sourcing + cultural review.
3. **Real event data** — needed for a non-empty Events page.
4. **Film/book rights + data** — needed for Films & Books.
5. **Branding assets** — logo, tamga, colors, fonts (see `asset-request-list.md`).
6. **Organization name + charity status** — affects About, footer, and any donations.
7. **Monitored recipients** — for contact/screening/volunteer forms.

## Approval checkpoints

- **Content-status sign-off** — no `draft`/`requires-source`/`requires-cultural-review` item published as fact (`content-historian`).
- **Cultural review** — identity, terminology, symbols, and CACT distinction (`crimean-tatar-cultural-reviewer`).
- **Branding approval** — logo/tamga/colors approved by the organization before use.
- **UX review** — navigation, comprehension, older-user accessibility (`ui-ux-pro-max` / `design-lead`).
- **QA gate** — accessibility, performance, links, console, responsive (`quality-auditor`).
- **Organizational sign-off** — leadership approves scope, copy, and go-live.

## What this MVP is NOT

Not the full museum (map, oral-history archive, full timeline, music player, membership, search, donations-unless-ready). Those are Phase 7+ once content, permissions, and operations are in place.

## Recommendation summary

Ship a **six-section, English, i18n-ready** site centered on identity, events, core programs, and contact — gated by content clearance. Prioritize resolving the seven content blockers above; they, not the technology, determine how much of the MVP can launch.
