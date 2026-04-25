import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AccountingEquationUpdateManyMutationInputObjectSchema as AccountingEquationUpdateManyMutationInputObjectSchema } from './objects/AccountingEquationUpdateManyMutationInput.schema';
import { AccountingEquationWhereInputObjectSchema as AccountingEquationWhereInputObjectSchema } from './objects/AccountingEquationWhereInput.schema';

export const AccountingEquationUpdateManySchema: z.ZodType<Prisma.AccountingEquationUpdateManyArgs> = z.object({ data: AccountingEquationUpdateManyMutationInputObjectSchema, where: AccountingEquationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AccountingEquationUpdateManyArgs>;

export const AccountingEquationUpdateManyZodSchema = z.object({ data: AccountingEquationUpdateManyMutationInputObjectSchema, where: AccountingEquationWhereInputObjectSchema.optional() }).strict();