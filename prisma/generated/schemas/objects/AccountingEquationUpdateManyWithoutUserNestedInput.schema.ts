import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AccountingEquationCreateWithoutUserInputObjectSchema as AccountingEquationCreateWithoutUserInputObjectSchema } from './AccountingEquationCreateWithoutUserInput.schema';
import { AccountingEquationUncheckedCreateWithoutUserInputObjectSchema as AccountingEquationUncheckedCreateWithoutUserInputObjectSchema } from './AccountingEquationUncheckedCreateWithoutUserInput.schema';
import { AccountingEquationCreateOrConnectWithoutUserInputObjectSchema as AccountingEquationCreateOrConnectWithoutUserInputObjectSchema } from './AccountingEquationCreateOrConnectWithoutUserInput.schema';
import { AccountingEquationUpsertWithWhereUniqueWithoutUserInputObjectSchema as AccountingEquationUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './AccountingEquationUpsertWithWhereUniqueWithoutUserInput.schema';
import { AccountingEquationCreateManyUserInputEnvelopeObjectSchema as AccountingEquationCreateManyUserInputEnvelopeObjectSchema } from './AccountingEquationCreateManyUserInputEnvelope.schema';
import { AccountingEquationWhereUniqueInputObjectSchema as AccountingEquationWhereUniqueInputObjectSchema } from './AccountingEquationWhereUniqueInput.schema';
import { AccountingEquationUpdateWithWhereUniqueWithoutUserInputObjectSchema as AccountingEquationUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './AccountingEquationUpdateWithWhereUniqueWithoutUserInput.schema';
import { AccountingEquationUpdateManyWithWhereWithoutUserInputObjectSchema as AccountingEquationUpdateManyWithWhereWithoutUserInputObjectSchema } from './AccountingEquationUpdateManyWithWhereWithoutUserInput.schema';
import { AccountingEquationScalarWhereInputObjectSchema as AccountingEquationScalarWhereInputObjectSchema } from './AccountingEquationScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AccountingEquationCreateWithoutUserInputObjectSchema), z.lazy(() => AccountingEquationCreateWithoutUserInputObjectSchema).array(), z.lazy(() => AccountingEquationUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => AccountingEquationUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AccountingEquationCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => AccountingEquationCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AccountingEquationUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => AccountingEquationUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AccountingEquationCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AccountingEquationWhereUniqueInputObjectSchema), z.lazy(() => AccountingEquationWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AccountingEquationWhereUniqueInputObjectSchema), z.lazy(() => AccountingEquationWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AccountingEquationWhereUniqueInputObjectSchema), z.lazy(() => AccountingEquationWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AccountingEquationWhereUniqueInputObjectSchema), z.lazy(() => AccountingEquationWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AccountingEquationUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => AccountingEquationUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AccountingEquationUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => AccountingEquationUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AccountingEquationScalarWhereInputObjectSchema), z.lazy(() => AccountingEquationScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AccountingEquationUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.AccountingEquationUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountingEquationUpdateManyWithoutUserNestedInput>;
export const AccountingEquationUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
