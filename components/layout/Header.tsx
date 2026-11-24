'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import type { GlobalSettings } from '@/lib/directus';

const NAV = [
  {
    label: 'Antimony',
    href:  '/mining',
    sub: [
      { label: 'Antimony Extraction',  href: '/mining#antimony-extraction' },
      { label: 'Ore Processing',       href: '/mining#ore-processing'      },
      { label: 'Concentrate Export',   href: '/mining#concentrate-export'  },
    ],
  },
  {
    label: 'Gold',
    href:  '/gold',
    sub: [
      { label: 'Gold Exploration',  href: '/gold#gold-exploration' },
      { label: 'Gold Processing',   href: '/gold#gold-processing'  },
      { label: 'Bullion & Trading', href: '/gold#bullion-trading'  },
    ],
  },
  {
    label: 'Oil & Energy',
    href:  '/energy',
    sub: [
      { label: 'Oil Exploration',  href: '/energy#oil-exploration' },
      { label: 'Oil Production',   href: '/energy#oil-production'  },
      { label: 'Crude Trading',    href: '/energy#crude-trading'   },
    ],
  },
  {
    label: 'Others',
    href:  '/services',
    sub: [
      { label: 'All Services',        href: '/services'                    },
      { label: 'Mineral Trading',     href: '/services/mineral-trading'    },
      { label: 'Infrastructure',      href: '/services/infrastructure'     },
      { label: 'Project Financing',   href: '/services/project-financing'  },
    ],
  },
  {
    label: 'Sustainability',
    href:  '/sustainability',
    sub: [
      { label: 'Biochar & Carbon',       href: '/sustainability#biochar'     },
      { label: 'Solar Energy',           href: '/sustainability#solar'       },
      { label: 'Community Investment',   href: '/sustainability#community'   },
      { label: 'Environmental Standards',href: '/sustainability#standards'   },
    ],
  },
  { label: 'About',    href: '/about',    sub: [] },
  { label: 'Insights', href: '/insights', sub: [] },
];

interface HeaderProps { settings: GlobalSettings | null; }

export default function Header({ settings: _ }: HeaderProps) {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDrop,   setOpenDrop]   = useState<string | null>(null);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setOpenDrop(null);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: '#FFFFFF',
      borderBottom: '1px solid #EBEBEB',
      boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.06)' : 'none',
      transition: 'box-shadow 0.3s ease',
    }}>
      <div style={{
        maxWidth: '1280px', margin: '0 auto', height: '68px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 clamp(16px, 4vw, 40px)',
      }}>

        {/* Logo */}
        <Link href="/" style={{ lineHeight: 0, flexShrink: 0 }}>
          <Image src="/prestige-logo.jpg" alt="Prestige Mining & Energy"
            width={160} height={40}
            style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
            priority
          />
        </Link>

        {/* Desktop nav + CTA grouped to the right */}
        <div ref={dropRef} className="hidden lg:flex" style={{ alignItems: 'center', gap: '0', marginLeft: 'auto' }}>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0' }}
          aria-label="Primary">
          {NAV.map((item) => (
            <div key={item.href} style={{ position: 'relative' }}>
              {item.sub.length > 0 ? (
                <button
                  onClick={() => setOpenDrop(openDrop === item.href ? null : item.href)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '4px',
                    padding: '8px 16px', background: 'none', border: 'none', cursor: 'pointer',
                    fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 500,
                    color: openDrop === item.href ? '#00A8C4' : '#222222',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={e => { if (openDrop !== item.href) (e.currentTarget as HTMLElement).style.color = '#00A8C4'; }}
                  onMouseLeave={e => { if (openDrop !== item.href) (e.currentTarget as HTMLElement).style.color = '#222222'; }}
                >
                  {item.label}
                  <ChevronDown size={12} style={{
                    opacity: 0.4,
                    transform: openDrop === item.href ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.18s',
                  }} />
                </button>
              ) : (
                <Link href={item.href} style={{
                  display: 'block', padding: '8px 16px',
                  fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 500,
                  color: '#222222', transition: 'color 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#00A8C4')}
                onMouseLeave={e => (e.currentTarget.style.color = '#222222')}>
                  {item.label}
                </Link>
              )}

              {/* Dropdown */}
              {item.sub.length > 0 && openDrop === item.href && (
                <div style={{
                  position: 'absolute', top: 'calc(100% + 4px)', left: 0, minWidth: '220px',
                  background: '#FFFFFF', border: '1px solid #E8E8E8',
                  boxShadow: '0 16px 40px rgba(0,0,0,0.09)',
                  padding: '4px 0',
                }}>
                  {item.sub.map((sub) => (
                    <Link key={sub.href} href={sub.href} onClick={() => setOpenDrop(null)}
                      style={{
                        display: 'block', padding: '10px 20px',
                        fontFamily: 'var(--font-body)', fontSize: '0.83rem',
                        fontWeight: 400, color: '#444444',
                        transition: 'color 0.15s, background 0.15s',
                      }}
                      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = '#00A8C4'; el.style.background = '#FAFAFA'; }}
                      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = '#444444'; el.style.background = 'transparent'; }}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div style={{ marginLeft: '12px' }}>
          <Link href="/contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '9px 22px',
              background: '#0D2544', color: '#FFFFFF',
              fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 500,
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#00A8C4'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#0D2544'}
          >
            Get in Touch <ArrowRight size={12} />
          </Link>
        </div>
        </div>{/* end right group */}

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(o => !o)} className="lg:hidden"
          style={{ padding: '8px', background: 'none', border: 'none', cursor: 'pointer', color: '#222222' }}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className="lg:hidden" style={{
        overflow: 'hidden',
        maxHeight: mobileOpen ? '32rem' : '0',
        transition: 'max-height 0.3s ease',
        background: '#FFFFFF',
        borderTop: mobileOpen ? '1px solid #EBEBEB' : 'none',
      }}>
        <nav style={{ display: 'flex', flexDirection: 'column', padding: '8px 24px 20px' }}>
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
              style={{
                padding: '13px 0',
                fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 500,
                color: '#222222', borderBottom: '1px solid #F2F2F2',
              }}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMobileOpen(false)}
            style={{
              marginTop: '16px', padding: '12px 0', textAlign: 'center',
              background: '#0D2544', color: '#FFFFFF',
              fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 500,
            }}>
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
