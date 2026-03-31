import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://distribution-labs.com',
  base: '/',
  vite: {
    optimizeDeps: {
      exclude: ['xxhash-wasm'],
    },
  },
});
