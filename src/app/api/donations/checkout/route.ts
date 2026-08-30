import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

type CheckoutRequest = {
  amount?: number;
  frequency?: "one_time" | "monthly";
  designation?: string;
  dedication?: string;
  donorName?: string;
  email?: string;
};

function siteUrl(request: Request) {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (configured) return configured;

  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) return `https://${vercelUrl}`;

  return new URL(request.url).origin;
}

export async function POST(request: Request) {
  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json(
        { error: "Online contributions are not configured yet." },
        { status: 503 },
      );
    }

    const body = (await request.json()) as CheckoutRequest;
    const amount = Number(body.amount);
    const frequency = body.frequency;
    const email = String(body.email ?? "").trim().toLowerCase();
    const donorName = String(body.donorName ?? "").trim().slice(0, 120);
    const designation = String(body.designation ?? "Where it is needed most").trim().slice(0, 120);
    const dedication = String(body.dedication ?? "").trim().slice(0, 200);

    if (!Number.isFinite(amount) || amount < 5 || amount > 100000) {
      return NextResponse.json({ error: "Please enter an amount between $5 and $100,000 CAD." }, { status: 400 });
    }
    if (frequency !== "one_time" && frequency !== "monthly") {
      return NextResponse.json({ error: "Please select one-time or monthly." }, { status: 400 });
    }
    if (!donorName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please enter your name and a valid email address." }, { status: 400 });
    }

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
              name:
                frequency === "monthly"
                  ? "Monthly contribution to Crimean Tatar Heritage Canada"
                  : "Contribution to Crimean Tatar Heritage Canada",
              description: designation,
              metadata,
            },
            ...(frequency === "monthly" ? { recurring: { interval: "month" as const } } : {}),
          },
        },
      ],
      metadata,
      payment_intent_data: frequency === "one_time" ? { metadata } : undefined,
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
