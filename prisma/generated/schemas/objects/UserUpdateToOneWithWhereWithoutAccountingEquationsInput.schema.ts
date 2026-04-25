import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutAccountingEquationsInputObjectSchema as UserUpdateWithoutAccountingEquationsInputObjectSchema } from './UserUpdateWithoutAccountingEquationsInput.schema';
import { UserUncheckedUpdateWithoutAccountingEquationsInputObjectSchema as UserUncheckedUpdateWithoutAccountingEquationsInputObjectSchema } from './UserUncheckedUpdateWithoutAccountingEquationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutAccountingEquationsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAccountingEquationsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutAccountingEquationsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAccountingEquationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAccountingEquationsInput>;
export const UserUpdateToOneWithWhereWithoutAccountingEquationsInputObjectZodSchema = makeSchema();
