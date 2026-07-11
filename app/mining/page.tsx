import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import AnimateIn from '@/components/ui/AnimateIn';
import CountUp   from '@/components/ui/CountUp';
import PageHero  from '@/components/ui/PageHero';
import { getServicesBySector, getOperationsStats, getSiteImages, getAssetUrl, type Service, type OperationStat } from '@/lib/directus';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Mining Operations',
  description: 'World-class open-cut extraction, ore processing, and mine logistics & port operations across four continents.',
};

const FB_SERVICES: Service[] = [
  { id: 1, status: 'published', sort: 1, featured: true, title: 'Open-Cut Extraction', slug: 'open-cut-extraction', sector: 'mining', short_description: 'Twelve active pits across three continents, moving 48 Mt/yr with autonomous fleets and real-time ore-grade control.', description: 'We operate twelve active open-cut pits across the Pilbara, West Africa, and Zambia, processing 48 million tonnes per annum at industry-leading strip ratios. Our 120+ autonomous Komatsu trucks run 24 hours a day with zero fatigue incidents since 2022, cutting haulage unit costs by 23%. Electronic detonator blast designs achieve P80 fragmentation of 120 mm, minimising crusher downtime. Ore-grade sensing via pXRF and conveyor-mounted analysers feeds a live ore-body model, keeping mill feed grade variance below 2%.', cover_image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=960&q=80', background_image: null, icon_name: null, stats: [{ label: 'Annual capacity', value: '48', unit: 'Mt' }, { label: 'Active pits', value: '12', unit: '' }, { label: 'Autonomous trucks', value: '120', unit: '+' }] },
  { id: 2, status: 'published', sort: 2, featured: true, title: 'Ore Processing & Refining', slug: 'ore-processing', sector: 'mining', short_description: 'HPGR, flotation, and acid-leach circuits tuned to each ore type — consistently 94%+ metal recovery across six hubs.', description: 'Our six processing hubs combine high-pressure grinding rolls, selective flotation, and acid-leach hydrometallurgical circuits designed around the specific mineralogy of each deposit. Advanced process control keeps recoveries above 94% — roughly 3 percentage points above the industry average for comparable ore types. Both greenfield plants commissioned in the past five years came in on budget and 45 days ahead of the contracted schedule. A shared reagent supply agreement across all Australian sites reduces reagent cost per tonne by 18%.', cover_image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=960&q=80', background_image: null, icon_name: null, stats: [{ label: 'Recovery rate', value: '94', unit: '%+' }, { label: 'Processing hubs', value: '6', unit: '' }, { label: 'Throughput', value: '35', unit: 'Mt/yr' }] },
  { id: 3, status: 'published', sort: 3, featured: true, title: 'Mine Logistics & Port', slug: 'mine-logistics', sector: 'mining', short_description: 'Private 320 km rail corridor and dedicated shiploaders at Port Hedland — pit to ship in 18 hours, Capesize capable.', description: 'Third-party logistics dependency is a hidden cost driver in remote mining. Our 320 km dedicated rail corridor links all Pilbara operations to our privately owned Port Hedland facility, where two shiploaders handle vessels up to Capesize class. Average ship turnaround is 18 hours — among the fastest in the region — saving approximately A$4M per year in demurrage charges. Real-time rail scheduling via digital twin simulation lets us respond to any mining sequence change within 90 minutes, preventing stockpile overflow and protecting product grade consistency.', cover_image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=960&q=80', background_image: null, icon_name: null, stats: [{ label: 'Rail network', value: '320', unit: 'km' }, { label: 'Port capacity', value: '60', unit: 'Mt/yr' }, { label: 'Ship turnaround', value: '18', unit: 'hrs avg' }] },
];

const FB_STATS: OperationStat[] = [
  { id: 1, status: 'published', sort: 1, value: '48', unit: 'Mt/yr', label: 'Extraction Capacity', description: null, icon_image: null },
  { id: 2, status: 'published', sort: 2, value: '12', unit: '', label: 'Active Mine Sites', description: null, icon_image: null },
  { id: 3, status: 'published', sort: 3, value: '94', unit: '%+', label: 'Average Recovery Rate', description: null, icon_image: null },
  { id: 4, status: 'published', sort: 4, value: '320', unit: 'km', label: 'Dedicated Rail Network', description: null, icon_image: null },
];

const PROCESS_STEPS = [
  { num: '01', title: 'Exploration & Drilling', body: 'Systematic resource delineation using RC and diamond drilling, geophysical surveying, and ore body modelling.' },
  { num: '02', title: 'Blast & Load', body: 'Precision blasting with electronic detonators and autonomous drill rigs optimised for fragmentation and safety.' },
  { num: '03', title: 'Haulage & Crushing', body: 'Autonomous trucks haul ore to primary crushers, minimising costs and eliminating operator fatigue risk.' },
  { num: '04', title: 'Processing & Refining', body: 'HPGR, flotation, and hydrometallurgical circuits achieve best-in-class recoveries for each ore type.' },
  { num: '05', title: 'Rail & Port', body: 'Dedicated rail corridors and private port receival facilities ensure reliable product delivery to market.' },
];

export default async function MiningPage() {
  const [servicesRes, statsRes, imgsRes] = await Promise.allSettled([
    getServicesBySector('mining'), getOperationsStats(), getSiteImages(),
  ]);

  const services = servicesRes.status === 'fulfilled' ? servicesRes.value : FB_SERVICES;
  const stats    = statsRes.status    === 'fulfilled' ? statsRes.value    : FB_STATS;
  const imgs     = imgsRes.status     === 'fulfilled' ? imgsRes.value     : null;
  const bgUrl    = imgs ? getAssetUrl(imgs.mining_sector_image, { width: 1920, height: 900, fit: 'cover', quality: 85 }) : 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80';

  return (
    <>
      <PageHero
        overline="Mining Operations"
        headline="Extraction Excellence at Scale"
        subheadline="From greenfield development to steady-state production — our vertically integrated mining operations deliver industry-leading costs and recoveries."
        bgUrl={bgUrl}
        breadcrumbs={[{ label: 'Mining Operations' }]}
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/contact" className="btn-orange">Partner With Us <ArrowRight size={15} /></Link>
          <Link href="#services" className="btn-outline-white">Our Services</Link>
        </div>
      </PageHero>

      {/* Stats band */}
      <div style={{ background: '#0D2544', borderBottom: '1px solid #152E52' }}>
        <div className="container-xl py-10">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.slice(0, 4).map((s, i) => (
              <AnimateIn key={s.id} delay={i * 0.08}>
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
            <span className="text-overline">What We Do</span>
            <span className="accent-line mt-3 mb-6" />
            <h2 className="text-display mb-14">Mining Capabilities</h2>
          </AnimateIn>

          <div className="space-y-16">
            {services.map((svc, i) => {
              const imgUrl = getAssetUrl(svc.cover_image ?? svc.background_image, { width: 960, height: 640, fit: 'cover', quality: 85 });
              const isEven = i % 2 === 0;
              return (
                <AnimateIn key={svc.id} delay={0.1}>
                  <div id={svc.slug} className={`grid gap-10 lg:grid-cols-2 lg:items-center ${isEven ? '' : 'lg:[&>*:first-child]:order-2'}`}>
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden">
                      {imgUrl ? (
                        <Image src={imgUrl} alt={svc.title} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center"
                          style={{ background: 'linear-gradient(135deg, #1A1A1A, #2A2A2A)' }}>
                          <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.2)' }}>
                            {svc.title.toUpperCase()}
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-x-0 bottom-0 h-1" style={{ background: 'linear-gradient(90deg,#007A96,#79B82A)' }} />
                    </div>
                    {/* Text */}
                    <div>
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
                              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.6rem', background: 'linear-gradient(135deg,#007A96,#79B82A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>
                                {st.value}<span style={{ fontSize: '0.9rem' }}>{st.unit}</span>
                              </div>
                              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BDBDBD', marginTop: '3px' }}>{st.label}</div>
                            </div>
                          ))}
                        </div>
                      )}
                      <Link href="/contact" className="btn-orange mt-8 inline-flex">
                        Enquire Now <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="section-pad" style={{ background: '#F5F5F5' }}>
        <div className="container-xl">
          <AnimateIn>
            <span className="text-overline">How We Operate</span>
            <span className="accent-line mt-3 mb-6" />
            <h2 className="text-display mb-14">From Pit to Port</h2>
          </AnimateIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS_STEPS.map((step, i) => (
              <AnimateIn key={step.num} delay={i * 0.07}>
                <div className="relative p-6 h-full" style={{ background: '#FFFFFF', borderTop: '3px solid transparent', transition: 'border-color 0.3s' }}>
                  <div className="mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '2.5rem', lineHeight: 1, background: 'linear-gradient(135deg,#007A96,#79B82A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {step.num}
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9rem', color: '#111111', marginBottom: '0.5rem' }}>{step.title}</h4>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: '#757575', lineHeight: 1.7 }}>{step.body}</p>
                  {i < PROCESS_STEPS.length - 1 && (
                    <ChevronRight size={16} className="absolute -right-3 top-1/2 -translate-y-1/2 hidden lg:block" style={{ color: '#00A8C4', zIndex: 1 }} />
                  )}
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
                Partner With Us
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(1.8rem,3.5vw,3rem)', color: '#FFFFFF', lineHeight: 1.1 }}>
              Ready to Discuss a<br /><span style={{ background: 'linear-gradient(135deg,#007A96,#79B82A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Mining Partnership?</span>
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-sm leading-loose" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-body)' }}>
              Our team is available to discuss contract mining, joint ventures, offtake agreements, and technical consultancy.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-orange">Get In Touch <ArrowRight size={15} /></Link>
              <Link href="/about" className="btn-outline-white">About Us</Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
