import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserUpdateWithoutAccountingEquationsInputObjectSchema as UserUpdateWithoutAccountingEquationsInputObjectSchema } from './UserUpdateWithoutAccountingEquationsInput.schema';
import { UserUncheckedUpdateWithoutAccountingEquationsInputObjectSchema as UserUncheckedUpdateWithoutAccountingEquationsInputObjectSchema } from './UserUncheckedUpdateWithoutAccountingEquationsInput.schema';
import { UserCreateWithoutAccountingEquationsInputObjectSchema as UserCreateWithoutAccountingEquationsInputObjectSchema } from './UserCreateWithoutAccountingEquationsInput.schema';
import { UserUncheckedCreateWithoutAccountingEquationsInputObjectSchema as UserUncheckedCreateWithoutAccountingEquationsInputObjectSchema } from './UserUncheckedCreateWithoutAccountingEquationsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutAccountingEquationsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAccountingEquationsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutAccountingEquationsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAccountingEquationsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutAccountingEquationsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutAccountingEquationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutAccountingEquationsInput>;
export const UserUpsertWithoutAccountingEquationsInputObjectZodSchema = makeSchema();
