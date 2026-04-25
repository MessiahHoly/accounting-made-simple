import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  assets: SortOrderSchema.optional(),
  liabilities: SortOrderSchema.optional(),
  ownersEquity: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  organisationId: SortOrderSchema.optional()
}).strict();
export const AccountingEquationCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AccountingEquationCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountingEquationCountOrderByAggregateInput>;
export const AccountingEquationCountOrderByAggregateInputObjectZodSchema = makeSchema();
