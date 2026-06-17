import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Download } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ButtonLink } from "@/components/button";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { products } from "@/lib/data";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.summary,
    openGraph: {
      title: product.name,
      description: product.summary,
      images: [{ url: product.image, width: 1200, height: 630, alt: product.name }]
    }
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) notFound();
  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <main className="container-x py-12">
      <Breadcrumbs items={[{ label: "Products", href: "/products" }, { label: product.name }]} />
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4">
          <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-slate-200">
            <Image src={product.gallery[0]} alt={product.name} fill priority sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.gallery.map((image) => (
              <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-md bg-slate-200">
                <Image src={image} alt={`${product.name} gallery`} fill sizes="20vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-md border border-black/10 bg-white p-6 card-shadow">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--sea)]">{product.category}</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight">{product.name}</h1>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">{product.summary}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <ButtonLink href={`/rfq?product=${product.slug}`}>Send Inquiry</ButtonLink>
            <Link href="/catalog/hassan-global-exports-catalog.pdf" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-black/10 px-5 py-3 text-sm font-bold transition hover:bg-slate-100">
              <Download size={17} /> Download PDF
            </Link>
          </div>
          <div className="mt-8 rounded-md bg-[#f3f0e9] p-4">
            <h2 className="font-black">Export packaging</h2>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{product.packaging}</p>
            <h2 className="mt-5 font-black">Container loading</h2>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{product.loading}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-8 py-16 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <SectionHeading title="Technical specifications" eyebrow="Buyer data" />
          <div className="mt-6 overflow-hidden rounded-md border border-black/10 bg-white">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="grid grid-cols-[0.8fr_1.2fr] border-b border-black/10 last:border-b-0">
                <div className="bg-[#f3f0e9] p-4 text-sm font-black">{key}</div>
                <div className="p-4 text-sm font-semibold text-slate-700">{value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-5">
          <InfoList title="Applications" items={product.applications} />
          <InfoList title="Certifications" items={product.certifications} />
        </div>
      </section>

      <section className="rounded-md bg-[#101418] p-6 text-white md:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--gold)]">Inquiry form</p>
            <h2 className="mt-3 text-3xl font-black">Request pricing for {product.name}</h2>
            <p className="mt-4 text-white/68">Share quantity, destination port, required certifications and packaging preferences.</p>
          </div>
          <form className="grid gap-3">
            <input className="rounded-md border border-white/15 bg-white/10 px-4 py-3 outline-none placeholder:text-white/45" placeholder="Company email" />
            <textarea className="min-h-28 rounded-md border border-white/15 bg-white/10 px-4 py-3 outline-none placeholder:text-white/45" placeholder="Requirement details" />
            <ButtonLink href="/rfq" variant="secondary">Open Full RFQ</ButtonLink>
          </form>
        </div>
      </section>

      <section className="py-16">
        <SectionHeading title="Related products" eyebrow="Continue exploring" />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {related.map((item) => <ProductCard key={item.slug} product={item} />)}
        </div>
      </section>
    </main>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-md border border-black/10 bg-white p-6">
      <h2 className="text-xl font-black">{title}</h2>
      <ul className="mt-4 grid gap-3 text-sm font-semibold text-slate-700">
        {items.map((item) => <li key={item}>• {item}</li>)}
      </ul>
    </div>
  );
}
