"use client";

import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";
import { useEffect, useId, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const chapters = [
  { label: "About us", href: "/about", number: "01" },
  { label: "Our activities", href: "/our-activities", number: "02" },
  { label: "Crimean Tatars", href: "/about-crimean-tatars", number: "03" },
  { label: "Gallery", href: "/gallery", number: "04" },
  { label: "Contact", href: "/contact", number: "05" },
  { label: "Donate", href: "/donate", number: "06" },
] as const;

type HeritageBookProps = {
  variant?: "book" | "scene-hotspot";
};

export function HeritageBook({ variant = "book" }: HeritageBookProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogTitleId = useId();
  const reduceMotion = Boolean(useReducedMotion());

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
        className={`heritage-book-trigger group ${variant === "scene-hotspot" ? "heritage-book-trigger--scene" : ""}`}
      >
        {variant === "book" ? (
          <>
        <span className="heritage-book-shadow" aria-hidden="true" />
        <span className="heritage-book-closed" aria-hidden="true">
          <span className="heritage-book-pages" />
          <span className="heritage-book-cover">
            <Image
              src="/media/brand/crimean-tatar-heritage-canada-logo-dark.png"
              alt=""
              width={112}
              height={112}
              className="heritage-book-logo"
            />
            <span className="heritage-book-kicker">A living archive</span>
            <span className="heritage-book-title">Crimean Tatar<br />Heritage Canada</span>
            <span className="heritage-book-rule" />
            <span className="heritage-book-open-label">Open the book</span>
          </span>
        </span>
        <span className="heritage-book-hint">Explore our story</span>
          </>
        ) : (
          <>
            <span className="heritage-book-scene-aura" aria-hidden="true" />
            <span className="heritage-book-scene-object" aria-hidden="true">
              <Image
                src="/media/interactive/heritage-book-cutout.png"
                alt=""
                width={302}
                height={225}
                priority
              />
            </span>
            <span className="heritage-book-scene-label">Open the heritage book</span>
          </>
        )}
      </button>

      {isOpen && createPortal(
        <div
          className={`heritage-book-dialog ${reduceMotion ? "heritage-book-dialog--still" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby={dialogTitleId}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <button
            ref={closeRef}
            type="button"
            className="heritage-book-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close the heritage book"
          >
            <span aria-hidden="true">×</span>
            <span>Close</span>
          </button>

          <div className="heritage-book-open" data-book-open>
            <div className="heritage-book-opening-cover" aria-hidden="true">
              <Image
                src="/media/brand/crimean-tatar-heritage-canada-logo-dark.png"
                alt=""
                width={112}
                height={112}
              />
              <span>Crimean Tatar<br />Heritage Canada</span>
            </div>
            <div className="heritage-book-spread">
              <section className="heritage-book-page heritage-book-page--left">
                <p className="heritage-book-page-kicker">Welcome</p>
                <h2 id={dialogTitleId}>A heritage carried forward</h2>
                <p>
                  Enter a living collection of Crimean Tatar culture, memory,
                  language, community gatherings, film and literature in Canada.
                </p>
                <div className="heritage-book-mark" aria-hidden="true">
                  <Image
                    src="/media/brand/crimean-tatar-heritage-canada-logo-dark.png"
                    alt=""
                    width={88}
                    height={88}
                  />
                </div>
                <p className="heritage-book-page-number">Crimean Tatar Heritage Canada</p>
              </section>

              <nav className="heritage-book-page heritage-book-page--right" aria-label="Book chapters">
                <p className="heritage-book-page-kicker">Contents</p>
                <h2>Choose a chapter</h2>
                <ol className="heritage-book-chapters">
                  {chapters.map((chapter) => (
                    <li key={chapter.href}>
                      <Link href={chapter.href} onClick={() => setIsOpen(false)}>
                        <span>{chapter.label}</span>
                        <span className="heritage-book-dots" aria-hidden="true" />
                        <span>{chapter.number}</span>
                      </Link>
                    </li>
                  ))}
                </ol>
                <p className="heritage-book-page-number">Contents · I</p>
              </nav>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
