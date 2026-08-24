import type { ContentMeta } from "@/content/types";

/**
 * Content review mode.
 *
 * Governance metadata is ALWAYS retained in the content registry/code — this
 * flag only controls how much of it is shown in the UI:
 *
 *  - REVIEW MODE ON  → per-item review metadata is visible (permission status,
 *    provisional labels, internal disclaimers) for content-ops review.
 *  - REVIEW MODE OFF (default) → per-item review labels are hidden so normal
 *    preview reads as a polished website. A single compact top-level prototype
 *    banner still discloses that content is provisional.
 *
 * Enable with NEXT_PUBLIC_CONTENT_REVIEW_MODE=true (or flip LOCAL below).
 */
const LOCAL_CONTENT_REVIEW_MODE = false;

export const CONTENT_REVIEW_MODE: boolean =
  process.env.NEXT_PUBLIC_CONTENT_REVIEW_MODE === "true" ||
  LOCAL_CONTENT_REVIEW_MODE;

/** A compact, human-readable one-line summary of an item's governance metadata. */
export function governanceSummary(meta: ContentMeta): string {
  return [
    `status: ${meta.status}`,
    `permission: ${meta.permissionStatus}`,
    `review: ${meta.reviewStatus}`,
    `locale: ${meta.locale}`,
    `updated: ${meta.lastUpdated}`,
  ].join(" · ");
}
