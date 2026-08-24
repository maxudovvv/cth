import Link from "next/link";
import { organization, primaryNav, contact } from "@/content/data/site";
import { OrnamentDivider } from "@/components/ornament/Ornament";
import { Reveal } from "@/components/motion/Reveal";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-ivory">
      <div aria-hidden="true" className="ornament-tile absolute inset-0 opacity-[0.05]" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px gold-line" />

      <Reveal className="container-wide relative py-14">
        {/* Future animation slot: footer-ornament (static divider now). */}
        <div data-future-animation-slot="footer-ornament">
          <OrnamentDivider className="mx-auto mb-10 h-5 w-32 text-gold/80" />
        </div>

        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
          {/* Brand + mission */}
          <div>
            <p className="font-display text-xl text-ivory">{organization.workingName}</p>
            <p className="mt-2 max-w-xs text-sm text-ivory/85">{organization.positioning}</p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-4 inline-block rounded text-sm text-ivory underline-offset-4 hover:text-gold-soft hover:underline focus-visible:text-gold-soft"
            >
              {contact.email}
            </a>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h2 className="text-xs uppercase tracking-eyebrow text-gold-soft">Explore</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {primaryNav.slice(1).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block rounded text-ivory/85 underline-offset-4 transition-[color,transform] duration-200 hover:translate-x-0.5 hover:text-gold-soft hover:underline focus-visible:text-gold-soft"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>

        <div className="mt-12 border-t border-ivory/20 pt-6">
          {/* Operating organization line — required verbatim on every page. */}
          <p className="text-sm font-medium text-ivory/85">
            Operated by Canada Crimea Cultural Committee
          </p>
          <p className="mt-1 text-xs text-ivory/65">
            © {new Date().getFullYear()} {organization.workingName}. Prototype preview —
            content &amp; imagery provisional.
          </p>
        </div>
      </Reveal>
    </footer>
  );
}
