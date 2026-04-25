import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AccountingEquationWhereUniqueInputObjectSchema as AccountingEquationWhereUniqueInputObjectSchema } from './AccountingEquationWhereUniqueInput.schema';
import { AccountingEquationCreateWithoutUserInputObjectSchema as AccountingEquationCreateWithoutUserInputObjectSchema } from './AccountingEquationCreateWithoutUserInput.schema';
import { AccountingEquationUncheckedCreateWithoutUserInputObjectSchema as AccountingEquationUncheckedCreateWithoutUserInputObjectSchema } from './AccountingEquationUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AccountingEquationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AccountingEquationCreateWithoutUserInputObjectSchema), z.lazy(() => AccountingEquationUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const AccountingEquationCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.AccountingEquationCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountingEquationCreateOrConnectWithoutUserInput>;
export const AccountingEquationCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
