import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AccountingEquationWhereUniqueInputObjectSchema as AccountingEquationWhereUniqueInputObjectSchema } from './AccountingEquationWhereUniqueInput.schema';
import { AccountingEquationUpdateWithoutUserInputObjectSchema as AccountingEquationUpdateWithoutUserInputObjectSchema } from './AccountingEquationUpdateWithoutUserInput.schema';
import { AccountingEquationUncheckedUpdateWithoutUserInputObjectSchema as AccountingEquationUncheckedUpdateWithoutUserInputObjectSchema } from './AccountingEquationUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AccountingEquationWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AccountingEquationUpdateWithoutUserInputObjectSchema), z.lazy(() => AccountingEquationUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const AccountingEquationUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.AccountingEquationUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountingEquationUpdateWithWhereUniqueWithoutUserInput>;
export const AccountingEquationUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
