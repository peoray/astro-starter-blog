import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // TODO: add site url
  site: 'http://localhost:3000',
  integrations: [sitemap(), image(), mdx()],
  experimental: { assets: true },
});