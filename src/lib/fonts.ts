/**
 * INTENDED WEB FONTS (not active in this offline prototype).
 *
 * The design calls for two open-source (SIL Open Font License) typefaces:
 *   - Fraunces — expressive display serif (headings)
 *   - Inter    — humanist sans with broad Latin-extended coverage, including
 *                Crimean Tatar Latin diacritics (â ç ğ ı İ ñ ö ş ü) — body text
 *
 * This build environment cannot reach Google Fonts, so the prototype falls back
 * to system font stacks (see src/app/globals.css: --font-display / --font-body).
 * No font files are committed.
 *
 * TO ENABLE the intended fonts in a networked environment, restore next/font:
 *
 *   import { Fraunces, Inter } from "next/font/google";
 *   export const fraunces = Fraunces({
 *     subsets: ["latin", "latin-ext"], weight: ["400","500","600"],
 *     style: ["normal","italic"], display: "swap", variable: "--font-fraunces",
 *   });
 *   export const inter = Inter({
 *     subsets: ["latin", "latin-ext"], weight: ["400","500","600","700"],
 *     display: "swap", variable: "--font-inter",
 *   });
 *
 * Then in src/app/layout.tsx add `className={`${fraunces.variable} ${inter.variable}`}`
 * to <html>, and in globals.css set:
 *   --font-display: var(--font-fraunces), <serif fallback>;
 *   --font-body:    var(--font-inter), <sans fallback>;
 *
 * (Alternatively self-host the OFL font files via next/font/local.)
 */

export const INTENDED_FONTS = {
  display: "Source Serif 4 (SIL OFL)",
  body: "Manrope (SIL OFL)",
} as const;
