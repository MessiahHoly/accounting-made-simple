import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserUpdateWithoutOrganisationsInputObjectSchema as UserUpdateWithoutOrganisationsInputObjectSchema } from './UserUpdateWithoutOrganisationsInput.schema';
import { UserUncheckedUpdateWithoutOrganisationsInputObjectSchema as UserUncheckedUpdateWithoutOrganisationsInputObjectSchema } from './UserUncheckedUpdateWithoutOrganisationsInput.schema';
import { UserCreateWithoutOrganisationsInputObjectSchema as UserCreateWithoutOrganisationsInputObjectSchema } from './UserCreateWithoutOrganisationsInput.schema';
import { UserUncheckedCreateWithoutOrganisationsInputObjectSchema as UserUncheckedCreateWithoutOrganisationsInputObjectSchema } from './UserUncheckedCreateWithoutOrganisationsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutOrganisationsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutOrganisationsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutOrganisationsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOrganisationsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutOrganisationsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutOrganisationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutOrganisationsInput>;
export const UserUpsertWithoutOrganisationsInputObjectZodSchema = makeSchema();
