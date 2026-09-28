// @ts-nocheck — Codrops' imperative GSAP classes manage runtime DOM state.
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useReducedMotion } from "framer-motion";
import { galleryStills } from "@/content/data/media";

const titles = ["Community parade", "Dance and tradition", "Heritage on display", "Her Heart screening", "Portrait exhibition", "Gathering together", "Stories in print", "Art and memory", "A conversation", "Cooking together", "Hands on heritage", "A taste of Crimea"];
const positions = [[-24, 20], [14, 10], [-18, 23], [22, 18], [-26, 25], [28, 28], [-20, 16], [8, 30], [-12, 15], [15, 23], [-24, 24], [26, 16]];

export function InfiniteGallery({ desktopOnly = false }: { desktopOnly?: boolean }) {
  const root = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!desktopOnly) { setMounted(true); return; }
    const media = window.matchMedia("(min-width: 701px)");
    const update = () => setMounted(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [desktopOnly]);

  useEffect(() => {
    if (!mounted) return;
    let disposed = false;
    let cleanup = () => {};
    async function init() {
      const [{ default: Reveal }, { default: Slider }, { default: Transition }] = await Promise.all([
        import("./codrops/Reveal"), import("./codrops/Slider"), import("./codrops/Transition"),
      ]);
      if (disposed || !root.current) return;
      const element = root.current;
      const images = [...element.querySelectorAll<HTMLImageElement>(".gallery__img")];
      await Promise.all(images.map((img) => img.decode().catch(() => {})));
      if (disposed || !root.current) return;
      let slider: InstanceType<typeof Slider>;
      const transition = new Transition({ onClose: () => slider?.start() });
      const reveal = new Reveal();
      const SliderCtor = Slider as unknown as new (options: { enabled: () => boolean; onToggle: (changes: unknown, immediate: boolean) => void }) => InstanceType<typeof Slider>;
      slider = new SliderCtor({ enabled: () => transition.state === "closed", onToggle: (changes, immediate) => reveal.toggle(changes, immediate) });
      const listeners: Array<() => void> = [];
      element.querySelectorAll<HTMLElement>(".gallery__slide").forEach((slide, index) => {
        const open = () => { if (transition.state !== "closed") return; slider.stop(); transition.open(slide, index); };
        const key = (event: KeyboardEvent) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); open(); } };
        slide.addEventListener("click", open);
        slide.addEventListener("keydown", key);
        listeners.push(() => { slide.removeEventListener("click", open); slide.removeEventListener("keydown", key); });
      });
      const back = element.querySelector<HTMLButtonElement>(".content__back")!;
      const close = () => transition.close();
      const escape = (event: KeyboardEvent) => { if (event.key === "Escape") close(); };
      back.addEventListener("click", close);
      document.addEventListener("keydown", escape);
      element.classList.add("codrops-gallery--ready");
      cleanup = () => { listeners.forEach((remove) => remove()); back.removeEventListener("click", close); document.removeEventListener("keydown", escape); slider.destroy(); transition.tl?.kill(); transition.split?.revert(); };
    }
    init();
    return () => { disposed = true; cleanup(); };
  }, [mounted]);

  if (!mounted) return null;
  return createPortal(
    <motion.div
      className="codrops-gallery" ref={root}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduce ? 0.15 : 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="codrops-gallery__frame"><div><Link href="/gallery-classic">← Classic gallery</Link><span> / Community archive</span></div><span>Crimean Tatar Heritage Canada</span></div>
      <div className="codrops-gallery__instruction">Scroll or swipe to explore · Select an image</div>
      <div className="gallery" aria-label="Community photo gallery">
        {galleryStills.map((item, index) => (
          <figure className="gallery__slide" key={item.src} tabIndex={0} role="button" aria-label={`Open ${titles[index]}: ${item.alt}`}
            style={{ "--stagger": `${positions[index][0]}vw`, "--img-w": `${positions[index][1]}vw` } as React.CSSProperties}>
            <div className="gallery__img-wrapper">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="gallery__img" src={item.src} alt={item.alt} loading="eager" style={{ objectPosition: item.objectPosition ?? "center" }} />
            </div>
            <figcaption>{item.alt}</figcaption>
          </figure>
        ))}
      </div>
      <div className="content" role="dialog" aria-modal="true" aria-label="Photograph detail">
        <div className="content-wrapper">
          <figure className="content__preview-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" />
          </figure>
          <div className="content__group-list">
            <button className="content__back" type="button">← Back [ESC]</button>
            {galleryStills.map((item, index) => (
              <div className="content__group" data-index={index} key={item.src}>
                <h2 className="content__title">{titles[index]}</h2>
                <p className="content__description">{item.alt}</p>
                <p className="content__count">{String(index + 1).padStart(2, "0")} / {galleryStills.length}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>, document.body
  );
}
