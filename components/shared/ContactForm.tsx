"use client";

import { useState, type FormEvent } from "react";
import {
  buildMailto,
  contactCategories,
  validateContact,
  type ContactErrors,
  type ContactFields,
} from "@/lib/contact";
import { site } from "@/lib/site";

const emptyFields: ContactFields = {
  name: "",
  email: "",
  phone: "",
  category: "",
  message: "",
};

type FormStatus =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "sent" }
  | { type: "unconfigured"; mailto: string }
  | { type: "error"; text: string };

const fieldClass =
  "mt-1.5 w-full rounded-xl border border-line bg-white px-3 py-3 text-base text-ink outline-none ring-brand focus:ring-2";

export function ContactForm() {
  const [fields, setFields] = useState<ContactFields>(emptyFields);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<FormStatus>({ type: "idle" });

  function update(key: keyof ContactFields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContact(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus({ type: "idle" });
      return;
    }

    setStatus({ type: "submitting" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, vefur: honeypot }),
      });
      const data = (await response.json()) as {
        delivered?: boolean;
        reason?: string;
        errors?: ContactErrors;
      };

      if (data.errors) {
        setErrors(data.errors);
        setStatus({ type: "idle" });
        return;
      }

      if (data.delivered) {
        setFields(emptyFields);
        setStatus({ type: "sent" });
        return;
      }

      if (data.reason === "unconfigured" || data.reason === "delivery_failed") {
        setStatus({
          type: "unconfigured",
          mailto: buildMailto(fields),
        });
        return;
      }

      if (response.status === 429) {
        setStatus({
          type: "error",
          text: "Of margar fyrirspurnir á stuttum tíma. Hringdu eða sendu tölvupóst.",
        });
        return;
      }

      setStatus({
        type: "error",
        text: "Ekki tókst að senda fyrirspurnina. Hringdu eða sendu tölvupóst.",
      });
    } catch {
      setStatus({
        type: "unconfigured",
        mailto: buildMailto(fields),
      });
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="vefur">Vefur</label>
        <input
          id="vefur"
          name="vefur"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="nafn" className="text-sm font-semibold text-navy">
          Nafn
        </label>
        <input
          id="nafn"
          name="name"
          autoComplete="name"
          value={fields.name}
          onChange={(event) => update("name", event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "nafn-villa" : undefined}
          className={fieldClass}
        />
        {errors.name ? (
          <p id="nafn-villa" className="mt-1 text-sm text-red-700">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="netfang" className="text-sm font-semibold text-navy">
            Netfang
          </label>
          <input
            id="netfang"
            name="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "netfang-villa" : undefined}
            className={fieldClass}
          />
          {errors.email ? (
            <p id="netfang-villa" className="mt-1 text-sm text-red-700">
              {errors.email}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="simi" className="text-sm font-semibold text-navy">
            Sími
          </label>
          <input
            id="simi"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={(event) => update("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "simi-villa" : undefined}
            className={fieldClass}
          />
          {errors.phone ? (
            <p id="simi-villa" className="mt-1 text-sm text-red-700">
              {errors.phone}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="flokkur" className="text-sm font-semibold text-navy">
          Ósk um ökuréttindi
        </label>
        <select
          id="flokkur"
          name="category"
          value={fields.category}
          onChange={(event) => update("category", event.target.value)}
          aria-invalid={Boolean(errors.category)}
          aria-describedby={errors.category ? "flokkur-villa" : undefined}
          className={fieldClass}
        >
          <option value="">Veldu flokk</option>
          {contactCategories.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        {errors.category ? (
          <p id="flokkur-villa" className="mt-1 text-sm text-red-700">
            {errors.category}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="skilabod" className="text-sm font-semibold text-navy">
          Skilaboð
        </label>
        <textarea
          id="skilabod"
          name="message"
          rows={5}
          value={fields.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "skilabod-villa" : undefined}
          className={fieldClass}
        />
        {errors.message ? (
          <p id="skilabod-villa" className="mt-1 text-sm text-red-700">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status.type === "submitting"}
        className="inline-flex w-full justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {status.type === "submitting" ? "Sendi fyrirspurn..." : "Senda fyrirspurn"}
      </button>

      <div aria-live="polite" className="text-sm leading-6">
        {status.type === "sent" ? (
          <p className="rounded-xl bg-emerald-50 px-4 py-3 text-emerald-900">
            Skilaboðin hafa verið send. Ökukennarinn svarar eins fljótt og unnt er. Þetta er ekki
            staðfest bókun.
          </p>
        ) : null}
        {status.type === "unconfigured" ? (
          <div className="rounded-xl bg-amber-50 px-4 py-3 text-amber-950">
            <p>
              Skilaboðin voru ekki send. Engin tölvupóstþjónusta er tengd við vefinn, eða sending
              mistókst. Ekkert var vistað sem móttekin fyrirspurn.
            </p>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              <a
                href={status.mailto}
                className="inline-flex justify-center rounded-full bg-navy px-4 py-2 font-semibold text-white"
              >
                Senda með tölvupósti
              </a>
              <a
                href={`tel:${site.phoneTel}`}
                className="inline-flex justify-center rounded-full border border-navy px-4 py-2 font-semibold"
              >
                Hringja í {site.phoneDisplay}
              </a>
            </div>
          </div>
        ) : null}
        {status.type === "error" ? (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-red-800">{status.text}</p>
        ) : null}
      </div>
    </form>
  );
}
