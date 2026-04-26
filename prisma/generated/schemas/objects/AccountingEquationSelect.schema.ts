import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { OrganisationArgsObjectSchema as OrganisationArgsObjectSchema } from './OrganisationArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  assets: z.boolean().optional(),
  liabilities: z.boolean().optional(),
  ownersEquity: z.boolean().optional(),
  asOf: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  organisationId: z.boolean().optional(),
  organisation: z.union([z.boolean(), z.lazy(() => OrganisationArgsObjectSchema)]).optional()
}).strict();
export const AccountingEquationSelectObjectSchema: z.ZodType<Prisma.AccountingEquationSelect> = makeSchema() as unknown as z.ZodType<Prisma.AccountingEquationSelect>;
export const AccountingEquationSelectObjectZodSchema = makeSchema();
