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
    priority: 0.7,
  }));

  return [
    // ── Home ────────────────────────────────────────────────────────────────
    { url: base,                                              lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },

    // ── Core conversion pages ────────────────────────────────────────────────
    { url: `${base}/abonnements`,                             lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/abonnements/12-mois`,                     lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/abonnements/premium`,                     lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/abonnements/pas-cher`,                    lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/test-gratuit`,                            lastModified: now, changeFrequency: 'monthly', priority: 0.9 },

    // ── SEO landing pages ────────────────────────────────────────────────────
    { url: `${base}/meilleur-iptv`,                           lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/meilleure-application-iptv`,              lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/fournisseur-iptv`,                        lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/avis-iptv`,                               lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/iptv-4k`,                                 lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // ── Alternatives ─────────────────────────────────────────────────────────
    { url: `${base}/alternatives`,                            lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/alternatives/atlaspro-iptv`,              lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/alternatives/iptv-atlas`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/alternatives/iptv-az`,                    lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/alternatives/iptv-hottest`,               lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/alternatives/king-iptv`,                  lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/alternatives/smarter-one-iptv`,           lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/alternatives/televizo`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/alternatives/xenon-iptv`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // ── Guide IPTV hub + sub-guides ──────────────────────────────────────────
    { url: `${base}/guide-iptv`,                              lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/guide-iptv/comment-fonctionne-iptv`,      lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/guide-iptv/installation-iptv`,            lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/guide-iptv/application-iptv-android`,     lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/guide-iptv/iptv-sur-pc`,                  lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/guide-iptv/iptv-chaine`,                  lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide-iptv/serveur-iptv`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide-iptv/iptv-amende`,                  lastModified: now, changeFrequency: 'monthly', priority: 0.65 },

    // ── Blog ─────────────────────────────────────────────────────────────────
    { url: `${base}/blog`,                                    lastModified: now, changeFrequency: 'daily',   priority: 0.8 },
    ...blogArticles,

    // ── Support / info ───────────────────────────────────────────────────────
    { url: `${base}/faq`,                                     lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`,                                 lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    // ── Legal ────────────────────────────────────────────────────────────────
    { url: `${base}/mentions-legales`,                        lastModified: now, changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${base}/conditions-generales`,                    lastModified: now, changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${base}/politique-confidentialite`,               lastModified: now, changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${base}/politique-remboursement`,                 lastModified: now, changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${base}/dmca`,                                    lastModified: now, changeFrequency: 'yearly',  priority: 0.2 },

    // Checkout pages (/commander/*) are excluded — noindex set in page metadata
  ];
}
