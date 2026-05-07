import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { blogPosts } from '@/config/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const blogArticles: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(post.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    // Core
    { url: base,                                     lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/abonnements`,                    lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/test-gratuit`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/guide-iptv`,                     lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },

    // Blog index + articles
    { url: `${base}/blog`,                           lastModified: now, changeFrequency: 'daily',   priority: 0.8 },
    ...blogArticles,

    // Support / info
    { url: `${base}/faq`,                            lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`,                        lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    // Legal
    { url: `${base}/mentions-legales`,               lastModified: now, changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${base}/conditions-generales`,           lastModified: now, changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${base}/politique-confidentialite`,      lastModified: now, changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${base}/politique-remboursement`,        lastModified: now, changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${base}/dmca`,                           lastModified: now, changeFrequency: 'yearly',  priority: 0.2 },

    // Checkout pages (noindex set in page metadata — excluded from sitemap intentionally)
    // Kept here as a reference; robots meta + noindex handles search engine exclusion
  ];
}
