import type { Metadata } from "next";
import { ProductFilter } from "@/components/product-filter";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse export-ready filter net products manufactured for industrial, agricultural, nylon mesh and custom roll applications."
};

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        title="Export-ready filter net product lines"
        eyebrow="Products"
        text="Review filter net specifications, compare roll formats and send inquiries for container-ready supply."
        image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=85"
        crumbs={[{ label: "Products" }]}
      />
      <section className="container-x py-16">
        <ProductFilter />
      </section>
    </main>
  );
}
