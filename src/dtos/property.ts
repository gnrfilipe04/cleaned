import { z } from "zod";

export const PropertySchema = z.object({
    id: z.number(),
    category: z.string(),
    name: z.string(),
    adress: z.string(),
    city: z.string(),
    state: z.string(),
    country: z.string(),
    rooms: z.number(),
    bathrooms: z.number(),
    parkingSpaces: z.number(),
    squareMeters: z.number(),
    postalCode: z.string(),
    latitude: z.number(),
    longitude: z.number(),
    basement: z.boolean(),
    images: z.array(z.string()),
    owner: z.object({
        name: z.string(),
        phone: z.string(),
        email: z.string().email(),
    }),
    recurrence: z.object({
        type: z.string(),
        interval: z.number(),
    }),
    schedule: z.array(
        z.object({
            id: z.number(),
            date: z.string(),
            time: z.string(),
        })
    ),
});

export type PropertyDTO = z.infer<typeof PropertySchema>;
