import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { AccountingEquationOrderByRelationAggregateInputObjectSchema as AccountingEquationOrderByRelationAggregateInputObjectSchema } from './AccountingEquationOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: z.string().min(1, 'Organisation name cannot be empty').optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  accountingEquations: z.lazy(() => AccountingEquationOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const OrganisationOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.OrganisationOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationOrderByWithRelationInput>;
export const OrganisationOrderByWithRelationInputObjectZodSchema = makeSchema();
