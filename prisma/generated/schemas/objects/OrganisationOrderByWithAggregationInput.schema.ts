import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { OrganisationCountOrderByAggregateInputObjectSchema as OrganisationCountOrderByAggregateInputObjectSchema } from './OrganisationCountOrderByAggregateInput.schema';
import { OrganisationMaxOrderByAggregateInputObjectSchema as OrganisationMaxOrderByAggregateInputObjectSchema } from './OrganisationMaxOrderByAggregateInput.schema';
import { OrganisationMinOrderByAggregateInputObjectSchema as OrganisationMinOrderByAggregateInputObjectSchema } from './OrganisationMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: z.string().min(1, 'Organisation name cannot be empty').optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  _count: z.lazy(() => OrganisationCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => OrganisationMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => OrganisationMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const OrganisationOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.OrganisationOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationOrderByWithAggregationInput>;
export const OrganisationOrderByWithAggregationInputObjectZodSchema = makeSchema();
