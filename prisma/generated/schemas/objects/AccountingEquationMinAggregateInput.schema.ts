import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  assets: z.literal(true).optional(),
  liabilities: z.literal(true).optional(),
  ownersEquity: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  organisationId: z.literal(true).optional()
}).strict();
export const AccountingEquationMinAggregateInputObjectSchema: z.ZodType<Prisma.AccountingEquationMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AccountingEquationMinAggregateInputType>;
export const AccountingEquationMinAggregateInputObjectZodSchema = makeSchema();
