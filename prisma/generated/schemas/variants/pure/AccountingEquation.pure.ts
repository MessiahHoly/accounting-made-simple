import * as z from 'zod';
// prettier-ignore
export const AccountingEquationModelSchema = z.object({
    id: z.string(),
    assets: z.number(),
    liabilities: z.number(),
    ownersEquity: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    userId: z.string(),
    user: z.unknown(),
    organisationId: z.string(),
    organisation: z.unknown()
}).strict();

export type AccountingEquationPureType = z.infer<typeof AccountingEquationModelSchema>;
