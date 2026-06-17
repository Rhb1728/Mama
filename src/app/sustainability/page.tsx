import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SimpleGrid, SplitContent } from "@/components/content-blocks";

export const metadata: Metadata = { title: "Sustainability", description: "Sustainability commitments and responsible sourcing practices." };

export default function SustainabilityPage() {
  return (
    <main>
      <PageHero title="Responsible sourcing for durable export relationships" eyebrow="Sustainability" text="A practical sustainability page structure covering efficient packing, supplier responsibility and long-life product selection." image="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1800&q=85" crumbs={[{ label: "Sustainability" }]} />
      <SplitContent eyebrow="Commitment" title="Smarter materials, lower waste and accountable partners" text="Dummy sustainability content can be expanded into policies, reporting metrics and supplier standards." image="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=85" points={["Export packaging optimization", "Supplier compliance reviews", "Product durability and waste reduction", "Responsible logistics planning"]} />
      <SimpleGrid items={[
        { title: "Packaging Efficiency", text: "Container plans reduce empty space and protect products without excessive material use." },
        { title: "Supplier Standards", text: "Audited production partners can be assessed for workplace, quality and environmental practices." },
        { title: "Long-life Products", text: "Durability-focused specifications support lower replacement frequency for buyers." }
      ]} />
    </main>
  );
}
