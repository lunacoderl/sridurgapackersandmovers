export interface NavItem {
  label: string;
  href: string;
}

export const navigationLinks: NavItem[] = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'TESTIMONIALS', href: '/#testimonials' },
  { label: 'SERVICES', href: '/services' },
  { label: 'GALLERY', href: '/#gallery' },
  { label: 'REVIEWS', href: '/#reviews' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'CONTACT', href: '/contact' },
];

export const rotatingPromptMessages: string[] = [
  'Need help planning your move?',
  'Moving soon? Get a free instant quote.',
  'Let us make your relocation simple.',
  '4.9✅ rated movers in Vizianagaram.',
  'Book your safe move today.',
];
