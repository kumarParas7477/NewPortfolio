/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Apple-style neutrals and accents
        ink: {
          DEFAULT: '#1d1d1f', // primary text
          soft: '#424245',
          muted: '#6e6e73', // secondary text
          faint: '#86868b',
        },
        paper: {
          DEFAULT: '#ffffff',
          gray: '#f5f5f7', // section background
          line: '#d2d2d7',
        },
        night: {
          DEFAULT: '#000000',
          card: '#161617',
          raised: '#1d1d1f',
          line: '#424245',
        },
        accent: {
          DEFAULT: '#0071e3', // buttons
          hover: '#0077ed',
          link: '#0066cc', // links on light
          bright: '#2997ff', // links on dark
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', 'Inter', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.035em',
        apple: '-0.022em',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
