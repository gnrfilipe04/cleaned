import { z } from "zod";

export const StateSchema = z.object({
    name: z.string(),
    state_code: z.string(),
});

export type StateDTO = z.infer<typeof StateSchema>;
