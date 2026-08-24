"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type PointerEvent } from "react";
import { Eyebrow } from "@/components/ui/Primitives";
import { OrnamentDivider } from "@/components/ornament/Ornament";
import { useAnimationReady } from "@/components/motion/AnimatedHeading";
import { premiumEase } from "@/lib/motion";

const desktopImage = "/media/contact/contact-connection.webp";
const mobileImage = "/media/contact/contact-connection-mobile.webp";
const fallbackImage = "/media/contact/contact-connection.png";

export function ContactHero() {
  const rootRef = useRef<HTMLElement>(null);
  const pictureRef = useRef<HTMLPictureElement>(null);
  const inView = useInView(rootRef, { once: true, amount: 0.28 });
  const reduceMotion = Boolean(useReducedMotion());
  const ready = useAnimationReady();
  const visible = reduceMotion || (ready && inView);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (reduceMotion || event.pointerType !== "mouse" || !pictureRef.current) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 6;
    pictureRef.current.style.setProperty("--contact-shift-x", `${x.toFixed(2)}px`);
    pictureRef.current.style.setProperty("--contact-shift-y", `${y.toFixed(2)}px`);
  };

  const resetPointer = () => {
    pictureRef.current?.style.setProperty("--contact-shift-x", "0px");
    pictureRef.current?.style.setProperty("--contact-shift-y", "0px");
  };

  const reveal = (delay: number, y = 14) => ({
    initial: reduceMotion ? { opacity: 1 } : { opacity: 0, y },
    animate: visible ? { opacity: 1, y: 0 } : { opacity: 0, y },
    transition: { duration: reduceMotion ? 0 : 0.86, delay: reduceMotion ? 0 : delay, ease: premiumEase },
  });

  return (
    <header
      ref={rootRef}
      className="contact-hero relative isolate flex min-h-[44rem] overflow-hidden bg-navy text-ivory sm:min-h-[36rem] lg:min-h-[clamp(32.5rem,62vh,40.625rem)]"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <motion.div
        aria-hidden="true"
        className="absolute -inset-2"
        initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.03 }}
        animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.03 }}
        transition={{ duration: reduceMotion ? 0 : 1.2, ease: premiumEase }}
      >
        <picture ref={pictureRef} className="contact-hero__picture absolute inset-0 block">
          <source media="(max-width: 639px)" srcSet={mobileImage} type="image/webp" />
          <source srcSet={desktopImage} type="image/webp" />
          <img
            src={fallbackImage}
            alt=""
            width={1823}
            height={863}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="contact-hero__image h-full w-full object-cover"
          />
        </picture>
      </motion.div>

      <div aria-hidden="true" className="contact-hero__horizontal-overlay absolute inset-0" />
      <div aria-hidden="true" className="contact-hero__vertical-overlay absolute inset-0" />
      <div aria-hidden="true" className="ornament-tile absolute inset-0 opacity-[0.025]" />
      <motion.div
        aria-hidden="true"
        className="contact-hero__thread-light pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={visible && !reduceMotion ? { opacity: [0, 0.42, 0] } : { opacity: 0 }}
        transition={{ duration: 1.25, delay: 0.36, times: [0, 0.5, 1], ease: premiumEase }}
      />

      <div className="container-wide relative z-10 flex w-full items-start pt-32 pb-16 sm:items-center sm:py-32">
        <div className="max-w-2xl">
          <motion.div data-motion-reveal {...reveal(0.16, 12)}>
            <Eyebrow className="text-gold-soft">Contact</Eyebrow>
          </motion.div>
          <motion.h1
            data-motion-reveal
            className="mt-3 font-display text-5xl font-semibold leading-[1.03] text-ivory sm:text-6xl lg:text-7xl"
            {...reveal(0.29, 15)}
          >
            Get in touch
          </motion.h1>
          <motion.p
            data-motion-reveal
            className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/90 sm:text-xl"
            {...reveal(0.43, 15)}
          >
            Questions, ideas, or a message for the organization — we would love to hear from you.
          </motion.p>
          <motion.div data-motion-reveal {...reveal(0.58, 12)}>
            <OrnamentDivider className="mt-9 h-5 w-36 text-gold/70" />
          </motion.div>
        </div>
      </div>
    </header>
  );
}
