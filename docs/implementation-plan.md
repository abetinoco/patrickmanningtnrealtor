# Implementation Plan

## Objectives
- Rebrand patrickmanningrealtor.com with a luxury-focused React experience
- Establish modular component architecture for future content expansion
- Integrate data-driven sections for listings, testimonials, and blog resources using headless-friendly JSON
- Deliver performance, accessibility, and SEO enhancements including schema markup and lazy-loading

## Architecture Overview
- **Framework**: React 19 with Vite (TypeScript)
- **Routing**: `react-router-dom` with code-split route bundles (`React.lazy` + `Suspense`)
- **State/Data**: Static JSON/TS data modules (`src/data`) with easy swap for CMS
- **Styling**: CSS custom properties defined in `src/styles/tokens.css`, component-level styles in CSS Modules for scoping, global base styles in `src/styles/global.css`
- **Theme**: Dark charcoal primary background (#111111), platinum accents (#d9d9d6) with serif/sans font pairing (Playfair Display + Inter)
- **Components** (`src/components`):
  - `NavigationBar` with desktop + mobile menu
  - `HeroBanner` supporting video/image backgrounds, CTA, lead form trigger
  - `QuickLinksCard` grid
  - `ServiceTierSection`
  - `StatsShowcase` for credibility metrics
  - `ListingGrid` + `ListingCard` with state filter
  - `TestimonialCarousel` using CSS snap scroll
  - `LeadCaptureForm` (modal + inline)
  - `BlogPostPreview`, `ResourceGrid`
  - `MarketSnapshotCTA`
  - `FooterSocialDisclosure`
- **Utilities**: `src/utils/accessibility.ts`, `src/utils/analytics.ts`, `src/utils/seo.ts` (schema builders)
- **Data Contracts**: `src/data/agent.ts`, `src/data/listings.ts`, `src/data/testimonials.ts`, `src/data/blog.ts`, `src/data/navigation.ts`
- **Instruction JSON**: `config/project-spec.json` capturing metadata, routes, performance targets, CRM integration details

## Page Templates
- **Home**: Hero (video or image), credibility stats, featured listings, concierge services, testimonials, market insights, lead capture, blog highlights
- **Buy**: All Listings (filterable), Featured, Sold (tabs)
- **Sell**: Value proposition, concierge process, lead capture, valuation CTA
- **About**: Agent story, team philosophy, credentials, press badges
- **Contact**: Lead form, map, office info, FAQs
- **Reviews**: Aggregated testimonials + ratings
- **Blog/Resources**: Article grid + filter by topic
- **Blog Detail**: SEO-focused article template with share meta
- **Market Snapshot**: Interactive stats cards, downloadable market guide CTA

## Performance & Accessibility
- Code splitting per route
- Lazy load heavy imagery via `loading="lazy"`
- Preload hero asset and fonts via `<link rel="preload">`
- Ensure 4.5:1 contrast, keyboard focus styles, skip links

## Lead Capture & CRM
- `LeadCaptureForm` posts JSON payload to `import.meta.env.VITE_CRM_ENDPOINT`
- Fallback to console log in dev when endpoint missing, with user-facing alert
- Field validation: required fields, phone masking, state dropdown (50 states + DC)

## SEO Enhancements
- Document head manager using `react-helmet-async`
- Schema data injection for `RealEstateAgent`, `LocalBusiness`, `FAQ`
- Meta tags & OpenGraph/Twitter card defaults in `src/seo/metaDefaults.ts`

## Deliverables Checklist
1. Implement theming + typography setup
2. Build core layout and navigation
3. Implement each component with sample data
4. Configure routing and page templates
5. Hook lead capture and state filter functionality
6. Add SEO + schema utilities
7. Prepare `config/project-spec.json`
8. Update `README.md` with build/run instructions, architecture summary
9. Validate build (`npm run build`) and lint (`npm run lint`)
