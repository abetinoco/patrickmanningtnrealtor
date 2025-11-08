# Patrick Manning | Luxury Real Estate Website

Premium React + TypeScript experience for patrickmanningrealtor.com, crafted to deliver a high-end aesthetic, modular architecture, and concierge-level interactions for Middle Tennessee luxury real estate clients.

## Key Features

- Dark charcoal + platinum design system with Playfair Display and Inter typography
- Modular component library (hero, navigation, listings, testimonials, lead capture, market snapshot, blog highlights, footer disclosures)
- Dynamic listing showcase with featured/sold filters and 50-state service filter
- Lead capture form wired for CRM endpoint via `VITE_CRM_ENDPOINT`
- SEO utilities: head management, OpenGraph/Twitter meta, RealEstateAgent schema
- Accessibility-first markup, high-contrast palette, responsive layouts, lazy-loaded imagery
- JSON-friendly data layer for agent info, listings, testimonials, services, market metrics, blog posts

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` (use `npm run dev -- --host` to expose on your network).

### Production Build

```bash
npm run build
npm run preview
```

## Configuration

- Environment: create `.env` with `VITE_CRM_ENDPOINT=<https://your-crm-endpoint>` for live lead capture.
- Assets: replace placeholder imagery in `src/data/listings.ts` and supply video/hero asset under `public/media/`.
- Guides: update downloadable PDFs referenced in `src/data/market.ts`.

## Architecture Highlights

- `src/components` – reusable UI modules (navigation, hero, listings, testimonials, forms, market, blog, footer, shared layout)
- `src/data` – structured data objects for agent profile, navigation, listings, testimonials, services, market insights, quick links
- `src/pages` – route-driven page templates using composed components and page-level SEO metadata
- `src/seo` & `src/utils` – meta defaults, schema builders, formatting helpers
- `config/project-spec.json` – master spec outlining routes, components, tokens, and integration targets (see Deliverables section)

## Scripts

- `npm run dev` – start Vite dev server
- `npm run build` – type-check + build production bundle
- `npm run preview` – preview built assets
- `npm run lint` – run ESLint across the project

## Next Steps

1. Replace placeholder images/video with final brand assets.
2. Connect CMS or IDX data sources to replace static listing/testimonial JSON.
3. Integrate CRM endpoint and test form submissions end-to-end.
4. Expand blog detail routes with markdown/CMS-driven content.
5. Execute performance budget review (Core Web Vitals) prior to launch.
