import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SessionCreateNestedManyWithoutUserInputObjectSchema as SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema as AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
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
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accountingEquations: z.lazy(() => AccountingEquationCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutOrganisationsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutOrganisationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutOrganisationsInput>;
export const UserCreateWithoutOrganisationsInputObjectZodSchema = makeSchema();
