import Link from 'next/link';
import { buildWhatsAppUrl } from '@/lib/utils';
import { siteConfig } from '@/config/site';

const footerColumns = [
  {
    heading: 'Servicios',
    links: [
      { label: 'Suscripciones IPTV', href: '/abonnements' },
      { label: 'Prueba gratis 24h',  href: '/test-gratuit' },
      { label: 'Guía de instalación', href: '/guide-iptv' },
      { label: 'Aplicaciones compatibles', href: '/guide-iptv#applications' },
    ],
  },
  {
    heading: 'Información',
    links: [
      { label: 'Aviso legal',                  href: '/mentions-legales' },
      { label: 'Condiciones generales',         href: '/conditions-generales' },
      { label: 'Política de privacidad',        href: '/politique-confidentialite' },
      { label: 'Política de reembolso',         href: '/politique-remboursement' },
      { label: 'DMCA',                          href: '/dmca' },
    ],
  },
  {
    heading: 'Soporte',
    links: [
      { label: 'Contacto',               href: '/contact' },
      { label: 'FAQ',                    href: '/faq' },
      { label: 'Asistencia WhatsApp', href: buildWhatsAppUrl('Hola VivaceTV, necesito asistencia'), external: true },
      { label: 'Soporte 24/7',           href: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: 'var(--color-dark)', borderTop: '1px solid rgba(255,255,255,0.06)' }}
      aria-label="Pie de página"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-1 font-display font-extrabold text-xl"
              style={{ color: 'var(--color-ink)' }}
              aria-label="VivaceTV"
            >
              Vivace
              <span
                className="inline-block w-2 h-2 rounded-full mb-0.5 ml-0.5"
                style={{ backgroundColor: 'var(--color-lime)' }}
                aria-hidden="true"
              />
              TV
            </Link>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'var(--color-gray-400)' }}>
              Tu solución IPTV España para disfrutar de una experiencia fluida, moderna y
              compatible con todos tus dispositivos favoritos.
            </p>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h3
                className="text-xs font-semibold uppercase tracking-widest mb-5"
                style={{ color: 'var(--color-gray-600)', letterSpacing: '0.1em' }}
              >
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {(link as { external?: boolean }).external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm transition-colors duration-150 hover:opacity-100"
                        style={{ color: 'var(--color-gray-400)' }}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm transition-colors duration-150 hover:opacity-100"
                        style={{ color: 'var(--color-gray-400)' }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p className="text-xs" style={{ color: 'var(--color-gray-600)' }}>
            © {siteConfig.legal.year} {siteConfig.legal.company}. Todos los derechos reservados.
          </p>
          <p className="text-xs" style={{ color: 'var(--color-gray-600)' }}>
            <Link href="/politique-confidentialite" className="hover:underline">
              Privacidad
            </Link>
            {' · '}
            <Link href="/mentions-legales" className="hover:underline">
              Aviso legal
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
