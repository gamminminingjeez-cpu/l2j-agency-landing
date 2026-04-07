import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Elven Forest Theme
        elven: {
          forest: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
            950: '#052e16',
          },
          gold: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
            950: '#451a03',
          },
          emerald: {
            50: '#ecfdf5',
            100: '#d1fae5',
            200: '#a7f3d0',
            300: '#6ee7b7',
            400: '#34d399',
            500: '#10b981',
            600: '#059669',
            700: '#047857',
            800: '#065f46',
            900: '#064e3b',
            950: '#022c22',
          },
          mist: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
            950: '#020617',
          },
        },
        // Dark Omen Theme (for future use)
        chaos: {
          blood: '#8b0000',
          lava: '#ff4500',
          ember: '#ff6b35',
          ash: '#2d2d2d',
          shadow: '#0a0a0a',
          rune: '#9333ea',
        },
        // Imperial Theme (for future use)
        imperial: {
          gold: '#ffd700',
          bronze: '#cd7f32',
          marble: '#f5f5f5',
          royal: '#4a0080',
          crown: '#c9a227',
        },
      },
      fontFamily: {
        elven: ['Cinzel', 'serif'],
        mystical: ['Cormorant Garamond', 'serif'],
        display: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'elven-gradient': 'linear-gradient(135deg, #052e16 0%, #14532d 25%, #166534 50%, #15803d 75%, #052e16 100%)',
        'elven-radial': 'radial-gradient(ellipse at center, rgba(34, 197, 94, 0.15) 0%, transparent 70%)',
        'elven-glow': 'radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, transparent 60%)',
        'elven-mist': 'linear-gradient(180deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.4) 50%, transparent 100%)',
        'magic-pulse': 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(16, 185, 129, 0.1) 40%, transparent 70%)',
      },
      boxShadow: {
        'elven-glow': '0 0 40px rgba(34, 197, 94, 0.3), 0 0 80px rgba(34, 197, 94, 0.1)',
        'elven-card': '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'elven-border': 'inset 0 0 20px rgba(16, 185, 129, 0.2), 0 0 30px rgba(16, 185, 129, 0.1)',
        'magic-soft': '0 4px 30px rgba(16, 185, 129, 0.2)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-magic': 'pulse-magic 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'leaf-fall': 'leaf-fall 8s linear infinite',
        'mist-drift': 'mist-drift 15s ease-in-out infinite',
        'rune-glow': 'rune-glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-magic': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
        'glow-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(34, 197, 94, 0.3), 0 0 40px rgba(34, 197, 94, 0.1)',
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(34, 197, 94, 0.5), 0 0 80px rgba(34, 197, 94, 0.2)',
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0.5)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        'leaf-fall': {
          '0%': { transform: 'translateY(-10%) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(720deg)', opacity: '0' },
        },
        'mist-drift': {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(30px) translateY(-20px)' },
        },
        'rune-glow': {
          '0%': { textShadow: '0 0 10px rgba(16, 185, 129, 0.5)' },
          '100%': { textShadow: '0 0 30px rgba(16, 185, 129, 1), 0 0 60px rgba(16, 185, 129, 0.5)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
