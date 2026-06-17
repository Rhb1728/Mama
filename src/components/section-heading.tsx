import { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, text, align = "left" }: { eyebrow?: string; title: string; text?: ReactNode; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[var(--sea)]">{eyebrow}</p> : null}
      <h2 className="text-3xl font-black tracking-tight text-[var(--ink)] sm:text-4xl lg:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg">{text}</p> : null}
    </div>
  );
}
