'use client';

import { useState } from 'react';
import { signOut } from 'next-auth/react';
import { Search, Bell, Mail, LogOut } from 'lucide-react';

type Props = {
  userName: string;
  userRole: string;
};

export default function AdminHeader({ userName, userRole }: Props) {
  const [query, setQuery] = useState('');

  void userRole; // available for future role-based UI

  return (
    <header
      className="flex items-center justify-between px-6 py-3.5 shrink-0"
      style={{
        backgroundColor: '#FAFAF8',
        borderBottom: '1px solid #EBEBEA',
      }}
    >
      {/* Search bar */}
      <div
        className="flex items-center gap-2.5 px-4 py-2 rounded-xl"
        style={{ backgroundColor: '#F2F2F0', width: '280px' }}
      >
        <Search size={14} style={{ color: '#999994' }} aria-hidden="true" />
        <input
          type="search"
          placeholder="Rechercher…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-transparent text-sm outline-none"
          style={{ color: '#111110' }}
          aria-label="Rechercher"
        />
        <kbd
          className="text-xs px-1.5 py-0.5 rounded"
          style={{ backgroundColor: '#E5E5E3', color: '#999994', fontFamily: 'monospace' }}
        >
          ⌘F
        </kbd>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-2">
        {/* Notifications */}
        <button
          className="relative flex items-center justify-center w-9 h-9 rounded-xl transition-colors hover:bg-black/5"
          style={{ color: '#111110' }}
          aria-label="Notifications"
        >
          <Bell size={16} />
          <span
            className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
            style={{ backgroundColor: '#EF4444' }}
            aria-hidden="true"
          />
        </button>

        {/* Messages */}
        <button
          className="flex items-center justify-center w-9 h-9 rounded-xl transition-colors hover:bg-black/5"
          style={{ color: '#111110' }}
          aria-label="Messages"
        >
          <Mail size={16} />
        </button>

        {/* Divider */}
        <div className="w-px h-5 mx-1" style={{ backgroundColor: '#E5E5E3' }} aria-hidden="true" />

        {/* User + logout */}
        <div className="flex items-center gap-2.5">
          <span
            className="flex items-center justify-center w-8 h-8 rounded-full font-bold text-xs"
            style={{ backgroundColor: 'var(--color-lime)', color: '#111110' }}
            aria-hidden="true"
          >
            {userName.charAt(0).toUpperCase()}
          </span>
          <button
            onClick={() => signOut({ callbackUrl: '/admin/login' })}
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-colors hover:bg-black/5"
            style={{ color: '#999994' }}
            aria-label="Se déconnecter"
          >
            <LogOut size={13} aria-hidden="true" />
            Déconnexion
          </button>
        </div>
      </div>
    </header>
  );
}
