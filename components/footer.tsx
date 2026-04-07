"use client";

import { motion } from "framer-motion";
import { Crown, MessageCircle, Mail, FileText, Shield, Heart, ExternalLink, Send } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  producto: [
    { label: "Características", href: "#features" },
    { label: "Plantillas", href: "#showcase" },
    { label: "Precios", href: "#pricing" },
    { label: "Demo en Vivo", href: "#demo" },
  ],
  soporte: [
    { label: "Documentación", href: "#docs" },
    { label: "Guía de Instalación", href: "#install" },
    { label: "FAQ", href: "#faq" },
    { label: "Estado del Servicio", href: "#status" },
  ],
  legal: [
    { label: "Términos de Servicio", href: "#terms" },
    { label: "Política de Privacidad", href: "#privacy" },
    { label: "Licencias", href: "#licenses" },
  ],
};

const socialLinks = [
  { icon: MessageCircle, label: "Discord", href: "#discord", color: "#5865F2" },
  { icon: Mail, label: "Email", href: "mailto:contact@l2jagency.com", color: "#C9A962" },
];

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A962]/50 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 bg-[#0B0B0B]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C9A962]/5 rounded-full blur-[150px]" />

      <div className="relative z-10">
        {/* CTA Section */}
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-white">¿Listo para llevar tu servidor</span>
                <br />
                <span className="text-gold-gradient">al siguiente nivel?</span>
              </h2>

              <p className="text-lg text-[#A0A0A0] mb-10 max-w-2xl mx-auto">
                Únete a los administradores que ya confían en nosotros.
                Tu web épica está a un click de distancia.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#discord"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#5865F2] text-white font-semibold hover:bg-[#4752C4] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Hablar por Discord
                </motion.a>

                <motion.a
                  href="mailto:contact@l2jagency.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="enchant-hover rune-border inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-[#C9A962] font-semibold"
                >
                  <Mail className="w-5 h-5" />
                  Enviar Email
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="border-t border-[#C9A962]/10 py-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12"
            >
              {/* Brand Column */}
              <div className="lg:col-span-2"
              >
                <Link href="/" className="inline-flex items-center gap-2 mb-6"
                >
                  <Crown className="w-8 h-8 text-[#C9A962]" />
                  <span className="text-2xl font-bold text-gold-gradient">L2J Agency</span>
                </Link>

                <p className="text-[#A0A0A0] mb-6 max-w-sm"
                >
                  Webs y paneles de control épicos para servidores privados de Lineage 2.
                  Diseñado por gamers, para gamers.
                </p>

                {/* Social Links */}
                <div className="flex gap-4"
                >
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                      style={{
                        backgroundColor: `${social.color}15`,
                        border: `1px solid ${social.color}30`,
                      }}
                      title={social.label}
                    >
                      <social.icon className="w-5 h-5" style={{ color: social.color }} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Links Columns */}
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}
                >
                  <h4 className="text-white font-semibold mb-4 capitalize">{category}</h4>
                  <ul className="space-y-3"
                  >
                    {links.map((link) => (
                      <li key={link.label}
                      >
                        <Link
                          href={link.href}
                          className="text-[#A0A0A0] hover:text-[#C9A962] transition-colors text-sm"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#C9A962]/10 py-6 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <p className="text-[#666666] text-sm flex items-center gap-1"
            >
              © 2025 L2J Agency. Hecho con
              <Heart className="w-4 h-4 text-[#E74C3C] inline mx-1" />
              para la comunidad L2.
            </p>

            <div className="flex items-center gap-6"
            >
              <Link href="#terms" className="text-[#666666] hover:text-[#A0A0A0] text-sm transition-colors"
              >
                Términos
              </Link>
              <Link href="#privacy" className="text-[#666666] hover:text-[#A0A0A0] text-sm transition-colors"
              >
                Privacidad
              </Link>
              <Link href="#cookies" className="text-[#666666] hover:text-[#A0A0A0] text-sm transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
