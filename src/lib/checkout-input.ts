export function parseCheckout(body: unknown) {
  if (!body || typeof body !== "object" || Array.isArray(body)) throw new Error("Please enter valid contribution details.");
  const b = body as Record<string, unknown>;
  if (typeof b.amount !== "number" || !Number.isFinite(b.amount) || b.amount < 5 || b.amount > 100000 || Math.abs(b.amount * 100 - Math.round(b.amount * 100)) > 1e-7) throw new Error("Please enter an amount between $5 and $100,000 CAD, with no more than two decimal places.");
  if (b.frequency !== "one_time" && b.frequency !== "monthly") throw new Error("Please select one-time or monthly.");
  if (typeof b.donorName !== "string" || !b.donorName.trim() || b.donorName.length > 120) throw new Error("Please enter your name (up to 120 characters).");
  if (typeof b.email !== "string" || b.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email.trim())) throw new Error("Please enter a valid email address.");
  for (const [key, max] of [["designation", 120], ["dedication", 200]] as const) {
    if (b[key] !== undefined && (typeof b[key] !== "string" || (b[key] as string).length > max)) throw new Error(`Please shorten ${key} to ${max} characters.`);
  }
  return { amount: b.amount, frequency: b.frequency, donorName: b.donorName.trim(), email: b.email.trim().toLowerCase(), designation: (b.designation as string | undefined)?.trim() || "Where it is needed most", dedication: (b.dedication as string | undefined)?.trim() || "" };
}
