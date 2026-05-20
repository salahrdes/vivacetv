'use client';

import { useState, useTransition } from 'react';
import { Save, Loader2, CheckCircle } from 'lucide-react';
import { saveAllSettings, type SettingsMap } from '@/lib/actions/settings';
import { FONT_OPTIONS, FONT_CONFIG } from '@/lib/settings-config';

type Props = { initial: SettingsMap };

const inputStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  border: '1px solid #E5E5E3',
  borderRadius: 10,
  padding: '8px 12px',
  fontSize: 13,
  color: '#111110',
  outline: 'none',
  width: '100%',
};

function Field({ label, id, hint, children }: { label: string; id: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-semibold" style={{ color: '#6B6B65' }}>{label}</label>
      {children}
      {hint && <p className="text-xs" style={{ color: '#C5C5C0' }}>{hint}</p>}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-5 p-6 rounded-2xl" style={{ backgroundColor: '#fff', border: '1px solid #E5E5E3' }}>
      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: '#C5C5C0' }}>{title}</p>
      {children}
    </div>
  );
}

/** Displays a live preview of the currently selected font */
function FontPreview({ value }: { value: string }) {
  return (
    <p
      className="text-base px-3 py-2 rounded-lg"
      style={{
        fontFamily: `'${value}', system-ui, sans-serif`,
        color: '#3D382F',
        backgroundColor: '#F5F5F1',
        border: '1px solid #E2E2DA',
      }}
    >
      VivaceTV — Suscripción IPTV España HD/4K
    </p>
  );
}

export default function SettingsForm({ initial }: Props) {
  const [settings, setSettings] = useState<SettingsMap>(initial);
  const [saved, setSaved] = useState(false);
  const [isPending, startTransition] = useTransition();

  function set(key: string) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setSettings((prev) => ({ ...prev, [key]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaved(false);
    startTransition(async () => {
      await saveAllSettings(settings);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-2xl">
      {/* Preload all 10 fonts for live admin preview only */}
      <style>{`@import url('https://fonts.googleapis.com/css2?${
        Object.values(FONT_CONFIG)
          .map(({ slug, weights }) => `family=${slug}:wght@${weights}`)
          .join('&')
      }&display=swap');`}</style>

      {/* Site identity */}
      <Section title="Identidad del sitio">
        <Field label="Título del sitio" id="site_title" hint="Mostrado en el navegador y en los resultados de Google">
          <input id="site_title" value={settings.site_title ?? ''} onChange={set('site_title')} style={inputStyle} placeholder="VivaceTV" />
        </Field>
        <Field label="Eslogan (tagline)" id="site_tagline">
          <input id="site_tagline" value={settings.site_tagline ?? ''} onChange={set('site_tagline')} style={inputStyle} placeholder="Tu IPTV España…" />
        </Field>
        <Field label="Descripción general" id="site_description" hint="Utilizada como meta descripción por defecto">
          <textarea id="site_description" value={settings.site_description ?? ''} onChange={set('site_description')} rows={3} style={{ ...inputStyle, resize: 'vertical' }} />
        </Field>
      </Section>

      {/* SEO */}
      <Section title="SEO por defecto">
        <Field label="Palabras clave principales" id="seo_keywords" hint="Separadas por comas">
          <input id="seo_keywords" value={settings.seo_keywords ?? ''} onChange={set('seo_keywords')} style={inputStyle} placeholder="iptv españa, suscripción iptv…" />
        </Field>
        <Field label="Imagen Open Graph (URL)" id="seo_og_image" hint="Imagen mostrada al compartir en redes sociales">
          <input id="seo_og_image" value={settings.seo_og_image ?? ''} onChange={set('seo_og_image')} style={inputStyle} placeholder="/uploads/og-image.jpg" />
        </Field>
        {settings.seo_og_image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={settings.seo_og_image} alt="OG preview" className="rounded-xl object-cover w-full" style={{ height: 120 }} />
        )}
      </Section>

      {/* Contact */}
      <Section title="Contacto y WhatsApp">
        <Field label="Email de contacto" id="contact_email">
          <input id="contact_email" type="email" value={settings.contact_email ?? ''} onChange={set('contact_email')} style={inputStyle} placeholder="contacto@vivacetv.es" />
        </Field>
        <Field label="Número de WhatsApp (sin +)" id="contact_whatsapp" hint="Ej.: 447476614523">
          <input id="contact_whatsapp" value={settings.contact_whatsapp ?? ''} onChange={set('contact_whatsapp')} style={inputStyle} placeholder="447476614523" />
        </Field>
      </Section>

      {/* Social */}
      <Section title="Redes sociales">
        <Field label="Facebook (URL)" id="social_facebook">
          <input id="social_facebook" value={settings.social_facebook ?? ''} onChange={set('social_facebook')} style={inputStyle} placeholder="https://facebook.com/vivacetv" />
        </Field>
        <Field label="Instagram (URL)" id="social_instagram">
          <input id="social_instagram" value={settings.social_instagram ?? ''} onChange={set('social_instagram')} style={inputStyle} placeholder="https://instagram.com/vivacetv" />
        </Field>
        <Field label="Twitter / X (URL)" id="social_twitter">
          <input id="social_twitter" value={settings.social_twitter ?? ''} onChange={set('social_twitter')} style={inputStyle} placeholder="https://x.com/vivacetv" />
        </Field>
      </Section>

      {/* Analytics */}
      <Section title="Analytics">
        <Field label="Google Analytics (GTAG ID)" id="analytics_gtag" hint="Ej.: G-XXXXXXXXXX">
          <input id="analytics_gtag" value={settings.analytics_gtag ?? ''} onChange={set('analytics_gtag')} style={inputStyle} placeholder="G-XXXXXXXXXX" />
        </Field>
      </Section>

      {/* Typography */}
      <Section title="Tipografía">
        <div className="grid sm:grid-cols-2 gap-5">

          {/* Display font */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#9B9B95' }}>
              Fuente de display (títulos)
            </label>
            <select
              name="font_display"
              value={settings.font_display ?? 'Mozilla Headline'}
              onChange={set('font_display')}
              className="rounded-xl px-4 py-3 text-sm outline-none border"
              style={{ borderColor: '#E2E2DA', backgroundColor: '#FBFBF7', color: '#111110' }}
            >
              {FONT_OPTIONS.map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
            <FontPreview value={settings.font_display ?? 'Mozilla Headline'} />
          </div>

          {/* Body font */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#9B9B95' }}>
              Fuente del cuerpo (texto)
            </label>
            <select
              name="font_body"
              value={settings.font_body ?? 'Inter'}
              onChange={set('font_body')}
              className="rounded-xl px-4 py-3 text-sm outline-none border"
              style={{ borderColor: '#E2E2DA', backgroundColor: '#FBFBF7', color: '#111110' }}
            >
              <option value="Inter">Inter (por defecto)</option>
              {FONT_OPTIONS.map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
            <FontPreview value={settings.font_body ?? 'Inter'} />
          </div>
        </div>
      </Section>

      {/* Save button */}
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm transition-all hover:opacity-90 disabled:opacity-50"
          style={{ backgroundColor: 'var(--color-lime)', color: '#111110' }}
        >
          {isPending ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
          Guardar ajustes
        </button>
        {saved && (
          <span className="flex items-center gap-1.5 text-sm font-medium" style={{ color: '#22C55E' }}>
            <CheckCircle size={14} /> ¡Guardado!
          </span>
        )}
      </div>
    </form>
  );
}
