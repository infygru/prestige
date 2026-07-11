import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ChevronRight, Pickaxe, Zap, BarChart3, Globe2, ShieldCheck, Leaf } from 'lucide-react';
import { cache } from 'react';
import AnimateIn    from '@/components/ui/AnimateIn';
import CountUp      from '@/components/ui/CountUp';
import HeroSection  from '@/components/ui/HeroSection';
import {
  getHomepageData, getSiteImages, getOperationsStats,
  getLatestInsights, getFeaturedServices, getGalleryItems,
  getAssetUrl,
  type HomepageData, type SiteImages, type OperationStat,
  type PressInsight, type Service, type GalleryItem, type InsightCategory,
} from '@/lib/directus';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Critical Minerals | Industrial Scale Mining',
  description: 'Prestige Mining — world-class extraction of iron ore, copper, gold and nickel across Australia, West Africa, and beyond.',
};

const fetchHP       = cache(getHomepageData);
const fetchImgs     = cache(getSiteImages);
const fetchStats    = cache(getOperationsStats);
const fetchInsights = cache(() => getLatestInsights(3));
const fetchServices = cache(getFeaturedServices);
const fetchGallery  = cache(getGalleryItems);

// ─── Fallbacks ────────────────────────────────────────────────────────────────

const FB_HP: HomepageData = {
  id: 1,
  hero_headline: 'Unearthing Resources.\nShaping Tomorrow.',
  hero_subheadline: 'From the Pilbara to West Africa — Prestige Mining extracts iron ore, copper, gold, and nickel at industrial scale, with zero-compromise standards on safety, efficiency, and environmental stewardship.',
  hero_video_url: null, hero_background_image: null,
  hero_cta_primary_label:   'Explore Mining', hero_cta_primary_url:   '/mining',
  hero_cta_secondary_label: 'Our Story',      hero_cta_secondary_url: '/about',
  about_overline:  'Since 1984',
  about_headline:  'From One Mine to Four Countries',
  about_body: 'Founded in Perth in 1984, Prestige Mining began with a single open-cut iron ore operation in the Pilbara. A decade of disciplined reinvestment expanded us into copper in Zambia, gold in Ghana, and thermal coal in Indonesia — before the 2010s brought a decisive pivot toward clean energy.\n\nToday, our renewable portfolio generates more electricity than our mine sites consume. The surplus — sold to regional grids under long-term PPAs — has become one of our fastest-growing revenue streams, and a template for how resource companies can lead, not merely adapt to, the energy transition.',
  about_cta_label: 'Read Our Full Story', about_cta_url: '/about',
  sectors_headline:      'Two businesses. One integrated model.',
  sectors_description:   'Mining generates the raw materials the world needs. Energy powers the transition to a lower-carbon economy. Prestige operates both — and the intersection is where we create our greatest value.',
  operations_headline:   'Scale you can measure',
  operations_description:'From the Pilbara to West Africa, our operations run 24 hours a day with autonomous technology and real-time data driving every decision.',
  gallery_headline:      'Inside Our Operations',
  insights_headline:     'News, Research & Perspectives',
};

const FB_IMGS: SiteImages = {
  id: 1,
  hero_background:       'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1600&q=85',
  hero_overlay_image:    null,
  about_image:           'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=85',
  mining_sector_image:   'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80',
  energy_sector_image:   'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80',
  operations_background: null,
  cta_background:        null,
};

const FB_STATS: OperationStat[] = [
  { id: 1, status: 'published', sort: 1, value: '4',      unit: 'Countries',  label: 'Global Presence',       description: null, icon_image: null },
  { id: 2, status: 'published', sort: 2, value: '48',     unit: 'Mt/yr',      label: 'Extraction Capacity',    description: null, icon_image: null },
  { id: 3, status: 'published', sort: 3, value: '2.4',    unit: 'GW',         label: 'Clean Energy Portfolio', description: null, icon_image: null },
  { id: 4, status: 'published', sort: 4, value: '12,000', unit: '+',          label: 'Employees Worldwide',    description: null, icon_image: null },
];

