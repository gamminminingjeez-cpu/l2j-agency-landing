"use client";

import { motion } from "framer-motion";
import { Star, Quote, Sparkles } from "lucide-react";

const testimonials = [
  {
    name: "DragonLord",
    role: "Admin de L2Warzone",
    avatar: "D",
    content: "La web que nos hicieron aumentó las donaciones un 300% en el primer mes. El sistema automático de entrega de items es una maravilla.",
    rating: 5,
    server: "x100 Interlude",
  },
  {
    name: "DarkSovereign",
    role: "Fundador de L2Abyss",
    avatar: "DS",
    content: "Profesionales de verdad. Entendieron exactamente lo que necesitábamos para nuestro servidor hardcore. El theme Dark Omen es perfecto.",
    rating: 5,
    server: "x50 High Five",
  },
  {
    name: "ElvenQueen",
    role: "Co-Admin de L2Eternity",
    avatar: "EQ",
    content: "Soporte técnico increíble. Cualquier duda que tenemos nos responden en minutos por Discord. 100% recomendado.",
    rating: 5,
    server: "x15 Classic",
  },
  {
    name: "CastleKeeper",
    role: "Owner de L2Imperial",
    avatar: "CK",
    content: "El sistema de castillos interactivo es justo lo que necesitábamos. Los jugadores pueden ver el estado de sus castillos en tiempo real.",
    rating: 5,
    server: "x30 Interlude",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-[#121212] to-[#0B0B0B]" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#9B59B6]/5 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#C9A962]/5 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
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
            <Star className="w-4 h-4 text-[#C9A962]" />
            <span className="text-sm text-[#A0A0A0]">Testimonios</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Lo que dicen los</span>
            <br />
            <span className="text-gold-gradient">líderes de clan</span>
          </h2>

          <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto">
            Administradores de servidores que ya confiaron en nosotros para llevar
            sus comunidades al siguiente nivel.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl bg-[#121212]/50 border border-[#C9A962]/10 hover:border-[#C9A962]/30 transition-all duration-500"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity"
                >
                  <Quote className="w-12 h-12 text-[#C9A962]" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4"
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C9A962] text-[#C9A962]" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-[#A0A0A0] mb-6 leading-relaxed"
                >
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4"
                >
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C9A962] to-[#9B59B6] flex items-center justify-center font-bold text-[#0B0B0B]"
                  >
                    {testimonial.avatar}
                  </div>

                  {/* Info */}
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-[#C9A962]">{testimonial.role}</div>
                    <div className="text-xs text-[#666666]">{testimonial.server}</div>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-r from-[#C9A962]/10 to-[#9B59B6]/10 -z-10" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "50+", label: "Servidores Activos" },
            { value: "100%", label: "Satisfacción" },
            { value: "24/7", label: "Soporte Técnico" },
            { value: "0", label: "Webs Caídas" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl glass-panel"
            >
              <div className="text-3xl font-bold text-gold-gradient mb-1">{stat.value}</div>
              <div className="text-sm text-[#A0A0A0]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
