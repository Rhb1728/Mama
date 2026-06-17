# Hassan Global Exports Website Technical Specification

## 1. Project Overview

This project is a premium, export-focused B2B corporate website for **Hassan Global Exports**, a manufacturing and trading company serving global buyers and importers. The frontend is built as a production-ready, static-first Next.js application with scalable product data, SEO routes, reusable UI components, animated sections, and buyer-trust conversion flows.

Primary goals:

- Present the company as a credible international exporter.
- Support industrial and consumer product categories.
- Make future product/category expansion straightforward.
- Provide strong buyer conversion paths through RFQ, inquiry, contact, and catalog download CTAs.
- Keep architecture CMS-ready and multilingual/currency-ready.

## 2. Technology Stack

- Framework: Next.js 16 App Router
- Language: TypeScript
- Styling: Tailwind CSS 4 via `@tailwindcss/postcss`
- Animation: Framer Motion
- Icons: Lucide React
- Images: Next.js `Image` component with remote Unsplash hosts
- Linting: ESLint 9 with Next.js flat config
- Package manager: npm

## 3. Runtime Commands

```bash
npm install
npm run dev
npm run lint
npm run build
npm run start
```

Local development URL:

```bash
http://127.0.0.1:3000
```

Recommended Node version:

```bash
Node.js 20.19+
```

The app was verified successfully with:

```bash
npm run lint
npm run build
```

## 4. Folder Structure

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    loading.tsx
    robots.ts
    sitemap.ts
    about/page.tsx
    blog/page.tsx
    blog/[slug]/page.tsx
    careers/page.tsx
    certifications-quality/page.tsx
    contact/page.tsx
    faq/page.tsx
    gallery/page.tsx
    global-markets/page.tsx
    industries/page.tsx
    privacy-policy/page.tsx
    products/page.tsx
    products/[slug]/page.tsx
    rfq/page.tsx
    sustainability/page.tsx
    terms-conditions/page.tsx
  components/
    breadcrumbs.tsx
    button.tsx
    content-blocks.tsx
    floating-actions.tsx
    footer.tsx
    header.tsx
    layout-shell.tsx
    motion.tsx
    page-hero.tsx
    product-card.tsx
    product-filter.tsx
    rfq-form.tsx
    section-heading.tsx
    testimonials.tsx
  lib/
    data.ts
    site.ts
