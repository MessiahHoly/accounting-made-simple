import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: z.string().min(1, 'Organisation name cannot be empty').optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional()
}).strict();
export const OrganisationCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrganisationCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationCountOrderByAggregateInput>;
export const OrganisationCountOrderByAggregateInputObjectZodSchema = makeSchema();
