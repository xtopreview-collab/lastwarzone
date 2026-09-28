import { defineCollection, z } from 'astro:content';

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleEn: z.string().optional(),
    description: z.string(),
    descriptionEn: z.string().optional(),
    category: z.string(),
    order: z.number().default(0),
    tags: z.array(z.string()).default([]),
    lastUpdated: z.string().optional(),
    source: z.string().optional(),
  }),
});

export const collections = { guides };