const FB_SERVICES: Service[] = [
  { id: 1, status: 'published', sort: 1, featured: true, title: 'Open-Cut Extraction',      slug: 'open-cut-extraction', sector: 'mining', short_description: 'Autonomous truck fleets, precision blast design, and real-time ore-grade control across 12 active pit complexes in Australia and West Africa.', description: '', cover_image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80', background_image: null, icon_name: null, stats: null },
  { id: 2, status: 'published', sort: 2, featured: true, title: 'Ore Processing & Refining', slug: 'ore-processing',      sector: 'mining', short_description: 'HPGR comminution and selective flotation circuits purpose-built for each ore type, delivering a 94.2% average metal recovery across all six processing hubs.', description: '', cover_image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80', background_image: null, icon_name: null, stats: null },
  { id: 3, status: 'published', sort: 3, featured: true, title: 'Mine Logistics & Port',     slug: 'mine-logistics',      sector: 'mining', short_description: 'A 320-km private rail corridor and dedicated shiploading facility at Port Hedland — achieving a 14-hour average ship turnaround with no third-party dependency.', description: '', cover_image: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80', background_image: null, icon_name: null, stats: null },
  { id: 4, status: 'published', sort: 4, featured: true, title: 'Utility-Scale Solar',       slug: 'utility-solar',       sector: 'energy', short_description: 'Bifacial panels and single-axis trackers across a 1.8 GW portfolio — with a 97% average availability factor and LCOE as low as $28/MWh.', description: '', cover_image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80', background_image: null, icon_name: null, stats: null },
  { id: 5, status: 'published', sort: 5, featured: true, title: 'Battery Storage Systems',   slug: 'battery-storage',     sector: 'energy', short_description: 'Grid-scale BESS installations have collectively displaced 45 million litres of diesel per year across nine remote mine sites, with sub-1-second response for frequency regulation.', description: '', cover_image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80', background_image: null, icon_name: null, stats: null },
  { id: 6, status: 'published', sort: 6, featured: true, title: 'Power Purchase Agreements', slug: 'power-purchase',      sector: 'energy', short_description: 'Bankable 10–20 year PPAs backed by our own generation assets, consistently priced $15–30/MWh below spot — with full Scope 2 decarbonisation and zero capex for the buyer.', description: '', cover_image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80', background_image: null, icon_name: null, stats: null },
];

const FB_INSIGHTS: PressInsight[] = [
  { id: 1, status: 'published', published_date: '2025-07-01', title: 'Newman Processing Hub Reaches Nameplate Capacity Six Weeks Early', slug: 'wa-processing-hub-2025', category: 'press_release', excerpt: 'The $380M facility at Newman, WA, achieved its target throughput of 12 Mt/yr in Q3 2025 — a major milestone for the Pilbara expansion programme and a $22M saving on the project schedule.', body: '', cover_image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80', author: 'Corporate Affairs', featured: true },
  { id: 2, status: 'published', published_date: '2025-06-18', title: 'Why Mine Operators Who Own Their Power Generation Are Winning on Cost', slug: 'vertical-integration', category: 'industry_insight', excerpt: 'The structural advantage is now measurable: our fully renewable-powered sites are running $4.20 per tonne below the industry average on energy costs alone — a gap that widens every year as diesel prices rise.', body: '', cover_image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80', author: 'Strategy & Research', featured: false },
  { id: 3, status: 'published', published_date: '2025-05-30', title: 'Scope 1 Emissions Down 14% in H1 2025 — Net Zero Trajectory on Track', slug: 'sustainability-2025', category: 'sustainability', excerpt: 'The commissioning of 320 MW of new solar capacity across three Pilbara mine sites drove a 14% reduction in Scope 1 emissions for H1 2025, putting us firmly on track for our 50% interim target by 2030.', body: '', cover_image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80', author: 'ESG Office', featured: false },
];

const FB_GALLERY: GalleryItem[] = [
  { id: 1, status: 'published', sort: 1, image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80', alt_text: 'Heavy machinery in open-cut pit operation', caption: 'Pilbara Open-Cut Operations', category: 'mining', span_wide: true },
  { id: 2, status: 'published', sort: 2, image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80', alt_text: 'Industrial processing facility interior', caption: 'Newman Processing Hub', category: 'facilities', span_wide: false },
  { id: 3, status: 'published', sort: 3, image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80', alt_text: 'Utility-scale solar farm panels', caption: 'Goldfields Solar — 400 MW', category: 'energy', span_wide: false },
  { id: 4, status: 'published', sort: 4, image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80', alt_text: 'Workers in pre-shift safety briefing', caption: 'Pre-Shift Safety Briefing', category: 'people', span_wide: false },
  { id: 5, status: 'published', sort: 5, image: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80', alt_text: 'Port facility with shipping containers', caption: 'Port Hedland Export Terminal', category: 'facilities', span_wide: false },
  { id: 6, status: 'published', sort: 6, image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80', alt_text: 'Grid-scale battery energy storage system', caption: 'Kalgoorlie BESS — 80 MWh', category: 'energy', span_wide: true },
];

const CAT_META: Record<InsightCategory, { label: string; bg: string; color: string }> = {
  press_release:    { label: 'Press Release',    bg: '#E3F6FA', color: '#007A96' },
  industry_insight: { label: 'Industry Insight', bg: '#F5F5F5', color: '#333333' },
  project_update:   { label: 'Project Update',   bg: '#E8F5E9', color: '#2E7D32' },
  sustainability:   { label: 'Sustainability',   bg: '#E8F5E9', color: '#2E7D32' },
};

const SERVICE_ICONS = [Pickaxe, BarChart3, Globe2, Zap, ShieldCheck, Leaf];

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-AU', { day: '2-digit', month: 'short', year: 'numeric' });
}

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────────────────────────────────────

function AboutSection({ hp, imgs }: { hp: HomepageData; imgs: SiteImages }) {
  const imgUrl = getAssetUrl(imgs.about_image, { width: 900, height: 700, fit: 'cover', quality: 85 });

  return (
    <section className="section-pad" style={{ background: '#FFFFFF' }}>
      <div className="container-xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Image */}
          <AnimateIn direction="left">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:h-[540px]">
                {imgUrl ? (
                  <Image src={imgUrl} alt="Prestige Mining operations" fill
                    sizes="(min-width:1024px) 50vw, 100vw" className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #F5F5F5 0%, #E0E0E0 100%)' }}>
                    <div className="text-center">
                      <div className="text-5xl font-bold mb-2"
                        style={{ fontFamily: 'var(--font-heading)', color: '#E0E0E0' }}>PM&amp;E</div>
                      <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.62rem', letterSpacing: '0.18em', color: '#BDBDBD' }}>
                        ADD IMAGE IN DIRECTUS
                      </p>
                    </div>
                  </div>
                )}
                {/* Bottom colour band */}
                <div className="absolute inset-x-0 bottom-0 h-1.5"
                  style={{ background: 'linear-gradient(90deg, #007A96, #79B82A)' }} />
              </div>
              {/* Orange corner accent */}
              <div className="absolute -top-4 -left-4 h-16 w-16 hidden lg:block"
                style={{ borderTop: '3px solid #00A8C4', borderLeft: '3px solid #00A8C4' }} />
              {/* Floating years badge */}
              <div className="absolute -right-6 bottom-10 hidden lg:flex flex-col items-center justify-center px-6 py-5 shadow-xl"
                style={{ background: 'linear-gradient(135deg, #007A96, #79B82A)' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1 }}>40+</span>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', marginTop: '4px' }}>Years</span>
              </div>
            </div>
          </AnimateIn>

          {/* Text */}
          <AnimateIn direction="right" delay={0.1}>
            <span className="text-overline">{hp.about_overline ?? 'Who We Are'}</span>
            <span className="accent-line mt-3 mb-6" />
            <h2 className="text-display">{hp.about_headline}</h2>

            {hp.about_body?.split('\n\n').map((para, i) => (
              <p key={i} className="mt-4 text-sm leading-loose" style={{ color: '#6B6B6B' }}>
                {para}
              </p>
            ))}

            {/* Milestones */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-y py-7" style={{ borderColor: '#F0F0F0' }}>
              {[['1984', 'Founded'], ['22+', 'Active Sites'], ['4', 'Countries']].map(([val, lbl]) => (
                <div key={lbl}>
                  <div style={{
                    fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '2rem', lineHeight: 1,
                    background: 'linear-gradient(135deg, #007A96, #79B82A)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>
                    {val}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-heading)', fontSize: '0.58rem', fontWeight: 600,
                    letterSpacing: '0.15em', textTransform: 'uppercase', color: '#BDBDBD', marginTop: '5px',
                  }}>
                    {lbl}
                  </div>
                </div>
              ))}
            </div>

            {hp.about_cta_url && (
              <Link href={hp.about_cta_url} className="btn-orange mt-8 inline-flex">
                {hp.about_cta_label ?? 'Our Story'} <ArrowRight size={15} />
              </Link>
            )}
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTORS — dark editorial
// ─────────────────────────────────────────────────────────────────────────────

function SectorsSection({ hp, imgs }: { hp: HomepageData; imgs: SiteImages }) {
  const miningImg = getAssetUrl(imgs.mining_sector_image, { width: 960, height: 720, fit: 'cover', quality: 85 });
  const energyImg = getAssetUrl(imgs.energy_sector_image, { width: 960, height: 720, fit: 'cover', quality: 85 });

  const sectors = [
    {
      key: 'mining', label: 'Mining Operations', href: '/mining',
      imgUrl: miningImg,
      headline: 'From pit to port — precision at scale.',
      items: ['Open-Cut Extraction', 'Ore Processing & Refining', 'Mine Logistics & Port'],
      bg: 'linear-gradient(135deg, #071524 0%, #0D2544 100%)',
    },
    {
      key: 'energy', label: 'Clean Energy', href: '/energy',
      imgUrl: energyImg,
      headline: 'Powering the energy transition.',
      items: ['Utility-Scale Solar', 'Battery Storage Systems', 'Power Purchase Agreements'],
      bg: 'linear-gradient(135deg, #081628 0%, #0a1e38 100%)',
    },
  ];

  return (
    <section className="section-pad" style={{ background: '#F5F5F5' }}>
      <div className="container-xl">
        <AnimateIn variant="blur">
          <div className="mb-14 max-w-2xl">
            <span className="text-overline">{hp.sectors_headline ?? 'Our Sectors'}</span>
            <span className="accent-line mt-3 mb-5" />
            <h2 className="text-display">{hp.sectors_headline ?? 'Two Sectors. One Mission.'}</h2>
            <p className="mt-4 text-sm leading-loose" style={{ color: '#6B6B6B' }}>
              {hp.sectors_description}
            </p>
          </div>
        </AnimateIn>

        <div className="grid gap-5 lg:grid-cols-2">
          {sectors.map((s, i) => (
            <AnimateIn key={s.key} delay={i * 0.12} direction={i === 0 ? 'left' : 'right'}>
              <Link href={s.href}
                className="group relative block overflow-hidden"
                style={{ minHeight: '460px' }}
              >
                {s.imgUrl ? (
                  <Image src={s.imgUrl} alt={s.label} fill sizes="(min-width:1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ opacity: 0.55 }}
                  />
                ) : null}
                <div className="absolute inset-0" style={{ background: s.bg, opacity: s.imgUrl ? 0.7 : 1 }} />
                <div className="overlay-bottom" />

                {/* Left orange accent bar */}
                <div className="absolute left-0 top-0 h-full w-1 origin-bottom scale-y-0 transition-transform duration-500 group-hover:scale-y-100"
                  style={{ background: 'linear-gradient(to bottom, #79B82A, #007A96)' }}
                />

                <div className="absolute inset-0 flex flex-col justify-between p-8 lg:p-10">
                  {/* Top: label badge */}
                  <div>
                    <span className="inline-block px-3 py-1 text-[0.6rem] font-bold tracking-widest uppercase"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        background: 'linear-gradient(135deg, #007A96, #79B82A)',
                        color: '#FFFFFF',
                      }}>
                      {s.label}
                    </span>
                  </div>

                  {/* Bottom: content */}
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-heading)', fontWeight: 700,
                      fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                      color: '#FFFFFF', lineHeight: 1.2, marginBottom: '1rem',
                    }}>
                      {s.headline}
                    </h3>
                    <ul className="mb-7 space-y-2">
                      {s.items.map(item => (
                        <li key={item} className="flex items-center gap-2"
                          style={{ fontFamily: 'var(--font-body)', fontSize: '0.83rem', color: 'rgba(255,255,255,0.6)' }}>
                          <ChevronRight size={12} style={{ color: '#00A8C4' }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2 transition-all duration-200 group-hover:gap-3">
                      <span style={{
                        fontFamily: 'var(--font-heading)', fontSize: '0.68rem', fontWeight: 700,
                        letterSpacing: '0.12em', textTransform: 'uppercase', color: '#79B82A',
                      }}>
                        Discover More
                      </span>
                      <ArrowRight size={14} style={{ color: '#79B82A' }} />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────────────────────────────────────

function ServicesSection({ services }: { services: Service[] }) {
  if (!services.length) return null;

  return (
    <section className="section-pad" style={{ background: '#FFFFFF' }}>
      <div className="container-xl">
        <AnimateIn variant="blur">
          <div className="mb-14 flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="text-overline">What We Do</span>
              <span className="accent-line mt-3 mb-5" />
              <h2 className="text-display">Our Capabilities</h2>
            </div>
            <Link href="/mining"
              className="flex items-center gap-1.5 shrink-0 transition-all duration-150 hover:gap-2.5"
              style={{
                fontFamily: 'var(--font-heading)', fontSize: '0.7rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase', color: '#00A8C4',
              }}>
              View All <ArrowUpRight size={14} />
            </Link>
          </div>
        </AnimateIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, i) => {
            const Icon = SERVICE_ICONS[i] ?? Pickaxe;
            const isMining = svc.sector === 'mining';
            const imgUrl = getAssetUrl(svc.cover_image ?? svc.background_image, { width: 640, height: 400, fit: 'cover', quality: 80 });

            return (
              <AnimateIn key={svc.id} delay={i * 0.07} variant="scale">
                <Link href={`/services/${svc.slug}`} className="feature-card group flex flex-col h-full">
                  {/* Image / placeholder */}
                  <div className="relative h-44 overflow-hidden">
                    {imgUrl ? (
                      <Image src={imgUrl} alt={svc.title} fill sizes="(min-width:1024px) 33vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-end justify-end p-4"
                        style={{ background: isMining ? 'linear-gradient(135deg, #1A1A1A, #2A2A2A)' : 'linear-gradient(135deg, #081628, #0a1e38)' }}>
                        <Icon size={48} style={{ color: 'rgba(0,168,196,0.15)' }} />
                      </div>
                    )}
                    {/* Sector chip */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 text-[0.58rem] font-bold tracking-widest uppercase"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        background: 'linear-gradient(135deg, #007A96, #79B82A)',
                        color: '#FFFFFF',
                      }}>
                      {isMining ? 'Mining' : 'Energy'}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center"
                      style={{ background: '#E3F6FA' }}>
                      <Icon size={17} style={{ color: '#00A8C4' }} />
                    </div>
                    <h3 style={{
                      fontFamily: 'var(--font-heading)', fontWeight: 700,
                      fontSize: '1rem', color: '#111111', marginBottom: '0.5rem',
                    }}>
                      {svc.title}
                    </h3>
                    <p className="flex-1 text-sm leading-loose" style={{ color: '#757575' }}>
                      {svc.short_description}
                    </p>
                    <div className="mt-5 flex items-center gap-1.5 border-t pt-4 transition-all duration-200 group-hover:gap-2.5"
                      style={{
                        borderColor: '#F0F0F0',
                        fontFamily: 'var(--font-heading)', fontSize: '0.68rem', fontWeight: 700,
                        letterSpacing: '0.1em', textTransform: 'uppercase', color: '#00A8C4',
                      }}>
                      Learn More <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STATS BAND — orange gradient
// ─────────────────────────────────────────────────────────────────────────────

function StatsBand({ hp, stats }: { hp: HomepageData; stats: OperationStat[] }) {
  return (
    <section className="relative overflow-hidden"
      style={{ background: '#0A1628' }}>
      {/* Subtle dot grid */}
      <div className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Very subtle warm glow */}
      <div className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(0,168,196,0.07) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 container-xl py-16 lg:py-20">
        <AnimateIn>
          <div className="mb-14 text-center">
            <span style={{
              fontFamily: 'var(--font-heading)', fontSize: '0.65rem', fontWeight: 700,
              letterSpacing: '0.22em', textTransform: 'uppercase', color: '#00A8C4',
            }}>
              {hp.operations_headline ?? 'Performance by the Numbers'}
            </span>
            <h2 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#FFFFFF',
              lineHeight: 1.1, marginTop: '0.75rem',
            }}>
              A Global Footprint
            </h2>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-2 gap-px lg:grid-cols-4"
          style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
          {stats.slice(0, 4).map((s, i) => (
            <AnimateIn key={s.id} delay={i * 0.08} direction="up">
              <div className="flex flex-col items-center justify-center py-10 px-6 text-center"
                style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <div style={{
                  fontFamily: 'var(--font-heading)', fontWeight: 800,
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1,
                  background: 'linear-gradient(135deg, #007A96, #79B82A)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  <CountUp value={s.value} />
                  <span style={{ fontSize: '1.3rem' }}>{s.unit}</span>
                </div>
                <div style={{
                  fontFamily: 'var(--font-heading)', fontSize: '0.62rem', fontWeight: 600,
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.55)', marginTop: '10px',
                }}>
                  {s.label}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link href="/mining" className="btn-orange">Mining Operations <ArrowRight size={15} /></Link>
            <Link href="/energy" className="btn-outline-white">Energy Portfolio</Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// GALLERY
// ─────────────────────────────────────────────────────────────────────────────

function GallerySection({ hp, items }: { hp: HomepageData; items: GalleryItem[] }) {
  if (!items.length) return null;

  return (
    <section className="section-pad" style={{ background: '#FAFAFA' }}>
      <div className="container-xl">
        <AnimateIn>
          <div className="mb-10">
            <span className="text-overline">Photo Gallery</span>
            <span className="accent-line mt-3 mb-5" />
            <h2 className="text-display">{hp.gallery_headline ?? 'Operations in Focus'}</h2>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
          {items.slice(0, 6).map((item, i) => {
            const url = getAssetUrl(item.image, { width: item.span_wide ? 1200 : 640, height: 480, fit: 'cover', quality: 80 });
            return (
              <AnimateIn key={item.id} delay={i * 0.06} variant="scale">
                <div
                  className={`relative overflow-hidden group cursor-pointer ${item.span_wide ? 'col-span-2' : ''}`}
                  style={{ aspectRatio: item.span_wide ? '21/9' : '4/3' }}
                >
                  {url ? (
                    <Image src={url} alt={item.alt_text ?? ''} fill
                      sizes={item.span_wide ? '(min-width:1024px) 66vw, 100vw' : '(min-width:1024px) 33vw, 50vw'}
                      className="object-cover transition-transform duration-600 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #E0E0E0, #BDBDBD)' }}>
                      <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.6rem', letterSpacing: '0.18em', color: '#9E9E9E' }}>
                        {item.caption}
                      </span>
                    </div>
                  )}
                  {/* Orange slide-up overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"
                    style={{ background: 'linear-gradient(to top, rgba(0,122,150,0.92) 0%, rgba(0,168,196,0.65) 50%, transparent 100%)' }}>
                    <p style={{
                      fontFamily: 'var(--font-heading)', fontSize: '0.78rem', fontWeight: 700,
                      letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFFFFF',
                    }}>
                      {item.caption}
                    </p>
                  </div>
                  {/* Orange corner pip */}
                  <div className="absolute top-0 right-0 h-7 w-7 flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #007A96, #79B82A)' }}>
                    <span style={{ color: '#FFFFFF', fontSize: '0.5rem' }}>◆</span>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// INSIGHTS
// ─────────────────────────────────────────────────────────────────────────────

function InsightsSection({ hp, insights }: { hp: HomepageData; insights: PressInsight[] }) {
  if (!insights.length) return null;

  return (
    <section className="section-pad" style={{ background: '#FFFFFF' }}>
      <div className="container-xl">
        <AnimateIn>
          <div className="mb-12 flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="text-overline">News &amp; Analysis</span>
              <span className="accent-line mt-3 mb-5" />
              <h2 className="text-display">{hp.insights_headline ?? 'Latest Insights & Press'}</h2>
            </div>
            <Link href="/insights"
              className="flex items-center gap-1.5 shrink-0 transition-all duration-150 hover:gap-2.5"
              style={{
                fontFamily: 'var(--font-heading)', fontSize: '0.7rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase', color: '#00A8C4',
              }}>
              All Insights <ArrowUpRight size={14} />
            </Link>
          </div>
        </AnimateIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((item, i) => {
            const cat = CAT_META[item.category] ?? CAT_META.industry_insight;
            const imgUrl = getAssetUrl(item.cover_image, { width: 640, height: 380, fit: 'cover', quality: 80 });

            return (
              <AnimateIn key={item.id} delay={i * 0.1}>
                <Link href={`/insights/${item.slug}`} className="news-card group flex flex-col h-full">
                  <div className="relative h-48 overflow-hidden">
                    {imgUrl ? (
                      <Image src={imgUrl} alt={item.title} fill sizes="(min-width:1024px) 33vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0"
                        style={{ background: 'linear-gradient(135deg, #1A1A1A, #0a1e38)' }}>
                        <div className="absolute inset-0 opacity-20"
                          style={{ background: 'linear-gradient(135deg, transparent 40%, rgba(0,168,196,0.5))' }} />
                      </div>
                    )}
                    {/* Orange line bottom — slides in on hover */}
                    <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                      style={{ background: 'linear-gradient(90deg, #007A96, #79B82A)' }} />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center gap-3 flex-wrap">
                      <span className="px-2.5 py-1 text-[0.58rem] font-bold tracking-widest uppercase"
                        style={{ background: cat.bg, color: cat.color, fontFamily: 'var(--font-heading)' }}>
                        {cat.label}
                      </span>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: '#BDBDBD' }}>
                        {fmtDate(item.published_date)}
                      </span>
                    </div>

                    <h3 className="flex-1 leading-snug mb-3"
                      style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', color: '#111111' }}>
                      {item.title}
                    </h3>

                    <p className="text-xs leading-loose mb-4" style={{ color: '#757575' }}>
                      {item.excerpt}
                    </p>

                    <div className="mt-auto flex items-center gap-1.5 border-t pt-4 transition-all duration-200 group-hover:gap-2.5"
                      style={{
                        borderColor: '#F5F5F5',
                        fontFamily: 'var(--font-heading)', fontSize: '0.68rem', fontWeight: 700,
                        letterSpacing: '0.1em', textTransform: 'uppercase', color: '#00A8C4',
                      }}>
                      Read More <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CTA
// ─────────────────────────────────────────────────────────────────────────────

function CtaBanner({ imgs }: { imgs: SiteImages }) {
  const bgUrl = getAssetUrl(imgs.cta_background, { width: 1920, height: 600, fit: 'cover', quality: 75 });

  return (
    <section className="relative overflow-hidden section-pad"
      style={{ background: 'linear-gradient(160deg, #0a0a0a 0%, #141414 60%, #1a0a00 100%)' }}>
      {bgUrl && (
        <Image src={bgUrl} alt="" fill sizes="100vw"
          className="object-cover" style={{ opacity: 0.12 }} />
      )}
      {/* Orange glow top-right */}
      <div className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 55% 50% at 80% 30%, rgba(0,168,196,0.2) 0%, transparent 65%)' }} />
      {/* Dot grid */}
      <div className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 container-xl">
        <div className="mx-auto max-w-3xl text-center">
          <AnimateIn>
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-7"
              style={{ borderColor: 'rgba(0,168,196,0.3)', background: 'rgba(0,168,196,0.08)' }}>
              <span style={{
                fontFamily: 'var(--font-heading)', fontSize: '0.62rem', fontWeight: 700,
                letterSpacing: '0.2em', textTransform: 'uppercase', color: '#00A8C4',
              }}>
                Partner With Us
              </span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1,
              letterSpacing: '-0.02em', color: '#FFFFFF',
            }}>
              Ready to Build a More<br />
              <span className="text-gradient-orange">Sustainable Resource Future?</span>
            </h2>

            <p className="mt-5 text-sm leading-loose"
              style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.5)' }}>
              Connect with our team to discuss investment opportunities, operational partnerships, or energy supply agreements.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-orange">Get In Touch <ArrowRight size={15} /></Link>
              <Link href="/about" className="btn-outline-white">Learn About Us</Link>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default async function HomePage() {
  const [hpRes, imgsRes, statsRes, insightsRes, servicesRes, galleryRes] =
    await Promise.allSettled([
      fetchHP(), fetchImgs(), fetchStats(), fetchInsights(), fetchServices(), fetchGallery(),
    ]);

  const hp       = hpRes.status       === 'fulfilled' ? hpRes.value       : FB_HP;
  const imgs     = imgsRes.status     === 'fulfilled' ? imgsRes.value     : FB_IMGS;
  const stats    = statsRes.status    === 'fulfilled' ? statsRes.value    : FB_STATS;
  const insights = insightsRes.status === 'fulfilled' ? insightsRes.value : FB_INSIGHTS;
  const services = servicesRes.status === 'fulfilled' ? servicesRes.value : FB_SERVICES;
  const gallery  = galleryRes.status  === 'fulfilled' ? galleryRes.value  : FB_GALLERY;

  const heroImgUrl =
    getAssetUrl(imgs.hero_background,    { width: 1400, height: 1000, fit: 'cover', quality: 88 }) ??
    getAssetUrl(hp.hero_background_image,{ width: 1400, height: 1000, fit: 'cover', quality: 88 }) ??
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1400&q=85';

  return (
    <>
      <HeroSection imgUrl={heroImgUrl} />
      <AboutSection    hp={hp} imgs={imgs} />
      <SectorsSection  hp={hp} imgs={imgs} />
      <ServicesSection services={services} />
      <StatsBand       hp={hp} stats={stats} />
      <GallerySection  hp={hp} items={gallery} />
      <InsightsSection hp={hp} insights={insights} />
      <CtaBanner       imgs={imgs} />
    </>
  );
}
