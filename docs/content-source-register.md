# Content Source Register — Crimean Tatar Heritage Canada

> Status: **draft template** — no real sources catalogued yet. Populate during Phase 1 discovery with real materials, provenance, and permissions. **Do not scrape or download social-media content during bootstrap** unless access and permission are explicitly available.

Every photograph, film, book, quotation, and historical claim used on the site must have a row here before it can move beyond `draft`. This register is the single source of truth for provenance, permissions, and content status.

## Field definitions

| Field | Meaning |
| --- | --- |
| Source ID | Unique ID (e.g. `SRC-0001`). |
| Title | Name/description of the item. |
| Source type | photo · film · book · document · audio · oral-history · artwork · quotation · dataset · other. |
| Original location | Where it comes from (archive, family collection, publication, URL, etc.). |
| Owner | Rights holder / who controls it. |
| Permission status | none · requested · granted · denied · public-domain · licensed (note license). |
| Date | Date of the item (or "unknown"). |
| Language | Language of the item. |
| Historical period | Era/period depicted or covered. |
| Cultural category | e.g. history · language · music · cuisine · art · events · people · places. |
| Related event | Link to an event entity, if applicable. |
| People shown | Named individuals (note consent for living people). |
| Caption status | none · draft · verified · translated. |
| Translation status | n/a · needed · in-progress · complete · reviewed. |
| Verification status | `verified` · `requires-source` · `requires-cultural-review` · `draft`. |
| Organization approval | pending · approved · rejected · not-required. |
| Website usage status | not-used · proposed · approved-for-use · published · retired. |

## Register (empty — to be populated)

| Source ID | Title | Source type | Original location | Owner | Permission status | Date | Language | Historical period | Cultural category | Related event | People shown | Caption status | Translation status | Verification status | Organization approval | Website usage status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| _(none yet)_ | | | | | | | | | | | | | | | | |

## Placeholders — known future sources

These are flagged as expected inputs; **not** collected or approved yet. Do not download without explicit access and permission.

| Source ID | Title | Source type | Permission status | Notes |
| --- | --- | --- | --- | --- |
| SRC-FB-EVENTS | Facebook cultural-event materials previously identified by the organization | photo/video/text | none (not requested) | Organization identified these; obtain explicit permission and export rights before any use. Do not scrape. Confirm rights holders for each item and consent for people shown. |

## Handling rules

- No item advances past `draft` without an owner and a permission status of `granted`, `public-domain`, or `licensed`.
- Living individuals shown or quoted require consent; note it in "People shown".
- Sensitive/political/historical-trauma material is `requires-cultural-review` and needs organization approval.
- Historical claims require at least one credible cited source before `verified`.
- Never fabricate a source, date, quotation, or attribution to fill a field. Use `unknown` or leave blank and mark status accordingly.
