import Image from "next/image";
import Link from "next/link";

export function EventsHeader({ past = false }: { past?: boolean }) {
  return (
    <header className="relative isolate overflow-hidden bg-navy text-ivory">
      <Image
        src={past ? "/media/events/past-events-cover.jpg" : "/media/events/coffee-masterclass-2026.jpg"}
        alt="" fill priority sizes="100vw"
        className="-z-20 object-cover object-[65%_center] md:object-center"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/95 via-navy/75 to-navy/25" />
      <div className="container-wide pb-12 pt-32 md:pb-16 md:pt-44">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold-soft">
          {past ? "Remember · Connect · Celebrate" : "Gather · Learn · Celebrate"}
        </p>
        <h1 className="mt-5 max-w-2xl font-display text-5xl font-semibold leading-tight text-ivory md:text-6xl">
          {past ? "Past Events" : "Future Events"}
        </h1>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-ivory/90">
          {past
            ? "Celebrating the moments, stories, and traditions that bring our community together."
            : "Meet, share stories, and celebrate Crimean Tatar heritage with our community."}
        </p>
        <nav aria-label="Events" className="mt-10 flex flex-wrap gap-3">
          {[
            { label: "Future Events", href: "/upcoming-events", active: !past },
            { label: "Past Events", href: "/past-events", active: past },
          ].map(({ label, href, active }) => (
            <Link key={href} href={href} aria-current={active ? "page" : undefined}
              className={`inline-flex min-h-[48px] items-center rounded-full border px-6 py-3 text-sm font-semibold transition-colors ${active ? "border-gold-soft bg-gold-soft text-navy" : "border-ivory/40 bg-navy/40 text-ivory hover:border-gold-soft hover:bg-navy/70"}`}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
