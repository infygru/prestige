'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const STATS = [
  { end: 15, suffix: '+',   label: 'Years in Africa'       },
  { end: 95, suffix: '%+',  label: 'Concentrate Purity'    },
  { end: 85, suffix: '%',   label: 'National Workforce'    },
  { end: 5,  suffix: '+',   label: 'Active Sites'          },
];

const COMMODITIES = [
  { label: 'Antimony',       stat: '6 Kt / yr',    desc: 'Moyen-Chari Belt, Chad',       color: '#00A8C4', href: '/mining'  },
  { label: 'Gold',           stat: '48 Koz / yr',  desc: 'Certified Doré — Dubai & CH',  color: '#D4A017', href: '/gold'    },
  { label: 'Oil',            stat: '12K bbl/d',    desc: 'Doba Basin, Chad',              color: '#79B82A', href: '/energy'  },
];

const EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.75, ease: EXPO, delay: d } }),
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
      minHeight: '680px',
      background: '#060E1A',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>

      {/* Background — heavy vignette left, lighter right so cards read cleanly */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image src={imgUrl} alt="Prestige Mining operations" fill priority sizes="100vw" className="object-cover" />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(4,10,20,0.50)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(4,10,20,0.90) 40%, rgba(4,10,20,0.25) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(4,11,20,0.92) 100%)' }} />
      </div>

      {/* ── Content ── */}
      <div style={{
        position: 'relative', zIndex: 2,
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        padding: '0 clamp(1.5rem, 6vw, 7rem)',
        paddingBottom: '6rem', /* clear the stats bar */
        gap: '5rem',
      }}>

        {/* LEFT */}
        <div style={{ flex: '0 0 auto', maxWidth: '560px', width: '100%' }}>

          {/* Badge */}
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
            style={{ marginBottom: '2.2rem' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              border: '1px solid rgba(0,168,196,0.35)', padding: '6px 14px',
              background: 'rgba(0,168,196,0.07)',
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#00A8C4', flexShrink: 0 }} />
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#00A8C4' }}>
                Est. 2009 · N&apos;Djamena, Chad · Central Africa
              </span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={0.14}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{ margin: '0 0 1.6rem', fontFamily: 'var(--font-heading)', fontWeight: 800, letterSpacing: '-0.028em', lineHeight: 1.08 }}
          >
            <span style={{ display: 'block', fontSize: 'clamp(2.4rem, 4vw, 4.2rem)', color: '#FFFFFF' }}>
              Central Africa&apos;s
            </span>
            <span style={{ display: 'block', fontSize: 'clamp(2.4rem, 4vw, 4.2rem)', color: '#00A8C4' }}>
              Resource Company.
            </span>
          </motion.h1>

          {/* Accent line */}
          <motion.div custom={0.26} variants={fadeUp} initial="hidden" animate="visible"
            style={{ height: '2px', width: '52px', background: 'linear-gradient(to right,#00A8C4,#79B82A)', marginBottom: '1.6rem' }} />

          {/* Description */}
          <motion.p custom={0.36} variants={fadeUp} initial="hidden" animate="visible" style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.88rem, 1.2vw, 1rem)',
            lineHeight: 1.9,
            color: 'rgba(255,255,255,0.5)',
            marginBottom: '2.4rem',
            maxWidth: '460px',
          }}>
            Extracting high-grade antimony, gold doré, and crude oil from Chad — supplying
            critical minerals and hydrocarbons to buyers across Europe, Asia, and the Middle East.
          </motion.p>

          {/* CTAs */}
          <motion.div custom={0.46} variants={fadeUp} initial="hidden" animate="visible"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
            <Link href="/about" className="btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              About Us <ArrowRight size={14} />
            </Link>
            <Link href="/contact" className="btn-dark"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Contact Us <ArrowUpRight size={13} />
            </Link>
            <Link href="/sustainability" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              fontFamily: 'var(--font-heading)', fontSize: '0.68rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)',
              textDecoration: 'none',
            }}>
              Sustainability <ArrowUpRight size={12} />
            </Link>
          </motion.div>

        </div>

        {/* RIGHT — commodity cards, desktop only */}
        <div
          className="hidden lg:flex"
          style={{
            flex: 1,
            marginLeft: 'auto',
            flexDirection: 'column',
            gap: '10px',
            maxWidth: '360px',
          }}
        >
          {COMMODITIES.map((c, i) => (
            <motion.div key={c.label} custom={0.4 + i * 0.12} variants={fadeUp} initial="hidden" animate="visible">
              <Link href={c.href} style={{ textDecoration: 'none', display: 'block' }}>
                <div
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '18px 22px',
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(14px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderLeft: `3px solid ${c.color}`,
                    transition: 'background 0.18s',
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.10)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'}
                >
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.17em', textTransform: 'uppercase', color: c.color, marginBottom: '5px' }}>
                      {c.label}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.38)' }}>
                      {c.desc}
                    </div>
                  </div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.2rem', color: '#FFFFFF', letterSpacing: '-0.02em', flexShrink: 0, marginLeft: '1.5rem' }}>
                    {c.stat}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Sustainability */}
          <motion.div custom={0.76} variants={fadeUp} initial="hidden" animate="visible">
            <Link href="/sustainability" style={{ textDecoration: 'none', display: 'block' }}>
              <div
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '15px 22px',
                  background: 'rgba(121,184,42,0.07)',
                  backdropFilter: 'blur(14px)',
                  border: '1px solid rgba(121,184,42,0.18)',
                  borderLeft: '3px solid #79B82A',
                  transition: 'background 0.18s',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(121,184,42,0.14)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(121,184,42,0.07)'}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.17em', textTransform: 'uppercase', color: '#79B82A', marginBottom: '5px' }}>
                    Sustainability
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)' }}>
                    Biochar · Solar · Zero Harm
                  </div>
                </div>
                <ArrowUpRight size={16} style={{ color: '#79B82A', flexShrink: 0 }} />
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
            flex: 1,
            padding: '1.25rem 1.5rem',
            borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(0,168,196,0.08)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}
          >
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(1rem, 1.8vw, 1.5rem)', lineHeight: 1, color: '#FFFFFF' }}>
              <Counter end={s.end} suffix={s.suffix} />
            </div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.52rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginTop: '6px' }}>
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>

    </section>
  );
}
