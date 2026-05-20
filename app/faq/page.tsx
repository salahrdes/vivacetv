import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { faqCategories } from '@/config/faq-page';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FaqAccordion from '@/components/sections/FaqAccordion';
import { FAQPageSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'FAQ IPTV España : Todas las Respuestas sobre IPTV | VivaceTV',
  description:
    'Respuestas a vuestras preguntas sobre IPTV en España: legalidad, instalación, dispositivos compatibles, canales disponibles, planes y soporte VivaceTV.',
  keywords: [
    'FAQ IPTV España',
    'preguntas IPTV',
    'IPTV legal España',
    'cómo funciona IPTV',
    'suscripción IPTV preguntas',
    'ayuda IPTV',
  ],
  alternates: { canonical: `${siteConfig.url}/faq` },
  openGraph: {
    title: 'FAQ IPTV España : Todas las Respuestas sobre IPTV | VivaceTV',
    description: 'Respuestas sobre legalidad, instalación, dispositivos y planes IPTV VivaceTV.',
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
          title="Preguntas"
          titleHighlight="frecuentes"
          subtitle="Encontrad las respuestas a las preguntas más habituales sobre VivaceTV, los planes IPTV, los dispositivos compatibles, la instalación y la asistencia."
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
