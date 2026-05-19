import SectionHeader from '@/components/ui/SectionHeader';

const categories = [
  { label: 'Sport',                 accent: true },
  { label: 'Films',                 accent: false },
  { label: 'Séries',                accent: false },
  { label: 'Documentaires',        accent: false },
  { label: 'Enfants',               accent: false },
  { label: 'Divertissement',        accent: true },
  { label: 'Chaînes internationales', accent: false },
  { label: 'VOD',                   accent: false },
];

const stats = [
  { value: '+22 000', label: 'chaînes TV' },
  { value: '+160 000', label: 'films & séries' },
  { value: 'HD/4K/8K', label: 'qualité image' },
  { value: '24/7', label: 'assistance' },
];

export default function ContentShowcase() {
  return (
    <section
      id="contenu"
      className="py-20 lg:py-28"
      style={{ backgroundColor: 'var(--color-dark)' }}
      aria-labelledby="content-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Stats bar */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-px mb-16 rounded-2xl overflow-hidden"
          style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
          aria-label="Chiffres clés"
        >
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center py-6 px-4 text-center gap-1"
              style={{ backgroundColor: 'var(--color-dark)' }}
            >
              <span
                className="font-display font-extrabold text-2xl sm:text-3xl"
                style={{ color: 'var(--color-lime)' }}
              >
                {value}
              </span>
              <span className="text-sm" style={{ color: 'var(--color-gray-400)' }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Text */}
          <div>
            <SectionHeader
              label="Nos contenus"
              title="Découvrez une expérience IPTV complète en France"
              description="Avec VivaceTV, profitez d'un accès simple à une grande variété de contenus : chaînes TV, événements sportifs, films, séries, documentaires, programmes jeunesse et divertissement familial."
              align="left"
              dark
              className="mb-8"
            />

            {/* Category tags */}
            <div className="flex flex-wrap gap-2" role="list" aria-label="Catégories de contenus">
              {categories.map(({ label, accent }) => (
                <span
                  key={label}
                  role="listitem"
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={
                    accent
                      ? { backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }
                      : { backgroundColor: 'rgba(255,255,255,0.07)', color: 'var(--color-gray-400)', border: '1px solid rgba(255,255,255,0.1)' }
                  }
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Abstract content grid visual */}
          <div
            className="grid grid-cols-2 gap-3 rounded-2xl overflow-hidden p-3"
            style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            aria-hidden="true"
          >
            {/* Large sport tile */}
            <div
              className="col-span-2 rounded-xl flex items-end p-5 relative overflow-hidden"
              style={{ backgroundColor: 'var(--color-lime)', minHeight: '120px' }}
            >
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'radial-gradient(circle at 80% 30%, white 0%, transparent 60%)',
              }} />
              <div className="relative">
                <div className="text-xs font-semibold mb-1" style={{ color: 'rgba(28,26,23,0.7)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Disponible</div>
                <div className="font-display font-extrabold text-xl" style={{ color: 'var(--color-dark)' }}>Sport en direct</div>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-dark text-lime text-xs font-bold px-2 py-1 rounded-full">LIVE</span>
              </div>
            </div>

            {/* Films tile */}
            <div
              className="rounded-xl p-4 flex flex-col justify-between"
              style={{ backgroundColor: '#2A2620', minHeight: '100px', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="space-y-1.5">
                <div className="h-2 rounded-full w-16" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }} />
                <div className="h-2 rounded-full w-10" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />
              </div>
              <div className="font-display font-bold text-base" style={{ color: 'var(--color-lime-soft)' }}>Films & VOD</div>
            </div>

            {/* Séries tile */}
            <div
              className="rounded-xl p-4 flex flex-col justify-between"
              style={{ backgroundColor: '#252219', minHeight: '100px', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="grid grid-cols-2 gap-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="rounded h-6" style={{ backgroundColor: i % 2 === 0 ? 'rgba(199,227,107,0.15)' : 'rgba(255,255,255,0.06)' }} />
                ))}
              </div>
              <div className="font-display font-bold text-base mt-3" style={{ color: 'var(--color-gray-200)' }}>Séries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
