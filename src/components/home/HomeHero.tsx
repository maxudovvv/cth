"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { MediaSlot } from "@/components/media/MediaSlot";
import {
  AnimatedHeading,
  useAnimationReady,
} from "@/components/motion/AnimatedHeading";
import { OrnamentLine } from "@/components/ornament/Ornament";
import { heroSlot } from "@/content/data/media";
import { organization } from "@/content/data/site";
import { motionTokens, premiumEase } from "@/lib/motion";

export function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = Boolean(useReducedMotion());
  const ready = useAnimationReady();
  const entranceState = ready || reduceMotion ? "visible" : "hidden";
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const mediaY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : 34],
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : 10],
  );

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-navy text-ivory"
    >
      <motion.div
        className="absolute -inset-y-10 inset-x-0 z-0"
        style={{ y: mediaY }}
      >
        <MediaSlot
          config={heroSlot}
          rounded="rounded-none"
          className="h-full w-full"
          sizes="100vw"
          eager
        />
      </motion.div>

      <div
        aria-hidden="true"
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(7,25,42,0.92) 0%, rgba(7,25,42,0.69) 38%, rgba(7,25,42,0.28) 70%, rgba(7,25,42,0.12) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(110% 88% at 52% 42%, transparent 38%, rgba(7,17,31,0.62) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-10 h-44 bg-gradient-to-b from-transparent to-navy"
      />

      <motion.div
        className="container-wide relative z-20 flex min-h-[100svh] items-center py-28"
        style={{ y: contentY }}
      >
        <div className="max-w-[52rem]">
          <motion.p
            data-motion-reveal
            initial="hidden"
            animate={entranceState}
            variants={{
              hidden: reduceMotion
                ? { opacity: 1 }
                : { opacity: 0, y: 8, filter: "blur(6px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.55,
              delay: reduceMotion ? 0 : 0.15,
              ease: premiumEase,
            }}
            className="text-xs font-semibold uppercase tracking-eyebrow text-gold-soft drop-shadow-[0_1px_8px_rgba(7,17,31,0.7)]"
          >
            Cultural &amp; Educational · Across Canada
          </motion.p>

          <AnimatedHeading
            as="h1"
            trigger="load"
            lines={[
              "Crimean Tatar",
              <span className="text-gradient-gold" key="heritage-canada">
                Heritage Canada
              </span>,
            ]}
            delay={reduceMotion ? 0 : 0.3}
            stagger={reduceMotion ? 0 : 0.18}
            duration={0.92}
            className="mt-5 font-display text-[2.6rem] font-semibold leading-[1.03] text-ivory drop-shadow-[0_2px_18px_rgba(7,17,31,0.6)] sm:text-6xl lg:text-[4.7rem]"
          />

          <motion.p
            data-motion-reveal
            initial="hidden"
            animate={entranceState}
            variants={{
              hidden: reduceMotion
                ? { opacity: 1 }
                : { opacity: 0, y: 16, filter: "blur(5px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{
              duration: reduceMotion ? 0 : motionTokens.durations.reveal,
              delay: reduceMotion ? 0 : 0.7,
              ease: premiumEase,
            }}
            className="mt-6 max-w-2xl text-lg leading-8 text-ivory/90 drop-shadow-[0_1px_10px_rgba(7,17,31,0.6)] md:text-xl"
          >
            {organization.homeTagline}
          </motion.p>

          <motion.a
            data-motion-reveal
            href="#home-introduction-title"
            aria-label="Scroll to discover more"
            initial="hidden"
            animate={entranceState}
            variants={{
              hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.5,
              delay: reduceMotion ? 0 : 0.9,
              ease: premiumEase,
            }}
            className="mt-10 inline-flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-ivory/75 transition-colors duration-200 hover:text-gold-soft"
          >
            <motion.span
              className="relative block h-9 w-px origin-top overflow-hidden bg-ivory/25"
              initial={reduceMotion ? { scaleY: 1 } : { scaleY: 0 }}
              animate={ready || reduceMotion ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.58,
                delay: reduceMotion ? 0 : 0.88,
                ease: premiumEase,
              }}
            >
              <span className="scroll-nudge absolute left-0 top-0 h-3 w-px bg-gold-soft" />
            </motion.span>
            Discover
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        data-motion-reveal
        initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
        animate={ready || reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
        transition={{ duration: reduceMotion ? 0 : 0.72, delay: reduceMotion ? 0 : 0.82, ease: premiumEase }}
        className="pointer-events-none absolute bottom-9 right-6 z-20 hidden origin-right sm:block lg:right-12"
      >
        <OrnamentLine className="ornament-stroke-reveal h-6 w-48 text-gold-soft/55" />
      </motion.div>
    </section>
  );
}
