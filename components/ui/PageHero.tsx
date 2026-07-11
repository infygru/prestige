import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Crumb { label: string; href?: string; }

interface PageHeroProps {
  overline?: string;
  headline: string;
  subheadline?: string;
  bgUrl?: string | null;
  breadcrumbs?: Crumb[];
  /** Extra content rendered below the headline/sub */
  children?: React.ReactNode;
}

export default function PageHero({ overline, headline, subheadline, bgUrl, breadcrumbs, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden"
      style={{
        minHeight: 'clamp(320px, 44vh, 540px)',
        background: 'linear-gradient(160deg, #071524 0%, #0D2544 55%, #071828 100%)',
        paddingTop: 'clamp(3rem, 7vh, 5rem)',
        paddingBottom: 'clamp(3rem, 7vh, 5rem)',
      }}
    >
      {bgUrl && (
        <Image src={bgUrl} alt="" fill sizes="100vw" className="object-cover" style={{ opacity: 0.25 }} priority />
      )}
      {/* Orange atmospheric glow */}
      <div className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 70% 30%, rgba(0,168,196,0.16) 0%, transparent 65%)' }}
      />
      {/* Dot grid */}
      <div className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 container-xl">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-6 flex items-center gap-1.5 flex-wrap">
            <Link href="/"
              style={{ fontFamily: 'var(--font-heading)', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}
              className="hover:text-[#00A8C4] transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={10} style={{ color: 'rgba(255,255,255,0.25)' }} />
                {crumb.href && i < breadcrumbs.length - 1 ? (
                  <Link href={crumb.href}
                    style={{ fontFamily: 'var(--font-heading)', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}
                    className="hover:text-[#00A8C4] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#00A8C4' }}>
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}

        {overline && <span className="text-overline mb-3">{overline}</span>}
        <span className="accent-line mb-6" />

        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2.2rem, 5vw, 4rem)',
          fontWeight: 800,
          lineHeight: 1.08,
          letterSpacing: '-0.02em',
          color: '#FFFFFF',
          maxWidth: '700px',
        }}>
          {headline}
        </h1>

        {subheadline && (
          <p className="mt-4 max-w-2xl text-sm leading-loose"
            style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.55)' }}>
            {subheadline}
          </p>
        )}

        {children}
      </div>
    </section>
  );
}
