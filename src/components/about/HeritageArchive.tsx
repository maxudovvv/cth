"use client";

import Image from "next/image";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { culturalMedia, textiles } from "@/content/data/media";
import { premiumEase } from "@/lib/motion";
import { PhotoLightbox } from "@/components/media/PhotoLightbox";

const archiveItems = [
  {
    id: "ornament",
    label: "Ornament",
    subtitle: "Symbols carried through generations",
    image: textiles.a,
    alt: "Geometric textile detail",
  },
  {
    id: "textile",
    label: "Textile",
    subtitle: "Tradition woven into every detail",
    image: textiles.b,
    alt: "Woven heritage textile detail",
  },
  {
    id: "memory",
    label: "Memory",
    subtitle: "Stories preserved, voices remembered",
    image: culturalMedia.booksBrochure,
    alt: "A printed cultural exhibition programme preserving community stories",
  },
] as const;

function ArchiveVisual({ index, reduced }: { index: number; reduced: boolean }) {
  const item = archiveItems[index] ?? archiveItems[0];
  const transition = { duration: reduced ? 0 : 0.62, ease: premiumEase };

  return (
    <AnimatePresence initial={false} mode="sync">
      <motion.div
        key={item.id}
        id={`archive-panel-${item.id}`}
        role="tabpanel"
        aria-label={item.label}
        initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 1.02 }}
        transition={transition}
        className="absolute inset-0 flex items-center justify-center"
      >
        <PhotoLightbox
          src={item.image}
          alt={item.alt}
          className="relative h-full w-full rounded-2xl ring-1 ring-white/10 focus-visible:ring-offset-navy"
        >
          <Image
            src={item.image}
            alt={item.alt}
            fill
            priority={index === 0}
            sizes="(min-width: 1024px) 520px, 90vw"
            className="object-cover opacity-[0.78]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-transparent" />
          <div className="absolute inset-x-5 bottom-4 flex items-end justify-between border-t border-gold/35 pt-3">
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold-soft">{item.label}</span>
            <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 border border-gold/60" />
          </div>
        </PhotoLightbox>
      </motion.div>
    </AnimatePresence>
  );
}

export function HeritageArchive() {
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const inView = useInView(rootRef, { once: true, amount: 0.3 });
  const reduced = Boolean(useReducedMotion());
  const [active, setActive] = useState(0);
  const [engaged, setEngaged] = useState<number | null>(null);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (!inView || reduced || hovered || focused) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % archiveItems.length), 6000);
    return () => window.clearInterval(timer);
  }, [inView, reduced, hovered, focused]);

  const select = (index: number) => setActive(index);
  const engageWithPointer = (index: number) => {
    select(index);
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) setEngaged(index);
  };
  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % archiveItems.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index - 1 + archiveItems.length) % archiveItems.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = archiveItems.length - 1;
    else return;
    event.preventDefault();
    select(next);
    buttonRefs.current[next]?.focus();
  };

  const reveal = (delay: number, y = 14, duration = 0.58) => ({
    initial: reduced ? { opacity: 1 } : { opacity: 0, y },
    animate: inView ? { opacity: 1, y: 0 } : undefined,
    transition: { duration: reduced ? 0 : duration, delay: reduced ? 0 : delay, ease: premiumEase },
  });

  return (
    <div
      ref={rootRef}
      className="heritage-archive relative overflow-hidden rounded-3xl bg-navy p-8 text-ivory shadow-soft ring-1 ring-navy-600 sm:p-10"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <motion.div aria-hidden="true" className="ornament-tile absolute inset-0 opacity-[0.06]" {...reveal(0, 0)} />
      <motion.div aria-hidden="true" className="absolute inset-x-0 top-0 h-px gold-line" {...reveal(0, 0)} />

      <div className="relative">
        <motion.div className="relative mx-auto h-44 w-full max-w-md" {...reveal(0.2, 10, 1.3)}>
          <ArchiveVisual index={active} reduced={reduced} />
        </motion.div>

        <motion.div aria-hidden="true" className="mx-auto mt-6 flex h-5 w-40 items-center" {...reveal(0.8, 0)}>
          <span className="h-px flex-1 bg-gold/35" />
          <span className="mx-3 h-2.5 w-2.5 rotate-45 border border-gold/70" />
          <span className="h-px flex-1 bg-gold/35" />
        </motion.div>

        <motion.div className="glyph-safe-mask mt-5 text-center" {...reveal(0.95, 8)}>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.17em] text-ivory/72">
            Ornament · Textile · Memory
          </p>
        </motion.div>

        <div className="mx-auto mt-6 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5" role="tablist" aria-label="Heritage archive themes">
          {archiveItems.map((item, index) => (
            <motion.div
              key={item.id}
              {...reveal(1.1 + index * 0.09, 12)}
            >
              <button
                ref={(node) => { buttonRefs.current[index] = node; }}
                type="button"
                role="tab"
                aria-label={`Show ${item.label} archive theme. ${item.subtitle}`}
                aria-selected={active === index}
                aria-controls={`archive-panel-${item.id}`}
                tabIndex={active === index ? 0 : -1}
                onClick={() => select(index)}
                onMouseEnter={() => engageWithPointer(index)}
                onMouseLeave={() => setEngaged(null)}
                onFocus={() => {
                  select(index);
                  setEngaged(index);
                }}
                onBlur={() => setEngaged(null)}
                onKeyDown={(event) => onKeyDown(event, index)}
                className={`heritage-showcase-card relative block w-full overflow-hidden rounded-xl text-left outline-none ${
                  engaged !== null && engaged !== index ? "heritage-showcase-card--muted" : ""
                }`}
              >
                <span className="relative block aspect-[4/3] overflow-hidden sm:aspect-[5/6] lg:aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 230px, (min-width: 640px) 30vw, 85vw"
                    className="heritage-showcase-card__image object-cover"
                  />
                  <span className="heritage-showcase-card__veil absolute inset-0" />
                  <span className="heritage-showcase-card__content absolute inset-x-0 bottom-0 block px-4 pb-4 pt-12 text-center">
                    <span className="heritage-showcase-card__title block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ivory">
                      {item.label}
                    </span>
                    <span className="heritage-showcase-card__subtitle mt-1.5 block text-[0.7rem] leading-snug text-gold-soft/90">
                      {item.subtitle}
                    </span>
                  </span>
                </span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
