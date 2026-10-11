import type { Metadata } from "next";
import { EventsHeader } from "@/components/events/EventsHeader";
import { ButtonLink } from "@/components/ui/Primitives";
import { OrnamentDivider } from "@/components/ornament/Ornament";

export const metadata: Metadata = {
  title: "Past Events",
  alternates: { canonical: "/past-events" },
  description: "Memories, photographs, and stories from Crimean Tatar Heritage Canada’s past community gatherings.",
};

export default function PastEventsPage() {
  return (
    <>
      <EventsHeader past />
      <section className="bg-ivory py-16 md:py-24" aria-labelledby="past-events-status">
        <div className="container-wide mx-auto max-w-3xl text-center">
          <OrnamentDivider aria-hidden="true" className="mx-auto h-6 w-40 text-gold" />
          <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-navy-600">Our shared memories</p>
          <h2 id="past-events-status" className="mt-4 font-display text-3xl text-navy md:text-4xl">Stories from past gatherings are coming soon.</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-navy-600">We’re gathering photographs and stories from our past events. Visit again soon to explore the moments that have brought our community together.</p>
          <ButtonLink href="/upcoming-events" variant="outline" className="mt-8 rounded-full">Explore Future Events →</ButtonLink>
        </div>
      </section>
    </>
  );
}
