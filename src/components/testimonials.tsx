"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  return (
    <div className="rounded-md bg-[#101418] p-6 text-white md:p-10">
      <Quote className="text-[var(--gold)]" size={34} />
      <p className="mt-8 text-2xl font-semibold leading-10 md:text-3xl">“{item.quote}”</p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-bold">{item.name}</p>
          <p className="text-sm text-white/60">{item.company}</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)} aria-label="Previous testimonial" className="grid size-11 place-items-center rounded-md border border-white/15 transition hover:bg-white/10">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => setIndex((index + 1) % testimonials.length)} aria-label="Next testimonial" className="grid size-11 place-items-center rounded-md border border-white/15 transition hover:bg-white/10">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
