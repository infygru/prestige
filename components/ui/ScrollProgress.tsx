'use client';

import { useScroll, useSpring, motion } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(to right, #007A96, #00A8C4, #79B82A)',
        transformOrigin: 'left',
        scaleX,
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    />
  );
}
