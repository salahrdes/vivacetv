import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/config/site';
import FloatingWhatsAppButton from '@/components/ui/FloatingWhatsAppButton';
import { getSettings } from '@/lib/actions/settings';
import { FONT_CONFIG } from '@/lib/settings-config';

// Force dynamic rendering — root layout calls getSettings() which queries the DB.
// Static pre-rendering would fail without a live database connection at build time.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'VivaceTV — Comprar IPTV Premium en España | Miles de Canales HD & 4K',
    template: '%s | VivaceTV',
  },
  description: 'Compra tu suscripción IPTV premium en España. Miles de canales HD y 4K, fútbol en vivo, películas y series. Activación instantánea. Prueba gratis 24h.',
  keywords: [
    'comprar iptv',
    'comprar iptv españa',
    'comprar iptv barato',
    'iptv españa',
    'iptv premium españa',
    'mejor iptv españa',
    'suscripcion iptv españa',
    'iptv sin cortes españa',
    'iptv smart tv españa',
    'iptv 4k españa',
    'prueba iptv gratis',
    'prueba iptv 24h',
    'proveedor iptv españa',
  ],
  authors: [{ name: 'VivaceTV' }],
  creator: 'VivaceTV',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: siteConfig.url,
    siteName: 'VivaceTV',
    title: 'VivaceTV — Comprar IPTV Premium en España | Miles de Canales HD & 4K',
    description: 'Compra tu suscripción IPTV premium en España. Miles de canales HD y 4K, fútbol en vivo, películas y series. Activación instantánea. Prueba gratis 24h.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VivaceTV — Comprar IPTV Premium en España | Miles de Canales HD & 4K',
    description: 'Compra tu suscripción IPTV premium en España. Miles de canales HD y 4K, fútbol en vivo, películas y series. Activación instantánea. Prueba gratis 24h.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
};

/** Build a Google Fonts CSS2 URL for up to 2 font families, deduped. */
function buildFontsUrl(displayFont: string, bodyFont: string): string | null {
  const seen = new Set<string>();
  const parts: string[] = [];

  for (const name of [displayFont, bodyFont]) {
    const cfg = FONT_CONFIG[name];
    if (!cfg || seen.has(name)) continue;
    seen.add(name);
    parts.push(`family=${cfg.slug}:wght@${cfg.weights}`);
  }

  if (!parts.length) return null;
  return `https://fonts.googleapis.com/css2?${parts.join('&')}&display=optional`;
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const displayFont = 'Inter';
  const bodyFont    = 'Inter';
  const fontsUrl    = buildFontsUrl(displayFont, bodyFont);

  return (
    <html lang="es">
      <head>
        {/* Hreflang — tells Google this .com targets Spain */}
        <link rel="alternate" hrefLang="es-es" href="https://www.vivacetv.com/" />
        <link rel="alternate" hrefLang="es" href="https://www.vivacetv.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.vivacetv.com/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {fontsUrl && <link href={fontsUrl} rel="stylesheet" />}
        {/* Override Tailwind @theme CSS vars with admin-selected fonts */}
        <style>{`:root{--font-display:'${displayFont}',system-ui,sans-serif;--font-body:'${bodyFont}',system-ui,sans-serif;}`}</style>
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
