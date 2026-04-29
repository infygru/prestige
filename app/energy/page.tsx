import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sun, Battery, FileText } from 'lucide-react';
import AnimateIn from '@/components/ui/AnimateIn';
import CountUp   from '@/components/ui/CountUp';
import PageHero  from '@/components/ui/PageHero';
import { getServicesBySector, getSiteImages, getAssetUrl, type Service } from '@/lib/directus';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Clean Energy Solutions',
  description: 'Utility-scale solar, battery storage, and power purchase agreements powering the energy transition.',
};

const FB_SERVICES: Service[] = [
  { id: 4, status: 'published', sort: 1, featured: true, title: 'Utility-Scale Solar', slug: 'utility-solar', sector: 'energy', short_description: '1.8 GW installed across 14 projects — single-axis tracking, bifacial panels, and an average LCOE of $28/MWh.', description: 'We develop, own, and operate utility-scale solar PV projects from 10 MW to 500 MW+. All projects use single-axis tracking with bifacial modules, increasing annual energy yield by an average of 22% versus fixed-tilt installations at the same site. Our in-house EPC capability eliminates margin stacking and gives us direct control over commissioning timelines. We have delivered 14 projects across Australia, sub-Saharan Africa, and Southeast Asia — every one on time and within 2% of original capital budget — with a portfolio-average capacity factor of 28.4%.', cover_image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=960&q=80', background_image: null, icon_name: null, stats: [{ label: 'Total installed', value: '1.8', unit: 'GW' }, { label: 'Projects delivered', value: '14', unit: '' }, { label: 'Avg LCOE', value: '$28', unit: '/MWh' }] },
  { id: 5, status: 'published', sort: 2, featured: true, title: 'Battery Storage Systems', slug: 'battery-storage', sector: 'energy', short_description: '620 MWh deployed across eight sites — firmed dispatchable power that has displaced 45 million litres of diesel annually.', description: 'Diesel generation costs remote mining operations $0.38–0.55 per kWh — three to five times the cost of solar-plus-storage. Our grid-scale BESS designs pair lithium iron phosphate chemistry with purpose-built thermal management suited to extreme heat environments. Eight systems are currently operating, ranging from 5 MWh at a remote exploration camp to a 120 MWh grid-stability installation for a WA copper smelter. In aggregate, these systems have displaced 45 million litres of diesel fuel per year, cutting operating costs by A$24M annually for our clients and avoiding 120,000 tonnes of CO₂-equivalent emissions.', cover_image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=960&q=80', background_image: null, icon_name: null, stats: [{ label: 'Storage deployed', value: '620', unit: 'MWh' }, { label: 'Diesel displaced', value: '45M', unit: 'L/yr' }, { label: 'Systems operating', value: '8', unit: '' }] },
  { id: 6, status: 'published', sort: 3, featured: true, title: 'Power Purchase Agreements', slug: 'power-purchase', sector: 'energy', short_description: '22 active PPAs totalling 600 MW — 15-year average terms with investment-grade counterparties, no capex required.', description: 'Capital-intensive renewable projects require long-term revenue certainty. We structure PPAs with 10–20 year terms, fixed or CPI-linked pricing, and take-or-pay obligations that support project finance. Our 22 active agreements cover industrial miners, copper smelters, LNG facilities, and commercial property portfolios. Clients receive certified renewable energy certificates (RECs or LGCs) for Scope 2 reporting, and we provide an annual carbon accounting statement verified by an independent auditor. Because we own and operate the generation assets, we can guarantee uptime SLAs that third-party developers cannot — with a portfolio-wide availability factor of 98.7% over the past three years.', cover_image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=960&q=80', background_image: null, icon_name: null, stats: [{ label: 'PPA volume', value: '600', unit: 'MW' }, { label: 'Avg term', value: '15', unit: 'yr' }, { label: 'Active agreements', value: '22', unit: '' }] },
];

const SERVICE_ICONS = [Sun, Battery, FileText];

const ENERGY_STATS = [
  { value: '2.4', unit: 'GW', label: 'Clean Energy Portfolio' },
  { value: '620', unit: 'MWh', label: 'Battery Storage Deployed' },
  { value: '22', unit: '', label: 'Active PPAs' },
  { value: '40', unit: '%', label: 'Diesel Reduction for Clients' },
];

export default async function EnergyPage() {
  const [servicesRes, imgsRes] = await Promise.allSettled([
    getServicesBySector('energy'), getSiteImages(),
  ]);

  const services = servicesRes.status === 'fulfilled' ? servicesRes.value : FB_SERVICES;
  const imgs     = imgsRes.status     === 'fulfilled' ? imgsRes.value     : null;
  const bgUrl    = imgs ? getAssetUrl(imgs.energy_sector_image, { width: 1920, height: 900, fit: 'cover', quality: 85 }) : 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80';

  return (
    <>
      <PageHero
        overline="Clean Energy"
        headline="Powering the Energy Transition"
        subheadline="Utility-scale solar, grid-scale battery storage, and long-term PPAs — giving industrial customers price certainty and carbon credentials."
        bgUrl={bgUrl}
        breadcrumbs={[{ label: 'Clean Energy' }]}
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/contact" className="btn-orange">Discuss a PPA <ArrowRight size={15} /></Link>
          <Link href="#services" className="btn-outline-white">Our Solutions</Link>
        </div>
      </PageHero>

      {/* Stats */}
      <div style={{ background: '#111111', borderBottom: '1px solid #1A1A1A' }}>
        <div className="container-xl py-10">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {ENERGY_STATS.map((s, i) => (
              <AnimateIn key={s.label} delay={i * 0.08}>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(1.8rem,3vw,2.6rem)', lineHeight: 1 }}>
                    <span className="text-gradient-orange"><CountUp value={s.value} /></span>
                    <span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', marginLeft: '3px' }}>{s.unit}</span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginTop: '5px' }}>
                    {s.label}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <section id="services" className="section-pad" style={{ background: '#FFFFFF' }}>
        <div className="container-xl">
          <AnimateIn>
            <span className="text-overline">Our Solutions</span>
            <span className="accent-line mt-3 mb-6" />
            <h2 className="text-display mb-14">Energy Capabilities</h2>
          </AnimateIn>

          <div className="space-y-16">
            {services.map((svc, i) => {
              const Icon = SERVICE_ICONS[i] ?? Sun;
              const imgUrl = getAssetUrl(svc.cover_image ?? svc.background_image, { width: 960, height: 640, fit: 'cover', quality: 85 });
              const isEven = i % 2 === 0;
              return (
                <AnimateIn key={svc.id} delay={0.1}>
                  <div id={svc.slug} className={`grid gap-10 lg:grid-cols-2 lg:items-center ${isEven ? '' : 'lg:[&>*:first-child]:order-2'}`}>
                    <div className="relative aspect-video overflow-hidden">
                      {imgUrl ? (
                        <Image src={imgUrl} alt={svc.title} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
                      ) : (
                        <div className="absolute inset-0 flex items-end justify-end p-6"
                          style={{ background: 'linear-gradient(135deg,#1A0E00,#2A1800)' }}>
                          <Icon size={64} style={{ color: 'rgba(245,124,0,0.2)' }} />
                        </div>
                      )}
                      <div className="absolute inset-x-0 bottom-0 h-1" style={{ background: 'linear-gradient(90deg,#E65100,#FF9800)' }} />
                    </div>
                    <div>
                      <div className="mb-4 flex h-10 w-10 items-center justify-center" style={{ background: '#FFF3E0' }}>
                        <Icon size={20} style={{ color: '#F57C00' }} />
                      </div>
                      <span className="text-overline">{`0${i + 1}`}</span>
                      <span className="accent-line mt-2 mb-5" />
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(1.5rem,2.5vw,2.2rem)', color: '#111111', lineHeight: 1.1, marginBottom: '1rem' }}>
                        {svc.title}
                      </h3>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.93rem', color: '#6B6B6B', lineHeight: 1.8 }}>
                        {svc.description || svc.short_description}
                      </p>
                      {svc.stats && svc.stats.length > 0 && (
                        <div className="mt-7 grid grid-cols-3 gap-4 border-t pt-6" style={{ borderColor: '#F0F0F0' }}>
                          {svc.stats.map((st) => (
                            <div key={st.label}>
                              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.6rem', background: 'linear-gradient(135deg,#E65100,#FF9800)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>
                                {st.value}<span style={{ fontSize: '0.9rem' }}>{st.unit}</span>
                              </div>
                              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BDBDBD', marginTop: '3px' }}>{st.label}</div>
                            </div>
                          ))}
                        </div>
                      )}
                      <Link href="/contact" className="btn-orange mt-8 inline-flex">
                        Get a Proposal <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why renewable */}
      <section className="section-pad" style={{ background: '#F5F5F5' }}>
        <div className="container-xl">
          <AnimateIn>
            <span className="text-overline">Why Choose Prestige Energy</span>
            <span className="accent-line mt-3 mb-6" />
            <h2 className="text-display mb-14">The Integrated Advantage</h2>
          </AnimateIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Developer + Operator', body: 'We develop, own, and operate our assets — aligning our incentives directly with long-term performance.' },
              { title: 'Mine-Ready Engineering', body: 'Our energy systems are purpose-built for industrial sites: remote grid connection, dust tolerance, and 24/7 operations.' },
              { title: 'Finance Certainty', body: 'Long-term PPA structures with creditworthy counterparties provide the revenue certainty needed for project finance.' },
              { title: 'Carbon Accounting', body: 'We provide certified renewable energy certificates and assist clients with Scope 2 emissions reporting.' },
              { title: 'Hybrid Systems', body: 'Solar + BESS + diesel hybrid configurations optimised for any load profile, eliminating curtailment.' },
              { title: 'Full Lifecycle', body: 'From feasibility to decommissioning, our team manages the entire asset lifecycle in-house.' },
            ].map((item, i) => (
              <AnimateIn key={item.title} delay={i * 0.07}>
                <div className="feature-card p-7 h-full">
                  <div className="mb-4 h-1 w-8" style={{ background: 'linear-gradient(90deg,#E65100,#FF9800)' }} />
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: '#111111', marginBottom: '0.5rem' }}>{item.title}</h4>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#757575', lineHeight: 1.7 }}>{item.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden section-pad" style={{ background: '#0D0D0D' }}>
        <div className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 60% 55% at 50% 100%, rgba(245,124,0,0.09) 0%, transparent 70%)' }} />
        <div className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative z-10 container-xl text-center">
          <AnimateIn>
            <div className="inline-flex items-center gap-2 border px-4 py-1.5 mb-7"
              style={{ borderColor: 'rgba(245,124,0,0.25)', background: 'rgba(245,124,0,0.07)' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F57C00' }}>
                Get Started
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(1.8rem,3.5vw,3rem)', color: '#FFFFFF', lineHeight: 1.1 }}>
              Ready to Decarbonise<br /><span style={{ background: 'linear-gradient(135deg,#E65100,#FF9800)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Your Operations?</span>
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-sm leading-loose" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-body)' }}>
              Our energy team can develop a bespoke renewable solution for your site — from feasibility through to financial close and operation.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-orange">Get A Proposal <ArrowRight size={15} /></Link>
              <Link href="/about" className="btn-outline-white">About Us</Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
