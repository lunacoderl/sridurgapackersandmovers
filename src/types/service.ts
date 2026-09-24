export interface ServiceHandleItem {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceGalleryItem {
  src: string;
  alt: string;
  caption: string;
}

export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  category: 'residential' | 'commercial' | 'packing' | 'transport' | 'specialized' | 'logistics';
  iconName: string;
  heroImage: string;
  heroVideo?: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  whatWeHandle: ServiceHandleItem[];
  careDetails: {
    title: string;
    description: string;
    image: string;
    bulletPoints: string[];
  };
  process: ServiceProcessStep[];
  benefits: ServiceBenefit[];
  gallery: ServiceGalleryItem[];
  faqs: ServiceFaqItem[];
  relatedServiceSlugs: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
  };
}
