---
name: cms-content-manager
description: >-
  CMS evaluation and editorial-workflow planning for Crimean Tatar Heritage Canada.
  Use when assessing CMS options, designing publishing workflows for nontechnical
  staff, planning drafts/review, multilingual content, structured media metadata,
  or migration-friendly schemas. Trigger on "which CMS", "content management",
  "editorial workflow", "publishing", "Sanity/Payload", or "how will staff update content".
---

# cms-content-manager

Plans how nontechnical staff will create, review, and publish content — and evaluates CMS options against real needs. Does **not** pick a final CMS without documenting trade-offs.

## Responsibilities

- Assess suitable CMS options against this project's needs.
- Prioritize **simple editorial workflows** for nontechnical staff.
- Make **event and gallery publishing** easy (the most frequent tasks).
- Support **drafts and review** before publishing.
- Support **multilingual content** (aligned with `multilingual-editor`).
- Support **structured media metadata** (credits, permissions, captions, alt text).
- Avoid unnecessary operational complexity and cost.
- Prepare **migration-friendly schemas** (portable, exportable).
- Document **image requirements** (dimensions, formats, aspect ratios, weight, alt/credit fields).

## Evaluation criteria

Ease for nontechnical editors · quality of draft/preview/review workflow · native multilingual support · structured media and metadata · roles/permissions and approval gates (supports the content-status system) · hosting model and cost · data portability and export · developer ergonomics with Next.js · long-term maintenance burden · community/support longevity.

## Candidate options (compare, do not pre-select)

- **Sanity** — flexible structured content, strong real-time editing, GROQ; hosted dataset.
- **Payload** — self-hosted/TypeScript-native, own your database, good access control.
- **Other modern options** — evaluate as needed (e.g. headless alternatives) if a clear advantage emerges.

Document trade-offs in `docs/technical-options.md` before recommending. Selection happens only after Phase 1 discovery clarifies volume, staff capacity, budget, and hosting constraints.

## Editorial workflow (target)

Draft → cultural/historical review (`crimean-tatar-cultural-reviewer`) → organization approval → publish → archive. Every content item exposes a `contentStatus` field and required provenance metadata (see `content-source-register.md`). Editors should be able to publish an event or gallery with minimal steps while still passing required review gates.

## Constraint

No CMS is installed or committed to in this phase. The deliverable now is a documented comparison and a workflow design, not an implementation.
