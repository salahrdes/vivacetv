import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { OrganizationSchema, FAQSchema, WebSiteSchema } from '@/components/seo/JsonLd';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import DeviceStrip from '@/components/sections/DeviceStrip';
import BenefitsSection from '@/components/sections/BenefitsSection';
import ContentShowcase from '@/components/sections/ContentShowcase';
import PricingSection from '@/components/sections/PricingSection';
import UrgencySection from '@/components/sections/UrgencySection';
import CompatibilitySection from '@/components/sections/CompatibilitySection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import WhatsAppTestimonialsSection from '@/components/sections/WhatsAppTestimonialsSection';
import BlogPreviewSection from '@/components/sections/BlogPreviewSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Comprar IPTV España 2026 — +22.000 Canales HD & 4K | VivaceTV',
  description:
    'Compra tu suscripción IPTV en España desde 22,99€. +22.000 canales HD y 4K, fútbol en vivo, LaLiga, Champions, películas y series. Activación por WhatsApp en minutos. Prueba gratis 24h.',
  keywords: [
    'comprar iptv',
    'comprar iptv españa',
    'comprar iptv barato',
    'iptv españa',
    'mejor iptv españa 2026',
    'suscripcion iptv españa',
    'iptv sin cortes',
    'iptv premium españa',
    'iptv smart tv',
    'iptv 4k españa',
    'prueba iptv gratis',
    'iptv barato españa',
    'proveedor iptv españa',
  ],
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: 'Comprar IPTV España 2026 — +22.000 Canales HD & 4K | VivaceTV',
    description:
      'Compra tu IPTV en España desde 22,99€. +22.000 canales HD/4K, fútbol, LaLiga, películas y series. Activación en minutos. Prueba gratis 24h.',
    url: siteConfig.url,
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <FAQSchema />
      <WebSiteSchema />

      <Header />

      <main id="main-content">
        <HeroSection />
        <DeviceStrip />
        <BenefitsSection />
        <ContentShowcase />

        {/* Pricing → immediately followed by urgency to push decision */}
        <PricingSection />
        <UrgencySection />

        <CompatibilitySection />
        <HowItWorksSection />

        {/* Text testimonials then real WhatsApp screenshots */}
        <TestimonialsSection />
        <WhatsAppTestimonialsSection />

        <BlogPreviewSection />
        <FAQSection />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
