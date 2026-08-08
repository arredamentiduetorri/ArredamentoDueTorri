// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://shimmering-bavarois-9c9ccf.netlify.app',
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/grazie') && !page.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});