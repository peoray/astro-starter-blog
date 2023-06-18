import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    draft: z.boolean(),
    tags: z.array(z.string()),
    cover_image: z.string(),
    canonical_url: z.boolean(),
    minutesRead: z.string().optional()
  }),
});

export const collections = { blog: blogCollection };