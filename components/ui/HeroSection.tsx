'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

// ─── Data ──────────────────────────────────────────────────────────────────────

const STATS = [
  { end: 22, suffix: '+',   label: 'Active Mine Sites' },
  { end: 48, suffix: ' Mt', label: 'Annual Extraction'  },
  { end: 40, suffix: '+',   label: 'Years Operating'    },
  { end: 4,  suffix: '',    label: 'Countries'           },
];

const HEADLINE = ['Precision', 'Extraction.'];

// ─── Easing ────────────────────────────────────────────────────────────────────

const EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

// ─── Variants ─────────────────────────────────────────────────────────────────

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EXPO } },
};

const lineUp = {
  hidden:  { y: '108%' },
  visible: { y: '0%',  transition: { duration: 0.88, ease: EXPO } },
};

const drawLine = {
  hidden:  { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.65, ease: EXPO } },
};

// ─── Stat counter ──────────────────────────────────────────────────────────────

function StatCounter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const delay = setTimeout(() => {
      let frame = 0;
      const total = 55;
      const tick = () => {
        frame++;
        const eased = 1 - Math.pow(1 - frame / total, 3);
        setCount(Math.round(end * eased));
        if (frame < total) requestAnimationFrame(tick);
        else setCount(end);
      };
      requestAnimationFrame(tick);
    }, 700);
    return () => clearTimeout(delay);
  }, [end]);

  return <>{count}{suffix}</>;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function HeroSection({ imgUrl }: { imgUrl: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 700], ['0%', '14%']);

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: 'calc(100svh - 68px)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        background: '#071524',
      }}
    >
      {/* ── Row: left text panel + right image panel ── */}
      <div style={{ display: 'flex', flex: 1 }}>

        {/* LEFT PANEL */}
        <motion.div
          className="hero-left-panel"
          variants={container}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: 'clamp(3rem,5vw,5rem) clamp(1.5rem,5vw,5rem)',
            paddingBottom: 'calc(clamp(3rem,5vw,5rem) + 5.5rem)',
            position: 'relative',
            zIndex: 1,
            background: '#071524',
            width: '100%',
          }}
        >
          <div style={{ maxWidth: '540px', width: '100%' }}>

            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2.5rem' }}
            >
              <motion.span
                variants={drawLine}
                style={{
                  display: 'inline-block', width: '32px', height: '2px',
                  background: '#00A8C4', flexShrink: 0, transformOrigin: 'left',
                }}
              />
              <span style={{
                fontFamily: 'var(--font-heading)', fontSize: '0.58rem', fontWeight: 700,
                letterSpacing: '0.28em', textTransform: 'uppercase', color: '#00A8C4',
              }}>
                Critical Minerals Extraction
              </span>
            </motion.div>

            {/* Headline — mask reveal per line */}
            <h1 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 800,
              fontSize: 'clamp(2.6rem, 4.5vw, 5rem)',
              lineHeight: 1.05, letterSpacing: '-0.03em',
              color: '#FFFFFF', margin: 0,
            }}>
              {HEADLINE.map((line) => (
                <div key={line} style={{ overflow: 'hidden' }}>
                  <motion.span style={{ display: 'block' }} variants={lineUp}>
                    {line}
                  </motion.span>
                </div>
              ))}
              {/* Ghost line */}
              <div style={{ overflow: 'hidden' }}>
                <motion.span
                  style={{ display: 'block', color: 'rgba(255,255,255,0.22)' }}
                  variants={lineUp}
                >
                  Global Scale.
                </motion.span>
              </div>
            </h1>

            {/* Teal rule — draws from left */}
            <motion.div
              variants={drawLine}
              style={{
                height: '2px', background: '#00A8C4',
                margin: '2rem 0', width: '40px',
                transformOrigin: 'left',
              }}
            />

            {/* Body */}
            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: 'var(--font-body)', fontSize: '0.95rem',
                lineHeight: 1.85, color: 'rgba(255,255,255,0.5)',
                margin: '0 0 2.5rem', maxWidth: '440px',
              }}
            >
              From the Pilbara to West Africa — Prestige Mining extracts iron ore, copper, gold,
              and nickel at industrial scale, backed by 40 years of operational discipline.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}
            >
              <Link href="/mining" className="btn-primary">
                Explore Mining <ArrowRight size={14} />
              </Link>
              <Link
                href="/about"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  fontFamily: 'var(--font-heading)', fontSize: '0.7rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.45)',
                  borderBottom: '1px solid rgba(255,255,255,0.18)', paddingBottom: '2px',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = '#FFFFFF';
                  el.style.borderBottomColor = 'rgba(255,255,255,0.5)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = 'rgba(255,255,255,0.45)';
                  el.style.borderBottomColor = 'rgba(255,255,255,0.18)';
                }}
              >
                Our Story
              </Link>
            </motion.div>

          </div>
        </motion.div>

        {/* RIGHT PANEL — image with parallax (desktop only) */}
        <div className="hidden lg:block" style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          <motion.div
            style={{ y: imageY, position: 'absolute', inset: '-15% 0 -15% 0' }}
          >
            <Image
              src={imgUrl}
              alt="Prestige Mining operations"
              fill
              priority
              sizes="46vw"
              className="object-cover"
            />
          </motion.div>

          {/* Left-to-right feather into navy */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 1,
            background: 'linear-gradient(to right, #071524 0%, rgba(7,21,36,0.35) 22%, transparent 55%)',
          }} />

          {/* Bottom teal accent line — draws from left on load */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.3, delay: 0.9, ease: EXPO }}
            style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', zIndex: 2,
              background: 'linear-gradient(to right, #00A8C4, #79B82A)',
              transformOrigin: 'left',
            }}
          />
        </div>

        {/* MOBILE — faint background image */}
        <div className="lg:hidden" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src={imgUrl} alt="" fill priority sizes="100vw"
            className="object-cover" style={{ opacity: 0.1 }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(7,21,36,0.88)' }} />
        </div>

      </div>

      {/* ── STATS BAR — slides up on load ── */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.85, ease: EXPO }}
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2,
          display: 'flex',
          background: 'rgba(4,13,24,0.96)',
          backdropFilter: 'blur(16px)',
          borderTop: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        {STATS.map((s, i) => (
          <div
            key={s.label}
            style={{
              flex: 1,
              padding: '1.2rem 1.5rem',
              borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              transition: 'background 0.2s',
              cursor: 'default',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(0,168,196,0.05)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}
          >
            <div style={{
              fontFamily: 'var(--font-heading)', fontWeight: 800,
              fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)',
              lineHeight: 1, letterSpacing: '-0.02em', color: '#FFFFFF',
            }}>
              <StatCounter end={s.end} suffix={s.suffix} />
            </div>
            <div style={{
              fontFamily: 'var(--font-heading)', fontSize: '0.52rem', fontWeight: 600,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.32)', marginTop: '5px',
            }}>
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>

    </section>
  );
}
