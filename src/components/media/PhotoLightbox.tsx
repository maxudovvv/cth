"use client";

import Image, { type StaticImageData } from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type PhotoLightboxProps = {
  src: string | StaticImageData;
  alt: string;
  children: ReactNode;
  className?: string;
};

export function PhotoLightbox({ src, alt, children, className = "" }: PhotoLightboxProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduce = Boolean(useReducedMotion());

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    window.setTimeout(() => triggerRef.current?.focus(), reduce ? 0 : 220);
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className={`group block cursor-zoom-in overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 ${className}`}
        aria-label={`Open image: ${alt}`}
      >
        {children}
      </button>

      {mounted && createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Image viewer"
              className="gallery-lightbox fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden px-3 py-20 sm:px-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.22 }}
              onClick={close}
            >
              <div aria-hidden="true" className="gallery-lightbox__ambient absolute inset-[-3rem]">
                <Image src={src} alt="" fill sizes="100vw" className="object-cover" />
              </div>
              <div aria-hidden="true" className="gallery-lightbox__scrim pointer-events-none absolute inset-0" />
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                className="absolute right-4 top-4 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 bg-[#071827]/85 text-white shadow-lg backdrop-blur-md transition hover:rotate-90 hover:border-gold hover:bg-[#10283a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:right-8 sm:top-7"
                aria-label="Close viewer"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                </svg>
              </button>
              <motion.figure
                className="gallery-lightbox__figure relative z-10 w-full max-w-6xl"
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10, scale: 0.985 }}
                transition={{ duration: reduce ? 0 : 0.38, ease: [0.22, 1, 0.36, 1] }}
                onClick={(event) => event.stopPropagation()}
              >
                <div className="gallery-lightbox__frame relative mx-auto w-full overflow-hidden rounded-[1.15rem] border border-white/15 bg-[#030a11]/75 shadow-[0_35px_100px_rgba(0,0,0,0.68)]">
                  <Image src={src} alt={alt} fill sizes="90vw" className="object-contain" />
                </div>
                <figcaption className="gallery-lightbox__caption mx-auto mt-4 max-w-3xl px-8 text-center text-sm leading-relaxed text-white/80 sm:px-0">
                  {alt}
                </figcaption>
              </motion.figure>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
}
