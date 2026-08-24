import Link from "next/link";
import { Section, ButtonLink } from "@/components/ui/Primitives";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";

export default function NotFound() {
  return (
    <Section tone="ivory" aria-labelledby="nf-title">
      <div className="mx-auto max-w-prose py-10 text-center">
        <p className="eyebrow">Page not found</p>
        <AnimatedHeading as="h1" id="nf-title" className="mt-3 text-4xl">
          We couldn&rsquo;t find that page
        </AnimatedHeading>
        <p className="mt-4 text-ink/85">
          The page you were looking for may have moved. Let&rsquo;s get you back on track.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <ButtonLink href="/" variant="solid">
            Return home
          </ButtonLink>
          <ButtonLink href="/about-crimean-tatars" variant="outline">
            Explore heritage
          </ButtonLink>
        </div>
        <p className="mt-6 text-sm">
          <Link href="/contact" className="text-turquoise underline underline-offset-4">
            Contact us
          </Link>
        </p>
      </div>
    </Section>
  );
}
