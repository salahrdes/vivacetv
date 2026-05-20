import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AbonnementsHero from '@/components/sections/AbonnementsHero';
import PricingSection from '@/components/sections/PricingSection';
import AbonnementsFeaturesGrid from '@/components/sections/AbonnementsFeaturesGrid';
import PlanComparisonTable from '@/components/sections/PlanComparisonTable';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Comprar IPTV España — Precios desde 22,99€ | VivaceTV',
  description:
    'Comprar IPTV en España nunca fue tan fácil. Planes desde 22,99€: +22.000 canales HD/4K, LaLiga, Champions, series y películas. Sin contrato. Activación por WhatsApp. Prueba gratis 24h.',
  keywords: [
    'comprar iptv',
    'comprar iptv españa',
    'comprar iptv barato',
    'comprar suscripcion iptv',
    'iptv precio españa',
    'iptv planes precios',
    'suscripcion iptv barata',
    'suscripcion iptv premium',
    'oferta iptv españa',
    'iptv 3 meses',
    'iptv 12 meses',
    'iptv sin permanencia',
  ],
  alternates: { canonical: `${siteConfig.url}/comprar-iptv` },
  openGraph: {
    title: 'Comprar IPTV España — Planes desde 22,99€ | VivaceTV',
    description:
      'Comprar IPTV en España: 4 planes sin contrato desde 22,99€. +22.000 canales HD/4K, LaLiga, Champions. Activación por WhatsApp en minutos.',
    url: `${siteConfig.url}/comprar-iptv`,
    type: 'website',
  },
};

export default function AbonnementsPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        <AbonnementsHero />
        <PricingSection />
        <AbonnementsFeaturesGrid />
        <PlanComparisonTable />
        <FAQSection />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
