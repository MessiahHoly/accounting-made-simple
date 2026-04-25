import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  assets: z.literal(true).optional(),
  liabilities: z.literal(true).optional(),
  ownersEquity: z.literal(true).optional()
}).strict();
export const AccountingEquationAvgAggregateInputObjectSchema: z.ZodType<Prisma.AccountingEquationAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AccountingEquationAvgAggregateInputType>;
export const AccountingEquationAvgAggregateInputObjectZodSchema = makeSchema();
