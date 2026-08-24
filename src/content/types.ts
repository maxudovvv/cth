/**
 * Content types for the provisional MVP prototype.
 *
 * Every substantive content record carries governance metadata so that
 * provisional material can never be silently mistaken for approved content.
 * This mirrors the project's content-status system (see CLAUDE.md and
 * docs/provisional-content-policy.md).
 */

export type ContentStatus =
  | "provisional"
  | "verified"
  | "organization-approved"
  | "requires-source"
  | "requires-permission"
  | "requires-cultural-review";

export type PermissionStatus =
  | "n/a"
  | "requires-permission"
  | "requested"
  | "granted"
  | "denied";

export type ReviewStatus =
  | "not-reviewed"
  | "requires-cultural-review"
  | "reviewed"
  | "organization-approved";

export type Locale = "en" | "crh" | "fr" | "uk";

/** Governance metadata attached to every content record. */
export interface ContentMeta {
  status: ContentStatus;
  /** Where the content came from, or how it should be sourced. */
  source: string;
  permissionStatus: PermissionStatus;
  reviewStatus: ReviewStatus;
  locale: Locale;
  lastUpdated: string; // ISO date
}

export interface NavItem {
  label: string;
  href: string;
  /** Show in the primary (focused) navigation. */
  primary: boolean;
}

export interface HeritageTopic {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  href: string;
  meta: ContentMeta;
}

export interface EventItem {
  id: string;
  title: string;
  /** Human-readable, deliberately NON-specific for provisional entries. */
  timeframe: string;
  locationLabel: string;
  summary: string;
  meta: ContentMeta;
}

export interface BookItem {
  id: string;
  title: string; // provisional placeholder label, not a real title
  contributorRole: string; // e.g. "Author (to be confirmed)"
  summary: string;
  meta: ContentMeta;
}

export interface FilmItem {
  id: string;
  title: string; // provisional placeholder label, not a real title
  format: string; // e.g. "Subtitled screening (English)"
  summary: string;
  meta: ContentMeta;
}

export interface GalleryItem {
  id: string;
  /** Path under /public/media/placeholders — NEVER pending or Facebook media. */
  placeholderSrc: string;
  altPlaceholder: string;
  captionPlaceholder: string;
  meta: ContentMeta;
}

export interface CallToAction {
  id: string;
  label: string;
  description: string;
  href: string;
  meta: ContentMeta;
}

/**
 * Configuration for a reusable media slot. Renders a supplied photograph today
 * and is ready for future video/animation without layout changes. See
 * docs/motion-and-future-media-slots.md.
 */
export interface MediaSlotConfig {
  slotId: string;
  mediaType: "image" | "video";
  futureAnimationSlot: boolean;
  /** Shown now — always a real supplied photo, never a grey placeholder. */
  fallbackImageSrc: string;
  /** Optional mobile-specific still. */
  mobileImageSrc?: string;
  /** Optional still shown to reduced-motion users instead of playing video. */
  reducedMotionImageSrc?: string;
  /** Video poster (also usable as a still). */
  posterSrc?: string;
  /** Future video sources (unused until final assets exist). */
  desktopVideoSrc?: string;
  mobileVideoSrc?: string;
  /** Accessible text alternative. */
  alt: string;
  /** Optional decorative SVG layer. */
  decorativeSvg?: "ornament-line" | "ornament-motif" | null;
  /** Intentional CSS object-position for the crop (e.g. "center 40%"). */
  objectPosition?: string;
  /** Eager-load (hero) vs lazy. */
  priority?: boolean;
  /** Governance metadata (permissionStatus: pending, etc.). */
  meta: ContentMeta;
}

export interface OrganizationInfo {
  workingName: string;
  positioning: string;
  supportingLine: string;
  homeTagline: string;
  homeIntroduction: string;
  provisionalIntro: string;
  cactNote: string;
  meta: ContentMeta;
}
