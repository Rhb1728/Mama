import Image from "next/image";
import Link from "next/link";
import { Download, Send } from "lucide-react";
import { Product } from "@/lib/data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-md border border-black/10 bg-white card-shadow">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-md bg-white/92 px-3 py-1 text-xs font-bold text-[var(--ink)]">{product.category}</span>
        </div>
      </Link>
      <div className="p-5">
        <h3 className="text-xl font-black text-[var(--ink)]">{product.name}</h3>
        <p className="mt-3 min-h-20 text-sm leading-6 text-[var(--muted)]">{product.summary}</p>
        <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-black/10 pt-5 text-xs">
          {Object.entries(product.specs).slice(0, 4).map(([key, value]) => (
            <div key={key}>
              <dt className="font-bold uppercase tracking-[0.12em] text-slate-400">{key}</dt>
              <dd className="mt-1 font-semibold text-slate-800">{value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <a href="/catalog/hassan-global-exports-catalog.pdf" className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-black/10 px-3 py-3 text-sm font-bold transition hover:bg-slate-100">
            <Download size={16} /> Brochure
          </a>
          <Link href={`/rfq?product=${product.slug}`} className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-[var(--ink)] px-3 py-3 text-sm font-bold text-white transition hover:bg-[var(--steel)]">
            <Send size={16} /> Inquiry
          </Link>
        </div>
      </div>
    </article>
  );
}
