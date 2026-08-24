import type { CSSProperties } from "react";

/**
 * NEUTRAL PLACEHOLDER MARK — not the tamga.
 *
 * The Crimean Tatar tamga is a protected cultural symbol. This project does NOT
 * have approved tamga artwork yet, so this file provides a deliberately NEUTRAL,
 * ABSTRACT placeholder mark. It must NOT be presented as the tamga and must NOT
 * be treated as an authentic symbol.
 *
 * REPLACEMENT POINT: when the organization supplies approved tamga artwork
 * (SVG preferred) with usage rules, replace this component's artwork with the
 * approved asset. Do not redraw, restyle, recolor, or distort the tamga. See
 * CLAUDE.md (Cultural integrity) and docs/media-workflow.md.
 */

type Props = {
  className?: string;
  style?: CSSProperties;
  title?: string;
};

export function TamgaPlaceholder({
  className,
  style,
  title = "Crimean Tatar Heritage Canada — placeholder mark (approved logo/tamga pending)",
}: Props) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 64 64"
      role="img"
      aria-label={title}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      {/* Neutral abstract mark: a ringed diamond. Intentionally generic. */}
      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <path
        d="M32 12 L52 32 L32 52 L12 32 Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M32 22 L42 32 L32 42 L22 32 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        opacity="0.7"
      />
    </svg>
  );
}
