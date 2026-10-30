"use client";

import { useCallback, useId, useState, type FormEvent } from "react";

/**
 * Email draft composer. Delivery happens only in the visitor’s email application.
 *
 * Values remain on this page; no delivery or storage is claimed.
 */

export type FieldDef = {
  name: string;
  label: string;
  type?: "text" | "email" | "textarea";
  required?: boolean;
  autoComplete?: string;
};

type Props = {
  recipient: string;
  fields: FieldDef[];
  submitLabel: string;
  /** Short description of what this form is for. */
  description?: string;
};

export function PrototypeForm({ recipient, fields, submitLabel, description }: Props) {
  const formId = useId();
  const focusDraft = useCallback((node: HTMLHeadingElement | null) => node?.focus(), []);
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");
  const draft = fields.map(f => `${f.label}: ${(values[f.name] ?? "").trim()}`).join("\n\n");
  const mailHref = `mailto:${recipient}?subject=${encodeURIComponent(values.subject?.trim() || "Website enquiry — Crimean Tatar Heritage Canada")}&body=${encodeURIComponent(draft)}`;

  function validate(): Record<string, string> {
    const next: Record<string, string> = {};
    for (const f of fields) {
      const v = (values[f.name] ?? "").trim();
      if (f.required && !v) {
        next[f.name] = `${f.label} is required.`;
      } else if (f.type === "email" && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
        next[f.name] = "Please enter a valid email address.";
      }
    }
    return next;
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
    } else {
      // Move focus to the first invalid field for accessibility.
      const first = fields.find((f) => next[f.name]);
      if (first) document.getElementById(`${formId}-${first.name}`)?.focus();
    }
  }

  if (submitted) {
    return (
      <section className="space-y-4 rounded-lg border border-turquoise/40 bg-turquoise/5 p-6" aria-label="Email draft">
        <h2 className="font-display text-xl text-navy" tabIndex={-1} ref={focusDraft}>Your message is ready to send</h2>
        <p className="text-sm text-navy-600">Open this draft in your email app, review it and press Send there. Nothing has been sent by this website.</p>
        <p className="break-all text-sm text-navy">To: {recipient}</p>
        <pre className="max-h-72 overflow-auto whitespace-pre-wrap break-words rounded bg-white p-4 font-sans text-sm text-ink">{draft}</pre>
        <div className="flex flex-wrap gap-3">
          <a href={mailHref} className="inline-flex min-h-[44px] items-center rounded bg-gold px-5 py-3 text-sm font-semibold text-navy">Open email draft</a>
          <button type="button" className="min-h-[44px] rounded border border-line px-4 py-3 text-sm text-navy" onClick={async () => { try { await navigator.clipboard.writeText(draft); setCopyStatus("Draft copied. Paste it into your email app and send it to the address above."); } catch { setCopyStatus("Select and copy the draft displayed above."); } }}>Copy message</button>
          <button type="button" className="min-h-[44px] rounded px-4 py-3 text-sm text-turquoise underline" onClick={() => { setSubmitted(false); setCopyStatus(""); }}>Edit message</button>
        </div>
        <p role="status" className="text-sm text-navy-600">{copyStatus}</p>
      </section>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5" aria-describedby={`${formId}-note`}>
      {description && (
        <p className="text-sm text-navy-600">{description}</p>
      )}
      <p id={`${formId}-note`} className="text-xs italic text-navy-600/80">
        Prepare an email draft, then send it from your email app. Your message is not stored on this website.
      </p>

      {fields.map((f) => {
        const id = `${formId}-${f.name}`;
        const err = errors[f.name];
        const describedBy = err ? `${id}-error` : undefined;
        const common = {
          id,
          name: f.name,
          required: f.required,
          maxLength: f.type === "textarea" ? 4000 : 200,
          "aria-invalid": err ? true : undefined,
          "aria-describedby": describedBy,
          autoComplete: f.autoComplete,
          value: values[f.name] ?? "",
          onChange: (
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
          ) => setValues((v) => ({ ...v, [f.name]: e.target.value })),
          className:
            "mt-1 w-full rounded border border-line bg-white px-3 py-2.5 text-ink shadow-inner outline-none focus-visible:border-turquoise",
        };
        return (
          <div key={f.name}>
            <label htmlFor={id} className="block text-sm font-semibold text-navy">
              {f.label}
              {f.required && (
                <span className="text-pomegranate" aria-hidden="true">
                  {" "}
                  *
                </span>
              )}
            </label>
            {f.type === "textarea" ? (
              <textarea {...common} rows={5} />
            ) : (
              <input {...common} type={f.type ?? "text"} />
            )}
            {err && (
              <p id={`${id}-error`} className="mt-1 text-sm text-pomegranate">
                {err}
              </p>
            )}
          </div>
        );
      })}

      <button
        type="submit"
        className="inline-flex min-h-[44px] items-center rounded bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold-soft"
      >
        {submitLabel}
      </button>
    </form>
  );
}
