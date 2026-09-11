"use client";

import { useRef, useState, type FormEvent } from "react";

const email = "canadacrimea@gmail.com";
const button = "min-h-[48px] rounded-xl border border-line px-4 py-3 font-semibold text-navy transition-colors hover:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold";

export function InteracContribution() {
  const [amount, setAmount] = useState("50");
  const [custom, setCustom] = useState(false);
  const [details, setDetails] = useState(false);
  const [status, setStatus] = useState("");
  const [method, setMethod] = useState<"interac" | "card">("interac");
  const [loading, setLoading] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const valid = Number.isFinite(Number(amount)) && Number(amount) >= (method === "card" ? 5 : 0.01) && Number(amount) <= 100000;
  const formatted = valid ? Number(amount).toFixed(2) : "";

  async function copy(value: string, label: string) {
    try {
      await navigator.clipboard.writeText(value);
      setStatus(`${label} copied.`);
    } catch {
      setStatus(`Could not copy automatically. Select and copy the ${label.toLowerCase()} displayed here.`);
    }
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!valid) return;
    if (method === "card") {
      const form = new FormData(event.currentTarget);
      setLoading(true);
      setStatus("");
      try {
        const response = await fetch("/api/donations/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: Number(amount), frequency: "one_time", donorName: form.get("donorName"), email: form.get("email") }),
        });
        const data = await response.json();
        if (!response.ok || !data.url) throw new Error(data.error || "Unable to open checkout. Please try again.");
        window.location.assign(data.url);
      } catch (error) {
        setStatus(error instanceof Error ? error.message : "Unable to open checkout. Please try again.");
        setLoading(false);
      }
      return;
    }
    setDetails(true);
    requestAnimationFrame(() => heading.current?.focus());
  }

  return (
    <form onSubmit={submit} className="space-y-7 rounded-2xl border border-line bg-white p-6 shadow-sm md:p-8">
      <div className="grid gap-3 sm:grid-cols-2">
        <button type="button" disabled={loading} aria-pressed={method === "interac"} onClick={() => { setMethod("interac"); setStatus(""); }} className={`rounded-xl border p-5 text-left ${method === "interac" ? "border-gold bg-ivory" : "border-line bg-white"}`}>
          <p className="text-xs font-semibold uppercase tracking-widest text-navy-600">Canadian bank accounts</p>
          <h3 className="mt-2 font-display text-2xl text-navy">Interac e-Transfer</h3>
          <p className="mt-2 text-sm text-navy-600">Send a one-time contribution through your bank.</p>
        </button>
        <button type="button" disabled={loading} aria-pressed={method === "card"} onClick={() => { setMethod("card"); setStatus(""); }} className={`rounded-xl border p-5 text-left ${method === "card" ? "border-gold bg-ivory" : "border-line bg-white"}`}>
          <p className="text-xs font-semibold uppercase tracking-widest text-navy-600">Cards &amp; international</p>
          <h3 className="mt-2 font-display text-2xl text-navy">Pay by card</h3>
          <p className="mt-2 text-sm text-navy-600">Make a one-time contribution securely through Stripe.</p>
        </button>
      </div>
      <fieldset>
        <legend className="text-sm font-semibold uppercase tracking-widest text-navy">Choose an amount (CAD)</legend>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {[25, 50, 100, 250].map((value) => (
            <button key={value} type="button" aria-pressed={!custom && amount === String(value)}
              onClick={() => { setAmount(String(value)); setCustom(false); setStatus(""); }}
              className={`${button} ${!custom && amount === String(value) ? "border-gold bg-gold" : "bg-ivory"}`}>${value}</button>
          ))}
          <button type="button" aria-pressed={custom} onClick={() => setCustom(true)} className={`${button} ${custom ? "border-gold bg-gold" : "bg-ivory"}`}>Other</button>
        </div>
        {custom && (
          <label className="mt-4 block text-sm font-semibold text-navy">Your amount in CAD
            <input required type="number" min={method === "card" ? "5" : "0.01"} max="100000" step="0.01" inputMode="decimal" value={amount}
              onChange={(event) => { setAmount(event.target.value); setStatus(""); }}
              className="mt-2 min-h-[48px] w-full rounded-xl border border-line px-4 py-3 outline-none focus:border-gold" />
          </label>
        )}
      </fieldset>
      {method === "card" && <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-semibold text-navy">Name<input required name="donorName" autoComplete="name" maxLength={120} className="mt-2 min-h-[48px] w-full rounded-xl border border-line px-4 py-3" /></label>
          <label className="text-sm font-semibold text-navy">Email<input required name="email" type="email" autoComplete="email" className="mt-2 min-h-[48px] w-full rounded-xl border border-line px-4 py-3" /></label>
        </div>
        <p className="text-sm text-navy-600">International cards are welcome. Contributions are charged in CAD. Minimum card contribution: $5 CAD.</p>
      </div>}
      <button type="submit" disabled={!valid || loading} className="min-h-[52px] w-full rounded-xl bg-gold px-5 py-3 font-semibold text-navy transition-colors hover:bg-gold-soft disabled:opacity-50">
        {loading ? "Opening secure checkout…" : `${method === "card" ? "Continue to Stripe" : "Continue with Interac"}${valid ? ` · $${formatted} CAD` : ""}`}
      </button>
      {details && method === "interac" && (
        <section className="space-y-5 rounded-xl border border-line bg-ivory p-5" aria-labelledby="transfer-details-title">
          <h3 ref={heading} tabIndex={-1} id="transfer-details-title" className="font-display text-2xl text-navy">Complete your transfer in your bank</h3>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div><p className="text-xs uppercase tracking-widest text-navy-600">Amount to enter</p><p className="mt-1 select-text text-xl font-semibold text-navy">{valid ? `$${formatted} CAD` : "Choose a valid amount above"}</p></div>
            <button type="button" disabled={!valid} onClick={() => void copy(formatted, "Amount")} className={button}>Copy amount</button>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="min-w-0"><p className="text-xs uppercase tracking-widest text-navy-600">Recipient email</p><p className="mt-1 break-all select-text font-semibold text-navy">{email}</p></div>
            <button type="button" onClick={() => void copy(email, "Email")} className={button}>Copy email</button>
          </div>
          <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-navy-600">
            <li>Open your Canadian banking app or online banking and select Interac e-Transfer.</li>
            <li>Add the recipient email above and enter your chosen amount in CAD.</li>
            <li>Check the recipient details and confirm the transfer in your bank. You may add a dedication or preferred program in the transfer message.</li>
          </ol>
          <p className="text-sm text-navy-600">Copying these details does not send money. This website cannot confirm receipt of your transfer. Your bank’s transfer limits apply.</p>
        </section>
      )}
      <p role="status" aria-live="polite" className="text-sm text-navy">{status}</p>
      <p className="text-xs leading-relaxed text-navy-600">Crimean Tatar Heritage Canada is operated by Canada Crimea Cultural Committee, a registered Ontario not-for-profit organization. It is not a registered charity. Contributions are not eligible for Canadian charitable tax receipts.</p>
    </form>
  );
}
