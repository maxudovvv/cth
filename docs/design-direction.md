# Design Direction — Crimean Tatar Heritage Canada

> Status: **draft** — visual direction to be validated with moodboards, contrast testing, and organizational approval in Phases 3–4. No culturally significant visual assets (colors, ornament, tamga) are finalized here.

## Visual principles

- **Museum-quality, one coherent experience.** Every page is a chapter of a single cultural narrative, not an isolated section.
- **Cinematic but usable.** Atmosphere, depth, and photography set the mood; they never block access to content.
- **Warm and welcoming.** Inviting to community members and newcomers; dignified, not cold or institutional.
- **Culturally specific.** Authentically Crimean Tatar. Reject generic "Middle Eastern / Oriental / Turkish / Arab / Central Asian / Islamic" clichés as substitutes.
- **Contemporary rather than folkloric.** Modern editorial design that respects tradition without costume-drama pastiche.
- **Editorial over template.** Layered composition, deliberate asymmetry, meaningful negative space — not repetitive card grids.

## Palette direction (placeholders — NOT final values)

Named directions only. Final hex values require contrast testing (WCAG AA) and organizational approval before use. Define as CSS variable / token placeholders in Phase 4:

| Token (placeholder) | Direction | Intended role (tentative) |
| --- | --- | --- |
| `--color-midnight-navy` | Midnight Navy | Deep base / dark sections |
| `--color-crimean-gold` | Crimean Gold | Accent / highlight / heritage warmth |
| `--color-sea-turquoise` | Sea Turquoise | Secondary accent / links / Black Sea reference |
| `--color-warm-sand` | Warm Sand | Neutral surface / warmth |
| `--color-pomegranate-red` | Pomegranate Red | Emphasis / sparing accent |
| `--color-warm-ivory` | Warm Ivory | Light base / reading surface |

**Do not finalize color values yet.** Document that final colors require visual testing and sign-off.

## Typography criteria

- A characterful display face for headlines and a highly readable text face for long-form reading.
- Comfortable reading width (~60–75 characters); base body ≥ 16px, larger where possible for older readers.
- Full glyph coverage for Crimean Tatar Latin (and Cyrillic if needed) plus French accents — verify early (see `multilingual-editor`).
- Clear, restrained type scale that carries hierarchy without relying on color alone.

## Imagery principles

- Authentic, well-credited, permission-cleared photography (see `content-source-register.md`).
- Art-directed crops and correct aspect ratios; captions, dates/periods, and credits accompany archival images.
- Prefer real archival and community photography over stock; never use imagery that misrepresents the culture.

## Ornament rules

- Ornament must derive from **authentic Crimean Tatar** traditions and be verified before use (`crimean-tatar-cultural-reviewer`).
- The **tamga** is protected: never redraw, recolor, distort, or casually restyle it; approved artwork only.
- Do not invent "traditional-looking" patterns or borrow ornament from other cultures as decoration.

## Motion rules

- Motion supports storytelling or usability only. Content is accessible before animation completes.
- Full `prefers-reduced-motion` support. No scroll hijacking, permanent background motion, heavy blur, or motion-sickness triggers.
- CSS for simple effects; GSAP only where sequencing/scroll control adds clear value. See `motion-design-gsap`.

## Archival-section behavior

- Archive and gallery sections prioritize legibility of metadata (caption, credit, date/period, provenance) alongside the image.
- Progressive disclosure: headline layer → detail → sources. Never bury provenance.
- Keyboard- and screen-reader-accessible galleries, timelines, and carousels (see `accessibility-and-performance`).

## Prohibited generic patterns (examples)

Generic AI/SaaS hero + three-identical-cards layouts · repetitive identical card grids · excessive rounded rectangles · excessive glassmorphism · random decorative gradients · oversized empty hero sections · tiny low-contrast text · animation that delays content · desktop-only layouts · decorative effects with no cultural or functional purpose.

## Mobile considerations

Mobile-first. Every layout defines its phone behavior first; touch targets ≥ 44px; navigation and language switching remain clear and reachable; imagery and typography scale gracefully.

## Accessibility requirements

Target WCAG 2.1 AA (provisional). Strong contrast, visible focus, keyboard operability, captions/transcripts for media, reduced motion. Design decisions are checked against `accessibility-and-performance` before approval.
