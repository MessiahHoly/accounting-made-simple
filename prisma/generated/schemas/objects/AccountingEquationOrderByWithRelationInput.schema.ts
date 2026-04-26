import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { OrganisationOrderByWithRelationInputObjectSchema as OrganisationOrderByWithRelationInputObjectSchema } from './OrganisationOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  assets: SortOrderSchema.optional(),
  liabilities: SortOrderSchema.optional(),
  ownersEquity: SortOrderSchema.optional(),
  asOf: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  organisationId: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  organisation: z.lazy(() => OrganisationOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const AccountingEquationOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AccountingEquationOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountingEquationOrderByWithRelationInput>;
export const AccountingEquationOrderByWithRelationInputObjectZodSchema = makeSchema();
