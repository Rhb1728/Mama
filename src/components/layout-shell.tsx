import { ReactNode } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingActions } from "@/components/floating-actions";
import { PageTransition } from "@/components/motion";

export function LayoutShell({ children }: { children: ReactNode }) {
  return (
    <div id="top" className="premium-shell min-h-screen">
      <Header />
      <PageTransition>{children}</PageTransition>
      <Footer />
      <FloatingActions />
    </div>
  );
}
