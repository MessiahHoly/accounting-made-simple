import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AccountingEquationSelectObjectSchema as AccountingEquationSelectObjectSchema } from './objects/AccountingEquationSelect.schema';
import { AccountingEquationIncludeObjectSchema as AccountingEquationIncludeObjectSchema } from './objects/AccountingEquationInclude.schema';
import { AccountingEquationWhereUniqueInputObjectSchema as AccountingEquationWhereUniqueInputObjectSchema } from './objects/AccountingEquationWhereUniqueInput.schema';

export const AccountingEquationDeleteOneSchema: z.ZodType<Prisma.AccountingEquationDeleteArgs> = z.object({ select: AccountingEquationSelectObjectSchema.optional(), include: AccountingEquationIncludeObjectSchema.optional(), where: AccountingEquationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AccountingEquationDeleteArgs>;

export const AccountingEquationDeleteOneZodSchema = z.object({ select: AccountingEquationSelectObjectSchema.optional(), include: AccountingEquationIncludeObjectSchema.optional(), where: AccountingEquationWhereUniqueInputObjectSchema }).strict();