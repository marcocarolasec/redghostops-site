import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://marcocarolasec.github.io',
  base: '/redghostops-site',
  integrations: [tailwind()],
  build: {
    inlineStylesheets: 'auto',
  },
});
