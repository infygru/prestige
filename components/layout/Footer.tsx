import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { GlobalSettings } from '@/lib/directus';

interface FooterProps { settings: GlobalSettings | null; }

const LINKS = {
  Operations: [
    { label: 'Open-Cut Extraction',   href: '/mining#extraction' },
    { label: 'Ore Processing',        href: '/mining#processing' },
    { label: 'Mine Logistics & Port', href: '/mining#logistics'  },
    { label: 'All Mining Services',   href: '/mining'            },
  ],
  Energy: [
    { label: 'Utility-Scale Solar',   href: '/energy#solar'   },
    { label: 'Battery Storage',       href: '/energy#storage' },
    { label: 'Power Agreements',      href: '/energy#ppa'     },
    { label: 'All Energy Services',   href: '/energy'         },
  ],
  Company: [
    { label: 'About Us',       href: '/about'                },
    { label: 'Sustainability', href: '/about#sustainability' },
    { label: 'Careers',        href: '/careers'              },
    { label: 'Insights',       href: '/insights'             },
    { label: 'Contact',        href: '/contact'              },
  ],
};

export default function Footer({ settings }: FooterProps) {
  const year  = new Date().getFullYear();
  const name  = settings?.site_name     ?? 'Prestige Mining and Energy';
  const email = settings?.contact_email ?? 'info@prestigeminingenergy.com';
  const phone = settings?.contact_phone ?? '+61 8 9000 0000';
  const addr  = settings?.hq_address    ?? '1 Exchange Plaza, Perth WA 6000, Australia';

  return (
    <footer style={{ background: '#0D0D0D' }}>

      {/* Orange top rule — 3px solid, matches hero panel separator */}
      <div style={{ height: '3px', background: '#F57C00' }} />

      <div className="container-xl py-14 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr]">

          {/* ── Brand column ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo in white container so JPG background is invisible on dark */}
            <div style={{
              display: 'inline-block',
              background: '#FFFFFF',
              padding: '8px 14px',
              marginBottom: '24px',
            }}>
              <Image
                src="/prestige-me-logo.jpg"
                alt="Prestige Mining & Energy"
                width={148}
                height={36}
                style={{ height: '32px', width: 'auto', objectFit: 'contain', display: 'block' }}
              />
            </div>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem', fontWeight: 300, lineHeight: 1.75,
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '260px', margin: '0 0 24px',
            }}>
              {settings?.site_tagline ?? 'Industrial Excellence. Sustainable Future.'}
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={13} style={{ color: '#F57C00', flexShrink: 0 }} />
                <a href={`mailto:${email}`} className="footer-contact-link">
                  {email}
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={13} style={{ color: '#F57C00', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)' }}>
                  {phone}
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={13} style={{ color: '#F57C00', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                  {addr}
                </span>
              </li>
            </ul>
          </div>

          {/* ── Link columns ── */}
          {(Object.entries(LINKS) as [string, { label: string; href: string }[]][]).map(([group, items]) => (
            <div key={group}>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.6rem', fontWeight: 700,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.8)',
                margin: '0 0 18px',
              }}>
                {group}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {items.map(item => (
                  <li key={item.href}>
                    <Link href={item.href} className="footer-nav-link">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container-xl py-4"
          style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <span style={{
            fontFamily: 'var(--font-body)', fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.5)',
          }}>
            © {year} {name}. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: '24px' }}>
            {[['Privacy Policy', '/privacy'], ['Legal', '/legal'], ['Sitemap', '/sitemap']].map(([label, href]) => (
              <Link key={label} href={href} className="footer-legal-link">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
