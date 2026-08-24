"use client";

import { useId, useState, type FormEvent } from "react";

/**
 * PrototypeForm — a visually complete, ACCESSIBLE, LOCAL-ONLY form.
 *
 * It does NOT submit anywhere: no external service, no network request, no data
 * storage. On valid submit it shows a local success message and makes clear this
 * is prototype behavior. Real submission wiring (to a monitored recipient) is a
 * documented future step (see docs/provisional-mvp-implementation-plan.md).
 */

export type FieldDef = {
  name: string;
  label: string;
  type?: "text" | "email" | "textarea";
  required?: boolean;
  autoComplete?: string;
};

type Props = {
  fields: FieldDef[];
  submitLabel: string;
  /** Short description of what this form is for. */
  description?: string;
};

export function PrototypeForm({ fields, submitLabel, description }: Props) {
  const formId = useId();
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

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
      <div
        role="status"
        className="rounded-lg border border-turquoise/40 bg-turquoise/5 p-6"
      >
        <p className="font-display text-xl text-navy">Thank you — form received (prototype).</p>
        <p className="mt-2 text-sm text-navy-600">
          This is a local prototype: nothing was actually sent or stored. In the live
          site, this message would go to the organization&rsquo;s monitored inbox.
        </p>
        <button
          type="button"
          className="mt-4 text-sm font-semibold text-turquoise underline underline-offset-4"
          onClick={() => {
            setSubmitted(false);
            setValues({});
          }}
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5" aria-describedby={`${formId}-note`}>
      {description && (
        <p className="text-sm text-navy-600">{description}</p>
      )}
      <p id={`${formId}-note`} className="text-xs italic text-navy-600/80">
        Prototype form — submissions are handled locally only and are not sent or stored.
      </p>

      {fields.map((f) => {
        const id = `${formId}-${f.name}`;
        const err = errors[f.name];
        const describedBy = err ? `${id}-error` : undefined;
        const common = {
          id,
          name: f.name,
          required: f.required,
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
