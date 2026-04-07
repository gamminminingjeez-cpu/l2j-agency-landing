'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  type: 'sparkle' | 'dust' | 'firefly';
}

interface MagicParticlesProps {
  count?: number;
  color?: 'emerald' | 'gold' | 'mixed';
  className?: string;
}

export default function MagicParticles({ 
  count = 50, 
  color = 'emerald',
  className = '' 
}: MagicParticlesProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particles = useMemo<Particle[]>(() => {
    if (!mounted) return [];
    
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 10 + 5,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.3,
      type: ['sparkle', 'dust', 'firefly'][Math.floor(Math.random() * 3)] as Particle['type'],
    }));
  }, [count, mounted]);

  if (!mounted) return null;

  const colorClasses = {
    emerald: {
      primary: 'bg-elven-emerald-400',
      glow: 'shadow-elven-emerald-500/50',
    },
    gold: {
      primary: 'bg-elven-gold-400',
      glow: 'shadow-elven-gold-500/50',
    },
    mixed: {
      primary: Math.random() > 0.5 ? 'bg-elven-emerald-400' : 'bg-elven-gold-400',
      glow: Math.random() > 0.5 ? 'shadow-elven-emerald-500/50' : 'shadow-elven-gold-500/50',
    },
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => {
        const particleColor = color === 'mixed' 
          ? (particle.id % 2 === 0 ? colorClasses.emerald : colorClasses.gold)
          : colorClasses[color];

        return (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full ${particleColor.primary}`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, particle.opacity, 0],
              scale: [0.5, 1, 0.5],
              y: [0, -30, -60],
              x: [0, Math.sin(particle.id) * 20, Math.sin(particle.id) * 40],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        );
      })}

      {/* Firefly effect particles */}
      {particles
        .filter((p) => p.type === 'firefly')
        .map((particle) => (
          <motion.div
            key={`firefly-${particle.id}`}
            className="absolute w-2 h-2 rounded-full bg-elven-gold-300"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              boxShadow: '0 0 10px 2px rgba(251, 191, 36, 0.5)',
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
    </div>
  );
}
