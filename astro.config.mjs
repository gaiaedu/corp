import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://corp.gaia-edu.co.jp',
  base: process.env.BASE_PATH || '/',
  output: 'static',
  build: {
    format: 'directory',
  },
});
