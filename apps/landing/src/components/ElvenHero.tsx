'use client';

import { motion } from 'framer-motion';
import ElvenCard from './ElvenCard';
import MagicParticles from './MagicParticles';

export default function ElvenHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-elven-mist-950 via-elven-forest-950/80 to-elven-mist-950" />
      
      {/* Animated forest background layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Deep forest layer */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 30% 70%, rgba(34, 197, 94, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 30%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
            `,
          }}
        />
        
        {/* Light rays */}
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[800px] origin-top"
          animate={{
            opacity: [0.1, 0.2, 0.1],
            rotate: [15, 18, 15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            background: 'linear-gradient(180deg, rgba(251, 191, 36, 0.15) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
        />
        
        <motion.div
          className="absolute top-0 right-1/3 w-[400px] h-[600px] origin-top"
          animate={{
            opacity: [0.05, 0.15, 0.05],
            rotate: [-10, -5, -10],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            background: 'linear-gradient(180deg, rgba(251, 191, 36, 0.1) 0%, transparent 60%)',
            filter: 'blur(25px)',
          }}
        />

        {/* Floating mist */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-64"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            background: 'linear-gradient(to top, rgba(16, 185, 129, 0.1), transparent)',
          }}
        />
      </div>

      {/* Magic particles */}
      <MagicParticles count={60} color="mixed" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="font-elven text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-gold-gradient text-shadow-gold">Elige tu estilo</span>
            <br />
            <span className="text-elven-gradient text-shadow-elven">de reino</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-mystical text-xl md:text-2xl text-elven-mist-300 italic max-w-2xl mx-auto"
        >
          Personaliza tu servidor Lineage 2 con temas únicos que definen 
          la esencia de tu comunidad
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 mb-12 mx-auto w-64 h-px bg-gradient-to-r from-transparent via-elven-emerald-500 to-transparent"
        >
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 rotate-45 bg-elven-emerald-500"
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>
      </div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full max-w-2xl"
      >
        <ElvenCard />
      </motion.div>

      {/* Bottom decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-elven-emerald-400/60"
        >
          <span className="text-xs font-elven tracking-widest uppercase">Descubre más</span>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Corner decorations */}
      <CornerDecoration position="top-left" />
      <CornerDecoration position="top-right" />
      <CornerDecoration position="bottom-left" />
      <CornerDecoration position="bottom-right" />
    </section>
  );
}

// Corner decoration component
function CornerDecoration({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) {
  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4 rotate-90',
    'bottom-left': 'bottom-4 left-4 -rotate-90',
    'bottom-right': 'bottom-4 right-4 rotate-180',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ delay: 1.5 }}
      className={`absolute ${positionClasses[position]} w-24 h-24 pointer-events-none hidden md:block`}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full text-elven-emerald-500">
        <path
          d="M0 0 L40 0 L40 5 L5 5 L5 40 L0 40 Z"
          fill="currentColor"
          opacity="0.3"
        />
        <path
          d="M10 10 L30 10 L30 12 L12 12 L12 30 L10 30 Z"
          fill="currentColor"
          opacity="0.5"
        />
        <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.8" />
      </svg>
    </motion.div>
  );
}
