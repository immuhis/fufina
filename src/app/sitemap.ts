import { MetadataRoute } from 'next';

const routes = [
  '',
  '/catalog',
  '/collections/women',
  '/collections/kids',
  '/collections/baby',
  '/about',
  '/contact',
  '/faq',
  '/size-guide',
  '/privacy',
  '/returns',
  '/terms'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fufina.example.com';
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.7
  }));
}
