import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserCreateWithoutOrganisationsInputObjectSchema as UserCreateWithoutOrganisationsInputObjectSchema } from './UserCreateWithoutOrganisationsInput.schema';
import { UserUncheckedCreateWithoutOrganisationsInputObjectSchema as UserUncheckedCreateWithoutOrganisationsInputObjectSchema } from './UserUncheckedCreateWithoutOrganisationsInput.schema';
import { UserCreateOrConnectWithoutOrganisationsInputObjectSchema as UserCreateOrConnectWithoutOrganisationsInputObjectSchema } from './UserCreateOrConnectWithoutOrganisationsInput.schema';
import { UserUpsertWithoutOrganisationsInputObjectSchema as UserUpsertWithoutOrganisationsInputObjectSchema } from './UserUpsertWithoutOrganisationsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutOrganisationsInputObjectSchema as UserUpdateToOneWithWhereWithoutOrganisationsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutOrganisationsInput.schema';
import { UserUpdateWithoutOrganisationsInputObjectSchema as UserUpdateWithoutOrganisationsInputObjectSchema } from './UserUpdateWithoutOrganisationsInput.schema';
import { UserUncheckedUpdateWithoutOrganisationsInputObjectSchema as UserUncheckedUpdateWithoutOrganisationsInputObjectSchema } from './UserUncheckedUpdateWithoutOrganisationsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutOrganisationsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOrganisationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOrganisationsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutOrganisationsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutOrganisationsInputObjectSchema), z.lazy(() => UserUpdateWithoutOrganisationsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutOrganisationsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutOrganisationsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutOrganisationsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutOrganisationsNestedInput>;
export const UserUpdateOneRequiredWithoutOrganisationsNestedInputObjectZodSchema = makeSchema();
