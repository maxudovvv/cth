# Discovery UX Review

> Review applying the **`ui-ux-pro-max`** skill (the `design-lead`'s primary tool) to the Phase 1 discovery decisions — chiefly the proposed information architecture, audience profiles, journeys, and MVP scope. This reviews **discovery decisions**, not visual designs (none exist yet). Findings feed Phase 2 IA finalization and Phase 3 design.

## Summary

The discovery direction is **UX-sound**: it trims navigation to a manageable size, prioritizes newcomer comprehension, commits to mobile-first and older-user accessibility, and refuses to launch empty sections. The main UX risks are all downstream of **content readiness** — thin or empty sections, and forms that lead nowhere. Recommendations below make those risks explicit so design and build avoid them.

## Findings by review dimension

### Navigation size — GOOD
- Reduced from a 9–16 item candidate to **6 primary items + Contact in header/footer** (`information-architecture.md`). Within the 6–8 target and mobile-friendly.
- **Recommend:** hold the line at ~6 through launch; use hubs (Heritage, Films & Books) rather than exposing leaves.

### Accessibility for older users — GOOD (must be enforced in design)
- Profiles and standards call for large readable type, high contrast, big tap targets, simple nav, and restrained motion (`audience-profiles.md` #3, `accessibility-and-performance.md`).
- **Recommend:** treat WCAG 2.1 AA + comfortable defaults as acceptance criteria in Phase 4, not a later audit. Verify with at least one older community member if possible.

### First-time visitor comprehension — GOOD, with a dependency
- Prioritizing a **"Who are the Crimean Tatars"** overview and a clear identity is the right call for newcomers (`user-journeys.md` J1).
- **Risk:** the homepage 5-second test **fails without approved intro copy and a strong hero image.** These are content blockers, not design problems.
- **Recommend:** make the approved overview + one strong image the first content dependency to resolve.

### Mobile usability — GOOD
- Mobile-first is stated throughout; nav is small; content-first rendering is required.
- **Recommend:** design event listing and Films & Books for one-hand mobile scanning; keep the language switcher reachable without cluttering the mobile header.

### Content discoverability — GOOD, watch depth
- Hub structure plus "no empty sections" supports discoverability.
- **Risk:** if Heritage sub-sections (History/Language/Traditions) are mostly empty at launch, the hub feels hollow.
- **Recommend:** launch Heritage with the overview solid and only reveal sub-sections that have real content; use honest "coming soon" states sparingly, never as the main experience.

### Risk of overwhelming users — HANDLED
- Deferring map, timeline, oral-history archive, music player, search, membership, and social embeds keeps the MVP focused (`feature-prioritization.md`).
- **Recommend:** resist scope creep; each added section must bring real, cleared content.

### Multilingual expansion — GOOD, one caution
- i18n-ready architecture with English at launch is correct; long-string tolerance is noted.
- **Caution:** a visible **language switcher with only English available** can confuse or disappoint. **Recommend:** hide/disable the switcher until a second reviewed locale exists, then introduce it clearly.

## Additional UX risks flagged (from the discovery material)

1. **Dead-end forms.** Contact/screening/volunteer forms without a **monitored recipient** create silent failures. *Fix:* confirm recipients before shipping any form; show clear success/error states.
2. **Gallery credibility.** An empty/thin Gallery undercuts trust; its content is permission-blocked. *Fix:* nest until at least one album is fully cleared (already recommended in IA).
3. **Donation dead-ends.** A "Donate" entry with no working, receipt-capable flow erodes trust. *Fix:* only expose donations when charity status + platform confirmed; otherwise a clear "how to support / contact" path.
4. **Empty-state design is a first-class task.** Because several sections may launch thin, design **honest, useful empty states** (e.g. "Our next events will appear here — contact us to hear first") rather than blank pages.
5. **Identity clarity above the fold.** The CTHC (cultural) vs CACT (advocacy) distinction should be unmistakable early, without making advocacy prominent. *Fix:* a concise identity statement on Home/About; keep any CACT reference secondary and clearly labeled.

## Pre-approval checklist (ui-ux-pro-max) applied to MVP direction

| # | Check | Status at discovery |
| --- | --- | --- |
| 1 | Purpose clear in 5s | Depends on approved copy/hero — **at risk until content ready** |
| 2 | Clear hierarchy | Planned (hub structure) — verify in design |
| 3 | Key content discoverable | Planned |
| 4 | Comfortable for older visitors | Committed — enforce in design |
| 5 | Works on mobile | Committed (mobile-first) |
| 6 | Next action clear | Planned (events/contact CTAs) — ensure recipients exist |
| 7 | Represents culture respectfully | Committed; see cultural review |
| 8 | Avoids generic AI aesthetics | Committed (design-direction) |
| 9 | Keyboard-accessible | Committed — enforce in design |
| 10 | Purposeful, restrained motion | Committed |
| 11 | Loads progressively | Committed |
| 12 | Usable with longer translated text | Committed (i18n) |

Items 1 and 6 are **content-gated**, not design flaws — they resolve when the organization supplies approved copy, imagery, event data, and form recipients.

## Recommendation

The UX direction is ready to proceed to Phase 2 IA finalization. Carry three things forward as explicit requirements: (a) resolve content blockers before design so comprehension checks can pass, (b) design honest empty states and avoid dead-end forms/donation paths, and (c) treat older-user accessibility as acceptance criteria from the first prototype.
