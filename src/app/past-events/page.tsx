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
      <div className="bg-[#dedbd2] py-16 md:py-24">
        <div className="container-wide space-y-10 md:space-y-14">
          {descriptions.map(({ title, paragraphs, date, dateLabel }, index) => {
            const eventPhotos = photos.filter((photo) => photo.event === index + 1);
            const columns = eventPhotos.length === 5 ? "lg:grid-cols-5" : eventPhotos.length % 3 === 0 ? "sm:grid-cols-3" : "sm:grid-cols-2";
            return (
            <section key={title} aria-labelledby={`event-${index + 1}`} className="rounded-2xl border border-[#b6a68a] bg-[#f0e8d9] p-5 shadow-[0_6px_24px_rgba(21,39,48,0.05)] sm:p-8 md:rounded-3xl md:p-10">
              <div className="mb-7 flex flex-wrap items-baseline gap-x-5 gap-y-3 border-b border-[#cfc2ac] pb-5">
                <h2 id={`event-${index + 1}`} className="max-w-4xl font-display text-3xl leading-tight text-navy md:text-4xl">
                  {title}
                </h2>
                <time dateTime={date} className="text-sm font-medium tracking-wide text-[#766044]">
                  {dateLabel}
                </time>
              </div>
              <div className="mb-8 max-w-3xl space-y-4 text-base leading-relaxed text-navy-600 md:text-lg">
                {paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
              </div>
              <div className={`grid grid-cols-1 gap-3 sm:gap-4 ${columns}`}>
                {eventPhotos.map((photo, photoIndex) => (
                  <PhotoLightbox key={photo.src} src={photo.src} alt={`${title} — photo ${photoIndex + 1}`} className="relative aspect-[4/5] w-full rounded-xl bg-ivory-dim shadow-sm">
                    <Image src={photo.src} alt={`${title} — photo ${photoIndex + 1}`} fill
                      sizes={eventPhotos.length === 5 ? "(max-width: 1023px) 100vw, 20vw" : eventPhotos.length % 3 === 0 ? "(max-width: 639px) 100vw, 33vw" : "(max-width: 639px) 100vw, 50vw"}
                      className="object-cover transition-opacity duration-200 group-hover:opacity-90" />
                  </PhotoLightbox>
                ))}
              </div>
            </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
