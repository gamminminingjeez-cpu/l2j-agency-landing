"use client";

import { motion } from "framer-motion";
import { Database, Trophy, Shield, Wallet, Sparkles } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Conexión L2J Nativa",
    description: "Integración directa con tu base de datos MySQL/MariaDB. Rankings en tiempo real sin APIs intermedias.",
    color: "#C9A962",
    glowColor: "rgba(201, 169, 98, 0.3)",
  },
  {
    icon: Trophy,
    title: "Rankings Automáticos",
    description: "PvP, PK, Castillos, Raid Bosses y más. Todo se actualiza automáticamente desde tu servidor.",
    color: "#9B59B6",
    glowColor: "rgba(155, 89, 182, 0.3)",
  },
  {
    icon: Shield,
    title: "Panel de Usuario Seguro",
    description: "Sistema de login con encriptación, recuperación de cuentas y gestión de personajes integrada.",
    color: "#E74C3C",
    glowColor: "rgba(231, 76, 60, 0.3)",
  },
  {
    icon: Wallet,
    title: "Donaciones Automatizadas",
    description: "Pasarelas integradas: Crypto, PayPal, MercadoPago. Entrega automática de items en el juego.",
    color: "#27AE60",
    glowColor: "rgba(39, 174, 96, 0.3)",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-[#121212] to-[#0B0B0B]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C9A962]/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#9B59B6]/5 rounded-full blur-[128px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
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
            <span className="text-sm text-[#A0A0A0]">Tecnología de Élite</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Todo lo que tu servidor</span>
            <br />
            <span className="text-gold-gradient">necesita para brillar</span>
          </h2>

          <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto">
            Código optimizado, seguro y diseñado específicamente para la comunidad Lineage 2.
            Sin plugins genéricos, solo soluciones a medida.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div
                className="relative h-full p-8 rounded-2xl bg-[#121212]/50 border border-[#C9A962]/10 
                           hover:border-[#C9A962]/30 transition-all duration-500 overflow-hidden"
              >
                {/* Glow Effect */}
                <div
                  className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ background: `radial-gradient(circle at center, ${feature.glowColor}, transparent 70%)` }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)`,
                      border: `1px solid ${feature.color}30`,
                    }}
                  >
                    <feature.icon
                      className="w-7 h-7"
                      style={{ color: feature.color }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-gradient transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#A0A0A0] leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Line */}
                  <div
                    className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${feature.color}, transparent)` }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-[#666666] mb-4">
            ¿Necesitas una funcionalidad específica?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="enchant-hover rune-border px-8 py-3 rounded-xl font-semibold text-[#C9A962]"
          >
            Consultar Desarrollo a Medida
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
