# Architectural Decisions Log

## Decision 1: Next.js App Router with Static Generation over Vite SPA
- Date: 2026-09-24
- Context: Need maximum SEO performance for local search terms ("Packers and Movers in Vizianagaram") and dedicated URLs for each service.
- Decision: Use Next.js App Router with `generateStaticParams()` to render HTML files for all service routes at build time.
- Impact: Zero backend cost, instant edge delivery on Vercel, perfect SEO indexing.

## Decision 2: Zero Backend / Structured WhatsApp Enquiry Flow
- Date: 2026-09-24
- Context: Client requested no backend or database maintenance.
- Decision: Use a client-side form compiler that generates verified pre-filled WhatsApp queries (wa.me/918500144488).
- Impact: 100% reliable lead capture directly to the owner's WhatsApp, zero spam database vulnerabilities, zero hosting costs.

## Decision 3: Image Placeholders & Graceful SVGFallbacks
- Date: 2026-09-24
- Context: User requested not to generate Images as they will provide real background and service photos shortly.
- Decision: Implement styled SVGs and CSS gradients with semantic image slots so that real photos slot in immediately when placed into `public/images/`.
