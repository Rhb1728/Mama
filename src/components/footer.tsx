import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { footerGroups, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[#101418] text-white">
      <div className="container-x grid gap-10 py-14 lg:grid-cols-[1.3fr_2fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-12 place-items-center rounded-md bg-white text-sm font-black text-[#101418]">HG</span>
            <div>
              <p className="font-bold tracking-[0.08em] uppercase">{siteConfig.name}</p>
              <p className="text-sm text-white/62">Export-focused manufacturing and trading partner.</p>
            </div>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-white/74">
            <p className="flex gap-3"><MapPin size={18} /> {siteConfig.address}</p>
            <p className="flex gap-3"><Phone size={18} /> {siteConfig.phone}</p>
            <p className="flex gap-3"><Mail size={18} /> {siteConfig.email}</p>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-white/52">{group.title}</h2>
              <ul className="mt-4 grid gap-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link className="text-sm text-white/76 transition hover:text-white" href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-5 text-sm text-white/58 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
          <p>Languages ready: EN / AR / FR / ES · Currency ready: USD / EUR / GBP / AED</p>
        </div>
      </div>
    </footer>
  );
}
