import type { Metadata } from "next";
import Image from "next/image";
import { EventsHeader } from "@/components/events/EventsHeader";
import { PhotoLightbox } from "@/components/media/PhotoLightbox";
import photos from "@/data/past-events-photos.json";
import descriptions from "@/data/past-events-descriptions.json";

export const metadata: Metadata = {
  title: "Past Events",
  alternates: { canonical: "/past-events" },
  description: "Photographs from Crimean Tatar Heritage Canada’s past community gatherings.",
};



export default function PastEventsPage() {
  return (
    <>
      <EventsHeader past />
      <div className="bg-ivory py-16 md:py-24">
        <div className="container-wide space-y-10 md:space-y-14">
          {descriptions.map(({ title, paragraphs, date, dateLabel }, index) => (
            <section key={title} aria-labelledby={`event-${index + 1}`} className="rounded-2xl border border-gold/60 bg-white/40 p-5 shadow-[0_8px_30px_rgba(10,35,55,0.04)] sm:p-8 md:rounded-3xl md:p-10">
              <div className="mb-7 flex flex-wrap items-baseline gap-x-5 gap-y-3 border-b border-gold/25 pb-5">
                <h2 id={`event-${index + 1}`} className="max-w-4xl font-display text-3xl leading-tight text-navy md:text-4xl">
                  {title}
                </h2>
                <time dateTime={date} className="text-sm font-medium tracking-wide text-navy-600">
                  {dateLabel}
                </time>
              </div>
              <div className="mb-8 max-w-3xl space-y-4 text-base leading-relaxed text-navy-600 md:text-lg">
                {paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
              </div>
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
