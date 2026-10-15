import { MetadataRoute } from 'next';
import { siteSeo } from '@/siteSeo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${siteSeo.baseUrl}/sitemap.xml`,
  };
}
