import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { RfqForm } from "@/components/rfq-form";

export const metadata: Metadata = {
  title: "Request Quotation",
  description: "Send an RFQ for export-ready fishing nets, steel products, PPGI coils, wire mesh and industrial materials."
};

export default function RfqPage() {
  return (
    <main>
      <PageHero
        title="Request a professional export quotation"
        eyebrow="RFQ"
        text="Submit quantity, destination, specifications and files so the sales team can prepare a container-ready quote."
        image="https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&w=1800&q=85"
        crumbs={[{ label: "Request Quotation" }]}
      />
      <section className="container-x grid gap-10 py-16 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <h2 className="text-3xl font-black">RFQ checklist</h2>
          <ul className="mt-6 grid gap-4 text-sm leading-6 text-[var(--muted)]">
            <li><strong className="text-[var(--ink)]">Product specs:</strong> grade, size, color, treatment, standards and packaging.</li>
            <li><strong className="text-[var(--ink)]">Quantity:</strong> trial order, LCL, 20 ft, 40 ft or annual contract volume.</li>
            <li><strong className="text-[var(--ink)]">Trade terms:</strong> FOB, CFR, CIF, destination port and inspection requirements.</li>
          </ul>
        </div>
        <RfqForm />
      </section>
    </main>
  );
}
