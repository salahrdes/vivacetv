import type { Metadata } from 'next';
import { Mail, MessageCircle, Clock, Globe } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { buildWhatsAppUrl } from '@/lib/utils';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import ContactForm from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Contact ClarioTV : assistance IPTV France | Support WhatsApp',
  description:
    "Contactez ClarioTV pour obtenir de l'aide avec votre abonnement IPTV France, votre installation ou le choix du forfait adapté à votre appareil.",
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    title: 'Contact ClarioTV : assistance IPTV France',
    description: "Contactez notre support disponible 24h/24 via WhatsApp ou le formulaire.",
    url: `${siteConfig.url}/contact`,
    type: 'website',
  },
};

const cards = [
  {
    icon: <MessageCircle size={22} aria-hidden="true" />,
    title: 'WhatsApp',
    value: '+44 747 661 4523',
    note: 'Réponse rapide sous 15 minutes',
    href: buildWhatsAppUrl('Bonjour ClarioTV'),
    hrefLabel: 'Envoyer un message',
  },
  {
    icon: <Mail size={22} aria-hidden="true" />,
    title: 'Email',
    value: 'support@clariotv.com',
    note: 'Réponse sous 24 heures',
    href: 'mailto:support@clariotv.com',
    hrefLabel: 'Envoyer un email',
  },
  {
    icon: <Clock size={22} aria-hidden="true" />,
    title: 'Horaires',
    value: '24h/24 — 7j/7',
    note: 'Support disponible en permanence',
  },
  {
    icon: <Globe size={22} aria-hidden="true" />,
    title: 'Service',
    value: 'France & Europe',
    note: "Service disponible dans toute l'Europe",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">

        <PageHero
          label="Contact"
          title="Contactez"
          titleHighlight="ClarioTV"
          subtitle="Une question avant de commander ? Besoin d'aide pour choisir votre forfait IPTV ou configurer votre appareil ? Notre équipe vous accompagne rapidement."
        />

        {/* Intro SEO section */}
        <section
          className="py-12 lg:py-16"
          style={{ backgroundColor: 'var(--color-surface-alt)' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-4"
              style={{ color: 'var(--color-ink)' }}
            >
              Contactez l&apos;équipe ClarioTV
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Vous avez une question sur votre abonnement IPTV, besoin d&apos;aide pour l&apos;installation
              ou souhaitez en savoir plus sur nos offres ? Notre équipe de support est disponible
              7 jours sur 7 pour vous accompagner.
            </p>
            <h3
              className="font-display font-semibold text-xl mb-3"
              style={{ color: 'var(--color-ink)' }}
            >
              Notre engagement
            </h3>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Chez ClarioTV, la satisfaction de nos abonnés est notre priorité absolue. Nous nous
              engageons à répondre à toutes vos demandes dans un délai maximum de 24 heures.
              Que ce soit pour une question technique, une demande de remboursement ou des
              informations sur nos abonnements IPTV premium, nous sommes là pour vous aider.
            </p>
            <h3
              className="font-display font-semibold text-xl mb-3"
              style={{ color: 'var(--color-ink)' }}
            >
              Comment nous contacter
            </h3>
            <ul
              className="list-disc pl-6 flex flex-col gap-2 text-base mb-4"
              style={{ color: 'var(--color-ink-light)' }}
            >
              <li>
                <strong>Support technique</strong> : Pour tout problème de connexion,
                configuration ou compatibilité avec votre appareil.
              </li>
              <li>
                <strong>Questions commerciales</strong> : Pour en savoir plus sur nos formules
                d&apos;abonnement IPTV et nos tarifs.
              </li>
              <li>
                <strong>Remboursements</strong> : Conformément à notre politique de remboursement
                sous 7 jours.
              </li>
            </ul>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Remplissez le formulaire ci-dessous et notre équipe vous répondra dans les meilleurs
              délais. Nous traitons chaque demande avec soin et confidentialité.
            </p>
          </div>
        </section>

        <div className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Two-column layout */}
            <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">

              {/* Form */}
              <div>
                <h2
                  className="font-display font-bold text-2xl mb-6"
                  style={{ color: 'var(--color-ink)' }}
                >
                  Envoyer un message
                </h2>
                <ContactForm />
              </div>

              {/* Info cards */}
              <div className="flex flex-col gap-5">
                <h2
                  className="font-display font-bold text-2xl"
                  style={{ color: 'var(--color-ink)' }}
                >
                  Informations de contact
                </h2>

                {cards.map((card) => (
                  <div
                    key={card.title}
                    className="flex gap-4 p-5 rounded-2xl"
                    style={{
                      backgroundColor: 'var(--color-card)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    <div
                      className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0"
                      style={{ backgroundColor: 'var(--color-lime-soft)', color: 'var(--color-dark)' }}
                    >
                      {card.icon}
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-wider mb-0.5"
                        style={{ color: 'var(--color-gray-600)' }}
                      >
                        {card.title}
                      </p>
                      {card.href ? (
                        <a
                          href={card.href}
                          target={card.href.startsWith('http') ? '_blank' : undefined}
                          rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="font-semibold text-sm hover:underline"
                          style={{ color: 'var(--color-ink)' }}
                        >
                          {card.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-sm" style={{ color: 'var(--color-ink)' }}>
                          {card.value}
                        </p>
                      )}
                      <p className="text-xs mt-0.5" style={{ color: 'var(--color-gray-600)' }}>
                        {card.note}
                      </p>
                    </div>
                  </div>
                ))}

                {/* WhatsApp CTA card */}
                <div
                  className="p-6 rounded-2xl flex flex-col gap-4"
                  style={{ backgroundColor: 'var(--color-dark)' }}
                >
                  <p
                    className="font-display font-bold text-base"
                    style={{ color: 'var(--color-surface)' }}
                  >
                    Besoin d&apos;une réponse rapide ?
                  </p>
                  <p className="text-sm" style={{ color: 'var(--color-gray-400)' }}>
                    Contactez-nous directement sur WhatsApp pour obtenir une assistance plus rapide.
                  </p>
                  <a
                    href={buildWhatsAppUrl('Bonjour ClarioTV')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90"
                    style={{ backgroundColor: '#25D366', color: '#fff' }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                    </svg>
                    Contacter sur WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
