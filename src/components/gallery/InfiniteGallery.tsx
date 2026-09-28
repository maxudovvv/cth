"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { galleryStills } from "@/content/data/media";

const count = galleryStills.length;

export function InfiniteGallery() {
  const scroller = useRef<HTMLDivElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    setMounted(true);
    const node = scroller.current;
    if (node) node.scrollTop = node.scrollHeight / 3;
  }, []);

  const onScroll = () => {
    const node = scroller.current;
    if (!node) return;
    const third = node.scrollHeight / 3;
    if (node.scrollTop < third * 0.5) node.scrollTop += third;
    if (node.scrollTop > third * 1.5) node.scrollTop -= third;
  };

  const close = useCallback(() => {
    setOpen(null);
    window.setTimeout(() => lastTrigger.current?.focus(), 0);
  }, []);
  useEffect(() => {
    if (open === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") setOpen((value) => value === null ? null : (value + 1) % count);
      if (event.key === "ArrowLeft") setOpen((value) => value === null ? null : (value - 1 + count) % count);
    };
    window.addEventListener("keydown", keydown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", keydown);
    };
  }, [open, close]);

  return (
    <main className="infinite-gallery">
      <div className="infinite-gallery__intro">
        <Link href="/gallery" className="infinite-gallery__back">← Original gallery</Link>
        <p className="infinite-gallery__eyebrow">Experimental view · Community archive</p>
        <h1>Moments from our community</h1>
        <p>Scroll to explore. Select a photograph to see it in focus.</p>
        <span className="infinite-gallery__hint">↓ Scroll or swipe</span>
      </div>
      <div className="infinite-gallery__viewport" ref={scroller} onScroll={onScroll} aria-label="Community photographs">
        {Array.from({ length: 3 }, (_, copy) => galleryStills.map((item, index) => (
          <button
            className="infinite-gallery__card"
            key={`${copy}-${index}`}
            type="button"
            aria-label={`View photograph ${index + 1}: ${item.alt}`}
            onClick={(event) => { lastTrigger.current = event.currentTarget; setOpen(index); }}
          >
            <span className="infinite-gallery__photo">
              <Image src={item.src} alt="" fill sizes="(max-width: 700px) 84vw, 43vw" className="object-cover" style={{ objectPosition: item.objectPosition ?? "center" }} />
            </span>
            <span className="infinite-gallery__index">{String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}</span>
            <span className="infinite-gallery__label">{item.alt}</span>
          </button>
        )))}
      </div>
      {mounted && createPortal(
        <AnimatePresence>
          {open !== null && (
            <motion.div className="infinite-gallery__overlay" role="dialog" aria-modal="true" aria-label="Photograph viewer"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : 0.25 }}>
              <button className="infinite-gallery__dismiss" aria-label="Close photograph" onClick={close} ref={closeButton}>×</button>
              <button className="infinite-gallery__arrow" aria-label="Previous photograph" onClick={() => setOpen((open - 1 + count) % count)}>←</button>
              <motion.figure key={open} className="infinite-gallery__detail" initial={{ opacity: 0, scale: reduced ? 1 : 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: reduced ? 0 : 0.45 }}>
                <div className="infinite-gallery__detail-photo"><Image src={galleryStills[open]!.src} alt={galleryStills[open]!.alt} fill sizes="90vw" className="object-contain" /></div>
                <figcaption>{galleryStills[open]!.alt} <span>{String(open + 1).padStart(2, "0")} / {count}</span></figcaption>
              </motion.figure>
              <button className="infinite-gallery__arrow" aria-label="Next photograph" onClick={() => setOpen((open + 1) % count)}>→</button>
            </motion.div>
          )}
        </AnimatePresence>, document.body)}
    </main>
  );
}
