import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import AnimateIn from '@/components/ui/AnimateIn';
import CountUp   from '@/components/ui/CountUp';
import PageHero  from '@/components/ui/PageHero';
import { getSiteImages, getAssetUrl } from '@/lib/directus';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Prestige Mining and Energy — a Central Africa resource company specialising in antimony mining and oil production.',
};

const VALUES = [
  { title: 'Resource Stewardship',   body: 'Responsible extraction is the foundation of our social licence to operate. We apply international environmental standards to every site, regardless of local regulatory minimums.' },
  { title: 'Community Investment',   body: 'We invest in local employment, skills development, and community infrastructure — recognising that lasting value is built alongside host communities, not apart from them.' },
  { title: 'Operational Excellence', body: 'We hold ourselves to rigorous standards of safety, efficiency, and technical quality. Our teams operate international HSSE protocols on every site, every day.' },
  { title: 'Transparent Governance', body: 'We operate with disciplined corporate governance, regular disclosure to shareholders and partners, and zero tolerance for corruption at any level.' },
];

const TIMELINE = [
  { year: '2009', event: 'Founded in N\'Djamena, Chad. Secured first antimony exploration licence in the Moyen-Chari region.' },
  { year: '2011', event: 'First commercial antimony ore extracted from the Sarh deposit. Initial offtake agreement signed with European smelter.' },
  { year: '2013', event: 'Entered the hydrocarbons sector — signed production-sharing agreement for a block in the proven Doba Basin.' },
  { year: '2015', event: 'Commissioned antimony flotation processing plant; concentrate purity consistently above 95% Sb. Annual capacity reached 3,000 tonnes.' },
  { year: '2017', event: 'Oil production commenced; output reached 6,000 barrels per day. Regional trading office opened in Abidjan, Côte d\'Ivoire.' },
  { year: '2020', event: 'Phase II antimony expansion complete — annual capacity doubled to 6,000 tonnes per year. Second mine site commissioned.' },
  { year: '2024', event: 'Long-term offtake agreements in Asia secured. Oil output reached 12,000 barrels per day. Third antimony pit brought into production.' },
];

const LEADERSHIP = [
  { name: 'Henri N\'TAKPE',            role: 'Founder & CEO',     tenure: 'Since 2009',     image: '/team/henri.jpg',   href: '/about/leadership/henri',  objectPos: 'top' },
  { name: 'Faouly Cédric Eddie David', role: 'Managing Director', tenure: 'Since Jan 2025', image: '/team/cedric.jpeg', href: '/about/leadership/cedric', objectPos: 'center top' },
];

