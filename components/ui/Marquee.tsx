'use client';

interface MarqueeProps {
  items: string[];
  speed?: number; // seconds for one full cycle
}

export default function Marquee({ items, speed = 28 }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
      <div
        className="flex gap-8 whitespace-nowrap"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
          width: 'max-content',
        }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-8 shrink-0">
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.68rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.5)',
            }}>
              {item}
            </span>
            <span style={{ color: '#00A8C4', fontSize: '0.45rem' }}>◆</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
