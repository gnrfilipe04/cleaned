import { z } from "zod";

export const countrySchema = z.object({
    iso2: z.string(),
    iso3: z.string(),
    country: z.string(),
    cities: z.array(z.string()),
});

export type CountryDTO = z.infer<typeof countrySchema>;
