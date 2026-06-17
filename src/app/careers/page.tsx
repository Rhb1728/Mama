import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SimpleGrid } from "@/components/content-blocks";

export const metadata: Metadata = { title: "Careers", description: "Careers at Hassan Global Exports." };

export default function CareersPage() {
  return (
    <main>
      <PageHero title="Build export systems that global buyers can trust" eyebrow="Careers" text="A polished careers page for future roles in export sales, sourcing, quality control, documentation and logistics." image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=85" crumbs={[{ label: "Careers" }]} />
      <SimpleGrid items={[
        { title: "Export Sales Executive", text: "Develop buyer relationships, prepare quotations and coordinate product requirements." },
        { title: "Quality Control Coordinator", text: "Manage inspection checklists, supplier reports and shipment-ready documentation." },
        { title: "Logistics Documentation Officer", text: "Prepare commercial invoices, packing lists, certificates and shipping files." }
      ]} />
    </main>
  );
}
