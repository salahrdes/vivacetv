import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, X } from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'IPTV 4K España 2026 — Canales Ultra HD Sin Cortes | VivaceTV',
  description:
    'Ve la TV en 4K con VivaceTV IPTV: +22 000 canales en HD, 4K y 8K, tecnología anti-freeze, compatible Smart TV, Firestick, Android. Desde 22,99€.',
  keywords: [
    'iptv 4k españa',
    'comprar iptv 4k',
    'iptv ultra hd españa',
    'canales 4k iptv',
    'iptv sin cortes 4k',
    'iptv 4k smart tv',
    'iptv 4k firestick',
    'iptv 8k españa',
    'iptv hd 4k barato',
  ],
  alternates: { canonical: `${siteConfig.url}/iptv-4k` },
  openGraph: {
    title: 'IPTV 4K España 2026 — Canales Ultra HD Sin Cortes | VivaceTV',
    description:
      'IPTV 4K y 8K con VivaceTV: +22 000 canales Ultra HD, anti-freeze, compatible Smart TV 4K, Fire Stick 4K, Android TV. Desde 22,99€.',
    url: `${siteConfig.url}/iptv-4k`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: '¿Todas las suscripciones VivaceTV incluyen la calidad 4K?',
    answer:
      'Sí. Todas nuestras suscripciones (Bronze, Silver, Gold, Diamond) incluyen los canales en calidad HD, 4K y 8K. La calidad mostrada también depende de tu conexión a internet (25 Mbps mínimo recomendados para el 4K) y de la capacidad 4K de tu pantalla.',
  },
  {
    question: '¿Cuál es la diferencia entre 4K y 8K en IPTV?',
    answer:
      'El 4K (Ultra HD) ofrece una resolución de 3840×2160 píxeles, es decir cuatro veces la resolución del Full HD. El 8K dobla de nuevo esta resolución a 7680×4320 píxeles. En la práctica, la diferencia es perceptible principalmente en pantallas de 65 pulgadas y más, y requiere una conexión de 50 Mbps mínimo.',
  },
  {
    question: 'Mi IPTV 4K se corta a menudo — ¿cómo solucionar este problema?',
    answer:
      'Los cortes en IPTV 4K generalmente se deben a una conexión a internet insuficiente o inestable. Verifica tu velocidad (prueba en speedtest.net), acerca tu dispositivo al router o usa un cable Ethernet. VivaceTV integra la tecnología AntiFreeze 10.0 que reduce significativamente los bufferings.',
  },
  {
    question: '¿El IPTV 4K está disponible en iPhone y iPad?',
    answer:
      'Sí. Con la aplicación GSE Smart IPTV o IPTV Smarters Pro en tu iPhone o iPad compatible 4K, puedes disfrutar de los canales VivaceTV en 4K. El Apple TV 4K es también una excelente opción para ver el IPTV en 4K en tu televisor.',
  },
  {
    question: '¿Necesito equipamiento especial para el IPTV 4K?',
    answer:
      'No. Solo necesitas una pantalla 4K (TV, monitor), una conexión a internet de 25 Mbps mínimo, y una aplicación IPTV compatible 4K como TiviMate o GSE Smart IPTV. Una suscripción VivaceTV hace el resto.',
  },
];

const devices = [
  {
    title: 'Smart TV 4K (Samsung, LG, Sony, Philips)',
    desc: 'Las Smart TV 4K modernas soportan nativamente el IPTV mediante sus aplicaciones integradas o mediante aplicaciones descargables (IPTV Smarters, Smart IPTV). No se necesita ningún dispositivo adicional. Compatible con todos los modelos recientes de Samsung (Tizen), LG (webOS) y Sony (Android TV).',
  },
  {
    title: 'Cajas Android TV 4K',
    desc: 'Las cajas Android TV 4K como el NVIDIA Shield TV Pro o el Xiaomi Mi Box S ofrecen el mejor rendimiento para el IPTV 4K. Permiten instalar TiviMate, la mejor aplicación IPTV del mercado, y ofrecen una fluidez de reproducción excepcional.',
  },
  {
    title: 'Amazon Fire TV Stick 4K',
    desc: 'El Amazon Fire TV Stick 4K Max es un accesorio asequible (~50€) que transforma cualquier TV HDMI en Smart TV 4K. Compatible con TiviMate e IPTV Smarters Pro mediante sideloading. Recomendado por su excelente relación rendimiento/precio.',
  },
  {
    title: 'Apple TV 4K',
    desc: 'El Apple TV 4K (3ª generación) es la mejor opción para los usuarios de Apple. Compatible con GSE Smart IPTV disponible en el App Store. Ofrece una calidad de emisión 4K HDR notable y se integra perfectamente en el ecosistema Apple.',
  },
  {
    title: 'PC y ordenadores',
    desc: 'En PC (Windows/Mac) y Linux, puedes ver el IPTV 4K mediante VLC Media Player (gratuito), IPTV Smarters (versión web) o Kodi con el add-on PVR IPTV Simple Client. Se recomiendan una tarjeta gráfica reciente y una conexión estable de 25 Mbps.',
  },
];

