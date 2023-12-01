import * as z from 'zod';
import { PropertySchema } from './property';

export const ClientSchema = z.object({
    id: z.number(),
    username: z.string({ required_error: 'Nome é obrigatório',  }).min(1, { message: 'Nome é obrigatório' }),
    phone: z.string({ required_error: 'Telefone é obrigatório' }).min(1, { message: 'Telefone é obrigatório' }),
    email: z.string({ required_error: 'E-mail é obrigatório' }).email({ message: 'Digite um email válido' }),
    adress: z.object({
        country: z.string({ required_error: 'País é obrigatório' }).min(1, { message: 'Páis é obrigatório' }),
        state: z.string({ required_error: 'Estado é obrigatório' }).min(1, { message: 'Estado é obrigatório' }),
        city: z.string({ required_error: 'Cidade é obrigatório' }).min(1, { message: 'Cidade é obrigatório' }),
        number: z.string({ required_error: 'Número é obrigatório' }).min(1, { message: 'Número é obrigatório' }),
    }),
    photo: z.string().url(),
    createdAt: z.string(),
    properties: z.array(PropertySchema),
    visits: z.array(
        z.object({
            property: PropertySchema,
            date: z.string(),
        })
    ),
});

export type ClientDTO = z.infer<typeof ClientSchema>;
