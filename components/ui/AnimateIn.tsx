'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';
type Variant   = 'fade' | 'clip' | 'scale' | 'blur';

interface AnimateInProps {
  children:   React.ReactNode;
  className?: string;
  delay?:     number;
  direction?: Direction;
  duration?:  number;
  variant?:   Variant;
}

const EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function AnimateIn({
  children,
  className,
  delay    = 0,
  direction = 'up',
  duration  = 0.65,
  variant   = 'fade',
}: AnimateInProps) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-72px' });

  const offsets: Record<Direction, { x: number; y: number }> = {
    up:    { y: 32,  x: 0   },
    down:  { y: -32, x: 0   },
    left:  { y: 0,   x: 32  },
    right: { y: 0,   x: -32 },
    none:  { y: 0,   x: 0   },
  };

  const { x, y } = offsets[direction];

  // ── clip variant — slides up from behind a mask
  if (variant === 'clip') {
    return (
      <div ref={ref} className={className} style={{ overflow: 'hidden' }}>
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={inView ? { y: '0%', opacity: 1 } : {}}
          transition={{ duration: duration + 0.1, delay, ease: EXPO }}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  // ── scale variant — zoom + fade in
  if (variant === 'scale') {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial={{ opacity: 0, scale: 0.93 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration, delay, ease: EXPO }}
      >
        {children}
      </motion.div>
    );
  }

  // ── blur variant — blurs in while fading
  if (variant === 'blur') {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial={{ opacity: 0, filter: 'blur(8px)', y }}
        animate={inView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
        transition={{ duration, delay, ease: EXPO }}
      >
        {children}
      </motion.div>
    );
  }

  // ── default fade+slide
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration, delay, ease: EXPO }}
    >
      {children}
    </motion.div>
  );
}
