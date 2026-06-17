"use client";

import Link from "next/link";
import { ArrowUp, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        aria-label="Contact on WhatsApp"
        className="focus-ring grid size-12 place-items-center rounded-md bg-[#25d366] text-white shadow-xl transition hover:-translate-y-1"
      >
        <MessageCircle size={22} />
      </a>
      <Link href="#top" aria-label="Back to top" className="focus-ring grid size-12 place-items-center rounded-md bg-white text-[var(--ink)] shadow-xl ring-1 ring-black/10 transition hover:-translate-y-1">
        <ArrowUp size={21} />
      </Link>
    </div>
  );
}
