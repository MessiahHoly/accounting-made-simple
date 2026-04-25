import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AccountingEquationScalarWhereInputObjectSchema as AccountingEquationScalarWhereInputObjectSchema } from './AccountingEquationScalarWhereInput.schema';
import { AccountingEquationUpdateManyMutationInputObjectSchema as AccountingEquationUpdateManyMutationInputObjectSchema } from './AccountingEquationUpdateManyMutationInput.schema';
import { AccountingEquationUncheckedUpdateManyWithoutUserInputObjectSchema as AccountingEquationUncheckedUpdateManyWithoutUserInputObjectSchema } from './AccountingEquationUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AccountingEquationScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AccountingEquationUpdateManyMutationInputObjectSchema), z.lazy(() => AccountingEquationUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const AccountingEquationUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.AccountingEquationUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountingEquationUpdateManyWithWhereWithoutUserInput>;
export const AccountingEquationUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
