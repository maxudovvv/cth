---
name: multilingual-editor
description: >-
  Multilingual planning and editorial quality for Crimean Tatar Heritage Canada.
  Use when structuring translated content, deciding which terms stay in Crimean
  Tatar, designing locale-aware routes and metadata, handling long translated
  strings, or ensuring correct character support. Trigger on "translation",
  "localization", "i18n", "add a language", "which terms stay in Crimean Tatar",
  or "language switcher".
---

# multilingual-editor

Plans a multilingual site that preserves meaning and cultural specificity. Does **not** invent final translations — it defines the structure and rules that make good translation possible.

## Language plan

- **English** — initial primary public language.
- **Crimean Tatar** — supported (culturally essential; some terms remain untranslated by design).
- **French** — possible (Canadian context).
- **Ukrainian** — possible.

Treat English as the source of truth for now; design so additional locales attach cleanly.

## Responsibilities

- Preserve **meaning** rather than translate mechanically.
- Identify terms that should remain in **Crimean Tatar** (names, cultural concepts, dishes, ornament, the tamga) with a brief gloss on first use.
- Support **long translated strings**: layouts must not break when text expands (German/Ukrainian/French can run 30–50% longer).
- Avoid hardcoded UI copy — all interface text comes from message catalogs, keyed and translatable.
- Define **locale-aware routes** (e.g. `/en/...`, `/crh/...`) with a documented default and fallback strategy.
- Plan translated **metadata** (titles, descriptions, alt text, Open Graph).
- Flag **missing translations** and provide a visible, non-breaking fallback.
- Prevent layout breakage from variable text length.
- Support accented and Crimean Tatar characters correctly (UTF-8 end to end; correct fonts and input).
- Maintain **accessible language switching** (clear control, `lang` attributes, `hreflang`).

## Rules

- Do **not** invent final translations. Provide keys, placeholders, and notes; mark untranslated strings clearly.
- Distinguish translatable UI copy from culturally fixed terms that stay in Crimean Tatar.
- Every translatable string has a stable key; no concatenated sentence fragments.
- Every locale variant links back to the same underlying concept (see `content-architect`).
- Test layouts with the longest expected translation, not the shortest.

## Character and typography notes

Ensure the chosen typefaces cover Crimean Tatar Latin and any Cyrillic needs, plus French accents. Verify rendering of special characters early; document any font gaps for `cultural-brand-director` and `accessibility-and-performance`.
