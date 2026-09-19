import type { Metadata } from "next";
import Image from "next/image";

const lectureInstagram = "https://www.instagram.com/reel/DdUcUhrx1Sm/?stkn=MWZxZnpseGIxNW44dA==";
const festivalInstagram = "https://www.instagram.com/reel/DdUcUhrx1Sm/?stkn=MWZxZnpseGIxNW44dA==";

const instagramLinkClass =
  "inline-flex min-h-[48px] items-center justify-center rounded-full border border-gold px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

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
      <section className="bg-ivory py-16 md:py-20" aria-labelledby="events-title">
        <div className="container-wide">
          <p className="text-sm font-semibold uppercase tracking-widest text-navy-600">September 18–20, 2026 · Toronto</p>
          <h2 id="events-title" className="mt-3 font-display text-3xl text-navy md:text-5xl">Meet us at the festival</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-navy-600">
            Join Crimean Tatar Heritage Canada and the Canadian Association of Crimean Tatars
            at the Bloor West Village Toronto Ukrainian Festival.
          </p>

          <div className="mt-10 grid auto-rows-fr items-stretch gap-6 lg:grid-cols-2">
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/media/events/costume-lecture-illustration.webp"
                  alt="Illustrative display of women's and men's traditional Crimean Tatar attire."
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-[center_38%]"
                />
                <span className="absolute bottom-3 right-3 rounded-full bg-navy/75 px-3 py-1 text-xs font-medium text-ivory">Illustrative image</span>
              </div>
              <div className="min-h-[190px] border-b border-line bg-sand/55 px-6 py-5 md:px-8 lg:min-h-[220px]">
                <p className="text-sm font-semibold uppercase tracking-widest text-navy-600">Sunday · September 20</p>
                <h3 className="mt-3 font-display text-2xl leading-snug text-navy md:text-3xl">
                  Crimean Tatar Women’s and Men’s Traditional Costumes of the Late 19th and Early 20th Centuries
                </h3>
                <p className="mt-2 text-sm font-semibold text-navy-600">Lecture by Elmira Kataki</p>
              </div>
              <div className="flex flex-1 flex-col px-6 py-6 md:px-8 md:py-8">
                <p className="leading-relaxed text-navy-600">
                  Explore authentic examples of Crimean Tatar traditional costumes and learn about
                  the distinctive details and cultural significance of each element.
                </p>
                <dl className="mt-6 space-y-3 border-t border-line pt-5 text-sm text-navy">
                  <div className="flex gap-4"><dt className="w-16 shrink-0 font-semibold">When</dt><dd><time dateTime="2026-09-20T15:30:00-04:00">September 20, 2026 · 3:30 PM</time></dd></div>
                  <div className="flex gap-4"><dt className="w-16 shrink-0 font-semibold">Where</dt><dd>Speaker Corner Stage Program · Bloor St W &amp; Beresford Ave, Toronto</dd></div>
                </dl>
                <a href={lectureInstagram} target="_blank" rel="noopener noreferrer" className={`${instagramLinkClass} mt-auto self-start pt-3 text-navy hover:bg-gold/15`}>
                  View lecture on Instagram <span aria-hidden="true" className="ml-2">↗</span>
                </a>
              </div>
            </article>

            <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-navy text-ivory shadow-soft">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/media/events/festival-table-illustration.webp"
                  alt="Illustrative festival table with coffee, sweets, printed textiles and books."
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute bottom-3 right-3 rounded-full bg-navy/75 px-3 py-1 text-xs font-medium text-ivory">Illustrative image</span>
              </div>
              <div className="min-h-[190px] border-b border-ivory/15 px-6 py-5 md:px-8 lg:min-h-[220px]">
                <p className="text-sm font-semibold uppercase tracking-widest text-gold-soft">September 18–20 · Toronto</p>
                <h3 className="mt-3 font-display text-2xl leading-snug md:text-3xl">Bloor West Village Toronto Ukrainian Festival</h3>
                <p className="mt-2 text-sm text-ivory/75">Crimean Tatar Heritage Canada × Canadian Association of Crimean Tatars</p>
              </div>
              <div className="flex flex-1 flex-col px-6 py-6 md:px-8 md:py-8">
                <p className="leading-relaxed text-ivory/85">
                  Visit us for Crimean Tatar culture, traditions, food and hands-on experiences
                  during the festival.
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ivory/90">
                  <li>☕ Freshly made Crimean Tatar coffee</li>
                  <li>🍪 Traditional kurabye</li>
                  <li>🧵 A basma master class in traditional textile printing</li>
                  <li>📚 Books about Crimea and Crimean Tatars</li>
                  <li>🛍️ Crimean Tatar merchandise and cultural items</li>
                </ul>
                <p className="mt-6 border-t border-ivory/15 pt-5 text-sm text-ivory/80">
                  <time dateTime="2026-09-18">September 18</time>–<time dateTime="2026-09-20">20, 2026</time> · Bloor West Village, Toronto
                </p>
                <a href={festivalInstagram} target="_blank" rel="noopener noreferrer" className={`${instagramLinkClass} mt-auto self-start pt-3 text-gold-soft hover:bg-gold/10`}>
                  View festival on Instagram <span aria-hidden="true" className="ml-2">↗</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
