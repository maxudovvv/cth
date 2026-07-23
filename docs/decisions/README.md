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

## Adding a decision

Append a row to the table and a details subsection. Use a new `DEC-0NN` id, set the status, date it, and link related docs. When a decision changes, mark the old one **Superseded** and reference the replacement rather than deleting history.
