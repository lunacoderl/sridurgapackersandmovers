import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';
import { ClientLayoutWrapper } from '@/components/common/ClientLayoutWrapper';
import { getLocalBusinessSchema } from '@/lib/schema';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sridurgapackers.com'),
  title: {
    default: 'Sridurga Packers & Movers Vizianagaram | 4.9? Trusted Relocation',
    template: '%s | Sridurga Packers & Movers',
  },
  description:
    'Vizianagaram?s #1 Packers & Movers since 2014. Rated 4.9? with 292+ Google reviews. Household shifting, office relocation, bike transport & all-India container moves. Call 085001 44488.',
  keywords: [
    'packers and movers vizianagaram',
    'sridurga packers and movers',
    'sri durga packers vizianagaram',
    'household shifting vizianagaram',
    'office relocation vizianagaram',
    'bike transport vizianagaram',
    'packers and movers cantonment vizianagaram',
    'cheap best packers movers vizianagaram',
  ],
  authors: [{ name: 'Sridurga Packers & Movers' }],
  creator: 'Sridurga Packers & Movers',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sridurgapackers.com',
    title: 'Sridurga Packers & Movers Vizianagaram | 4.9? Rated Relocation',
    description:
      'Zero-damage household & commercial shifting in Vizianagaram, Visakhapatnam & all-India corridors. 12+ years experience. 4.9? Google rating.',
    siteName: 'Sridurga Packers & Movers Vizianagaram',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sridurga Packers & Movers Vizianagaram',
    description: '4.9? Rated Packers & Movers in Vizianagaram since 2014. 292+ Google Reviews.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessJsonLd = getLocalBusinessSchema();

  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
