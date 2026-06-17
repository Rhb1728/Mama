import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SimpleGrid, SplitContent } from "@/components/content-blocks";
import { certifications, processSteps } from "@/lib/data";

export const metadata: Metadata = { title: "Certifications & Quality", description: "Quality control, certifications and export inspection process for global buyers." };

export default function QualityPage() {
  return (
    <main>
      <PageHero title="Quality documentation buyers can verify" eyebrow="Certifications & quality" text="A trust-building framework for inspection, material certificates, supplier audits and export documentation." image="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1800&q=85" crumbs={[{ label: "Certifications & Quality" }]} />
      <SplitContent eyebrow="QC process" title="From specification review to pre-shipment control" text="Each order can include product-specific inspection steps, factory photos, packing confirmation and buyer-approved documentation." image="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=85" points={processSteps} />
      <SimpleGrid items={certifications.map((item) => ({ title: item, text: "Dummy certification description ready to replace with actual certificates, expiry dates and issuing bodies." }))} />
    </main>
  );
}
