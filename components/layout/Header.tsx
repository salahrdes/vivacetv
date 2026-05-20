'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/config/navigation';
import Button from '@/components/ui/Button';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  /* Lock body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-surface/95 backdrop-blur-md shadow-sm border-b border-border'
            : 'bg-surface border-b border-border'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-1 font-display font-extrabold text-xl text-ink shrink-0"
              aria-label="VivaceTV — Inicio"
            >
              Vivace
              <span
                className="inline-block w-2 h-2 rounded-full mb-0.5 ml-0.5"
                style={{ backgroundColor: 'var(--color-lime)' }}
                aria-hidden="true"
              />
              TV
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-ink-light hover:text-ink rounded-lg transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button href="/commander/gold" size="sm" variant="primary">
                Comprar
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-ink hover:bg-card transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <Menu size={22} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          aria-modal="true"
          role="dialog"
          aria-label="Menú de navegación"
          id="mobile-menu"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-ink/30 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          {/* Panel */}
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-surface flex flex-col shadow-2xl">
            {/* Panel header */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-border shrink-0">
              <Link
                href="/"
                className="font-display font-extrabold text-xl text-ink"
                onClick={() => setMobileOpen(false)}
              >
                Vivace
                <span
                  className="inline-block w-2 h-2 rounded-full mb-0.5 ml-0.5"
                  style={{ backgroundColor: 'var(--color-lime)' }}
                  aria-hidden="true"
                />
                TV
              </Link>
              <button
                type="button"
                className="flex items-center justify-center w-10 h-10 rounded-lg text-ink hover:bg-card transition-colors"
                onClick={() => setMobileOpen(false)}
                aria-label="Cerrar menú"
              >
                <X size={22} aria-hidden="true" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 px-4 py-6 flex flex-col gap-1 overflow-y-auto" aria-label="Navegación móvil">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-base font-medium text-ink-light hover:text-ink hover:bg-card rounded-xl transition-colors duration-150"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="px-6 pb-8 pt-4 border-t border-border flex flex-col gap-3 shrink-0">
              <Button
                href="/commander/gold"
                size="lg"
                variant="primary"
                className="w-full"
                onClick={() => setMobileOpen(false)}
              >
                Comprar ahora
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
