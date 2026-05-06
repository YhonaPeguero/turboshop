import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        turbo: {
          purple: '#6B21E8',
          purpleLight: '#8B45FF',
          purpleDark: '#4A0FA8',
          green: '#22C55E',
          greenDark: '#16A34A',
          bg: '#070710',
          surface: '#0F0F1A',
          surface2: '#16162A',
          text: '#F1F0FF',
          muted: '#A09DC0',
          subtle: '#6B6888',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        display: ['var(--font-outfit)', 'Outfit', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 32px rgba(107,33,232,0.45)',
        glowStrong: '0 8px 48px rgba(107,33,232,0.6)',
      },
      backgroundImage: {
        turboGradient: 'linear-gradient(135deg,#6B21E8,#8B45FF)',
        heroGradient: 'linear-gradient(135deg,#0F0F1A,#1A0A30 50%,#0F0F1A)',
        nitroGradient: 'linear-gradient(90deg,#FF6B35,#FFB800)',
      },
    },
  },
  plugins: [],
};

export default config;
