'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { ThemeKey, themes } from '@/lib/themes';
import { Menu, X, User, LogOut, Skull, Castle, TreePine, ArrowLeft, Crown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DemoNavbarProps {
  themeKey: ThemeKey;
}

const navLinks = [
  { href: '', label: 'Inicio' },
  { href: '/rankings', label: 'Rankings' },
  { href: '/info', label: 'Info' },
  { href: '/news', label: 'Noticias' },
  { href: '/shop', label: 'Tienda' },
  { href: '/downloads', label: 'Descargas' },
];

const themeIcons = {
  elven: TreePine,
  'dark-omen': Skull,
  imperial: Castle,
};

const themePaths: Record<ThemeKey, string> = {
  elven: '/demo/elven',
  'dark-omen': '/demo/dark-omen',
  imperial: '/demo/imperial',
};

export function DemoNavbar({ themeKey }: DemoNavbarProps) {
  const theme = themes[themeKey];
  const pathname = usePathname();
  const { user, isLoggedIn, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const basePath = themePaths[themeKey];
  const ThemeIcon = themeIcons[themeKey];

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50"
      style={{ 
        backgroundColor: `${theme.colors.surface}E6`, 
        backdropFilter: 'blur(10px)' 
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Back to Landing */}
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-all"
              title="Volver a L2J Agency"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline text-sm">L2J Agency</span>
            </Link>
            <div className="w-px h-6 bg-white/20" />
            <Link href={basePath} className="flex items-center gap-2">
              <ThemeIcon 
                className="w-8 h-8" 
                style={{ color: theme.colors.primary }} 
              />
              <span className="text-xl font-bold text-white">
                L2{theme.name}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const fullPath = `${basePath}${link.href}`;
              const isActive = pathname === fullPath;
              
              return (
                <Link
                  key={link.href}
                  href={fullPath}
                  className="text-sm font-medium transition-colors relative"
                  style={{ 
                    color: isActive ? theme.colors.primary : theme.colors.textMuted 
                  }}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId={`navbar-indicator-${themeKey}`}
                      className="absolute -bottom-1 left-0 right-0 h-0.5"
                      style={{ backgroundColor: theme.colors.primary }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                <Link
                  href={`${basePath}/user/profile`}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white"
                  style={{ backgroundColor: `${theme.colors.primary}20` }}
                >
                  <User className="w-4 h-4" />
                  {user?.username}
                </Link>
                <button
                  onClick={logout}
                  className="p-2 rounded-lg text-white/60 hover:text-white transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  href={`${basePath}/user/login`}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  Login
                </Link>
                <Link
                  href={`${basePath}/user/register`}
                  className="px-4 py-2 rounded-lg text-sm font-medium"
                  style={{ 
                    backgroundColor: theme.colors.primary,
                    color: themeKey === 'imperial' ? '#1A1714' : '#0F2918'
                  }}
                >
                  Registro
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t"
              style={{ borderColor: `${theme.colors.primary}20` }}
            >
              <div className="py-4 space-y-2">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 text-white/80 hover:text-white"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Volver a L2J Agency
                </Link>
                <div className="border-t border-white/10 my-2" />
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={`${basePath}${link.href}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2 text-white/80 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
