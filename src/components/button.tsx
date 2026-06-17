import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "darkGhost";
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonProps) {
  const styles = {
    primary: "bg-[var(--ink)] text-white hover:bg-[var(--steel)]",
    secondary: "bg-white text-slate-950 ring-1 ring-black/10 hover:bg-[#f4f0e8]",
    ghost: "bg-transparent text-slate-950 ring-1 ring-black/15 hover:bg-white/70",
    darkGhost: "bg-transparent text-white ring-1 ring-white/25 hover:bg-white/10"
  };

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition ${styles[variant]}`}
    >
      {children}
      <ArrowRight size={16} aria-hidden="true" />
    </Link>
  );
}
