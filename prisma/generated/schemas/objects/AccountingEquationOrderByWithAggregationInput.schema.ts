import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AccountingEquationCountOrderByAggregateInputObjectSchema as AccountingEquationCountOrderByAggregateInputObjectSchema } from './AccountingEquationCountOrderByAggregateInput.schema';
import { AccountingEquationAvgOrderByAggregateInputObjectSchema as AccountingEquationAvgOrderByAggregateInputObjectSchema } from './AccountingEquationAvgOrderByAggregateInput.schema';
import { AccountingEquationMaxOrderByAggregateInputObjectSchema as AccountingEquationMaxOrderByAggregateInputObjectSchema } from './AccountingEquationMaxOrderByAggregateInput.schema';
import { AccountingEquationMinOrderByAggregateInputObjectSchema as AccountingEquationMinOrderByAggregateInputObjectSchema } from './AccountingEquationMinOrderByAggregateInput.schema';
import { AccountingEquationSumOrderByAggregateInputObjectSchema as AccountingEquationSumOrderByAggregateInputObjectSchema } from './AccountingEquationSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  assets: SortOrderSchema.optional(),
  liabilities: SortOrderSchema.optional(),
  ownersEquity: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  organisationId: SortOrderSchema.optional(),
  _count: z.lazy(() => AccountingEquationCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => AccountingEquationAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AccountingEquationMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AccountingEquationMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => AccountingEquationSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AccountingEquationOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AccountingEquationOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountingEquationOrderByWithAggregationInput>;
export const AccountingEquationOrderByWithAggregationInputObjectZodSchema = makeSchema();
