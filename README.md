# Astro Starter Blog

> A simple, hackable & minimalistic starter for Astro that uses Markdown for content.

## 🔥 Features
- ✅ Beautiful and simple design.
- ✅ Easy configuration
- ✅ Markdown & MDX support
- ✅ Tags support.
- ✅ Dark / Light toggle.
- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Uses [`astro:assets`](https://docs.astro.build/en/guides/assets/) for optimized images
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Blog drafts

## 🌍 Demo URL

https://astro-starter-blog.netlify.app


## 👨🏾‍💻 Getting started

```
npm create astro@latest -- --template peoray/astro-starter-blog
```

### 👨🏾‍💻 Configuration

Edit the values in `src/consts.ts` to match your brand or company:

```ts

export const SITE_TITLE = "Astro Blog Starter";
export const SITE_URL = "https://astro-starter-blog.netlify.app/";
export const SITE_DESCRIPTION = "Welcome to my personal website!";
export const PAGE_DESCRIPTION = "A simple, hackable & minimalistic starter for Astro that uses Markdown for content"
export const TWITTER = "https://twitter.com/peoray_"
export const GITHUB = "https://github.com/peoray/astro-starter-blog"
export const AUTHOR = "Emmanuel Raymond"
export const IMAGE = "/images/photo.png"
export const IMAGE_ALT = "Photo of an avatar"

```

Change any lines or add more in the `<head>` tags in `src/components/MetaTags.astro`, like the favicon:

```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

## 🚀 Project Structure

<!-- Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
``` -->

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check the [Astro documentation](https://docs.astro.build) or jump into the [Discord server](https://astro.build/chat).

## 💙 Acknowledgement

This theme is a port of the popular [Gridsome Starter Blog](https://github.com/gridsome/gridsome-starter-blog) made by the creator of Gridsome, Tommy Vedvik.

## ✨ Contributing

Feel free to open an issue if you find bugs or want to request new features.

## 📜 License

Licensed under the [MIT License](https://opensource.org/license/mit/), Copyright © Emmanuel Raymond 2023
