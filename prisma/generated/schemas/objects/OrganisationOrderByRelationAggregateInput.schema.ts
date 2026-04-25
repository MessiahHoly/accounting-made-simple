import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const OrganisationOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.OrganisationOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationOrderByRelationAggregateInput>;
export const OrganisationOrderByRelationAggregateInputObjectZodSchema = makeSchema();
