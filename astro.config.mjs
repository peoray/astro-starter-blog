import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import image from '@astrojs/image'
import mdx from '@astrojs/mdx'
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs'

// https://astro.build/config
export default defineConfig({
  // TODO: add site url
  site: 'http://localhost:3000',
  markdown: {
    syntaxHighlight: 'prism',
    remarkPlugins: [remarkReadingTime],
    // gfm: true,
  },

  integrations: [sitemap(), image(), mdx()],
  experimental: {
    assets: true,
  },
})
