# Crimean Tatar Heritage Canada

> Promoting awareness of Crimean Tatar history, culture, language, and heritage across Canada.
>
> _Preserving the past. Celebrating the present. Inspiring the future._

Crimean Tatar Heritage Canada is a **cultural and educational** organization. This repository holds the digital platform: a museum-quality website presenting Crimean Tatar culture, traditions, history, language preservation, educational resources, translated books and films, oral histories, and community cultural events across Canada.

## Status: Provisional MVP prototype (Phase 2–3)

Bootstrap (Phase 0) and discovery (Phase 1) are complete. A **provisional, local-only prototype** of the website now exists — a reversible implementation built ahead of full stakeholder answers to make the design and structure tangible.

**Everything in the prototype is provisional and NOT organization-approved.** Content, sample events, film/book entries, imagery, palette, fonts, and the tamga placeholder are all placeholders. The site is `noindex` and is not deployed. See [`docs/provisional-content-policy.md`](docs/provisional-content-policy.md) and [`docs/plans/provisional-mvp-implementation-plan.md`](docs/plans/provisional-mvp-implementation-plan.md).

### Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
# other scripts:
npm run build      # production build
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
```

Stack: Next.js 14 (App Router) · React 18 · TypeScript (strict) · Tailwind CSS 3.4 · Framer Motion · GSAP (reserved). No CMS, donations, or analytics yet. See [`docs/design-system.md`](docs/design-system.md).

> Note: intended web fonts (Fraunces + Inter, OFL) load via `next/font` in a networked environment; this repo ships with a system-font fallback and a documented swap-in (`src/lib/fonts.ts`).

See [`docs/plans/bootstrap-and-discovery-plan.md`](docs/plans/bootstrap-and-discovery-plan.md) for the full staged plan.

## Important: organizational separation

Crimean Tatar Heritage Canada is **distinct** from the **Canadian Association of Crimean Tatars (CACT)**, which focuses on human rights, political advocacy, and government relations. Do not merge their identities, branding, missions, or content. See [`docs/organization-separation.md`](docs/organization-separation.md).

## Repository map

```text
.
├── CLAUDE.md                     # Operating guidance for Claude Code in this repo
├── .claude/
│   ├── skills/                   # Project skills (see below)
│   └── agents/                   # Specialized subagents
├── docs/
│   ├── project-brief.md
│   ├── organization-separation.md
│   ├── design-direction.md
│   ├── information-architecture.md
│   ├── content-model-draft.md
│   ├── content-source-register.md
│   ├── accessibility-and-performance.md
│   ├── technical-options.md
│   └── plans/
│       └── bootstrap-and-discovery-plan.md
│   ├── design-system.md            # Provisional design tokens & rules
│   ├── provisional-content-policy.md
│   ├── media-workflow.md
│   ├── decisions/README.md         # Decision log
│   ├── discovery/                  # Phase 1 discovery package
│   └── plans/
├── src/
│   ├── app/                        # Routes (App Router)
│   ├── components/                 # Layout, UI, cards, forms, ornament, motion
│   ├── content/                    # Structured local content + governance types
│   └── lib/                        # Fonts (intended) & helpers
├── public/media/{approved,pending,placeholders}/
└── content/media-manifest.example.json
```

## Stack (prototype, installed)

Next.js 14 · TypeScript (strict) · React 18 · Tailwind CSS 3.4 · Framer Motion · GSAP (reserved for advanced motion). A CMS, donations, analytics, and Playwright E2E are planned but not yet added. See [`docs/technical-options.md`](docs/technical-options.md) and [`docs/plans/provisional-mvp-implementation-plan.md`](docs/plans/provisional-mvp-implementation-plan.md). No dependencies are added without a documented reason.

## Working with Claude Code here

Read [`CLAUDE.md`](CLAUDE.md) first. It defines the mission, the non-negotiable organizational distinction, design principles, cultural-integrity rules, and the definition of done. Skills in `.claude/skills/` and subagents in `.claude/agents/` encode the quality bar for design, motion, content, accessibility, and QA.
