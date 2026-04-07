"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sword, Crown } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#hero", label: "Inicio" },
  { href: "#features", label: "Características" },
  { href: "#showcase", label: "Plantillas" },
  { href: "#contact", label: "Contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass-panel rounded-2xl px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Crown className="w-8 h-8 text-[#C9A962] transition-transform duration-300 group-hover:scale-110" />
                <motion.div
                  className="absolute inset-0 blur-xl bg-[#C9A962]/50"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <span className="text-xl font-bold text-gold-gradient">
                L2J Agency
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-[#A0A0A0] hover:text-white transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C9A962] to-[#9B59B6] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="enchant-hover rune-border px-6 py-2.5 rounded-lg text-sm font-semibold text-[#C9A962] hover:text-[#E5D4A1] transition-colors duration-300"
              >
                <span className="flex items-center gap-2">
                  <Sword className="w-4 h-4" />
                  Comenzar Proyecto
                </span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#C9A962] hover:text-[#E5D4A1] transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4 pt-4 border-t border-[#C9A962]/20"
              >
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-[#A0A0A0] hover:text-white transition-colors py-2"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <button className="enchant-hover rune-border px-6 py-3 rounded-lg text-[#C9A962] font-semibold mt-2">
                    <span className="flex items-center justify-center gap-2">
                      <Sword className="w-4 h-4" />
                      Comenzar Proyecto
                    </span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}
