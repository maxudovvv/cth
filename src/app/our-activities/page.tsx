import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section, Eyebrow, ButtonLink } from "@/components/ui/Primitives";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { community, culturalMedia, workshopMedia } from "@/content/data/media";

export const metadata: Metadata = {
  title: "Our Activities",
  description:
    "Workshops, festivals, cultural events, film screenings, exhibitions, and educational programs by Crimean Tatar Heritage Canada.",
};

const festivalActivities = [
  {
    title: "Performances & public celebrations",
    text: "Dance, music, traditional dress, and shared cultural expression bring Crimean Tatar heritage into public spaces.",
    img: culturalMedia.dance,
    pos: "center 38%",
  },
  {
    title: "Festival pavilions",
    text: "Community displays introduce visitors to Crimean Tatar ceramics, textiles, cuisine, history, and contemporary life.",
    img: culturalMedia.heritageDisplay,
    pos: "center 45%",
  },
  {
    title: "Parades & community presence",
    text: "Flags, signs, and community participation make Crimean Tatar identity visible within Canada’s multicultural celebrations.",
    img: community.paradeWalk,
    pos: "center 38%",
  },
] as const;

const culturalActivities = [
  {
    title: "Film screenings",
    text: "Screenings bring Crimean Tatar stories to Canadian audiences. In 2025, Her Heart was presented for the 81st anniversary of the genocide of the Crimean Tatar people.",
    img: culturalMedia.herHeartScreening,
    pos: "center 42%",
  },
  {
    title: "Exhibitions & remembrance",
    text: "Portraits, artworks, documents, and immersive installations connect personal memory with the wider history of Crimea.",
    img: culturalMedia.portraitExhibition,
    pos: "center 45%",
  },
  {
    title: "Education & public conversations",
    text: "Presentations, lectures, and community conversations share Crimean Tatar history and culture with students and the public.",
    img: culturalMedia.educationalPresentation,
    pos: "center 42%",
  },
  {
    title: "Literature, language & storytelling",
    text: "Translation, publishing, poetry, and recorded conversations help carry language and cultural memory across generations.",
    img: culturalMedia.booksBrochure,
    pos: "center 42%",
  },
] as const;

