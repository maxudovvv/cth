import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EventsHeader } from "@/components/events/EventsHeader";
import { ButtonLink } from "@/components/ui/Primitives";

export const metadata: Metadata = {
  title: "Future Events",
  alternates: { canonical: "/upcoming-events" },
  description: "Join The Crimean Tatar Coffee Tradition: Masterclass & Tasting on November 14, 2026, at Kolo Cafe in Toronto.",
};

export default function UpcomingEventsPage() {
  return (
    <>
      <EventsHeader />
      <section className="bg-ivory py-12 md:py-20" aria-labelledby="coffee-event-title">
        <div className="container-wide">
          <article className="overflow-hidden rounded-3xl border border-line bg-white/50 shadow-soft">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-ivory-dim">
                <Image src="/media/events/coffee-masterclass-poster-2026.webp"
                  alt="Event poster for Crimean Tatar Coffee Tradition: Masterclass & Tasting at Kolo Cafe on November 14."
                  width={1080} height={1350} sizes="(max-width: 1023px) 100vw, 45vw"
                  className="h-auto w-full" />
              </div>
              <div className="p-6 sm:p-9 lg:p-12">
                <p className="text-xs font-semibold uppercase tracking-widest text-navy-600">An intimate morning in Toronto</p>
                <h2 id="coffee-event-title" className="mt-4 font-display text-3xl leading-tight text-navy md:text-4xl">The Crimean Tatar Coffee Tradition: Masterclass &amp; Tasting</h2>
                <dl className="mt-7 grid gap-4 border-y border-line py-6 text-navy">
                  <div><dt className="text-xs font-semibold uppercase tracking-widest text-navy-600">Date</dt>
                    <dd className="mt-1 font-semibold"><time dateTime="2026-11-14">Saturday, November 14, 2026</time></dd></div>
                  <div><dt className="text-xs font-semibold uppercase tracking-widest text-navy-600">Time</dt>
                    <dd className="mt-1"><time dateTime="2026-11-14T09:30:00-05:00">9:30 AM</time> – <time dateTime="2026-11-14T11:00:00-05:00">11:00 AM</time> <span className="text-sm text-navy-600">(Toronto time)</span></dd></div>
                  <div><dt className="text-xs font-semibold uppercase tracking-widest text-navy-600">Location</dt>
                    <dd className="mt-1"><span className="font-semibold">Kolo Cafe</span><br />365 Jane St, Toronto, ON M6S 3Z3</dd></div>
                </dl>
                <div className="mt-6 space-y-4 leading-relaxed text-navy-600">
                  <p>Discover the rich rituals, aromas, and stories behind Crimean Tatar coffee. Join us for an intimate, hands-on masterclass led by Ruslan Yakubov - a renowned coffee expert with 20 years of industry experience and the Head Judge of the Canadian National Barista Championship. Under his expert guidance, you’ll learn authentic preparation techniques, taste freshly brewed coffee paired with traditional pastries, and explore an archival photo exhibition tracing the history of this cherished tradition.</p>
                  <p>To make sure everyone gets a truly personal and hands-on experience, we are keeping this gathering small and cozy.</p>
                  <p>These spots will go quickly, so we would love for you to reserve yours soon.</p>
                </div>
                <div className="mt-8">
                  <ButtonLink href="https://Crimean-Tatar-Coffee-Tradition.eventbrite.com" className="w-full rounded-full sm:w-auto">Reserve your seat <span aria-hidden="true">↗</span></ButtonLink>
                  <p className="mt-3 text-sm text-navy-600">Reservations via Eventbrite.</p>
                </div>
                <p className="mt-7 font-display text-xl italic text-navy">We can’t wait to share this special tradition with you.</p>
              </div>
            </div>
          </article>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
            <p className="text-navy-600">Looking back on our community gatherings?</p>
            <Link href="/past-events" className="inline-flex min-h-[48px] items-center font-semibold text-navy underline decoration-gold underline-offset-8">Explore Past Events →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
