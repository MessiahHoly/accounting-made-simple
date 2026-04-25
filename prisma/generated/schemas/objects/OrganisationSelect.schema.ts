import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { AccountingEquationFindManySchema as AccountingEquationFindManySchema } from '../findManyAccountingEquation.schema';
import { OrganisationCountOutputTypeArgsObjectSchema as OrganisationCountOutputTypeArgsObjectSchema } from './OrganisationCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  accountingEquations: z.union([z.boolean(), z.lazy(() => AccountingEquationFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => OrganisationCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const OrganisationSelectObjectSchema: z.ZodType<Prisma.OrganisationSelect> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationSelect>;
export const OrganisationSelectObjectZodSchema = makeSchema();
