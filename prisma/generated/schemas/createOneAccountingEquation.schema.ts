import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AccountingEquationSelectObjectSchema as AccountingEquationSelectObjectSchema } from './objects/AccountingEquationSelect.schema';
import { AccountingEquationIncludeObjectSchema as AccountingEquationIncludeObjectSchema } from './objects/AccountingEquationInclude.schema';
import { AccountingEquationCreateInputObjectSchema as AccountingEquationCreateInputObjectSchema } from './objects/AccountingEquationCreateInput.schema';
import { AccountingEquationUncheckedCreateInputObjectSchema as AccountingEquationUncheckedCreateInputObjectSchema } from './objects/AccountingEquationUncheckedCreateInput.schema';

export const AccountingEquationCreateOneSchema: z.ZodType<Prisma.AccountingEquationCreateArgs> = z.object({ select: AccountingEquationSelectObjectSchema.optional(), include: AccountingEquationIncludeObjectSchema.optional(), data: z.union([AccountingEquationCreateInputObjectSchema, AccountingEquationUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AccountingEquationCreateArgs>;

export const AccountingEquationCreateOneZodSchema = z.object({ select: AccountingEquationSelectObjectSchema.optional(), include: AccountingEquationIncludeObjectSchema.optional(), data: z.union([AccountingEquationCreateInputObjectSchema, AccountingEquationUncheckedCreateInputObjectSchema]) }).strict();