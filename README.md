# ?? Sridurga Packers & Movers ? Official Web Application

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![Rating](https://img.shields.io/badge/Google_Reviews-4.9%E2%98%85_(292+_Reviews)-amber)](https://maps.google.com/?q=Sridurga+Packers+and+Movers+Vizianagaram)
[![Prerender](https://img.shields.io/badge/Rendering-100%25_Static_(SSG)-emerald)]()

Production static web application for **Sridurga Packers & Movers** ? Vizianagaram?s leading household and corporate relocation service provider since 2014.

---

## ?? Key Highlights

- **100% Static Prerendered (SSG)**: 19 routes generated with `generateStaticParams`, lightning-fast edge performance, zero database requirements, and zero serverless costs.
- **Client-Side WhatsApp Engine**: Interactive move estimation forms output structured, itemized booking requests directly to WhatsApp (`wa.me/918500144488`).
- **Responsive Parallax Fixed Imagery**: Pure, crystal-clear background banners (`hero-bg.png`, `about-bg.png`, `service-bg.png`, `contact-bg.png`) with smooth content scroll-over and zero dark color tinting.
- **Laptop & Desktop Navigation**: Full horizontal menu on all screens `1024px` and above; hamburger drawer strictly reserved for mobile devices.
- **Vertical Floating CTA Stack**: Fixed bottom-right cluster featuring instant Estimate Calculator, WhatsApp chat, and direct helpline calling.
- **Local SEO & Schema.org**: Fully structured `LocalBusiness` (MovingCompany) and `BreadcrumbList` JSON-LD schemas.

---

## ??? Application Routing

| Route | Description |
| :--- | :--- |
| **`/`** | **Home Page** ? 15 sections including Hero, Trust Ribbon, 8-Service Grid, 5-Stage Process, 18-Photo Gallery, Google Reviews (4.9?), and FAQ |
| **`/about`** | **About Us** ? 12+ years Vizianagaram heritage story, core values, and Sridurga vs. unorganized movers comparison table |
| **`/services`** | **Services Hub** ? Complete directory of all 8 relocation services and transparent pricing calculation guide |
| **`/services/[slug]`** | **Dynamic Service Engine** ? 8 pre-rendered service pages with dynamic metadata, process steps, and FAQs: |
| | ? `/services/household-shifting` |
| | ? `/services/office-relocation` |
| | ? `/services/local-shifting` |
| | ? `/services/domestic-relocation` |
| | ? `/services/packing-unpacking` |
| | ? `/services/loading-unloading` |
| | ? `/services/vehicle-transportation` |
| | ? `/services/warehousing-storage` |
| **`/contact`** | **Contact & Move Estimator** ? Interactive WhatsApp calculator, phone, address, and Google Maps directions |
| **`/privacy-policy`** | Data protection and privacy commitment |
| **`/terms-and-conditions`** | Transparent relocation contracts and coverage terms |
| **`/_not-found`** | Custom 404 page with animated moving truck theme |
| **`/sitemap.xml`** | Automated dynamic XML sitemap |
| **`/robots.txt`** | Search crawler indexing rules |

---

## ??? Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + CSS Design Tokens (`src/styles/tokens.css`)
- **Typography**: `Outfit` (Headings) + `Inter` (Body) via `next/font/google`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Motion**: [GSAP](https://greensock.com/gsap/) + [Framer Motion](https://www.framer.com/motion/)

---

## ?? Project Directory Layout

```text
sridurga-packers-movers/
??? PROJECT_MEMORY/            # Persistent architecture, decisions & changelogs
??? public/
?   ??? images/
?       ??? hero-bg.png        # Fixed parallax banner for Home
?       ??? about-bg.png       # Fixed parallax banner for About
?       ??? contact-bg.png     # Fixed parallax banner for Contact
?       ??? gallery/           # 18 authentic field operations photos
?       ??? services/          # service-01.webp through service-08.webp + service-bg.png
??? src/
?   ??? app/                   # App Router pages & layout
?   ??? components/
?   ?   ??? common/            # SafeImage, SectionHeader, FaqAccordion, TrustBadge
?   ?   ??? cta/               # DesktopFloatingCTA (Vertical), MobileBottomBar, QuickBookingModal
?   ?   ??? footer/            # Comprehensive SEO footer
?   ?   ??? home/              # 15 modular homepage section components
?   ?   ??? navigation/        # Sticky Navbar (desktop/laptop full view + mobile drawer)
?   ??? data/                  # Company profile, services, reviews, gallery, FAQs
?   ??? lib/                   # WhatsApp link builder, schema generators, utils
?   ??? styles/                # tokens.css design system
?   ??? types/                 # TypeScript interfaces
??? package.json
??? README.md
```

---

## ?? Getting Started

### Prerequisites

- **Node.js**: v18.18 or higher (v20+ recommended)
- **npm**: v9+ or equivalent package manager

### Installation

```bash
# 1. Clone repository
git clone <repository-url>
cd sridurga-packers-movers

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build

```bash
# Build 100% static production output
npm run build
```

---

## ?? Deployment (Vercel)

This application is 100% static prerendered (`output: export` compatible) and deploys seamlessly to Vercel with zero server configuration:

1. Push code to GitHub / GitLab / Bitbucket.
2. Import project in [Vercel Dashboard](https://vercel.com/new).
3. Framework Preset: **Next.js**.
4. Click **Deploy**.

---

## ?? Business Information

- **Company**: Sridurga Packers & Movers
- **Location**: Near RTC Complex, Main Road, Vizianagaram, Andhra Pradesh - 535002
- **Helpline**: `085001 44488`
- **WhatsApp**: `+91 85001 44488`
- **Google Rating**: 4.9? (292+ Verified Reviews)
- **Operating Since**: 2014

---

## ?? License

Proprietary ? 2014 - Present Sridurga Packers & Movers. All rights reserved.

# sridurgapackersandmovers
