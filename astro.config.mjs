import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import image from '@astrojs/image'
import mdx from '@astrojs/mdx'
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs'

export default defineConfig({
  site: 'https://astro-starter-blog.netlify.app/',
  markdown: {
    syntaxHighlight: 'prism',
    remarkPlugins: [remarkReadingTime],
  },
  integrations: [sitemap(), image(), mdx()],
  experimental: {
    assets: true,
  },
})
