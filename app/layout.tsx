import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/config/site';
import FloatingWhatsAppButton from '@/components/ui/FloatingWhatsAppButton';
import { getSettings } from '@/lib/actions/settings';
import { FONT_CONFIG } from '@/lib/settings-config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'IPTV France : Abonnement IPTV Premium HD & 4K | ClarioTV',
    template: '%s | ClarioTV',
  },
  description: siteConfig.description,
  keywords: [
    'IPTV France',
    'abonnement IPTV France',
    'meilleur IPTV France',
    'IPTV Smart TV',
    'IPTV HD 4K',
  ],
  authors: [{ name: 'ClarioTV' }],
  creator: 'ClarioTV',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'IPTV France : Abonnement IPTV Premium HD & 4K | ClarioTV',
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPTV France : Abonnement IPTV Premium HD & 4K | ClarioTV',
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteConfig.url,
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
  return `https://fonts.googleapis.com/css2?${parts.join('&')}&display=swap`;
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const settings = await getSettings();
  const displayFont = settings.font_display || 'Mozilla Headline';
  const bodyFont    = settings.font_body    || 'Inter';
  const fontsUrl    = buildFontsUrl(displayFont, bodyFont);

  return (
    <html lang="fr">
      <head>
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
