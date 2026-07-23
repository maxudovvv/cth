# Content Source Register — Crimean Tatar Heritage Canada

> Status: **Phase 1 — two sources identified, none approved.** Two Facebook pages are now recorded as **pending** inputs (see below); no content has been accessed, downloaded, or cleared. Continue populating with real materials, provenance, and permissions. **Do not scrape, download, copy, or publish social-media content** unless access and permission are explicitly granted by the organization.

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

## Identified sources — pending (do NOT scrape, download, copy, or publish)

Two Facebook sources have been identified by the organization. They are recorded here as **pending** inputs only. No content from them has been accessed, downloaded, or approved. Each requires access, ownership confirmation, publication permission, captions, dates, event identification, names/consent where appropriate, and image-quality review before anything can be used.

| Source ID | Title | Source type | Original location | Owner | Permission status | Verification status | Organization approval | Website usage status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SRC-FB-01 | Facebook page — current cultural events & gallery materials | photo/video/text (mixed) | `https://www.facebook.com/share/1JQZLavpDo/?mibextid=wwXIfr` | Unconfirmed (assumed org-managed) | pending access · pending ownership confirmation · pending publication permission | requires-cultural-review | pending | not-used — **not approved for website use** |
| SRC-FB-02 | Facebook page — older cultural materials & organization posts | photo/video/text (mixed) | `https://www.facebook.com/share/1CsKrtKMaz/?mibextid=wwXIfr` | Unconfirmed (assumed org-managed) | pending access · pending ownership confirmation · pending publication permission | requires-cultural-review | pending | not-used — **not approved for website use** |

**May contain (per organization):** cultural event photography, community gatherings, food, traditional clothing, music, dance, film screenings, educational activities, and older organization posts.

**Required before any use of either source (per item, not per page):**

- [ ] Access confirmed (organization provides materials directly — do not scrape).
- [ ] Ownership / rights holder confirmed for each item (posts may include third-party or member photos).
- [ ] Explicit publication permission for website use.
- [ ] Captions written and verified.
- [ ] Dates confirmed.
- [ ] Event identification.
- [ ] Names of people shown and their consent where appropriate.
- [ ] Image-quality review (resolution, crop, suitability).
- [ ] Cultural/factual review (`content-historian`) and organization approval.

> Handling note: These are social-media pages. Content there may be posted by multiple people and may include copyrighted or third-party material. Treat every item as `requires-cultural-review` and unapproved until the checklist above is complete. Prefer receiving original files from the organization over anything taken from the pages.

## Future source categories (to be populated during discovery)

Structured buckets for sources expected later. No entries yet; do not fabricate. Each future item follows the field definitions and handling rules above.

| Category | Typical source type | Default status | Notes |
| --- | --- | --- | --- |
| Organization-owned photography | photo/video | pending permission | Highest-trust source; still needs captions, dates, consent for people shown. |
| Community-contributed photography | photo/video | pending permission + consent | Requires explicit contributor permission and consent for identifiable people. |
| Historical archives | photo · document · artwork | requires-source | Confirm rights/public-domain status; cite the archive. |
| Books | book · cover art | pending permission | Confirm author/publisher rights for covers, excerpts, translations. |
| Films | film · poster · trailer · subtitles | pending permission | Confirm distribution/subtitling rights before embedding or screening. |
| Government records | document · dataset | verify licence | Check open-data/Crown-copyright terms per record. |
| Academic publications | document · quotation | requires-source | Cite properly; respect copyright; quote within fair-dealing limits. |
| Oral histories | audio · video · transcript | pending consent | Narrator consent and sensitivity review mandatory. |
| Partner organizations | logo · photo · text | pending permission | Use partner assets only with permission; represent CACT per `organization-separation.md`. |
| Media coverage | article · clip | requires-source + permission | Link/cite; do not republish full articles without permission. |

## Handling rules

- No item advances past `draft` without an owner and a permission status of `granted`, `public-domain`, or `licensed`.
- Living individuals shown or quoted require consent; note it in "People shown".
- Sensitive/political/historical-trauma material is `requires-cultural-review` and needs organization approval.
- Historical claims require at least one credible cited source before `verified`.
- Never fabricate a source, date, quotation, or attribution to fill a field. Use `unknown` or leave blank and mark status accordingly.
