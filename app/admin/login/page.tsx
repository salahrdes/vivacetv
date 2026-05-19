import type { Metadata } from 'next';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import AdminLoginForm from '@/components/admin/AdminLoginForm';

export const metadata: Metadata = {
  title: 'Connexion Admin — VivaceTV',
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string; error?: string }>;
}) {
  const session = await auth();
  if (session?.user) redirect('/admin/dashboard');

  const { callbackUrl, error } = await searchParams;

  return (
    <div
      className="min-h-screen flex"
      style={{ backgroundColor: '#111110' }}
    >
      {/* Left — branding panel */}
      <div
        className="hidden lg:flex flex-col justify-between w-[420px] shrink-0 p-10"
        style={{ borderRight: '1px solid rgba(255,255,255,0.06)' }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <span
            className="flex items-center justify-center w-8 h-8 rounded-lg font-extrabold text-sm"
            style={{ backgroundColor: 'var(--color-lime)', color: '#111110' }}
          >
            C
          </span>
          <span className="font-display font-bold text-lg" style={{ color: '#F5F5F1' }}>VivaceTV</span>
        </div>

        {/* Stats teaser */}
        <div className="flex flex-col gap-5">
          {[
            { label: 'Abonnés actifs',        value: '1 200+' },
            { label: 'Chaînes disponibles',   value: '22 000+'  },
            { label: 'Uptime',                value: '99.9%'  },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="font-display font-extrabold text-3xl" style={{ color: '#F5F5F1' }}>{value}</p>
              <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.35)' }}>{label}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
          © 2026 VivaceTV. Administration sécurisée.
        </p>
      </div>

      {/* Right — login form */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <span
              className="flex items-center justify-center w-7 h-7 rounded-lg font-bold text-xs"
              style={{ backgroundColor: 'var(--color-lime)', color: '#111110' }}
            >
              C
            </span>
            <span className="font-display font-bold" style={{ color: '#F5F5F1' }}>VivaceTV</span>
          </div>

          <h1 className="font-display font-bold text-2xl mb-1" style={{ color: '#F5F5F1' }}>
            Connexion
          </h1>
          <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Accédez à votre espace d&apos;administration.
          </p>

          <AdminLoginForm callbackUrl={callbackUrl} error={error} />
        </div>
      </div>
    </div>
  );
}
