import * as z from 'zod';
// prettier-ignore
export const OrganisationResultSchema = z.object({
    id: z.string(),
    name: z.string().min(1, 'Organisation name cannot be empty'),
    createdAt: z.date(),
    updatedAt: z.date(),
    userId: z.string(),
    user: z.unknown(),
    accountingEquations: z.array(z.unknown())
}).strict();

export type OrganisationResultType = z.infer<typeof OrganisationResultSchema>;