```

Root configuration:

```text
.gitignore
eslint.config.mjs
next-env.d.ts
next.config.ts
package.json
package-lock.json
postcss.config.mjs
spec.md
tsconfig.json
```

## 5. Routing Specification

The website uses Next.js App Router. All pages are rendered through the shared root layout and shell.

Static pages:

- `/`
- `/about`
- `/products`
- `/industries`
- `/global-markets`
- `/certifications-quality`
- `/gallery`
- `/blog`
- `/contact`
- `/rfq`
- `/sustainability`
- `/faq`
- `/careers`
- `/privacy-policy`
- `/terms-conditions`
- `/robots.txt`
- `/sitemap.xml`

Dynamic static-generated pages:

- `/products/[slug]`
- `/blog/[slug]`

Dynamic routes use `generateStaticParams()` from local data arrays.

## 6. Data Model

Primary editable content is centralized in:

```text
src/lib/data.ts
src/lib/site.ts
```

### Product Type

```ts
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
```

To add a product:

1. Add a new object to `products` in `src/lib/data.ts`.
2. Ensure `slug` is unique.
3. Add category, image, gallery, specs, applications, certifications, packaging, and loading data.
4. The product automatically appears on `/products`.
5. A detail page is automatically generated at `/products/{slug}`.

### Site Config

Company-wide editable values live in `src/lib/site.ts`:

- Company name
- Tagline
- Website URL
- Email
- Phone
- WhatsApp number
- Address
- Catalog URL
- Locale list
- Currency list
- Navigation links
- Footer link groups

## 7. Core Components

### Layout

`src/components/layout-shell.tsx`

Wraps the full website with:

- Sticky header
- Page transition wrapper
- Footer
- Floating WhatsApp button
- Back-to-top button

### Header

`src/components/header.tsx`

Features:

- Sticky navigation
- Desktop nav links
- Mobile slide-out menu
- Search icon placeholder
- RFQ CTA

### Footer

`src/components/footer.tsx`

Features:

- Company identity
- Dummy contact details
- Footer navigation groups
- Multilingual/currency-ready text

### Motion Utilities

`src/components/motion.tsx`

Contains:

- `Reveal`
- `PageTransition`
- `Counter`
- `MotionDiv`

These use Framer Motion for scroll reveal, page fade transitions, and animated counters.

### Product UI

`src/components/product-card.tsx`

Displays:

- Optimized image
- Category badge
- Product summary
- Specification preview
- Brochure CTA
- Inquiry CTA

`src/components/product-filter.tsx`

Client component supporting:

- Search by product/category/specification text
- Category filtering
- Responsive grid rendering
- Empty state

### RFQ Form

`src/components/rfq-form.tsx`

Client component supporting:

- Product selection
- Quantity
- Country
- Company name
- Buyer requirements
- File upload field
- Contact information
- Client-side validation
- Success confirmation state

This is frontend-only and should be connected to a backend, CRM, email API, or form service before production use.

## 8. Page Specifications

### Home

File:

```text
src/app/page.tsx
```

Sections:

- Full hero with industrial image, tagline, CTA buttons
- Trust statistics with animated counters
- Why Choose Us
- Featured products
- Global markets and logistics map-style section
- Certifications and testimonials carousel
- Industries served
- Latest blog/news
- Catalog download CTA
- RFQ CTA band

### Products

File:

```text
src/app/products/page.tsx
```

Features:

- SEO page hero
- Product search
- Category filters
- Product cards

### Product Details

File:

```text
src/app/products/[slug]/page.tsx
```

Features:

- Static generation from product data
- Dynamic metadata per product
- Product image gallery
- Specification table
- Export packaging
- Container loading info
- Applications
- Certifications
- Inquiry panel
- Related products
- PDF/catalog download CTA

### RFQ

File:

```text
src/app/rfq/page.tsx
```

Features:

- RFQ checklist
- Professional quotation form
- Validation
- File upload UI

### Blog

Files:

```text
src/app/blog/page.tsx
src/app/blog/[slug]/page.tsx
```

Features:

- SEO-ready article listing
- Static generated blog posts
- Dynamic metadata per post

## 9. SEO Specification

Global metadata is configured in:

```text
src/app/layout.tsx
```

Includes:

- Default title
- Title template
- Meta description
- Keywords
- OpenGraph tags
- Twitter card tags
- Canonical URL
- Robots indexing config
- Organization JSON-LD schema

Dynamic metadata exists in:

```text
src/app/products/[slug]/page.tsx
src/app/blog/[slug]/page.tsx
```

SEO routes:

```text
src/app/sitemap.ts
src/app/robots.ts
```

Generated routes:

- `/sitemap.xml`
- `/robots.txt`

Before production deployment, replace:

```ts
siteConfig.url
```

with the real domain.

## 10. Image Optimization

All main images use Next.js `Image` where appropriate.

Remote image hosts are configured in:

```text
next.config.ts
```

Allowed hosts:

- `images.unsplash.com`
- `plus.unsplash.com`

To add another CDN or CMS image domain, update `remotePatterns`.

## 11. Styling System

Global styles:

```text
src/app/globals.css
```

Design tokens:

- `--background`
- `--foreground`
- `--ink`
- `--muted`
- `--line`
- `--gold`
- `--steel`
- `--sea`

Utility classes:

- `.premium-shell`
- `.dark-band`
- `.container-x`
- `.focus-ring`
- `.card-shadow`
- `.skeleton`

The UI uses a premium corporate palette with restrained contrast, deep ink tones, muted teal, gold accents, and warm off-white surfaces.

## 12. Accessibility Notes

Implemented:

- Semantic headings and page sections
- ARIA labels for icon-only controls
- Focus-visible ring helper
- Real form labels
- Responsive mobile navigation
- High-contrast CTA corrections

Recommended future improvements:

- Add active navigation state
- Add keyboard focus trapping for mobile menu
- Add server-side form error summaries after backend integration

## 13. CMS-Ready Architecture

Current content is static TypeScript data, but the structure is ready to migrate to a CMS.

Recommended CMS mappings:

- `products` -> Product collection
- `posts` -> Blog/news collection
- `markets` -> Market collection
- `industries` -> Industry collection
- `certifications` -> Certification collection
- `siteConfig` -> Global settings singleton

Good CMS candidates:

- Sanity
- Payload CMS
- Strapi
- Contentful
- Directus

## 14. Multilingual and Currency-Ready Notes

Prepared fields:

```ts
siteConfig.locales
siteConfig.currencies
```

Recommended future implementation:

- Add Next.js internationalized route groups or middleware.
- Store translated content in CMS.
- Add locale switcher in header.
- Add currency selector for buyer-facing quotation context.

## 15. Form Integration Requirements

The current RFQ and contact forms are frontend-only.

For production, connect forms to one of:

- Next.js Route Handler
- Server Action
- CRM API
- Email provider API
- Form backend service

Required backend validation:

- Product is required
- Quantity is required
- Destination country is required
- Company name is required
- Contact person is required
- Email is required and valid
- Requirements are required
- File upload type and size validation
- Spam protection such as Turnstile, reCAPTCHA, or honeypot

Recommended notification flow:

1. Buyer submits RFQ.
2. Backend validates payload.
3. File uploads are stored securely.
4. Sales team receives email/CRM lead.
5. Buyer receives confirmation email.
6. Lead is tagged by product, country, and estimated order size.

## 16. Deployment Notes

Recommended platforms:

- Vercel
- Netlify
- Cloudflare Pages
- AWS Amplify

Build command:

```bash
npm run build
```

Output:

Next.js managed build output in `.next`.

Important production edits:

- Replace dummy contact information in `src/lib/site.ts`.
- Replace placeholder domain in `siteConfig.url`.
- Replace dummy product images with real factory/product images.
- Replace catalog placeholder URL with a real PDF asset.
- Connect forms to backend.
- Add real privacy policy and terms.
- Review all product specifications before publishing.

## 17. GitHub Upload Instructions

Commit these files:

```text
.gitignore
eslint.config.mjs
next-env.d.ts
next.config.ts
package-lock.json
package.json
postcss.config.mjs
spec.md
tsconfig.json
src/**
```

Do not commit:

```text
node_modules/
.next/
out/
build/
dist/
.env*
```

These are already covered in `.gitignore`.

Fresh clone setup:

```bash
git clone <repo-url>
cd <repo-folder>
npm install
npm run dev
```

## 18. Known Notes

- `npm install` may show dependency audit warnings from transitive packages. Review with `npm audit` before production.
- A Node engine warning may appear on Node versions below `20.19`. Use Node `20.19+` for best compatibility with the latest ecosystem packages.
- Unsplash images are placeholders. Replace with owned or properly licensed final assets before commercial launch.
