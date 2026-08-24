import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section, Eyebrow, ButtonLink } from "@/components/ui/Primitives";
import { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";

export const metadata: Metadata = {
  title: "Support Crimean Tatar Heritage Canada",
  description:
    "Support Crimean Tatar Heritage Canada. Online donations will be available soon — contact us about supporting our work.",
};

const uses = [
  "Cultural programming",
  "Educational initiatives",
  "Translation",
  "Film screenings",
  "Preservation",
  "Community activities",
];

export default function DonatePage() {
  return (
    <>
      <PageHeader
        eyebrow="Support"
        title="Support Crimean Tatar Heritage Canada"
        intro="Help preserve and share Crimean Tatar heritage with communities across Canada."
      />

      <Section tone="ivory" aria-labelledby="donate-title">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Your support</Eyebrow>
          <AnimatedHeading id="donate-title" className="mt-3 text-3xl md:text-4xl">Where support goes</AnimatedHeading>
          <p className="mt-5 text-lg text-ink/85">
            Future donations may support the organization&rsquo;s work, including:
          </p>
          <StaggerGroup className="mt-6 grid gap-3 sm:grid-cols-2">
            {uses.map((u) => (
              <StaggerItem key={u} className="flex items-center gap-3 rounded-xl bg-sand/40 px-5 py-4 ring-1 ring-line">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-gold" />
                <span className="font-medium text-navy">{u}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <div className="mt-10 rounded-2xl border border-line bg-ivory-dim/60 p-7 text-center">
            <p className="font-display text-xl text-navy">Online donations will be available soon.</p>
            <p className="mt-2 text-navy-600">
              In the meantime, please reach out and we will be glad to talk about ways to
              support our work.
            </p>
            <div className="mt-6 flex justify-center">
              <ButtonLink href="/contact" variant="solid">
                Contact Us About Supporting Our Work
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
