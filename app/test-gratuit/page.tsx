import type { Metadata } from 'next';
import { Shield, Zap, Tv2, MessageCircle, UserX, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { buildWhatsAppUrl } from '@/lib/utils';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import TestRequestForm from '@/components/sections/TestRequestForm';

export const metadata: Metadata = {
  title: 'Test IPTV gratuit 24h en France | ClarioTV',
  description:
    "Demandez un test IPTV gratuit 24h avec ClarioTV pour vérifier la compatibilité de votre appareil et découvrir l'expérience avant de choisir votre abonnement.",
  alternates: { canonical: `${siteConfig.url}/test-gratuit` },
  openGraph: {
    title: 'Test IPTV gratuit 24h en France | ClarioTV',
    description: "Testez ClarioTV gratuitement pendant 24h. Aucun paiement, aucun compte requis.",
    url: `${siteConfig.url}/test-gratuit`,
    type: 'website',
  },
};

const benefits = [
  {
    icon: <Tv2 size={22} aria-hidden="true" />,
    title: 'Vérification de la compatibilité',
    desc: 'Testez ClarioTV sur votre appareil exact avant de vous engager.',
  },
  {
    icon: <MessageCircle size={22} aria-hidden="true" />,
    title: "Assistance à l'installation",
    desc: "Notre équipe vous guide en temps réel via WhatsApp pour l'installation.",
  },
  {
    icon: <Zap size={22} aria-hidden="true" />,
    title: 'Expérience HD/4K',
    desc: "Profitez d'un aperçu de la qualité selon votre appareil et votre connexion.",
  },
  {
    icon: <UserX size={22} aria-hidden="true" />,
    title: 'Aucun compte client',
    desc: "Pas d'inscription, pas de mot de passe. Juste un accès de test 24h.",
  },
  {
    icon: <Shield size={22} aria-hidden="true" />,
    title: 'Sans engagement',
    desc: "Le test expire automatiquement. Aucun paiement, aucun renouvellement automatique.",
  },
  {
    icon: <MessageCircle size={22} aria-hidden="true" />,
    title: 'Réponse rapide via WhatsApp',
    desc: 'Vous recevez vos accès en quelques minutes directement sur WhatsApp.',
  },
];

const steps = [
  { n: 1, title: 'Remplissez le formulaire', desc: "Indiquez votre nom, votre numéro WhatsApp et le type d'appareil." },
  { n: 2, title: 'Indiquez votre appareil', desc: 'Smart TV, Firestick, Android, iPhone, PC — nous adaptons la configuration.' },
  { n: 3, title: 'Recevez les instructions', desc: "Notre équipe vous envoie vos accès et un guide d'installation via WhatsApp." },
  { n: 4, title: 'Testez pendant 24h', desc: 'Profitez librement du service. Choisissez ensuite le forfait qui vous convient.' },
];

const testFaq = [
  {
    q: 'Le test gratuit est-il vraiment sans engagement ?',
    a: "Oui, totalement. L'accès test expire après 24 heures sans aucun frais ni renouvellement automatique.",
  },
  {
    q: 'Dois-je créer un compte pour le test ?',
    a: 'Non. Aucun compte, aucun mot de passe. Vous recevez des identifiants temporaires directement via WhatsApp.',
  },
  {
    q: 'Quels appareils sont compatibles pour le test ?',
    a: 'Le test est disponible sur Smart TV Samsung/LG, Fire TV Stick, Android, iPhone/iPad, PC Windows, Mac et Apple TV.',
  },
  {
    q: 'Comment vais-je recevoir les informations de connexion ?',
    a: "Notre équipe vous envoie l'URL du serveur, votre nom d'utilisateur et votre mot de passe directement sur WhatsApp.",
  },
  {
    q: 'Combien de temps dure le test ?',
    a: "24 heures à partir de l'activation. Suffisant pour vérifier la qualité, la stabilité et la compatibilité.",
  },
  {
    q: "Puis-je obtenir de l'aide pour l'installation pendant le test ?",
    a: 'Oui, notre support est disponible pendant toute la durée du test via WhatsApp pour vous guider.',
  },
];

export default function TestGratuitPage() {
  return (
    <>
      <Header />
      <main id="main-content">

        {/* Hero */}
        <PageHero
          label="Test gratuit 24h"
          title="Test IPTV gratuit 24h"
          titleHighlight="avec ClarioTV"
          subtitle="Vérifiez la compatibilité de votre appareil et découvrez l'expérience ClarioTV avant de choisir votre abonnement IPTV France."
        >
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <a
              href="#test-form"
              className="inline-flex items-center justify-center px-7 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
            >
              Demander mon test gratuit
            </a>
            <a
              href={buildWhatsAppUrl('Bonjour ClarioTV, je souhaite un test gratuit 24h')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:bg-white/10"
              style={{ color: 'var(--color-surface)', border: '1.5px solid rgba(255,255,255,0.15)' }}
            >
              Via WhatsApp directement
            </a>
          </div>
        </PageHero>

        {/* ── Benefits ────────────────────────────────────────────────────── */}
        <section
          className="py-16 lg:py-24"
          style={{ backgroundColor: 'var(--color-surface-alt)' }}
          aria-labelledby="benefits-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 flex flex-col items-center gap-3">
              <span
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full tracking-wider uppercase"
                style={{ backgroundColor: 'var(--color-lime-soft)', color: 'var(--color-dark)' }}
              >
                Ce que vous obtenez
              </span>
              <h2
                id="benefits-heading"
                className="font-display font-extrabold text-3xl sm:text-4xl leading-tight"
                style={{ color: 'var(--color-ink)' }}
              >
                Pourquoi tester avant de s&apos;abonner ?
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="flex gap-4 p-6 rounded-2xl"
                  style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}
                >
                  <div
                    className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0"
                    style={{ backgroundColor: 'var(--color-lime-soft)', color: 'var(--color-dark)' }}
                  >
                    {b.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: 'var(--color-ink)' }}>{b.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works ────────────────────────────────────────────────── */}
        <section
          className="py-16 lg:py-24"
          style={{ backgroundColor: 'var(--color-surface)' }}
          aria-labelledby="steps-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="steps-heading"
              className="font-display font-extrabold text-3xl sm:text-4xl text-center mb-12 leading-tight"
              style={{ color: 'var(--color-ink)' }}
            >
              Comment ça marche ?
            </h2>
            <ol className="flex flex-col gap-5" aria-label="Étapes pour obtenir le test gratuit">
              {steps.map((step) => (
                <li key={step.n} className="flex gap-5 items-start">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-full text-base font-bold shrink-0"
                    style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
                    aria-hidden="true"
                  >
                    {step.n}
                  </div>
                  <div
                    className="flex-1 p-5 rounded-2xl"
                    style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}
                  >
                    <p className="font-semibold text-base mb-1" style={{ color: 'var(--color-ink)' }}>{step.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Form ────────────────────────────────────────────────────────── */}
        <section
          id="test-form"
          className="py-16 lg:py-24"
          style={{ backgroundColor: 'var(--color-surface-alt)' }}
          aria-labelledby="form-heading"
        >
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2
                id="form-heading"
                className="font-display font-extrabold text-3xl sm:text-4xl mb-3 leading-tight"
                style={{ color: 'var(--color-ink)' }}
              >
                Demander mon test gratuit
              </h2>
              <p className="text-base" style={{ color: 'var(--color-ink-light)' }}>
                Remplissez le formulaire ci-dessous et notre équipe vous contacte via WhatsApp en quelques minutes.
              </p>
            </div>
            <TestRequestForm />
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <section
          className="py-16 lg:py-24"
          style={{ backgroundColor: 'var(--color-surface)' }}
          aria-labelledby="test-faq-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="test-faq-heading"
              className="font-display font-extrabold text-2xl sm:text-3xl mb-8 text-center leading-tight"
              style={{ color: 'var(--color-ink)' }}
            >
              Questions sur le test gratuit
            </h2>
            <div className="flex flex-col gap-3">
              {testFaq.map((item, i) => (
                <details
                  key={i}
                  className="group rounded-2xl overflow-hidden"
                  style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}
                >
                  <summary
                    className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none font-semibold text-sm"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {item.q}
                    <ChevronDown
                      size={16}
                      className="shrink-0 transition-transform duration-200 group-open:rotate-180"
                      style={{ color: 'var(--color-lime)' }}
                      aria-hidden="true"
                    />
                  </summary>
                  <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pourquoi tester ClarioTV ─────────────────────────────────── */}
        <section
          className="py-16 lg:py-24"
          style={{ backgroundColor: 'var(--color-surface-alt)' }}
          aria-labelledby="pourquoi-tester-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="pourquoi-tester-heading"
              className="font-display font-extrabold text-2xl sm:text-3xl mb-6 leading-tight"
              style={{ color: 'var(--color-ink)' }}
            >
              Pourquoi tester ClarioTV gratuitement ?
            </h2>
            <div className="flex flex-col gap-5 text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              <p>
                Avant de souscrire un abonnement IPTV, il est essentiel de s&apos;assurer que le service fonctionne parfaitement sur votre appareil et avec votre connexion internet. ClarioTV propose un accès test gratuit de 24 heures pour vous permettre de tout vérifier sans prendre le moindre risque financier.
              </p>
              <p>
                Durant ces 24 heures, vous accédez aux mêmes chaînes et fonctionnalités que les abonnés payants : chaînes françaises, internationales, sportives en HD et 4K, ainsi que le replay sur les chaînes disponibles. C&apos;est l&apos;occasion idéale de tester la stabilité du signal, la fluidité des flux et la qualité d&apos;image sur votre téléviseur, votre smartphone ou votre PC.
              </p>
              <p>
                Notre équipe de support est disponible pendant toute la durée du test via WhatsApp pour vous aider à configurer votre application IPTV et répondre à vos questions. Si vous rencontrez le moindre problème technique, nous intervenons en temps réel pour vous accompagner jusqu&apos;à ce que tout fonctionne correctement.
              </p>
            </div>
          </div>
        </section>

        {/* ── Final CTA ───────────────────────────────────────────────────── */}
        <section
          className="py-16 lg:py-20"
          style={{ backgroundColor: 'var(--color-dark)' }}
          aria-label="Appel à l'action final"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
            <h2
              className="font-display font-extrabold text-3xl sm:text-4xl leading-tight"
              style={{ color: 'var(--color-surface)' }}
            >
              Prêt à tester <span style={{ color: 'var(--color-lime)' }}>ClarioTV</span> ?
            </h2>
            <p className="text-base max-w-xl leading-relaxed" style={{ color: 'var(--color-gray-400)' }}>
              Obtenez votre test gratuit 24h maintenant. Aucun paiement, aucun engagement, activation sous quelques minutes.
            </p>
            <a
              href="#test-form"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
            >
              Demander mon test gratuit
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
