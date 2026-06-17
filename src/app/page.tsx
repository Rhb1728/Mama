import Image from "next/image";
import Link from "next/link";
import { Award, CheckCircle2, Download, Globe2, Ship, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { Counter, MotionDiv, Reveal } from "@/components/motion";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { Testimonials } from "@/components/testimonials";
import { certifications, industries, markets, posts, products, stats, strengths } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#101418] text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1581093458791-9d09fdf964d0?auto=format&fit=crop&w=1800&q=85"
            alt="Modern industrial production line for export manufacturing"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-42"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101418] via-[#101418]/82 to-[#101418]/25" />
        </div>
        <div className="container-x relative grid min-h-[calc(100svh-80px)] items-center gap-10 py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <p className="mb-5 inline-flex rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-white/80">
              Premium B2B Export Partner
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Hassan Global Exports
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
              Industrial and consumer product exports with factory-vetted supply, rigorous quality control and reliable container logistics for serious global buyers.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/rfq" variant="secondary">Request Quotation</ButtonLink>
              <ButtonLink href="/products" variant="primary">Explore Products</ButtonLink>
              <ButtonLink href="/contact" variant="darkGhost">Contact Sales</ButtonLink>
            </div>
          </Reveal>

          <MotionDiv
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="rounded-md border border-white/12 bg-white/10 p-5 backdrop-blur-md"
          >
            <div className="grid gap-4">
              {["Fishing Nets", "PPGI Coils", "Steel Products", "Wire Mesh"].map((item, index) => (
                <div key={item} className="flex items-center justify-between rounded-md bg-white/10 p-4">
                  <span className="font-bold">{item}</span>
                  <span className="text-sm text-white/58">Export line 0{index + 1}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-md bg-[#c6a15b] p-4 text-[#101418]"><Ship className="mx-auto" /><p className="mt-2 text-xs font-black">CIF / FOB</p></div>
              <div className="rounded-md bg-white p-4 text-[#101418]"><ShieldCheck className="mx-auto" /><p className="mt-2 text-xs font-black">QC Files</p></div>
              <div className="rounded-md bg-[#0e766e] p-4"><Globe2 className="mx-auto" /><p className="mt-2 text-xs font-black">42+ Markets</p></div>
            </div>
          </MotionDiv>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="container-x grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-md border border-black/10 bg-[#fbfaf7] p-5">
              <p className="text-3xl font-black text-[var(--ink)]"><Counter value={stat.value} suffix={stat.suffix} /></p>
              <p className="mt-2 text-sm font-semibold text-[var(--muted)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-20">
        <Reveal>
          <SectionHeading eyebrow="Why buyers choose us" title="Built for importers who need clarity before the container moves." text="From product matching to export paperwork, every workflow is designed to reduce uncertainty for international purchasing teams." />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {strengths.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <div className="h-full rounded-md border border-black/10 bg-white p-6 card-shadow">
                <item.icon className="text-[var(--sea)]" size={30} />
                <h3 className="mt-6 text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#eef2f2] py-20">
        <div className="container-x">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Featured products" title="Export-ready product categories." text="A scalable catalog structure for adding new products, specifications and downloadable buyer assets." />
            <ButtonLink href="/products" variant="ghost">View All Products</ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.slice(0, 3).map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
        </div>
      </section>

      <section className="container-x grid gap-10 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading eyebrow="Global export markets" title="Coordinated shipments for buyers across key import regions." text="Dummy market coverage content is structured for future CMS editing, distributor pages and localized landing pages." />
          <div className="mt-8 flex flex-wrap gap-2">
            {markets.map((market) => <span key={market} className="rounded-md border border-black/10 bg-white px-4 py-2 text-sm font-bold">{market}</span>)}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative min-h-[360px] overflow-hidden rounded-md bg-[#101418] p-6 text-white card-shadow">
            <Image src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1400&q=80" alt="Global shipping map and logistics" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover opacity-45" />
            <div className="relative z-10 grid h-full content-end">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/65">FOB · CFR · CIF · Consolidated Loads</p>
              <h3 className="mt-4 text-3xl font-black">Global shipping documentation, container planning and buyer updates.</h3>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="dark-band py-20 text-white">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--gold)]">Buyer trust</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Quality assurance that travels with every shipment.</h2>
            <ul className="mt-8 grid gap-3">
              {certifications.map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/78"><CheckCircle2 className="text-[var(--gold)]" size={20} /> {item}</li>
              ))}
            </ul>
          </div>
          <Testimonials />
        </div>
      </section>

      <section className="container-x py-20">
        <SectionHeading eyebrow="Industries served" title="Commercial supply for diverse global buyers." align="center" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <Link key={industry} href="/industries" className="rounded-md border border-black/10 bg-white p-5 text-base font-black transition hover:-translate-y-1 hover:shadow-xl">
              {industry}
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading eyebrow="Latest insights" title="Export intelligence for importers and distributors." />
            <a href={siteConfig.catalogUrl} className="focus-ring mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--ink)] px-5 py-3 text-sm font-bold text-white">
              <Download size={17} /> Download Company Catalog
            </a>
          </div>
          <div className="grid gap-4">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-md border border-black/10 bg-[#fbfaf7] p-5 transition hover:bg-[#f0ede4]">
                <p className="text-sm font-bold text-[var(--sea)]">{post.date}</p>
                <h3 className="mt-2 text-xl font-black">{post.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="rounded-md bg-[var(--sea)] p-8 text-white md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <Award size={36} />
              <h2 className="mt-5 text-3xl font-black">Ready to source export-grade products?</h2>
              <p className="mt-3 max-w-2xl text-white/78">Send product requirements, target destination and packaging needs. The dummy form is ready for CRM integration.</p>
            </div>
            <ButtonLink href="/rfq" variant="secondary">Start RFQ</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
