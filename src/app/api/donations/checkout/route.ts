import { NextResponse } from "next/server";
import Stripe from "stripe";
import { parseCheckout } from "@/lib/checkout-input";

export const runtime = "nodejs";

function siteUrl(request: Request) {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (configured) return configured;

  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) return `https://${vercelUrl}`;

  return new URL(request.url).origin;
}

export async function POST(request: Request) {
  if (process.env.STRIPE_CHECKOUT_ENABLED === "false") {
    return NextResponse.json(
      { error: "Card payments are coming soon. Please use Interac e-Transfer on our contribution page." },
      { status: 503 },
    );
  }
  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json(
        { error: "Online contributions are not configured yet." },
        { status: 503 },
      );
    }

    const raw = await request.text();
    if (new TextEncoder().encode(raw).length > 8192) return NextResponse.json({ error: "Contribution details are too long." }, { status: 413 });
    let input: ReturnType<typeof parseCheckout>;
    try { input = parseCheckout(JSON.parse(raw)); }
    catch (error) { return NextResponse.json({ error: error instanceof SyntaxError ? "Please enter valid contribution details." : error instanceof Error ? error.message : "Invalid contribution details." }, { status: 400 }); }
    const { amount, frequency, donorName, email, designation, dedication } = input;

    const stripe = new Stripe(secretKey);
    const metadata = {
      donor_name: donorName,
      designation,
      dedication: dedication || "None",
      contribution_frequency: frequency,
    };

    const session = await stripe.checkout.sessions.create({
      mode: frequency === "monthly" ? "subscription" : "payment",
      customer_email: email,
      billing_address_collection: "auto",
      allow_promotion_codes: false,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "cad",
            unit_amount: Math.round(amount * 100),
            product_data: {
              name: frequency === "monthly" ? "Monthly contribution to Crimean Tatar Heritage Canada" : "Contribution to Crimean Tatar Heritage Canada",
              description: designation,
              metadata,
            },
            ...(frequency === "monthly" ? { recurring: { interval: "month" as const } } : {}),
          },
        },
      ],
      metadata,
      payment_intent_data: frequency === "one_time" ? { metadata, receipt_email: email } : undefined,
      subscription_data: frequency === "monthly" ? { metadata } : undefined,
      success_url: `${siteUrl(request)}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl(request)}/donate`,
      custom_text: {
        submit: {
          message:
            "Contributions are not eligible for Canadian charitable tax receipts.",
        },
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe Checkout session creation failed", error);
    return NextResponse.json(
      { error: "Unable to start secure checkout. Please try again later." },
      { status: 500 },
    );
  }
}
