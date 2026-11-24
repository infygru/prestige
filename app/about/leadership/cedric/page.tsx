import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import AnimateIn from '@/components/ui/AnimateIn';

export const metadata: Metadata = {
  title: 'Faouly Cédric Eddie David — Managing Director | Prestige Mining & Energy',
  description:
    'Profile of Faouly Cédric Eddie David, Managing Director of Prestige Mining & Energy, a seasoned Ivorian executive with expertise in corporate strategy, mining, and structured investment in Africa.',
};

const EXPERTISE = [
  'Corporate strategy and governance',
  'International commercial negotiation',
  'Business plan development',
  'Fundraising and financing research',
  'International business development',
  'Cash management and financial analysis',
  'Management control and accounting follow-up',
  'Agricultural and industrial project management',
  'Support for cooperatives and producer organisations',
];

const CAREER = [
  {
    period: 'Jan 2025 – Present',
    title: 'Managing Director',
    org: 'Prestige Mining & Energy',
    bullets: [
      "Defines the company's overall strategy and development policy.",
      "Supervises operational and administrative activities across Chad and Côte d'Ivoire.",
      'Identifies and engages financial partners, investors, and strategic institutions.',
      'Leads mining and energy projects at the regional level.',
      "Monitors the group's growth and performance objectives.",
    ],
  },
  {
    period: 'Jan 2024 – Present',
    title: 'Vice President',
    org: "SCOOPAN M'BA — Société Coopérative Agricole Nzrama de Mbatto (Côte d'Ivoire)",
    bullets: [
      'Supports the President in strategic and institutional responsibilities.',
      "Defends producers' interests before administrative authorities.",
      'Manages relations with the Coffee-Cocoa Board, ANACARDE, and cotton sector organisations.',
      'Strengthens cooperative governance and improves producer competitiveness.',
    ],
  },
  {
    period: 'Jan 2016 – Present',
    title: 'Managing Director & Founder',
    org: "FAOULY NEGOCE GROUP INTERNATIONAL SARL — Abidjan, Côte d'Ivoire",
    bullets: [
      'Agricultural trading consultant and business developer for cocoa and cashew cooperatives.',
      'Assists export-oriented organisations in securing financing.',
      'Provides strategic advice to international trading companies.',
      'Supports agricultural and commercial development projects.',
    ],
  },
  {
    period: 'Nov 2008 – Jun 2011',
    title: 'Operations Management Committee Member',
    org: "CCRAE-UEMOA — Abidjan, Côte d'Ivoire",
    bullets: [
      'Participated in operations management and banking regulation monitoring.',
      'Strengthened expertise in financial mechanisms and regional banking standards across the UEMOA zone.',
    ],
  },
];

const EDUCATION = [
  { degree: 'Commercial Engineering Degree — Finance Option', detail: 'Financial engineering and market finance' },
  { degree: 'Degree in Commercial Technical Engineering — Finance Option', detail: 'Audit and management control' },
  { degree: 'Commercial Inspectorate Degree', detail: 'Business management and administration' },
  { degree: 'Higher National Diploma in Business Management', detail: '' },
  { degree: 'Baccalaureate, Series D', detail: 'Mathematics, Physics, and Natural Sciences — CSP Cocody' },
];

