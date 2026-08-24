# Provisional Content Policy

> Status: **active for the prototype.** Defines how provisional content is handled so it can never be mistaken for approved fact.

## Principle

The prototype exists to demonstrate structure, design, and experience — **not** to publish real cultural or organizational content. Every piece of substantive content is provisional until it passes source verification, cultural review, and organizational approval.

## What is provisional here

- All narrative copy (intro, section framing, page text).
- All sample events (clearly labeled, non-specific timeframes, no real dates).
- All films/books entries (placeholder labels, no real titles/authors/rights).
- All gallery items (placeholder frames, no real or social-media photos).
- The CACT distinction wording (awaiting stakeholder approval).
- Palette values, ornament, and the placeholder mark standing in for the tamga.

## Content-status system (in code)

Every content record carries `ContentMeta` (`src/content/types.ts`):

```
status: provisional | verified | organization-approved
      | requires-source | requires-permission | requires-cultural-review
source, permissionStatus, reviewStatus, locale, lastUpdated
```

Provisional/unapproved statuses must be visibly signalled in the UI (banner, status pills, provisional notes) and must not be presented as fact.

## Hard rules (do not violate)

- **Do not invent** organization facts, event dates, book/film titles, film rights, team members, quotations, partnerships, or historical claims.
- **Do not** present provisional copy as approved.
- **Do not** scrape or auto-download Facebook (or any social) content.
- **Do not** publish any historical claim without a cited source and, where sensitive, cultural review + organizational approval.
- Keep the cultural/educational identity distinct from CACT.

## Visible signalling in the UI

- A site-wide **prototype banner** (`ProvisionalBanner`).
- **Status pills** ("Provisional", "Placeholder", "Photo pending approval", "Content in preparation").
- **Provisional notes** under sections explaining what is placeholder and why.
- `robots: noindex` in metadata so the prototype is not indexed.

## Replacement points (where real content plugs in)

| Provisional item | Replace at | Requires |
| --- | --- | --- |
| Intro / page copy | `src/content/data/*`, page files | verified + approved copy |
| Sample events | `src/content/data/events.ts` | real events from org |
| Films/books | `src/content/data/films-books.ts` | real works + rights |
| Gallery photos | `public/media/approved/` + `PlaceholderFrame` swap to `next/image` | permission + captions + consent |
| Hero media frames | `src/components/home/HeroMedia.tsx` (large + archival frames) → `next/image` from `public/media/approved/` | permission + captions + consent; "awaiting approved media" caption removed on swap |
| CACT wording | `src/content/data/site.ts` (`cactNote`) | stakeholder approval |
| Palette values | `src/app/globals.css` | contrast test + approval |
| Fonts | `src/lib/fonts.ts` + layout + globals | networked env or self-hosted OFL files |
| Tamga | `src/components/ornament/TamgaPlaceholder.tsx` | approved artwork + usage rules |

## Promotion workflow

`provisional` → add source → `requires-cultural-review` → cultural review → `organization-approved` → publish. Nothing advances without evidence; see `content-source-register.md` and the `crimean-tatar-cultural-reviewer` skill.
