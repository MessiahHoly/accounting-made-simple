import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AccountingEquationIncludeObjectSchema as AccountingEquationIncludeObjectSchema } from './objects/AccountingEquationInclude.schema';
import { AccountingEquationOrderByWithRelationInputObjectSchema as AccountingEquationOrderByWithRelationInputObjectSchema } from './objects/AccountingEquationOrderByWithRelationInput.schema';
import { AccountingEquationWhereInputObjectSchema as AccountingEquationWhereInputObjectSchema } from './objects/AccountingEquationWhereInput.schema';
import { AccountingEquationWhereUniqueInputObjectSchema as AccountingEquationWhereUniqueInputObjectSchema } from './objects/AccountingEquationWhereUniqueInput.schema';
import { AccountingEquationScalarFieldEnumSchema } from './enums/AccountingEquationScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AccountingEquationFindManySelectSchema: z.ZodType<Prisma.AccountingEquationSelect> = z.object({
    id: z.boolean().optional(),
    assets: z.boolean().optional(),
    liabilities: z.boolean().optional(),
    ownersEquity: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    organisationId: z.boolean().optional(),
    organisation: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AccountingEquationSelect>;

export const AccountingEquationFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    assets: z.boolean().optional(),
    liabilities: z.boolean().optional(),
    ownersEquity: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    organisationId: z.boolean().optional(),
    organisation: z.boolean().optional()
  }).strict();

export const AccountingEquationFindManySchema: z.ZodType<Prisma.AccountingEquationFindManyArgs> = z.object({ select: AccountingEquationFindManySelectSchema.optional(), include: z.lazy(() => AccountingEquationIncludeObjectSchema.optional()), orderBy: z.union([AccountingEquationOrderByWithRelationInputObjectSchema, AccountingEquationOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountingEquationWhereInputObjectSchema.optional(), cursor: AccountingEquationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AccountingEquationScalarFieldEnumSchema, AccountingEquationScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AccountingEquationFindManyArgs>;

export const AccountingEquationFindManyZodSchema = z.object({ select: AccountingEquationFindManySelectSchema.optional(), include: z.lazy(() => AccountingEquationIncludeObjectSchema.optional()), orderBy: z.union([AccountingEquationOrderByWithRelationInputObjectSchema, AccountingEquationOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountingEquationWhereInputObjectSchema.optional(), cursor: AccountingEquationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AccountingEquationScalarFieldEnumSchema, AccountingEquationScalarFieldEnumSchema.array()]).optional() }).strict();