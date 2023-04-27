import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    published: z.boolean(),
    tags: z.array(z.string()),
    series: z.boolean(),
    cover_image: z.string(),
    canonical_url: z.boolean(),
  }),
});

export const collections = { blog: blogCollection };