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
          DEFAULT: '#13316C',
          50: '#f0f2f8',
          100: '#d9e0f0',
          200: '#b3c1e1',
          300: '#8da2d2',
          400: '#6783c3',
          500: '#13316C', // Nouveau bleu principal
          600: '#0f2856',
          700: '#0b1f40',
          800: '#07162a',
          900: '#030d14',
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
          50: '#f0f2f8',
          100: '#d9e0f0',
          200: '#b3c1e1',
          300: '#8da2d2',
          400: '#6783c3',
          500: '#13316C', // Nouveau bleu principal
          600: '#0f2856',
          700: '#0b1f40',
          800: '#07162a',
          900: '#030d14',
        },
        secondary: {
          50: '#fef7f0',
          100: '#fce8d6',
          200: '#f9d1ad',
          300: '#f5ba84',
          400: '#f2a35b',
          500: '#EF7639', // Nouveau orange secondaire
          600: '#d15e2a',
          700: '#a3471f',
          800: '#753014',
          900: '#471909',
        },
        lagoon: {
          50: '#f0f2f8',
          100: '#d9e0f0',
          200: '#b3c1e1',
          300: '#8da2d2',
          400: '#6783c3',
          500: '#13316C',
          600: '#0f2856',
          700: '#0b1f40',
          800: '#07162a',
          900: '#030d14',
        },
        orange: {
          50: '#fef7f0',
          100: '#fce8d6',
          200: '#f9d1ad',
          300: '#f5ba84',
          400: '#f2a35b',
          500: '#EF7639', // Orange secondaire
          600: '#d15e2a',
          700: '#a3471f',
          800: '#753014',
          900: '#471909',
        },
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'laptop': '1366px', // Résolution typique des laptops HP
        'xl': '1280px',
        '2xl': '1440px',
        '3xl': '1920px', // Full HD
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
