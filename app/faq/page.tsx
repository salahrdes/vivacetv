import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { faqCategories } from '@/config/faq-page';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FaqAccordion from '@/components/sections/FaqAccordion';
import { FAQPageSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'FAQ IPTV France : Toutes les Réponses sur l\'IPTV | VivaceTV',
  description:
    'Réponses à vos questions sur l\'IPTV en France : légalité, installation, appareils compatibles, chaînes disponibles, forfaits et support VivaceTV.',
  keywords: [
    'FAQ IPTV France',
    'questions IPTV',
    'IPTV légal France',
    'comment fonctionne IPTV',
    'IPTV abonnement questions',
    'aide IPTV',
  ],
  alternates: { canonical: `${siteConfig.url}/faq` },
  openGraph: {
    title: 'FAQ IPTV France : Toutes les Réponses sur l\'IPTV | VivaceTV',
    description: 'Réponses sur la légalité, l\'installation, les appareils et les forfaits IPTV VivaceTV.',
    url: `${siteConfig.url}/faq`,
    type: 'website',
  },
};

export default function FaqPage() {
  return (
    <>
      <FAQPageSchema categories={faqCategories} />
      <Header />
      <main id="main-content">
        <PageHero
          label="FAQ"
          title="Questions"
          titleHighlight="fréquentes"
          subtitle="Retrouvez les réponses aux questions les plus courantes sur VivaceTV, les abonnements IPTV, les appareils compatibles, l'installation et l'assistance."
        />
        <div className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FaqAccordion />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
