import type { Metadata } from 'next';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';

export const metadata: Metadata = {
  title: { default: 'Admin — VivaceTV', template: '%s | Admin VivaceTV' },
  robots: { index: false, follow: false },
};

export default async function AdminProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect('/admin/login');
  }

  return (
    <div className="flex h-screen overflow-hidden" style={{ backgroundColor: '#FAFAF8' }}>
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main area */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <AdminHeader
          userName={session.user.name ?? 'Admin'}
          userRole={session.user.role ?? 'EDITOR'}
        />

        <main
          id="admin-main"
          className="flex-1 overflow-y-auto"
          style={{ backgroundColor: '#FAFAF8' }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
