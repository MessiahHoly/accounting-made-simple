import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema as SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema as AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
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
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accountingEquations: z.lazy(() => AccountingEquationUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutOrganisationsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutOrganisationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutOrganisationsInput>;
export const UserUncheckedCreateWithoutOrganisationsInputObjectZodSchema = makeSchema();
