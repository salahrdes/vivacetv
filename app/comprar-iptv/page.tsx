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
  title: 'Comprar IPTV España 2026 — Compara Nuestros 4 Planes | VivaceTV',
  description:
    'Compara nuestros planes IPTV España: Bronze (3 meses, 22,99€), Silver (6 meses, 34,99€), Gold (12 meses, 44,99€), Diamond (24 meses, 74,99€). +22.000 canales HD/4K/8K. Activación rápida.',
  keywords: [
    'comprar IPTV España',
    'mejores planes IPTV',
    'ofertas IPTV',
    'suscripción IPTV barata',
    'suscripción IPTV premium',
    'IPTV suscripción 12 meses',
  ],
  alternates: { canonical: `${siteConfig.url}/comprar-iptv` },
  openGraph: {
    title: 'Comprar IPTV España 2026 — 4 Planes a Comparar | VivaceTV',
    description:
      'Bronze desde 22,99€, Silver 34,99€, Gold 44,99€, Diamond 74,99€. +22.000 canales HD/4K/8K. IPTV España con activación rápida por WhatsApp.',
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