export default function OurActivitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Activities"
        title="Cultural work, across Canada"
        intro="The programs and projects through which we preserve and share Crimean Tatar heritage."
        bgImage={culturalMedia.galleryEvent}
        objectPosition="center 48%"
      >
        <nav aria-label="Activity categories" className="mt-8 flex flex-wrap gap-3">
          {[
            ["Workshops & masterclasses", "#workshops"],
            ["Festivals", "#festivals"],
            ["Cultural events", "#cultural-events"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-full border border-gold-soft/60 bg-navy/35 px-4 py-2 text-sm font-semibold text-ivory transition-colors hover:bg-gold-soft hover:text-navy"
            >
              {label}
            </a>
          ))}
        </nav>
      </PageHeader>

      <Section id="workshops" tone="sand" aria-labelledby="workshops-title" className="scroll-mt-20">
        <div className="grid items-end gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <Reveal>
            <Eyebrow>Hands-on heritage</Eyebrow>
            <AnimatedHeading id="workshops-title" className="mt-3 font-display text-3xl text-navy md:text-5xl">
              Workshops & masterclasses
            </AnimatedHeading>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-600 md:text-lg">
              Heritage is learned by doing. Our community workshops create space to cook together,
              practise traditional crafts, exchange family knowledge, and welcome new generations.
            </p>
          </Reveal>

          <Reveal className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-lift">
            <Image
              src={workshopMedia.cookingClass}
              alt="Participants preparing traditional Crimean Tatar food during a community cooking workshop."
              fill
              sizes="(max-width: 1024px) 90vw, 55vw"
              className="object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 max-w-sm text-sm font-semibold text-ivory md:text-base">
              Cooking together turns recipes into living, shared memory.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Crimean Tatar cuisine",
              text: "Hands-on sessions explore dough, fillings, shaping techniques, and the stories carried by family recipes.",
              img: workshopMedia.cookingCommunity,
              pos: "center",
            },
            {
              title: "Pottery & traditional craft",
              text: "Demonstrations and guided practice connect participants with material culture, ornament, and handmade form.",
              img: workshopMedia.potteryClass,
              pos: "center",
            },
            {
              title: "Taste, coffee & hospitality",
              text: "Food presentations and shared tables introduce the flavours and welcoming traditions of Crimean Tatar culture.",
              img: workshopMedia.tasteOfCrimea,
              pos: "center 35%",
            },
          ].map((item) => (
            <StaggerItem key={item.title} className="overflow-hidden rounded-2xl bg-ivory shadow-soft ring-1 ring-line">
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 90vw, 30vw"
                  loading="lazy"
                  className="object-cover"
                  style={{ objectPosition: item.pos }}
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{item.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <Section id="festivals" tone="navy" aria-labelledby="festivals-title" className="relative scroll-mt-20 overflow-hidden">
        <div aria-hidden="true" className="ornament-tile absolute inset-0 opacity-[0.05]" />
        <div className="relative">
          <Reveal className="max-w-3xl">
            <Eyebrow className="text-gold-soft">Heritage in public</Eyebrow>
            <AnimatedHeading id="festivals-title" className="mt-3 font-display text-3xl text-ivory md:text-5xl">
              Festivals & community celebrations
            </AnimatedHeading>
            <p className="mt-5 text-ivory/80 md:text-lg">
              Festivals make culture visible at scale — through performance, community pavilions,
              cuisine, parades, and gatherings around the Crimean Tatar flag.
            </p>
          </Reveal>

          <StaggerGroup className="mt-9 grid gap-5 md:grid-cols-3">
            {festivalActivities.map((item, index) => (
              <StaggerItem
                key={item.title}
                className={index === 0 ? "md:col-span-2" : index === 2 ? "md:col-span-3" : ""}
              >
                <article className="group h-full overflow-hidden rounded-2xl border border-ivory/15 bg-ivory/[0.06]">
                  <div
                    className={`relative ${
                      index === 0 ? "aspect-[16/9]" : index === 2 ? "aspect-[21/8]" : "aspect-[4/5]"
                    }`}
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes={
                        index === 0
                          ? "(max-width: 768px) 90vw, 58vw"
                          : index === 2
                            ? "(max-width: 768px) 90vw, 86vw"
                            : "(max-width: 768px) 90vw, 28vw"
                      }
                      loading="lazy"
                      className="object-cover transition-transform duration-slow ease-entrance group-hover:scale-[1.03]"
                      style={{ objectPosition: item.pos }}
                    />
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl text-ivory">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ivory/75">{item.text}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Section>

      <Section id="cultural-events" tone="ivory" aria-labelledby="cultural-events-title" className="scroll-mt-20">
        <Reveal className="max-w-3xl">
          <Eyebrow>Stories, memory, learning</Eyebrow>
          <AnimatedHeading id="cultural-events-title" className="mt-3 font-display text-3xl text-navy md:text-5xl">
            Cultural & educational events
          </AnimatedHeading>
          <p className="mt-5 text-navy-600 md:text-lg">
            Film, visual art, literature, and public learning place Crimean Tatar voices in conversation
            with audiences across Canada.
          </p>
        </Reveal>

        <StaggerGroup className="mt-9 grid gap-x-6 gap-y-9 md:grid-cols-2">
          {culturalActivities.map((item) => (
            <StaggerItem key={item.title}>
              <article className="group grid gap-5 sm:grid-cols-[0.9fr_1.1fr] sm:items-center">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 90vw, 22vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-slow ease-entrance group-hover:scale-[1.04]"
                    style={{ objectPosition: item.pos }}
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-600">{item.text}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <section className="relative overflow-hidden bg-navy py-16 text-ivory md:py-20">
        <div aria-hidden="true" className="ornament-tile absolute inset-0 opacity-[0.06]" />
        <div className="container-wide relative">
          <Reveal className="max-w-2xl">
            <Eyebrow className="text-gold-soft">Get involved</Eyebrow>
            <AnimatedHeading className="mt-3 text-3xl text-ivory md:text-4xl">Bring these activities to your community</AnimatedHeading>
            <p className="mt-4 text-ivory/85">
              To ask about an event, a film screening, or a partnership, get in touch — details
              are arranged case by case.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <ButtonLink href="/contact" variant="solid">Contact us</ButtonLink>
              <ButtonLink href="/donate" variant="secondary">Support this work</ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
