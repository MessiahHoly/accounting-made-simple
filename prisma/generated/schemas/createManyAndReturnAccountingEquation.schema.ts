import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AccountingEquationSelectObjectSchema as AccountingEquationSelectObjectSchema } from './objects/AccountingEquationSelect.schema';
import { AccountingEquationCreateManyInputObjectSchema as AccountingEquationCreateManyInputObjectSchema } from './objects/AccountingEquationCreateManyInput.schema';

export const AccountingEquationCreateManyAndReturnSchema: z.ZodType<Prisma.AccountingEquationCreateManyAndReturnArgs> = z.object({ select: AccountingEquationSelectObjectSchema.optional(), data: z.union([ AccountingEquationCreateManyInputObjectSchema, z.array(AccountingEquationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AccountingEquationCreateManyAndReturnArgs>;

export const AccountingEquationCreateManyAndReturnZodSchema = z.object({ select: AccountingEquationSelectObjectSchema.optional(), data: z.union([ AccountingEquationCreateManyInputObjectSchema, z.array(AccountingEquationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();