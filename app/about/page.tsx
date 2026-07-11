import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimateIn from '@/components/ui/AnimateIn';
import CountUp   from '@/components/ui/CountUp';
import PageHero  from '@/components/ui/PageHero';
import { getSiteImages, getAssetUrl } from '@/lib/directus';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Prestige Mining and Energy — 40 years of industrial excellence across four continents.',
};

const VALUES = [
  { title: 'Operational Excellence', body: 'We hold ourselves to the highest standards of safety, efficiency, and environmental responsibility in every operation we run.' },
  { title: 'People First', body: 'Our 12,000+ workforce is our greatest asset. We invest in safety, skills, and wellbeing at every site.' },
  { title: 'Sustainable by Design', body: 'Environmental stewardship and community benefit are built into our project design from day one, not added later.' },
  { title: 'Transparent Governance', body: 'We operate with rigorous corporate governance, regular disclosure, and accountability to all stakeholders.' },
];

const TIMELINE = [
  { year: '1984', event: 'Founded in Perth, Western Australia with a single open-cut iron ore mine.' },
  { year: '1992', event: 'Expanded to Africa — first copper operation in Zambia commissioned.' },
  { year: '2001', event: 'Listed on the Australian Securities Exchange (ASX). Raised $220M for Pilbara expansion.' },
  { year: '2010', event: 'Diversified into energy — first 50 MW solar PPA signed with a WA mine operator.' },
  { year: '2017', event: 'Battery storage division launched. First 30 MWh BESS deployed at remote mine site.' },
  { year: '2022', event: 'Reached 2 GW renewable energy portfolio. Net Zero 2040 commitment announced.' },
  { year: '2025', event: 'New Pilbara processing hub commissioned. 12,000 employees across 22 active sites.' },
];

const LEADERSHIP = [
  { name: 'James Hartfield', role: 'Chief Executive Officer', tenure: '12 years' },
  { name: 'Dr. Priya Nair',  role: 'Chief Operations Officer', tenure: '8 years'  },
  { name: 'Mark Sullivan',   role: 'Chief Financial Officer',  tenure: '5 years'  },
  { name: 'Amara Osei',      role: 'Chief Sustainability Officer', tenure: '6 years' },
];

