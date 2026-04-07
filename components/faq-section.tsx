"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "¿Cuánto tiempo tarda en estar lista mi web?",
    answer: "Depende del plan elegido. El plan Starter está listo en 3-5 días hábiles. El Professional en 7-10 días. Para proyectos Enterprise con customización total, el tiempo varía según los requerimientos específicos, pero generalmente entre 2-4 semanas.",
  },
  {
    question: "¿Necesito tener conocimientos técnicos?",
    answer: "Para nada. Nosotros nos encargamos de todo: instalación, configuración y puesta en marcha. Te entregamos la web lista para usar y te damos una breve capacitación sobre cómo administrarla. El panel de admin es intuitivo y fácil de usar.",
  },
  {
    question: "¿Puedo cambiar de theme después?",
    answer: "Sí, aunque depende del plan. En Starter puedes cambiar una vez sin costo adicional. En Professional y Enterprise los cambios de theme están incluidos en el período de actualizaciones. Después de ese período, el cambio de theme tiene un costo adicional.",
  },
  {
    question: "¿El sistema de donaciones es seguro?",
    answer: "Absolutamente. Utilizamos las APIs oficiales de PayPal y MercadoPago. Las transacciones se procesan directamente en sus plataformas seguras. Nosotros nunca almacenamos datos de tarjetas ni información financiera sensible. Todo está encriptado con SSL.",
  },
  {
    question: "¿Qué pasa si mi servidor usa una versión diferente de L2J?",
    answer: "Trabajamos con todas las versiones principales: Interlude, High Five, Classic, Gracia, etc. Nuestro código detecta automáticamente la estructura de tu base de datos y se adapta. Si usas una versión muy modificada o custom, lo evaluamos sin cargo.",
  },
  {
    question: "¿Incluyen hosting o dominio?",
    answer: "El plan Enterprise incluye VPS hosting por 1 año. Para Starter y Professional, puedes usar tu propio hosting o te recomendamos proveedores confiables. El dominio siempre lo gestionas tú (recomendamos Namecheap o Cloudflare). Si necesitas ayuda con la configuración DNS, te asistimos sin cargo.",
  },
  {
    question: "¿Qué pasa después de que termina el período de actualizaciones?",
    answer: "Tu web sigue funcionando perfectamente. El período de actualizaciones se refiere a nuevas funcionalidades y mejoras. Para continuar recibiendo actualizaciones, ofrecemos planes de mantenimiento mensual o puedes pagar por actualizaciones puntuales según necesites.",
  },
  {
    question: "¿Tienen política de reembolso?",
    answer: "Sí. Si antes de iniciar el desarrollo decides cancelar, te reembolsamos el 100%. Si ya comenzamos el trabajo, evaluamos caso por caso según el avance del proyecto. Nuestro objetivo es que estés 100% satisfecho con el resultado.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-[#121212] to-[#0B0B0B]" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#C9A962]/5 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-4xl mx-auto"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6"
          >
            <HelpCircle className="w-4 h-4 text-[#C9A962]" />
            <span className="text-sm text-[#A0A0A0]">Preguntas Frecuentes</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="text-white">Todo lo que necesitas</span>
            <br />
            <span className="text-gold-gradient">saber</span>
          </h2>

          <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto"
          >
            Respuestas a las dudas más comunes. ¿No encuentras lo que buscas?
            Escríbenos directamente.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-2xl bg-[#121212]/50 border border-[#C9A962]/10 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#1A1A1A]/50 transition-colors"
              >
                <span className="font-semibold text-white pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-[#C9A962] flex-shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6"
                    >
                      <p className="text-[#A0A0A0] leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center p-8 rounded-2xl glass-panel"
        >
          <MessageCircle className="w-10 h-10 text-[#C9A962] mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">¿Tienes más preguntas?</h3>
          <p className="text-[#A0A0A0] mb-6">
            Estamos en Discord listos para responder todas tus dudas.
          </p>
          <motion.a
            href="#discord"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#5865F2] text-white font-semibold hover:bg-[#4752C4] transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Hablar en Discord
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
