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
    "Who the Crimean Tatars are — an educational overview of their history, culture, language, traditions, arts, cuisine, and historical memory.",
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
        eyebrow="About the Crimean Tatars"
        title="An Indigenous people of Crimea"
        intro="A short, factual introduction to the Crimean Tatars — their heritage, and why preserving it matters."
        bgImage="/media/video/about-crimean-tatars-hero-poster.jpg"
        bgVideo="/media/video/about-crimean-tatars-hero-loop.mp4"
        objectPosition="center"
      />

      {/* Who */}
      <Section tone="ivory" aria-labelledby="who-title">
        <div className="mx-auto max-w-prose">
          <Eyebrow>Who they are</Eyebrow>
          <AnimatedHeading id="who-title" className="mt-3 text-3xl md:text-4xl">A Turkic people native to the Crimean Peninsula</AnimatedHeading>
          <p className="mt-5 text-lg leading-relaxed text-ink/85">
            The Crimean Tatars are a Turkic ethnic group Indigenous to Crimea, on the northern
            coast of the Black Sea. Over centuries they developed a distinctive language,
            music, cuisine, craft, and religious and communal life. Today Crimean Tatar
            communities live in Crimea and in a diaspora that includes Canada.
          </p>
          <p className="mt-4 leading-relaxed text-ink/85">
            This overview is written for a general Canadian audience. It aims to be accessible
            and respectful; detailed sourcing and citations are being prepared.
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
              In 1944 the entire Crimean Tatar population was deported from Crimea by the Soviet
              authorities — an event Crimean Tatars call the Sürgünlik. Many died; survivors
              endured decades of exile before beginning to return. It remains a central part of
              Crimean Tatar historical memory, remembered here with dignity as educational
              context — not as advocacy.
            </p>
            <p className="mt-3 max-w-prose text-sm text-ivory/70">
              Historical detail and citations are being prepared and reviewed. No individuals
              are named without verified identification.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Why it matters */}
      <Section tone="ivory" aria-labelledby="why-title">
        <div className="mx-auto max-w-prose">
          <Eyebrow>Why preservation matters</Eyebrow>
          <AnimatedHeading id="why-title" className="mt-3 text-3xl md:text-4xl">Carrying heritage forward</AnimatedHeading>
          <p className="mt-5 text-ink/85">
            For a people whose language and homeland have been under pressure, preserving
            heritage is an act of continuity and dignity. In Canada, sharing this culture
            enriches the wider community and ensures that Crimean Tatar identity, memory, and
            traditions endure for future generations.
          </p>
          <p className="mt-4 text-sm italic text-navy-600">
            Sources and citations for this page are in preparation.
          </p>
        </div>
      </Section>
    </>
  );
}
