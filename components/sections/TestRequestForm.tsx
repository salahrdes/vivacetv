'use client';

import { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';
import { InputField, SelectField, TextareaField } from '@/components/ui/FormField';
import { deviceOptions } from '@/config/contactInfo';
import { buildWhatsAppUrl } from '@/lib/utils';

const appOptions = [
  'IPTV Smarters Pro',
  'TiviMate',
  'GSE Smart IPTV',
  'Smart IPTV (SIPTV)',
  'VLC Media Player',
  'Aún no lo sé',
] as const;

type FormState = {
  name: string;
  whatsapp: string;
  device: string;
  app: string;
  message: string;
};

const initial: FormState = { name: '', whatsapp: '', device: '', app: '', message: '' };

export default function TestRequestForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof FormState) => (v: string) =>
    setForm((prev) => ({ ...prev, [key]: v }));

  function validate(): boolean {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Por favor, introduce tu nombre.';
    if (!form.whatsapp.trim()) e.whatsapp = 'Por favor, introduce tu número de WhatsApp.';
    if (!form.device) e.device = 'Por favor, selecciona tu dispositivo.';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    // Persist test-gratuit lead in DB (fire-and-forget)
    fetch('/api/test-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        whatsapp: form.whatsapp,
        device: form.device,
        app: form.app || null,
        message: form.message || null,
      }),
    }).catch(() => { /* silent */ });

    const waText = [
      `Hola VivaceTV, quiero una prueba gratis de 24h.`,
      `Nombre: ${form.name}`,
      `Dispositivo: ${form.device}`,
      form.app ? `Aplicación deseada: ${form.app}` : '',
      form.message ? `Mensaje: ${form.message}` : '',
    ]
      .filter(Boolean)
      .join(' — ');

    setSubmitted(true);
    setTimeout(() => {
      window.open(buildWhatsAppUrl(waText), '_blank', 'noopener,noreferrer');
    }, 800);
  }

  if (submitted) {
    return (
      <div
        className="flex flex-col items-center gap-4 p-10 rounded-2xl text-center"
        style={{
          backgroundColor: 'var(--color-card)',
          border: '1px solid var(--color-border)',
        }}
        role="status"
        aria-live="polite"
      >
        <CheckCircle size={40} style={{ color: 'var(--color-lime)' }} aria-hidden="true" />
        <p className="font-display font-bold text-xl" style={{ color: 'var(--color-ink)' }}>
          ¡Solicitud enviada!
        </p>
        <p className="text-sm max-w-sm" style={{ color: 'var(--color-ink-light)' }}>
          Serás redirigido a WhatsApp. Nuestro equipo te enviará tus accesos de prueba en unos minutos.
        </p>
      </div>
    );
  }

  return (
    <form
      id="test-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Formulario de solicitud de prueba gratis IPTV"
      className="flex flex-col gap-5 p-8 rounded-2xl"
      style={{
        backgroundColor: 'var(--color-card)',
        border: '1px solid var(--color-border)',
      }}
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <InputField
          id="test-name"
          label="Nombre completo"
          placeholder="Juan García"
          required
          value={form.name}
          onChange={set('name')}
          error={errors.name}
        />
        <InputField
          id="test-whatsapp"
          label="Número de WhatsApp"
          type="tel"
          placeholder="+34 600 00 00 00"
          required
          value={form.whatsapp}
          onChange={set('whatsapp')}
          error={errors.whatsapp}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <SelectField
          id="test-device"
          label="Tipo de dispositivo"
          options={deviceOptions}
          required
          value={form.device}
          onChange={set('device')}
          error={errors.device}
        />
        <SelectField
          id="test-app"
          label="Aplicación deseada (si la conoces)"
          options={appOptions}
          placeholder="Elegir una aplicación…"
          value={form.app}
          onChange={set('app')}
        />
      </div>

      <TextareaField
        id="test-message"
        label="Mensaje opcional"
        placeholder="¿Tienes alguna pregunta antes de empezar? Describe tu situación…"
        rows={3}
        value={form.message}
        onChange={set('message')}
      />

      <p className="text-xs" style={{ color: 'var(--color-gray-600)' }}>
        Los campos marcados con <span style={{ color: 'var(--color-lime)' }}>*</span> son obligatorios.
        Sin pago requerido. Sin cuenta necesaria.
      </p>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-xl font-semibold text-base transition-all duration-200 hover:opacity-90 active:scale-95"
        style={{ backgroundColor: 'var(--color-lime)', color: '#FFFFFF' }}
      >
        <Send size={16} aria-hidden="true" />
        Solicitar mi prueba gratis
      </button>
    </form>
  );
}
