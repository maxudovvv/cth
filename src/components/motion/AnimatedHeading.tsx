"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import {
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { premiumEase } from "@/lib/motion";

type HeadingTag = "h1" | "h2" | "h3";
type HeadingTrigger = "load" | "view";

/**
 * Delays a mount entrance by one painted frame. This keeps the server-rendered
 * reveal start state on screen long enough for a real refresh to animate, while
 * remaining stable across ordinary rerenders, menu state, and viewport changes.
 */
export function useAnimationReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return ready;
}

export function AnimatedHeading({
  as = "h2",
  children,
  lines,
  className,
  id,
  delay = 0,
  duration,
  stagger = 0.1,
  trigger = "view",
  amount = 0.25,
}: {
  as?: HeadingTag;
  children?: ReactNode;
  lines?: ReactNode[];
  className?: string;
  id?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  trigger?: HeadingTrigger;
  amount?: number;
}) {
  const reduceMotion = Boolean(useReducedMotion());
  const ready = useAnimationReady();
  const Component = motion[as] as typeof motion.h2;
  const content = lines?.length ? lines : [children];
  const resolvedDuration = duration ?? (as === "h3" ? 0.62 : 0.78);

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: reduceMotion ? 0 : delay,
        staggerChildren: reduceMotion ? 0 : stagger,
      },
    },
  };
  const line: Variants = {
    hidden: reduceMotion
      ? { y: "0%", opacity: 1, filter: "blur(0px)" }
      : { y: "108%", opacity: 0, filter: "blur(3px)" },
    visible: {
      y: "0%",
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: reduceMotion ? 0 : resolvedDuration,
        ease: premiumEase,
      },
    },
  };
  const triggerProps: Pick<
    HTMLMotionProps<"h2">,
    "animate" | "whileInView" | "viewport"
  > =
    trigger === "load"
      ? { animate: ready || reduceMotion ? "visible" : "hidden" }
      : {
          whileInView: "visible",
          viewport: { once: true, amount },
        };

  return (
    <Component
      id={id}
      data-motion-reveal
      className={className}
      initial="hidden"
      variants={container}
      {...triggerProps}
    >
      {content.map((item, index) => (
        <span className="mask-line" key={index}>
          <motion.span
            data-motion-reveal
            className="mask-line__content"
            variants={line}
          >
            {item}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
