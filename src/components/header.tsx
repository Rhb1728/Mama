"use client";

import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { navItems, siteConfig } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#fbfaf7]/88 backdrop-blur-xl">
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-md">
          <span className="grid size-11 place-items-center rounded-md bg-[var(--ink)] text-sm font-bold text-white">HG</span>
          <span>
            <span className="block text-base font-bold tracking-[0.08em] text-[var(--ink)] uppercase">{siteConfig.name}</span>
            <span className="text-xs font-medium text-[var(--muted)]">Global Manufacturing & Trading</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="focus-ring rounded-md px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-black/5 hover:text-black">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button className="focus-ring grid size-11 place-items-center rounded-md border border-black/10 bg-white text-slate-700 transition hover:bg-slate-100" aria-label="Search">
            <Search size={18} />
          </button>
          <Link href="/rfq" className="focus-ring rounded-md bg-[var(--sea)] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#095d58]">
            Request Quotation
          </Link>
        </div>

        <button className="focus-ring grid size-11 place-items-center rounded-md border border-black/10 bg-white lg:hidden" aria-label="Open menu" onClick={() => setOpen(true)}>
          <Menu size={21} />
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 bg-black/40 lg:hidden" onClick={() => setOpen(false)}>
          <div className="ml-auto h-dvh w-[min(88vw,390px)] bg-[#fbfaf7] p-5 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between">
              <span className="font-bold">{siteConfig.name}</span>
              <button className="focus-ring grid size-10 place-items-center rounded-md border border-black/10" aria-label="Close menu" onClick={() => setOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <nav className="mt-8 grid gap-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-base font-semibold hover:bg-black/5">
                  {item.label}
                </Link>
              ))}
              <Link href="/rfq" onClick={() => setOpen(false)} className="mt-4 rounded-md bg-[var(--ink)] px-4 py-3 text-center font-bold text-white">
                Request Quotation
              </Link>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
