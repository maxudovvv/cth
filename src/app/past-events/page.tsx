import type { Metadata } from "next";
import Image from "next/image";
import { EventsHeader } from "@/components/events/EventsHeader";
import { PhotoLightbox } from "@/components/media/PhotoLightbox";
import photos from "@/data/past-events-photos.json";

export const metadata: Metadata = {
  title: "Past Events",
  alternates: { canonical: "/past-events" },
  description: "Photographs from Crimean Tatar Heritage Canada’s past community gatherings.",
};

const events = [
  "BWV Toronto Ukrainian Festival 2026",
  "Book Club",
  "Ukraine’s Independence Day (August 24)",
  "Crimean Tatar Flag Day (June 26)",
  "Remembering the Crimean Tatar Genocide of 1944 (May 18)",
  "Crimean Tatar Poetry Night",
];

export default function PastEventsPage() {
  return (
    <>
      <EventsHeader past />
      <div className="bg-ivory py-16 md:py-24">
        <div className="container-wide space-y-16 md:space-y-24">
          {events.map((title, index) => (
            <section key={title} aria-labelledby={`event-${index + 1}`}>
              <h2 id={`event-${index + 1}`} className="mb-7 max-w-4xl border-l-4 border-gold pl-5 font-display text-3xl leading-tight text-navy md:text-4xl">
                {title}
              </h2>
              <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {photos.filter((photo) => photo.event === index + 1).map((photo, photoIndex) => (
                  <PhotoLightbox key={photo.src} src={photo.src} alt={`${title} — photo ${photoIndex + 1}`} className="w-full rounded-xl bg-ivory-dim shadow-sm">
                    <Image src={photo.src} alt={`${title} — photo ${photoIndex + 1}`} width={photo.width} height={photo.height}
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="h-auto w-full transition-opacity duration-200 group-hover:opacity-90" />
                  </PhotoLightbox>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
