'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  FileText,
  MessageSquare,
  Settings,
  Image,
  PlusCircle,
} from 'lucide-react';

const navItems = [
  { label: 'Dashboard',    href: '/admin/dashboard',  icon: LayoutDashboard },
  { label: 'Commandes',    href: '/admin/commandes',  icon: ShoppingCart    },
  { label: 'Leads',        href: '/admin/leads',      icon: Users           },
  { label: 'Articles',     href: '/admin/blog',       icon: FileText        },
  { label: 'Pages',        href: '/admin/pages',      icon: MessageSquare   },
  { label: 'Médiathèque',  href: '/admin/media',      icon: Image           },
  { label: 'Paramètres',   href: '/admin/parametres', icon: Settings        },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="flex flex-col w-[220px] shrink-0 h-screen"
      style={{ backgroundColor: '#111110', borderRight: '1px solid rgba(255,255,255,0.05)' }}
    >
      {/* Logo */}
      <div className="flex items-center justify-between px-5 py-5">
        <div className="flex items-center gap-2">
          <span
            className="flex items-center justify-center w-7 h-7 rounded-lg"
            style={{ backgroundColor: 'var(--color-lime)' }}
            aria-hidden="true"
          >
            <span className="font-extrabold text-sm" style={{ color: '#111110' }}>C</span>
          </span>
          <span className="font-display font-bold text-base" style={{ color: '#F5F5F1' }}>
            ClarioTV
          </span>
        </div>
        <button
          aria-label="Menu"
          className="opacity-40 hover:opacity-70 transition-opacity"
          style={{ color: '#F5F5F1' }}
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Nav items */}
      <nav className="flex-1 px-3 py-2 overflow-y-auto" aria-label="Navigation admin">
        <ul className="flex flex-col gap-0.5">
          {navItems.map(({ label, href, icon: Icon }) => {
            const isActive = pathname === href || pathname.startsWith(href + '/');
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150"
                  style={{
                    color:           isActive ? '#111110'           : 'rgba(255,255,255,0.45)',
                    backgroundColor: isActive ? 'var(--color-lime)' : 'transparent',
                  }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon size={15} aria-hidden="true" />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Divider + Add section */}
        <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <button
            className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-xl w-full transition-opacity hover:opacity-70"
            style={{ color: 'rgba(255,255,255,0.3)' }}
          >
            <PlusCircle size={13} aria-hidden="true" />
            Ajouter une section
          </button>
        </div>
      </nav>

      {/* Quick stats card */}
      <div className="px-3 pb-3">
        <div
          className="rounded-2xl p-4"
          style={{ backgroundColor: '#1C1C1A', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <span className="text-xs font-semibold" style={{ color: '#F5F5F1' }}>
            Raccourcis
          </span>
          <div className="flex flex-col gap-1 mt-3">
            {[
              { label: 'Nouvel article',  href: '/admin/blog/nouveau'  },
              { label: 'Nouvelle page',   href: '/admin/pages/nouveau' },
              { label: 'Paramètres site', href: '/admin/parametres'    },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center px-2 py-1.5 rounded-lg text-xs transition-opacity hover:opacity-70"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* User row */}
      <div
        className="flex items-center gap-3 px-4 py-4"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <span
          className="flex items-center justify-center w-8 h-8 rounded-full shrink-0 font-bold text-xs"
          style={{ backgroundColor: 'var(--color-lime)', color: '#111110' }}
          aria-hidden="true"
        >
          A
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold truncate" style={{ color: '#F5F5F1' }}>
            Super Admin
          </p>
          <p className="text-xs truncate" style={{ color: 'rgba(255,255,255,0.3)' }}>
            admin@clariotv.fr
          </p>
        </div>
        <Link href="/admin/parametres" aria-label="Paramètres">
          <Settings size={14} className="opacity-30 hover:opacity-60 transition-opacity" style={{ color: '#F5F5F1' }} />
        </Link>
      </div>
    </aside>
  );
}
