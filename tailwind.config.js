/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // True Apple Official Color Palette
        apple: {
          canvas: '#F5F5F7',      // Signature Apple light backdrop
          surface: '#FFFFFF',
          elevated: '#FFFFFF',
          subtle: '#FBFBFD',
          dark: '#161617',        // Signature Apple space dark
          obsidian: '#0B0B0C',    // Deep cinematic keynote black
          black: '#000000',
          text: '#1D1D1F',        // Primary high-contrast text
          textSecondary: '#424245',
          steel: '#86868B',       // Apple secondary body/caption text
          titanium: '#A1A1A6',    // Micro telemetry/metadata
          silver: '#D2D2D7',      // Delicate hairline dividers
          border: 'rgba(0, 0, 0, 0.06)',
          borderDark: 'rgba(255, 255, 255, 0.1)',
          blue: '#0071E3',        // Apple action blue
          emerald: '#059669',     // Aura signature trust accent
          emeraldHover: '#047857'
        },
        pearl: '#F4F6F9',
        mist: '#E8EEF5',
        navy: {
          800: '#1E293B',
          900: '#0F172A',
          950: '#090E1A'
        },
        champagne: {
          400: '#D8B480',
          500: '#C89D66',
          600: '#B08249'
        },
        cyan: {
          500: '#0EA5E9',
          600: '#0284C7'
        },
        aura: {
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
          accent: '#0284c7',
          gold: '#f59e0b',
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Plus Jakarta Sans"',
          'Inter',
          'system-ui',
          'sans-serif'
        ],
        serif: ['"Cormorant Garamond"', 'serif'],
        mono: ['"SF Mono"', '"JetBrains Mono"', 'Menlo', 'monospace']
      },
      fontSize: {
        'apple-hero': ['clamp(1.85rem, 3.8vw, 3.4rem)', { lineHeight: '1.08', letterSpacing: '-0.035em', fontWeight: '600' }],
        'apple-section': ['clamp(1.75rem, 3.5vw, 3.25rem)', { lineHeight: '1.08', letterSpacing: '-0.035em', fontWeight: '600' }],
        'apple-headline': ['clamp(1.35rem, 2.5vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: '600' }],
        'apple-subhead': ['clamp(0.95rem, 1.35vw, 1.15rem)', { lineHeight: '1.5', letterSpacing: '-0.012em', fontWeight: '400' }],
        'apple-metric': ['clamp(2.75rem, 6vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.05em', fontWeight: '600' }],
        'apple-caption': ['0.8125rem', { lineHeight: '1.38', letterSpacing: '-0.008em', fontWeight: '400' }]
      },
      letterSpacing: {
        'apple-metric': '-0.05em',
        'apple-hero': '-0.04em',
        'apple-section': '-0.035em',
        'apple-card': '-0.025em',
        'apple-tighter': '-0.045em',
        'apple-tight': '-0.025em',
        'apple-normal': '-0.012em',
      },
      boxShadow: {
        'apple-sm': '0 1px 3px rgba(0, 0, 0, 0.04)',
        'apple-card': '0 4px 20px rgba(0, 0, 0, 0.04)',
        'apple-diffuse': '0 24px 64px -12px rgba(0, 0, 0, 0.06)',
        'apple-float': '0 12px 32px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.03)',
        'apple-hover': '0 24px 50px rgba(0, 0, 0, 0.08)',
        'apple-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.06)',
        'apple-dark-card': '0 12px 40px 0 rgba(0, 0, 0, 0.4)',
        'apple-dark-diffuse': '0 32px 80px -16px rgba(0, 0, 0, 0.6)',
        'apple-glow-emerald': '0 0 60px -15px rgba(5, 150, 105, 0.3)',
        'luxury': '0 20px 50px -12px rgba(15, 23, 42, 0.08)',
        'card': '0 10px 30px -10px rgba(15, 23, 42, 0.06)'
      },
      borderRadius: {
        'apple-hero': '36px',
        'apple-bento': '32px',
        'apple-card': '24px',
        'apple-pill': '980px',
      },
      backdropBlur: {
        'apple': '24px',
        'apple-subtle': '14px',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.85, transform: 'scale(1.03)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }
    },
  },
  plugins: [],
}
