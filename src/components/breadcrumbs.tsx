import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
      <Link href="/" className="font-semibold text-slate-700 hover:text-black">Home</Link>
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-2">
          <ChevronRight size={14} />
          {item.href ? <Link href={item.href} className="font-semibold text-slate-700 hover:text-black">{item.label}</Link> : <span>{item.label}</span>}
        </span>
      ))}
    </nav>
  );
}
