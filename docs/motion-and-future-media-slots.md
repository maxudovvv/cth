# Motion & Future Media Slots

> Status: **active.** Defines the motion tokens and the reusable media-slot architecture so future custom animations/videos can be dropped in **without rebuilding the layout**.

## Motion tokens

Defined as CSS variables (`src/app/globals.css`) and mirrored for JS in `src/lib/motion.ts`.

| Token | Value | Use |
| --- | --- | --- |
| `--dur-fast` | 180ms | hovers, small state changes |
| `--dur-base` | 320ms | reveals, header transition |
| `--dur-slow` | 620ms | image mask reveals |
| `--ease-entrance` | `cubic-bezier(0.16,1,0.3,1)` | entrances |
| `--ease-exit` | `cubic-bezier(0.4,0,1,1)` | exits |
| `--motion-stagger` | 70ms | list/section stagger step |
| `--motion-reveal-distance` | 16px | translateY reveal distance |
| `--motion-hover-scale` | 1.03 | gentle image hover |

JS mirror: `motionTokens` (durations in seconds, easing arrays, stagger, revealDistance, hoverScale) for Framer Motion.

## Motion rules

- Transform/opacity only; smooth on mid-range mobile.
- `prefers-reduced-motion` → no transforms, instant/opacity-only, no looping/background motion; content always available.
- No scroll hijacking, aggressive parallax, long loaders, or constant decorative movement.
- Implemented now (lightweight only): hero headline reveal, image **mask** reveal, restrained section reveals, gentle image hover, ornament-line reveal, accessible gallery transition. Final cinematic animations are **not** fabricated yet.

## MediaSlot API

`src/components/media/MediaSlot.tsx` renders responsive media today and is video-ready for later. Config type `MediaSlotConfig` (`src/content/types.ts`):

```ts
mediaType: "image" | "video"        // "image" today
futureAnimationSlot: boolean         // marks a reserved slot
slotId: string                       // stable id for replacement
posterSrc?: string                   // video poster (also used as image)
desktopVideoSrc?: string             // future
mobileVideoSrc?: string              // future (mobile-specific option)
fallbackImageSrc: string             // shown now (a supplied photo — never grey)
reducedMotionImageSrc?: string       // shown to reduced-motion users instead of video
mobileImageSrc?: string              // mobile-specific still
alt: string                          // accessible text alternative
decorativeSvg?: "ornament-line" | "ornament-motif" | null
priority?: boolean                   // eager-load (hero)
meta: ContentMeta                    // governance (permissionStatus: pending, etc.)
```

### Behaviour

- **Now:** always renders a real supplied photograph (`fallbackImageSrc`/`mobileImageSrc`) via `next/image` (`fill`, `sizes`), with an optional decorative SVG layer and optional caption. **Never** an empty grey placeholder.
- **When video arrives:** set `mediaType:"video"` and provide `desktopVideoSrc`/`mobileVideoSrc`; the component renders `<video muted loop playsInline preload="none" poster>` with the image as fallback. **No audio, no autoplay of sound.**
- **Reduced motion:** if set, video is not played; `reducedMotionImageSrc` (or fallback) is shown. Future background video must be muted, looped, playsInline, and stoppable/replaceable for reduced-motion users.
- **Lazy loading:** non-hero slots use `loading="lazy"` / `preload="none"`; hero uses `priority`.
- **Replacement path:** to swap in a final asset, edit the slot's entry in `src/content/data/media.ts` (or the inline config) — set `desktopVideoSrc`/`mobileVideoSrc` (+ `posterSrc`) or a higher-res `fallbackImageSrc`. No layout changes required.

## Reserved future animation slots

| # | slotId | Location | Current fallback | Replace by |
| --- | --- | --- | --- | --- |
| 1 | `hero-cinematic` | Homepage hero | community-events hero photo | set desktop/mobile video + poster |
| 2 | `ornament-animated` | Hero/section ornament layer | static ornament SVG | animated ornament (SVG/Lottie/video) |
| 3 | `heritage-to-history` | Transition band before History | textile/still image | transition video/animation |
| 4 | `surgunlik-story` | History & Memory | history-memory still (small, respectful) | survivor-story media (with approval) |
| 5 | `community-gallery-motion` | Gallery preview | community stills masonry | motion sequence |
| 6 | `flag-textile-motion` | Living Heritage / textile band | textile still | flag/textile motion composition |
| 7 | `immersive-cultural` | Reserved immersive band | community still | future immersive animation |
| 8 | `footer-ornament` | Footer transition | static ornament divider | footer ornament transition |

Each reserved slot sets `futureAnimationSlot: true` and carries a stable `slotId`, so it is discoverable in code and swappable in place.
