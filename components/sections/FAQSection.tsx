'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '@/config/faq';
import SectionHeader from '@/components/ui/SectionHeader';
import { cn } from '@/lib/utils';

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const id = `faq-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-150"
      style={{
        backgroundColor: open ? 'var(--color-card)' : 'var(--color-surface)',
        border: '1px solid var(--color-border)',
      }}
    >
      <button
        type="button"
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        id={id}
      >
        <span
          className="font-semibold text-base leading-snug"
          style={{ color: 'var(--color-ink)' }}
        >
          {question}
        </span>
        <ChevronDown
          size={18}
          className={cn(
            'shrink-0 transition-transform duration-200',
            open ? 'rotate-180' : 'rotate-0',
          )}
          style={{ color: 'var(--color-lime)' }}
          aria-hidden="true"
        />
      </button>

      {/* Answer panel */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={id}
        hidden={!open}
        className={cn(open ? 'block' : 'hidden')}
      >
        <div
          className="px-6 pb-5 text-sm leading-relaxed"
          style={{ color: 'var(--color-ink-light)' }}
        >
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="py-20 lg:py-28"
      style={{ backgroundColor: 'var(--color-surface-alt)' }}
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="FAQ"
          title="Questions fréquentes sur IPTV France et ClarioTV"
          className="mb-12"
        />

        <div className="flex flex-col gap-3">
          {faqItems.map((item, i) => (
            <FAQItem
              key={i}
              question={item.question}
              answer={item.answer}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
