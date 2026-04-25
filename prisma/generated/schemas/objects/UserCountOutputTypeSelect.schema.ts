import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserCountOutputTypeCountSessionsArgsObjectSchema as UserCountOutputTypeCountSessionsArgsObjectSchema } from './UserCountOutputTypeCountSessionsArgs.schema';
import { UserCountOutputTypeCountAccountsArgsObjectSchema as UserCountOutputTypeCountAccountsArgsObjectSchema } from './UserCountOutputTypeCountAccountsArgs.schema';
import { UserCountOutputTypeCountOrganisationsArgsObjectSchema as UserCountOutputTypeCountOrganisationsArgsObjectSchema } from './UserCountOutputTypeCountOrganisationsArgs.schema';
import { UserCountOutputTypeCountAccountingEquationsArgsObjectSchema as UserCountOutputTypeCountAccountingEquationsArgsObjectSchema } from './UserCountOutputTypeCountAccountingEquationsArgs.schema'

const makeSchema = () => z.object({
  sessions: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountSessionsArgsObjectSchema)]).optional(),
  accounts: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountAccountsArgsObjectSchema)]).optional(),
  organisations: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountOrganisationsArgsObjectSchema)]).optional(),
  accountingEquations: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountAccountingEquationsArgsObjectSchema)]).optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
