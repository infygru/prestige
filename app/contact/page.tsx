import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import AnimateIn from '@/components/ui/AnimateIn';
import PageHero  from '@/components/ui/PageHero';
import { getGlobalSettings } from '@/lib/directus';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Prestige Mining and Energy team.',
};

export default async function ContactPage() {
  const settings = await getGlobalSettings().catch(() => null);

  const email   = settings?.contact_email   ?? 'info@prestigeminingenergy.com';
  const phone   = settings?.contact_phone   ?? '+61 8 9000 0000';
  const address = settings?.hq_address      ?? 'Level 28, Exchange Tower, 2 The Esplanade, Perth WA 6000, Australia';

  return (
    <>
      <PageHero
        overline="Contact"
        headline="Let's Start a Conversation"
        subheadline="Whether you're exploring a partnership, investment, or technical enquiry — our team is ready to hear from you."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="section-pad" style={{ background: '#FFFFFF' }}>
        <div className="container-xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:items-start">

            {/* Form */}
            <AnimateIn>
              <span className="text-overline">Send a Message</span>
              <span className="accent-line mt-3 mb-8" />

              <form className="space-y-5" action="#" method="POST">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4A4A4A', display: 'block', marginBottom: '6px' }}>
                      First Name *
                    </label>
                    <input type="text" name="first_name" required className="form-input" />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4A4A4A', display: 'block', marginBottom: '6px' }}>
                      Last Name *
                    </label>
                    <input type="text" name="last_name" required className="form-input" />
                  </div>
                </div>

                <div>
                  <label style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4A4A4A', display: 'block', marginBottom: '6px' }}>
                    Email Address *
                  </label>
                  <input type="email" name="email" required className="form-input" />
                </div>

                <div>
                  <label style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4A4A4A', display: 'block', marginBottom: '6px' }}>
                    Company
                  </label>
                  <input type="text" name="company" className="form-input" />
                </div>

                <div>
                  <label style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4A4A4A', display: 'block', marginBottom: '6px' }}>
                    Enquiry Type
                  </label>
                  <select name="enquiry_type" className="form-input appearance-none">
                    <option value="">Select an option…</option>
                    <option value="mining_partnership">Mining Partnership</option>
                    <option value="energy_ppa">Energy / PPA Enquiry</option>
                    <option value="investment">Investment Enquiry</option>
                    <option value="media">Media Enquiry</option>
                    <option value="careers">Careers</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontFamily: 'var(--font-heading)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4A4A4A', display: 'block', marginBottom: '6px' }}>
                    Message *
                  </label>
                  <textarea name="message" rows={6} required
                    className="form-input resize-vertical"
                    style={{ minHeight: '140px' }}
                  />
                </div>

                <button type="submit" className="btn-orange w-full justify-center">
                  Send Message <ArrowRight size={15} />
                </button>

                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: '#BDBDBD', textAlign: 'center' }}>
                  We respond to all enquiries within 2 business days.
                </p>
              </form>
            </AnimateIn>

            {/* Contact info */}
            <AnimateIn delay={0.12} direction="right">
              <div className="space-y-6 lg:sticky lg:top-28">
                {/* Info card */}
                <div className="p-7" style={{ background: '#F5F5F5' }}>
                  <span className="text-overline mb-4 block">Contact Information</span>
                  <div className="space-y-4">
                    <a href={`mailto:${email}`} className="flex items-start gap-3 group">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center" style={{ background: 'linear-gradient(135deg,#007A96,#79B82A)' }}>
                        <Mail size={14} style={{ color: '#FFFFFF' }} />
                      </div>
                      <div>
                        <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#BDBDBD' }}>Email</p>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: '#00A8C4', marginTop: '1px' }}>{email}</p>
                      </div>
                    </a>
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center" style={{ background: 'linear-gradient(135deg,#007A96,#79B82A)' }}>
                        <Phone size={14} style={{ color: '#FFFFFF' }} />
                      </div>
                      <div>
                        <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#BDBDBD' }}>Phone</p>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: '#4A4A4A', marginTop: '1px' }}>{phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center" style={{ background: 'linear-gradient(135deg,#007A96,#79B82A)' }}>
                        <MapPin size={14} style={{ color: '#FFFFFF' }} />
                      </div>
                      <div>
                        <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#BDBDBD' }}>Head Office</p>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#4A4A4A', marginTop: '1px', lineHeight: 1.5 }}>{address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick links */}
                <div className="p-7" style={{ background: 'linear-gradient(135deg,#071524,#0D2544)', border: '1px solid rgba(0,168,196,0.15)' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#00A8C4', marginBottom: '1rem' }}>
                    Explore More
                  </h3>
                  <div className="space-y-3">
                    {[['Mining Operations', '/mining'], ['Clean Energy', '/energy'], ['About Us', '/about'], ['Careers', '/careers']].map(([label, href]) => (
                      <Link key={label} href={href}
                        className="flex items-center justify-between group"
                        style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.75rem' }}>
                        {label}
                        <ArrowRight size={13} style={{ color: '#00A8C4' }} className="transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
