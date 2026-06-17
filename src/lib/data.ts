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
    slug: "hdpe-fishing-nets",
    name: "HDPE Fishing Nets",
    category: "Fishing Nets",
    summary: "UV-stabilized knotless and knotted nets engineered for commercial fisheries and aquaculture buyers.",
    image: "https://images.unsplash.com/photo-1742728572985-295db745a9d1?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1742728572985-295db745a9d1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1770767696821-0e485dbde5b8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1748946469857-60142faa03b4?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: { Material: "HDPE monofilament / multifilament", "Mesh Size": "10 mm - 300 mm", Denier: "210D - 9000D", Color: "Green, blue, white, custom", Treatment: "UV stabilized" },
    applications: ["Marine fishing", "Aquaculture cages", "Pond harvesting", "Safety and barrier netting"],
    certifications: ["ISO 9001", "Export inspection", "Material test report"],
    packaging: "Pressed bales, woven sacks, buyer label and palletization on request.",
    loading: "Approx. 8-12 MT per 20 ft container depending on denier and bale density."
  },
  {
    slug: "ppgi-coils",
    name: "PPGI Coils",
    category: "PPGI Coils",
    summary: "Pre-painted galvanized steel coils for roofing, appliance, cladding and building material importers.",
    image: "https://plus.unsplash.com/premium_photo-1682144870559-703a20a23bd4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://plus.unsplash.com/premium_photo-1682144870559-703a20a23bd4?auto=format&fit=crop&w=1200&q=80",
      "https://plus.unsplash.com/premium_photo-1682144867572-3537cc9974e1?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: { Thickness: "0.12 mm - 1.20 mm", Width: "600 mm - 1250 mm", Coating: "Z40 - Z275", Paint: "PE, SMP, HDP, PVDF", "Coil ID": "508 mm / 610 mm" },
    applications: ["Roofing sheets", "Sandwich panels", "Home appliances", "Industrial cladding"],
    certifications: ["ISO 9001", "SGS optional", "Mill test certificate"],
    packaging: "Sea-worthy metal packaging with edge protection, moisture barrier and eye-to-sky loading.",
    loading: "20-25 MT per 20 ft container based on destination regulation."
  },
  {
    slug: "galvanized-steel-products",
    name: "Galvanized Steel Products",
    category: "Steel Products",
    summary: "Flat and long steel products sourced through audited mills with reliable export documentation.",
    image: "https://images.unsplash.com/photo-1748946469857-60142faa03b4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1748946469857-60142faa03b4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: { Grade: "Commercial / structural grades", Finish: "Galvanized, black, pickled", Standard: "ASTM, JIS, EN", MOQ: "1 x 20 ft container" },
    applications: ["Construction", "Fabrication", "Infrastructure", "Light engineering"],
    certifications: ["Mill certificate", "Third-party inspection", "ISO supplier audit"],
    packaging: "Bundled, strapped and protected for ocean freight.",
    loading: "Container loading plan prepared per product dimension and port rules."
  },
  {
    slug: "welded-wire-mesh",
    name: "Welded Wire Mesh",
    category: "Wire Mesh",
    summary: "Precision welded mesh panels and rolls for construction, fencing, agriculture and industrial users.",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: { Wire: "1.2 mm - 8.0 mm", Aperture: "25 mm - 200 mm", Finish: "Galvanized / PVC coated", Format: "Rolls or panels" },
    applications: ["Fencing", "Concrete reinforcement", "Machine guards", "Agricultural enclosures"],
    certifications: ["Dimension inspection", "Coating test", "ISO 9001"],
    packaging: "Rolls wrapped with waterproof paper or panels on steel pallets.",
    loading: "Mixed SKU loading supported with itemized packing lists."
  },
  {
    slug: "industrial-raw-materials",
    name: "Industrial Raw Materials",
    category: "Industrial Materials",
    summary: "Consolidated sourcing for industrial buyers requiring repeatable supply, inspection and documentation.",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581093458791-9d09fdf964d0?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: { Scope: "Metals, polymers, consumables", Sourcing: "Factory-audited supply", Documents: "CO, CI, PL, BL, inspection", Terms: "FOB, CFR, CIF" },
    applications: ["Manufacturing", "Repair operations", "Distribution", "Project procurement"],
    certifications: ["Supplier audit", "Inspection report", "Traceability docs"],
    packaging: "Product-specific export packaging and consolidated shipment planning.",
    loading: "Optimized mixed-container plans for distributor orders."
  },
  {
    slug: "export-packaging-materials",
    name: "Export Packaging Materials",
    category: "Packaging Materials",
    summary: "B2B packaging materials for exporters, distributors and industrial goods manufacturers.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
    ],
    specs: { Products: "Woven sacks, cartons, stretch film", Printing: "Private label available", Use: "Sea freight and warehouse", MOQ: "Negotiable by item" },
    applications: ["Export packing", "Warehouse handling", "Retail distribution", "Industrial storage"],
    certifications: ["Material declaration", "Factory QC", "Load testing optional"],
    packaging: "Bulk cartons, bales or pallets with buyer marks.",
    loading: "Lightweight goods can be consolidated with main export shipments."
  }
];

