'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
  const themes = [
    {
      id: 'elven',
      name: 'Elven Theme',
      subtitle: 'Elegancia Épica',
      description: 'Un reino de gracia ancestral, donde la magia fluye entre los árboles',
      gradient: 'from-elven-forest-700 to-elven-emerald-600',
      borderHover: 'hover:border-elven-emerald-500/50',
      shadowHover: 'hover:shadow-elven-glow',
      icon: '🌿',
      href: '/elven-theme',
    },
    {
      id: 'chaos',
      name: 'Chaos Theme',
      subtitle: 'Poder Oscuro',
      description: 'Donde las llamas del caos forjan guerreros legendarios',
      gradient: 'from-chaos-ash to-chaos-blood',
      borderHover: 'hover:border-chaos-ember/50',
      shadowHover: 'hover:shadow-red-500/20',
      icon: '🔥',
      href: '/chaos-theme',
      disabled: true,
    },
    {
      id: 'imperial',
      name: 'Imperial Theme',
      subtitle: 'Majestuosidad Dorada',
      description: 'El esplendor de un imperio que domina los cielos',
      gradient: 'from-imperial-royal to-imperial-gold',
      borderHover: 'hover:border-imperial-gold/50',
      shadowHover: 'hover:shadow-yellow-500/20',
      icon: '👑',
      href: '/imperial-theme',
      disabled: true,
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-elven-mist-950 via-elven-forest-950/30 to-elven-mist-950" />
      
      {/* Animated particles */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-elven-emerald-500/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-elven font-black tracking-tight mb-2">
          <span className="text-gold-gradient">L2J</span>
          <span className="text-white"> Themes</span>
        </h1>
        <p className="text-elven-mist-400 mt-3 font-mystical text-lg">
          Temas premium para servidores Lineage 2
        </p>
        <div className="mt-4 w-32 h-px mx-auto bg-gradient-to-r from-transparent via-elven-emerald-500 to-transparent" />
      </motion.div>

      {/* Theme Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl relative z-10"
      >
        {themes.map((theme, index) => (
          <motion.div
            key={theme.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            {theme.disabled ? (
              <div
                className="group relative overflow-hidden rounded-2xl border border-elven-mist-800 p-6 opacity-50 cursor-not-allowed"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 text-3xl mx-auto bg-elven-mist-800/50">
                    <span>{theme.icon}</span>
                  </div>
                  <h2 className="text-xl font-elven font-bold text-elven-mist-400 mb-1">
                    {theme.name}
                  </h2>
                  <p className="text-sm text-elven-mist-500 mb-3">{theme.subtitle}</p>
                  <span className="text-xs text-elven-mist-600 uppercase tracking-wider">
                    Próximamente
                  </span>
                </div>
              </div>
            ) : (
              <Link
                href={theme.href}
                className={`group relative overflow-hidden rounded-2xl border border-elven-mist-800 p-6 transition-all duration-500 ${theme.borderHover} hover:shadow-2xl ${theme.shadowHover} block`}
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 text-center">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 text-3xl mx-auto bg-gradient-to-br ${theme.gradient}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <span>{theme.icon}</span>
                  </motion.div>
                  <h2 className="text-xl font-elven font-bold text-white mb-1 group-hover:text-elven-gradient transition-all">
                    {theme.name}
                  </h2>
                  <p className="text-sm text-elven-emerald-400 mb-3 font-mystical italic">
                    {theme.subtitle}
                  </p>
                  <p className="text-sm text-elven-mist-400 leading-relaxed mb-4">
                    {theme.description}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-elven-emerald-400 font-semibold text-sm group-hover:gap-3 transition-all">
                    Explorar
                    <motion.span
                      className="text-lg"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </Link>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-12 text-elven-mist-600 text-xs relative z-10"
      >
        L2J Server Themes © {new Date().getFullYear()}
      </motion.p>
    </main>
  );
}
