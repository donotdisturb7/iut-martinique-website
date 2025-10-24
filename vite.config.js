import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0', // Écoute sur toutes les interfaces réseau
    port: 5173, // Port par défaut de Vite
    strictPort: true, // Échoue si le port est occupé
  },
})
