import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AccountingEquationSelectObjectSchema as AccountingEquationSelectObjectSchema } from './objects/AccountingEquationSelect.schema';
import { AccountingEquationIncludeObjectSchema as AccountingEquationIncludeObjectSchema } from './objects/AccountingEquationInclude.schema';
import { AccountingEquationUpdateInputObjectSchema as AccountingEquationUpdateInputObjectSchema } from './objects/AccountingEquationUpdateInput.schema';
import { AccountingEquationUncheckedUpdateInputObjectSchema as AccountingEquationUncheckedUpdateInputObjectSchema } from './objects/AccountingEquationUncheckedUpdateInput.schema';
import { AccountingEquationWhereUniqueInputObjectSchema as AccountingEquationWhereUniqueInputObjectSchema } from './objects/AccountingEquationWhereUniqueInput.schema';

export const AccountingEquationUpdateOneSchema: z.ZodType<Prisma.AccountingEquationUpdateArgs> = z.object({ select: AccountingEquationSelectObjectSchema.optional(), include: AccountingEquationIncludeObjectSchema.optional(), data: z.union([AccountingEquationUpdateInputObjectSchema, AccountingEquationUncheckedUpdateInputObjectSchema]), where: AccountingEquationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AccountingEquationUpdateArgs>;

export const AccountingEquationUpdateOneZodSchema = z.object({ select: AccountingEquationSelectObjectSchema.optional(), include: AccountingEquationIncludeObjectSchema.optional(), data: z.union([AccountingEquationUpdateInputObjectSchema, AccountingEquationUncheckedUpdateInputObjectSchema]), where: AccountingEquationWhereUniqueInputObjectSchema }).strict();