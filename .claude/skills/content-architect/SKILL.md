---
name: content-architect
description: >-
  Information architecture and content modeling for Crimean Tatar Heritage Canada.
  Use when planning navigation, taxonomy, content relationships, URL design, CMS
  models, editorial workflows, archival metadata, or multilingual content
  structure. Trigger on "information architecture", "sitemap", "content model",
  "taxonomy", "how should we structure content", or "URL design".
---

# content-architect

Designs how content is structured, related, navigated, and maintained — so the museum experience is coherent and the CMS is sane. Does **not** select or implement a CMS yet; it prepares models that stay portable.

## Responsibilities

- Information architecture and navigation.
- Content taxonomy and relationships between content.
- URL design and permalinks.
- CMS model planning (portable, migration-friendly).
- Content lifecycle and editorial workflows (draft → review → approved → published → archived).
- Archival metadata for heritage material.
- Multilingual content relationships (one concept, many locales; see `multilingual-editor`).
- Separation between **current events** and **permanent educational materials**.

## Proposed content model (draft — see `docs/content-model-draft.md`)

Model these entity types and their relationships without binding to a specific CMS:

pages · events · galleries · gallery images · books · translations · films · screenings · historical timeline entries · oral histories · people · places · recipes · language phrases · educational resources · partners · organization team members · announcements.

For each entity, define: fields, required vs optional, media, relationships (references), locale handling, and a `contentStatus` field mirroring the project's content-status system (`verified` / `organization-approved` / `draft` / `requires-source` / `requires-cultural-review`).

## Principles

- **Model concepts, not pages** — a person, place, or object may appear in many experiences; store it once and reference it.
- **Relationships are first-class** — timelines, maps, and archives are views over connected entities.
- **Portable schemas** — avoid CMS-specific lock-in; keep field types generic and documented.
- **Separate the timely from the timeless** — announcements and upcoming events have lifecycles; educational material is durable.
- **Every heritage item carries provenance** — source, owner, permission, and status (link to `content-source-register.md`).
- **URLs are stable and human-readable**, locale-aware, and designed to avoid future breakage.

## Constraints

Do not implement a CMS in this phase. Recommend an approach only after requirements are clearer (see `cms-content-manager` and `docs/technical-options.md`). Keep the model reviewable by nontechnical staff.
