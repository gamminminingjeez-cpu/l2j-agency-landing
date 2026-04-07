export const themes = {
  elven: {
    name: 'Elven',
    colors: {
      primary: '#27AE60',
      secondary: '#C9A962',
      background: '#0F2918',
      surface: '#1A3A2A',
      text: '#FFFFFF',
      textMuted: '#A0C4B0',
      accent: '#2ECC71',
      danger: '#E74C3C',
    },
    gradients: {
      hero: 'from-[#1A3A2A] via-[#0F2918] to-[#1A3A2A]',
      card: 'from-[#27AE60]/20 to-[#1A3A2A]',
      button: 'from-[#27AE60] to-[#1E8449]',
    },
    effects: {
      glow: 'shadow-[0_0_30px_rgba(39,174,96,0.3)]',
      border: 'border-[#27AE60]/30',
    },
  },
  'dark-omen': {
    name: 'Dark Omen',
    colors: {
      primary: '#E74C3C',
      secondary: '#8B0000',
      background: '#0A0A0A',
      surface: '#1A0A0A',
      text: '#FFFFFF',
      textMuted: '#C4A0A0',
      accent: '#FF4444',
      danger: '#8B0000',
    },
    gradients: {
      hero: 'from-[#2A0A0A] via-[#0A0A0A] to-[#2A0A0A]',
      card: 'from-[#E74C3C]/20 to-[#1A0A0A]',
      button: 'from-[#E74C3C] to-[#C0392B]',
    },
    effects: {
      glow: 'shadow-[0_0_30px_rgba(231,76,60,0.4)]',
      border: 'border-[#E74C3C]/30',
    },
  },
  imperial: {
    name: 'Imperial',
    colors: {
      primary: '#C9A962',
      secondary: '#9B59B6',
      background: '#1A1714',
      surface: '#2A2520',
      text: '#FFFFFF',
      textMuted: '#D4C4A8',
      accent: '#E5D4A1',
      danger: '#E74C3C',
    },
    gradients: {
      hero: 'from-[#2A2520] via-[#1A1714] to-[#2A2520]',
      card: 'from-[#C9A962]/20 to-[#2A2520]',
      button: 'from-[#C9A962] to-[#8B7355]',
    },
    effects: {
      glow: 'shadow-[0_0_30px_rgba(201,169,98,0.3)]',
      border: 'border-[#C9A962]/30',
    },
  },
};

export type ThemeKey = keyof typeof themes;
export type ThemeConfig = typeof themes.elven;
