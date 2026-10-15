import { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { siteSeo } from '@/siteSeo';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteSeo.baseUrl;
  const currentDate = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [`${baseUrl}/logo.png`],
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [`${baseUrl}/logo.png`],
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [`${baseUrl}/logo.png`],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
    images: service.heroImage ? [`${baseUrl}${service.heroImage}`] : undefined,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
