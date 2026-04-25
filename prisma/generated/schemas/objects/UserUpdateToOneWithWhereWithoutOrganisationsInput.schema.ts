import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutOrganisationsInputObjectSchema as UserUpdateWithoutOrganisationsInputObjectSchema } from './UserUpdateWithoutOrganisationsInput.schema';
import { UserUncheckedUpdateWithoutOrganisationsInputObjectSchema as UserUncheckedUpdateWithoutOrganisationsInputObjectSchema } from './UserUncheckedUpdateWithoutOrganisationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutOrganisationsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutOrganisationsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutOrganisationsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutOrganisationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutOrganisationsInput>;
export const UserUpdateToOneWithWhereWithoutOrganisationsInputObjectZodSchema = makeSchema();
