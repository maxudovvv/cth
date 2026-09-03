import type { Metadata } from "next";
import Link from "next/link";
import Stripe from "stripe";
import { Section } from "@/components/ui/Primitives";

export const metadata: Metadata = {
  title: "Thank You | Crimean Tatar Heritage Canada",
  description: "Thank you for supporting Crimean Tatar heritage in Canada.",
};

export const dynamic = "force-dynamic";

type Props = {
  searchParams: { session_id?: string };
};

async function getCheckoutSession(sessionId?: string) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey || !sessionId?.startsWith("cs_")) return null;

  try {
    const stripe = new Stripe(secretKey);
    return await stripe.checkout.sessions.retrieve(sessionId);
  } catch {
    return null;
  }
}

function formatCad(amountTotal: number | null) {
  if (amountTotal === null) return null;
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format(amountTotal / 100);
}

export default async function DonationSuccessPage({ searchParams }: Props) {
  const session = await getCheckoutSession(searchParams.session_id);
  const isConfirmed =
    session?.status === "complete" && session.payment_status !== "unpaid";
  const amount = isConfirmed ? formatCad(session.amount_total) : null;
  const isMonthly = session?.mode === "subscription";

  return (
    <Section tone="ivory">
      <div className="mx-auto max-w-2xl py-16 text-center md:py-24">
        {isConfirmed ? (
          <>
            <div aria-hidden="true" className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-3xl text-gold">
              ✓
            </div>
            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-turquoise">Payment verified</p>
            <h1 className="mt-3 font-display text-4xl text-navy md:text-5xl">Thank you for your support</h1>
            {amount && (
              <p className="mt-4 font-display text-2xl text-gold">
                {amount} CAD{isMonthly ? " monthly" : ""}
              </p>
            )}
            <p className="mt-5 text-lg leading-relaxed text-navy-600">
              Your contribution helps preserve, celebrate, and share Crimean Tatar heritage with communities across Canada.
              Stripe will send a payment confirmation to your email.
            </p>
            <p className="mt-4 text-sm text-navy-600">
              This confirmation is not an official charitable tax receipt.
            </p>
          </>
        ) : (
          <>
            <div aria-hidden="true" className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sand text-2xl text-navy-600">
              i
            </div>
            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-navy-600">Payment not verified</p>
            <h1 className="mt-3 font-display text-4xl text-navy md:text-5xl">We could not confirm this payment</h1>
            <p className="mt-5 text-lg leading-relaxed text-navy-600">
              Return to the contribution page and try again. If you were charged, please check your Stripe confirmation email before making another payment.
            </p>
            <Link
              href="/donate"
              className="mt-8 mr-3 inline-flex min-h-[48px] items-center rounded-xl border border-line px-6 py-3 font-semibold text-navy transition hover:border-gold"
            >
              Try again
            </Link>
          </>
        )}
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
