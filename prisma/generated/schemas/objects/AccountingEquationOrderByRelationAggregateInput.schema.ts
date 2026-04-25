import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const AccountingEquationOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.AccountingEquationOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountingEquationOrderByRelationAggregateInput>;
export const AccountingEquationOrderByRelationAggregateInputObjectZodSchema = makeSchema();
