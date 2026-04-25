import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AccountingEquationWhereInputObjectSchema as AccountingEquationWhereInputObjectSchema } from './objects/AccountingEquationWhereInput.schema';

export const AccountingEquationDeleteManySchema: z.ZodType<Prisma.AccountingEquationDeleteManyArgs> = z.object({ where: AccountingEquationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AccountingEquationDeleteManyArgs>;

export const AccountingEquationDeleteManyZodSchema = z.object({ where: AccountingEquationWhereInputObjectSchema.optional() }).strict();