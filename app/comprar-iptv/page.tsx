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
  title: 'Abonnements IPTV France 2026 — Comparez Nos 4 Offres | VivaceTV',
  description:
    'Comparez nos abonnements IPTV France : Bronze (3 mois, 22,99€), Silver (6 mois, 34,99€), Gold (12 mois, 44,99€), Diamond (24 mois, 74,99€). +22 000 chaînes HD/4K/8K. Activation rapide.',
  keywords: [
    'abonnement IPTV France',
    'meilleurs abonnements IPTV',
    'offres IPTV',
    'acheter IPTV',
    'abonnement IPTV pas cher',
    'abonnement IPTV premium',
    'IPTV abonnement 12 mois',
  ],
  alternates: { canonical: `${siteConfig.url}/abonnements` },
  openGraph: {
    title: 'Abonnements IPTV France 2026 — 4 Offres à Comparer | VivaceTV',
    description:
      'Bronze dès 22,99€, Silver 34,99€, Gold 44,99€, Diamond 74,99€. +22 000 chaînes HD/4K/8K. Abonnement IPTV France avec activation rapide via WhatsApp.',
    url: `${siteConfig.url}/abonnements`,
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
