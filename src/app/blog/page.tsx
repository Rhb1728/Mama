import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { posts } from "@/lib/data";

export const metadata: Metadata = { title: "Blog & News", description: "Export news, buyer guides and product sourcing insights." };

export default function BlogPage() {
  return (
    <main>
      <PageHero title="Export insights and company news" eyebrow="Blog / News" text="SEO-ready article structure for global buyer education, product keywords and market updates." image="https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1800&q=85" crumbs={[{ label: "Blog / News" }]} />
      <section className="container-x grid gap-5 py-16 md:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-md border border-black/10 bg-white p-6 card-shadow transition hover:-translate-y-1">
            <p className="text-sm font-bold text-[var(--sea)]">{post.date}</p>
            <h2 className="mt-3 text-2xl font-black">{post.title}</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{post.excerpt}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
