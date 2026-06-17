import type { MetadataRoute } from "next";
import { posts, products } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/industries",
    "/global-markets",
    "/certifications-quality",
    "/gallery",
    "/blog",
    "/contact",
    "/rfq",
    "/sustainability",
    "/faq",
    "/careers",
    "/privacy-policy",
    "/terms-conditions"
  ];

  return [
    ...staticRoutes.map((route) => ({ url: `${siteConfig.url}${route}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.7 })),
    ...products.map((product) => ({ url: `${siteConfig.url}/products/${product.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
    ...posts.map((post) => ({ url: `${siteConfig.url}/blog/${post.slug}`, lastModified: new Date(post.date), changeFrequency: "monthly" as const, priority: 0.6 }))
  ];
}
