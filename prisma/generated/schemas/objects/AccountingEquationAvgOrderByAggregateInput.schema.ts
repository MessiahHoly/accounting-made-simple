import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  assets: SortOrderSchema.optional(),
  liabilities: SortOrderSchema.optional(),
  ownersEquity: SortOrderSchema.optional()
}).strict();
export const AccountingEquationAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AccountingEquationAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountingEquationAvgOrderByAggregateInput>;
export const AccountingEquationAvgOrderByAggregateInputObjectZodSchema = makeSchema();
