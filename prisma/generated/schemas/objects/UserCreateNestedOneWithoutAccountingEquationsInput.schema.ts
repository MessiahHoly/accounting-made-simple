import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserCreateWithoutAccountingEquationsInputObjectSchema as UserCreateWithoutAccountingEquationsInputObjectSchema } from './UserCreateWithoutAccountingEquationsInput.schema';
import { UserUncheckedCreateWithoutAccountingEquationsInputObjectSchema as UserUncheckedCreateWithoutAccountingEquationsInputObjectSchema } from './UserUncheckedCreateWithoutAccountingEquationsInput.schema';
import { UserCreateOrConnectWithoutAccountingEquationsInputObjectSchema as UserCreateOrConnectWithoutAccountingEquationsInputObjectSchema } from './UserCreateOrConnectWithoutAccountingEquationsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutAccountingEquationsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAccountingEquationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountingEquationsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutAccountingEquationsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAccountingEquationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutAccountingEquationsInput>;
export const UserCreateNestedOneWithoutAccountingEquationsInputObjectZodSchema = makeSchema();