export default async function AboutPage() {
  const imgsRes = await getSiteImages().catch(() => null);
  const bgUrl = imgsRes
    ? getAssetUrl(imgsRes.about_image, { width: 1920, height: 900, fit: 'cover', quality: 85 })
    : 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80';

  return (
    <>
      <PageHero
        overline="About Us"
        headline="Grounded in Africa, Reaching Global Markets."
        subheadline="Founded in N'Djamena and built on antimony and oil — Prestige Mining & Energy has grown from a single exploration licence into a diversified Central Africa resource company."
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
              <h2 className="text-display">Built on Antimony. Powered by Oil.</h2>
              <p className="mt-5 text-sm leading-loose" style={{ color: '#6B6B6B' }}>
                Prestige Mining and Energy was founded in N'Djamena in 2009 on a straightforward conviction: Central Africa's mineral and hydrocarbon wealth was under-exploited and under-served by international capital. We secured our first antimony exploration licence in the Moyen-Chari region and set about building an operation that could compete on quality with any producer in the world.
              </p>
              <p className="mt-4 text-sm leading-loose" style={{ color: '#6B6B6B' }}>
                In 2013 we expanded into hydrocarbons, entering Chad's Doba Basin under a production-sharing agreement. That decision to integrate across commodities — antimony for critical mineral markets, oil for energy markets — has proven resilient across commodity cycles and has given us a diversified revenue base that single-commodity operators cannot match.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 border-y py-6" style={{ borderColor: '#F0F0F0' }}>
                {[['2009', 'Founded'], ['3+', 'Active Sites'], ['2', 'Countries']].map(([val, lbl]) => (
                  <div key={lbl}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '2rem', lineHeight: 1, background: 'linear-gradient(135deg,#007A96,#79B82A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{val}</div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#BDBDBD', marginTop: '4px' }}>{lbl}</div>
                  </div>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn direction="right" delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {[['6', 'Kt/yr', 'Antimony Output'], ['12', 'K bbl/d', 'Oil Production'], ['95', '%+', 'Concentrate Purity'], ['15+', 'Yrs', 'Experience']].map(([val, unit, lbl]) => (
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
            <h2 className="text-display mb-14">Fifteen Years of Growth</h2>
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
      <section id="governance" className="section-pad" style={{ background: 'linear-gradient(160deg,#071524 0%,#0D2544 60%,#071828 100%)' }}>
        <div className="container-xl">
          <AnimateIn>
            <span className="text-overline">Governance</span>
            <span className="accent-line mt-3 mb-6" />
            <h2 className="text-display-light mb-14">Executive Leadership</h2>
          </AnimateIn>
          <div className="grid gap-8 sm:grid-cols-2">
            {LEADERSHIP.map((person, i) => (
              <AnimateIn key={person.name} delay={i * 0.1}>
                <div className="glass-card flex flex-col items-center text-center p-8">
                  <div className="mb-6 overflow-hidden rounded-2xl"
                    style={{ width: 180, height: 220, background: 'rgba(255,255,255,0.05)', flexShrink: 0 }}>
                    {person.image && (
                      <Image
                        src={person.image}
                        alt={person.name}
                        width={180}
                        height={220}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                  <div className="mb-3 h-0.5 w-8 mx-auto" style={{ background: 'linear-gradient(90deg,#007A96,#79B82A)' }} />
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem', color: '#FFFFFF', lineHeight: 1.3 }}>{person.name}</h4>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#00A8C4', marginTop: '5px', fontWeight: 600 }}>{person.role}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', marginTop: '3px' }}>{person.tenure}</p>
                  <Link href={person.href}
                    className="mt-6 inline-flex items-center gap-2 text-xs font-semibold px-5 py-2.5 rounded-full"
                    style={{ background: 'linear-gradient(135deg,#007A96,#79B82A)', color: '#FFFFFF', fontFamily: 'var(--font-heading)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    View Profile <ArrowRight size={12} />
                  </Link>
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
              <h2 className="text-display-light">Responsible Operations for the Long Term</h2>
              <p className="mt-5 text-sm leading-loose" style={{ color: 'rgba(255,255,255,0.55)' }}>
                We recognise that our social licence to operate in Chad and beyond depends on delivering tangible benefits to communities, protecting the environment, and operating to international standards — even when local regulations require less.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Over 85% of site-level employees are nationals of the host country',
                  'Zero major environmental incidents since inception',
                  'Biochar programme sequestering CO₂ and improving degraded Sahelian soils',
                  '2.4 MWp of solar installed across mine sites — targeting 100% renewables by 2028',
                  'Community development fund investing in schools, clean water, and health facilities',
                  'Annual independently verified environmental performance reports',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{ background: '#00A8C4' }} />
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/sustainability" className="btn-orange inline-flex">
                  Our Sustainability Programme <ArrowRight size={15} />
                </Link>
                <Link href="/contact" className="btn-dark">
                  Contact Our Team
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.12}>
              <div className="grid grid-cols-2 gap-4">
                {[['85%', 'National Workforce'], ['0', 'Major Env. Incidents'], ['2.4MWp', 'Solar Installed'], ['500+', 'Farmers Reached']].map(([val, lbl]) => (
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
            <h2 className="text-display mx-auto max-w-2xl">Partner With a Proven Central Africa Resource Company</h2>
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
