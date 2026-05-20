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
  title: 'IPTV España : Suscripción IPTV Premium HD y 4K | VivaceTV',
  description:
    'Descubre VivaceTV, tu suscripción IPTV España compatible con Smart TV, Android, iOS, PC, Roku, Fire TV y Apple TV. Activación rápida, calidad HD/4K y soporte 24/7.',
  keywords: [
    'IPTV España',
    'suscripción IPTV España',
    'mejor IPTV España',
    'abonament IPTV',
    'IPTV suscripción',
    'mejor IPTV',
    'proveedor IPTV',
    'IPTV HD 4K',
    'IPTV barato España',
    'IPTV premium España',
    'IPTV Smart TV',
    'IPTV Firestick',
  ],
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: 'IPTV España : Suscripción IPTV Premium HD y 4K | VivaceTV',
    description:
      'Descubre VivaceTV, tu suscripción IPTV España compatible con Smart TV, Android, iOS, PC, Roku, Fire TV y Apple TV.',
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
