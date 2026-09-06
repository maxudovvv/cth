import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section, Eyebrow } from "@/components/ui/Primitives";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { MediaSlot } from "@/components/media/MediaSlot";
import { PhotoLightbox } from "@/components/media/PhotoLightbox";
import { surgunlikSlot } from "@/content/data/media";

export const metadata: Metadata = {
  title: "About Crimean Tatars",
  description:
    "Who the Crimean Tatars are — an Indigenous people of Crimea whose identity, language, culture, and history are deeply rooted in the Crimean Peninsula.",
};

const facets = [
  { title: "Language", text: "Crimean Tatar is a Turkic language, central to identity and passed between generations." },
  { title: "Music & dance", text: "Songs and dances that carry the rhythm and memory of the homeland." },
  { title: "Traditions & faith", text: "Customs, hospitality, and craft woven through daily and communal life." },
  { title: "Cuisine", text: "A distinctive culinary heritage of pastries, meats, and shared tables." },
];

export default function AboutCrimeanTatarsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Who are the Crimean Tatars?"
        title="An Indigenous People of Crimea"
        intro="The Crimean Tatars are an Indigenous people of Crimea, whose identity, language and culture were formed on the Crimean Peninsula over many centuries."
        bgImage="/media/video/about-crimean-tatars-hero-poster.jpg"
        bgVideo="/media/video/about-crimean-tatars-hero-loop.mp4"
        objectPosition="center"
      />

      {/* Who */}
      <Section tone="ivory" aria-labelledby="who-title">
        <div className="mx-auto max-w-prose">
          <Eyebrow>Origins &amp; identity</Eyebrow>
          <AnimatedHeading id="who-title" className="mt-3 text-3xl md:text-4xl">A people deeply rooted in Crimea</AnimatedHeading>
          <p className="mt-5 text-lg leading-relaxed text-ink/85">
            Their ethnogenesis reflects Crimea&apos;s unique history as a crossroads of civilizations.
            Over successive historical periods, the peninsula was home to ancient peoples and
            communities including the Taurians, Scythians, Greeks, Goths, Alans and Khazars,
            followed by various Turkic peoples, including the Kipchaks, as well as populations
            associated with the Golden Horde and the Genoese presence on the Crimean coast.
          </p>
          <p className="mt-4 leading-relaxed text-ink/85">
            Over centuries, interaction among these populations contributed to the emergence of
            the distinct Crimean Tatar people, whose homeland, language, culture and historical
            identity are deeply rooted in Crimea.
          </p>
        </div>
      </Section>

      <Section tone="ivory" aria-labelledby="khanate-title">
        <div className="mx-auto max-w-prose">
          <Eyebrow>Statehood</Eyebrow>
          <AnimatedHeading id="khanate-title" className="mt-3 text-3xl md:text-4xl">The Crimean Khanate</AnimatedHeading>
          <p className="mt-5 text-lg leading-relaxed text-ink/85">
            The formation and consolidation of the Crimean Tatar people continued through the
            medieval period and the era of the Golden Horde. In the 15th century, the Crimean
            Khanate emerged as a Crimean Tatar state and remained the political and cultural
            centre of Crimean Tatar life for more than three centuries, until the Russian Empire
            annexed Crimea in 1783.
          </p>
        </div>
      </Section>

      {/* Culture facets */}
      <Section tone="sand" aria-labelledby="culture-title">
        <Reveal>
          <Eyebrow>Culture</Eyebrow>
          <AnimatedHeading id="culture-title" className="mt-3 text-3xl md:text-4xl">A living culture</AnimatedHeading>
        </Reveal>
        <StaggerGroup className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facets.map((f) => (
            <StaggerItem key={f.title} className="rounded-2xl bg-white/70 p-6 ring-1 ring-line">
              <h3 className="font-display text-lg text-navy">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{f.text}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* History & Memory — Sürgünlik, restrained */}
      <Section tone="navy" aria-labelledby="memory-title">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="mx-auto max-w-[16rem]">
              <PhotoLightbox
                src={surgunlikSlot.fallbackImageSrc}
                alt={surgunlikSlot.alt}
                className="w-full rounded-2xl focus-visible:ring-offset-navy"
              >
              <MediaSlot
                config={surgunlikSlot}
                className="aspect-[4/5] w-full ring-1 ring-ivory/15"
                sizes="(max-width: 1024px) 60vw, 16rem"
                eager
              />
              </PhotoLightbox>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow className="text-gold-soft">History &amp; Memory</Eyebrow>
          <AnimatedHeading id="memory-title" className="mt-3 text-3xl text-ivory md:text-4xl">The Sürgünlik of 1944</AnimatedHeading>
            <p className="mt-4 max-w-prose text-ivory/85">
              In May 1944, the Soviet regime forcibly deported virtually the entire Crimean Tatar
              population from Crimea, primarily to Central Asia. Families were removed from their
              homes and transported thousands of kilometres into exile, where many thousands died
              during the deportation and its aftermath. For decades, Crimean Tatars were denied
              the right to return to their homeland.
            </p>
            <p className="mt-4 max-w-prose text-ivory/85">
              After nearly half a century of exile, the mass return of Crimean Tatars to Crimea
              began in the late 1980s and accelerated following the collapse of the Soviet Union.
              Families returned to rebuild their homes, communities, cultural institutions and
              national life in their ancestral homeland.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="sand" aria-labelledby="occupation-title">
        <div className="mx-auto max-w-prose">
          <Eyebrow>Since 2014</Eyebrow>
          <AnimatedHeading id="occupation-title" className="mt-3 text-3xl md:text-4xl">Occupation and renewed pressure</AnimatedHeading>
          <p className="mt-5 text-lg leading-relaxed text-ink/85">
            In 2014, the Russian Federation occupied and illegally annexed Crimea, once again
            profoundly affecting the Crimean Tatar people and their homeland. Since the occupation
            began, international human rights organizations and the United Nations have documented
            serious human rights violations in Crimea, including restrictions on freedom of
            expression, religion and cultural identity, with Crimean Tatar leaders, activists,
            media and institutions particularly affected.
          </p>
        </div>
      </Section>

      {/* Why it matters */}
      <Section tone="ivory" aria-labelledby="why-title">
        <div className="mx-auto max-w-prose">
          <Eyebrow>Why preservation matters</Eyebrow>
          <AnimatedHeading id="why-title" className="mt-3 text-3xl md:text-4xl">Crimea remains their ancestral homeland</AnimatedHeading>
          <p className="mt-5 text-lg leading-relaxed text-ink/85">
            Despite centuries of upheaval, deportation, exile and renewed occupation, the Crimean
            Tatars have preserved their language, culture, traditions and enduring connection to
            Crimea. Crimea remains their ancestral homeland and the heart of Crimean Tatar identity.
          </p>
        </div>
      </Section>
    </>
  );
}
