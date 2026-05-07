import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
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
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [animate],
};

export default config;
