import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Terms & Conditions", description: "Terms and conditions for Hassan Global Exports." };

export default function TermsPage() {
  return (
    <main>
      <PageHero title="Terms & Conditions" eyebrow="Legal" text="Dummy commercial terms covering quotations, samples, inspections, shipment timing and buyer responsibilities." image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=85" crumbs={[{ label: "Terms & Conditions" }]} />
      <article className="container-x max-w-3xl py-16 leading-8 text-[var(--muted)]">
        <h2 className="text-3xl font-black text-[var(--ink)]">Terms & Conditions</h2>
        <p className="mt-5">All quotations, lead times, specifications and shipment estimates shown on this demo website are placeholders. Final commercial terms should be confirmed in a signed proforma invoice or sales contract.</p>
        <p className="mt-5">Replace this section with real legal terms covering payment, delivery, inspection, claims, force majeure and governing law.</p>
      </article>
    </main>
  );
}
