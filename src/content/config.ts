import { z, defineCollection } from "astro:content";

export const pricesCollection = defineCollection({
    type: 'data',
    schema: z.array(
        z.object({
            title: z.string(),
            price: z.string().optional(),
            options: z.array(
                z.object({
                    title: z.string(),
                    price: z.string(),}
                )
            ).optional()
        }),
    )
})

export const collections = {
    'prices': pricesCollection,
    'surgery': pricesCollection,
};