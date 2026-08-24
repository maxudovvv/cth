# Media Workflow

> Status: **active for the prototype.** How images and other media move from arrival to (eventual) publication, and how approved Facebook photographs can be added later — manually, with permission.

## Folders

```
public/media/
├── approved/      ← cleared, production-eligible media ONLY (tracked in git)
├── pending/       ← under review; NOT production-eligible (git-ignored)
└── placeholders/  ← neutral, non-photographic prototype assets (tracked)
content/
├── media-manifest.example.json   ← template (tracked)
└── media-manifest.json           ← real manifest (git-ignored; may hold PII)
```

## Rules

1. **Only `approved/` is production-eligible.** The app must read images only from `public/media/approved/`. `pending/` is git-ignored (except its README) and must never be displayed.
2. **Every approved item has a manifest entry** with `publicationStatus: "approved"` and complete provenance (owner, permission, caption, consent, date, cultural-review).
3. **No scraping.** Do not scrape, auto-download, or hotlink Facebook or any social media. The prototype fetches nothing external; `next.config.mjs` has no remote image hosts.
4. **Consent for people shown** is required before an image of identifiable individuals is approved.
5. **Placeholders are not photos** and must be replaced before real launch.

## Media manifest fields

`filePath · title · description · sourceUrl · photographer · event · date · peopleShown · copyrightOwner · permissionStatus · captionStatus · culturalReviewStatus · intendedPage · publicationStatus`. See `content/media-manifest.example.json`.

## Adding approved Facebook photographs later (manual, permission-first)

The two identified Facebook sources (`SRC-FB-01`, `SRC-FB-02` in `content-source-register.md`) are **pending** and must not be scraped. When the organization is ready:

1. **Confirm ownership & permission** for each specific photo (not the page as a whole). Get consent for identifiable people.
2. **Obtain originals** directly from the organization (highest-resolution files), not downloads from the page.
3. Place each original in `public/media/pending/` while it is reviewed.
4. Add a manifest row with `permissionStatus`, `captionStatus`, `culturalReviewStatus`, etc.; write a caption, confirm the date and event, credit the photographer.
5. Run **cultural review** and get **organizational approval**.
6. On approval, move the file to `public/media/approved/`, set `publicationStatus: "approved"`, and reference it from content (swap a `PlaceholderFrame` for a `next/image`).
7. Optimize: correct dimensions, modern formats, descriptive alt text.

At no point is any of this automated from Facebook. Every step is a deliberate, permission-checked, manual action.

## Swapping a placeholder for a real image (code)

In `src/components/gallery/PlaceholderFrame.tsx`, the placeholder art is where a `next/image` `<Image src="/media/approved/…" ... />` is introduced once an approved file + manifest entry exist. Keep the caption/credit/date visible.
