import * as z from 'zod';
// prettier-ignore
export const AccountingEquationResultSchema = z.object({
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

export type AccountingEquationResultType = z.infer<typeof AccountingEquationResultSchema>;
