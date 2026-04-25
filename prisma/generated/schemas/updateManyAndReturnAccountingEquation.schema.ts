import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AccountingEquationSelectObjectSchema as AccountingEquationSelectObjectSchema } from './objects/AccountingEquationSelect.schema';
import { AccountingEquationUpdateManyMutationInputObjectSchema as AccountingEquationUpdateManyMutationInputObjectSchema } from './objects/AccountingEquationUpdateManyMutationInput.schema';
import { AccountingEquationWhereInputObjectSchema as AccountingEquationWhereInputObjectSchema } from './objects/AccountingEquationWhereInput.schema';

export const AccountingEquationUpdateManyAndReturnSchema: z.ZodType<Prisma.AccountingEquationUpdateManyAndReturnArgs> = z.object({ select: AccountingEquationSelectObjectSchema.optional(), data: AccountingEquationUpdateManyMutationInputObjectSchema, where: AccountingEquationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AccountingEquationUpdateManyAndReturnArgs>;

export const AccountingEquationUpdateManyAndReturnZodSchema = z.object({ select: AccountingEquationSelectObjectSchema.optional(), data: AccountingEquationUpdateManyMutationInputObjectSchema, where: AccountingEquationWhereInputObjectSchema.optional() }).strict();