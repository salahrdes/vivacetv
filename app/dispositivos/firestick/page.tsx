import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'IPTV Firestick España — Guía de Instalación Completa | VivaceTV',
  description: 'Instala IPTV en tu Amazon Firestick en España. Guía paso a paso. Compatible con Fire TV Stick 4K. Prueba gratis 24h sin tarjeta. Soporte 24/7 por WhatsApp.',
  keywords: ['iptv firestick españa', 'instalar iptv firestick', 'iptv fire tv stick', 'configurar iptv firestick'],
  alternates: { canonical: `${siteConfig.url}/dispositivos/firestick` },
  openGraph: { title: 'IPTV Firestick España — Guía de Instalación Completa', locale: 'es_ES', url: `${siteConfig.url}/dispositivos/firestick` },
};

export default function FirestickPage() {
  return (
    <main className="min-h-screen bg-[var(--color-surface)]">
      <section className="py-20 px-4 text-center bg-[var(--color-dark)]">
        <h1 className="font-display text-4xl md:text-6xl font-bold text-[var(--color-ink)] mb-6 max-w-4xl mx-auto">
          IPTV en Firestick España —{' '}
          <span style={{ color: 'var(--color-lime)' }}>Instala en 5 Minutos</span>
        </h1>
        <p className="text-[var(--color-ink-light)] text-xl max-w-2xl mx-auto mb-10">
          Compatible con Amazon Fire TV Stick, Fire TV Stick 4K y Fire TV Cube.
          Instalación sencilla, soporte por WhatsApp incluido.
        </p>
        <a href="/prueba-gratis" className="inline-block px-8 py-4 rounded-xl font-semibold text-white" style={{ background: 'var(--color-lime)' }}>
          Prueba Gratis 24h
        </a>
      </section>
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-[var(--color-ink)] text-center mb-10">Instalación en Firestick</h2>
        <div className="space-y-4">
          {[
            { n: '1', t: 'Activa Apps de Fuentes Desconocidas', d: 'Ve a Ajustes → Mi Fire TV → Opciones de desarrollador → Apps de fuentes desconocidas → ON' },
            { n: '2', t: 'Descarga Downloader', d: 'Busca "Downloader" en el App Store del Firestick e instálalo.' },
            { n: '3', t: 'Instala IPTV Smarters', d: 'Abre Downloader, escribe la URL que te enviamos por WhatsApp e instala la app.' },
            { n: '4', t: 'Activa con tus Credenciales', d: 'Introduce tu usuario y contraseña de VivaceTV. ¡Listo en minutos!' },
          ].map(({ n, t, d }) => (
            <div key={n} className="flex gap-4 p-5 rounded-xl border" style={{ background: 'var(--color-card)', borderColor: 'var(--color-border)' }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0" style={{ background: 'var(--color-lime)' }}>{n}</div>
              <div><h3 className="font-semibold text-[var(--color-ink)] mb-1">{t}</h3><p className="text-sm text-[var(--color-ink-light)]">{d}</p></div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-12 px-4 text-center" style={{ background: 'var(--color-dark)' }}>
        <a href="/comprar-iptv" className="inline-block px-10 py-4 rounded-xl font-bold text-white" style={{ background: 'var(--color-lime)' }}>
          Comprar IPTV España
        </a>
      </section>
    </main>
  );
}
