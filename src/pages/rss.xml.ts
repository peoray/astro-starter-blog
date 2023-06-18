import rss from '@astrojs/rss';
import { getCollection, CollectionEntry } from 'astro:content';
const posts: CollectionEntry<'blog'>[] = await getCollection('blog');
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts"

export async function get(context: { site: any }) {
  return rss({
    stylesheet: '/rss/styles.xsl',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts
      .filter((post) => post.data.draft === false)
      .map((post) => ({
        ...post.data,
        link: `${post.slug}/`,
      })),
  });
}