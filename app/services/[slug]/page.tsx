import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import AnimateIn from '@/components/ui/AnimateIn';
import { getServiceBySlug, getAllServices, getAssetUrl } from '@/lib/directus';

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug).catch(() => null);
  if (!service) return { title: 'Service Not Found' };
  return { title: service.title, description: service.short_description };
}

export async function generateStaticParams() {
  const services = await getAllServices().catch(() => []);
  return services.map(s => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug).catch(() => null);

  const sectorHref = service?.sector === 'mining' ? '/mining' : '/energy';
  const sectorLabel = service?.sector === 'mining' ? 'Mining Operations' : 'Clean Energy';

  if (!service) {
    return (
      <>
        <PageHero headline="Service Not Found" breadcrumbs={[{ label: 'Operations', href: '/mining' }, { label: 'Not Found' }]} />
        <section className="section-pad" style={{ background: '#FFFFFF' }}>
          <div className="container-xl text-center">
            <p style={{ color: '#757575' }}>This service could not be found.</p>
            <Link href="/mining" className="btn-orange mt-6 inline-flex"><ArrowLeft size={15} /> View All Services</Link>
          </div>
        </section>
      </>
    );
  }

  const imgUrl = getAssetUrl(service.cover_image ?? service.background_image, { width: 1920, height: 900, fit: 'cover', quality: 85 });

  return (
    <>
      <PageHero
        overline={sectorLabel}
        headline={service.title}
        subheadline={service.short_description}
        bgUrl={imgUrl}
        breadcrumbs={[{ label: sectorLabel, href: sectorHref }, { label: service.title }]}
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/contact" className="btn-orange">Enquire Now <ArrowRight size={15} /></Link>
          <Link href={sectorHref} className="btn-outline-white">All {sectorLabel}</Link>
        </div>
      </PageHero>

      <section className="section-pad" style={{ background: '#FFFFFF' }}>
        <div className="container-xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_320px] lg:items-start">

            {/* Main content */}
            <AnimateIn>
              {imgUrl && (
                <div className="relative mb-10 aspect-video overflow-hidden">
                  <Image src={imgUrl} alt={service.title} fill className="object-cover" sizes="(min-width:1024px) 66vw, 100vw" />
                  <div className="absolute inset-x-0 bottom-0 h-1" style={{ background: 'linear-gradient(90deg,#E65100,#FF9800)' }} />
                </div>
              )}

              {service.description ? (
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: '#4A4A4A', lineHeight: 1.9 }}
                  dangerouslySetInnerHTML={{ __html: service.description }} />
              ) : (
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: '#6B6B6B', lineHeight: 1.9 }}>
                  Detailed service content will appear here. Add rich content using the <strong>description</strong> field in Directus CMS → Services → {service.title}.
                </p>
              )}

              <div className="mt-10 pt-8 border-t" style={{ borderColor: '#F0F0F0' }}>
                <Link href={sectorHref} className="inline-flex items-center gap-2 transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F57C00' }}>
                  <ArrowLeft size={13} /> Back to {sectorLabel}
                </Link>
              </div>
            </AnimateIn>

            {/* Sidebar */}
            <AnimateIn delay={0.12} direction="right">
              <div className="space-y-6 lg:sticky lg:top-28">
                {/* Stats */}
                {service.stats && service.stats.length > 0 && (
                  <div className="p-6" style={{ background: '#F5F5F5' }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F57C00', marginBottom: '1.25rem' }}>
                      Key Stats
                    </h3>
                    <div className="space-y-5">
                      {service.stats.map((st) => (
                        <div key={st.label} className="border-b pb-5" style={{ borderColor: '#E0E0E0' }}>
                          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.8rem', lineHeight: 1, background: 'linear-gradient(135deg,#E65100,#FF9800)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                            {st.value}<span style={{ fontSize: '1rem' }}>{st.unit}</span>
                          </div>
                          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#BDBDBD', marginTop: '3px' }}>{st.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA card */}
                <div className="p-6" style={{ background: 'linear-gradient(135deg,#E65100,#FF9800)' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                    Interested in this service?
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    Contact our team to discuss how we can deliver this capability for your project.
                  </p>
                  <Link href="/contact" className="btn-white w-full justify-center">
                    Get In Touch <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
