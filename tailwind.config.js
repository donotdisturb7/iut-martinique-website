/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs institutionnelles Université des Antilles
        carmine: {
          DEFAULT: '#971d20',
          50: '#fef2f2',
          100: '#f4c7c8',
          200: '#ea9091',
          300: '#df585a',
          400: '#ce272a',
          500: '#971d20', // Carmine (Grenat Martinique)
          600: '#781718',
          700: '#5a1112',
          800: '#3c0b0c',
          900: '#1e0606',
        },
        celestial: {
          DEFAULT: '#009dd7',
          50: '#f0f9ff',
          100: '#c4efff',
          200: '#89dfff',
          300: '#4ed0ff',
          400: '#12c0ff',
          500: '#009dd7', // Celestial Blue (Bleu Lagon)
          600: '#007eab',
          700: '#005e81',
          800: '#003f56',
          900: '#001f2b',
        },
        outremer: {
          DEFAULT: '#002561',
          50: '#e6eaf2',
          100: '#b3bed9',
          200: '#8091c0',
          300: '#4d65a7',
          400: '#26478e',
          500: '#002561', // Bleu Outremer (approximation depuis CMYK)
          600: '#001e4e',
          700: '#00173b',
          800: '#001028',
          900: '#000915',
        },
        // Alias pour compatibilité
        primary: {
          50: '#fef2f2',
          100: '#f4c7c8',
          200: '#ea9091',
          300: '#df585a',
          400: '#ce272a',
          500: '#971d20',
          600: '#781718',
          700: '#5a1112',
          800: '#3c0b0c',
          900: '#1e0606',
        },
        secondary: {
          50: '#e6eaf2',
          100: '#b3bed9',
          200: '#8091c0',
          300: '#4d65a7',
          400: '#26478e',
          500: '#002561',
          600: '#001e4e',
          700: '#00173b',
          800: '#001028',
          900: '#000915',
        },
        lagoon: {
          50: '#f0f9ff',
          100: '#c4efff',
          200: '#89dfff',
          300: '#4ed0ff',
          400: '#12c0ff',
          500: '#009dd7',
          600: '#007eab',
          700: '#005e81',
          800: '#003f56',
          900: '#001f2b',
        },
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
