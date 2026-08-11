import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SimpleGrid, SplitContent } from "@/components/content-blocks";
import { processSteps } from "@/lib/data";

export const metadata: Metadata = { title: "About Us", description: "Learn about A & M Industries, a premium B2B filter net manufacturer and exporter." };

export default function AboutPage() {
  return (
    <main>
      <PageHero title="A focused filter net manufacturer built around buyer confidence" eyebrow="About us" text="A & M Industries connects international buyers with controlled mesh production, disciplined documentation and clear shipment communication." image="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1800&q=85" crumbs={[{ label: "About Us" }]} />
      <SplitContent eyebrow="Operating model" title="Focused manufacturing with export discipline" text="The company is structured to support repeat filter net import programs, custom mesh requirements and buyer-specific packing standards." image="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1400&q=85" points={processSteps} />
      <SimpleGrid items={[
        { title: "Mission", text: "Make export sourcing transparent, dependable and commercially useful for global buyers." },
        { title: "Vision", text: "Become a trusted filter net manufacturing partner for global importers, distributors and industrial users." },
        { title: "Values", text: "Integrity, documentation accuracy, consistent quality and long-term buyer relationships." }
      ]} />
    </main>
  );
}
