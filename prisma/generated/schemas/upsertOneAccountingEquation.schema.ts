import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AccountingEquationSelectObjectSchema as AccountingEquationSelectObjectSchema } from './objects/AccountingEquationSelect.schema';
import { AccountingEquationIncludeObjectSchema as AccountingEquationIncludeObjectSchema } from './objects/AccountingEquationInclude.schema';
import { AccountingEquationWhereUniqueInputObjectSchema as AccountingEquationWhereUniqueInputObjectSchema } from './objects/AccountingEquationWhereUniqueInput.schema';
import { AccountingEquationCreateInputObjectSchema as AccountingEquationCreateInputObjectSchema } from './objects/AccountingEquationCreateInput.schema';
import { AccountingEquationUncheckedCreateInputObjectSchema as AccountingEquationUncheckedCreateInputObjectSchema } from './objects/AccountingEquationUncheckedCreateInput.schema';
import { AccountingEquationUpdateInputObjectSchema as AccountingEquationUpdateInputObjectSchema } from './objects/AccountingEquationUpdateInput.schema';
import { AccountingEquationUncheckedUpdateInputObjectSchema as AccountingEquationUncheckedUpdateInputObjectSchema } from './objects/AccountingEquationUncheckedUpdateInput.schema';

export const AccountingEquationUpsertOneSchema: z.ZodType<Prisma.AccountingEquationUpsertArgs> = z.object({ select: AccountingEquationSelectObjectSchema.optional(), include: AccountingEquationIncludeObjectSchema.optional(), where: AccountingEquationWhereUniqueInputObjectSchema, create: z.union([ AccountingEquationCreateInputObjectSchema, AccountingEquationUncheckedCreateInputObjectSchema ]), update: z.union([ AccountingEquationUpdateInputObjectSchema, AccountingEquationUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AccountingEquationUpsertArgs>;

export const AccountingEquationUpsertOneZodSchema = z.object({ select: AccountingEquationSelectObjectSchema.optional(), include: AccountingEquationIncludeObjectSchema.optional(), where: AccountingEquationWhereUniqueInputObjectSchema, create: z.union([ AccountingEquationCreateInputObjectSchema, AccountingEquationUncheckedCreateInputObjectSchema ]), update: z.union([ AccountingEquationUpdateInputObjectSchema, AccountingEquationUncheckedUpdateInputObjectSchema ]) }).strict();