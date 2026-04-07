'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-2xl px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-elven-emerald-500 to-elven-forest-700 flex items-center justify-center shadow-lg group-hover:shadow-elven-glow transition-shadow duration-300">
              <span className="text-xl font-elven font-bold text-white">L</span>
            </div>
            <span className="font-elven text-xl font-semibold text-elven-gradient">
              L2J Servers
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="/elven-theme">Elven Theme</NavLink>
            <NavLink href="/chaos-theme">Chaos Theme</NavLink>
            <NavLink href="/imperial-theme">Imperial Theme</NavLink>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-elven"
          >
            Contactar
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative font-mystical text-elven-mist-200 hover:text-white transition-colors duration-300 group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-elven-emerald-500 to-elven-gold-400 group-hover:w-full transition-all duration-300" />
    </Link>
  );
}
