import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema as SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { OrganisationUncheckedCreateNestedManyWithoutUserInputObjectSchema as OrganisationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './OrganisationUncheckedCreateNestedManyWithoutUserInput.schema';
import { AccountingEquationUncheckedCreateNestedManyWithoutUserInputObjectSchema as AccountingEquationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountingEquationUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean().optional(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  organisations: z.lazy(() => OrganisationUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accountingEquations: z.lazy(() => AccountingEquationUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutAccountsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput>;
export const UserUncheckedCreateWithoutAccountsInputObjectZodSchema = makeSchema();
