import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  assets: SortOrderSchema.optional(),
  liabilities: SortOrderSchema.optional(),
  ownersEquity: SortOrderSchema.optional()
}).strict();
export const AccountingEquationSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AccountingEquationSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountingEquationSumOrderByAggregateInput>;
export const AccountingEquationSumOrderByAggregateInputObjectZodSchema = makeSchema();
