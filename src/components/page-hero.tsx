import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";

export function PageHero({ title, eyebrow, text, image, crumbs }: { title: string; eyebrow: string; text: string; image: string; crumbs: { label: string; href?: string }[] }) {
  return (
    <section className="relative overflow-hidden bg-[#101418] py-20 text-white">
      <Image src={image} alt={title} fill sizes="100vw" className="object-cover opacity-36" priority />
      <div className="absolute inset-0 bg-gradient-to-r from-[#101418] via-[#101418]/82 to-transparent" />
      <div className="container-x relative">
        <Breadcrumbs items={crumbs} />
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--gold)]">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">{text}</p>
      </div>
    </section>
  );
}
