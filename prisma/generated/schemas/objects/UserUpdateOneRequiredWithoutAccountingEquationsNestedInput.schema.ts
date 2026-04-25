import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserCreateWithoutAccountingEquationsInputObjectSchema as UserCreateWithoutAccountingEquationsInputObjectSchema } from './UserCreateWithoutAccountingEquationsInput.schema';
import { UserUncheckedCreateWithoutAccountingEquationsInputObjectSchema as UserUncheckedCreateWithoutAccountingEquationsInputObjectSchema } from './UserUncheckedCreateWithoutAccountingEquationsInput.schema';
import { UserCreateOrConnectWithoutAccountingEquationsInputObjectSchema as UserCreateOrConnectWithoutAccountingEquationsInputObjectSchema } from './UserCreateOrConnectWithoutAccountingEquationsInput.schema';
import { UserUpsertWithoutAccountingEquationsInputObjectSchema as UserUpsertWithoutAccountingEquationsInputObjectSchema } from './UserUpsertWithoutAccountingEquationsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutAccountingEquationsInputObjectSchema as UserUpdateToOneWithWhereWithoutAccountingEquationsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutAccountingEquationsInput.schema';
import { UserUpdateWithoutAccountingEquationsInputObjectSchema as UserUpdateWithoutAccountingEquationsInputObjectSchema } from './UserUpdateWithoutAccountingEquationsInput.schema';
import { UserUncheckedUpdateWithoutAccountingEquationsInputObjectSchema as UserUncheckedUpdateWithoutAccountingEquationsInputObjectSchema } from './UserUncheckedUpdateWithoutAccountingEquationsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutAccountingEquationsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAccountingEquationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountingEquationsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAccountingEquationsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutAccountingEquationsInputObjectSchema), z.lazy(() => UserUpdateWithoutAccountingEquationsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAccountingEquationsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutAccountingEquationsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAccountingEquationsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutAccountingEquationsNestedInput>;
export const UserUpdateOneRequiredWithoutAccountingEquationsNestedInputObjectZodSchema = makeSchema();
