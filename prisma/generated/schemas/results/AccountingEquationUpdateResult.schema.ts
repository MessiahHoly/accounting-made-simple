import * as z from 'zod';
export const AccountingEquationUpdateResultSchema = z.nullable(z.object({
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
}));