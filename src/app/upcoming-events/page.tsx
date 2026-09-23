import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Upcoming Events",
  description: "Upcoming community gatherings and cultural events from Crimean Tatar Heritage Canada.",
};

export default function UpcomingEventsPage() {
  return (
    <>
      <header className="relative isolate overflow-hidden bg-navy text-ivory">
        <Image src="/media/hero/upcoming-events.jpg" alt="" fill priority sizes="100vw" className="-z-20 object-cover object-[65%_center] md:object-center" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/95 via-navy/70 to-navy/20" />
        <div className="container-wide py-24 pt-36 md:py-32 md:pt-44">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-soft">Gather · Connect · Celebrate</p>
          <h1 className="mt-5 max-w-2xl font-display text-5xl font-semibold leading-tight text-ivory [text-shadow:0_2px_12px_rgba(0,0,0,0.65)] md:text-6xl">Upcoming Events</h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ivory/90">Meet, share stories, and celebrate Crimean Tatar heritage with our community.</p>
        </div>
      </header>

      <section className="bg-ivory py-16 md:py-20" aria-labelledby="events-status">
        <div className="container-wide max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-navy-600">Stay connected</p>
          <h2 id="events-status" className="mt-4 font-display text-3xl text-navy md:text-4xl">
            No upcoming events at the moment.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-navy-600">
            New events will be announced here. Check back soon for upcoming cultural programs,
            workshops, lectures, and community gatherings.
          </p>
          <Link
            href="/our-activities"
            className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full border border-navy/25 px-6 py-3 font-semibold text-navy transition-colors hover:border-gold hover:bg-gold/10"
          >
            Explore our activities
          </Link>
        </div>
      </section>
    </>
  );
}
