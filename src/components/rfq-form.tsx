"use client";

import type { FormEvent, ReactNode } from "react";
import { useState } from "react";
import { products } from "@/lib/data";

type FormState = {
  product: string;
  quantity: string;
  country: string;
  company: string;
  name: string;
  email: string;
  phone: string;
  requirements: string;
  file: string;
};

const initialState: FormState = {
  product: "",
  quantity: "",
  country: "",
  company: "",
  name: "",
  email: "",
  phone: "",
  requirements: "",
  file: ""
};

export function RfqForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function update(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    (["product", "quantity", "country", "company", "name", "email", "requirements"] as const).forEach((field) => {
      if (!form[field].trim()) nextErrors[field] = "Required";
    });
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Enter a valid email";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setForm(initialState);
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-5 rounded-md border border-black/10 bg-white p-5 card-shadow md:p-8">
      {submitted ? (
        <div className="rounded-md bg-emerald-50 p-4 text-sm font-semibold text-emerald-800">
          Thank you. A dummy RFQ confirmation has been created. Connect this form to your CRM or email service when ready.
        </div>
      ) : null}
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Product" error={errors.product}>
          <select value={form.product} onChange={(event) => update("product", event.target.value)} className="form-field">
            <option value="">Select product</option>
            {products.map((product) => <option key={product.slug} value={product.name}>{product.name}</option>)}
          </select>
        </Field>
        <Field label="Quantity / Order volume" error={errors.quantity}>
          <input value={form.quantity} onChange={(event) => update("quantity", event.target.value)} className="form-field" placeholder="Example: 1 x 40 ft container" />
        </Field>
        <Field label="Destination country" error={errors.country}>
          <input value={form.country} onChange={(event) => update("country", event.target.value)} className="form-field" placeholder="United Arab Emirates" />
        </Field>
        <Field label="Company name" error={errors.company}>
          <input value={form.company} onChange={(event) => update("company", event.target.value)} className="form-field" placeholder="Importer / distributor name" />
        </Field>
        <Field label="Contact person" error={errors.name}>
          <input value={form.name} onChange={(event) => update("name", event.target.value)} className="form-field" placeholder="Full name" />
        </Field>
        <Field label="Email address" error={errors.email}>
          <input type="email" value={form.email} onChange={(event) => update("email", event.target.value)} className="form-field" placeholder="buyer@example.com" />
        </Field>
        <Field label="Phone / WhatsApp">
          <input value={form.phone} onChange={(event) => update("phone", event.target.value)} className="form-field" placeholder="+971 50 000 0000" />
        </Field>
        <Field label="Upload specification file">
          <input type="file" onChange={(event) => update("file", event.target.files?.[0]?.name ?? "")} className="form-field file:mr-4 file:rounded-md file:border-0 file:bg-[var(--ink)] file:px-4 file:py-2 file:text-sm file:font-bold file:text-white" />
        </Field>
      </div>
      <Field label="Buyer requirements" error={errors.requirements}>
        <textarea value={form.requirements} onChange={(event) => update("requirements", event.target.value)} rows={6} className="form-field resize-y" placeholder="Technical specs, target price, packaging, standards, destination port and timeline." />
      </Field>
      <button className="focus-ring min-h-12 rounded-md bg-[var(--sea)] px-6 py-3 text-sm font-black text-white transition hover:bg-[#095d58] md:w-max">
        Submit RFQ
      </button>
      <style jsx>{`
        .form-field {
          width: 100%;
          min-height: 48px;
          border-radius: 6px;
          border: 1px solid rgba(16, 20, 24, 0.14);
          background: #fbfaf7;
          padding: 12px 14px;
          outline: none;
          color: #101418;
        }
      `}</style>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-[var(--ink)]">
      <span className="flex items-center justify-between">
        {label}
        {error ? <span className="text-xs text-red-600">{error}</span> : null}
      </span>
      {children}
    </label>
  );
}
