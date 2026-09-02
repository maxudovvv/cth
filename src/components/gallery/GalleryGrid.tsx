"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { galleryStills } from "@/content/data/media";
import { staggerContainer, staggerItem } from "@/lib/motion";

type Item = (typeof galleryStills)[number];

/**
 * Balanced gallery + accessible lightbox. Keyboard: Enter/Space opens, Esc closes,
 * ArrowLeft/Right navigate. Focus returns to the trigger on close. No visible
 * permission labels in normal preview; metadata stays in the registry.
 */
export function GalleryGrid() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => {
    setOpen((current) => {
      if (current !== null) {
        window.setTimeout(() => triggerRefs.current[current]?.focus(), reduce ? 0 : 220);
      }
      return null;
    });
  }, [reduce]);
  const show = useCallback(
    (dir: number) =>
      setOpen((cur) => (cur === null ? cur : (cur + dir + galleryStills.length) % galleryStills.length)),
    [],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") show(1);
      else if (e.key === "ArrowLeft") show(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, show]);

  const current = open === null ? null : galleryStills[open];

  return (
    <>
      <motion.div
        data-motion-reveal
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.06 }}
        variants={staggerContainer(Boolean(reduce), 0.065)}
      >
        {galleryStills.map((g, i) => (
          <motion.figure
            data-motion-reveal
            key={g.src}
            className="min-w-0"
            variants={staggerItem(Boolean(reduce))}
          >
            <button
              ref={(node) => { triggerRefs.current[i] = node; }}
              type="button"
              onClick={() => setOpen(i)}
              className="gallery-card group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-ivory"
              aria-label={`Open image: ${g.alt}`}
            >
              <span className="relative block aspect-[4/3] w-full">
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  loading="lazy"
                  className="gallery-card__image object-cover"
                  style={{ objectPosition: g.objectPosition ?? "center" }}
                />
                <span aria-hidden="true" className="gallery-card__veil pointer-events-none absolute inset-0" />
                <span aria-hidden="true" className="gallery-card__glint pointer-events-none absolute inset-0" />
                <span className="gallery-card__caption pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-5 text-left text-ivory">
                  <span className="min-w-0">
                    <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold-light">
                      Community archive
                    </span>
                    <span className="gallery-card__description mt-1.5 line-clamp-2 block text-sm leading-snug text-ivory/90">
                      {g.alt}
                    </span>
                  </span>
                  <span className="gallery-card__number shrink-0 font-serif text-2xl text-ivory/55" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="gallery-card__zoom pointer-events-none absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-navy/70 text-ivory shadow-lg backdrop-blur-md"
                >
                  <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.6" />
                    <path d="m16 16 4 4M11 8v6M8 11h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
              </span>
            </button>
          </motion.figure>
        ))}
      </motion.div>

      {mounted && createPortal(
        <AnimatePresence>
          {current && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-navy/90 p-3 backdrop-blur-xl sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
            onClick={close}
          >
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(27,159,181,0.13),transparent_50%)]" />
            <div className="absolute left-4 top-4 z-10 rounded-full border border-white/15 bg-black/20 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-ivory/80 backdrop-blur-md sm:left-8 sm:top-7">
              {String(open! + 1).padStart(2, "0")} / {String(galleryStills.length).padStart(2, "0")}
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              className="absolute right-4 top-4 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-ivory backdrop-blur-md transition hover:rotate-90 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:right-8 sm:top-7"
              aria-label="Close viewer"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); show(-1); }}
              className="absolute bottom-5 left-4 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-ivory backdrop-blur-md transition hover:-translate-x-1 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:bottom-auto sm:left-8"
              aria-label="Previous image"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); show(1); }}
              className="absolute bottom-5 right-4 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-ivory backdrop-blur-md transition hover:translate-x-1 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:bottom-auto sm:right-8"
              aria-label="Next image"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>

            <motion.figure
              key={current.src}
              className="relative max-h-[88vh] w-full max-w-6xl"
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 28, scale: 0.965 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -14, scale: 0.985 }}
              transition={{ duration: reduce ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative mx-auto h-[72vh] w-full overflow-hidden rounded-[1.4rem] border border-white/10 bg-black/20 shadow-[0_32px_90px_rgba(0,0,0,0.55)] sm:h-[78vh]">
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  style={{ objectPosition: "center" }}
                />
              </div>
              <figcaption className="mx-auto mt-4 max-w-3xl px-14 text-center text-sm leading-relaxed text-ivory/80 sm:px-0">{current.alt}</figcaption>
            </motion.figure>
          </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
}