export default function CedricProfilePage() {
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

      {/* Hero card */}
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
                  src="https://api.prestigeminingenergy.com/assets/59ae1d39-89a9-44c3-a704-8028c3966a4e?width=260&height=320&fit=cover&quality=85"
                  alt="Faouly Cédric Eddie David"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center top' }}
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
                Faouly Cédric<br />Eddie David
              </h1>
              <p className="mt-2 text-base font-semibold" style={{ color: '#00A8C4', fontFamily: 'var(--font-heading)' }}>
                Managing Director — Prestige Mining & Energy
              </p>
              <p className="mt-5 text-sm leading-loose" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 600 }}>
                A seasoned Ivorian business executive with recognised expertise in corporate strategy, commercial negotiation,
                financial engineering, and the structuring of high-value projects. With more than 15 years of experience across
                business management, financial advisory, international business development, and the support of agricultural and
                industrial projects, Mr. Faouly leads Prestige Mining & Energy's growth strategy across the mining, energy, and
                structured investment sectors in Central and West Africa.
              </p>

              {/* Contact */}
              <div className="mt-8 flex flex-col gap-3">
                {[
                  { icon: Phone,   label: '+225 07 10 96 73 38' },
                  { icon: Mail,    label: 'faoulydavid@gmail.com' },
                  { icon: MapPin,  label: "01 BP 4855 Abidjan 01, Côte d'Ivoire" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <Icon size={14} style={{ color: '#00A8C4', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)' }}>{label}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {['Ivorian', 'Born 18 Nov 1983', 'Married', 'Licence B', 'French · English'].map(tag => (
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

      {/* Mission */}
      <section className="section-pad" style={{ background: '#FFFFFF' }}>
        <div className="container-xl">
          <AnimateIn>
            <span className="text-overline">Mission at Prestige</span>
            <span className="accent-line mt-3 mb-8" />
            <h2 className="text-display mb-10">Leading Strategy Across Mining & Energy</h2>
          </AnimateIn>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Defining Strategy", "Sets the company's overall development policy and charts its course in Central and West Africa's resource markets."],
              ['Operational Oversight', 'Supervises all operational and administrative activities to ensure execution aligns with strategic goals.'],
              ['Partner Engagement', 'Identifies and engages financial partners, investors, and strategic institutions to fuel project growth.'],
              ['Regional Projects', 'Leads mining and energy projects at the regional level, overseeing feasibility, structuring, and delivery.'],
              ['Performance Monitoring', 'Ensures rigorous tracking of group growth and performance objectives across all business units.'],
              ['Sustainable Partnerships', 'Centers his approach on building lasting partnerships, structuring project financing, and optimising investment opportunities.'],
            ].map(([title, body], i) => (
              <AnimateIn key={title} delay={i * 0.06}>
                <div className="feature-card p-7 h-full">
                  <div className="mb-4 h-1 w-8" style={{ background: 'linear-gradient(90deg,#007A96,#79B82A)' }} />
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', color: '#111111', marginBottom: '0.5rem' }}>{title}</h4>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#757575', lineHeight: 1.7 }}>{body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Career */}
      <section className="section-pad" style={{ background: '#F5F5F5' }}>
        <div className="container-xl">
          <AnimateIn>
            <span className="text-overline">Professional Background</span>
            <span className="accent-line mt-3 mb-10" />
            <h2 className="text-display mb-12">Career Timeline</h2>
          </AnimateIn>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px hidden lg:block" style={{ background: 'linear-gradient(to bottom,#007A96,transparent)' }} />
            <div className="space-y-10">
              {CAREER.map((item, i) => (
                <AnimateIn key={item.title + item.org} delay={i * 0.08}>
                  <div className="flex gap-8 items-start">
                    <div className="hidden lg:flex shrink-0 items-center justify-center w-4 h-4 rounded-full mt-1.5 ml-2" style={{ background: 'linear-gradient(135deg,#007A96,#79B82A)', boxShadow: '0 0 8px rgba(0,168,196,0.5)' }} />
                    <div className="flex-1">
                      <p className="text-xs font-semibold mb-1" style={{ color: '#00A8C4', fontFamily: 'var(--font-heading)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{item.period}</p>
                      <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', color: '#111111' }}>{item.title}</h4>
                      <p className="mb-3 text-sm" style={{ color: '#757575', fontFamily: 'var(--font-body)' }}>{item.org}</p>
                      <ul className="space-y-1.5">
                        {item.bullets.map(b => (
                          <li key={b} className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: '#79B82A' }} />
                            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#4A4A4A', lineHeight: 1.7 }}>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education + Expertise */}
      <section className="section-pad" style={{ background: '#FFFFFF' }}>
        <div className="container-xl">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Education */}
            <AnimateIn direction="left">
              <span className="text-overline">Academic Background</span>
              <span className="accent-line mt-3 mb-8" />
              <h2 className="text-display mb-8">Education — INSTEC Group</h2>
              <div className="space-y-5">
                {EDUCATION.map((edu) => (
                  <div key={edu.degree} className="border-l-2 pl-5" style={{ borderColor: '#007A96' }}>
                    <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.9rem', color: '#111111' }}>{edu.degree}</p>
                    {edu.detail && (
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#9E9E9E', marginTop: '2px' }}>{edu.detail}</p>
                    )}
                  </div>
                ))}
              </div>
            </AnimateIn>

            {/* Expertise */}
            <AnimateIn direction="right" delay={0.1}>
              <span className="text-overline">Areas of Expertise</span>
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

      {/* Languages & Skills */}
      <section className="section-pad" style={{ background: '#F5F5F5' }}>
        <div className="container-xl">
          <div className="grid gap-16 lg:grid-cols-2">
            <AnimateIn direction="left">
              <span className="text-overline">Languages</span>
              <span className="accent-line mt-3 mb-8" />
              <h2 className="text-display mb-8">Language Skills</h2>
              <div className="space-y-4">
                {[
                  { lang: 'French', level: 'Working language — full professional proficiency' },
                  { lang: 'English', level: 'Read, written, and spoken — intermediate professional level' },
                ].map(({ lang, level }) => (
                  <div key={lang} className="flex gap-5 items-start">
                    <div className="border-l-2 pl-5" style={{ borderColor: '#007A96' }}>
                      <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.9rem', color: '#111111' }}>{lang}</p>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#9E9E9E', marginTop: '2px' }}>{level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn direction="right" delay={0.1}>
              <span className="text-overline">Digital Skills</span>
              <span className="accent-line mt-3 mb-8" />
              <h2 className="text-display mb-8">Technology Proficiency</h2>
              <ul className="space-y-3">
                {[
                  'Microsoft Office Suite (Word, Excel, PowerPoint)',
                  'Digital management and ERP tools',
                  'Financial analysis and reporting platforms',
                  'Internet research and digital communication tools',
                ].map(e => (
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
        <div className="container-xl max-w-3xl text-center mx-auto">
          <AnimateIn>
            <span className="text-overline">Vision</span>
            <span className="accent-line mx-auto mt-3 mb-8" />
            <h2 className="text-display-light mb-6">Building Africa's Next Resource Champion</h2>
            <p className="text-sm leading-loose" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Through Prestige Mining & Energy, Faouly Cédric Eddie David pursues an ambitious vision: to build a leading African
              company in the mining and energy sectors, capable of mobilising international capital, creating sustainable value,
              and contributing to the economic development of Chad and the African continent.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-orange">Get in Touch <ArrowLeft size={14} className="rotate-180" /></Link>
              <Link href="/about#governance" className="btn-dark">Back to Leadership</Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
