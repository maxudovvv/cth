import type { ReactNode } from "react";
import type { ContentMeta } from "@/content/types";
import { CONTENT_REVIEW_MODE, governanceSummary } from "@/lib/governance";

/**
 * Renders children ONLY in content-review mode
 * (NEXT_PUBLIC_CONTENT_REVIEW_MODE=true). In normal preview it renders nothing,
 * so per-item review labels/disclaimers don't clutter a polished preview. The
 * underlying metadata always remains in the content registry/code.
 */
export function ReviewOnly({ children }: { children: ReactNode }) {
  if (!CONTENT_REVIEW_MODE) return null;
  return <>{children}</>;
}

/**
 * GovernanceLabel — per-item provisional/permission label. Hidden in normal
 * preview; shown (with full metadata) in review mode.
 */
export function GovernanceLabel({
  meta,
  onDark = false,
}: {
  meta: ContentMeta;
  /** Kept for API compatibility; affects colour when shown in review mode. */
  onDark?: boolean;
  /** Deprecated: previously a public preview note; now hidden unless review mode. */
  note?: string;
}) {
  if (!CONTENT_REVIEW_MODE) return null;
  return (
    <p
      className={`mt-3 font-mono text-[0.65rem] leading-snug ${
        onDark ? "text-gold-soft/90" : "text-pomegranate"
      }`}
      data-governance="review"
    >
      {governanceSummary(meta)}
    </p>
  );
}
