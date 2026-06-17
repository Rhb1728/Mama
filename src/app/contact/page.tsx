import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = { title: "Contact Us", description: "Contact Hassan Global Exports sales team for product inquiries and export quotations." };

export default function ContactPage() {
  return (
    <main>
      <PageHero title="Contact the export sales team" eyebrow="Contact us" text="Use the dummy contact details and form structure as an editable foundation for your real sales workflow." image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85" crumbs={[{ label: "Contact Us" }]} />
      <section className="container-x grid gap-8 py-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="grid gap-4">
          <ContactCard icon={<MapPin />} title="Head office" text={siteConfig.address} />
          <ContactCard icon={<Phone />} title="Phone / WhatsApp" text={siteConfig.phone} />
          <ContactCard icon={<Mail />} title="Sales email" text={siteConfig.email} />
        </div>
        <form className="grid gap-4 rounded-md border border-black/10 bg-white p-6 card-shadow">
          <input className="rounded-md border border-black/10 bg-[#fbfaf7] px-4 py-3 outline-none" placeholder="Company name" />
          <input className="rounded-md border border-black/10 bg-[#fbfaf7] px-4 py-3 outline-none" placeholder="Email address" />
          <input className="rounded-md border border-black/10 bg-[#fbfaf7] px-4 py-3 outline-none" placeholder="Product interest" />
          <textarea className="min-h-36 rounded-md border border-black/10 bg-[#fbfaf7] px-4 py-3 outline-none" placeholder="Message" />
          <button className="rounded-md bg-[var(--ink)] px-5 py-3 text-sm font-black text-white md:w-max">Send Message</button>
        </form>
      </section>
    </main>
  );
}

function ContactCard({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-md border border-black/10 bg-white p-6 card-shadow">
      <div className="text-[var(--sea)]">{icon}</div>
      <h2 className="mt-4 text-xl font-black">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{text}</p>
    </div>
  );
}
