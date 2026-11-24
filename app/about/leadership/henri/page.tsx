import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin } from 'lucide-react';
import AnimateIn from '@/components/ui/AnimateIn';

export const metadata: Metadata = {
  title: 'Henri N\'TAKPE — Founder & CEO | Prestige Mining & Energy',
  description:
    'Profile of Henri N\'TAKPE, Founder and CEO of Prestige Mining & Energy. An Ivorian entrepreneur with 15+ years of experience in mining, energy, digitalisation, and international business development in Africa.',
};

const EXPERTISE = [
  'Mining and energy project development',
  'International trade and import-export',
  'Structuring strategic partnerships',
  'Fundraising and investor relations',
  'Multicultural team management',
  'Establishment and expansion of activities in Africa',
  'Digitalisation of financial and industrial services',
];

const CAREER = [
  {
    year: '2026',
    title: 'Managing Director & Founder',
    org: 'Prestige Revo Sarl',
    body: 'Founded and leads Prestige Revo Sarl, operating in mining, energy, digitalisation, and processing industries, with a strong focus on projects with economic and technological impact.',
  },
  {
    year: '2023',
    title: 'Managing Director',
    org: 'FINPAY CIV — Abidjan',
    body: 'Led digitalisation projects across West Africa: mobile money solutions, crypto-assets, payment infrastructure, and initiatives related to central bank digital currencies (CBDCs).',
  },
  {
    year: '2020',
    title: 'Managing Director',
    org: 'BWP Holding — Tunis & Dubai',
    body: 'Led BWP Holding, specialising in events, business forums, and connecting investors and companies. Strengthened international networks and the ability to support strategic partnerships between Africa, the Middle East, and Asia.',
  },
  {
    year: '2014',
    title: 'Managing Director',
    org: 'Olive Inter Sarl',
    body: 'Continued activities in the marketing of construction materials, focusing on structuring distribution networks and commercial expansion.',
  },
  {
    year: '2010',
    title: 'Sales Director',
    org: 'TWYFORT (Chinese multinational)',
    body: 'Responsible for developing activities related to construction materials. Gained solid experience in intercultural management, international supply chains, and market development in Africa.',
  },
  {
    year: '2008',
    title: 'Managing Director',
    org: 'Hosanna Trading Sarl',
    body: 'Began his entrepreneurial career specialising in the marketing of agricultural products and mobile telephony solutions, developing expertise in distribution, commercial negotiation, and operational management.',
  },
];

const EDUCATION = [
  { year: '2014', degree: "Master's degree in Marketing Management", school: 'HEC Abidjan' },
  { year: '2008', degree: "Bachelor's degree in International Trade", school: 'Tianjin University, China' },
  { year: '2005', degree: "Bachelor's degree in Ecology and Environment", school: 'Nangui Abrogoua University of Abidjan' },
  { year: '2002', degree: 'Baccalaureate — Science Series C', school: "Côte d'Ivoire" },
];

const VISION_PILLARS = [
  ['Responsible Exploitation', 'Responsible development of mineral and energy resources in Chad and across Central Africa.'],
  ['Local Processing', 'Promotion of local processing and industrialisation to maximise in-country value creation.'],
  ['Digital Integration', 'Integration of digital technologies into African value chains to drive efficiency and innovation.'],
];

