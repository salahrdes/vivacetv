'use client';

import { useState } from 'react';
import { CheckCircle, ShoppingCart } from 'lucide-react';
import { InputField, SelectField, TextareaField } from '@/components/ui/FormField';
import { deviceOptions } from '@/config/contactInfo';
import { buildWhatsAppUrl } from '@/lib/utils';

type Props = {
  planName: string;
  planDuration: string;
  planPrice: number;
};

type FormState = {
  name: string;
  whatsapp: string;
  device: string;
  message: string;
};

const initial: FormState = { name: '', whatsapp: '', device: '', message: '' };

export default function CheckoutForm({ planName, planDuration, planPrice }: Props) {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof FormState) => (v: string) =>
    setForm((prev) => ({ ...prev, [key]: v }));

  function validate(): boolean {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Veuillez entrer votre nom.';
    if (!form.whatsapp.trim()) e.whatsapp = 'Veuillez entrer votre numéro WhatsApp.';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    // Persist order in DB (fire-and-forget — user gets WhatsApp regardless)
    fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        whatsapp: form.whatsapp,
        device: form.device,
        message: form.message || null,
        plan: planName,
        planDuration,
        planPrice,
      }),
    }).catch(() => { /* silent — WhatsApp flow continues */ });

    const waText = [
      `Bonjour VivaceTV, je souhaite commander l'abonnement ${planName} (${planDuration} — ${planPrice}€).`,
      `Nom : ${form.name}`,
      `Appareil : ${form.device}`,
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
        <CheckCircle size={44} style={{ color: 'var(--color-lime)' }} aria-hidden="true" />
        <p className="font-display font-bold text-xl" style={{ color: 'var(--color-ink)' }}>
          Commande envoyée !
        </p>
        <p className="text-sm max-w-sm" style={{ color: 'var(--color-ink-light)' }}>
          Vous allez être redirigé vers WhatsApp. Notre équipe vous contacte sous quelques minutes pour finaliser votre abonnement {planName}.
        </p>
      </div>
    );
  }

  return (
    <form
      id="checkout-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label={`Formulaire de commande abonnement ${planName}`}
      className="flex flex-col gap-5 p-8 rounded-2xl"
      style={{
        backgroundColor: 'var(--color-card)',
        border: '1px solid var(--color-border)',
      }}
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <InputField
          id="checkout-name"
          label="Nom complet"
          placeholder="Jean Dupont"
          required
          value={form.name}
          onChange={set('name')}
          error={errors.name}
        />
        <InputField
          id="checkout-whatsapp"
          label="Numéro WhatsApp"
          type="tel"
          placeholder="+33 6 00 00 00 00"
          required
          value={form.whatsapp}
          onChange={set('whatsapp')}
          error={errors.whatsapp}
        />
      </div>

      <SelectField
        id="checkout-device"
        label="Appareil principal (optionnel)"
        options={deviceOptions}
        value={form.device}
        onChange={set('device')}
      />

      <TextareaField
        id="checkout-message"
        label="Message optionnel"
        placeholder="Des questions ? Des précisions sur votre commande ?"
        rows={3}
        value={form.message}
        onChange={set('message')}
      />

      <p className="text-xs" style={{ color: 'var(--color-gray-600)' }}>
        Les champs marqués <span style={{ color: 'var(--color-lime)' }}>*</span> sont obligatoires.
        Aucun paiement en ligne requis — notre équipe vous contacte pour finaliser.
      </p>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-xl font-semibold text-base transition-all duration-200 hover:opacity-90 active:scale-95"
        style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
      >
        <ShoppingCart size={18} aria-hidden="true" />
        Commander l&apos;abonnement {planName}
      </button>
    </form>
  );
}
