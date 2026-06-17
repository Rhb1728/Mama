import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { posts } from "@/lib/data";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = posts.find((item) => item.slug === params.slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((item) => item.slug === params.slug);
  if (!post) notFound();
  return (
    <main>
      <PageHero title={post.title} eyebrow={post.date} text={post.excerpt} image="https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1800&q=85" crumbs={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
      <article className="container-x max-w-3xl py-16">
        <p className="text-lg leading-9 text-[var(--muted)]">This SEO-ready dummy article introduces the topic for global buyers. Replace this section with practical guidance, market updates, product specification notes, shipment documentation tips and internal company news.</p>
        <h2 className="mt-10 text-3xl font-black">Key buyer considerations</h2>
        <p className="mt-4 leading-8 text-[var(--muted)]">Strong export sourcing depends on clear specifications, realistic lead times, verified packing requirements and accurate paperwork. Hassan Global Exports keeps these points visible throughout the quotation and shipment process.</p>
      </article>
    </main>
  );
}
