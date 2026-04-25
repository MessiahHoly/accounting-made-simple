import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AccountingEquationWhereUniqueInputObjectSchema as AccountingEquationWhereUniqueInputObjectSchema } from './AccountingEquationWhereUniqueInput.schema';
import { AccountingEquationUpdateWithoutUserInputObjectSchema as AccountingEquationUpdateWithoutUserInputObjectSchema } from './AccountingEquationUpdateWithoutUserInput.schema';
import { AccountingEquationUncheckedUpdateWithoutUserInputObjectSchema as AccountingEquationUncheckedUpdateWithoutUserInputObjectSchema } from './AccountingEquationUncheckedUpdateWithoutUserInput.schema';
import { AccountingEquationCreateWithoutUserInputObjectSchema as AccountingEquationCreateWithoutUserInputObjectSchema } from './AccountingEquationCreateWithoutUserInput.schema';
import { AccountingEquationUncheckedCreateWithoutUserInputObjectSchema as AccountingEquationUncheckedCreateWithoutUserInputObjectSchema } from './AccountingEquationUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AccountingEquationWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AccountingEquationUpdateWithoutUserInputObjectSchema), z.lazy(() => AccountingEquationUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => AccountingEquationCreateWithoutUserInputObjectSchema), z.lazy(() => AccountingEquationUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const AccountingEquationUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.AccountingEquationUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountingEquationUpsertWithWhereUniqueWithoutUserInput>;
export const AccountingEquationUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
