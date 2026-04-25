import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SessionCreateNestedManyWithoutUserInputObjectSchema as SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { OrganisationCreateNestedManyWithoutUserInputObjectSchema as OrganisationCreateNestedManyWithoutUserInputObjectSchema } from './OrganisationCreateNestedManyWithoutUserInput.schema';
import { AccountingEquationCreateNestedManyWithoutUserInputObjectSchema as AccountingEquationCreateNestedManyWithoutUserInputObjectSchema } from './AccountingEquationCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean().optional(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  organisations: z.lazy(() => OrganisationCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accountingEquations: z.lazy(() => AccountingEquationCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutAccountsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutAccountsInput>;
export const UserCreateWithoutAccountsInputObjectZodSchema = makeSchema();
