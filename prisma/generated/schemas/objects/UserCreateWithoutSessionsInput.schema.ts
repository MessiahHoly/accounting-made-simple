import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AccountCreateNestedManyWithoutUserInputObjectSchema as AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
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
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(),
  organisations: z.lazy(() => OrganisationCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accountingEquations: z.lazy(() => AccountingEquationCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutSessionsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutSessionsInput>;
export const UserCreateWithoutSessionsInputObjectZodSchema = makeSchema();
