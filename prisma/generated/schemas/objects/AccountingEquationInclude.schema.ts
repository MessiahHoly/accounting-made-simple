import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { OrganisationArgsObjectSchema as OrganisationArgsObjectSchema } from './OrganisationArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  organisation: z.union([z.boolean(), z.lazy(() => OrganisationArgsObjectSchema)]).optional()
}).strict();
export const AccountingEquationIncludeObjectSchema: z.ZodType<Prisma.AccountingEquationInclude> = makeSchema() as unknown as z.ZodType<Prisma.AccountingEquationInclude>;
export const AccountingEquationIncludeObjectZodSchema = makeSchema();
