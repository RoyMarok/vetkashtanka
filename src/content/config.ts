import { z, defineCollection } from "astro:content";

const pricesCollection = defineCollection({
    type: 'data',
    schema: z.array(
        z.object({
            title: z.string(),
            price: z.string(),
        }),
    )
})

export const collections = {
    'prices': pricesCollection,
};