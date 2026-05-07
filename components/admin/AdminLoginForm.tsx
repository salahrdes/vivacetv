'use client';

import { useState, useTransition } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, LogIn, AlertCircle } from 'lucide-react';

type Props = {
  callbackUrl?: string;
  error?: string;
};

const errorMessages: Record<string, string> = {
  CredentialsSignin: 'Email ou mot de passe incorrect.',
  Default: 'Une erreur est survenue. Veuillez réessayer.',
};

export default function AdminLoginForm({ callbackUrl, error: initialError }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [clientError, setClientError] = useState<string | null>(null);

  const displayError = clientError
    ?? (initialError ? (errorMessages[initialError] ?? errorMessages.Default) : null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setClientError(null);
    if (!email.trim() || !password.trim()) {
      setClientError('Veuillez remplir tous les champs.');
      return;
    }
    startTransition(async () => {
      const result = await signIn('credentials', { email, password, redirect: false });
      if (result?.error) { setClientError(errorMessages.CredentialsSignin); return; }
      router.push(callbackUrl ?? '/admin/dashboard');
      router.refresh();
    });
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Formulaire de connexion" className="flex flex-col gap-4">

      {/* Error */}
      {displayError && (
        <div
          className="flex items-center gap-2.5 p-3.5 rounded-xl text-sm"
          style={{ backgroundColor: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#FCA5A5' }}
          role="alert"
        >
          <AlertCircle size={14} className="shrink-0" aria-hidden="true" />
          {displayError}
        </div>
      )}

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="login-email" className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.45)' }}>
          Email
        </label>
        <input
          id="login-email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="admin@clariotv.fr"
          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
          style={{
            backgroundColor: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.09)',
            color: '#F5F5F1',
          }}
        />
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="login-password" className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.45)' }}>
          Mot de passe
        </label>
        <div className="relative">
          <input
            id="login-password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full px-4 py-3 pr-11 rounded-xl text-sm outline-none transition-all"
            style={{
              backgroundColor: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.09)',
              color: '#F5F5F1',
            }}
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1"
            style={{ color: 'rgba(255,255,255,0.3)' }}
            aria-label={showPassword ? 'Masquer' : 'Afficher'}
          >
            {showPassword ? <EyeOff size={14} aria-hidden="true" /> : <Eye size={14} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Hint */}
      <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
        Email par défaut : <span style={{ color: 'rgba(255,255,255,0.4)' }}>admin@clariotv.fr</span><br />
        Mot de passe par défaut : <span style={{ color: 'rgba(255,255,255,0.4)' }}>ChangeMe123!</span>
      </p>

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed mt-1"
        style={{ backgroundColor: 'var(--color-lime)', color: '#111110' }}
      >
        <LogIn size={14} aria-hidden="true" />
        {isPending ? 'Connexion…' : 'Se connecter'}
      </button>
    </form>
  );
}
