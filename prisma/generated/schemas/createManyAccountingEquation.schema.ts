import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AccountingEquationCreateManyInputObjectSchema as AccountingEquationCreateManyInputObjectSchema } from './objects/AccountingEquationCreateManyInput.schema';

export const AccountingEquationCreateManySchema: z.ZodType<Prisma.AccountingEquationCreateManyArgs> = z.object({ data: z.union([ AccountingEquationCreateManyInputObjectSchema, z.array(AccountingEquationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AccountingEquationCreateManyArgs>;

export const AccountingEquationCreateManyZodSchema = z.object({ data: z.union([ AccountingEquationCreateManyInputObjectSchema, z.array(AccountingEquationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();