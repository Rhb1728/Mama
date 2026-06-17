import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";

export function SplitContent({ eyebrow, title, text, image, points }: { eyebrow: string; title: string; text: string; image: string; points: string[] }) {
  return (
    <section className="container-x grid gap-10 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-slate-200 card-shadow">
        <Image src={image} alt={title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
      </div>
      <div>
        <SectionHeading eyebrow={eyebrow} title={title} text={text} />
        <div className="mt-8 grid gap-3">
          {points.map((point) => (
            <div key={point} className="rounded-md border border-black/10 bg-white p-4 text-sm font-bold text-slate-700">
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SimpleGrid({ items }: { items: { title: string; text: string }[] }) {
  return (
    <section className="container-x grid gap-5 py-16 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="rounded-md border border-black/10 bg-white p-6 card-shadow">
          <h2 className="text-xl font-black">{item.title}</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.text}</p>
        </article>
      ))}
    </section>
  );
}
