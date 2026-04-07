'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxBackgroundProps {
  children?: React.ReactNode;
}

export default function ParallaxBackground({ children }: ParallaxBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax layers with different speeds
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);
  const y4 = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  
  const opacity1 = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.7], [0.8, 0.2]);

  return (
    <div ref={containerRef} className="relative min-h-[200vh] overflow-hidden">
      {/* Base gradient background */}
      <div className="fixed inset-0 bg-gradient-to-b from-elven-mist-950 via-elven-forest-950 to-elven-mist-950" />

      {/* Layer 1: Deep forest background (slowest) */}
      <motion.div
        style={{ y: y1, opacity: opacity1 }}
        className="fixed inset-0 z-0"
      >
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 20% 80%, rgba(34, 197, 94, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, rgba(5, 46, 22, 0.8) 0%, transparent 70%)
            `,
          }}
        />
      </motion.div>

      {/* Layer 2: Mist/fog effect */}
      <motion.div
        style={{ y: y2, opacity: opacity2 }}
        className="fixed inset-0 z-10"
      >
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(180deg, 
                transparent 0%, 
                rgba(16, 185, 129, 0.05) 30%, 
                rgba(16, 185, 129, 0.1) 50%, 
                rgba(16, 185, 129, 0.05) 70%, 
                transparent 100%
              )
            `,
          }}
        />
        {/* Moving mist clouds */}
        <motion.div
          className="absolute w-full h-64 top-1/4"
          animate={{
            x: ['-10%', '10%', '-10%'],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.1), transparent)',
            filter: 'blur(40px)',
          }}
        />
      </motion.div>

      {/* Layer 3: Light rays */}
      <motion.div
        style={{ y: y3 }}
        className="fixed inset-0 z-20 pointer-events-none"
      >
        {/* Golden light rays from top */}
        <div 
          className="absolute top-0 left-1/4 w-96 h-screen opacity-20"
          style={{
            background: 'linear-gradient(180deg, rgba(251, 191, 36, 0.3) 0%, transparent 60%)',
            transform: 'rotate(15deg)',
            filter: 'blur(30px)',
          }}
        />
        <div 
          className="absolute top-0 right-1/3 w-64 h-screen opacity-15"
          style={{
            background: 'linear-gradient(180deg, rgba(251, 191, 36, 0.2) 0%, transparent 50%)',
            transform: 'rotate(-10deg)',
            filter: 'blur(25px)',
          }}
        />
      </motion.div>

      {/* Layer 4: Floating elements (fastest) */}
      <motion.div
        style={{ y: y4 }}
        className="fixed inset-0 z-30 pointer-events-none"
      >
        {/* Floating leaves/petals */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-elven-emerald-500/30"
            style={{
              left: `${15 + i * 10}%`,
              top: `${10 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, 100, 200],
              x: [0, Math.sin(i) * 50, Math.sin(i) * 100],
              rotate: [0, 360, 720],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 15 + i * 2,
              delay: i * 0.5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </motion.div>

      {/* Content container */}
      <div className="relative z-40">
        {children}
      </div>
    </div>
  );
}
