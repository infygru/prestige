'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import type { GlobalSettings } from '@/lib/directus';

const NAV = [
  {
    label: 'Operations',
    href:  '/mining',
    sub: [
      { label: 'Open-Cut Extraction', href: '/mining#extraction' },
      { label: 'Ore Processing',      href: '/mining#processing' },
      { label: 'Logistics & Port',    href: '/mining#logistics'  },
    ],
  },
  {
    label: 'Energy',
    href:  '/energy',
    sub: [
      { label: 'Utility-Scale Solar', href: '/energy#solar'   },
      { label: 'Battery Storage',     href: '/energy#storage' },
      { label: 'Power Agreements',    href: '/energy#ppa'     },
    ],
  },
  { label: 'About',    href: '/about',    sub: [] },
  { label: 'Insights', href: '/insights', sub: [] },
];

interface HeaderProps { settings: GlobalSettings | null; }

export default function Header({ settings }: HeaderProps) {
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
          <Image src="/prestige-me-logo.jpg" alt="Prestige Mining & Energy"
            width={160} height={40}
            style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
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
                    color: openDrop === item.href ? '#F57C00' : '#222222',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={e => { if (openDrop !== item.href) (e.currentTarget as HTMLElement).style.color = '#F57C00'; }}
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
                onMouseEnter={e => (e.currentTarget.style.color = '#F57C00')}
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
                      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = '#F57C00'; el.style.background = '#FAFAFA'; }}
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
              background: '#111111', color: '#FFFFFF',
              fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 500,
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#F57C00'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#111111'}
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
        maxHeight: mobileOpen ? '26rem' : '0',
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
              background: '#111111', color: '#FFFFFF',
              fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 500,
            }}>
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
