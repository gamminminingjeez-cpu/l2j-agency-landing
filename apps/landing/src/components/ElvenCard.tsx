'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface ElvenCardProps {
  className?: string;
}

export default function ElvenCard({ className = '' }: ElvenCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    { icon: '⚔️', label: 'Sistema de combate épico' },
    { icon: '🏰', label: 'Castillos y territorios' },
    { icon: '👑', label: 'Nobleza y rangos' },
    { icon: '🌿', label: 'Naturaleza y magia' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className={`relative perspective-1000 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Card Container */}
      <motion.div
        animate={{
          rotateX: isHovered ? 2 : 0,
          rotateY: isHovered ? -2 : 0,
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative preserve-3d"
      >
        {/* Animated Vine Border */}
        <div className="elven-vine-border rounded-3xl">
          <div className="elven-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Inner glow effect */}
            <motion.div
              className="absolute inset-0 bg-elven-radial opacity-0"
              animate={{ opacity: isHovered ? 0.5 : 0 }}
              transition={{ duration: 0.5 }}
            />

            {/* Rune decorations on corners */}
            <RuneDecoration position="top-left" />
            <RuneDecoration position="top-right" />
            <RuneDecoration position="bottom-left" />
            <RuneDecoration position="bottom-right" />

            {/* Content */}
            <div className="relative z-10">
              {/* Crown Icon */}
              <motion.div
                className="w-20 h-20 mx-auto mb-6 relative"
                animate={{ y: isHovered ? -5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-elven-forest-800 to-elven-forest-900 border border-elven-emerald-600/30 flex items-center justify-center shadow-lg">
                  {/* Crown SVG */}
                  <svg
                    viewBox="0 0 24 24"
                    className="w-10 h-10 text-elven-gold-400"
                    fill="currentColor"
                  >
                    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                  </svg>
                </div>
                {/* Emerald gem in center */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-4 emerald-gem rounded-full" />
              </motion.div>

              {/* Title */}
              <motion.h2
                className="font-elven text-4xl md:text-5xl font-bold text-center mb-3"
                animate={{ scale: isHovered ? 1.02 : 1 }}
              >
                <span className="text-elven-gradient">Elven Theme</span>
              </motion.h2>

              {/* Subtitle */}
              <p className="font-mystical text-xl md:text-2xl text-elven-emerald-300 text-center mb-4 italic">
                Elegancia Épica
              </p>

              {/* Description */}
              <p className="text-elven-mist-300 text-center max-w-md mx-auto mb-8 leading-relaxed">
                Un reino de gracia ancestral, donde la magia fluye entre los árboles 
                y la elegancia élfica define cada rincón de tu servidor.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-elven-forest-900/50 border border-elven-emerald-700/30"
                  >
                    <span className="text-xl">{feature.icon}</span>
                    <span className="text-sm text-elven-mist-200">{feature.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-elven w-full"
              >
                Explorar Tema
              </motion.button>
            </div>

            {/* Draconic Bow decoration - right side */}
            <DraconicBow isHovered={isHovered} />
          </div>
        </div>

        {/* Card glow effect on hover */}
        <motion.div
          className="absolute -inset-4 rounded-3xl pointer-events-none"
          animate={{
            opacity: isHovered ? 0.3 : 0,
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ duration: 0.5 }}
          style={{
            background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.3) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
      </motion.div>
    </motion.div>
  );
}

// Rune decoration component
function RuneDecoration({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) {
  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4 rotate-90',
    'bottom-left': 'bottom-4 left-4 -rotate-90',
    'bottom-right': 'bottom-4 right-4 rotate-180',
  };

  return (
    <div className={`absolute ${positionClasses[position]} w-8 h-8 pointer-events-none`}>
      <svg viewBox="0 0 32 32" className="w-full h-full text-elven-emerald-500/50">
        <path
          d="M4 4 L12 4 L12 8 L8 8 L8 12 L4 12 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="rune-animated"
        />
        <circle cx="6" cy="6" r="1.5" fill="currentColor" className="rune-animated" style={{ animationDelay: '0.5s' }} />
      </svg>
    </div>
  );
}

// Draconic Bow component
function DraconicBow({ isHovered }: { isHovered: boolean }) {
  return (
    <motion.div
      className="absolute -right-8 top-1/2 -translate-y-1/2 hidden lg:block"
      animate={{
        x: isHovered ? 5 : 0,
        rotateZ: isHovered ? 3 : 0,
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-32 h-64">
        {/* Bow glow effect */}
        <motion.div
          className="absolute inset-0"
          animate={{
            opacity: isHovered ? 0.6 : 0.3,
          }}
          style={{
            background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.4) 0%, transparent 70%)',
            filter: 'blur(10px)',
          }}
        />
        
        {/* Bow shape */}
        <svg
          viewBox="0 0 60 200"
          className="relative w-full h-full"
          style={{ filter: 'drop-shadow(0 0 10px rgba(16, 185, 129, 0.5))' }}
        >
          {/* Bow body */}
          <path
            d="M30 10 Q5 100 30 190"
            fill="none"
            stroke="url(#bowGradient)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Bow string */}
          <path
            d="M30 10 Q50 100 30 190"
            fill="none"
            stroke="rgba(251, 191, 36, 0.6)"
            strokeWidth="1"
            strokeDasharray="4 2"
          />
          {/* Decorative elements */}
          <circle cx="30" cy="30" r="3" fill="#fbbf24" />
          <circle cx="30" cy="100" r="4" fill="#10b981" />
          <circle cx="30" cy="170" r="3" fill="#fbbf24" />
          
          <defs>
            <linearGradient id="bowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#059669" />
              <stop offset="100%" stopColor="#065f46" />
            </linearGradient>
          </defs>
        </svg>

        {/* Arrow quiver */}
        <motion.div
          className="absolute -left-4 bottom-10 w-8 h-16 rounded-lg"
          style={{
            background: 'linear-gradient(135deg, #166534 0%, #14532d 100%)',
            boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.1), 0 4px 8px rgba(0,0,0,0.3)',
          }}
        >
          {/* Arrow tips */}
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute -top-3 left-1/2 -translate-x-1/2"
              style={{ marginLeft: `${(i - 1) * 4}px` }}
            >
              <div className="w-1 h-4 bg-elven-gold-400 rounded-t-full" />
            </div>
          ))}
        </motion.div>

        {/* Magic pulse around bow */}
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 60%)',
          }}
        />
      </div>
    </motion.div>
  );
}
