import type { Variants } from "framer-motion";

export const premiumEase = [0.22, 1, 0.36, 1] as const;

export const motionTokens = {
  durations: {
    micro: 0.2,
    ui: 0.4,
    reveal: 0.68,
    cinematic: 0.95,
  },
  ease: {
    entrance: premiumEase,
    exit: [0.4, 0, 1, 1] as const,
  },
  stagger: 0.08,
  revealDistance: 28,
  hoverScale: 1.025,
} as const;

export const viewportOnce = { once: true, amount: 0.18 } as const;

export type RevealDirection = "up" | "down" | "left" | "right" | "none";

export function revealVariants({
  direction = "up",
  distance = motionTokens.revealDistance,
  reduced = false,
}: {
  direction?: RevealDirection;
  distance?: number;
  reduced?: boolean;
} = {}): Variants {
  const offsets = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  return {
    hidden: reduced
      ? { opacity: 1, x: 0, y: 0, filter: "blur(0px)" }
      : {
          opacity: 0,
          ...offsets[direction],
          filter: "blur(5px)",
        },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: reduced ? 0 : motionTokens.durations.reveal,
        ease: premiumEase,
      },
    },
  };
}

export const fadeIn = (reduced = false): Variants =>
  revealVariants({ direction: "none", reduced });
export const fadeUp = (reduced = false): Variants =>
  revealVariants({ direction: "up", reduced });
export const fadeDown = (reduced = false): Variants =>
  revealVariants({ direction: "down", reduced });
export const fadeLeft = (reduced = false): Variants =>
  revealVariants({ direction: "left", reduced });
export const fadeRight = (reduced = false): Variants =>
  revealVariants({ direction: "right", reduced });

export function staggerContainer(
  reduced = false,
  stagger: number = motionTokens.stagger,
): Variants {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduced ? 0 : stagger,
        delayChildren: reduced ? 0 : 0.04,
      },
    },
  };
}

export const staggerItem = (reduced = false): Variants =>
  revealVariants({ direction: "up", distance: 22, reduced });

export const maskReveal = (reduced = false): Variants => ({
  hidden: reduced ? { y: "0%", opacity: 1 } : { y: "112%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: reduced ? 0 : motionTokens.durations.cinematic,
      ease: premiumEase,
    },
  },
});

export const scaleReveal = (reduced = false): Variants => ({
  hidden: reduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.975 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: reduced ? 0 : motionTokens.durations.reveal,
      ease: premiumEase,
    },
  },
});

export const imageReveal = (reduced = false): Variants => ({
  hidden: reduced
    ? { opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0%)" }
    : { opacity: 0.7, scale: 1.04, clipPath: "inset(0% 0% 100% 0%)" },
  show: {
    opacity: 1,
    scale: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: reduced ? 0 : 0.82,
      ease: premiumEase,
    },
  },
});
