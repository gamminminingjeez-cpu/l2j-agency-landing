"use client";

import { motion } from "framer-motion";
import { ChevronRight, Sparkles, Shield, Zap } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

function AnimatedStars() {
  return (
    <Stars
      radius={100}
      depth={50}
      count={5000}
      factor={4}
      saturation={0}
      fade
      speed={1}
    />
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Background 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <AnimatedStars />
        </Canvas>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-transparent to-[#0B0B0B] z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#C9A962]/10 via-transparent to-[#9B59B6]/10 z-[1]" />

      {/* Video Background Placeholder */}
      <div className="absolute inset-0 z-[0] opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-[#1A1A1A] via-[#0B0B0B] to-[#121212]" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-[2] overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#C9A962] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8"
        >
          <Sparkles className="w-4 h-4 text-[#C9A962]" />
          <span className="text-sm text-[#A0A0A0]">Especialistas en Servidores L2J</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="block text-white mb-2">Lleva tu servidor L2J</span>
          <span className="block text-gold-gradient">
            a la próxima Crónica
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-[#A0A0A0] max-w-2xl mx-auto mb-10"
        >
          Webs épicas, seguras y automatizadas para administradores exigentes.
          <br className="hidden sm:block" />
          Diseñadas con la estética de Lineage 2 que tus jugadores amarán.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-[#C9A962] to-[#8B7355] rounded-xl font-semibold text-[#0B0B0B] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#E5D4A1] to-[#C9A962] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              Explorar Plantillas
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="enchant-hover rune-border px-8 py-4 rounded-xl font-semibold text-[#C9A962] hover:text-[#E5D4A1] transition-colors"
          >
            Ver Demo en Vivo
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { icon: Shield, value: "100%", label: "Seguro y Optimizado" },
            { icon: Zap, value: "24/7", label: "Soporte Técnico" },
            { icon: Sparkles, value: "50+", label: "Servidores Activos" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="glass-panel rounded-2xl p-6 text-center group hover:border-[#C9A962]/30 transition-colors"
            >
              <stat.icon className="w-8 h-8 text-[#C9A962] mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-[#A0A0A0]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-[#C9A962]/50 flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [1, 0], y: [0, 12] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[#C9A962] rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
