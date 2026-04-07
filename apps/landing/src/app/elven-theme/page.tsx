import type { Metadata, Viewport } from 'next';
import ElvenThemeClient from './ElvenThemeClient';

export const metadata: Metadata = {
  title: 'Elven Theme | L2J Server Themes',
  description: 'Tema Elven para servidores Lineage 2 - Elegancia épica con magia ancestral y naturaleza eterna',
  keywords: ['Lineage 2', 'L2J', 'Server Theme', 'Elven', 'Fantasy'],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#10b981',
};

export default function ElvenThemePage() {
  return <ElvenThemeClient />;
}
