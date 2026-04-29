import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimateIn from '@/components/ui/AnimateIn';
import PageHero  from '@/components/ui/PageHero';
import { getAllInsights, getAssetUrl, type PressInsight, type InsightCategory } from '@/lib/directus';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Insights & Press',
  description: 'Latest news, press releases, industry insights, and sustainability updates from Prestige Mining and Energy.',
};

const CAT_META: Record<InsightCategory, { label: string; bg: string; color: string }> = {
  press_release:    { label: 'Press Release',    bg: '#FFF3E0', color: '#E65100' },
  industry_insight: { label: 'Industry Insight', bg: '#F5F5F5', color: '#333333' },
  project_update:   { label: 'Project Update',   bg: '#E8F5E9', color: '#2E7D32' },
  sustainability:   { label: 'Sustainability',   bg: '#E8F5E9', color: '#2E7D32' },
};

const FB_INSIGHTS: PressInsight[] = [
  { id: 1, status: 'published', published_date: '2025-07-01', title: 'Prestige Mining Commissions New Processing Hub in Western Australia', slug: 'wa-processing-hub-2025', category: 'press_release', excerpt: 'Our new 18 Mt/yr Pilbara processing facility reached full operational capacity 45 days ahead of the contracted schedule and A$12M under budget — a milestone that raises our total annual throughput to 35 Mt.', body: '', cover_image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=960&q=80', author: 'Corporate Affairs', featured: true },
  { id: 2, status: 'published', published_date: '2025-06-18', title: 'The Case for Vertically Integrated Clean Energy in Mining', slug: 'vertical-integration', category: 'industry_insight', excerpt: 'Resource companies that own generation assets rather than buying from the grid are structurally 31% cheaper on energy per tonne mined. We examine the data behind the integration advantage.', body: '', cover_image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=960&q=80', author: 'Strategy & Research', featured: false },
  { id: 3, status: 'published', published_date: '2025-05-30', title: '2025 Sustainability Update: On Track for Net Zero by 2040', slug: 'sustainability-2025', category: 'sustainability', excerpt: 'Group emissions are down 31% on the 2019 baseline. Water recycling rates have reached 78% across all Australian sites. Our community investment fund has disbursed A$38M to date.', body: '', cover_image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=960&q=80', author: 'ESG Office', featured: false },
  { id: 4, status: 'published', published_date: '2025-04-15', title: 'Prestige Energy Signs 150 MW Solar PPA with Major Copper Producer', slug: 'solar-ppa-copper-2025', category: 'press_release', excerpt: 'A 15-year Power Purchase Agreement will supply 100% renewable electricity to the Katanga copper smelter complex at a fixed price of $31/MWh — replacing 85 MW of continuous diesel generation.', body: '', cover_image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=960&q=80', author: 'Corporate Affairs', featured: false },
  { id: 5, status: 'published', published_date: '2025-03-10', title: 'Autonomous Haulage Fleet Expansion Cuts Pilbara Unit Costs by 18%', slug: 'autonomous-haulage-2025', category: 'project_update', excerpt: '40 additional Komatsu FrontRunner trucks were integrated across three Pilbara pits in Q1 2025, bringing the autonomous fleet to 120 units. Zero fatigue incidents since 2022. Cost per tonne hauled down 18% year-on-year.', body: '', cover_image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=960&q=80', author: 'Operations Team', featured: false },
  { id: 6, status: 'published', published_date: '2025-02-20', title: 'Water Stewardship: Zero Net Freshwater Withdrawal at Two WA Sites', slug: 'water-stewardship-2025', category: 'sustainability', excerpt: 'Newman North and Marble Bar operations now run entirely on recycled process water and captured rainfall. Combined freshwater saving: 4.2 GL per year — equivalent to 1,680 Olympic swimming pools.', body: '', cover_image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=960&q=80', author: 'ESG Office', featured: false },
];

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-AU', { day: '2-digit', month: 'long', year: 'numeric' });
}

export default async function InsightsPage() {
  const insights = await getAllInsights().catch(() => FB_INSIGHTS);
  const all = insights.length > 0 ? insights : FB_INSIGHTS;

  const featured = all.find(i => i.featured) ?? all[0];
  const rest = all.filter(i => i.id !== featured.id);

  return (
    <>
      <PageHero
        overline="Insights & Press"
        headline="News, Analysis & Updates"
        subheadline="The latest press releases, industry insights, and sustainability reports from Prestige Mining and Energy."
        bgUrl="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
        breadcrumbs={[{ label: 'Insights' }]}
      />

      {/* Featured article */}
      {featured && (
        <section className="section-pad" style={{ background: '#FFFFFF' }}>
          <div className="container-xl">
            <AnimateIn>
              <span className="text-overline">Featured</span>
              <span className="accent-line mt-3 mb-8" />
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <Link href={`/insights/${featured.slug}`}
                className="group grid gap-0 lg:grid-cols-2 overflow-hidden"
                style={{ border: '1px solid #EBEBEB' }}>
                <div className="relative h-64 lg:h-auto">
                  {getAssetUrl(featured.cover_image, { width: 960, height: 600, fit: 'cover', quality: 85 }) ? (
                    <Image src={getAssetUrl(featured.cover_image, { width: 960, height: 600, fit: 'cover' })!} alt={featured.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,#1A1A1A,#2A1800)' }}>
                      <div className="absolute inset-0 opacity-30" style={{ background: 'linear-gradient(135deg,transparent,rgba(245,124,0,0.5))' }} />
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="px-2.5 py-1 text-[0.6rem] font-bold tracking-widest uppercase"
                      style={{ background: CAT_META[featured.category].bg, color: CAT_META[featured.category].color, fontFamily: 'var(--font-heading)' }}>
                      {CAT_META[featured.category].label}
                    </span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: '#BDBDBD' }}>{fmtDate(featured.published_date)}</span>
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(1.2rem,2.5vw,1.8rem)', color: '#111111', lineHeight: 1.2, marginBottom: '1rem' }}>
                    {featured.title}
                  </h2>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#6B6B6B', lineHeight: 1.7 }}>{featured.excerpt}</p>
                  <div className="mt-6 flex items-center gap-2 transition-all duration-200 group-hover:gap-3"
                    style={{ fontFamily: 'var(--font-heading)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F57C00' }}>
                    Read Article <ArrowRight size={13} />
                  </div>
                </div>
              </Link>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* All articles */}
      <section className="section-pad" style={{ background: '#F5F5F5' }}>
        <div className="container-xl">
          <AnimateIn>
            <span className="text-overline">All Articles</span>
            <span className="accent-line mt-3 mb-10" />
          </AnimateIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((item, i) => {
              const cat = CAT_META[item.category] ?? CAT_META.industry_insight;
              const imgUrl = getAssetUrl(item.cover_image, { width: 640, height: 380, fit: 'cover', quality: 80 });
              return (
                <AnimateIn key={item.id} delay={i * 0.07}>
                  <Link href={`/insights/${item.slug}`} className="news-card group flex flex-col h-full">
                    <div className="relative h-48 overflow-hidden">
                      {imgUrl ? (
                        <Image src={imgUrl} alt={item.title} fill sizes="(min-width:1024px) 33vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      ) : (
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,#1A1A1A,#2A1800)' }}>
                          <div className="absolute inset-0 opacity-20" style={{ background: 'linear-gradient(135deg,transparent,rgba(245,124,0,0.5))' }} />
                        </div>
                      )}
                      <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                        style={{ background: 'linear-gradient(90deg,#E65100,#FF9800)' }} />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-3 flex items-center gap-3 flex-wrap">
                        <span className="px-2.5 py-1 text-[0.58rem] font-bold tracking-widest uppercase"
                          style={{ background: cat.bg, color: cat.color, fontFamily: 'var(--font-heading)' }}>
                          {cat.label}
                        </span>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: '#BDBDBD' }}>{fmtDate(item.published_date)}</span>
                      </div>
                      <h3 className="flex-1 leading-snug mb-3"
                        style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', color: '#111111' }}>
                        {item.title}
                      </h3>
                      <p className="text-xs leading-loose mb-4" style={{ color: '#757575' }}>{item.excerpt}</p>
                      <div className="mt-auto flex items-center gap-1.5 border-t pt-4 transition-all duration-200 group-hover:gap-2.5"
                        style={{ borderColor: '#F5F5F5', fontFamily: 'var(--font-heading)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F57C00' }}>
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
    </>
  );
}
