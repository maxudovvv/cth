# Information Architecture — Crimean Tatar Heritage Canada

> Status: **Phase 1 — analyzed and refined.** Proposes two levels: a focused **MVP** and a **future expansion**. Reflects confirmed organizational focus and the reality that most content is not yet cleared (see `discovery/content-inventory.md`, `discovery/mvp-recommendation.md`). Final IA is subject to stakeholder answers (audience priority, content readiness).

## Design goals for the IA

- Establish a clearly **cultural/educational** identity, distinct from CACT.
- Keep the launch **small and full**, not large and empty — every top-level section must have real content on day one.
- Serve a range of ages and tech comfort: shallow depth, plain labels, mobile-first, obvious wayfinding.
- Separate **timely** content (events) from **timeless** content (heritage).
- Be **i18n-ready** (locale-aware routes; English at launch).

---

## The originally suggested MVP list — critique

A candidate list was proposed: **Home · About · Heritage · History · Events · Films and Books · Gallery · Support/Get Involved · Contact** (9 items). Analysis:

- **Too many top-level items (9)** for a first launch, especially on mobile, and several would launch **empty**.
- **History as its own top-level item is premature.** History content is heavily source-dependent and cultural-review-gated (see `user-journeys.md` J2). It belongs **inside Heritage** until it's substantial, then can graduate.
- **Gallery as top-level is risky.** Its content (SRC-FB-01/02) is **pending permission** — a top-level "Gallery" that's empty or thin undercuts credibility. Nest it (within Events/Heritage) or defer until at least one album is fully cleared.
- **Contact** doesn't need a primary-nav slot; it belongs in the **header/utility area and footer**, always reachable.
- Everything else (Home, About, Heritage, Events, Films & Books, Support/Get Involved) is sound.

**Conclusion:** trim to **6 primary items**, nest History and Gallery under hubs, and place Contact in the header/footer. This keeps the nav within the 6–8 target while avoiding empty sections.

---

## Recommended MVP structure (6 primary items + utility)

| # | Nav item | Purpose | Content readiness |
| --- | --- | --- | --- |
| 1 | **Home** | Identity, orientation, featured event, entry to programs | Needs hero image + approved intro copy |
| 2 | **About** | Mission, story, team, **explicit CTHC/CACT distinction** | Needs name/mission + CACT wording |
| 3 | **Heritage** | Hub: "Who are the Crimean Tatars" + History, Language, Traditions, Food, Arts & Music (added as they clear) | Needs at least the overview (sourced, reviewed) |
| 4 | **Events** | Upcoming (and later past) cultural events + screenings | Needs real event data |
| 5 | **Films & Books** | Subtitled films/screenings + translated books | Needs titles + rights |
| 6 | **Get Involved** | Volunteer, partner, support (+ donate if charity status confirmed) | Scales to what's confirmed |
| — | **Contact** | Details + form (header/utility + footer, not primary nav) | Needs monitored recipient |

**Nested at launch (not top-level):** History, Language, Traditions, Food, Arts & Music live **within Heritage**; a **Gallery** lives within Events/Heritage and only appears once an album is cleared. Utility pages: privacy policy, 404, accessible footer with contact + social links.

### Draft MVP URL patterns (locale-prefixed, e.g. `/en/...`)

```text
/                         Home
/about                    About (incl. CACT distinction)
/heritage                 Heritage hub
/heritage/who-we-are      Who are the Crimean Tatars (overview)
/heritage/history         History (starts as a sourced summary)
/heritage/language        Language (as content clears)
/heritage/traditions      Traditions (as content clears)
/events                   Events index
/events/{slug}            Event detail
/events/{slug}/gallery    Event gallery (only when cleared)
/films-books              Films & Books hub
/films-books/films/{slug} Film detail (+ screenings)
/films-books/books/{slug} Book detail
/get-involved             Volunteer / partner / support
/contact                  Contact (also in header/footer)
/privacy                  Privacy policy
```

Slugs and locale strategy confirmed with SEO and `multilingual-editor` before build.

---

## Future expansion structure (the full digital heritage museum)

As content, permissions, and staffing mature (Phase 7+), promote and add:

- **Graduate to top-level:** History (when rich), Gallery (when albums are cleared), Community Stories (oral histories), Educational Resources.
- **Add museum experiences:** History **Timeline**, **Explore the Homeland** (interactive map), **Learn a Crimean Tatar Phrase**, **Music & Dance**, **Cuisine/Recipe archive**, **Digital Archive**.
- **Split** Films & Books into separate sections when each has depth.
- **Add** site search once content volume justifies it; newsletter; membership (if a real program exists).

Illustrative future top-level nav (grouped to avoid overload):

```text
Home · About · Heritage (History, Language, Traditions, Food, Arts & Music, Timeline, Map)
· Events · Films · Books · Stories · Learn (phrases, resources) · Archive · Get Involved
```

Even at expansion, keep primary nav lean by grouping under hubs and using landing pages; avoid exposing every leaf at the top level.

---

## Navigation principles (both levels)

- Mobile-first; primary nav ≤ ~6 items; language switcher always reachable and clearly labeled.
- Every top-level destination has real content before it goes live — **no empty sections**.
- Timely vs timeless separation (events/announcements vs heritage).
- Wayfinding on every page: where am I, why it matters, the next useful action.
- Locale-aware, stable, human-readable URLs designed not to break on expansion.
- Contact and key actions reachable from the footer on every page.

## Open questions affecting IA

- **Audience priority** (E14) — shifts homepage and nav emphasis (newcomer explainer vs community events).
- **Content readiness** — how much of Heritage/Films/Books/Gallery can launch non-empty.
- **Support scope** — whether "Get Involved" includes donations at launch (charity status).
- **CACT treatment** — how/whether to surface the relationship (drives an About subsection or a Partners note).
