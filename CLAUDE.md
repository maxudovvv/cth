# CLAUDE.md — Crimean Tatar Heritage Canada

Operating guidance for Claude Code working in this repository. Read this before any significant work.

---

## Project mission

Build an exceptional cultural and educational digital platform for **Crimean Tatar Heritage Canada** — a museum-quality website that promotes awareness of Crimean Tatar history, culture, language, and heritage across Canada. The experience should feel like a living digital heritage museum: cinematic yet usable, warm, respectful, and genuinely educational for a broad Canadian and international audience.

Primary positioning: _Promoting awareness of Crimean Tatar history, culture, language, and heritage across Canada._
Supporting line: _Preserving the past. Celebrating the present. Inspiring the future._

Core content areas: culture and traditions, history, language preservation, educational resources, community cultural events across Canada, translation of books into English, translation and subtitling of films with screenings for English-speaking audiences, oral histories and community memories, and photography, music, cuisine, literature, art, and heritage preservation.

---

## Non-negotiable organizational distinction

**Crimean Tatar Heritage Canada** is a **cultural and educational** organization. Its site is focused on culture, heritage, history, language, education, books, films, translations, screenings, and community events.

The **Canadian Association of Crimean Tatars (CACT)** is a **separate** organization focused on human rights, political advocacy, engagement with the Parliament of Canada, protests and rallies, government relations, recognition of historical crimes, and public policy.

Rules:

- Never casually merge their branding, missions, voices, or content.
- The primary experience of this website must remain cultural, educational, welcoming, and suitable for broad audiences.
- Political and human-rights history may be referenced **where historically necessary**, framed as context and clearly separated from advocacy.
- Cross-linking to CACT is acceptable when done respectfully and clearly attributed, without implying shared identity. See `docs/organization-separation.md`.

---

## Design principles

- **Museum-quality** — treat every page as part of one coherent cultural experience, not a collection of unrelated sections.
- **Cinematic but usable** — atmosphere never obstructs access to content.
- **Warm and welcoming** — inviting to community members and newcomers alike.
- **Respectful** — of the culture, its history, and its people.
- **Culturally specific** — authentically Crimean Tatar, never a generic "Middle Eastern / Oriental / Turkish / Arab / Central Asian / Islamic" pastiche.
- **Accessible** — WCAG-conscious, keyboard-friendly, comfortable for older visitors.
- **Multilingual-ready** — English first; Crimean Tatar, and possibly French and Ukrainian, planned. No hardcoded UI copy.
- **Mobile-first** — designed for phones first, enhanced for larger screens.
- **Content-led** — design serves real content, not placeholder text.
- **Performant** — fast, progressive, respectful of slow connections and older devices.
- **Not** a generic nonprofit template. **Not** a generic AI-generated landing page.

---

## Cultural integrity

- Do not modify the **tamga** carelessly; treat it as a protected cultural asset.
- Do not invent cultural facts, quotations, dates, books, films, people, events, or translations.
- Do not use unrelated decorative patterns as stand-ins for Crimean Tatar ornament.
- Do not publish unverified historical claims as fact.
- Mark uncertain content with an explicit status (see below) and require organizational approval for sensitive or definitive cultural text.

### Content-status system (used across content and QA)

Every substantive historical or cultural claim carries one of:

- `verified` — checked against a credible cited source.
- `organization-approved` — signed off by an organization representative.
- `draft` — working text, not for publication.
- `requires-source` — asserts something that needs a citation before it can advance.
- `requires-cultural-review` — needs review by a knowledgeable cultural reviewer.

Nothing reaches production as fact while still `draft`, `requires-source`, or `requires-cultural-review`.

---

## Development principles

Unless the existing repository requires another stack, plan toward:

- **Next.js** (App Router) with **TypeScript** in **strict** mode and modern **React**.
- **Tailwind CSS** or an equally maintainable, tokenized styling approach.
- **GSAP** only where its sequencing or scroll control provides clear value; lightweight **CSS animation** everywhere else.
- A **structured CMS** selected only after documented evaluation (see `docs/technical-options.md`).
- **Playwright** for important end-to-end flows, plus appropriate component and unit tests.
- **Linting and formatting** enforced; **responsive image optimization** throughout.

Do not add dependencies without a documented reason. Prefer platform features and small, well-understood libraries.

---

## Workflow

Before major implementation:

1. **Inspect** the current state of the repo and relevant docs.
2. **Plan** the change in small, reviewable checkpoints.
3. **Identify risks** — technical, cultural, and content-permission risks.
4. **Confirm content dependencies** — is the required content `verified`/`organization-approved`, or still `draft`?
5. **Implement** in small checkpoints.
6. **Run verification** — typecheck, lint, tests, responsive and keyboard checks as applicable.
7. **Request independent QA review** (the `quality-auditor` subagent).
8. **Document unresolved issues** in the relevant doc or plan.

Use the specialized subagents for their domains: `design-lead`, `motion-engineer`, `content-historian`, `frontend-engineer`, and `quality-auditor`. Design and content should be reviewed **before** coding.

---

## Definition of done

A feature is **not** complete until:

- the implementation exists;
- TypeScript passes;
- lint passes;
- relevant tests pass;
- mobile behavior is checked;
- keyboard behavior is checked;
- reduced-motion behavior is considered;
- loading and error states are considered;
- content status is clear (no unverified claims presented as fact);
- no obvious console errors remain;
- documentation is updated when necessary.

Never claim a check passed without running it. Distinguish clearly between: `verified`, `not run`, `blocked`, `passed with warnings`, and `failed`.

---

## Current phase

**Phase 0 — Repository bootstrap.** The application is not implemented. Do not begin full page implementation. A minimal placeholder is permitted only if required to validate the environment. The next step is a structured **discovery** phase using real organization information, photographs, historical sources, branding assets, event materials, and stakeholder answers. See `docs/plans/bootstrap-and-discovery-plan.md`.
