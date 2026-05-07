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
  'Je ne sais pas encore',
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
    if (!form.name.trim()) e.name = 'Veuillez entrer votre nom.';
    if (!form.whatsapp.trim()) e.whatsapp = 'Veuillez entrer votre numéro WhatsApp.';
    if (!form.device) e.device = 'Veuillez sélectionner votre appareil.';
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
      `Bonjour ClarioTV, je souhaite un test gratuit 24h.`,
      `Nom : ${form.name}`,
      `Appareil : ${form.device}`,
      form.app ? `Application souhaitée : ${form.app}` : '',
      form.message ? `Message : ${form.message}` : '',
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
          Demande envoyée !
        </p>
        <p className="text-sm max-w-sm" style={{ color: 'var(--color-ink-light)' }}>
          Vous allez être redirigé vers WhatsApp. Notre équipe vous enverra vos accès de test sous quelques minutes.
        </p>
      </div>
    );
  }

  return (
    <form
      id="test-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Formulaire de demande de test gratuit IPTV"
      className="flex flex-col gap-5 p-8 rounded-2xl"
      style={{
        backgroundColor: 'var(--color-card)',
        border: '1px solid var(--color-border)',
      }}
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <InputField
          id="test-name"
          label="Nom complet"
          placeholder="Jean Dupont"
          required
          value={form.name}
          onChange={set('name')}
          error={errors.name}
        />
        <InputField
          id="test-whatsapp"
          label="Numéro WhatsApp"
          type="tel"
          placeholder="+33 6 00 00 00 00"
          required
          value={form.whatsapp}
          onChange={set('whatsapp')}
          error={errors.whatsapp}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <SelectField
          id="test-device"
          label="Type d'appareil"
          options={deviceOptions}
          required
          value={form.device}
          onChange={set('device')}
          error={errors.device}
        />
        <SelectField
          id="test-app"
          label="Application souhaitée (si connue)"
          options={appOptions}
          placeholder="Choisir une application…"
          value={form.app}
          onChange={set('app')}
        />
      </div>

      <TextareaField
        id="test-message"
        label="Message optionnel"
        placeholder="Des questions avant de commencer ? Décrivez votre situation…"
        rows={3}
        value={form.message}
        onChange={set('message')}
      />

      <p className="text-xs" style={{ color: 'var(--color-gray-600)' }}>
        Les champs marqués <span style={{ color: 'var(--color-lime)' }}>*</span> sont obligatoires.
        Aucun paiement requis. Aucun compte nécessaire.
      </p>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-xl font-semibold text-base transition-all duration-200 hover:opacity-90 active:scale-95"
        style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
      >
        <Send size={16} aria-hidden="true" />
        Demander mon test gratuit
      </button>
    </form>
  );
}
