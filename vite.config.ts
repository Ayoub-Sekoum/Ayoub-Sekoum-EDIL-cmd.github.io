import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carica le variabili d'ambiente dalla cartella corrente
  const env = loadEnv(mode, (process as any).cwd(), '');

  return {
    // IMPORTANTE: Base path per GitHub Pages.
    // Deve corrispondere al nome del tuo repository su GitHub (es. https://github.com/tuonome/EDIL-02)
    base: '/EDIL-02/',
    plugins: [react()],
    define: {
      // Sostituisce process.env.API_KEY con il valore della variabile durante la build
      'process.env.API_KEY': JSON.stringify(env.VITE_API_KEY || env.API_KEY || '')
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true
    }
  };
});