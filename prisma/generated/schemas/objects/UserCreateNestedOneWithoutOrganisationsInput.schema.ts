import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserCreateWithoutOrganisationsInputObjectSchema as UserCreateWithoutOrganisationsInputObjectSchema } from './UserCreateWithoutOrganisationsInput.schema';
import { UserUncheckedCreateWithoutOrganisationsInputObjectSchema as UserUncheckedCreateWithoutOrganisationsInputObjectSchema } from './UserUncheckedCreateWithoutOrganisationsInput.schema';
import { UserCreateOrConnectWithoutOrganisationsInputObjectSchema as UserCreateOrConnectWithoutOrganisationsInputObjectSchema } from './UserCreateOrConnectWithoutOrganisationsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutOrganisationsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOrganisationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOrganisationsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutOrganisationsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutOrganisationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutOrganisationsInput>;
export const UserCreateNestedOneWithoutOrganisationsInputObjectZodSchema = makeSchema();
