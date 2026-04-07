'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Eye, Sparkles, Crown, Skull, Castle } from 'lucide-react';
import { useState } from 'react';

const themes = [
  {
    id: 'elven',
    name: 'Elven Theme',
    tagline: 'Elegancia Épica',
    description: 'Diseño inspirado en los bosques élficos de Elmore. Colores verdes esmeralda, dorados brillantes y una estética noble que transmite pureza y poder mágico.',
    icon: Crown,
    color: '#27AE60',
    secondaryColor: '#C9A962',
    features: ['Rankings estilo tablón élfico', 'Panel de usuario forestal', 'Sistema de donaciones doradas'],
    preview: 'bg-gradient-to-br from-[#1A3A2A] via-[#0F2918] to-[#1A3A2A]',
    popular: false,
  },
  {
    id: 'dark-omen',
    name: 'Dark Omen Theme',
    tagline: 'Poder Oscuro',
    description: 'Para servidores hardcore y de alto rate. Estética oscura con acentos rojos sangre, diseño agresivo que impone respeto a los jugadores desde el primer click.',
    icon: Skull,
    color: '#E74C3C',
    secondaryColor: '#8B0000',
    features: ['Rankings estilo arena PvP', 'Login con efectos de fuego', 'Stats de raid bosses en tiempo real'],
    preview: 'bg-gradient-to-br from-[#2A0A0A] via-[#1A0505] to-[#2A0A0A]',
    popular: true,
  },
  {
    id: 'imperial',
    name: 'Imperial Theme',
    tagline: 'Autoridad Real',
    description: 'El clásico estilo del Castillo de Aden. Dorados imperiales, púrpuras reales y un diseño que grita poder y tradición. Perfecto para servidores mid-rate.',
    icon: Castle,
    color: '#C9A962',
    secondaryColor: '#9B59B6',
    features: ['Sistema de castillos interactivo', 'Panel de clan estilo gremio', 'Tienda con monedas doradas'],
    preview: 'bg-gradient-to-br from-[#2A2520] via-[#1A1714] to-[#2A2520]',
    popular: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' as const },
  },
};

export function ShowcaseSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="showcase" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[#0B0B0B]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C9A962]/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#C9A962]" />
            <span className="text-sm text-[#A0A0A0]">Catálogo de Plantillas</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Elige tu</span>
            <span className="text-gold-gradient"> estilo de reino</span>
          </h2>

          <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto">
            Tres diseños premium, cada uno con su propia identidad.
            Todos incluyen el mismo código potente bajo el capó.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {themes.map((theme) => (
            <motion.div
              key={theme.id}
              variants={cardVariants}
              onMouseEnter={() => setHoveredCard(theme.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              {theme.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="px-4 py-1 rounded-full bg-gradient-to-r from-[#E74C3C] to-[#C0392B] text-white text-xs font-bold shadow-lg shadow-red-500/30">
                    MÁS POPULAR
                  </div>
                </div>
              )}

              <div className="relative h-full rounded-2xl overflow-hidden border border-[#C9A962]/10 hover:border-[#C9A962]/30 transition-all duration-500"
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${theme.color}20, transparent 70%)`,
                  }}
                  animate={{ opacity: hoveredCard === theme.id ? 1 : 0 }}
                />

                <div className={`relative h-48 ${theme.preview} overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, ${theme.color} 1px, transparent 0)`,
                      backgroundSize: '20px 20px',
                    }}
                  />

                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ scale: hoveredCard === theme.id ? 1.1 : 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${theme.color}40, ${theme.color}20)`,
                        border: `2px solid ${theme.color}60`,
                        boxShadow: `0 0 40px ${theme.color}30`,
                      }}
                    >
                      <theme.icon className="w-10 h-10" style={{ color: theme.color }} />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: hoveredCard === theme.id ? 1 : 0, y: hoveredCard === theme.id ? 0 : 20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2"
                  >
                    <Link 
                      href={`/demo/${theme.id}`}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/20 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      Ver Demo
                    </Link>
                  </motion.div>
                </div>

                <div className="p-6 bg-[#121212]/80 backdrop-blur-sm"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">{theme.name}</h3>
                    <p className="text-sm font-medium" style={{ color: theme.color }}>
                      {theme.tagline}
                    </p>
                  </div>

                  <p className="text-[#A0A0A0] text-sm mb-6 leading-relaxed">
                    {theme.description}
                  </p>

                  <ul className="space-y-2 mb-6"
                  >
                    {theme.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-[#A0A0A0]"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: theme.color }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/demo/${theme.id}`}
                    className="w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-center"
                    style={{
                      background: `linear-gradient(135deg, ${theme.color}20, ${theme.color}10)`,
                      border: `1px solid ${theme.color}40`,
                      color: theme.color,
                    }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver Demo en Vivo
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl glass-panel"
          >
            <div className="text-left"
            >
              <p className="text-white font-semibold mb-1">¿Ninguno se ajusta a tu visión?</p>
              <p className="text-[#A0A0A0] text-sm">Diseñamos themes completamente personalizados desde cero.</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#C9A962] to-[#8B7355] text-[#0B0B0B] font-semibold whitespace-nowrap"
            >
              Crear Custom Theme
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
