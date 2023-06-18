import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import image from '@astrojs/image'
import mdx from '@astrojs/mdx'
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs'
import { SITE_URL } from './src/consts'

export default defineConfig({
  site: SITE_URL,
  markdown: {
    syntaxHighlight: 'prism',
    remarkPlugins: [remarkReadingTime],
  },
  integrations: [sitemap(), image(), mdx()],
  experimental: {
    assets: true,
  },
})
