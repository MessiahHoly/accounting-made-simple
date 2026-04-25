import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SessionFindManySchema as SessionFindManySchema } from '../findManySession.schema';
import { AccountFindManySchema as AccountFindManySchema } from '../findManyAccount.schema';
import { OrganisationFindManySchema as OrganisationFindManySchema } from '../findManyOrganisation.schema';
import { AccountingEquationFindManySchema as AccountingEquationFindManySchema } from '../findManyAccountingEquation.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
  accounts: z.union([z.boolean(), z.lazy(() => AccountFindManySchema)]).optional(),
  organisations: z.union([z.boolean(), z.lazy(() => OrganisationFindManySchema)]).optional(),
  accountingEquations: z.union([z.boolean(), z.lazy(() => AccountingEquationFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserIncludeObjectSchema: z.ZodType<Prisma.UserInclude> = makeSchema() as unknown as z.ZodType<Prisma.UserInclude>;
export const UserIncludeObjectZodSchema = makeSchema();
