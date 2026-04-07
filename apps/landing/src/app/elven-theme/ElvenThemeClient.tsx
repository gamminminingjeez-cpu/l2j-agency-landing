'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import ElvenHero from '@/components/ElvenHero';
import MagicParticles from '@/components/MagicParticles';

export default function ElvenThemeClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-x-hidden">
      {/* Noise overlay for texture */}
      <div className="noise-overlay" />

      {/* Fixed background layers */}
      <motion.div
        style={{ y: backgroundY }}
        className="fixed inset-0 pointer-events-none"
      >
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-elven-mist-950 via-elven-forest-950 to-elven-mist-950" />
        
        {/* Forest atmosphere */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 20% 60%, rgba(34, 197, 94, 0.12) 0%, transparent 40%),
              radial-gradient(ellipse at 80% 40%, rgba(16, 185, 129, 0.08) 0%, transparent 35%),
              radial-gradient(ellipse at 50% 80%, rgba(5, 46, 22, 0.6) 0%, transparent 50%)
            `,
          }}
        />

        {/* Moving light beams */}
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[1000px] origin-top"
          animate={{
            opacity: [0.08, 0.15, 0.08],
            rotate: [12, 15, 12],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            background: 'linear-gradient(180deg, rgba(251, 191, 36, 0.12) 0%, transparent 60%)',
            filter: 'blur(40px)',
          }}
        />
      </motion.div>

      {/* Global particles */}
      <MagicParticles count={80} color="mixed" className="fixed inset-0 z-0" />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <motion.div style={{ opacity: heroOpacity }}>
        <ElvenHero />
      </motion.div>

      {/* Features Section */}
      <FeaturesSection />

      {/* Showcase Section */}
      <ShowcaseSection />

      {/* Call to Action Section */}
      <CTASection />

      {/* Footer */}
      <ElvenFooter />
    </div>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: '⚔️',
      title: 'Sistema de Combate',
      description: 'Combate táctico con habilidades únicas y efectos visuales épicos',
    },
    {
      icon: '🏰',
      title: 'Castillos y Territorios',
      description: 'Conquista y defensa de territorios con siege warfare',
    },
    {
      icon: '👑',
      title: 'Sistema de Nobleza',
      description: 'Rangos y títulos que definen tu estatus en el reino',
    },
    {
      icon: '🌿',
      title: 'Magia Natural',
      description: 'Hechizos ancestrales conectados con la naturaleza',
    },
    {
      icon: '💎',
      title: 'Equipamiento Épico',
      description: 'Armas y armaduras con diseños únicos élficos',
    },
    {
      icon: '🎯',
      title: 'Eventos Temáticos',
      description: 'Eventos especiales con recompensas exclusivas',
    },
  ];

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-elven text-3xl md:text-5xl font-bold mb-4">
            <span className="text-elven-gradient">Características</span>
            <span className="text-white"> del Tema</span>
          </h2>
          <p className="font-mystical text-lg text-elven-mist-300 max-w-2xl mx-auto">
            Cada detalle ha sido diseñado para sumergirte en la experiencia élfica
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 h-full transition-all duration-300 hover:border-elven-emerald-500/30 hover:shadow-elven-glow">
                <div className="icon-elven w-12 h-12 mb-4 text-2xl">
                  {feature.icon}
                </div>
                <h3 className="font-elven text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-elven-mist-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Showcase Section
function ShowcaseSection() {
  const items = [
    { name: 'Draconic Bow', type: 'Arma Legendaria', rarity: 'Hero' },
    { name: 'Arcana Robe', type: 'Armadura Mágica', rarity: 'A-Grade' },
    { name: 'Sword of Miracles', type: 'Espada Sagrada', rarity: 'S-Grade' },
  ];

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-elven text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gold-gradient">Objetos</span>
            <span className="text-white"> Icónicos</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 text-center transition-all duration-300 hover:border-elven-gold-500/30 hover:shadow-lg hover:shadow-elven-gold-500/10">
                <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-gradient-to-br from-elven-forest-800 to-elven-forest-900 flex items-center justify-center border border-elven-emerald-600/30">
                  <span className="text-4xl">⚔️</span>
                </div>
                <h3 className="font-elven text-lg font-semibold text-elven-gold-400 mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-elven-mist-400">{item.type}</p>
                <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold bg-elven-emerald-900/50 text-elven-emerald-400 border border-elven-emerald-700/30">
                  {item.rarity}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="elven-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="elven-card-border" />
            
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10"
            >
              <h2 className="font-elven text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Listo para tu Reino?
              </h2>
              <p className="font-mystical text-lg text-elven-mist-300 mb-8 max-w-xl mx-auto">
                Transforma tu servidor Lineage 2 en una experiencia inolvidable 
                con el tema Elven
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-elven"
                >
                  Solicitar Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-lg font-elven font-semibold text-sm uppercase tracking-wider border border-elven-emerald-500/30 text-elven-emerald-400 hover:bg-elven-emerald-900/30 transition-all duration-300"
                >
                  Ver Precios
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function ElvenFooter() {
  return (
    <footer className="relative py-12 px-4 border-t border-elven-forest-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-elven-emerald-500 to-elven-forest-700 flex items-center justify-center">
              <span className="text-lg font-elven font-bold text-white">L</span>
            </div>
            <span className="font-elven text-lg text-white">L2J Server Themes</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-elven-mist-400">
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Contacto</a>
          </div>
          
          <p className="text-sm text-elven-mist-500">
            © 2024 L2J Server Themes. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
