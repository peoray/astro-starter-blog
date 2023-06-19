import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import image from '@astrojs/image'
import mdx from '@astrojs/mdx'
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs'
import { SITE_URL } from './src/consts'

export default defineConfig({
  site: SITE_URL,
  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'dracula',
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
  integrations: [sitemap(), image(), mdx()],
  experimental: {
    assets: true,
  },
})