export default async function AboutPage() {
  const imgsRes = await getSiteImages().catch(() => null);
  const bgUrl = imgsRes ? getAssetUrl(imgsRes.about_image, { width: 1920, height: 900, fit: 'cover', quality: 85 }) : 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80';

  return (
    <>
      <PageHero
        overline="About Us"
        headline="Built on Discipline. Driven by Purpose."
        subheadline="40 years of industrial excellence — from a single mine in Western Australia to a globally diversified mining and energy company."
        bgUrl={bgUrl}
        breadcrumbs={[{ label: 'About' }]}
      />

      {/* Story */}
      <section className="section-pad" style={{ background: '#FFFFFF' }}>
        <div className="container-xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <AnimateIn direction="left">
              <span className="text-overline">Our Story</span>
              <span className="accent-line mt-3 mb-6" />
              <h2 className="text-display">A Legacy of Industrial Excellence</h2>
              <p className="mt-5 text-sm leading-loose" style={{ color: '#6B6B6B' }}>
                Prestige Mining and Energy was founded in 1984 on the principle that responsible resource extraction and clean energy generation are complementary goals. From a single open-cut iron ore mine in the Pilbara, we have grown into one of the most geographically diverse resource companies in the world.
              </p>
              <p className="mt-4 text-sm leading-loose" style={{ color: '#6B6B6B' }}>
                Our integrated model — connecting raw material extraction to clean power generation — delivers value across the entire resource chain. We believe that the mining industry&apos;s long-term social licence depends on its willingness to lead the energy transition, not resist it.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 border-y py-6" style={{ borderColor: '#F0F0F0' }}>
                {[['1984', 'Founded'], ['22+', 'Active Sites'], ['4', 'Continents']].map(([val, lbl]) => (
                  <div key={lbl}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '2rem', lineHeight: 1, background: 'linear-gradient(135deg,#007A96,#79B82A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{val}</div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#BDBDBD', marginTop: '4px' }}>{lbl}</div>
                  </div>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn direction="right" delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {[['12,000', '+', 'Employees'], ['48', 'Mt/yr', 'Extraction'], ['2.4', 'GW', 'Clean Energy'], ['40+', 'Years', 'Experience']].map(([val, unit, lbl]) => (
                  <div key={lbl} className="glass-card p-6"
                    style={{ background: 'linear-gradient(135deg,#071524,#0D2544)' }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '2rem', lineHeight: 1 }}>
                      <span className="text-gradient-orange"><CountUp value={val} /></span>
                      <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginLeft: '2px' }}>{unit}</span>
                    </div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginTop: '5px' }}>{lbl}</div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad" style={{ background: '#F5F5F5' }}>
        <div className="container-xl">
          <AnimateIn>
            <span className="text-overline">Our Values</span>
            <span className="accent-line mt-3 mb-6" />
            <h2 className="text-display mb-14">What We Stand For</h2>
          </AnimateIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <AnimateIn key={v.title} delay={i * 0.08}>
                <div className="feature-card p-7 h-full">
                  <div className="mb-5 h-1 w-8" style={{ background: 'linear-gradient(90deg,#007A96,#79B82A)' }} />
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: '#111111', marginBottom: '0.5rem' }}>{v.title}</h4>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#757575', lineHeight: 1.7 }}>{v.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad" style={{ background: '#FFFFFF' }}>
        <div className="container-xl">
          <AnimateIn>
            <span className="text-overline">Our History</span>
            <span className="accent-line mt-3 mb-6" />
            <h2 className="text-display mb-14">Four Decades of Growth</h2>
          </AnimateIn>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[3.5rem] top-0 bottom-0 w-px hidden lg:block" style={{ background: 'linear-gradient(to bottom, #00A8C4, transparent)' }} />
            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <AnimateIn key={item.year} delay={i * 0.07}>
                  <div className="flex gap-8 items-start">
                    <div className="shrink-0 w-28 text-right hidden lg:block">
                      <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.1rem', background: 'linear-gradient(135deg,#007A96,#79B82A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{item.year}</span>
                    </div>
                    <div className="hidden lg:flex shrink-0 items-center justify-center w-4 h-4 rounded-full mt-1" style={{ background: 'linear-gradient(135deg,#007A96,#79B82A)', boxShadow: '0 0 8px rgba(0,168,196,0.5)' }} />
                    <div className="flex-1 pb-8 border-b" style={{ borderColor: '#F5F5F5' }}>
                      <span className="font-bold text-sm block mb-1 lg:hidden" style={{ color: '#00A8C4', fontFamily: 'var(--font-heading)' }}>{item.year}</span>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#4A4A4A', lineHeight: 1.7 }}>{item.event}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="governance" className="section-pad" style={{ background: '#F5F5F5' }}>
        <div className="container-xl">
          <AnimateIn>
            <span className="text-overline">Governance</span>
            <span className="accent-line mt-3 mb-6" />
            <h2 className="text-display mb-14">Executive Leadership</h2>
          </AnimateIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LEADERSHIP.map((person, i) => (
              <AnimateIn key={person.name} delay={i * 0.08}>
                <div className="feature-card p-6 text-center">
                  <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full"
                    style={{ background: 'linear-gradient(135deg,#007A96,#79B82A)' }}>
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.8rem', color: '#FFFFFF' }}>
                      {person.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', color: '#111111' }}>{person.name}</h4>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: '#00A8C4', marginTop: '3px' }}>{person.role}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: '#BDBDBD', marginTop: '4px' }}>{person.tenure} tenure</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section id="sustainability" className="section-pad"
        style={{ background: 'linear-gradient(160deg,#071524 0%,#0D2544 55%,#071828 100%)' }}>
        <div className="container-xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <AnimateIn>
              <span className="text-overline">Sustainability</span>
              <span className="accent-line mt-3 mb-6" />
              <h2 className="text-display-light">Committed to Net Zero by 2040</h2>
              <p className="mt-5 text-sm leading-loose" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Our 2040 Net Zero commitment is backed by a detailed decarbonisation roadmap covering Scope 1, 2, and 3 emissions. We publish annual progress reports with independently verified data.
              </p>
              <ul className="mt-6 space-y-3">
                {['50% emissions reduction by 2030 (vs 2019 baseline)', 'All new projects 100% renewable-powered from day one', 'Zero freshwater use at three Australian sites by 2027', '$200M community investment fund over five years'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{ background: '#00A8C4' }} />
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/insights" className="btn-orange mt-8 inline-flex">
                Read Sustainability Reports <ArrowRight size={15} />
              </Link>
            </AnimateIn>

            <AnimateIn delay={0.12}>
              <div className="grid grid-cols-2 gap-4">
                {[['50%', 'Emissions Cut Target (2030)'], ['100%', 'Renewable New Projects'], ['2040', 'Net Zero Commitment'], ['$200M', 'Community Investment']].map(([val, lbl]) => (
                  <div key={lbl} className="glass-card p-6">
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.8rem', lineHeight: 1 }}>
                      <span className="text-gradient-orange">{val}</span>
                    </div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginTop: '6px', lineHeight: 1.4 }}>{lbl}</div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background: '#FFFFFF' }}>
        <div className="container-xl text-center">
          <AnimateIn>
            <span className="text-overline">Work With Us</span>
            <span className="accent-line mx-auto mt-3 mb-6" />
            <h2 className="text-display mx-auto max-w-2xl">Join a Global Leader in Responsible Resource Development</h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/careers" className="btn-orange">View Careers <ArrowRight size={15} /></Link>
              <Link href="/contact" className="btn-dark">Contact Us</Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
