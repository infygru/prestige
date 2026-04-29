import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = { title: 'Legal Notices' };

const SECTIONS = [
  { title: 'Website Terms of Use', body: 'By accessing this website you agree to be bound by these terms. If you do not agree, please do not use this site. We reserve the right to modify these terms at any time without notice.' },
  { title: 'Intellectual Property', body: 'All content on this website — including text, graphics, logos, images, and software — is the property of Prestige Mining and Energy Pty Ltd or its content suppliers and is protected by Australian and international copyright laws.' },
  { title: 'Disclaimer', body: 'The information on this website is provided for general informational purposes only and does not constitute professional advice. While we endeavour to keep information up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or availability of the information.' },
  { title: 'Forward-Looking Statements', body: 'This website may contain forward-looking statements regarding our plans, objectives, expectations, and intentions. These statements involve risks and uncertainties, and actual results may differ materially from those anticipated.' },
  { title: 'Limitation of Liability', body: 'To the maximum extent permitted by law, Prestige Mining and Energy shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of, or inability to use, this website.' },
  { title: 'Governing Law', body: 'These terms are governed by the laws of Western Australia, Australia. You irrevocably submit to the exclusive jurisdiction of the courts of Western Australia.' },
  { title: 'Contact', body: 'For legal enquiries, contact our General Counsel at legal@prestigeminingenergy.com.' },
];

export default function LegalPage() {
  return (
    <>
      <PageHero
        overline="Legal"
        headline="Legal Notices"
        subheadline="Terms of use, disclaimers, and intellectual property notices."
        breadcrumbs={[{ label: 'Legal' }]}
      />
      <section className="section-pad" style={{ background: '#FFFFFF' }}>
        <div className="container-xl">
          <div className="mx-auto max-w-3xl space-y-8">
            {SECTIONS.map((s) => (
              <div key={s.title} className="border-b pb-8" style={{ borderColor: '#F0F0F0' }}>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: '#111111', marginBottom: '0.75rem' }}>{s.title}</h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#6B6B6B', lineHeight: 1.8 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
