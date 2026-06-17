import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "FAQ", description: "Frequently asked questions about products, MOQ, payment terms, samples and shipping." };

const faqs = [
  ["What is the usual MOQ?", "Most products are quoted by container load, but trial orders may be discussed depending on item and destination."],
  ["Do you support third-party inspection?", "Yes. SGS, Bureau Veritas or buyer-appointed inspections can be coordinated before shipment."],
  ["Which trade terms are available?", "FOB, CFR and CIF are supported. Final terms depend on product, buyer location and shipment plan."],
  ["Can products be private labeled?", "Packaging marks, buyer labels and custom documentation can be arranged for many product categories."],
  ["How fast can I receive a quotation?", "Complete RFQs with specifications and destination details can usually be reviewed quickly by the sales team."]
];

export default function FaqPage() {
  return (
    <main>
      <PageHero title="Answers for global buyers" eyebrow="FAQ" text="Common questions about quotation, quality checks, documents, shipping and order planning." image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=85" crumbs={[{ label: "FAQ" }]} />
      <section className="container-x grid gap-4 py-16">
        {faqs.map(([question, answer]) => (
          <details key={question} className="rounded-md border border-black/10 bg-white p-5 card-shadow">
            <summary className="cursor-pointer text-lg font-black">{question}</summary>
            <p className="mt-4 leading-7 text-[var(--muted)]">{answer}</p>
          </details>
        ))}
      </section>
    </main>
  );
}
