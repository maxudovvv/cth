"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Primitives";
import { OrnamentDivider, OrnamentMotif } from "@/components/ornament/Ornament";
import {
  AnimatedHeading,
  useAnimationReady,
} from "@/components/motion/AnimatedHeading";
import { premiumEase } from "@/lib/motion";

/**
 * Inner-page masthead (dark, atmospheric). Clears the fixed navbar with top
 * padding. Optional background image (a supplied photo) sits behind a dark
 * overlay + ornament texture. Server component — no client JS.
 */
export function PageHeader({
  eyebrow,
  title,
  intro,
  bgImage,
  bgVideo,
  bgAlt = "",
  objectPosition = "center",
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  bgImage?: string;
  /** Optional muted decorative video; bgImage remains its poster/fallback. */
  bgVideo?: string;
  bgAlt?: string;
  objectPosition?: string;
  children?: ReactNode;
}) {
  const reduceMotion = Boolean(useReducedMotion());
  const ready = useAnimationReady();
  const visible = ready || reduceMotion;

  return (
    <header className="relative overflow-hidden bg-navy text-ivory">
      {(bgImage || bgVideo) && (
        <div aria-hidden="true" className="absolute inset-0">
          {bgVideo && !reduceMotion ? (
            <video
              className="h-full w-full object-cover opacity-55"
              style={{ objectPosition }}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={bgImage}
              disablePictureInPicture
              tabIndex={-1}
            >
              <source src={bgVideo} type="video/mp4" />
            </video>
          ) : bgImage ? (
            <Image
              src={bgImage}
              alt={bgAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-50"
              style={{ objectPosition }}
            />
          ) : null}
        </div>
      )}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/35" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/85 via-transparent to-navy/30" />
      <div aria-hidden="true" className="ornament-tile absolute inset-0 opacity-[0.05]" />
      <OrnamentMotif aria-hidden="true" className="pointer-events-none absolute right-[8%] top-[40%] hidden h-20 w-20 text-gold/20 md:block" />

      <div className="container-wide relative pt-28 pb-14 md:pt-32 md:pb-20">
        <motion.div
          data-motion-reveal
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: reduceMotion ? 0 : 0.56, delay: reduceMotion ? 0 : 0.08, ease: premiumEase }}
        >
          <Eyebrow className="text-gold-soft">{eyebrow}</Eyebrow>
        </motion.div>
        <AnimatedHeading
          as="h1"
          trigger="load"
          delay={reduceMotion ? 0 : 0.18}
          duration={0.84}
          className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-[1.06] text-ivory md:text-5xl lg:text-6xl"
        >
          {title}
        </AnimatedHeading>
        {intro && (
          <motion.p
            data-motion-reveal
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: reduceMotion ? 0 : 0.62, delay: reduceMotion ? 0 : 0.38, ease: premiumEase }}
            className="mt-5 max-w-2xl text-lg text-ivory/85"
          >
            {intro}
          </motion.p>
        )}
        {children}
        <OrnamentDivider className="mt-8 h-5 w-36 text-gold/60" />
      </div>
    </header>
  );
}
