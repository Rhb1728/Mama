import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SimpleGrid, SplitContent } from "@/components/content-blocks";
import { markets } from "@/lib/data";

export const metadata: Metadata = { title: "Global Export Markets", description: "Explore global export markets and logistics capabilities for international buyers." };

export default function MarketsPage() {
  return (
    <main>
      <PageHero title="Export coverage for major buying regions" eyebrow="Global markets" text="Dummy market pages are ready for localization, distributor support and destination-specific compliance content." image="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1800&q=85" crumbs={[{ label: "Global Export Markets" }]} />
      <SplitContent eyebrow="Logistics" title="Container planning, documents and trade-term flexibility" text="Sales and operations teams coordinate buyer requirements from quotation to shipment handover." image="https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&w=1400&q=85" points={["FOB, CFR and CIF support", "Packing list and shipping mark accuracy", "Buyer updates before and after vessel departure", "Consolidated shipment planning"]} />
      <SimpleGrid items={markets.map((market) => ({ title: market, text: "Placeholder market content for importer profiles, common products, documentation notes and distributor opportunities." }))} />
    </main>
  );
}
