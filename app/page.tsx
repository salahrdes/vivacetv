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
  title: 'IPTV France : Abonnement IPTV Premium HD & 4K | VivaceTV',
  description:
    'Découvrez VivaceTV, votre abonnement IPTV France compatible Smart TV, Android, iOS, PC, Roku, Fire TV et Apple TV. Activation rapide, qualité HD/4K et support 24/7.',
  keywords: [
    'IPTV France',
    'abonnement IPTV France',
    'meilleur IPTV France',
    'abonnement IPTV',
    'IPTV abonnement',
    'meilleur IPTV',
    'fournisseur IPTV',
    'IPTV HD 4K',
    'abonnement IPTV pas cher',
    'abonnement IPTV premium',
    'IPTV Smart TV',
    'IPTV Firestick',
  ],
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: 'IPTV France : Abonnement IPTV Premium HD & 4K | VivaceTV',
    description:
      'Découvrez VivaceTV, votre abonnement IPTV France compatible Smart TV, Android, iOS, PC, Roku, Fire TV et Apple TV.',
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
