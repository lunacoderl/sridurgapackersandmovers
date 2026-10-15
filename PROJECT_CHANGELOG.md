# Project Changelog - Sridurga Packers & Movers

## [2026-10-15] - Technical SEO & Google Search Console Certification Rollout

### Summary of Changes
- Aligned primary domain across Next.js metadata and SEO routing from development/unregistered domain (`sridurgapackers.com`) to approved live production domain: `https://www.sridurgapackersmovers.com`.
- Updated `src/app/robots.ts`: pointed dynamic sitemap route to `${siteSeo.baseUrl}/sitemap.xml`.
- Updated `src/app/sitemap.ts`: bound all static routes and dynamic service routes to `siteSeo.baseUrl`.
- Updated `src/app/layout.tsx`: updated `metadataBase` to `new URL('https://www.sridurgapackersmovers.com')` and OpenGraph URL.
- Updated `src/lib/schema.ts`: updated MovingCompany schema image and official URL to `www.sridurgapackersmovers.com`.
- Updated `src/app/services/[slug]/page.tsx`: updated OpenGraph and BreadcrumbList URLs to use `siteSeo.baseUrl`.
- Updated `src/app/not-found.tsx`: added explicit `robots: { index: false, follow: false }` metadata.
- Created `src/siteSeo.ts`: centralized site metadata manifest.
- Updated `.gitignore` to prevent tracking of large media files (`*.mp4`, `*.mov`).

### Files Created / Modified
- `src/siteSeo.ts` (created - centralized metadata manifest)
- `src/app/robots.ts` (modified - bound sitemap to siteSeo.baseUrl)
- `src/app/sitemap.ts` (modified - bound all sitemap URLs to siteSeo.baseUrl)
- `src/app/layout.tsx` (modified - updated metadataBase and openGraph URL)
- `src/lib/schema.ts` (modified - updated schema image and URL)
- `src/app/services/[slug]/page.tsx` (modified - updated openGraph and breadcrumb URLs)
- `src/app/not-found.tsx` (modified - added noindex robots metadata)
- `.gitignore` (modified - added video exclusions)
- `PROJECT_CHANGELOG.md` (created - persistent changelog)
