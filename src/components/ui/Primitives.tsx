import Link from "next/link";
import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  tone?: "ivory" | "navy" | "sand";
  id?: string;
  "aria-labelledby"?: string;
  "aria-label"?: string;
};

const toneClass: Record<NonNullable<SectionProps["tone"]>, string> = {
  ivory: "bg-ivory text-ink",
  navy: "bg-navy text-ivory",
  sand: "bg-ivory-dim text-ink",
};

export function Section({
  children,
  className = "",
  tone = "ivory",
  id,
  ...aria
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-12 md:py-16 ${toneClass[tone]} ${className}`}
      {...aria}
    >
      <div className="container-content">{children}</div>
    </section>
  );
}

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  /**
   * solid    — primary gold button (any background)
   * secondary— readable outline for DARK/navy backgrounds (subordinate to solid)
   * outline  — outline for LIGHT backgrounds
   * ghost    — text/underline link-button
   */
  variant?: "solid" | "secondary" | "outline" | "ghost";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "solid",
  className = "",
}: ButtonLinkProps) {
  const base =
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded px-5 py-3 text-sm font-semibold transition-[transform,background-color,color,border-color,box-shadow] duration-200 ease-out hover:-translate-y-px active:translate-y-0 active:scale-[0.985]";
  const variants: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
    solid: "bg-gold text-navy hover:bg-gold-soft",
    // Clearly visible on navy: soft gold border + ivory text, fills on hover.
    secondary:
      "border border-gold-soft/70 text-ivory hover:bg-gold-soft hover:text-navy hover:border-gold-soft",
    outline:
      "border border-current text-navy hover:bg-navy hover:text-ivory",
    ghost: "text-navy underline underline-offset-4 hover:text-turquoise",
  };
  const isInternal = href.startsWith("/") || href.startsWith("#");
  if (isInternal) {
    return (
      <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}
