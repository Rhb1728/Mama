import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SimpleGrid, SplitContent } from "@/components/content-blocks";
import { processSteps } from "@/lib/data";

export const metadata: Metadata = { title: "About Us", description: "Learn about Hassan Global Exports, a premium B2B manufacturing and trading exporter." };

export default function AboutPage() {
  return (
    <main>
      <PageHero title="A global export partner built around buyer confidence" eyebrow="About us" text="Hassan Global Exports connects international buyers with vetted manufacturing, disciplined documentation and clear shipment communication." image="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1800&q=85" crumbs={[{ label: "About Us" }]} />
      <SplitContent eyebrow="Operating model" title="Manufacturing access with trading agility" text="The company is structured to support repeat import programs, mixed product procurement and scalable category expansion." image="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1400&q=85" points={processSteps} />
      <SimpleGrid items={[
        { title: "Mission", text: "Make export sourcing transparent, dependable and commercially useful for global buyers." },
        { title: "Vision", text: "Become a trusted multi-category export house for industrial and consumer supply chains." },
        { title: "Values", text: "Integrity, documentation accuracy, consistent quality and long-term buyer relationships." }
      ]} />
    </main>
  );
}