const speedRows = [
  { quality: 'SD (480p)', speed: '3 Mbps', desc: 'Calidad básica' },
  { quality: 'HD (720p / 1080p)', speed: '10 Mbps', desc: 'Mínimo recomendado' },
  { quality: '4K Ultra HD', speed: '25 Mbps', desc: 'Fibra recomendada' },
  { quality: '8K', speed: '50 Mbps', desc: 'Fibra necesaria' },
];

const channels4K = [
  { cat: 'Deportes', channels: ['DAZN 4K', 'Movistar+ Deportes 4K', 'Eurosport 4K', 'LaLiga TV 4K'] },
  { cat: 'Cine & Series', channels: ['Movistar+ Cine 4K', 'Canal+ 4K', 'Canales UHD Premium', 'VOD 4K VivaceTV'] },
  { cat: 'Generalistas & Internacionales', channels: ['Canales españoles HD/4K', 'Canales europeos 4K', 'Canales árabes 4K', 'Canales americanos 4K'] },
];

const comparisonRows = [
  { critere: 'Precio mensual', iptv: 'Desde 3,75€/mes', cable: '~25-40€/mes', satellite: '~30-50€/mes' },
  { critere: 'Instalación', iptv: 'Inmediata (5 min)', cable: 'Técnico requerido', satellite: 'Técnico + antena' },
  { critere: 'Contenido 4K', iptv: '+22 000 canales + 8K', cable: 'Limitado (algunos canales)', satellite: 'Limitado (algunos canales)' },
  { critere: 'Compromiso', iptv: 'Sin compromiso', cable: '12-24 meses', satellite: '12-24 meses' },
  { critere: 'Multi-dispositivos', iptv: true, cable: false, satellite: false },
  { critere: 'VOD incluida', iptv: '+160 000 contenidos', cable: 'Opción de pago', satellite: 'Opción de pago' },
];

const plans = [
  { name: 'Bronze', duration: '3 meses', price: '22,99€', href: '/commander/bronze' },
  { name: 'Silver', duration: '6 meses', price: '34,99€', href: '/commander/silver' },
  { name: 'Gold', duration: '12 meses', price: '44,99€', href: '/commander/gold', popular: true },
  { name: 'Diamond', duration: '24 meses', price: '74,99€', href: '/commander/diamond' },
];

