'use client';

import Link from 'next/link';
import { ThemeKey, themes } from '@/lib/themes';
import { MessageCircle, Mail, TreePine, Skull, Castle } from 'lucide-react';

interface DemoFooterProps {
  themeKey: ThemeKey;
}

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

export function DemoFooter({ themeKey }: DemoFooterProps) {
  const theme = themes[themeKey];
  const basePath = themePaths[themeKey];
  const ThemeIcon = themeIcons[themeKey];

  return (
    <footer 
      className="border-t py-12 mt-20"
      style={{ 
        backgroundColor: theme.colors.surface,
        borderColor: `${theme.colors.primary}20`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <ThemeIcon 
                className="w-8 h-8" 
                style={{ color: theme.colors.primary }} 
              />
              <span className="text-xl font-bold text-white">L2{theme.name}</span>
            </div>
            <p className="text-white/60 mb-4 max-w-sm">
              Servidor privado de Lineage 2 con rates equilibrados y comunidad activa.
              Únete a la aventura hoy mismo.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              {['Inicio', 'Rankings', 'Info', 'Noticias', 'Tienda'].map((item) => (
                <li key={item}>
                  <Link 
                    href={basePath}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {['Términos de Servicio', 'Política de Privacidad', 'Reglas'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div 
          className="border-t mt-8 pt-8 text-center"
          style={{ borderColor: `${theme.colors.primary}20` }}
        >
          <p className="text-white/40 text-sm">
            © 2025 L2{theme.name}. Todos los derechos reservados. 
            Lineage 2 es marca registrada de NCSOFT.
          </p>
        </div>
      </div>
    </footer>
  );
}
