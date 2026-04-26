import * as z from 'zod';
// prettier-ignore
export const AccountingEquationInputSchema = z.object({
    id: z.string(),
    assets: z.number(),
    liabilities: z.number(),
    ownersEquity: z.number(),
    asOf: z.date(),
    createdAt: z.date(),
    updatedAt: z.date(),
    userId: z.string(),
    user: z.unknown(),
    organisationId: z.string(),
    organisation: z.unknown()
}).strict();

export type AccountingEquationInputType = z.infer<typeof AccountingEquationInputSchema>;
