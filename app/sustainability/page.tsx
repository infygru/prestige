import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Leaf, Sun, Zap, Users, Shield, Droplets } from 'lucide-react';
import AnimateIn from '@/components/ui/AnimateIn';
import CountUp from '@/components/ui/CountUp';
import PageHero from '@/components/ui/PageHero';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Sustainability | Prestige Mining & Energy',
  description:
    'How Prestige Mining & Energy delivers responsible resource extraction — from biochar production and carbon removal to solar energy integration and community investment across Central Africa.',
};

const PILLARS = [
  {
    icon: Leaf,
    title: 'Biochar & Carbon Removal',
    body: 'Transforming agricultural and forestry residues into carbon-negative biochar — sequestering CO₂ for centuries while improving degraded Sahelian soils.',
    color: '#79B82A',
  },
  {
    icon: Sun,
    title: 'Solar Energy',
    body: 'Hybrid solar-diesel systems at all mine sites reduce diesel consumption, cut emissions, and lower our operational carbon intensity year on year.',
    color: '#D4A017',
  },
  {
    icon: Shield,
    title: 'Zero-Harm Operations',
    body: 'International HSSE protocols, zero major environmental incidents since inception, and progressive land rehabilitation running concurrent with extraction.',
    color: '#007A96',
  },
  {
    icon: Droplets,
    title: 'Water Stewardship',
    body: 'Zero-discharge policy at all processing plants — all process water recycled, monitored, and independently verified on a quarterly basis.',
    color: '#00A8C4',
  },
  {
    icon: Users,
    title: 'Community Investment',
    body: 'Over 85% national workforce. Community development funds investing in schools, clean water, and health facilities near every operational site.',
    color: '#79B82A',
  },
  {
    icon: Zap,
    title: 'Responsible Extraction',
    body: 'Operating to ICMM principles and ISO 14001-aligned HSE management systems — regardless of what local regulations require.',
    color: '#007A96',
  },
];

