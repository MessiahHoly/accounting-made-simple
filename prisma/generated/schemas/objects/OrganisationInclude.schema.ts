import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { AccountingEquationFindManySchema as AccountingEquationFindManySchema } from '../findManyAccountingEquation.schema';
import { OrganisationCountOutputTypeArgsObjectSchema as OrganisationCountOutputTypeArgsObjectSchema } from './OrganisationCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  accountingEquations: z.union([z.boolean(), z.lazy(() => AccountingEquationFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => OrganisationCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const OrganisationIncludeObjectSchema: z.ZodType<Prisma.OrganisationInclude> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationInclude>;
export const OrganisationIncludeObjectZodSchema = makeSchema();
