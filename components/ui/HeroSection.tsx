'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const STATS = [
  { end: 6,  suffix: ' Kt',  label: 'Antimony / Year' },
  { end: 48, suffix: 'Koz', label: 'Gold / Year'      },
  { end: 12, suffix: 'K',   label: 'Oil (bbl/d)'      },
  { end: 5,  suffix: '+',   label: 'Active Sites'      },
];

const COMMODITIES = [
  { label: 'Antimony', stat: '6 Kt / yr',   desc: 'Moyen-Chari Belt, Chad',    color: '#00A8C4', href: '/mining'  },
  { label: 'Gold',     stat: '48 Koz / yr', desc: 'Certified Doré — Dubai & CH', color: '#D4A017', href: '/gold'    },
  { label: 'Oil',      stat: '12K bbl/d',   desc: 'Doba Basin, Chad',           color: '#79B82A', href: '/energy'  },
];

const EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease: EXPO, delay: d } }),
};

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => {
      let f = 0;
      const run = () => {
        f++;
        setN(Math.round(end * (1 - Math.pow(1 - f / 60, 3))));
        if (f < 60) requestAnimationFrame(run); else setN(end);
      };
      requestAnimationFrame(run);
    }, 1000);
    return () => clearTimeout(t);
  }, [end]);
  return <>{n}{suffix}</>;
}

export default function HeroSection({ imgUrl }: { imgUrl: string }) {
  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      minHeight: '620px',
      background: '#060E1A',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>

      {/* Background image — lighter on right so the cards read cleanly */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image src={imgUrl} alt="Prestige Mining operations" fill priority sizes="100vw" className="object-cover" />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(4,10,20,0.52)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(4,10,20,0.88) 42%, rgba(4,10,20,0.28) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 55%, rgba(4,11,20,0.9) 100%)' }} />
      </div>

      {/* Main content */}
      <div style={{
        position: 'relative', zIndex: 2, flex: 1,
        display: 'flex', alignItems: 'center',
        padding: '0 clamp(1.5rem, 6vw, 7rem)',
        paddingBottom: '5.5rem',
        gap: '4rem',
      }}>

        {/* ── LEFT: headline + CTAs ── */}
        <div style={{ flex: '0 0 auto', maxWidth: '500px', width: '100%' }}>

          {/* Badge */}
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
            style={{ marginBottom: '1.75rem' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              border: '1px solid rgba(0,168,196,0.35)', padding: '5px 13px',
              background: 'rgba(0,168,196,0.07)',
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#00A8C4', flexShrink: 0 }} />
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#00A8C4' }}>
                Est. 2009 · N&apos;Djamena, Chad · Central Africa
              </span>
            </span>
          </motion.div>

          {/* Headline — tightened from 5rem max → 3rem max */}
          <motion.h1
            custom={0.14}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{ margin: '0 0 1.1rem', fontFamily: 'var(--font-heading)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.1 }}
          >
            <span style={{ display: 'block', fontSize: 'clamp(1.8rem, 3vw, 3rem)', color: '#FFFFFF' }}>
              Central Africa&apos;s
            </span>
            <span style={{ display: 'block', fontSize: 'clamp(1.8rem, 3vw, 3rem)', color: '#00A8C4' }}>
              Resource Company.
            </span>
          </motion.h1>

          {/* Accent line */}
          <motion.div custom={0.26} variants={fadeUp} initial="hidden" animate="visible"
            style={{ height: '2px', width: '44px', background: 'linear-gradient(to right,#00A8C4,#79B82A)', marginBottom: '1.1rem' }} />

          {/* Description */}
          <motion.p custom={0.36} variants={fadeUp} initial="hidden" animate="visible" style={{
            fontFamily: 'var(--font-body)', fontSize: 'clamp(0.82rem, 1.1vw, 0.93rem)',
            lineHeight: 1.85, color: 'rgba(255,255,255,0.48)',
            marginBottom: '1.9rem', maxWidth: '420px',
          }}>
            Extracting high-grade antimony, gold doré, and crude oil from Chad — supplying
            critical minerals and hydrocarbons to buyers across Europe, Asia, and the Middle East.
          </motion.p>

          {/* CTAs */}
          <motion.div custom={0.46} variants={fadeUp} initial="hidden" animate="visible"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
            <Link href="/about" className="btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
              About Us <ArrowRight size={13} />
            </Link>
            <Link href="/contact" className="btn-dark"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
              Contact Us <ArrowUpRight size={12} />
            </Link>
            <Link href="/sustainability" style={{
              display: 'inline-flex', alignItems: 'center', gap: '5px',
              fontFamily: 'var(--font-heading)', fontSize: '0.67rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.32)',
              textDecoration: 'none',
            }}>
              Sustainability <ArrowUpRight size={11} />
            </Link>
          </motion.div>

        </div>

        {/* ── RIGHT: commodity + sustainability cards ── */}
        <div style={{
          flex: 1, marginLeft: 'auto',
          display: 'flex', flexDirection: 'column', gap: '8px',
          maxWidth: '320px',
        }}
          className="hidden lg:flex"
        >
          {COMMODITIES.map((c, i) => (
            <motion.div key={c.label} custom={0.38 + i * 0.1} variants={fadeUp} initial="hidden" animate="visible">
              <Link href={c.href} style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '13px 16px',
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(14px)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderLeft: `3px solid ${c.color}`,
                  transition: 'background 0.18s',
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.09)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'}
                >
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.17em', textTransform: 'uppercase', color: c.color, marginBottom: '3px' }}>
                      {c.label}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>
                      {c.desc}
                    </div>
                  </div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.05rem', color: '#FFFFFF', letterSpacing: '-0.02em', flexShrink: 0, marginLeft: '1rem' }}>
                    {c.stat}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Sustainability card */}
          <motion.div custom={0.68} variants={fadeUp} initial="hidden" animate="visible">
            <Link href="/sustainability" style={{ textDecoration: 'none', display: 'block' }}>
              <div style={{
                padding: '11px 16px',
                background: 'rgba(121,184,42,0.07)',
                backdropFilter: 'blur(14px)',
                border: '1px solid rgba(121,184,42,0.18)',
                borderLeft: '3px solid #79B82A',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                transition: 'background 0.18s',
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(121,184,42,0.13)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(121,184,42,0.07)'}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.17em', textTransform: 'uppercase', color: '#79B82A', marginBottom: '2px' }}>
                    Sustainability
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.32)' }}>
                    Biochar · Solar · Zero Harm
                  </div>
                </div>
                <ArrowUpRight size={14} style={{ color: '#79B82A', flexShrink: 0 }} />
              </div>
            </Link>
          </motion.div>
        </div>

      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.85, ease: EXPO }}
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 5,
          display: 'flex',
          background: 'rgba(4,11,20,0.95)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        {STATS.map((s, i) => (
          <div key={s.label} style={{
            flex: 1, padding: '1.05rem 1.2rem',
            borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(0,168,196,0.08)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}
          >
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(0.95rem,1.6vw,1.3rem)', lineHeight: 1, color: '#FFFFFF' }}>
              <Counter end={s.end} suffix={s.suffix} />
            </div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.5rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginTop: '5px' }}>
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>

    </section>
  );
}
