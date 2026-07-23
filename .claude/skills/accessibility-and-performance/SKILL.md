---
name: accessibility-and-performance
description: >-
  Accessibility and performance standards for Crimean Tatar Heritage Canada. Use
  when implementing or reviewing semantic markup, keyboard access, focus, alt text,
  captions/transcripts, media controls, contrast, reduced motion, responsive
  images, fonts, Core Web Vitals, or accessible galleries/timelines/maps/carousels.
  Trigger on "accessibility", "a11y", "WCAG", "performance", "Core Web Vitals",
  "keyboard", "contrast", or "make this accessible/fast".
---

# accessibility-and-performance

Ensures the site is usable by everyone — including older community members and assistive-technology users — and fast on real devices and connections.

## Accessibility responsibilities

- WCAG-conscious implementation (target **WCAG 2.1 AA**; treat as provisional until confirmed).
- Semantic HTML and correct landmark structure.
- Full keyboard access and visible, logical focus management.
- Alt-text workflows for all meaningful imagery; empty alt for decorative images.
- Captions and transcripts for video and audio (films, screenings, oral histories).
- Accessible, keyboard-operable media controls.
- Sufficient color contrast (text and meaningful UI).
- `prefers-reduced-motion` respected everywhere (see `motion-design-gsap`).
- Accessible interactive **maps, galleries, timelines, and carousels** — operable without a mouse and announced to screen readers.
- Graceful failure **without JavaScript** where practical; core content readable regardless.

## Performance responsibilities

- Responsive images (correct sizes, modern formats, lazy loading below the fold).
- Font loading strategy that avoids invisible or shifting text.
- Performance budgets and Core Web Vitals targets.
- Bundle awareness; avoid shipping unused JavaScript.
- Progressive rendering: content first, enhancement after.

## Provisional targets (mark as provisional; confirm in Phase 8)

- **LCP** < 2.5s, **INP** < 200ms, **CLS** < 0.1 on mid-range mobile over 4G.
- Contrast: **4.5:1** normal text, **3:1** large text and meaningful UI.
- Tap targets ≥ **44×44px**; base body text ≥ **16px** (larger where possible for older readers).
- Every interactive element reachable and operable by keyboard with a visible focus state.
- Initial JS payload kept lean; heavy features loaded on demand.

These numbers are starting points, not final commitments; revisit against real content and devices.

## Review checklists

**Accessibility**: semantic structure? keyboard path complete? focus visible and logical? alt text present and correct? captions/transcripts for media? contrast passes? reduced-motion honored? complex widgets (map/timeline/gallery/carousel) operable and announced? works with JS disabled where practical?

**Performance**: images responsive and lazy? fonts non-blocking? Core Web Vitals within budget on mid-range mobile? bundle free of dead weight? content renders before enhancement?

Report each item as `verified` / `not run` / `blocked` / `passed with warnings` / `failed`. Never assert a check passed without running it. Enforced again by `qa-release-reviewer` and the `quality-auditor`.
