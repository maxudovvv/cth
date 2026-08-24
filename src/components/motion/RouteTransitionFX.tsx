"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";

/**
 * Route-transition flourish: a very short deep-navy veil that briefly rises then
 * fades, plus a thin gold line that sweeps beneath the fixed header — creating a
 * sense of continuity between pages. Sits BELOW the fixed header (z < 50), never
 * blocks pointer input (pointer-events-none), and is fully disabled under
 * prefers-reduced-motion. Not a loading bar — it always completes quickly.
 */
export function RouteTransitionFX() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const first = useRef(true);
  const veil = useAnimationControls();
  const sweep = useAnimationControls();

  useEffect(() => {
    // Skip the initial page load — only pulse on real navigations.
    if (first.current) {
      first.current = false;
      return;
    }
    if (reduce) return;

    veil.set({ opacity: 0.24 });
    veil.start({ opacity: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } });

    sweep.set({ scaleX: 0, opacity: 1 });
    sweep.start({
      scaleX: 1,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        opacity: { delay: 0.3, duration: 0.2 },
      },
    });
  }, [pathname, reduce, veil, sweep]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[45]">
      <motion.div initial={{ opacity: 0 }} animate={veil} className="absolute inset-0 bg-navy" />
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={sweep}
        style={{ transformOrigin: "left center" }}
        className="absolute left-0 top-[68px] h-[2px] w-full bg-gold"
      />
    </div>
  );
}
