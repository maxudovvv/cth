"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import type { ReactNode } from "react";
import {
  imageReveal,
  maskReveal,
  revealVariants,
  staggerContainer,
  staggerItem,
  viewportOnce,
  type RevealDirection,
} from "@/lib/motion";

type MotionTag = "div" | "section" | "li" | "article" | "span" | "figure";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
  direction?: RevealDirection;
  distance?: number;
  as?: MotionTag;
};

export function Reveal({
  children,
  className,
  delay = 0,
  amount = viewportOnce.amount,
  direction = "up",
  distance,
  as = "div",
}: RevealProps) {
  const reduceMotion = Boolean(useReducedMotion());
  const Component = motion[as] as typeof motion.div;
  const variants = revealVariants({
    direction,
    distance,
    reduced: reduceMotion,
  });

  return (
    <Component
      data-motion-reveal
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}

export function StaggerGroup({
  children,
  className,
  as = "div",
  stagger,
  amount = viewportOnce.amount,
}: {
  children: ReactNode;
  className?: string;
  as?: MotionTag;
  stagger?: number;
  amount?: number;
}) {
  const reduceMotion = Boolean(useReducedMotion());
  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      data-motion-reveal
      className={className}
      variants={staggerContainer(reduceMotion, stagger)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: MotionTag;
}) {
  const reduceMotion = Boolean(useReducedMotion());
  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      data-motion-reveal
      className={className}
      variants={staggerItem(reduceMotion)}
    >
      {children}
    </Component>
  );
}

export function MaskedText({
  children,
  className,
  delay = 0,
  trigger = "view",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  trigger?: "load" | "view";
}) {
  const reduceMotion = Boolean(useReducedMotion());
  const animationProps: Pick<
    HTMLMotionProps<"span">,
    "animate" | "whileInView" | "viewport"
  > =
    trigger === "load"
      ? { animate: "show" }
      : { whileInView: "show", viewport: viewportOnce };

  return (
    <span className={`mask-line ${className ?? ""}`}>
      <motion.span
        data-motion-reveal
        className="mask-line__content"
        initial="hidden"
        variants={maskReveal(reduceMotion)}
        transition={{ delay }}
        {...animationProps}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function ImageReveal({
  children,
  className,
  amount = 0.16,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <motion.div
      data-motion-reveal
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={imageReveal(reduceMotion)}
    >
      {children}
    </motion.div>
  );
}
