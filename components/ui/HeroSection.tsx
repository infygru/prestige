'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

// ─── Data ──────────────────────────────────────────────────────────────────────

const STATS = [
  { end: 22,  suffix: '+',   label: 'Active Mine Sites'  },
  { end: 48,  suffix: ' Mt', label: 'Annual Extraction'   },
  { end: 40,  suffix: '+',   label: 'Years Operating'     },
  { end: 4,   suffix: '',    label: 'Countries'            },
];

const COMMODITIES = ['Iron Ore', 'Copper', 'Gold', 'Nickel', 'Lithium'];

const EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

// ─── Framer variants ───────────────────────────────────────────────────────────

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.7, ease: EXPO } },
};

const maskUp = {
  hidden:  { y: '110%' },
  visible: { y: '0%',   transition: { duration: 0.9, ease: EXPO } },
};

const scaleIn = {
  hidden:  { scaleX: 0, originX: 0 },
  visible: { scaleX: 1, originX: 0, transition: { duration: 0.65, ease: EXPO } },
};

// ─── Counting stat ─────────────────────────────────────────────────────────────

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
    }, 800);
    return () => clearTimeout(t);
  }, [end]);
  return <>{n}{suffix}</>;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function HeroSection({ imgUrl }: { imgUrl: string }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 600], ['0%', '12%']);

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        minHeight: 'calc(100svh - 68px)',
        background: '#060E1A',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >

      {/* ── Ghost background text — depth layer ── */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        bottom: '-5%',
        right: '-1%',
        fontFamily: 'var(--font-heading)',
        fontWeight: 800,
        fontSize: 'clamp(120px, 22vw, 340px)',
        lineHeight: 1,
        letterSpacing: '-0.05em',
        color: 'transparent',
        WebkitTextStroke: '1px rgba(255,255,255,0.04)',
        pointerEvents: 'none',
        userSelect: 'none',
        zIndex: 0,
      }}>
        1984
      </div>

      {/* ── Subtle teal glow — bottom centre ── */}
      <div style={{
        position: 'absolute', bottom: 0, left: '30%', right: '30%', height: '40%',
        background: 'radial-gradient(ellipse at bottom, rgba(0,168,196,0.07) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* ── Main content row ── */}
      <div style={{ display: 'flex', flex: 1, position: 'relative', zIndex: 1 }}>

        {/* ══════════════ LEFT — text ══════════════ */}
        <motion.div
          className="hero-left-panel"
          variants={stagger}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 'clamp(2.5rem,5vw,5rem) clamp(1.5rem,5vw,5rem)',
            paddingBottom: 'calc(clamp(2.5rem,5vw,5rem) + 5.5rem)',
            width: '100%',
            position: 'relative',
            zIndex: 1,
          }}
        >

          {/* Pill badge */}
          <motion.div variants={fadeUp} style={{ marginBottom: '2.8rem' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              border: '1px solid rgba(0,168,196,0.3)',
              padding: '7px 16px',
              background: 'rgba(0,168,196,0.06)',
            }}>
              <span style={{
                width: '6px', height: '6px', borderRadius: '50%',
                background: '#00A8C4', display: 'inline-block', flexShrink: 0,
              }} />
              <span style={{
                fontFamily: 'var(--font-heading)', fontSize: '0.55rem', fontWeight: 700,
                letterSpacing: '0.24em', textTransform: 'uppercase', color: '#00A8C4',
              }}>
                Critical Minerals · Est. 1984
              </span>
            </span>
          </motion.div>

          {/* Headline — three distinct text treatments */}
          <h1 style={{ margin: 0, fontFamily: 'var(--font-heading)', fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.04em' }}>

            {/* Line 1: solid white — biggest impact */}
            <div style={{ overflow: 'hidden' }}>
              <motion.span variants={maskUp} style={{
                display: 'block',
                fontSize: 'clamp(3rem, 6vw, 7rem)',
                color: '#FFFFFF',
              }}>
                Precision
              </motion.span>
            </div>

            {/* Line 2: solid white */}
            <div style={{ overflow: 'hidden' }}>
              <motion.span variants={maskUp} style={{
                display: 'block',
                fontSize: 'clamp(3rem, 6vw, 7rem)',
                color: '#FFFFFF',
              }}>
                Extraction.
              </motion.span>
            </div>

            {/* Line 3: teal — colour punch */}
            <div style={{ overflow: 'hidden' }}>
              <motion.span variants={maskUp} style={{
                display: 'block',
                fontSize: 'clamp(1.8rem, 3.2vw, 3.8rem)',
                color: '#00A8C4',
                marginTop: '0.15em',
              }}>
                Global Scale.
              </motion.span>
            </div>

          </h1>

          {/* Teal rule — draws from left */}
          <motion.div variants={scaleIn} style={{
            height: '2px', width: '44px',
            background: 'linear-gradient(to right, #00A8C4, #79B82A)',
            margin: '2.2rem 0',
          }} />

          {/* Body copy */}
          <motion.p variants={fadeUp} style={{
            fontFamily: 'var(--font-body)', fontSize: '0.92rem',
            lineHeight: 1.9, color: 'rgba(255,255,255,0.48)',
            maxWidth: '400px', margin: '0 0 2.5rem',
          }}>
            From the Pilbara to West Africa — Prestige Mining extracts iron ore,
            copper, gold, and nickel at industrial scale.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', marginBottom: '2.5rem' }}>
            <Link href="/mining" className="btn-primary">
              Explore Mining <ArrowRight size={14} />
            </Link>
            <Link href="/about" className="btn-dark" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              Our Story <ArrowUpRight size={13} />
            </Link>
          </motion.div>

          {/* Commodity strip */}
          <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            {COMMODITIES.map((c, i) => (
              <span key={c} style={{
                fontFamily: 'var(--font-heading)', fontSize: '0.58rem', fontWeight: 600,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: i === 0 ? '#79B82A' : 'rgba(255,255,255,0.25)',
              }}>
                {c}{i < COMMODITIES.length - 1 &&
                  <span style={{ marginLeft: '10px', color: 'rgba(255,255,255,0.1)' }}>·</span>}
              </span>
            ))}
          </motion.div>

        </motion.div>

        {/* ══════════════ RIGHT — framed editorial photo ══════════════ */}
        <div
          className="hidden lg:flex"
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: '3rem 3.5rem 8rem 1rem',
            position: 'relative',
          }}
        >

          {/* Photo frame — the contained box, not full bleed */}
          <motion.div
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            animate={{ clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 1.1, delay: 0.55, ease: EXPO }}
            style={{
              position: 'relative',
              width: '100%',
              height: 'calc(100svh - 68px - 8rem)',
              outline: '1px solid rgba(0,168,196,0.22)',
              outlineOffset: '0px',
              overflow: 'hidden',
            }}
          >
            {/* Parallax image inside the frame */}
            <motion.div style={{ y: imgY, position: 'absolute', inset: '-12% 0' }}>
              <Image
                src={imgUrl}
                alt="Prestige Mining operations"
                fill
                priority
                sizes="44vw"
                className="object-cover"
              />
            </motion.div>

            {/* Bottom dark gradient to blend with stat card */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom, transparent 45%, rgba(6,14,26,0.75) 100%)',
              zIndex: 1,
            }} />

            {/* Teal bottom accent on photo frame */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 1.1, ease: EXPO }}
              style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: '3px', zIndex: 2,
                background: 'linear-gradient(to right, #00A8C4, #79B82A)',
                transformOrigin: 'left',
              }}
            />
          </motion.div>

          {/* ── Floating stat card — overlaps left panel boundary ── */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.35, ease: EXPO }}
            style={{
              position: 'absolute',
              bottom: '7.5rem',
              left: '-1.5rem',
              background: '#00A8C4',
              padding: '1.4rem 2rem',
              zIndex: 10,
              boxShadow: '0 24px 60px rgba(0,168,196,0.35)',
            }}
          >
            <div style={{
              fontFamily: 'var(--font-heading)', fontWeight: 800,
              fontSize: '2.4rem', lineHeight: 1, letterSpacing: '-0.04em',
              color: '#FFFFFF',
            }}>
              48 Mt
            </div>
            <div style={{
              fontFamily: 'var(--font-heading)', fontSize: '0.52rem', fontWeight: 700,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.72)', marginTop: '6px',
            }}>
              Annual Extraction
            </div>
          </motion.div>

          {/* ── Secondary floating card — top right of photo ── */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.5, ease: EXPO }}
            style={{
              position: 'absolute',
              top: '4.5rem',
              right: '4rem',
              background: 'rgba(6,14,26,0.88)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.09)',
              padding: '1rem 1.4rem',
              zIndex: 10,
            }}
          >
            <div style={{
              fontFamily: 'var(--font-heading)', fontWeight: 800,
              fontSize: '1.5rem', lineHeight: 1, letterSpacing: '-0.03em',
              color: '#FFFFFF',
            }}>
              22+
            </div>
            <div style={{
              fontFamily: 'var(--font-heading)', fontSize: '0.5rem', fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)', marginTop: '4px',
            }}>
              Active Sites
            </div>
          </motion.div>

        </div>

      </div>

      {/* ── Mobile background image ── */}
      <div className="lg:hidden" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image src={imgUrl} alt="" fill priority sizes="100vw"
          className="object-cover" style={{ opacity: 0.09 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(6,14,26,0.9)' }} />
      </div>

      {/* ── Stats bar ── */}
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9, ease: EXPO }}
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 5,
          display: 'flex',
          background: 'rgba(4,11,20,0.97)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {STATS.map((s, i) => (
          <div
            key={s.label}
            style={{
              flex: 1, padding: '1.15rem 1.4rem',
              borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              transition: 'background 0.25s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(0,168,196,0.07)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}
          >
            <div style={{
              fontFamily: 'var(--font-heading)', fontWeight: 800,
              fontSize: 'clamp(1rem, 1.8vw, 1.45rem)',
              lineHeight: 1, letterSpacing: '-0.02em', color: '#FFFFFF',
            }}>
              <Counter end={s.end} suffix={s.suffix} />
            </div>
            <div style={{
              fontFamily: 'var(--font-heading)', fontSize: '0.5rem', fontWeight: 600,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)', marginTop: '5px',
            }}>
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>

    </section>
  );
}