export default function HenriProfilePage() {
  return (
    <>
      {/* Back nav */}
      <div className="container-xl pt-8 pb-2">
        <Link
          href="/about#governance"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"
          style={{ color: '#007A96', fontFamily: 'var(--font-heading)' }}
        >
          <ArrowLeft size={13} /> Back to Leadership
        </Link>
      </div>

      {/* Hero */}
      <section className="section-pad" style={{ background: 'linear-gradient(160deg,#071524 0%,#0D2544 60%,#071828 100%)' }}>
        <div className="container-xl">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16">
            {/* Photo */}
            <AnimateIn direction="left">
              <div
                className="relative shrink-0 overflow-hidden rounded-2xl shadow-2xl"
                style={{ width: 260, height: 320, background: 'linear-gradient(135deg,#007A96,#79B82A)' }}
              >
                <Image
                  src="/team/henri.jpg"
                  alt="Henri N'TAKPE"
                  fill
                  className="object-cover object-top"
                  sizes="260px"
                  priority
                />
              </div>
            </AnimateIn>

            {/* Bio intro */}
            <AnimateIn direction="right" delay={0.1}>
              <span className="text-overline">Executive Leadership</span>
              <span className="accent-line mt-3 mb-5" />
              <h1 className="text-display-light leading-tight">
                Henri N'TAKPE
              </h1>
              <p className="mt-2 text-base font-semibold" style={{ color: '#00A8C4', fontFamily: 'var(--font-heading)' }}>
                Founder & CEO — Prestige Mining & Energy
              </p>
              <p className="mt-5 text-sm leading-loose" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 600 }}>
                An Ivorian entrepreneur specialising in mining, energy, digitalisation, and business development in Africa.
                With an international academic background and more than fifteen years of experience in business management,
                international trade, and industrial project implementation, Henri N'TAKPE leads Prestige Mining & Energy in Chad
                with a vision focused on economic transformation and the creation of sustainable value.
              </p>

              {/* Location */}
              <div className="mt-6 flex items-center gap-3">
                <MapPin size={14} style={{ color: '#00A8C4', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)' }}>
                  N'Djamena, Chad / Abidjan, Côte d'Ivoire
                </span>
              </div>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {['Ivorian', 'Born 12 Oct 1983', 'Founder since 2009', 'Science & Commerce', 'International'].map(tag => (
                  <span key={tag}
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: 'rgba(0,168,196,0.12)', color: '#00A8C4', fontFamily: 'var(--font-heading)', letterSpacing: '0.04em' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Career */}
      <section className="section-pad" style={{ background: '#FFFFFF' }}>
        <div className="container-xl">
          <AnimateIn>
            <span className="text-overline">Professional Experience</span>
            <span className="accent-line mt-3 mb-10" />
            <h2 className="text-display mb-12">Career Timeline</h2>
          </AnimateIn>
          <div className="relative">
            <div className="absolute left-[3.5rem] top-0 bottom-0 w-px hidden lg:block" style={{ background: 'linear-gradient(to bottom,#007A96,transparent)' }} />
            <div className="space-y-10">
              {CAREER.map((item, i) => (
                <AnimateIn key={item.year + item.org} delay={i * 0.07}>
                  <div className="flex gap-8 items-start">
                    <div className="shrink-0 w-28 text-right hidden lg:block">
                      <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.1rem', background: 'linear-gradient(135deg,#007A96,#79B82A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{item.year}</span>
                    </div>
                    <div className="hidden lg:flex shrink-0 items-center justify-center w-4 h-4 rounded-full mt-1.5" style={{ background: 'linear-gradient(135deg,#007A96,#79B82A)', boxShadow: '0 0 8px rgba(0,168,196,0.5)' }} />
                    <div className="flex-1 pb-8 border-b" style={{ borderColor: '#F5F5F5' }}>
                      <span className="font-bold text-sm block mb-1 lg:hidden" style={{ color: '#00A8C4', fontFamily: 'var(--font-heading)' }}>{item.year}</span>
                      <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: '#111111' }}>{item.title}</h4>
                      <p className="mb-2 text-sm" style={{ color: '#00A8C4', fontFamily: 'var(--font-body)' }}>{item.org}</p>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: '#4A4A4A', lineHeight: 1.7 }}>{item.body}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education + Expertise */}
      <section className="section-pad" style={{ background: '#F5F5F5' }}>
        <div className="container-xl">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Education */}
            <AnimateIn direction="left">
              <span className="text-overline">Academic Background</span>
              <span className="accent-line mt-3 mb-8" />
              <h2 className="text-display mb-8">Education</h2>
              <div className="space-y-6">
                {EDUCATION.map((edu) => (
                  <div key={edu.degree} className="flex gap-5 items-start">
                    <div className="shrink-0 text-right" style={{ minWidth: 44 }}>
                      <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.9rem', background: 'linear-gradient(135deg,#007A96,#79B82A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{edu.year}</span>
                    </div>
                    <div className="border-l-2 pl-5" style={{ borderColor: '#007A96' }}>
                      <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.9rem', color: '#111111' }}>{edu.degree}</p>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#9E9E9E', marginTop: '2px' }}>{edu.school}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-7 text-sm leading-loose" style={{ color: '#6B6B6B' }}>
                This dual scientific and commercial background enables Henri to combine an understanding
                of environmental challenges, mastery of international markets, and business development
                strategy — a rare combination that shapes Prestige Mining & Energy's approach to
                responsible resource extraction.
              </p>
            </AnimateIn>

            {/* Expertise */}
            <AnimateIn direction="right" delay={0.1}>
              <span className="text-overline">Key Expertise</span>
              <span className="accent-line mt-3 mb-8" />
              <h2 className="text-display mb-8">Core Competencies</h2>
              <ul className="space-y-3">
                {EXPERTISE.map(e => (
                  <li key={e} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ background: 'linear-gradient(135deg,#007A96,#79B82A)' }} />
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: '#4A4A4A', lineHeight: 1.7 }}>{e}</span>
                  </li>
                ))}
              </ul>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-pad" style={{ background: 'linear-gradient(160deg,#071524 0%,#0D2544 55%,#071828 100%)' }}>
        <div className="container-xl">
          <AnimateIn>
            <span className="text-overline">Vision</span>
            <span className="accent-line mt-3 mb-8" />
            <h2 className="text-display-light mb-4">Chad as a Regional Investment Platform</h2>
            <p className="mb-12 text-sm leading-loose max-w-2xl" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Through Prestige Mining & Energy, Henri N'TAKPE aims to make Chad a regional investment platform in natural
              resources, energy, and industrial infrastructure — built on three strategic pillars:
            </p>
          </AnimateIn>
          <div className="grid gap-6 sm:grid-cols-3">
            {VISION_PILLARS.map(([title, body], i) => (
              <AnimateIn key={title} delay={i * 0.08}>
                <div className="glass-card p-8 h-full">
                  <div className="mb-5 h-1 w-8" style={{ background: 'linear-gradient(90deg,#007A96,#79B82A)' }} />
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>{title}</h4>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-orange">Get in Touch <ArrowLeft size={14} className="rotate-180" /></Link>
            <Link href="/about#governance" className="btn-dark">Back to Leadership</Link>
          </div>
        </div>
      </section>
    </>
  );
}
