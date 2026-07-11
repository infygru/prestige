import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import { getInsightBySlug, getAllInsights, getAssetUrl, type InsightCategory } from '@/lib/directus';

export const revalidate = 60;

const CAT_META: Record<InsightCategory, { label: string; bg: string; color: string }> = {
  press_release:    { label: 'Press Release',    bg: '#E3F6FA', color: '#007A96' },
  industry_insight: { label: 'Industry Insight', bg: '#F5F5F5', color: '#333333' },
  project_update:   { label: 'Project Update',   bg: '#E8F5E9', color: '#2E7D32' },
  sustainability:   { label: 'Sustainability',   bg: '#E8F5E9', color: '#2E7D32' },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const insight = await getInsightBySlug(slug).catch(() => null);
  if (!insight) return { title: 'Insight Not Found' };
  return { title: insight.title, description: insight.excerpt };
}

export async function generateStaticParams() {
  const insights = await getAllInsights().catch(() => []);
  return insights.map(i => ({ slug: i.slug }));
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-AU', { day: '2-digit', month: 'long', year: 'numeric' });
}

export default async function InsightDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = await getInsightBySlug(slug).catch(() => null);

  if (!insight) {
    return (
      <>
        <PageHero headline="Article Not Found" breadcrumbs={[{ label: 'Insights', href: '/insights' }, { label: 'Not Found' }]} />
        <section className="section-pad" style={{ background: '#FFFFFF' }}>
          <div className="container-xl text-center">
            <p style={{ color: '#757575' }}>This article could not be found.</p>
            <Link href="/insights" className="btn-orange mt-6 inline-flex"><ArrowLeft size={15} /> Back to Insights</Link>
          </div>
        </section>
      </>
    );
  }

  const cat = CAT_META[insight.category];
  const imgUrl = getAssetUrl(insight.cover_image, { width: 1280, height: 640, fit: 'cover', quality: 85 });

  return (
    <>
      <PageHero
        overline={cat.label}
        headline={insight.title}
        bgUrl={imgUrl}
        breadcrumbs={[{ label: 'Insights', href: '/insights' }, { label: insight.title }]}
      />

      <section className="section-pad" style={{ background: '#FFFFFF' }}>
        <div className="container-xl">
          <div className="mx-auto max-w-3xl">

            {/* Meta */}
            <div className="mb-8 flex flex-wrap items-center gap-4 pb-6 border-b" style={{ borderColor: '#F0F0F0' }}>
              <span className="px-3 py-1 text-[0.62rem] font-bold tracking-widest uppercase"
                style={{ background: cat.bg, color: cat.color, fontFamily: 'var(--font-heading)' }}>
                {cat.label}
              </span>
              <span className="flex items-center gap-1.5" style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: '#BDBDBD' }}>
                <Calendar size={13} /> {fmtDate(insight.published_date)}
              </span>
              {insight.author && (
                <span className="flex items-center gap-1.5" style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: '#BDBDBD' }}>
                  <User size={13} /> {insight.author}
                </span>
              )}
            </div>

            {/* Cover image */}
            {imgUrl && (
              <div className="relative mb-10 aspect-video overflow-hidden">
                <Image src={imgUrl} alt={insight.title} fill className="object-cover" sizes="(min-width:768px) 768px, 100vw" />
              </div>
            )}

            {/* Excerpt */}
            <p className="mb-8 text-base leading-loose font-medium" style={{ color: '#4A4A4A', fontFamily: 'var(--font-body)', borderLeft: '3px solid #00A8C4', paddingLeft: '1.25rem' }}>
              {insight.excerpt}
            </p>

            {/* Body */}
            {insight.body ? (
              <div className="prose-content" style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: '#4A4A4A', lineHeight: 1.9 }}
                dangerouslySetInnerHTML={{ __html: insight.body }} />
            ) : (
              <div className="space-y-4">
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: '#6B6B6B', lineHeight: 1.9 }}>
                  Full article content will appear here once published in the Directus CMS. Use the <strong>body</strong> field in the <code>press_insights</code> collection to add the full article text, which supports rich HTML content.
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: '#6B6B6B', lineHeight: 1.9 }}>
                  Navigate to <a href="https://api.prestigeminingenergy.com/admin" target="_blank" rel="noopener noreferrer" style={{ color: '#00A8C4' }}>Directus Admin</a> → Press Insights → {insight.title} to add content.
                </p>
              </div>
            )}

            {/* Back */}
            <div className="mt-12 pt-8 border-t" style={{ borderColor: '#F0F0F0' }}>
              <Link href="/insights" className="inline-flex items-center gap-2 transition-colors duration-200"
                style={{ fontFamily: 'var(--font-heading)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#00A8C4' }}>
                <ArrowLeft size={13} /> Back to Insights
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
