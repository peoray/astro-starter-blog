---
title: Astro Blog Starter
description: "A simple, hackable & minimalistic starter for Astro that uses Markdown for content!"
pubDate: 2021-02-07
draft: false
tags: ['Markdown', 'Releases']
cover_image: ""
canonical_url: false

---

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

```html
<template>
  <Layout>
    <h2>Latest blog posts</h2>
    <ul>
      <li v-for="edge in $page.allWordPressPost.edges" :key="edge.node.id">
        {{ edge.node.title }}
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query Blog {
  allWordPressPost (limit: 5) {
    edges {
      node {
        _id
        title
      }
    }
  }
}
</page-query>
```


<!-- A new static site generator baby is born. It's highly inspired by Gatsby.js (React based) but built on top of Vue.js. We have been working on it for a year and will have a beta ready soon. You can expect this baby to grow up fast!

We think **Gridsome** is a missing piece to the Vue.js ecosystem. What Gatsby.js does for React.js is a game changer in how we build websites.  React.js is excellent, but we think Vue.js is more approachable for most web designers and devs getting started with JAMstack. Gridsome is the Vue.js alternative to Gatsby.

With **Gridsome** you get a **universal GraphQL layer** for all your connected data sources. It's like a single source of truth for your website data ready to be used in any page or components. Connect to any CMS or APIs like Google Spreadsheet, Airtable, Instagram Feed, local markdown files, etc.

Here is an example on how to query posts from the GraphQL layer in a page:

```html
<template>
  <Layout>
    <h2>Latest blog posts</h2>
    <ul>
      <li v-for="edge in $page.allWordPressPost.edges" :key="edge.node.id">
        {{ edge.node.title }}
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query Blog {
  allWordPressPost (limit: 5) {
    edges {
      node {
        _id
        title
      }
    }
  }
}
</page-query>
```

You don't need to know GraphQL or Vue to get started with Gridsome - It's a great way to get introduced to both.

The GraphQL layer and all the data can be explored in a local GraphQL playground. The playground is usually located at `https://localhost:8080/___explore` when a Gridsome development project is running.

#### Perfect scores on Google Lighthouse - automagically 💚

One of the main goals of Gridsome is to make a framework that let you build websites that are optimized "out-of-the-box." It follows the [PRPL-pattern by Google.](https://developers.google.com/web/fundamentals/performance/prpl-pattern/) You don't need to be a performance expert to make fast websites with Gridsome. Your site gets almost perfect scores on Google lighthouse out-of-the-box. These are some of the performance steps that Gridsome takes care of:

- Image compressing & lazy-loading ⚡️
- CSS & JS minification ⚡️
- Code-splitting ⚡️
- HTML compressing ⚡️
- Critical CSS (Plugin) ⚡️
- Full PWA & Offline-support (plugin) ⚡️  

#### A better way to build websites

Gridsome is built for the JAMstack workflow - a new way to build websites that gives you better performance, higher security, cheaper hosting, and a better developer experience. Generate prerendered (static) pages at build time for SEO-purpose and add powerful dynamic functionality with APIs and Vue.js.

We believe the SSGs / JAMstack trend is just getting started. When you have first started to make websites this way there is no way back. You feel almost "dirty" when going back to a traditional WordPress / CMS setup.

Try running the new Chrome Lighthouse (Audit tab in Developer tools) on a WordPress site - It is impossible to get good scores even with the best caching plugins and hosting. With Gridsome you don't even need caching plugins. Website optimization is taken care of at build time.

This is what we think is very exciting and is why we are building Gridsome. It is the **perfect SPA & PWA front-end solution** for any headless CMS or content APIs.

#### Whats next

In the next couple of months we're going to continue to improve the docs, create tutorials, add more source & transformer plugins and fix bugs.

#### Contribute to Gridsome

We're currently just two brothers working on this, so any contribution is very welcome. We're passionate about building a faster web and make website building fun again.

You can also support us by giving [a GitHub star ★](https://github.com/gridsome/gridsome/stargazers) and spread the word :)
A new static site generator baby is born. It's highly inspired by Gatsby.js (React based) but built on top of Vue.js. We have been working on it for a year and will have a beta ready soon. You can expect this baby to grow up fast!

We think **Gridsome** is a missing piece to the Vue.js ecosystem. What Gatsby.js does for React.js is a game changer in how we build websites.  React.js is excellent, but we think Vue.js is more approachable for most web designers and devs getting started with JAMstack. Gridsome is the Vue.js alternative to Gatsby.

With **Gridsome** you get a **universal GraphQL layer** for all your connected data sources. It's like a single source of truth for your website data ready to be used in any page or components. Connect to any CMS or APIs like Google Spreadsheet, Airtable, Instagram Feed, local markdown files, etc.

Here is an example on how to query posts from the GraphQL layer in a page:

```html
<template>
  <Layout>
    <h2>Latest blog posts</h2>
    <ul>
      <li v-for="edge in $page.allWordPressPost.edges" :key="edge.node.id">
        {{ edge.node.title }}
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query Blog {
  allWordPressPost (limit: 5) {
    edges {
      node {
        _id
        title
      }
    }
  }
}
</page-query>
```

You don't need to know GraphQL or Vue to get started with Gridsome - It's a great way to get introduced to both.

The GraphQL layer and all the data can be explored in a local GraphQL playground. The playground is usually located at `https://localhost:8080/___explore` when a Gridsome development project is running.

#### Perfect scores on Google Lighthouse - automagically 💚

One of the main goals of Gridsome is to make a framework that let you build websites that are optimized "out-of-the-box." It follows the [PRPL-pattern by Google.](https://developers.google.com/web/fundamentals/performance/prpl-pattern/) You don't need to be a performance expert to make fast websites with Gridsome. Your site gets almost perfect scores on Google lighthouse out-of-the-box. These are some of the performance steps that Gridsome takes care of:

- Image compressing & lazy-loading ⚡️
- CSS & JS minification ⚡️
- Code-splitting ⚡️
- HTML compressing ⚡️
- Critical CSS (Plugin) ⚡️
- Full PWA & Offline-support (plugin) ⚡️  

#### A better way to build websites

Gridsome is built for the JAMstack workflow - a new way to build websites that gives you better performance, higher security, cheaper hosting, and a better developer experience. Generate prerendered (static) pages at build time for SEO-purpose and add powerful dynamic functionality with APIs and Vue.js.

We believe the SSGs / JAMstack trend is just getting started. When you have first started to make websites this way there is no way back. You feel almost "dirty" when going back to a traditional WordPress / CMS setup.

Try running the new Chrome Lighthouse (Audit tab in Developer tools) on a WordPress site - It is impossible to get good scores even with the best caching plugins and hosting. With Gridsome you don't even need caching plugins. Website optimization is taken care of at build time.

This is what we think is very exciting and is why we are building Gridsome. It is the **perfect SPA & PWA front-end solution** for any headless CMS or content APIs.

#### Whats next

In the next couple of months we're going to continue to improve the docs, create tutorials, add more source & transformer plugins and fix bugs.

#### Contribute to Gridsome

We're currently just two brothers working on this, so any contribution is very welcome. We're passionate about building a faster web and make website building fun again.

You can also support us by giving [a GitHub star ★](https://github.com/gridsome/gridsome/stargazers) and spread the word :) -->
