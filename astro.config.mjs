// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  devToolbar: {
    enabled: false // Esto desactiva la barra flotante por completo
  },
  server: {
    host: true, // Esto habilita la red para todos los dispositivos
    port: 4321
  }
});