# Information Architecture — Crimean Tatar Heritage Canada

> Status: **draft** — proposed structure for discussion. Final IA depends on Phase 1 discovery (content availability, audience priorities, feature scope).

## Full proposed sitemap (candidate — likely too large for launch)

- **Home**
- **Our Heritage** (overview hub)
  - History
  - Language
  - Traditions
  - Arts and Music
  - Food and Cuisine
- **Books and Translations**
- **Films and Screenings**
- **Events** (cultural events across Canada)
- **Gallery**
- **Community Stories** (oral histories and memories)
- **Educational Resources**
- **About**
- **Support Our Work**
- **Contact**

## Assessment: is this too large?

Yes — as a **launch** navigation, ~16 top-level destinations is too many. It creates a wide, shallow structure, strains mobile navigation, and demands more finished, sourced content than will exist at launch. The recommendation is to launch with a focused MVP and grow into the full structure as content and permissions mature.

## Recommended MVP navigation (launch)

Keep top-level items to roughly 5–6, grouping the rest under a heritage hub:

1. **Home**
2. **Our Heritage** — hub linking to History, Language, Traditions, Arts & Music, Food & Cuisine (each a section that can start small and deepen).
3. **Events** — the most frequently updated area; high value for the community.
4. **Films & Books** — combined at launch (translations, subtitled films, screenings), split later if volume warrants.
5. **About** — mission, team, and the CTHC/CACT distinction; include Contact and Support here or adjacent.
6. **Support / Get Involved** — donate, volunteer, partner (scope depends on discovery).

Gallery, Community Stories (oral histories), Educational Resources, and a full Digital Archive are **Phase 7** expansions surfaced within Our Heritage until they justify their own top-level slots.

## Later expansion structure

As content grows, promote sections to top-level and add museum experiences:

- Promote **Gallery**, **Community Stories**, **Educational Resources** to primary nav.
- Add museum experiences: **History Timeline**, **Explore the Homeland** (map), **Learn a Crimean Tatar Phrase**, **Music and Dance**, **Digital Archive** (see `museum-experience-designer`).
- Split **Films & Screenings** from **Books & Translations** when each has enough depth.

## Navigation principles

- Mobile-first navigation; language switcher always reachable and clearly labeled.
- Separate **timely** content (events, announcements) from **timeless** educational material (see `content-architect`).
- Wayfinding: every page communicates where you are, why it matters, and the next useful action.
- Locale-aware routes (e.g. `/en/...`, later `/crh/...`); stable, human-readable, non-breaking URLs.

## Draft URL patterns (illustrative)

```text
/                         Home
/heritage                 Our Heritage hub
/heritage/history
/heritage/language
/heritage/traditions
/heritage/arts-music
/heritage/food
/events                   Events index
/events/{slug}            Event detail
/films-books              Films & Books hub
/films-books/films/{slug}
/films-books/books/{slug}
/gallery                  (expansion)
/stories                  Community Stories (expansion)
/resources                Educational Resources (expansion)
/about
/support
/contact
```

Locale prefix added per `multilingual-editor`. Final slugs confirmed with content and SEO review.

## User journeys to design (Phase 2)

- A community member checking upcoming events near them.
- A teacher/student seeking educational resources or a history overview.
- A newcomer exploring "what is Crimean Tatar culture" from the Home/Heritage hub.
- A film audience member finding a screening or a subtitled film.
- A potential donor/volunteer/partner deciding how to support the work.
