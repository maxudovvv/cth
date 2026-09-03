"use client";

import { useState, type FormEvent } from "react";

type Frequency = "one_time" | "monthly";

const suggestedAmounts = [25, 50, 100, 250];
const designations = [
  "Where it is needed most",
  "Cultural programs",
  "Children and youth",
  "Heritage preservation",
  "Community events",
];

export function DonationForm() {
  const [frequency, setFrequency] = useState<Frequency>("one_time");
  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const form = new FormData(event.currentTarget);
    const selectedAmount = isCustom ? Number(customAmount) : amount;

    try {
      const response = await fetch("/api/donations/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: selectedAmount,
          frequency,
          designation: form.get("designation"),
          dedication: form.get("dedication"),
          donorName: form.get("donorName"),
          email: form.get("email"),
        }),
      });

      const data = (await response.json()) as { url?: string; error?: string };
      if (!response.ok || !data.url) {
        throw new Error(data.error || "Unable to start checkout. Please try again.");
      }

      window.location.assign(data.url);
    } catch (checkoutError) {
      setError(
        checkoutError instanceof Error
          ? checkoutError.message
          : "Unable to start checkout. Please try again.",
      );
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-7 rounded-2xl border border-line bg-white p-6 shadow-sm md:p-8">
      <fieldset>
        <legend className="text-sm font-semibold uppercase tracking-[0.16em] text-navy">
          Contribution frequency
        </legend>
        <div className="mt-3 grid grid-cols-2 gap-2 rounded-xl bg-sand/50 p-1.5">
          {(["one_time", "monthly"] as const).map((value) => (
            <button
              key={value}
              type="button"
              aria-pressed={frequency === value}
              onClick={() => setFrequency(value)}
              className={`min-h-[46px] rounded-lg px-4 py-2 text-sm font-semibold transition ${
                frequency === value
                  ? "bg-navy text-white shadow-sm"
                  : "text-navy hover:bg-white/70"
              }`}
            >
              {value === "one_time" ? "One-time" : "Monthly"}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-sm font-semibold uppercase tracking-[0.16em] text-navy">
          Amount (CAD)
        </legend>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {suggestedAmounts.map((value) => (
            <button
              key={value}
              type="button"
              aria-pressed={!isCustom && amount === value}
              onClick={() => {
                setAmount(value);
                setIsCustom(false);
              }}
              className={`min-h-[48px] rounded-xl border px-3 font-semibold transition ${
                !isCustom && amount === value
                  ? "border-gold bg-gold text-navy"
                  : "border-line bg-ivory text-navy hover:border-gold"
              }`}
            >
              ${value}
            </button>
          ))}
          <button
            type="button"
            aria-pressed={isCustom}
            onClick={() => setIsCustom(true)}
            className={`min-h-[48px] rounded-xl border px-3 font-semibold transition ${
              isCustom
                ? "border-gold bg-gold text-navy"
                : "border-line bg-ivory text-navy hover:border-gold"
            }`}
          >
            Other
          </button>
        </div>
        {isCustom && (
          <label className="mt-4 block text-sm font-semibold text-navy">
            Enter amount in Canadian dollars
            <div className="relative mt-1">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy-600">$</span>
              <input
                required
                type="number"
                min="5"
                max="100000"
                step="1"
                inputMode="decimal"
                value={customAmount}
                onChange={(event) => setCustomAmount(event.target.value)}
                className="min-h-[48px] w-full rounded-xl border border-line bg-white py-3 pl-8 pr-4 text-navy outline-none focus:border-turquoise"
              />
            </div>
          </label>
        )}
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-navy">
          Name
          <input
            required
            name="donorName"
            autoComplete="name"
            className="mt-1 min-h-[48px] w-full rounded-xl border border-line bg-white px-4 py-3 font-normal outline-none focus:border-turquoise"
          />
        </label>
        <label className="text-sm font-semibold text-navy">
          Email
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="mt-1 min-h-[48px] w-full rounded-xl border border-line bg-white px-4 py-3 font-normal outline-none focus:border-turquoise"
          />
        </label>
      </div>

      <label className="block text-sm font-semibold text-navy">
        Direct my contribution to
        <select
          name="designation"
          className="mt-1 min-h-[48px] w-full rounded-xl border border-line bg-white px-4 py-3 font-normal outline-none focus:border-turquoise"
        >
          {designations.map((designation) => (
            <option key={designation}>{designation}</option>
          ))}
        </select>
      </label>

      <label className="block text-sm font-semibold text-navy">
        Dedication <span className="font-normal text-navy-600">(optional)</span>
        <input
          name="dedication"
          maxLength={200}
          placeholder="In honour of… or In memory of…"
          className="mt-1 min-h-[48px] w-full rounded-xl border border-line bg-white px-4 py-3 font-normal outline-none placeholder:text-navy-600/60 focus:border-turquoise"
        />
      </label>

      {error && (
        <p role="alert" className="rounded-lg border border-pomegranate/30 bg-pomegranate/5 p-3 text-sm text-pomegranate">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="flex min-h-[52px] w-full items-center justify-center rounded-xl bg-gold px-6 py-3 font-semibold text-navy transition hover:bg-gold-soft disabled:cursor-wait disabled:opacity-70"
      >
        {loading
          ? "Opening secure checkout…"
          : `${frequency === "monthly" ? "Contribute monthly" : "Contribute"} ${
              isCustom && !customAmount ? "" : `$${isCustom ? customAmount : amount} CAD`
            }`}
      </button>

      <div className="space-y-2 text-center text-xs leading-relaxed text-navy-600">
        <p>Secure payment processing is provided by Stripe. International cards are welcome.</p>
        <p>
          Crimean Tatar Heritage Canada is a registered non-profit organization, not a registered charity.
          Contributions are not eligible for Canadian charitable tax receipts.
        </p>
      </div>
    </form>
  );
}
