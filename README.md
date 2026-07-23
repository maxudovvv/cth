# Crimean Tatar Heritage Canada

> Promoting awareness of Crimean Tatar history, culture, language, and heritage across Canada.
>
> _Preserving the past. Celebrating the present. Inspiring the future._

Crimean Tatar Heritage Canada is a **cultural and educational** organization. This repository holds the digital platform: a museum-quality website presenting Crimean Tatar culture, traditions, history, language preservation, educational resources, translated books and films, oral histories, and community cultural events across Canada.

## Status: Bootstrap phase (Phase 0)

The application has **not** been implemented yet. This repository currently contains the Claude Code operating system — skills, subagents, guidance, and planning documentation — that will govern how the site is built. Full page implementation begins only after a structured discovery phase using real organizational information, sources, and branding assets.

See [`docs/plans/bootstrap-and-discovery-plan.md`](docs/plans/bootstrap-and-discovery-plan.md) for the staged plan.

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
├── public/                       # Static assets (populated later)
└── src/                          # Application source (populated in Phase 5)
```

## Planned stack (not yet installed)

Next.js · TypeScript (strict) · modern React · Tailwind CSS · GSAP (where justified) · a CMS selected after evaluation · Playwright for key flows. See [`docs/technical-options.md`](docs/technical-options.md). No dependencies are added without a documented reason.

## Working with Claude Code here

Read [`CLAUDE.md`](CLAUDE.md) first. It defines the mission, the non-negotiable organizational distinction, design principles, cultural-integrity rules, and the definition of done. Skills in `.claude/skills/` and subagents in `.claude/agents/` encode the quality bar for design, motion, content, accessibility, and QA.
