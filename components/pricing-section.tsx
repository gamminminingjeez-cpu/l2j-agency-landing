"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Crown } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: "99",
    description: "Perfecto para servidores nuevos o pequeños",
    color: "#27AE60",
    features: [
      "Web con 1 theme a elección",
      "Rankings básicos (PvP, PK)",
      "Panel de usuario simple",
      "Soporte por Discord",
      "1 mes de actualizaciones",
    ],
    notIncluded: [
      "Sistema de donaciones",
      "Panel de admin avanzado",
      "Customización completa",
    ],
    popular: false,
  },
  {
    name: "Professional",
    icon: Crown,
    price: "199",
    description: "Para servidores en crecimiento",
    color: "#C9A962",
    features: [
      "Web con cualquier theme",
      "Rankings completos + Castillos",
      "Panel de usuario seguro",
      "Sistema de donaciones integrado",
      "Pasarela PayPal/MercadoPago",
      "Soporte prioritario 24/7",
      "6 meses de actualizaciones",
      "Optimización SEO incluida",
    ],
    notIncluded: [
      "Customización total",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Sparkles,
    price: "Custom",
    description: "Solución completa a medida",
    color: "#9B59B6",
    features: [
      "Todo lo de Professional",
      "Theme 100% personalizado",
      "Múltiples pasarelas de pago",
      "Crypto (BTC, ETH, USDT)",
      "Panel de admin completo",
      "Sistema de tickets",
      "Estadísticas avanzadas",
      "VPS hosting incluido",
      "Actualizaciones de por vida",
      "Desarrollo a medida",
    ],
    notIncluded: [],
    popular: false,
  },
];

export function PricingSection() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <section id="pricing" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0B0B0B]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C9A962]/5 via-transparent to-transparent" />

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
            <Sparkles className="w-4 h-4 text-[#C9A962]" />
            <span className="text-sm text-[#A0A0A0]">Planes y Precios</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Invierte en tu</span>
            <span className="text-gold-gradient"> reino</span>
          </h2>

          <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto">
            Precios transparentes, sin costos ocultos. Elige el plan que mejor
            se adapte a las necesidades de tu servidor.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredPlan(plan.name)}
              onMouseLeave={() => setHoveredPlan(null)}
              className={`relative rounded-2xl ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
                >
                  <div className="px-4 py-1 rounded-full bg-gradient-to-r from-[#C9A962] to-[#8B7355] text-[#0B0B0B] text-xs font-bold"
                  >
                    MÁS ELEGIDO
                  </div>
                </div>
              )}

              <div
                className={`h-full p-8 rounded-2xl border transition-all duration-500 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-[#C9A962]/10 to-[#121212] border-[#C9A962]/50'
                    : 'bg-[#121212]/50 border-[#C9A962]/10 hover:border-[#C9A962]/30'
                }`}
              >
                {/* Icon & Name */}
                <div className="flex items-center gap-3 mb-4"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${plan.color}20, ${plan.color}10)`,
                      border: `1px solid ${plan.color}40`,
                    }}
                  >
                    <plan.icon className="w-6 h-6" style={{ color: plan.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                </div>

                {/* Price */}
                <div className="mb-4"
                >
                  <span className="text-4xl font-bold text-white">
                    {plan.price === "Custom" ? "" : "$"}{plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-[#A0A0A0]"> USD</span>
                  )}
                </div>

                {/* Description */}
                <p className="text-[#A0A0A0] text-sm mb-6"
                >{plan.description}</p>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-xl font-semibold mb-8 transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#C9A962] to-[#8B7355] text-[#0B0B0B]'
                      : 'enchant-hover rune-border text-[#C9A962]'
                  }`}
                >
                  {plan.price === "Custom" ? "Contactar Ventas" : "Comenzar Ahora"}
                </motion.button>

                {/* Features */}
                <div className="space-y-3"
                >
                  <p className="text-sm font-semibold text-white mb-3">Incluye:</p>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3"
                    >
                      <Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#A0A0A0]">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Not Included */}
                {plan.notIncluded.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-[#C9A962]/10"
                  >
                    <p className="text-sm font-semibold text-[#666666] mb-3">No incluye:</p>
                    {plan.notIncluded.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3"
                      >
                        <span className="w-5 h-5 flex items-center justify-center text-[#666666] flex-shrink-0">×</span>
                        <span className="text-sm text-[#666666]">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-[#666666] text-sm">
            Todos los precios son en USD. Pagos vía PayPal, Crypto o transferencia bancaria (AR).
            <br />
            ¿Necesitas algo específico? <a href="#contact" className="text-[#C9A962] hover:underline">Hablemos</a>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
