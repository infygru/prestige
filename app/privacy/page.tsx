import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = { title: 'Privacy Policy' };

const SECTIONS = [
  { title: '1. Information We Collect', body: 'We collect information you voluntarily provide to us (such as name, email address, and company when submitting our contact form), as well as automatically-collected data such as IP addresses, browser type, and pages visited via cookies and analytics tools.' },
  { title: '2. How We Use Information', body: 'We use collected information to respond to enquiries, improve our website, send relevant communications with your consent, and comply with legal obligations. We do not sell personal data to third parties.' },
  { title: '3. Cookies', body: 'Our website uses essential cookies for functionality and optional analytics cookies (e.g., Google Analytics) to understand visitor behaviour. You may disable non-essential cookies via your browser settings.' },
  { title: '4. Data Sharing', body: 'We may share data with trusted service providers who assist in operating our website and services, subject to confidentiality obligations. We may also disclose data when required by law.' },
  { title: '5. Data Retention', body: 'We retain personal data only as long as necessary for the purposes it was collected or as required by applicable law. Contact form submissions are retained for up to 24 months.' },
  { title: '6. Your Rights', body: 'Depending on your jurisdiction, you may have rights to access, correct, delete, or port your personal data, and to withdraw consent. Contact us at the address below to exercise these rights.' },
  { title: '7. Security', body: 'We implement appropriate technical and organisational measures to protect personal data against unauthorised access, loss, or destruction.' },
  { title: '8. Contact', body: 'For privacy-related enquiries, contact our Privacy Officer at privacy@prestigeminingenergy.com or at our registered head office address.' },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        overline="Legal"
        headline="Privacy Policy"
        subheadline="Last updated: January 2025"
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />
      <section className="section-pad" style={{ background: '#FFFFFF' }}>
        <div className="container-xl">
          <div className="mx-auto max-w-3xl">
            <p className="mb-10 text-sm leading-loose" style={{ color: '#6B6B6B', fontFamily: 'var(--font-body)' }}>
              Prestige Mining and Energy Pty Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your privacy. This Policy explains how we collect, use, and safeguard personal information in accordance with applicable privacy legislation.
            </p>
            <div className="space-y-8">
              {SECTIONS.map((s) => (
                <div key={s.title} className="border-b pb-8" style={{ borderColor: '#F0F0F0' }}>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: '#111111', marginBottom: '0.75rem' }}>{s.title}</h2>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#6B6B6B', lineHeight: 1.8 }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
