"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Cross-page transition. The wrapper is keyed by pathname so every destination
 * receives a fresh entrance while Next's live App Router context is left intact.
 * Keeping an outgoing route mounted via the private LayoutRouterContext can
 * freeze stale children during rapid client navigations, so the exit flourish is
 * handled separately by RouteTransitionFX instead. The fixed Header/Footer stay
 * mounted outside this wrapper.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const mainRef = useRef<HTMLDivElement>(null);

  // Scroll to top and move focus to the fresh content on each route change.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    const t = window.setTimeout(
      () => mainRef.current?.focus({ preventScroll: true }),
      reduce ? 0 : 300,
    );
    return () => window.clearTimeout(t);
  }, [pathname, reduce]);

  return (
    <motion.div
      data-motion-reveal
      key={pathname}
      ref={mainRef}
      tabIndex={-1}
      className="outline-none"
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: reduce ? 0.15 : 0.42, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      {children}
    </motion.div>
  );
}
