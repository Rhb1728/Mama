import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LayoutShell } from "@/components/layout-shell";
import { siteConfig } from "@/lib/site";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Premium Filter Net Manufacturer`,
    template: `%s | ${siteConfig.name}`
  },
  description: "A & M Industries manufactures export-ready filter nets for global B2B buyers, distributors and industrial users.",
  keywords: ["filter net manufacturer", "filter net exporter", "industrial filter mesh supplier", "industrial products exporter", "Bangladesh manufacturing company"],
  openGraph: {
    title: `${siteConfig.name} | Premium Filter Net Manufacturer`,
    description: "Focused filter net manufacturing partner for global importers and industrial distributors.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "https://images.unsplash.com/photo-1581093458791-9d09fdf964d0?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Industrial export production floor"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Premium Filter Net Manufacturer`,
    description: "Premium B2B filter net manufacturer for global importers and distributors."
  },
  alternates: {
    canonical: siteConfig.url
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: siteConfig.address,
    sameAs: ["https://www.linkedin.com/company/example"]
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <Script id="organization-schema" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(organizationSchema)}
        </Script>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
