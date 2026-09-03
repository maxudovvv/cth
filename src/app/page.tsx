import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "@/components/home/HomeHero";
import { Section, Eyebrow, ButtonLink } from "@/components/ui/Primitives";
import { ImageReveal, Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { MediaSlot } from "@/components/media/MediaSlot";
import { PhotoLightbox } from "@/components/media/PhotoLightbox";
import { OrnamentDivider } from "@/components/ornament/Ornament";
import { organization } from "@/content/data/site";
import {
  heritageToHistorySlot,
  finalCtaSlot,
  galleryStills,
  community,
} from "@/content/data/media";

const activities = [
  { title: "Cultural events", text: "Gatherings and celebrations that bring the community together across Canada." },
  { title: "Film screenings", text: "Crimean Tatar films subtitled and shown for English-speaking audiences." },
  { title: "Books & translation", text: "Bringing Crimean Tatar literature to English readers." },
  { title: "Language & storytelling", text: "Keeping the Crimean Tatar language and its stories alive." },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Concise introduction immediately after the main image. */}
      <Section tone="ivory" aria-labelledby="home-introduction-title">
        <StaggerGroup className="mx-auto max-w-4xl text-center">
          <StaggerItem><Eyebrow>Who we are</Eyebrow></StaggerItem>
          <StaggerItem>
            <AnimatedHeading
              id="home-introduction-title"
              className="mx-auto mt-3 max-w-3xl text-3xl md:text-[2.6rem] md:leading-[1.1]"
            >
              Preserving culture. Connecting communities.
            </AnimatedHeading>
          </StaggerItem>
          <StaggerItem>
            <p className="mx-auto mt-7 max-w-[72ch] text-lg leading-relaxed text-ink/85 md:text-xl">
              {organization.homeIntroduction}
            </p>
          </StaggerItem>
          <StaggerItem className="mt-9 flex justify-center">
            <ButtonLink href="/about" variant="solid">Learn More About Us</ButtonLink>
          </StaggerItem>
        </StaggerGroup>
      </Section>

      {/* Activities preview — dark, ornamented */}
      <section className="relative overflow-hidden bg-navy py-16 text-ivory md:py-20">
        <div aria-hidden="true" className="ornament-tile absolute inset-0 opacity-[0.05]" />
        <div className="container-wide relative">
          <StaggerGroup className="max-w-2xl">
            <StaggerItem><Eyebrow className="text-gold-soft">Our Activities</Eyebrow></StaggerItem>
            <StaggerItem><AnimatedHeading className="mt-3 text-3xl text-ivory md:text-4xl">Ways we keep the culture living</AnimatedHeading></StaggerItem>
            <StaggerItem><p className="mt-4 text-ivory/80">
              From events and screenings to translation and language, our work carries
              Crimean Tatar heritage forward.
            </p></StaggerItem>
          </StaggerGroup>
          <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {activities.map((a) => (
              <StaggerItem key={a.title} className="motion-card rounded-2xl glass p-6">
                <h3 className="font-display text-lg font-semibold text-ivory">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/70">{a.text}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal className="mt-10">
            <ButtonLink href="/our-activities" variant="secondary">See all activities</ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* About Crimean Tatars preview */}
      <Section tone="ivory" aria-labelledby="actatars-title" className="py-10 md:py-12">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <StaggerGroup className="order-2 lg:order-1">
            <StaggerItem><Eyebrow>About the Crimean Tatars</Eyebrow></StaggerItem>
            <StaggerItem><AnimatedHeading id="actatars-title" className="mt-3 text-3xl md:text-4xl">
              An Indigenous people of Crimea
            </AnimatedHeading></StaggerItem>
            <StaggerItem><p className="mt-5 max-w-prose text-ink/85">
              The Crimean Tatars are a Turkic people native to the Crimean Peninsula, with a
              distinctive language, music, cuisine, craft, and a history marked by resilience
              and memory. Learn who they are and why preserving this heritage matters.
            </p></StaggerItem>
            <StaggerItem className="mt-7">
              <ButtonLink href="/about-crimean-tatars" variant="solid">Discover the heritage</ButtonLink>
            </StaggerItem>
          </StaggerGroup>
          <ImageReveal className="order-1 lg:order-2">
            <PhotoLightbox
              src={community.boatFlag}
              alt="Community members with the Crimean Tatar flag by the water in Canada."
              className="relative w-full rounded-3xl shadow-soft focus-visible:ring-offset-ivory"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={community.boatFlag}
                  alt="Community members with the Crimean Tatar flag by the water in Canada (provisional, pending permission)."
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-[700ms] ease-entrance group-hover:scale-[1.025]"
                  style={{ objectPosition: "center 52%" }}
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              </div>
            </PhotoLightbox>
          </ImageReveal>
        </div>
      </Section>

      {/* History & Memory transition band */}
      <section aria-label="History and memory" className="relative">
        <MediaSlot
          config={heritageToHistorySlot}
          rounded="rounded-none"
          className="h-48 w-full md:h-60"
          sizes="100vw"
          overlay
        />
        <div className="pointer-events-none absolute inset-0 flex items-center">
          <StaggerGroup className="container-wide">
            <StaggerItem><p className="eyebrow text-gold-soft">History &amp; Memory</p></StaggerItem>
            <StaggerItem><p className="mt-2 max-w-xl font-display text-2xl text-ivory md:text-3xl">
              A story of resilience, remembered with dignity.
            </p></StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* Gallery preview — a complete rectangular mosaic */}
      <Section tone="sand" aria-labelledby="gallery-preview-title">
        <StaggerGroup className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Gallery</Eyebrow>
            <AnimatedHeading id="gallery-preview-title" className="mt-3 text-3xl md:text-4xl">Moments from our community</AnimatedHeading>
          </div>
          <StaggerItem><ButtonLink href="/gallery" variant="ghost">View gallery →</ButtonLink></StaggerItem>
        </StaggerGroup>
        <StaggerGroup
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.055}
        >
          {galleryStills.slice(0, 8).map((g) => (
            <StaggerItem
              as="figure"
              key={g.src}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-line shadow-soft"
            >
              <PhotoLightbox src={g.src} alt={g.alt} className="relative w-full focus-visible:ring-offset-sand">
              <span className="relative block aspect-[4/3] w-full">
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 23vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-[700ms] ease-entrance group-hover:scale-[1.025]"
                  style={{ objectPosition: g.objectPosition ?? "center" }}
                />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/45 to-transparent opacity-60 transition-opacity duration-base group-hover:opacity-80" />
              </span>
              </PhotoLightbox>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* Donate callout */}
      <section className="relative isolate overflow-hidden bg-navy py-20 text-ivory md:py-24">
        <MediaSlot
          config={finalCtaSlot}
          rounded="rounded-none"
          className="absolute inset-0 -z-20 h-full w-full"
          sizes="100vw"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy/70" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_45%,transparent_0%,rgba(7,25,42,0.28)_58%,rgba(7,25,42,0.72)_100%)]" />
        <div aria-hidden="true" className="ornament-tile absolute inset-0 -z-10 opacity-[0.035]" />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px gold-line" />
        <div className="container-wide relative">
          <Reveal><OrnamentDivider className="ornament-stroke-reveal mx-auto mb-8 h-6 w-40 text-gold/70" /></Reveal>
          <StaggerGroup className="mx-auto max-w-2xl text-center">
            <StaggerItem><AnimatedHeading className="font-display text-3xl text-ivory md:text-4xl">Support Crimean Tatar Heritage Canada</AnimatedHeading></StaggerItem>
            <StaggerItem><p className="mt-4 text-ivory/85">
              Your support helps sustain cultural programming, education, translation, film
              screenings, and preservation for the community and the wider public.
            </p></StaggerItem>
            <StaggerItem className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/donate" className="inline-flex items-center rounded-full bg-gold px-7 py-4 text-sm font-semibold text-navy shadow-gold transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-px hover:bg-gold-soft active:translate-y-0 active:scale-[0.985]">
                Donate
              </Link>
              <Link href="/contact" className="inline-flex items-center rounded-full border border-ivory/25 bg-white/10 px-7 py-4 text-sm font-semibold text-ivory backdrop-blur transition-[transform,background-color] duration-200 hover:-translate-y-px hover:bg-white/15 active:translate-y-0 active:scale-[0.985]">
                Contact us
              </Link>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}
