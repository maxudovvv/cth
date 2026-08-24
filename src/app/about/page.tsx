import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section, Eyebrow, ButtonLink } from "@/components/ui/Primitives";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { HeritageArchive } from "@/components/about/HeritageArchive";
import { organization } from "@/content/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Crimean Tatar Heritage Canada — a cultural and educational organization preserving and sharing Crimean Tatar heritage across Canada.",
};

const purpose = [
  { title: "Preserve", text: "Safeguard Crimean Tatar language, music, craft, cuisine, and historical memory." },
  { title: "Share", text: "Present the culture to a broad Canadian public through events, film, and education." },
  { title: "Connect", text: "Bring the community together and welcome newcomers to the heritage." },
];

export default function AboutPage() {
  return (
    <>
      {/* Cinematic Crimea loop with a still fallback for reduced-motion users. */}
      <PageHeader
        eyebrow="About"
        title="A cultural and educational organization"
        intro={organization.positioning}
        bgVideo="/media/video/final-cta-loop-pingpong.mp4"
        bgImage="/media/video/final-cta-poster.png"
        bgAlt="A cinematic blue landscape representing Crimea."
        objectPosition="center 58%"
      />

      <Section tone="ivory" aria-labelledby="who-title">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Who we are</Eyebrow>
            <AnimatedHeading id="who-title" className="mt-3 text-3xl md:text-4xl">Crimean Tatar Heritage Canada</AnimatedHeading>
            <p className="mt-5 max-w-prose text-lg text-ink/85">{organization.provisionalIntro}</p>
            <p className="mt-4 max-w-prose text-ink/85">
              We exist to keep Crimean Tatar heritage present and accessible — as a living
              culture to celebrate and an educational resource for all Canadians.
            </p>
          </Reveal>

          {/* Interactive cultural archive — same footprint as the former static card. */}
          <Reveal delay={0.1}>
            <HeritageArchive />
          </Reveal>
        </div>
      </Section>

      <Section tone="sand" aria-labelledby="purpose-title">
        <Reveal>
          <Eyebrow>Our purpose</Eyebrow>
          <AnimatedHeading id="purpose-title" className="mt-3 text-3xl md:text-4xl">What we do</AnimatedHeading>
        </Reveal>
        <StaggerGroup className="mt-8 grid gap-4 md:grid-cols-3">
          {purpose.map((p) => (
            <StaggerItem key={p.title} className="rounded-2xl bg-white/70 p-7 ring-1 ring-line">
              <h3 className="font-display text-xl text-navy">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{p.text}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* Relationship to the operating organization + CACT distinction */}
      <Section tone="ivory" aria-labelledby="org-title">
        <div className="max-w-prose">
          <Eyebrow>Our organization</Eyebrow>
          <AnimatedHeading id="org-title" className="mt-3 text-2xl md:text-3xl" duration={0.68}>How we are organized</AnimatedHeading>
          <p className="mt-5 text-ink/85">
            Crimean Tatar Heritage Canada is the public cultural and educational identity,
            operated by the <strong>Canada Crimea Cultural Committee</strong>.
          </p>
          <p className="mt-4 text-ink/85">
            We are a cultural and educational organization. The Canadian Association of
            Crimean Tatars (CACT) is a separate advocacy and human-rights organization and is
            not the operator of this website.
          </p>
          <div className="mt-7">
            <ButtonLink href="/contact" variant="solid">Get in touch</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
