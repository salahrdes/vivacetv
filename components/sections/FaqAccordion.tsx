'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqCategories } from '@/config/faq-page';
import { buildWhatsAppUrl } from '@/lib/utils';
import { cn } from '@/lib/utils';

function FaqItem({ question, answer, idx }: { question: string; answer: string; idx: number }) {
  const [open, setOpen] = useState(false);
  const btnId = `faq-btn-${idx}`;
  const panelId = `faq-panel-${idx}`;

  return (
    <div
      className="rounded-2xl overflow-hidden transition-colors duration-150"
      style={{
        backgroundColor: open ? 'var(--color-card)' : 'var(--color-surface)',
        border: '1px solid var(--color-border)',
      }}
    >
      <button
        id={btnId}
        type="button"
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span className="font-semibold text-sm leading-snug" style={{ color: 'var(--color-ink)' }}>
          {question}
        </span>
        <ChevronDown
          size={17}
          className={cn('shrink-0 transition-transform duration-200', open ? 'rotate-180' : '')}
          style={{ color: 'var(--color-lime)' }}
          aria-hidden="true"
        />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className={cn(open ? 'block' : 'hidden')}
      >
        <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
          {answer}
        </div>
      </div>
    </div>
  );
}

function CategoryTab({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-150',
        !active && 'hover:opacity-70',
      )}
      style={
        active
          ? { backgroundColor: 'var(--color-dark)', color: 'var(--color-lime)' }
          : { backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-ink-light)' }
      }
      aria-pressed={active}
    >
      {label}
    </button>
  );
}

export default function FaqAccordion() {
  const [activeCat, setActiveCat] = useState<string>('all');

  const allItems = faqCategories.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, catId: cat.id }))
  );
  const visibleItems =
    activeCat === 'all' ? allItems : allItems.filter((item) => item.catId === activeCat);

  return (
    <>
      {/* Category filter tabs */}
      <div
        className="flex gap-2 overflow-x-auto pb-2 mb-10 scrollbar-none"
        role="group"
        aria-label="Filtrer par catégorie"
      >
        <CategoryTab label="Toutes les questions" active={activeCat === 'all'} onClick={() => setActiveCat('all')} />
        {faqCategories.map((cat) => (
          <CategoryTab key={cat.id} label={cat.label} active={activeCat === cat.id} onClick={() => setActiveCat(cat.id)} />
        ))}
      </div>

      {/* Accordion list */}
      <div className="flex flex-col gap-3" role="list">
        {visibleItems.map((item, i) => (
          <div key={`${item.catId}-${i}`} role="listitem">
            <FaqItem question={item.question} answer={item.answer} idx={i} />
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div
        className="mt-12 p-6 rounded-2xl text-center flex flex-col items-center gap-4"
        style={{ backgroundColor: 'var(--color-dark)' }}
      >
        <p className="font-display font-bold text-lg" style={{ color: 'var(--color-ink)' }}>
          Vous n'avez pas trouvé votre réponse ?
        </p>
        <p className="text-sm" style={{ color: 'var(--color-gray-400)' }}>
          Notre équipe est disponible 24h/24 via WhatsApp pour répondre à toutes vos questions.
        </p>
        <a
          href={buildWhatsAppUrl("Bonjour VivaceTV, j'ai une question")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90"
          style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
        >
          Poser ma question via WhatsApp
        </a>
      </div>
    </>
  );
}
