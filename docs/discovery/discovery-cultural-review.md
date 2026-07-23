# Cultural & Factual Safety Review — Discovery Package

> Review applying the **`crimean-tatar-cultural-reviewer`** and **`content-architect`** skills (the `content-historian` subagent's toolkit) to all Phase 1 discovery documents. Scope: `project-brief.md`, `organization-separation.md`, `information-architecture.md`, `content-source-register.md`, `content-model-draft.md`, and everything under `docs/discovery/` and `docs/decisions/`.
>
> Purpose is to catch unsupported claims, unclear terminology, generalizations, identity confusion, and items needing approval or sources **before** any of this informs website content. **No facts were invented to complete this review.**

## Overall assessment

The discovery package is **cautious and largely sound**: it consistently avoids asserting cultural or historical facts, uses `tbd`/placeholder cells instead of fabricated data, and repeatedly routes real content through permission, sourcing, and approval gates. The main risks are not false claims already present, but a few **terms and framings that must be verified with the organization before they ever reach the public site.**

## Findings

### 1. Unsupported historical claims
- **None asserted as fact in the discovery docs.** Placeholders (events, books, films, people, dates) are correctly left as `tbd`.
- **Flag (context references):** The **1944 deportation** and the term **"Sürgün"** appear as illustrative context in `organization-separation.md`, the `crimean-tatar-cultural-reviewer` skill, and the decision log. These are internal planning references, **not** published content. **Action:** any website use must carry a cited source and `requires-cultural-review`; verify the spelling/diacritics of "Sürgün" with the organization before public use. Status: `requires-source` + `requires-cultural-review` for publication.

### 2. Unclear or sensitive terminology
- **"Crimean Tatar(s)"** used consistently and correctly; **avoid the common misspelling "Tartar."** (Not present — keep it that way.)
- **"tamga"** used consistently as a protected symbol. Good. Confirm the organization's preferred description and usage rules before any depiction.
- **Crimean Tatar orthography** (Latin vs Cyrillic, diacritics) is **unconfirmed** — flagged in the questionnaire (J32) and asset list. Do not render Crimean Tatar words on the site until orthography and specific terms are confirmed.
- **"Canada Crimea Cultural Committee"** — treated correctly as an **unconfirmed** prior/related name, never asserted as fact. Keep as `requires-source` until the organization confirms.

### 3. Potential cultural generalizations
- **None found.** The documents actively warn against pan-regional ("Middle Eastern / Oriental / Turkish / Arab / Central Asian / Islamic") clichés and against inventing ornament. This guidance should be carried explicitly into the design phase.
- **Watch item:** feature ideas like "animated ornament" and "interactive tamga" carry cultural risk; the feature-prioritization doc already flags/deprioritizes them appropriately.

### 4. Identity confusion (CTHC vs CACT)
- **Well handled and consistent** across brief, IA, decisions, and the dedicated `organization-separation.md`. CTHC is cultural/educational; CACT is separate advocacy.
- **Open item (needs org decision):** the exact **treatment and wording** of any CACT reference/link is unresolved (questionnaire D). Until decided, do not draft public CACT-facing copy.

### 5. Content requiring organizational approval
- Confirmed/legal **name** and charitable status.
- **CACT reference wording.**
- **Tamga/logo artwork** and its usage rules.
- **All imagery** (esp. SRC-FB-01/02) — ownership, permission, captions, consent.
- **Any historical/cultural narrative copy**, especially sensitive periods.
- **Oral histories** — narrator consent and sensitivity.

### 6. Content requiring external sources
- The **"Who are the Crimean Tatars"** overview and all **History/Timeline** entries (every entry needs a citation).
- Any **cultural claims** about traditions, language, music, cuisine.
- **Media coverage** and **academic** references cited on the site.

## Terminology watchlist (verify with organization before public use)

| Term | Note |
| --- | --- |
| Crimean Tatar / Crimean Tatars | Correct form; never "Tartar". |
| tamga | Protected symbol; confirm description + usage rules. |
| Sürgün / 1944 deportation | Sensitive; source + confirm spelling before public use. |
| Qırım / Crimea place names | Confirm preferred spellings/transliteration. |
| Organization name(s) | Confirm legal + public name; "Canada Crimea Cultural Committee" unconfirmed. |

## Recommendation

**Proceed** with Phase 1 as documented. The discovery package is safe to share with the organization because it makes **no unverified factual claims**. Before **any** of this becomes website content, route it through: source verification → cultural review → organizational approval, using the content-status system. Do not populate the overview, history, galleries, or cultural sections with real content until those gates are passed.
