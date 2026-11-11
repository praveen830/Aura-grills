/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Apple-Grade Official Color Palette
        apple: {
          canvas: '#F5F5F7',      // Signature Apple light backdrop
          surface: '#FFFFFF',
          elevated: '#FFFFFF',
          subtle: '#FBFBFD',
          dark: '#161617',        // Signature Apple space dark
          obsidian: '#0B0B0C',    // Deep cinematic black
          black: '#000000',
          steel: '#86868B',       // Apple secondary body/caption text
          titanium: '#A1A1A6',    // Micro telemetry/metadata
          silver: '#E5E5EA',      // Delicate hairline dividers
          border: 'rgba(0, 0, 0, 0.08)',
          borderDark: 'rgba(255, 255, 255, 0.12)',
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
          accent: '#0284c7', // Sky architectural steel
          gold: '#f59e0b',
        }
      },
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          'system-ui',
          'sans-serif'
        ],
        serif: ['"Cormorant Garamond"', 'serif'],
        mono: ['"JetBrains Mono"', '"SF Mono"', 'Menlo', 'monospace']
      },
      letterSpacing: {
        'apple-tighter': '-0.045em',
        'apple-tight': '-0.025em',
        'apple-normal': '-0.01em',
      },
      boxShadow: {
        'apple-sm': '0 1px 2px rgba(0, 0, 0, 0.04)',
        'apple-card': '0 4px 24px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
        'apple-float': '0 12px 32px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04)',
        'apple-hover': '0 20px 40px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.02)',
        'apple-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.06)',
        'apple-dark-card': '0 8px 32px 0 rgba(0, 0, 0, 0.36), 0 1px 2px rgba(255, 255, 255, 0.08)',
        'luxury': '0 20px 50px -12px rgba(15, 23, 42, 0.08)',
        'card': '0 10px 30px -10px rgba(15, 23, 42, 0.06)'
      },
      borderRadius: {
        'apple-card': '24px',
        'apple-bento': '28px',
        'apple-pill': '980px',
      },
      backdropBlur: {
        'apple': '20px',
        'apple-subtle': '12px',
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
