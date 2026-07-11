import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Briefcase } from 'lucide-react';
import AnimateIn from '@/components/ui/AnimateIn';
import PageHero  from '@/components/ui/PageHero';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Build your career with Prestige Mining and Energy — a global leader in responsible resource development.',
};

const OPEN_ROLES = [
  { title: 'Senior Mining Engineer',       location: 'Perth, WA',          type: 'Full-time', dept: 'Engineering'   },
  { title: 'Process Control Engineer',     location: 'Pilbara, WA',        type: 'Full-time', dept: 'Processing'    },
  { title: 'Solar Project Manager',        location: 'Brisbane, QLD',      type: 'Full-time', dept: 'Energy'        },
  { title: 'BESS Commissioning Engineer',  location: 'Remote (fly-in/out)',type: 'Contract',  dept: 'Energy'        },
  { title: 'Environmental Advisor',        location: 'Perth, WA',          type: 'Full-time', dept: 'Sustainability' },
  { title: 'Mine Safety Superintendent',   location: 'Kalgoorlie, WA',     type: 'Full-time', dept: 'Safety'        },
];

const BENEFITS = [
  { title: 'Competitive Remuneration', body: 'Market-leading salaries, annual bonuses, and LTIP equity participation for senior roles.' },
  { title: 'Health & Wellbeing',       body: 'Comprehensive health insurance, EAP services, and dedicated wellbeing programs at every site.' },
  { title: 'Career Development',       body: 'Structured career pathways, leadership programs, and funded professional development.' },
  { title: 'Flexible Working',         body: 'Hybrid office arrangements for Perth-based roles; generous FIFO rosters with quality accommodation.' },
  { title: 'Inclusive Culture',        body: 'Committed to gender diversity, Indigenous employment, and equitable opportunity.' },
  { title: 'Purpose-Driven Work',      body: 'Join a team at the intersection of industrial excellence and the global energy transition.' },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        overline="Careers"
        headline="Shape the Future of Resources"
        subheadline="Join 12,000+ professionals building a more responsible resource industry — from autonomous mine operations to utility-scale renewable energy."
        breadcrumbs={[{ label: 'Careers' }]}
      />

      {/* Open roles */}
      <section className="section-pad" style={{ background: '#FFFFFF' }}>
        <div className="container-xl">
          <AnimateIn>
            <span className="text-overline">Open Positions</span>
            <span className="accent-line mt-3 mb-10" />
          </AnimateIn>
          <div className="space-y-3">
            {OPEN_ROLES.map((role, i) => (
              <AnimateIn key={role.title} delay={i * 0.06}>
                <div className="role-card group flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: '#111111' }}>{role.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-3">
                      <span className="flex items-center gap-1.5" style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: '#757575' }}>
                        <MapPin size={12} style={{ color: '#00A8C4' }} /> {role.location}
                      </span>
                      <span className="flex items-center gap-1.5" style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: '#757575' }}>
                        <Briefcase size={12} style={{ color: '#00A8C4' }} /> {role.dept}
                      </span>
                      <span className="px-2 py-0.5 text-[0.6rem] font-bold tracking-widest uppercase"
                        style={{ background: '#E3F6FA', color: '#007A96', fontFamily: 'var(--font-heading)' }}>
                        {role.type}
                      </span>
                    </div>
                  </div>
                  <Link href="/contact" className="btn-orange shrink-0" style={{ padding: '0.6rem 1.2rem', fontSize: '0.7rem' }}>
                    Apply Now <ArrowRight size={13} />
                  </Link>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={0.2}>
            <p className="mt-8 text-sm" style={{ color: '#BDBDBD', fontFamily: 'var(--font-body)' }}>
              Don&apos;t see a suitable role? <Link href="/contact" style={{ color: '#00A8C4' }}>Send us your CV</Link> — we&apos;re always looking for exceptional talent.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-pad" style={{ background: '#F5F5F5' }}>
        <div className="container-xl">
          <AnimateIn>
            <span className="text-overline">Why Work With Us</span>
            <span className="accent-line mt-3 mb-10" />
            <h2 className="text-display mb-12">Benefits & Culture</h2>
          </AnimateIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b, i) => (
              <AnimateIn key={b.title} delay={i * 0.07}>
                <div className="feature-card p-7 h-full">
                  <div className="mb-4 h-1 w-8" style={{ background: 'linear-gradient(90deg,#007A96,#79B82A)' }} />
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', color: '#111111', marginBottom: '0.5rem' }}>{b.title}</h4>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#757575', lineHeight: 1.7 }}>{b.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden section-pad" style={{ background: '#0A1628' }}>
        <div className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 60% 55% at 50% 100%, rgba(0,168,196,0.09) 0%, transparent 70%)' }} />
        <div className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative z-10 container-xl text-center">
          <AnimateIn>
            <div className="inline-flex items-center gap-2 border px-4 py-1.5 mb-7"
              style={{ borderColor: 'rgba(0,168,196,0.25)', background: 'rgba(0,168,196,0.07)' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#00A8C4' }}>
                Join Our Team
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(1.8rem,3.5vw,3rem)', color: '#FFFFFF', lineHeight: 1.1 }}>
              Ready to Make an <span style={{ background: 'linear-gradient(135deg,#007A96,#79B82A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Impact?</span>
            </h2>
            <p className="mt-4 mx-auto max-w-lg text-sm leading-loose" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-body)' }}>
              Reach out to our talent team — we&apos;d love to learn more about you.
            </p>
            <Link href="/contact" className="btn-orange mt-8 inline-flex">
              Get In Touch <ArrowRight size={15} />
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
