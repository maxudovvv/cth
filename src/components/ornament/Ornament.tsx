import type { CSSProperties } from "react";

/**
 * PROVISIONAL abstract ornament system.
 *
 * These are ORIGINAL, ABSTRACT geometric motifs inspired by the general idea of
 * geometric continuity and textile rhythm. They are NOT presented as authentic
 * historical Crimean Tatar ornament. Authentic ornament must be sourced and
 * verified with the organization (see crimean-tatar-cultural-reviewer skill)
 * before any claim of authenticity. Replacement point documented in
 * docs/design-system.md and docs/provisional-content-policy.md.
 */

type OrnamentProps = {
  className?: string;
  style?: CSSProperties;
};

/** A horizontal ornamental divider line with a rhythmic geometric center. */
export function OrnamentDivider({ className, style }: OrnamentProps) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 240 24"
      role="presentation"
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="0" y1="12" x2="92" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="148" y1="12" x2="240" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <g stroke="currentColor" strokeWidth="1.25" opacity="0.9">
        <path d="M104 12 L120 4 L136 12 L120 20 Z" />
        <path d="M112 12 L120 8 L128 12 L120 16 Z" fill="currentColor" fillOpacity="0.25" />
      </g>
    </svg>
  );
}

/**
 * An animatable ornamental line (single path) suitable for GSAP/CSS stroke
 * reveal. The path length is stable so a draw animation can be layered on.
 */
export function OrnamentLine({ className, style }: OrnamentProps) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 320 40"
      role="presentation"
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 20 H120 M120 20 L136 8 L152 20 L136 32 Z M152 20 L168 8 L184 20 L168 32 Z M184 20 H316"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** A subtle geometric corner/background motif for section framing. */
export function OrnamentMotif({ className, style }: OrnamentProps) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 120 120"
      role="presentation"
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="currentColor" strokeWidth="1" opacity="0.5">
        <path d="M60 6 L114 60 L60 114 L6 60 Z" />
        <path d="M60 26 L94 60 L60 94 L26 60 Z" />
        <path d="M60 46 L74 60 L60 74 L46 60 Z" />
        <line x1="60" y1="6" x2="60" y2="114" />
        <line x1="6" y1="60" x2="114" y2="60" />
      </g>
    </svg>
  );
}
