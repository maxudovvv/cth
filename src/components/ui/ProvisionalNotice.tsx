import type { ReactNode } from "react";
import { CONTENT_REVIEW_MODE } from "@/lib/governance";

/**
 * One compact, honest top-level banner marking prototype/provisional status.
 * This is the single disclosure kept in normal preview; per-item labels are
 * hidden unless review mode is on.
 */
export function ProvisionalBanner() {
  return (
    <div
      role="note"
      className="bg-navy px-4 py-1.5 text-center text-xs text-ivory/85"
    >
      <span className="font-semibold text-gold-soft">Prototype preview</span>
      <span className="mx-2 text-ivory/40" aria-hidden="true">
        ·
      </span>
      content &amp; imagery are provisional
      {CONTENT_REVIEW_MODE && (
        <span className="ml-2 rounded bg-gold-soft/20 px-1.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-gold-soft">
          Review mode
        </span>
      )}
    </div>
  );
}

export function StatusPill({ children }: { children: ReactNode }) {
  return <span className="status-pill status-pill--provisional">{children}</span>;
}

/**
 * Inline provisional note — internal disclaimer. Shown only in review mode so
 * normal preview stays clean. Metadata/intent remains in code regardless.
 */
export function ProvisionalNote({ children }: { children: ReactNode }) {
  if (!CONTENT_REVIEW_MODE) return null;
  return (
    <p className="mt-3 text-sm italic text-navy-600/80">
      <span aria-hidden="true">※ </span>
      {children}
    </p>
  );
}
