"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { MediaSlotConfig } from "@/content/types";
import { OrnamentLine, OrnamentMotif } from "@/components/ornament/Ornament";
import { motionTokens, premiumEase } from "@/lib/motion";

/**
 * MediaSlot — reusable, future-proof media surface.
 *
 * TODAY: renders a real supplied photograph via next/image (never a grey box),
 * with an image "mask reveal" (transform/opacity, reduced-motion aware), an
 * optional decorative SVG layer, and an optional caption.
 *
 * FUTURE: when `mediaType:"video"` and video sources are provided, it renders a
 * muted, looped, playsInline, non-autoplaying-audio <video> with the image as
 * poster/fallback; reduced-motion users keep the still. Swap assets by editing
 * the slot config in src/content/data/media.ts — no layout change required.
 *
 * See docs/motion-and-future-media-slots.md.
 */
export function MediaSlot({
  config,
  className = "",
  sizes = "100vw",
  rounded = "rounded-lg",
  caption,
  overlay = false,
  eager = false,
}: {
  config: MediaSlotConfig;
  className?: string;
  sizes?: string;
  rounded?: string;
  caption?: string;
  /** Dark scrim for text legibility over the image. */
  overlay?: boolean;
  /**
   * Eager/hero mode: render the media visible immediately (no in-view fade
   * gating) with a slow ken-burns drift. Use for above-the-fold heroes.
   */
  eager?: boolean;
}) {
  const reduce = useReducedMotion();
  const isVideo = config.mediaType === "video" && !reduce && !!config.desktopVideoSrc;

  const still =
    (reduce && config.reducedMotionImageSrc) ||
    config.fallbackImageSrc ||
    config.posterSrc;

  const objPos = config.objectPosition ?? "center";
  // Slow cinematic drift for hero mode (CSS animation; frozen under reduced motion).
  const mediaMotion = eager && !reduce && !isVideo ? "animate-kenburns" : "";

  // Eager (hero): media is FULLY VISIBLE immediately — no opacity reveal, no
  // whileInView. Movement, if any, comes only from the CSS ken-burns scale.
  // Otherwise: in-view reveal for scroll sections.
  const wrapperAnim = eager
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : {
        initial: reduce
          ? { opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0%)" }
          : {
              opacity: 0.7,
              scale: 1.04,
              clipPath: "inset(0% 0% 100% 0%)",
            },
        whileInView: {
          opacity: 1,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
        },
        viewport: { once: true, amount: 0.16 },
      };

  return (
    <figure className={`relative overflow-hidden ${rounded} ${className}`}>
      <motion.div
        data-motion-reveal
        className="absolute inset-0"
        {...wrapperAnim}
        transition={{
          duration: reduce ? 0 : eager ? 0 : 0.82,
          ease: premiumEase,
        }}
      >
        {isVideo ? (
          <video
            className="h-full w-full object-cover"
            style={{ objectPosition: objPos }}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={config.posterSrc ?? config.fallbackImageSrc}
            aria-label={config.alt}
            disablePictureInPicture
          >
            {config.mobileVideoSrc && (
              <source src={config.mobileVideoSrc} media="(max-width: 640px)" type="video/mp4" />
            )}
            {config.desktopVideoSrc && <source src={config.desktopVideoSrc} type="video/mp4" />}
          </video>
        ) : (
          <>
            {/* Mobile-specific still where provided; desktop still otherwise. */}
            {config.mobileImageSrc && (
              <Image
                src={config.mobileImageSrc}
                alt={config.alt}
                fill
                sizes={sizes}
                priority={config.priority}
                loading={config.priority ? undefined : "lazy"}
                className={`object-cover sm:hidden ${mediaMotion}`}
                style={{ objectPosition: objPos }}
              />
            )}
            <Image
              src={still ?? config.fallbackImageSrc}
              alt={config.alt}
              fill
              sizes={sizes}
              priority={config.priority}
              loading={config.priority ? undefined : "lazy"}
              className={`object-cover ${config.mobileImageSrc ? "hidden sm:block" : ""} ${mediaMotion}`}
              style={{ objectPosition: objPos }}
            />
          </>
        )}
      </motion.div>

      {/* Optional dark scrim for overlaid text. */}
      {overlay && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/25 to-navy/10"
        />
      )}

      {/* Optional decorative SVG layer (hidden from AT). */}
      {config.decorativeSvg === "ornament-line" && (
        <OrnamentLine
          aria-hidden="true"
          className="pointer-events-none absolute bottom-4 left-4 h-5 w-40 text-gold/70"
        />
      )}
      {config.decorativeSvg === "ornament-motif" && (
        <OrnamentMotif
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-6 -right-6 h-28 w-28 text-ivory/15"
        />
      )}

      {caption && (
        <figcaption className="absolute inset-x-0 bottom-0 z-10 p-4 text-xs text-ivory/85">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
