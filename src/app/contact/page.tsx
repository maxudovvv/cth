import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { Section, Eyebrow } from "@/components/ui/Primitives";
import { PrototypeForm } from "@/components/forms/PrototypeForm";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { contact, organization } from "@/content/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Crimean Tatar Heritage Canada.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <Section tone="ivory" aria-label="Contact">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-2xl bg-white/70 p-6 ring-1 ring-line sm:p-8">
            <PrototypeForm
              submitLabel="Send message"
              description="Send a message to Crimean Tatar Heritage Canada."
              fields={[
                { name: "name", label: "Your name", required: true, autoComplete: "name" },
                { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
                { name: "subject", label: "Subject", required: false },
                { name: "message", label: "Message", type: "textarea", required: true },
              ]}
            />
          </div>

          <aside>
            <Eyebrow>Reach us</Eyebrow>
            <AnimatedHeading className="mt-3 font-display text-2xl text-navy" duration={0.66}>Crimean Tatar Heritage Canada</AnimatedHeading>
            <p className="mt-3 text-ink/85">{organization.positioning}</p>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-navy">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${contact.email}`}
                    className="rounded text-turquoise underline underline-offset-4 hover:text-turquoise-deep"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">Social</dt>
                <dd className="mt-1 text-navy-600">Official social links will be added here.</dd>
              </div>
            </dl>
          </aside>
        </div>
      </Section>
    </>
  );
}
