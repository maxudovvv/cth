# Media Placement Plan

> Status: **provisional.** Maps the supplied media (in `public/media/pending/…`) to homepage placements for development. **All assets remain `permissionStatus: pending`** — they are NOT moved to `approved/`, and no permissions, identities, dates, or captions are treated as confirmed. Source of truth in code: `src/content/data/media.ts`.

## Source location

`public/media/pending/crimean_tatar_heritage_media/crimean_tatar_heritage_media/<category>/…jpg` (git-ignored; used provisionally in dev only). Base path constant: `MEDIA_BASE` in `src/content/data/media.ts`.

## Audit summary (dimensions, quality, duplicates)

| Category | Count | Usable (≥~900px) | Notes |
| --- | --- | --- | --- |
| community-events | 13 | 10 | Best public set. `731384989` (1536×2048) is hero-grade. Portraits 854–1080w, two landscapes (`729674488` 1066×711, `731379312` 853×569). Three are 206×206 thumbnails (**low-res, excluded**). |
| heritage-textiles | 9 | 0 | **All 206×206** low-res thumbnails. Usable only at small display sizes (≤~160px) as textile accents; not for large/hero use. |
| history-memory | 4 | 0 unique | Two 206×206 Sürgünlik graphics (small, sensitive). Two 1080×1350 files are **duplicates** of community-events (`702746399`, `702848138`). |
| official-archive | 4 | 3 | Conference/podium/advocacy-adjacent — **excluded from public homepage** per instructions. |

## Placements (provisional)

| Section | Asset(s) | Category | Why |
| --- | --- | --- | --- |
| Hero cinematic media (slot 1) | `731384989…n.jpg` (1536×2048) | community-events | Highest resolution; welcoming community/flag imagery |
| Community in Canada | `705968752…`, `702746399…`, `729674488…` (landscape) | community-events | Community life in Canada |
| Featured event/story | `702848138…` | community-events | Event-style portrait |
| Gallery preview (masonry) | `731093844…`, `729375652…`, `729375649…`, `731219726…`, `731379312…`, `705968752…` | community-events | Varied ratios for asymmetric gallery |
| A Living Heritage / textile band (slot 6) | 2–3 of `heritage-textiles/*` at **small** size | heritage-textiles | Embroidery/textile accents (low-res → small only) |
| History & Memory / Sürgünlik (slot 4) | `474983781…`, `486466952…` (small, contained) | history-memory | Memorial graphics, respectful small presentation after the cultural intro |
| About / life in Canada (inner, later) | remaining community-events | community-events | Reserved for About page |

## Intentionally excluded (public homepage)

- **All `official-archive/*`** (advocacy/conference/podium) — internal/advocacy archive only.
- **206×206 community-events** thumbnails `480499677…`, `49043458…`, `512634423…` — too low-res.
- **history-memory duplicates** `702746399…`, `702848138…` (identical to community-events) — use the community-events copies; avoid double-listing.
- Large use of `heritage-textiles/*` — kept small due to 206px resolution.

## Governance & handling

- Every entry in `media.ts` carries `ContentMeta` with `status:"provisional"`, `permissionStatus:"requires-permission"`, `reviewStatus:"requires-cultural-review"`.
- **No historical person is named.** History/Memory graphics are shown without identifying individuals.
- No advocacy/political posters, conferences, or podium speeches on the public homepage.
- Alt text is descriptive and neutral; captions state the pending status honestly.
- Replacement to approved media: once cleared, add the file to `public/media/approved/`, record it in the media manifest, and repoint the `media.ts` entry — no layout change needed.

## Repo hygiene notes (from audit)

- Duplicate archives present: `crimean_tatar_heritage_media.zip` (repo root, ~3 MB, untracked) and `public/media/pending/crimean_tatar_heritage_media.zip`. Recommend removing the zips from version control (kept for now; not committed).
- Nested folder duplication `crimean_tatar_heritage_media/crimean_tatar_heritage_media/` — referenced as-is via `MEDIA_BASE`; can be flattened later.
- `public/media/pending/**` is git-ignored, so pending media is never committed or shipped.