const METRICS = [
  { value: '85',  unit: '%',   label: 'National Workforce' },
  { value: '0',   unit: '',    label: 'Major Env. Incidents' },
  { value: '2.4', unit: 'MWp', label: 'Solar Installed' },
  { value: '500', unit: '+',   label: 'Farmers Reached' },
  { value: '15',  unit: '+',   label: 'Years In Country' },
  { value: '2',   unit: '',    label: 'Countries Active' },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        overline="Sustainability"
        headline="Mining for the Future, Not Just the Present."
        subheadline="Prestige Mining & Energy is redefining responsible resource extraction in Central Africa — through biochar production, solar integration, environmental stewardship, and genuine community partnership."
        bgUrl="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: 'Sustainability' }]}
      />

      {/* Overview */}
      <section className="section-pad" style={{ background: '#FFFFFF' }}>
        <div className="container-xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <AnimateIn direction="left">
              <span className="text-overline">Our Commitment</span>
              <span className="accent-line mt-3 mb-6" />
              <h2 className="text-display">Responsible Operations for the Long Term</h2>
              <p className="mt-5 text-sm leading-loose" style={{ color: '#6B6B6B' }}>
                Prestige Mining & Energy recognises that our social licence to operate in Chad and beyond
                depends on delivering tangible benefits to communities, protecting the environment, and
                operating to international standards — even where local regulations require less.
              </p>
              <p className="mt-4 text-sm leading-loose" style={{ color: '#6B6B6B' }}>
                Beyond meeting baseline standards, we have built active sustainability programmes: producing
                biochar from Central African agricultural residues to sequester carbon and restore soils,
                deploying solar power across our mine sites, and investing in the communities that host
                our operations.
              </p>
              <Link href="/contact" className="btn-orange mt-8 inline-flex">
                Sustainability Enquiries <ArrowRight size={15} />
              </Link>
            </AnimateIn>

            <AnimateIn direction="right" delay={0.1}>
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85"
                  alt="Responsible mining and environmental stewardship in Central Africa"
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 50vw, 100vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-1.5"
                  style={{ background: 'linear-gradient(90deg,#007A96,#79B82A)' }} />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Six Pillars */}
      <section className="section-pad" style={{ background: '#F5F5F5' }}>
        <div className="container-xl">
          <AnimateIn>
            <span className="text-overline">Our Programmes</span>
            <span className="accent-line mt-3 mb-6" />
            <h2 className="text-display mb-14">Six Pillars of Responsible Practice</h2>
          </AnimateIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <AnimateIn key={p.title} delay={i * 0.08}>
                  <div className="feature-card p-7 h-full">
                    <div className="mb-5 flex h-10 w-10 items-center justify-center"
                      style={{ background: `${p.color}1A` }}>
                      <Icon size={20} style={{ color: p.color }} />
                    </div>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: '#111111', marginBottom: '0.5rem' }}>
                      {p.title}
                    </h4>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#757575', lineHeight: 1.7 }}>
                      {p.body}
                    </p>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Biochar */}
      <section id="biochar" className="section-pad" style={{ background: '#FFFFFF' }}>
        <div className="container-xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <AnimateIn direction="left">
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=85"
                  alt="Biochar production from agricultural biomass"
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 50vw, 100vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-1.5"
                  style={{ background: 'linear-gradient(90deg,#79B82A,#007A96)' }} />
              </div>
            </AnimateIn>

            <AnimateIn direction="right" delay={0.1}>
              <span className="text-overline">Carbon Removal</span>
              <span className="accent-line mt-3 mb-6" />
              <h2 className="text-display">Biochar & Clean Carbon Initiative</h2>
              <p className="mt-5 text-sm leading-loose" style={{ color: '#6B6B6B' }}>
                Central Africa generates vast quantities of agricultural residue — cotton stalks, wood chips,
                and crop waste — that would otherwise be burned openly in the field. Prestige has built a
                biochar programme that transforms this biomass through controlled pyrolysis into stable,
                carbon-rich biochar.
              </p>
              <p className="mt-4 text-sm leading-loose" style={{ color: '#6B6B6B' }}>
                Each tonne of biochar produced sequesters approximately 2.5 tonnes of CO₂ for centuries.
                As a clean-burning biocoal substitute, it also displaces conventional coal in industrial
                processes — cutting emissions across the value chain. Applied to degraded Sahelian soils,
                it restores fertility and water retention, directly benefiting local farmers.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Pyrolysis of cotton stalks, wood chips, and crop residues from local communities',
                  'Biochar applied to degraded Sahelian soils to restore fertility and water retention',
                  'Biocoal supplied as a low-emission substitute for conventional coal',
                  'Each tonne of biochar removes ~2.5 t CO₂ equivalent from the atmosphere',
                  'Over 500 smallholder farmers receive biochar for soil improvement annually',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{ background: '#79B82A' }} />
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: '#4A4A4A', lineHeight: 1.7 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Solar */}
      <section id="solar" className="section-pad"
        style={{ background: 'linear-gradient(160deg,#071524 0%,#0D2544 60%,#071828 100%)' }}>
        <div className="container-xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <AnimateIn direction="left">
              <span className="text-overline">Renewable Energy</span>
              <span className="accent-line mt-3 mb-6" />
              <h2 className="text-display-light">Solar Power at the Mine Face</h2>
              <p className="mt-5 text-sm leading-loose" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Chad's Sahel receives some of the highest solar irradiance on earth — over 2,000 kWh/m²/year.
                We are turning this abundance into operational advantage. Hybrid solar-diesel power systems
                now operate at our Moyen-Chari antimony sites and are being deployed across the Doba Basin.
              </p>
              <p className="mt-4 text-sm leading-loose" style={{ color: 'rgba(255,255,255,0.6)' }}>
                By displacing diesel generators with solar, we cut operational carbon intensity, reduce
                fuel logistics costs, and provide more reliable power to our processing equipment. Our
                target is 100% renewable energy for all surface operations by 2028.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 border-y py-6"
                style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                {[
                  ['2.4', 'MWp Installed'],
                  ['35%',  'Diesel Reduction'],
                  ['2028', 'Renewables Target'],
                ].map(([val, lbl]) => (
                  <div key={lbl}>
                    <div style={{
                      fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.8rem', lineHeight: 1,
                      background: 'linear-gradient(135deg,#007A96,#79B82A)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    }}>
                      {val}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-heading)', fontSize: '0.58rem', fontWeight: 600,
                      letterSpacing: '0.15em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.4)', marginTop: '4px', lineHeight: 1.4,
                    }}>
                      {lbl}
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn direction="right" delay={0.1}>
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85"
                  alt="Solar panels powering mining operations"
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 50vw, 100vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-1.5"
                  style={{ background: 'linear-gradient(90deg,#007A96,#79B82A)' }} />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Environmental Stewardship */}
      <section id="environment" className="section-pad" style={{ background: '#F5F5F5' }}>
        <div className="container-xl">
          <AnimateIn>
            <span className="text-overline">Environment</span>
            <span className="accent-line mt-3 mb-6" />
            <h2 className="text-display mb-14">Environmental Stewardship</h2>
          </AnimateIn>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <AnimateIn direction="left" delay={0.05}>
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
                <Image
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85"
                  alt="Land rehabilitation and environmental stewardship"
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 50vw, 100vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-1.5"
                  style={{ background: 'linear-gradient(90deg,#007A96,#79B82A)' }} />
              </div>
            </AnimateIn>

            <AnimateIn direction="right" delay={0.1}>
              <div className="space-y-5">
                {[
                  ['Progressive Mine Rehabilitation', 'Land reclamation programmes run concurrently with active operations — not deferred to mine closure. Topsoil is preserved, graded, and revegetated in stages as each pit section is exhausted.'],
                  ['Water Management', 'Zero-discharge policy at all processing plants. All process water is treated, recycled, and monitored continuously. Groundwater quality is independently tested on a quarterly basis.'],
                  ['Biodiversity Assessment', 'Pre-mining ecological surveys and post-closure habitat restoration plans are mandatory for every new site, regardless of local regulatory requirements.'],
                  ['Air Quality & Dust Control', 'Real-time dust monitoring at site boundaries. Sealed haul roads, water sprays, and speed controls prevent particulate exceedances in neighbouring communities.'],
                  ['Annual Environmental Reporting', 'Independently verified environmental performance reports published annually and made available to investors, regulators, and host communities.'],
                ].map(([title, body]) => (
                  <div key={title} className="feature-card p-6">
                    <div className="mb-2 h-0.5 w-6"
                      style={{ background: 'linear-gradient(90deg,#007A96,#79B82A)' }} />
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', color: '#111111', marginBottom: '0.4rem' }}>
                      {title}
                    </h4>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.84rem', color: '#757575', lineHeight: 1.7 }}>
                      {body}
                    </p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Community */}
      <section id="community" className="section-pad" style={{ background: '#FFFFFF' }}>
        <div className="container-xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <AnimateIn direction="left">
              <span className="text-overline">People & Communities</span>
              <span className="accent-line mt-3 mb-6" />
              <h2 className="text-display">Community Investment & Local Value</h2>
              <p className="mt-5 text-sm leading-loose" style={{ color: '#6B6B6B' }}>
                Lasting value is built alongside host communities, not apart from them. Over 85% of our
                site-level workforce are nationals of Chad — trained, employed, and developed through
                our operations.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Community development fund investing in schools, clean water, and health facilities',
                  'Local procurement programmes prioritising Chad-based suppliers and contractors',
                  'Agricultural skills training and sustainable farming support near mine sites',
                  'Biochar distribution programme benefiting 500+ smallholder farmers annually',
                  'Transparent grievance mechanisms available to all community members',
                  'Free, prior and informed consent (FPIC) processes before any new site development',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{ background: '#00A8C4' }} />
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: '#4A4A4A', lineHeight: 1.7 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </AnimateIn>

            <AnimateIn direction="right" delay={0.1}>
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85"
                  alt="Community investment and local employment in Central Africa"
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 50vw, 100vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-1.5"
                  style={{ background: 'linear-gradient(90deg,#007A96,#79B82A)' }} />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="section-pad" style={{ background: '#0A1628' }}>
        <div className="container-xl">
          <AnimateIn>
            <div className="text-center mb-14">
              <span className="text-overline">By the Numbers</span>
              <span className="accent-line mx-auto mt-3 mb-6" />
              <h2 className="text-display-light">Our Sustainability Performance</h2>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-2 gap-px lg:grid-cols-3"
            style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
            {METRICS.map((m, i) => (
              <AnimateIn key={m.label} delay={i * 0.07}>
                <div className="flex flex-col items-center justify-center py-10 px-6 text-center"
                  style={{ borderRight: (i + 1) % 3 !== 0 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                  <div style={{
                    fontFamily: 'var(--font-heading)', fontWeight: 800,
                    fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', lineHeight: 1,
                    background: 'linear-gradient(135deg,#007A96,#79B82A)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>
                    <CountUp value={m.value} />
                    <span style={{ fontSize: '1.2rem' }}>{m.unit}</span>
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-heading)', fontSize: '0.62rem', fontWeight: 600,
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.45)', marginTop: '10px',
                  }}>
                    {m.label}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section id="standards" className="section-pad" style={{ background: '#F5F5F5' }}>
        <div className="container-xl">
          <AnimateIn>
            <span className="text-overline">Standards & Governance</span>
            <span className="accent-line mt-3 mb-6" />
            <h2 className="text-display mb-14">Certifications & Frameworks</h2>
          </AnimateIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['ICMM Principles', 'Operating to the International Council on Mining and Metals 10 principles — the global gold standard for responsible mining practice.'],
              ['ISO 14001-Aligned HSE', 'Environmental management systems aligned with ISO 14001 at all processing facilities, with annual third-party verification audits.'],
              ['Transparent Disclosure', 'Annual independently verified environmental performance reports shared with investors, regulators, and host communities.'],
              ['Zero Tolerance on Corruption', 'Disciplined corporate governance with zero tolerance for corruption at any level, aligned with OECD Anti-Bribery Convention principles.'],
              ['Community Social Licence', 'Formal free, prior and informed consent (FPIC) processes conducted before any new site development or significant operational change.'],
              ['Carbon Tracking', 'Scope 1 and Scope 2 emissions monitored and reported annually, with biochar carbon removal independently verified by a third party.'],
            ].map(([title, body], i) => (
              <AnimateIn key={title} delay={i * 0.07}>
                <div className="feature-card p-7 h-full">
                  <div className="mb-5 h-1 w-8" style={{ background: 'linear-gradient(90deg,#007A96,#79B82A)' }} />
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: '#111111', marginBottom: '0.5rem' }}>
                    {title}
                  </h4>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#757575', lineHeight: 1.7 }}>
                    {body}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad"
        style={{ background: 'linear-gradient(160deg,#071524 0%,#0D2544 60%,#071828 100%)' }}>
        <div className="container-xl text-center">
          <AnimateIn>
            <span className="text-overline">Get Involved</span>
            <span className="accent-line mx-auto mt-3 mb-6" />
            <h2 className="text-display-light mx-auto max-w-2xl">
              Partner With a Mining Company That Takes Sustainability Seriously
            </h2>
            <p className="mt-5 text-sm leading-loose mx-auto max-w-xl"
              style={{ color: 'rgba(255,255,255,0.55)' }}>
              Whether you are an investor, offtake partner, development organisation, or community
              representative — we welcome engagement on our sustainability programmes and reporting.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-orange">Contact Us <ArrowRight size={15} /></Link>
              <Link href="/about" className="btn-dark">About Prestige</Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
