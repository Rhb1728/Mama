import { Anchor, Boxes, Factory, Globe2, PackageCheck, ShieldCheck } from "lucide-react";

export type Product = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  image: string;
  gallery: string[];
  specs: Record<string, string>;
  applications: string[];
  certifications: string[];
  packaging: string;
  loading: string;
};

export const products: Product[] = [
  {
    slug: "industrial-filter-net",
    name: "Industrial Filter Net",
    category: "Filter Net",
    summary: "Precision-manufactured filter net for filtration, grading, separation and processing lines.",
    image: "https://images.unsplash.com/photo-1742728572985-295db745a9d1?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1742728572985-295db745a9d1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1770767696821-0e485dbde5b8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1748946469857-60142faa03b4?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: { Material: "HDPE / PP / nylon monofilament", "Mesh Opening": "Custom micron and mesh ranges", GSM: "Buyer-specific weight and density", "Roll Width": "Custom roll width and length", Treatment: "UV stabilized / buyer-specific finish" },
    applications: ["Industrial filtration", "Processing and separation lines", "Liquid and air filtration support", "General manufacturing use"],
    certifications: ["ISO 9001", "Export inspection", "Material test report"],
    packaging: "Rolls, bales or cartons with buyer labels, moisture protection and palletization on request.",
    loading: "Container loading optimized by roll width, GSM, mesh opening and packing format."
  },
  {
    slug: "agricultural-filter-net",
    name: "Agricultural Filter Net",
    category: "Filter Net",
    summary: "Durable filter net for agricultural grading, crop processing, washing lines and bulk handling operations.",
    image: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: { Material: "HDPE / PP", "Mesh Opening": "Fine to medium filtration ranges", Format: "Rolls / cut sheets", Color: "White, green, black, custom", Finish: "Food-processing compatible options on request" },
    applications: ["Seed and grain grading", "Crop washing lines", "Agricultural processing", "Sorting and drying support"],
    certifications: ["Material declaration", "Pre-shipment inspection", "Buyer-specific compliance files"],
    packaging: "Export rolls with protective wrapping, carton packing or palletized loads.",
    loading: "Mixed-width roll loading plans prepared against buyer order specifications."
  },
  {
    slug: "nylon-filter-mesh",
    name: "Nylon Filter Mesh",
    category: "Filter Net",
    summary: "Fine nylon filter mesh designed for consistent openings, smooth handling and repeat industrial use.",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: { Material: "Nylon monofilament", "Opening Control": "Fine filtration grades", Strength: "High tensile mesh options", Width: "Custom slit and roll widths", Use: "Reusable filtration and screening" },
    applications: ["Fine filtration", "Screen printing support", "Laboratory and processing filtration", "Custom filter components"],
    certifications: ["Dimensional inspection", "Material test report", "Export quality file"],
    packaging: "Core-wound rolls with sleeve protection, outer cartons and buyer marks.",
    loading: "Lightweight rolls can be consolidated efficiently for air or sea freight."
  },
  {
    slug: "custom-filter-net-rolls",
    name: "Custom Filter Net Rolls",
    category: "Filter Net",
    summary: "Made-to-order filter net rolls manufactured to buyer size, mesh, color, packing and labeling requirements.",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581093458791-9d09fdf964d0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: { Material: "HDPE / PP / nylon", Customization: "Mesh, GSM, color, roll size", Labeling: "Buyer label and shipping marks", MOQ: "Quotation-based", Terms: "FOB, CFR, CIF" },
    applications: ["Private-label import programs", "Distributor stock rolls", "OEM filtration products", "Project-specific filter media"],
    certifications: ["Pre-production sample approval", "Packing inspection", "Certificate of origin"],
    packaging: "Buyer-specific roll length, carton count, pallet pattern and shipping marks.",
    loading: "Container plan prepared after final roll dimensions and packing method are confirmed."
  }
];

export const stats = [
  { label: "Export markets served", value: 42, suffix: "+" },
  { label: "Annual filter net capacity", value: 18000, suffix: " MT" },
  { label: "Buyer repeat rate", value: 91, suffix: "%" },
  { label: "Years manufacturing experience", value: 14, suffix: "+" }
];

export const strengths = [
  { title: "Focused Net Manufacturing", text: "Filter net production is the core business, with buyer-specific mesh, roll and packing control.", icon: Factory },
  { title: "Export Documentation", text: "Commercial invoice, packing list, certificate of origin and inspection documents prepared with care.", icon: PackageCheck },
  { title: "Quality Control", text: "Mesh opening, GSM, roll width, color, packing and labeling checks before shipment.", icon: ShieldCheck },
  { title: "Global Logistics", text: "FOB, CFR and CIF shipment support through reliable freight and forwarding partners.", icon: Globe2 }
];

export const industries = [
  "Industrial filtration",
  "Food and agricultural processing",
  "Liquid filtration",
  "Air filtration support",
  "Sorting and grading lines",
  "Manufacturing supply chains",
  "Distributor stock programs",
  "OEM filter media"
];

export const markets = ["UAE", "Saudi Arabia", "Kenya", "Malaysia", "Indonesia", "Italy", "Spain", "United Kingdom", "United States", "South Africa", "Chile", "Australia"];

export const certifications = ["ISO 9001 Quality Management", "Third-party Pre-shipment Inspection", "Material Test Certificate", "Certificate of Origin", "Buyer-specific Compliance Files"];

export const testimonials = [
  { quote: "Their mesh consistency and shipment communication made repeat purchasing simple for our team.", name: "Procurement Director", company: "Gulf Filtration Supply" },
  { quote: "A & M Industries understands roll packing, labeling and documentation for import distribution.", name: "Category Manager", company: "Blue Harbor Imports" },
  { quote: "The sample approval process and pre-shipment photos gave us confidence before container loading.", name: "Managing Partner", company: "Atlas Filter Media" }
];

export const posts = [
  { slug: "how-global-buyers-evaluate-filter-net-suppliers", title: "How Global Buyers Evaluate Filter Net Suppliers", date: "2026-04-18", excerpt: "A practical checklist for mesh consistency, documentation, packing and repeatable filter net quality." },
  { slug: "filter-net-specifications-for-importers", title: "Filter Net Specifications Importers Should Confirm", date: "2026-03-29", excerpt: "Mesh opening, material, GSM, roll width, treatment and packing details for filter net buyers." },
  { slug: "building-reliable-filter-net-supply-chains", title: "Building Reliable Filter Net Supply Chains", date: "2026-02-12", excerpt: "How clear specifications, sampling and container planning reduce risk for filter net importers." }
];

export const processSteps = [
  "Buyer enquiry and filter net specification review",
  "Mesh, GSM, roll size and packing quotation",
  "Sample, inspection or document approval",
  "Production tracking and packing confirmation",
  "Container loading, export documentation and shipment follow-up"
];

export const iconMap = { Anchor, Boxes };