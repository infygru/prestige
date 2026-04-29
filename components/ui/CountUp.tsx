'use client';

import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

interface CountUpProps {
  value: string;
  unit?: string;
  className?: string;
  unitClassName?: string;
}

export default function CountUp({ value, unit, className, unitClassName }: CountUpProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [display, setDisplay] = useState('0');

  const numeric = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix  = value.replace(/[0-9.]/g, '');

  useEffect(() => {
    if (!inView) return;
    if (isNaN(numeric)) { setDisplay(value); return; }

    const duration = 1800;
    const steps    = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numeric * eased;

      if (Number.isInteger(numeric)) {
        setDisplay(Math.round(current).toLocaleString() + suffix);
      } else {
        setDisplay(current.toFixed(1) + suffix);
      }

      if (step >= steps) {
        clearInterval(timer);
        setDisplay(value);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [inView, numeric, suffix, value]);

  return (
    <span ref={ref}>
      <span className={className}>{display}</span>
      {unit && <span className={unitClassName}>{unit}</span>}
    </span>
  );
}
