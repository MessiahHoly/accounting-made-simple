import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AccountingEquationCreateWithoutUserInputObjectSchema as AccountingEquationCreateWithoutUserInputObjectSchema } from './AccountingEquationCreateWithoutUserInput.schema';
import { AccountingEquationUncheckedCreateWithoutUserInputObjectSchema as AccountingEquationUncheckedCreateWithoutUserInputObjectSchema } from './AccountingEquationUncheckedCreateWithoutUserInput.schema';
import { AccountingEquationCreateOrConnectWithoutUserInputObjectSchema as AccountingEquationCreateOrConnectWithoutUserInputObjectSchema } from './AccountingEquationCreateOrConnectWithoutUserInput.schema';
import { AccountingEquationCreateManyUserInputEnvelopeObjectSchema as AccountingEquationCreateManyUserInputEnvelopeObjectSchema } from './AccountingEquationCreateManyUserInputEnvelope.schema';
import { AccountingEquationWhereUniqueInputObjectSchema as AccountingEquationWhereUniqueInputObjectSchema } from './AccountingEquationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AccountingEquationCreateWithoutUserInputObjectSchema), z.lazy(() => AccountingEquationCreateWithoutUserInputObjectSchema).array(), z.lazy(() => AccountingEquationUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => AccountingEquationUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AccountingEquationCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => AccountingEquationCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AccountingEquationCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AccountingEquationWhereUniqueInputObjectSchema), z.lazy(() => AccountingEquationWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AccountingEquationCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.AccountingEquationCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountingEquationCreateNestedManyWithoutUserInput>;
export const AccountingEquationCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
