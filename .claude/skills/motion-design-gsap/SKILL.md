---
name: motion-design-gsap
description: >-
  Motion and animation architecture for Crimean Tatar Heritage Canada, using GSAP
  and CSS. Use when planning or building scroll effects, page transitions, image
  reveals, timelines, parallax, or microinteractions, and when ensuring
  reduced-motion fallbacks and performance. Trigger on "animate this", "add a
  scroll effect", "page transition", "GSAP", "ScrollTrigger", or motion review.
---

# motion-design-gsap

Owns the motion system. Motion must serve storytelling or usability — never decorate at the expense of access or performance.

## Responsibilities

- GSAP animation architecture and reusable motion patterns.
- ScrollTrigger usage for scroll-linked storytelling.
- SVG path animation (e.g. tasteful reveals of approved motifs).
- Page transitions and route changes.
- Image reveals and timeline transitions.
- Controlled parallax and microinteractions.
- Motion performance, accessibility, and reduced-motion fallbacks.

## Animation principles

- Motion must support **storytelling or usability**, never exist for its own sake.
- Initial content must be **accessible without waiting** for animation to finish.
- Avoid animating every heading.
- Avoid permanent background movement.
- Avoid heavy blur effects.
- Avoid scroll hijacking.
- Avoid excessive pinned sections.
- Avoid animation that can cause motion sickness.
- Maintain good mobile performance.
- Use **CSS animations** for simple effects (hovers, fades, small transitions).
- Use **GSAP only** where its sequencing or scroll control adds clear value.
- Fully support `prefers-reduced-motion`.

## Reduced-motion contract

Every animation ships with a reduced-motion fallback. When `prefers-reduced-motion: reduce` is set: disable parallax and scroll-driven movement, replace reveals with instant or minimal fades, remove looping/background motion, and ensure all content and interactions remain fully available. Reduced motion is a first-class path, not an afterthought.

## Performance rules

- Animate transform and opacity; avoid animating layout properties.
- Respect a motion performance budget on mid-range mobile devices.
- Lazy-init scroll animations; clean up triggers on unmount.
- Never block first content paint or interactivity on animation setup.

## Review checklist

Content readable before animation? Reduced-motion path complete? No scroll hijacking or excessive pinning? Smooth on mid-range mobile? Motion tied to meaning? If any answer is no, revise. Coordinates with `ui-ux-pro-max` and `accessibility-and-performance`; owned by the `motion-engineer`.
