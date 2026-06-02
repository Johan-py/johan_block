import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: 'static',
  compressHTML: true,

  build: {
    assets: '_assets',
    inlineStylesheets: 'always',
  },

  server: {
    port: 4321,
  },

  adapter: cloudflare()
});