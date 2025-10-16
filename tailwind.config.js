/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark cyber/vaporwave theme
        dark: {
          900: '#0a0a0f',
          800: '#121218',
          700: '#1a1a24',
          600: '#252530',
          500: '#2f2f3f',
        },
        // Neon cyan
        neon: {
          cyan: '#00f7ff',
          blue: '#0096ff',
          purple: '#b845ed',
          pink: '#ff006e',
          green: '#00ff9f',
          yellow: '#ffea00',
        },
        // Gradients
        glow: {
          cyan: 'rgba(0, 247, 255, 0.2)',
          purple: 'rgba(184, 69, 237, 0.2)',
          pink: 'rgba(255, 0, 110, 0.2)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 20px rgba(0, 247, 255, 0.5), 0 0 40px rgba(0, 247, 255, 0.3)',
          },
          '100%': { 
            boxShadow: '0 0 30px rgba(0, 247, 255, 0.8), 0 0 60px rgba(0, 247, 255, 0.5)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 20px rgba(0, 247, 255, 0.6)',
          },
          '50%': {
            opacity: '.8',
            boxShadow: '0 0 40px rgba(0, 247, 255, 0.9)',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(rgba(0, 247, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 247, 255, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
}