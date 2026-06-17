"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Product, products } from "@/lib/data";
import { ProductCard } from "@/components/product-card";

const categories = ["All", ...Array.from(new Set(products.map((product) => product.category)))];

export function ProductFilter({ initialProducts = products }: { initialProducts?: Product[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return initialProducts.filter((product) => {
      const matchesCategory = category === "All" || product.category === category;
      const matchesQuery = `${product.name} ${product.summary} ${product.category}`.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, initialProducts, query]);

  return (
    <div>
      <div className="mb-8 grid gap-4 rounded-md border border-black/10 bg-white p-4 card-shadow lg:grid-cols-[1fr_auto]">
        <label className="relative block">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={19} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search product, category or specification"
            className="focus-ring h-12 w-full rounded-md border border-black/10 bg-[#fbfaf7] pl-12 pr-4 text-sm font-medium outline-none"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`focus-ring rounded-md px-4 py-3 text-sm font-bold transition ${category === item ? "bg-[var(--ink)] text-white" : "bg-[#f3f0e9] text-slate-700 hover:bg-white"}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      {filtered.length ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
      ) : (
        <div className="rounded-md border border-black/10 bg-white p-10 text-center">
          <p className="text-lg font-bold">No products match the current filters.</p>
          <p className="mt-2 text-[var(--muted)]">Try another keyword or category.</p>
        </div>
      )}
    </div>
  );
}
