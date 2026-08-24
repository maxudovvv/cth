"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { primaryNav, donateNav } from "@/content/data/site";

const BRAND_LOGO = "/media/brand/crimean-tatar-heritage-canada-logo-dark.png";

/**
 * Premium navbar adapted from the legacy CACT pattern: fixed, high-contrast navy
 * over every page; animated center-out hover underline
 * + a class-driven active underline (hydration-safe); distinct gold Donate button; full-
 * screen accessible mobile overlay. Light text throughout (dark-themed bar) keeps
 * contrast strong over both the hero and light sections. Reduced-motion aware.
 */
export function Header() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`relative z-50 border-b backdrop-blur-xl transition-[background-color,border-color,backdrop-filter,box-shadow] duration-500 ${
          scrolled || open
            ? "border-[rgba(217,189,119,0.22)] bg-[rgba(10,23,37,0.97)] shadow-[0_8px_30px_rgba(3,10,18,0.24)]"
            : "border-[rgba(247,242,232,0.14)] bg-[rgba(10,23,37,0.86)] shadow-[0_6px_24px_rgba(3,10,18,0.12)]"
        }`}
      >
        <nav className="container-wide flex h-[68px] items-center justify-between" aria-label="Primary">
          <Link
            href="/"
            className="group inline-flex items-center"
            aria-label="Crimean Tatar Heritage Canada — home"
          >
            <span className="relative h-14 w-[84px] shrink-0 overflow-hidden rounded-lg transition-transform duration-300 group-hover:-translate-y-0.5">
              <Image
                src={BRAND_LOGO}
                alt=""
                fill
                priority
                sizes="84px"
                className="object-contain mix-blend-screen"
              />
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 xl:flex">
            {primaryNav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`group relative inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-medium [text-shadow:_0_1px_6px_rgba(7,17,31,0.5)] transition-[color,background-color,transform] duration-200 ease-out focus-visible:rounded-full active:scale-[0.97] ${
                      active
                        ? "text-gold"
                        : "text-ivory hover:bg-white/[0.08] hover:text-gold-soft active:bg-white/10"
                    }`}
                  >
                    {item.label}
                    {/* Hover underline — ALWAYS rendered (deterministic markup);
                        grows from centre on hover; hidden for the active item,
                        which uses the shared sliding indicator below. */}
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute inset-x-3.5 -bottom-0.5 h-[2px] origin-center rounded-full bg-gold-soft/80 transition-transform duration-200 ease-out ${
                        active ? "scale-x-0" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                  {/* Shared active indicator — a single gold underline that SLIDES
                      from the previous item to the new one (Framer layoutId).
                      Gated ONLY on `active` (deterministic from the route), so
                      server and client agree — no hydration mismatch. `reduce`
                      only affects the transition timing, never the markup. */}
                  {active && (
                    <motion.span
                      layoutId="nav-active-underline"
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-3.5 -bottom-0.5 h-[2px] rounded-full bg-gold"
                      transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-3 xl:flex">
            <Link
              href={donateNav.href}
              className="inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy shadow-gold transition-[transform,background-color,filter,box-shadow] duration-200 ease-out focus-visible:rounded-full hover:-translate-y-px hover:scale-[1.015] hover:bg-gold-soft active:translate-y-0 active:scale-[0.985] active:brightness-95"
            >
              Donate
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-ivory backdrop-blur transition-transform active:scale-95 xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.3 }}
            className="fixed inset-0 top-0 z-40 xl:hidden"
          >
            <div className="absolute inset-0 bg-[rgba(10,23,37,0.97)] backdrop-blur-xl" onClick={() => setOpen(false)} />
            <motion.nav
              aria-label="Primary (mobile)"
              initial={{ y: reduce ? 0 : -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: reduce ? 0 : -16, opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative mt-[68px] flex flex-col gap-1 px-6 pb-10 pt-6"
            >
              {primaryNav.map((item, i) => {
                const active = isActive(item.href);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: reduce ? 0 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: reduce ? 0 : 0.05 * i + 0.08, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`flex min-h-[48px] items-center justify-between rounded-lg border-b border-white/10 px-2 py-3 font-display text-2xl transition-[color,background-color,transform] duration-200 focus-visible:rounded-lg active:scale-[0.99] ${
                        active ? "bg-gold/10 text-gold" : "text-ivory hover:text-gold-soft active:bg-white/5"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        {active && <span className="h-5 w-[3px] rounded-full bg-gold" aria-hidden="true" />}
                        {item.label}
                      </span>
                      {active && <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />}
                    </Link>
                  </motion.div>
                );
              })}
              <Link
                href={donateNav.href}
                className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full bg-gold px-6 py-4 font-semibold text-navy transition-[transform,filter] duration-200 focus-visible:rounded-full active:scale-[0.98] active:brightness-95"
              >
                Donate
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
