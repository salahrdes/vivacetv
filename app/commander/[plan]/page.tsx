import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Check, Shield, MessageCircle, Zap } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { plans } from '@/config/plans';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CheckoutForm      from '@/components/sections/CheckoutForm';
import ScarcityStrip     from '@/components/sections/ScarcityStrip';
import SocialProofTicker from '@/components/sections/SocialProofTicker';
import SidebarCountdown  from '@/components/sections/SidebarCountdown';

/* ─── Static params ─────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return plans.map((p) => ({ plan: p.slug }));
}

/* ─── Dynamic metadata ──────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ plan: string }>;
}): Promise<Metadata> {
  const { plan: slug } = await params;
  const plan = plans.find((p) => p.slug === slug);
  if (!plan) return {};
  return {
    title: `Commander l'abonnement ${plan.name} IPTV (${plan.duration}) | VivaceTV`,
    description: `Commandez votre abonnement IPTV VivaceTV ${plan.name} — ${plan.duration} à ${plan.priceSale}€. Activation rapide via WhatsApp, support 24/7.`,
    alternates: { canonical: `${siteConfig.url}/commander/${plan.slug}` },
    robots: { index: false }, // checkout pages should not be indexed
    openGraph: {
      title: `Abonnement ${plan.name} — ${plan.duration} | VivaceTV`,
      description: `Commandez votre abonnement IPTV ${plan.name} à ${plan.priceSale}€ pour ${plan.duration}.`,
      url: `${siteConfig.url}/commander/${plan.slug}`,
      type: 'website',
    },
  };
}

/* ─── Trust badge component ─────────────────────────────────────────────── */
function TrustBadge({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span style={{ color: 'var(--color-lime)' }} aria-hidden="true">
        {icon}
      </span>
      <span className="text-sm" style={{ color: 'var(--color-gray-400)' }}>
        {label}
      </span>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ plan: string }>;
}) {
  const { plan: slug } = await params;
  const plan = plans.find((p) => p.slug === slug);
  if (!plan) notFound();

  const savings = plan.priceOriginal - plan.priceSale;

  return (
    <>
      <Header />

      <main id="main-content">

        {/* ── Hero / header ───────────────────────────────────────────── */}
        <div
          className="py-12 lg:py-16"
          style={{ backgroundColor: 'var(--color-dark)' }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Back link */}
            <nav aria-label="Retour" className="mb-8">
              <Link
                href="/abonnements"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-150 hover:opacity-70"
                style={{ color: 'var(--color-gray-400)' }}
              >
                <ArrowLeft size={15} aria-hidden="true" />
                Voir tous les abonnements
              </Link>
            </nav>

            {/* Plan badge + title */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide"
                style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
              >
                {plan.name}
              </span>
              {plan.isFeatured && plan.featuredLabel && (
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: 'rgba(199,227,107,0.12)',
                    color: 'var(--color-lime)',
                    border: '1px solid rgba(199,227,107,0.3)',
                  }}
                >
                  {plan.featuredLabel}
                </span>
              )}
            </div>

            <h1
              className="font-display font-extrabold text-3xl sm:text-4xl leading-tight mb-3"
              style={{ color: 'var(--color-surface)' }}
            >
              Abonnement IPTV <span style={{ color: 'var(--color-lime)' }}>{plan.name}</span>
            </h1>
            <p className="text-base mb-6" style={{ color: 'var(--color-gray-400)' }}>
              Accès complet pendant {plan.duration} — activation rapide via WhatsApp
            </p>

            {/* Trust badges row */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <TrustBadge icon={<Shield size={14} />} label="Paiement sécurisé" />
              <TrustBadge icon={<Zap size={14} />} label="Activation en moins d'1h" />
              <TrustBadge icon={<MessageCircle size={14} />} label="Support WhatsApp 24/7" />
            </div>
          </div>
        </div>

        {/* ── Main content ─────────────────────────────────────────────── */}
        <div
          className="py-12 lg:py-20"
          style={{ backgroundColor: 'var(--color-surface)' }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-12 items-start">

              {/* ── Left: Order form ────────────────────────────────────── */}
              <div>
                <h2
                  className="font-display font-bold text-xl mb-6"
                  style={{ color: 'var(--color-ink)' }}
                >
                  Vos informations de commande
                </h2>

                <ScarcityStrip planSlug={plan.slug} />

                <CheckoutForm
                  planName={plan.name}
                  planDuration={plan.duration}
                  planPrice={plan.priceSale}
                />

                {/* How it works */}
                <div className="mt-8">
                  <h3
                    className="font-semibold text-sm uppercase tracking-wider mb-4"
                    style={{ color: 'var(--color-gray-600)' }}
                  >
                    Comment ça marche ?
                  </h3>
                  <ol className="flex flex-col gap-3">
                    {[
                      'Remplissez le formulaire ci-dessus et cliquez sur Commander.',
                      'Notre équipe vous contacte sur WhatsApp sous quelques minutes.',
                      'Vous procédez au règlement de manière sécurisée.',
                      'Vos accès IPTV sont activés en moins d\'une heure.',
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold shrink-0 mt-0.5"
                          style={{
                            backgroundColor: 'var(--color-lime)',
                            color: 'var(--color-dark)',
                          }}
                          aria-hidden="true"
                        >
                          {i + 1}
                        </span>
                        <span className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* ── Right: Plan summary card ─────────────────────────────── */}
              <aside aria-label="Récapitulatif de commande">
                <div
                  className="rounded-2xl overflow-hidden sticky top-24"
                  style={{
                    border: plan.isFeatured
                      ? '2px solid var(--color-lime)'
                      : '1px solid var(--color-border)',
                    backgroundColor: 'var(--color-card)',
                  }}
                >
                  {/* Card header */}
                  <div
                    className="px-6 py-5"
                    style={{
                      backgroundColor: plan.isFeatured
                        ? 'var(--color-dark)'
                        : 'var(--color-surface-alt)',
                    }}
                  >
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-1"
                      style={{
                        color: plan.isFeatured
                          ? 'var(--color-lime)'
                          : 'var(--color-gray-600)',
                      }}
                    >
                      Récapitulatif
                    </p>
                    <p
                      className="font-display font-extrabold text-2xl"
                      style={{
                        color: plan.isFeatured
                          ? 'var(--color-surface)'
                          : 'var(--color-ink)',
                      }}
                    >
                      {plan.name}
                      <span
                        className="text-sm font-normal ml-2"
                        style={{
                          color: plan.isFeatured
                            ? 'var(--color-gray-400)'
                            : 'var(--color-ink-light)',
                        }}
                      >
                        — {plan.duration}
                      </span>
                    </p>

                    {/* Price */}
                    <div className="flex items-end gap-2 mt-3">
                      <span
                        className="font-display font-extrabold text-3xl"
                        style={{
                          color: plan.isFeatured
                            ? 'var(--color-lime)'
                            : 'var(--color-ink)',
                        }}
                      >
                        {plan.priceSale.toFixed(2)}€
                      </span>
                      <span
                        className="text-sm line-through mb-1"
                        style={{ color: 'var(--color-gray-600)' }}
                      >
                        {plan.priceOriginal.toFixed(2)}€
                      </span>
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full mb-1"
                        style={{
                          backgroundColor: 'rgba(199,227,107,0.15)',
                          color: 'var(--color-lime)',
                        }}
                      >
                        -{plan.discountPercent}%
                      </span>
                    </div>
                    {savings > 0 && (
                      <p className="text-xs mt-1" style={{ color: 'var(--color-gray-600)' }}>
                        Vous économisez {savings.toFixed(2)}€ par rapport au tarif normal.
                      </p>
                    )}
                  </div>

                  {/* Features list */}
                  <div className="px-6 py-5">
                    <p
                      className="text-xs font-semibold uppercase tracking-wider mb-4"
                      style={{ color: 'var(--color-gray-600)' }}
                    >
                      Ce qui est inclus
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5">
                          <span
                            className="inline-flex items-center justify-center w-5 h-5 rounded-full shrink-0 mt-0.5"
                            style={{ backgroundColor: 'var(--color-lime-soft)' }}
                          >
                            <Check size={11} style={{ color: 'var(--color-dark)' }} aria-hidden="true" />
                          </span>
                          <span className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Sidebar urgency pill + guarantee badge */}
                  <SidebarCountdown />

                  {/* Card footer */}
                  <div
                    className="px-6 py-4"
                    style={{ borderTop: '1px solid var(--color-border)' }}
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between text-xs" style={{ color: 'var(--color-gray-600)' }}>
                        <span>Durée</span>
                        <span className="font-semibold" style={{ color: 'var(--color-ink)' }}>{plan.duration}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs" style={{ color: 'var(--color-gray-600)' }}>
                        <span>Activation</span>
                        <span className="font-semibold" style={{ color: 'var(--color-ink)' }}>Via WhatsApp</span>
                      </div>
                      <div className="flex items-center justify-between text-xs" style={{ color: 'var(--color-gray-600)' }}>
                        <span>Connexions simultanées</span>
                        <span className="font-semibold" style={{ color: 'var(--color-ink)' }}>1</span>
                      </div>
                      <div className="flex items-center justify-between text-xs border-t pt-2 mt-1" style={{ color: 'var(--color-gray-600)', borderColor: 'var(--color-border)' }}>
                        <span className="font-semibold" style={{ color: 'var(--color-ink)' }}>Total</span>
                        <span className="font-display font-bold text-base" style={{ color: 'var(--color-ink)' }}>
                          {plan.priceSale.toFixed(2)}€
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Change plan link */}
                <p className="text-center text-xs mt-4" style={{ color: 'var(--color-gray-600)' }}>
                  Ce forfait ne vous convient pas ?{' '}
                  <Link
                    href="/abonnements"
                    className="underline hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--color-ink-light)' }}
                  >
                    Changer de forfait
                  </Link>
                </p>
              </aside>
            </div>
          </div>
        </div>
        <SocialProofTicker />
      </main>

      <Footer />
    </>
  );
}
