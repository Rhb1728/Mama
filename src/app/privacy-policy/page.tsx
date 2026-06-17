import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Privacy Policy", description: "Privacy policy for Hassan Global Exports." };

export default function PrivacyPage() {
  return (
    <main>
      <PageHero title="Privacy Policy" eyebrow="Legal" text="Dummy privacy content for lead forms, RFQ submissions, analytics and buyer communication." image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=85" crumbs={[{ label: "Privacy Policy" }]} />
      <LegalContent title="Privacy Policy" />
    </main>
  );
}

function LegalContent({ title }: { title: string }) {
  return (
    <article className="container-x max-w-3xl py-16 leading-8 text-[var(--muted)]">
      <h2 className="text-3xl font-black text-[var(--ink)]">{title}</h2>
      <p className="mt-5">This placeholder policy explains how dummy buyer information may be collected through inquiry forms, RFQ submissions and newsletter signups. Replace this with legal text reviewed for your operating jurisdiction.</p>
      <p className="mt-5">Typical data includes company name, contact person, email address, phone number, product requirements, uploaded specification files and communication records.</p>
    </article>
  );
}
