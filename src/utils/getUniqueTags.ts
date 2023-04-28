import slugify from "./slugify";

import type { CollectionEntry } from "astro:content";

const getUniqueTags = (posts: CollectionEntry<"blog">[]) => {
  let tags: string[] = [];
  const filteredPosts = posts.filter(({ data }) => data.published);
  filteredPosts.forEach(post => {
    tags = [...tags, ...post.data.tags]
      .map(tag => slugify(tag))
      .filter(
        (value: string, index: number, self: string[]) =>
          self.indexOf(value) === index
      );
  });
  return tags;
};

export default getUniqueTags;