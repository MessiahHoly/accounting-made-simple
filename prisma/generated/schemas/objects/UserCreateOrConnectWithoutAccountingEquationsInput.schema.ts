import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutAccountingEquationsInputObjectSchema as UserCreateWithoutAccountingEquationsInputObjectSchema } from './UserCreateWithoutAccountingEquationsInput.schema';
import { UserUncheckedCreateWithoutAccountingEquationsInputObjectSchema as UserUncheckedCreateWithoutAccountingEquationsInputObjectSchema } from './UserUncheckedCreateWithoutAccountingEquationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutAccountingEquationsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAccountingEquationsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutAccountingEquationsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAccountingEquationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutAccountingEquationsInput>;
export const UserCreateOrConnectWithoutAccountingEquationsInputObjectZodSchema = makeSchema();
