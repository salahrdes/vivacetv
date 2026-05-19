/** Shared wrapper for all legal pages (/mentions-legales, /cgv, etc.) */

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';

type Section = {
  heading: string;
  paragraphs: string[];
};

type LegalPageLayoutProps = {
  label: string;
  title: string;
  subtitle: string;
  updatedAt: string;
  sections: Section[];
};

export default function LegalPageLayout({
  label,
  title,
  subtitle,
  updatedAt,
  sections,
}: LegalPageLayoutProps) {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero label={label} title={title} subtitle={subtitle} />

        <div className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Updated date */}
            <p
              className="text-xs mb-10 pb-6"
              style={{
                color: 'var(--color-gray-600)',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              Dernière mise à jour : {updatedAt}
            </p>

            {/* Legal note for developers */}
            {/* ⚠️ TODO (legal): The content below is placeholder professional copy.
                It MUST be reviewed and approved by a qualified legal professional
                before this site goes live. Do not rely on this content as legal advice. */}

            <div className="flex flex-col gap-10">
              {sections.map((section) => (
                <section key={section.heading}>
                  <h2
                    className="font-display font-bold text-xl mb-4 leading-snug"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {section.heading}
                  </h2>
                  <div className="flex flex-col gap-3">
                    {section.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="text-sm leading-relaxed"
                        style={{ color: 'var(--color-ink-light)' }}
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Contact box */}
            <div
              className="mt-12 p-6 rounded-2xl"
              style={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
              }}
            >
              <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-ink)' }}>
                Une question juridique ou légale ?
              </p>
              <p className="text-sm" style={{ color: 'var(--color-ink-light)' }}>
                Contactez-nous à{' '}
                <a
                  href="mailto:support@vivacetv.com"
                  className="font-medium hover:underline"
                  style={{ color: 'var(--color-ink)' }}
                >
                  support@vivacetv.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
