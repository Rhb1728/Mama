import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SimpleGrid } from "@/components/content-blocks";
import { industries } from "@/lib/data";

export const metadata: Metadata = { title: "Industries Served", description: "Industries served by Hassan Global Exports including fisheries, construction, agriculture and industrial distribution." };

export default function IndustriesPage() {
  return (
    <main>
      <PageHero title="Industry-focused export supply for global buyers" eyebrow="Industries served" text="Product sourcing and packing workflows are adapted to the practical needs of each buyer segment." image="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1800&q=85" crumbs={[{ label: "Industries Served" }]} />
      <SimpleGrid items={industries.map((industry) => ({ title: industry, text: "Dedicated dummy content for buyer requirements, product standards, packaging norms and repeat import programs in this segment." }))} />
    </main>
  );
}
