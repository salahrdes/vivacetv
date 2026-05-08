import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/commander/', // checkout pages — not for indexing
        ],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