export default function IPTV4KPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((i) => ({
              '@type': 'Question',
              name: i.question,
              acceptedAnswer: { '@type': 'Answer', text: i.answer },
            })),
          }),
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Inicio', href: '/' },
          { name: 'IPTV 4K España', href: '/iptv-4k' },
        ]}
      />
      <Header />

      <main id="main-content">
        <PageHero
          label="IPTV 4K & 8K"
          title="IPTV 4K en España —"
          titleHighlight="Calidad Cine en Todos Tus Dispositivos"
          subtitle="VivaceTV ofrece canales en HD, 4K y 8K para una experiencia televisiva sin compromisos. Compatible con todos los dispositivos 4K del mercado."
        />

        {/* Section 1 — Qué es el IPTV 4K */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              ¿Qué es el IPTV 4K?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              El IPTV 4K designa la emisión de canales de televisión y contenidos de vídeo en
              resolución Ultra HD (UHD) mediante internet. La resolución 4K corresponde a
              3840×2160 píxeles, es decir cuatro veces más detalle que una imagen Full HD
              (1920×1080). El resultado: imágenes de una nitidez excepcional, colores más ricos
              gracias al HDR, y una profundidad visual cercana a la experiencia de cine.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Comparado con el HD clásico (720p o 1080p), el 4K ofrece un nivel de detalle
              incomparable en las pantallas grandes. Las texturas, los rostros y los paisajes
              aparecen con una precisión impresionante. En una pantalla de 55 pulgadas y más,
              la diferencia es inmediatamente perceptible.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              VivaceTV va incluso más lejos ofreciendo flujos en{' '}
              <strong style={{ color: 'var(--color-ink)' }}>8K (7680×4320 píxeles)</strong> — la
              resolución más alta disponible, ideal para pantallas de 65 pulgadas y más. Todas
              nuestras suscripciones (Bronze, Silver, Gold, Diamond) incluyen el acceso a los
              canales HD, 4K y 8K sin coste adicional. Descubre nuestra{' '}
              <Link
                href="/comprar-iptv/premium"
                style={{ color: 'var(--color-lime)' }}
                className="underline"
              >
                oferta premium
              </Link>{' '}
              para la mejor experiencia 4K/8K.
            </p>
          </div>
        </section>

        {/* Section 2 — Dispositivos compatibles */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              ¿Qué Dispositivos Soportan el IPTV 4K?
            </h2>
            <div className="flex flex-col gap-4">
              {devices.map((d, idx) => (
                <div
                  key={d.title}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 12,
                    padding: 20,
                  }}
                >
                  <h3
                    className="font-display font-bold text-base mb-2 flex items-center gap-2"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{
                        backgroundColor: 'var(--color-lime)',
                        color: 'var(--color-dark)',
                      }}
                    >
                      {idx + 1}
                    </span>
                    {d.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm" style={{ color: 'var(--color-ink-light)' }}>
              Para el detalle de la configuración en cada dispositivo, consulta nuestra{' '}
              <Link
                href="/mejor-app-iptv"
                style={{ color: 'var(--color-lime)' }}
                className="underline"
              >
                guía de las mejores aplicaciones IPTV
              </Link>{' '}
              y nuestra{' '}
              <Link
                href="/guia-iptv/installation-iptv"
                style={{ color: 'var(--color-lime)' }}
                className="underline"
              >
                guía de instalación completa
              </Link>.
            </p>
          </div>
        </section>

        {/* Section 3 — Conexión a internet */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              ¿Qué Conexión a Internet se Necesita para el IPTV 4K?
            </h2>
            <div className="overflow-x-auto rounded-xl mb-6" style={{ border: '1px solid var(--color-border)' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-dark)' }}>
                    {['Calidad', 'Velocidad mínima', 'Tipo de conexión'].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-left font-semibold"
                        style={{ color: 'var(--color-surface)' }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {speedRows.map((row, idx) => (
                    <tr
                      key={row.quality}
                      style={{
                        backgroundColor: idx % 2 === 0 ? 'var(--color-card)' : 'var(--color-surface-alt)',
                        borderTop: '1px solid var(--color-border)',
                      }}
                    >
                      <td
                        className="px-4 py-3 font-medium"
                        style={{
                          color: row.quality.includes('4K') ? 'var(--color-ink)' : 'var(--color-ink-light)',
                          fontWeight: row.quality.includes('4K') ? 600 : 400,
                        }}
                      >
                        {row.quality}
                      </td>
                      <td
                        className="px-4 py-3 font-semibold"
                        style={{ color: 'var(--color-lime)' }}
                      >
                        {row.speed}
                      </td>
                      <td className="px-4 py-3" style={{ color: 'var(--color-ink-light)' }}>
                        {row.desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div
              className="p-5 rounded-xl"
              style={{
                border: '2px solid var(--color-lime)',
                backgroundColor: 'var(--color-lime-soft)',
              }}
            >
              <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-ink)' }}>
                Consejos para optimizar tu conexión IPTV 4K:
              </p>
              <ul className="flex flex-col gap-1">
                {[
                  'Usa la banda de 5 GHz de tu Wi-Fi en lugar de la 2,4 GHz para menos interferencias',
                  'Acerca tu dispositivo al router o usa un cable Ethernet para máxima estabilidad',
                  'Evita las descargas en paralelo durante el visionado en 4K',
                  'Reinicia tu router regularmente para mantener un rendimiento óptimo',
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-2 text-sm" style={{ color: 'var(--color-ink-light)' }}>
                    <Check size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-lime)' }} />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4 — Canales 4K disponibles */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Los Canales 4K Disponibles con VivaceTV
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {channels4K.map((cat) => (
                <div
                  key={cat.cat}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 16,
                    padding: 20,
                  }}
                >
                  <h3
                    className="font-display font-bold text-base mb-4"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {cat.cat}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {cat.channels.map((ch) => (
                      <li
                        key={ch}
                        className="flex items-center gap-2 text-sm"
                        style={{ color: 'var(--color-ink-light)' }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: 'var(--color-lime)' }}
                        />
                        {ch}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm" style={{ color: 'var(--color-ink-light)' }}>
              El catálogo de canales 4K se actualiza regularmente. Nuestro equipo añade
              constantemente nuevos canales Ultra HD para enriquecer tu experiencia. El
              catálogo completo está disponible en nuestra{' '}
              <Link
                href="/comprar-iptv"
                style={{ color: 'var(--color-lime)' }}
                className="underline"
              >
                página de suscripciones
              </Link>.
            </p>
          </div>
        </section>

        {/* Section 5 — IPTV vs cable vs satélite */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              IPTV 4K vs Cable 4K vs Satélite 4K — Comparación
            </h2>
            <div className="overflow-x-auto rounded-xl" style={{ border: '1px solid var(--color-border)' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-dark)' }}>
                    {['Criterio', 'IPTV VivaceTV', 'Cable (Movistar/Vodafone)', 'Satélite (Astra)'].map((h, i) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-left font-semibold"
                        style={{ color: i === 1 ? 'var(--color-lime)' : 'var(--color-surface)' }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, idx) => (
                    <tr
                      key={row.critere}
                      style={{
                        backgroundColor: idx % 2 === 0 ? 'var(--color-card)' : 'var(--color-surface-alt)',
                        borderTop: '1px solid var(--color-border)',
                      }}
                    >
                      <td className="px-4 py-3 font-medium" style={{ color: 'var(--color-ink)' }}>
                        {row.critere}
                      </td>
                      {[row.iptv, row.cable, row.satellite].map((val, vi) => (
                        <td key={vi} className="px-4 py-3" style={{ color: 'var(--color-ink-light)' }}>
                          {typeof val === 'boolean' ? (
                            val ? (
                              <Check size={16} style={{ color: 'var(--color-lime)' }} />
                            ) : (
                              <X size={16} style={{ color: 'var(--color-gray-400)' }} />
                            )
                          ) : (
                            <span style={vi === 0 ? { color: 'var(--color-ink)', fontWeight: 600 } : {}}>
                              {val}
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm" style={{ color: 'var(--color-ink-light)' }}>
              El IPTV se impone como la solución más flexible y económica para acceder al 4K. Sin
              instalación técnica, sin compromiso y a un precio muy inferior a las ofertas de cable
              y satélite, VivaceTV ofrece un catálogo 4K mucho más rico. Compara nuestras ofertas
              con el{' '}
              <Link
                href="/mejor-iptv-espana"
                style={{ color: 'var(--color-lime)' }}
                className="underline"
              >
                comparativa de los mejores IPTV España
              </Link>.
            </p>
          </div>
        </section>

        {/* Section 6 — Comprar */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-4"
              style={{ color: 'var(--color-ink)' }}
            >
              Comprar tu Suscripción IPTV 4K
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-ink-light)' }}>
              Todas nuestras suscripciones incluyen el acceso a los canales HD, 4K y 8K. Elige
              la duración que más te convenga. Cuanto más larga es la suscripción, mejor es la
              relación calidad/precio.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: plan.popular ? '2px solid var(--color-lime)' : '1px solid var(--color-border)',
                    borderRadius: 16,
                    padding: 20,
                    position: 'relative',
                  }}
                >
                  {plan.popular && (
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap"
                      style={{
                        backgroundColor: 'var(--color-lime)',
                        color: 'var(--color-dark)',
                      }}
                    >
                      POPULAR
                    </span>
                  )}
                  <p
                    className="font-display font-bold text-lg mb-1"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {plan.name}
                  </p>
                  <p className="text-xs mb-3" style={{ color: 'var(--color-ink-light)' }}>
                    {plan.duration}
                  </p>
                  <p
                    className="font-display font-extrabold text-2xl mb-4"
                    style={{ color: 'var(--color-lime)' }}
                  >
                    {plan.price}
                  </p>
                  <Link
                    href={plan.href}
                    className="block text-center text-sm font-bold py-2 rounded-lg"
                    style={{
                      backgroundColor: plan.popular ? 'var(--color-lime)' : 'var(--color-surface-alt)',
                      color: plan.popular ? 'var(--color-dark)' : 'var(--color-ink)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    Comprar
                  </Link>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-center" style={{ color: 'var(--color-ink-light)' }}>
              Todos los planes incluyen: +22 000 canales · HD/4K/8K · AntiFreeze 10.0 · Soporte WhatsApp 24/7 · Prueba gratuita 24h disponible
            </p>
          </div>
        </section>

        {/* Section 7 — FAQ */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Preguntas Frecuentes — IPTV 4K
            </h2>
            <div className="flex flex-col gap-5">
              {faqItems.map((item) => (
                <div
                  key={item.question}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 12,
                    padding: 20,
                  }}
                >
                  <h3
                    className="font-semibold text-base mb-2"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {item.question}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { href: '/comprar-iptv/premium', label: 'Oferta Premium 4K/8K' },
                { href: '/mejor-app-iptv', label: 'Mejores apps IPTV' },
                { href: '/guia-iptv/installation-iptv', label: 'Guía instalación' },
                { href: '/comprar-iptv', label: 'Todas las suscripciones' },
                { href: '/mejor-iptv-espana', label: 'Comparativa IPTV España' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm px-4 py-2 rounded-lg font-medium"
                  style={{
                    backgroundColor: 'var(--color-lime-soft)',
                    color: 'var(--color-ink)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  {l.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
