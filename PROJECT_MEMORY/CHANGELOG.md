# Changelog: Sridurga Packers & Movers

## [1.0.0] - 2026-09-24
### Added
- **Core Datasets**:
  - `src/data/company.ts`: Official phone, WhatsApp, address, rating, established year.
  - `src/data/navigation.ts`: Desktop & mobile navigation links + rotating prompt bubbles.
  - `src/data/services.ts`: All 7 comprehensive services compiled with full descriptions, highlights, what-we-handle, care details, process, benefits, faqs, and SEO.
  - `src/data/testimonials.ts`: Real customer stories from Cantonment, Ring Road, Vizag, Hyderabad, and Odisha.
  - `src/data/reviews.ts`: Google Business Profile rating breakdown (4.9?, 292+ reviews).
  - `src/data/gallery.ts`: Categorized photo gallery entries with image paths and descriptive alt text.
  - `src/data/faq.ts`: 10 comprehensive categorized FAQs.
  - `src/data/serviceAreas.ts`: Vizianagaram hub, Vizag corridor, Srikakulam, and interstate domestic destinations.
- **Shell & Navigation Components**:
  - `src/components/navigation/Navbar.tsx`: Sticky glassmorphism header, 4.9? rating pill, phone button, quote button, mobile drawer toggle.
  - `src/components/footer/Footer.tsx`: Rich footer with 4 trust badges, services directory, quick links, active sectors, Google Maps link, legal links.
  - `src/components/cta/DesktopFloatingCTA.tsx`: Floating action cluster with rotating thought bubble prompt, instant phone call, WhatsApp chat, and move estimator modal button.
  - `src/components/cta/MobileBottomBar.tsx`: Sticky mobile action bar with Call, WhatsApp, and Get Quote buttons.
  - `src/components/cta/QuickBookingModal.tsx`: Interactive popup to calculate move estimates and output structured WhatsApp messages.
  - `src/components/common/ClientLayoutWrapper.tsx`: Client-side state manager for global booking modal events.
  - `src/components/common/SafeImage.tsx`: Robust image wrapper with graceful visual fallbacks.
  - `src/components/common/SectionHeader.tsx`, `TrustBadge.tsx`, `FaqAccordion.tsx`.
- **Page Implementations**:
  - `src/app/page.tsx`: 15 complete sections (Hero, Trust Ribbon, Editorial Story, Services Grid, Why Choose Us, Moving Process, Fleet, Stats Counter, Gallery, Testimonials, Google Reviews, Service Areas, Home FAQ, Final CTA).
  - `src/app/about/page.tsx`: 12 sections including 2014 origin story, core values, Sridurga vs unorganized movers comparison table, and trust statistics.
  - `src/app/services/page.tsx`: Services directory with cards for all 7 services, pricing transparency calculation guide, and WhatsApp quote actions.
  - `src/app/services/[slug]/page.tsx`: Dynamic template with `generateStaticParams` for all 7 slugs, dynamic `generateMetadata`, and full section breakdown.
  - `src/app/contact/page.tsx`: Full contact page with interactive WhatsApp Move Estimator Form, helpline details, and Vizianagaram office location.
  - `src/app/not-found.tsx`: Custom 404 page with moving truck theme.
  - `src/app/privacy-policy/page.tsx` & `src/app/terms-and-conditions/page.tsx`: Comprehensive legal pages.
  - `src/app/sitemap.ts` & `src/app/robots.ts`: Complete static search engine indexing.
- **Verification**:
  - `npm run build` executed and passed: 18 static routes generated with zero errors.

## [1.1.0] - 2026-09-24
### Changed & Enhanced
- **Navbar Responsive Breakpoint**:
  - Desktop & laptop screens (`lg:` breakpoint and above, 1024px+) now always display the full horizontal navigation menu.
  - Hamburger menu toggle is restricted strictly to mobile/small tablet screens (`lg:hidden`).
- **Floating CTA Vertical Alignment**:
  - Refactored `DesktopFloatingCTA.tsx` so all action buttons (Estimate Cost, WhatsApp Chat, Helpline Phone) are stacked vertically (`flex-col`) instead of horizontally.
- **Pure Fixed Backgrounds (Zero Color Overlays)**:
  - Removed heavy gradient color washes and dark tint overlays across all hero banners.
  - Enabled `bg-fixed bg-cover bg-center` on:
    - Home: `hero-bg.png`
    - About: `about-bg.png`
    - Services & Services [slug]: `services/service-bg.png`
    - Contact: `contact-bg.png`
  - Created true parallax "scrolling on top of images" effect while ensuring text readability with frosted glass card styling.
- **Added 8th Service**:
  - Integrated `service-08: warehousing-storage` with `service-08.webp`.
- **Integrated All 18 Real Gallery Images**:
  - Populated `gallery.ts` with all 18 authentic customer field photos from `public/images/gallery/`.
