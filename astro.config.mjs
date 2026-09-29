import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://lastwarzone.com',
  integrations: [tailwind(), mdx(), sitemap({
    filter: (page) => !page.includes('/admin'),
    i18n: {
      defaultLocale: 'vi',
      locales: {
        vi: 'vi-VN',
        en: 'en-US',
      },
    },
  }), react()],
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});