import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AccountingEquationSelectObjectSchema as AccountingEquationSelectObjectSchema } from './objects/AccountingEquationSelect.schema';
import { AccountingEquationIncludeObjectSchema as AccountingEquationIncludeObjectSchema } from './objects/AccountingEquationInclude.schema';
import { AccountingEquationWhereUniqueInputObjectSchema as AccountingEquationWhereUniqueInputObjectSchema } from './objects/AccountingEquationWhereUniqueInput.schema';

export const AccountingEquationFindUniqueSchema: z.ZodType<Prisma.AccountingEquationFindUniqueArgs> = z.object({ select: AccountingEquationSelectObjectSchema.optional(), include: AccountingEquationIncludeObjectSchema.optional(), where: AccountingEquationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AccountingEquationFindUniqueArgs>;

export const AccountingEquationFindUniqueZodSchema = z.object({ select: AccountingEquationSelectObjectSchema.optional(), include: AccountingEquationIncludeObjectSchema.optional(), where: AccountingEquationWhereUniqueInputObjectSchema }).strict();