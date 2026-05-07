import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  /** Base path, e.g. "/blog" — page numbers append "?page=N" */
  basePath: string;
};

function pageHref(basePath: string, page: number) {
  return page === 1 ? basePath : `${basePath}?page=${page}`;
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center gap-1 mt-12"
    >
      {/* Previous */}
      {currentPage > 1 ? (
        <Link
          href={pageHref(basePath, currentPage - 1)}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors duration-150 hover:opacity-80"
          style={{
            backgroundColor: 'var(--color-card)',
            border: '1px solid var(--color-border)',
            color: 'var(--color-ink-light)',
          }}
          aria-label="Page précédente"
        >
          <ChevronLeft size={16} aria-hidden="true" />
          Précédent
        </Link>
      ) : (
        <span
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium opacity-30 cursor-not-allowed"
          style={{
            backgroundColor: 'var(--color-card)',
            border: '1px solid var(--color-border)',
            color: 'var(--color-ink-light)',
          }}
          aria-disabled="true"
        >
          <ChevronLeft size={16} aria-hidden="true" />
          Précédent
        </span>
      )}

      {/* Page numbers */}
      <div className="flex items-center gap-1">
        {pages.map((page) => {
          const isActive = page === currentPage;
          return (
            <Link
              key={page}
              href={pageHref(basePath, page)}
              className={cn(
                'inline-flex items-center justify-center w-10 h-10 rounded-xl text-sm font-semibold transition-all duration-150',
                isActive ? 'pointer-events-none' : 'hover:opacity-80',
              )}
              style={
                isActive
                  ? { backgroundColor: 'var(--color-dark)', color: 'var(--color-lime)' }
                  : {
                      backgroundColor: 'var(--color-card)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-ink-light)',
                    }
              }
              aria-label={`Page ${page}`}
              aria-current={isActive ? 'page' : undefined}
            >
              {page}
            </Link>
          );
        })}
      </div>

      {/* Next */}
      {currentPage < totalPages ? (
        <Link
          href={pageHref(basePath, currentPage + 1)}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors duration-150 hover:opacity-80"
          style={{
            backgroundColor: 'var(--color-card)',
            border: '1px solid var(--color-border)',
            color: 'var(--color-ink-light)',
          }}
          aria-label="Page suivante"
        >
          Suivant
          <ChevronRight size={16} aria-hidden="true" />
        </Link>
      ) : (
        <span
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium opacity-30 cursor-not-allowed"
          style={{
            backgroundColor: 'var(--color-card)',
            border: '1px solid var(--color-border)',
            color: 'var(--color-ink-light)',
          }}
          aria-disabled="true"
        >
          Suivant
          <ChevronRight size={16} aria-hidden="true" />
        </span>
      )}
    </nav>
  );
}
