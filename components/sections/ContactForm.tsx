'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { InputField, SelectField, TextareaField } from '@/components/ui/FormField';
import { deviceOptions } from '@/config/contactInfo';
import { buildWhatsAppUrl } from '@/lib/utils';

type FormState = {
  name: string;
  email: string;
  whatsapp: string;
  device: string;
  subject: string;
  message: string;
};

const subjectOptions = [
  'Elegir mi plan',
  'Ayuda con la instalación',
  'Problema técnico',
  'Prueba gratis',
  'Consulta general',
  'Otro',
] as const;

const initialState: FormState = {
  name: '',
  email: '',
  whatsapp: '',
  device: '',
  subject: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof FormState) => (v: string) =>
    setForm((prev) => ({ ...prev, [key]: v }));

  function validate(): boolean {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Por favor, introduce tu nombre.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Dirección de email no válida.';
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = 'El mensaje debe tener al menos 10 caracteres.';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    // Persist lead in DB (fire-and-forget — user gets WhatsApp regardless)
    fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email || null,
        whatsapp: form.whatsapp || null,
        device: form.device || null,
        subject: form.subject || null,
        message: form.message,
      }),
    }).catch(() => { /* silent */ });

    const waText = [
      `Hola VivaceTV, te contacto desde el formulario del sitio web.`,
      form.subject ? `Asunto: ${form.subject}` : '',
      form.device ? `Dispositivo: ${form.device}` : '',
      form.message,
    ]
      .filter(Boolean)
      .join(' — ');

    setSubmitted(true);

    // Open WhatsApp after a short delay so the success state is visible
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
          ¡Mensaje enviado!
        </p>
        <p className="text-sm" style={{ color: 'var(--color-ink-light)' }}>
          Serás redirigido a WhatsApp. Nuestro equipo te responderá en menos de 15 minutos.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Formulario de contacto VivaceTV"
      className="flex flex-col gap-5 p-8 rounded-2xl"
      style={{
        backgroundColor: 'var(--color-card)',
        border: '1px solid var(--color-border)',
      }}
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <InputField
          id="name"
          label="Nombre completo"
          placeholder="Juan García"
          required
          value={form.name}
          onChange={set('name')}
          error={errors.name}
        />
        <InputField
          id="email"
          label="Dirección de email"
          type="email"
          placeholder="juan@ejemplo.es"
          required
          value={form.email}
          onChange={set('email')}
          error={errors.email}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <InputField
          id="whatsapp"
          label="Número de WhatsApp"
          type="tel"
          placeholder="+34 600 00 00 00"
          value={form.whatsapp}
          onChange={set('whatsapp')}
        />
        <SelectField
          id="device"
          label="Tipo de dispositivo"
          options={deviceOptions}
          value={form.device}
          onChange={set('device')}
        />
      </div>

      <SelectField
        id="subject"
        label="Asunto"
        options={subjectOptions}
        value={form.subject}
        onChange={set('subject')}
      />

      <TextareaField
        id="message"
        label="Mensaje"
        placeholder="Describe tu pregunta o solicitud…"
        required
        rows={5}
        value={form.message}
        onChange={set('message')}
        error={errors.message}
      />

      <p className="text-xs" style={{ color: 'var(--color-gray-600)' }}>
        Los campos marcados con <span style={{ color: 'var(--color-lime)' }}>*</span> son obligatorios.
        Tus datos se utilizan únicamente para gestionar tu consulta.
      </p>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-xl font-semibold text-base transition-all duration-200 hover:opacity-90 active:scale-95 self-start"
        style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
      >
        <Send size={16} aria-hidden="true" />
        Enviar mi consulta
      </button>
    </form>
  );
}
