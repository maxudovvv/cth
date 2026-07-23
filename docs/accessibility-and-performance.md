# Accessibility & Performance Standards — Crimean Tatar Heritage Canada

> Status: **provisional** — targets and checklists to be confirmed against real content and devices in Phase 8. Mirrors the `accessibility-and-performance` skill.

## Why this matters here

The audience includes **older community members** and assistive-technology users. Accessibility and performance are core to the mission, not a finishing step.

## Accessibility standards (provisional target: WCAG 2.1 AA)

- Semantic HTML and correct landmark structure on every page.
- Full keyboard operability; visible, logical focus order; no keyboard traps.
- Meaningful images have descriptive alt text; decorative images use empty alt.
- Captions **and** transcripts for all video/audio (films, screenings, oral histories).
- Accessible, keyboard-operable media controls.
- Color contrast: **4.5:1** for normal text, **3:1** for large text and meaningful UI; never convey meaning by color alone.
- `prefers-reduced-motion` honored everywhere, with a real fallback (see `motion-design-gsap`).
- Complex widgets — interactive **maps, galleries, timelines, carousels** — are operable without a mouse and announced correctly to screen readers.
- Core content is readable **without JavaScript** where practical.
- Language switching is accessible; correct `lang` attributes and `hreflang`.
- Comfortable reading: base body ≥ 16px (larger where possible), reading width ~60–75 characters, tap targets ≥ 44×44px.

## Performance standards (provisional)

- **Core Web Vitals** on mid-range mobile over 4G: LCP < 2.5s, INP < 200ms, CLS < 0.1.
- Responsive images: correct sizes, modern formats (e.g. AVIF/WebP), lazy loading below the fold.
- Non-blocking font loading (no invisible or shifting text); subset fonts; ensure Crimean Tatar/French glyph coverage.
- Lean initial JS; load heavy features (maps, galleries, motion) on demand.
- Progressive rendering: content first, enhancement after.
- Performance budget agreed in Phase 4/5 and enforced in CI later.

_All numbers are starting points; revisit with real content and measured devices before committing._

## Accessibility review checklist

- [ ] Semantic structure and landmarks correct.
- [ ] Complete keyboard path; visible focus everywhere.
- [ ] Alt text present and correct (meaningful vs decorative).
- [ ] Captions + transcripts for all media.
- [ ] Contrast passes AA (text and meaningful UI).
- [ ] `prefers-reduced-motion` honored with real fallback.
- [ ] Map/timeline/gallery/carousel operable and announced.
- [ ] Core content works with JS disabled where practical.
- [ ] Language switch accessible; `lang`/`hreflang` correct.
- [ ] Comfortable for older readers (size, spacing, targets).

## Performance review checklist

- [ ] Images responsive, right-sized, lazy-loaded.
- [ ] Fonts non-blocking; no layout shift from text.
- [ ] Core Web Vitals within budget on mid-range mobile.
- [ ] Initial JS payload lean; heavy features deferred.
- [ ] Content renders before enhancement; no long blocking scripts.
- [ ] Third-party embeds (maps, video, donations) measured and bounded.

## Reporting rule

Report each item as `verified` / `not run` / `blocked` / `passed with warnings` / `failed`. Never assert a check passed without running it. Enforced by `qa-release-reviewer` and the `quality-auditor` before release.
