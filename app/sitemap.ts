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
    { url: base,                                                     lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },

    // ── Core conversion pages ────────────────────────────────────────────────
    { url: `${base}/comprar-iptv`,                                   lastModified: now, changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${base}/comprar-iptv/premium`,                           lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/comprar-iptv/pas-cher`,                          lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/comprar-iptv/12-mois`,                           lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/prueba-gratis`,                                  lastModified: now, changeFrequency: 'monthly', priority: 0.9 },

    // ── SEO landing pages ────────────────────────────────────────────────────
    { url: `${base}/mejor-iptv-espana`,                              lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/mejor-app-iptv`,                                 lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/proveedor-iptv`,                                 lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/opiniones-iptv`,                                 lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/iptv-4k`,                                        lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // ── Canales ──────────────────────────────────────────────────────────────
    { url: `${base}/canales/deportes`,                               lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/canales/peliculas`,                              lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/canales/series`,                                 lastModified: now, changeFrequency: 'monthly', priority: 0.75 },

    // ── Dispositivos ─────────────────────────────────────────────────────────
    { url: `${base}/dispositivos/smart-tv`,                          lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/dispositivos/firestick`,                         lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/dispositivos/android-tv`,                        lastModified: now, changeFrequency: 'monthly', priority: 0.75 },

    // ── Alternativas ─────────────────────────────────────────────────────────
    { url: `${base}/alternativas`,                                   lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/alternativas/atlaspro-iptv`,                     lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/alternativas/iptv-atlas`,                        lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/alternativas/iptv-az`,                           lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/alternativas/iptv-hottest`,                      lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/alternativas/king-iptv`,                         lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/alternativas/smarter-one-iptv`,                  lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/alternativas/televizo`,                          lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/alternativas/xenon-iptv`,                        lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // ── Guía IPTV hub + sub-guías ────────────────────────────────────────────
    { url: `${base}/guia-iptv`,                                      lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/guia-iptv/comment-fonctionne-iptv`,              lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/guia-iptv/installation-iptv`,                    lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/guia-iptv/application-iptv-android`,             lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/guia-iptv/iptv-sur-pc`,                          lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/guia-iptv/iptv-chaine`,                          lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guia-iptv/serveur-iptv`,                         lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guia-iptv/iptv-amende`,                          lastModified: now, changeFrequency: 'monthly', priority: 0.65 },

    // ── Blog ─────────────────────────────────────────────────────────────────
    { url: `${base}/blog`,                                           lastModified: now, changeFrequency: 'daily',   priority: 0.8 },
    ...blogArticles,

    // ── Soporte / info ───────────────────────────────────────────────────────
    { url: `${base}/faq`,                                            lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`,                                        lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    // ── Legal ────────────────────────────────────────────────────────────────
    { url: `${base}/avisos-legales`,                                 lastModified: now, changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${base}/terminos-condiciones`,                           lastModified: now, changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${base}/politica-privacidad`,                            lastModified: now, changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${base}/politica-reembolso`,                             lastModified: now, changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${base}/dmca`,                                           lastModified: now, changeFrequency: 'yearly',  priority: 0.2 },

    // Checkout pages (/commander/*) excluded — noindex set in page metadata
  ];
}