export const stats = [
  { label: "Export markets served", value: 42, suffix: "+" },
  { label: "Annual supply capacity", value: 18000, suffix: " MT" },
  { label: "Buyer repeat rate", value: 91, suffix: "%" },
  { label: "Years export experience", value: 14, suffix: "+" }
];

export const strengths = [
  { title: "Factory-Vetted Supply", text: "Audited sourcing, documented specifications and production visibility from enquiry to shipment.", icon: Factory },
  { title: "Export Documentation", text: "Commercial invoice, packing list, certificate of origin and inspection documents prepared with care.", icon: PackageCheck },
  { title: "Quality Control", text: "Pre-shipment checks, material testing coordination and photo reports for buyer confidence.", icon: ShieldCheck },
  { title: "Global Logistics", text: "FOB, CFR and CIF shipment support through reliable freight and forwarding partners.", icon: Globe2 }
];

export const industries = [
  "Commercial fisheries",
  "Aquaculture",
  "Construction materials",
  "Industrial distribution",
  "Agriculture and fencing",
  "Packaging and logistics",
  "Infrastructure procurement",
  "Retail import channels"
];

export const markets = ["UAE", "Saudi Arabia", "Kenya", "Malaysia", "Indonesia", "Italy", "Spain", "United Kingdom", "United States", "South Africa", "Chile", "Australia"];

export const certifications = ["ISO 9001 Quality Management", "Third-party Pre-shipment Inspection", "Material Test Certificate", "Certificate of Origin", "Buyer-specific Compliance Files"];

export const testimonials = [
  { quote: "Their documentation accuracy and shipment communication made our first container feel routine.", name: "Procurement Director", company: "Gulf Industrial Supply" },
  { quote: "Consistent net quality, clear packing marks and reliable lead times across repeat orders.", name: "Category Manager", company: "Blue Harbor Imports" },
  { quote: "A strong sourcing partner for mixed industrial loads when specifications and timing matter.", name: "Managing Partner", company: "Atlas Trade Group" }
];

export const posts = [
  { slug: "how-global-buyers-evaluate-export-suppliers", title: "How Global Buyers Evaluate Export Suppliers", date: "2026-04-18", excerpt: "A practical checklist for importer confidence, documentation and repeatable product quality." },
  { slug: "fishing-net-specifications-for-importers", title: "Fishing Net Specifications Importers Should Confirm", date: "2026-03-29", excerpt: "Mesh size, denier, UV treatment, bale packing and inspection points for commercial net buyers." },
  { slug: "building-resilient-industrial-supply-chains", title: "Building Resilient Industrial Supply Chains", date: "2026-02-12", excerpt: "How diversified sourcing and container planning can reduce risk for industrial distributors." }
];

export const processSteps = [
  "Buyer enquiry and specification review",
  "Supplier matching and quotation",
  "Sample, inspection or document approval",
  "Production tracking and packing confirmation",
  "Container loading, export documentation and shipment follow-up"
];

export const iconMap = { Anchor, Boxes };
