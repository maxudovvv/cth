import type { Config } from "tailwindcss";

/**
 * Tailwind maps to CSS variables defined in src/app/globals.css so that the
 * design tokens have a single source of truth. All palette VALUES are
 * PROVISIONAL and require contrast testing + organizational approval.
 */
const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "var(--color-navy)",
        "navy-700": "var(--color-navy-700)",
        "navy-600": "var(--color-navy-600)",
        gold: "var(--color-gold)",
        "gold-soft": "var(--color-gold-soft)",
        turquoise: "var(--color-turquoise)",
        sand: "var(--color-sand)",
        pomegranate: "var(--color-pomegranate)",
        ivory: "var(--color-ivory)",
        "ivory-dim": "var(--color-ivory-dim)",
        ink: "var(--color-ink)",
        "ink-soft": "var(--color-ink-soft)",
        line: "var(--color-line)",
      },
      fontFamily: {
        display: "var(--font-display)",
        sans: "var(--font-body)",
      },
      maxWidth: {
        prose: "68ch",
        content: "72rem",
        wide: "84rem",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        DEFAULT: "var(--radius)",
        lg: "var(--radius-lg)",
      },
      transitionTimingFunction: {
        entrance: "var(--ease-entrance)",
        exit: "var(--ease-exit)",
      },
      transitionDuration: {
        fast: "var(--dur-fast)",
        base: "var(--dur-base)",
        slow: "var(--dur-slow)",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(14,27,42,0.06), 0 8px 24px -12px rgba(14,27,42,0.25)",
        lift: "0 2px 6px rgba(14,27,42,0.08), 0 18px 40px -18px rgba(14,27,42,0.35)",
        gold: "0 18px 45px -28px rgba(195,154,63,0.55), inset 0 1px 0 rgba(255,255,255,0.10)",
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
    },
  },
  plugins: [],
};

export default config;
