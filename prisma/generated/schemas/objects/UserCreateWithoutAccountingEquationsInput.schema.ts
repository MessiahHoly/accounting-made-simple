import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SessionCreateNestedManyWithoutUserInputObjectSchema as SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema as AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { OrganisationCreateNestedManyWithoutUserInputObjectSchema as OrganisationCreateNestedManyWithoutUserInputObjectSchema } from './OrganisationCreateNestedManyWithoutUserInput.schema'

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
  organisations: z.lazy(() => OrganisationCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutAccountingEquationsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutAccountingEquationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutAccountingEquationsInput>;
export const UserCreateWithoutAccountingEquationsInputObjectZodSchema = makeSchema();
