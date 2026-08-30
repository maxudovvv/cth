import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Primitives";

export const metadata: Metadata = {
  title: "Thank You | Crimean Tatar Heritage Canada",
  description: "Thank you for supporting Crimean Tatar heritage in Canada.",
};

export default function DonationSuccessPage() {
  return (
    <Section tone="ivory">
      <div className="mx-auto max-w-2xl py-16 text-center md:py-24">
        <div aria-hidden="true" className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-3xl text-gold">
          ✓
        </div>
        <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-turquoise">Payment received</p>
        <h1 className="mt-3 font-display text-4xl text-navy md:text-5xl">Thank you for your support</h1>
        <p className="mt-5 text-lg leading-relaxed text-navy-600">
          Your contribution helps preserve, celebrate, and share Crimean Tatar heritage with communities across Canada.
          Stripe will send a payment confirmation to your email.
        </p>
        <p className="mt-4 text-sm text-navy-600">
          This confirmation is not an official charitable tax receipt.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-[48px] items-center rounded-xl bg-navy px-6 py-3 font-semibold text-white transition hover:bg-navy-600"
        >
          Return home
        </Link>
      </div>
    </Section>
  );
}
