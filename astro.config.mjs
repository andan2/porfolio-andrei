import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://andreioctaviandanciulescu.com',
  integrations: [
    tailwind(),
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
      sitemap: 'https://andreioctaviandanciulescu.com/sitemap-index.xml',
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  outDir: './dist', // Asegúrate de que esto coincida con tu directorio de salida
});