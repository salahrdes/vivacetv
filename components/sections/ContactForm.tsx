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
  'Choisir mon forfait',
  'Aide à l\'installation',
  'Problème technique',
  'Test gratuit',
  'Question générale',
  'Autre',
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
    if (!form.name.trim()) e.name = 'Veuillez entrer votre nom.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Adresse email invalide.';
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = 'Le message doit faire au moins 10 caractères.';
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
      `Bonjour VivaceTV, je vous contacte depuis le formulaire du site.`,
      form.subject ? `Sujet : ${form.subject}` : '',
      form.device ? `Appareil : ${form.device}` : '',
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
          Message envoyé !
        </p>
        <p className="text-sm" style={{ color: 'var(--color-ink-light)' }}>
          Vous allez être redirigé vers WhatsApp. Notre équipe vous répondra sous 15 minutes.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Formulaire de contact VivaceTV"
      className="flex flex-col gap-5 p-8 rounded-2xl"
      style={{
        backgroundColor: 'var(--color-card)',
        border: '1px solid var(--color-border)',
      }}
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <InputField
          id="name"
          label="Nom complet"
          placeholder="Jean Dupont"
          required
          value={form.name}
          onChange={set('name')}
          error={errors.name}
        />
        <InputField
          id="email"
          label="Adresse email"
          type="email"
          placeholder="jean@exemple.fr"
          required
          value={form.email}
          onChange={set('email')}
          error={errors.email}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <InputField
          id="whatsapp"
          label="Numéro WhatsApp"
          type="tel"
          placeholder="+33 6 00 00 00 00"
          value={form.whatsapp}
          onChange={set('whatsapp')}
        />
        <SelectField
          id="device"
          label="Type d'appareil"
          options={deviceOptions}
          value={form.device}
          onChange={set('device')}
        />
      </div>

      <SelectField
        id="subject"
        label="Sujet"
        options={subjectOptions}
        value={form.subject}
        onChange={set('subject')}
      />

      <TextareaField
        id="message"
        label="Message"
        placeholder="Décrivez votre question ou demande…"
        required
        rows={5}
        value={form.message}
        onChange={set('message')}
        error={errors.message}
      />

      <p className="text-xs" style={{ color: 'var(--color-gray-600)' }}>
        Les champs marqués <span style={{ color: 'var(--color-lime)' }}>*</span> sont obligatoires.
        Vos données sont utilisées uniquement pour traiter votre demande.
      </p>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-xl font-semibold text-base transition-all duration-200 hover:opacity-90 active:scale-95 self-start"
        style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
      >
        <Send size={16} aria-hidden="true" />
        Envoyer ma demande
      </button>
    </form>
  );
}
