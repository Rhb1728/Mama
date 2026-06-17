import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Gallery", description: "Factory, product, packing and logistics gallery for Hassan Global Exports." };

const images = [
  "https://images.unsplash.com/photo-1581093458791-9d09fdf964d0?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&w=1000&q=85"
];

export default function GalleryPage() {
  return (
    <main>
      <PageHero title="Factory, product and logistics gallery" eyebrow="Gallery" text="High-quality dummy imagery creates a credible visual foundation until real factory assets are added." image={images[0]} crumbs={[{ label: "Gallery" }]} />
      <section className="container-x grid gap-5 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-md bg-slate-200 card-shadow">
            <Image src={image} alt={`Export gallery image ${index + 1}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 hover:scale-105" />
          </div>
        ))}
      </section>
    </main>
  );
}
