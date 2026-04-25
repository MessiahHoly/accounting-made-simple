import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutOrganisationsInputObjectSchema as UserCreateWithoutOrganisationsInputObjectSchema } from './UserCreateWithoutOrganisationsInput.schema';
import { UserUncheckedCreateWithoutOrganisationsInputObjectSchema as UserUncheckedCreateWithoutOrganisationsInputObjectSchema } from './UserUncheckedCreateWithoutOrganisationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutOrganisationsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOrganisationsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutOrganisationsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutOrganisationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutOrganisationsInput>;
export const UserCreateOrConnectWithoutOrganisationsInputObjectZodSchema = makeSchema();
