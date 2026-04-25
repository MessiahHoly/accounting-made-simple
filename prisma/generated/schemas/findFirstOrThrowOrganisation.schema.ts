import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { OrganisationIncludeObjectSchema as OrganisationIncludeObjectSchema } from './objects/OrganisationInclude.schema';
import { OrganisationOrderByWithRelationInputObjectSchema as OrganisationOrderByWithRelationInputObjectSchema } from './objects/OrganisationOrderByWithRelationInput.schema';
import { OrganisationWhereInputObjectSchema as OrganisationWhereInputObjectSchema } from './objects/OrganisationWhereInput.schema';
import { OrganisationWhereUniqueInputObjectSchema as OrganisationWhereUniqueInputObjectSchema } from './objects/OrganisationWhereUniqueInput.schema';
import { OrganisationScalarFieldEnumSchema } from './enums/OrganisationScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OrganisationFindFirstOrThrowSelectSchema: z.ZodType<Prisma.OrganisationSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    accountingEquations: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.OrganisationSelect>;

export const OrganisationFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    accountingEquations: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const OrganisationFindFirstOrThrowSchema: z.ZodType<Prisma.OrganisationFindFirstOrThrowArgs> = z.object({ select: OrganisationFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => OrganisationIncludeObjectSchema.optional()), orderBy: z.union([OrganisationOrderByWithRelationInputObjectSchema, OrganisationOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrganisationWhereInputObjectSchema.optional(), cursor: OrganisationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OrganisationScalarFieldEnumSchema, OrganisationScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.OrganisationFindFirstOrThrowArgs>;

export const OrganisationFindFirstOrThrowZodSchema = z.object({ select: OrganisationFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => OrganisationIncludeObjectSchema.optional()), orderBy: z.union([OrganisationOrderByWithRelationInputObjectSchema, OrganisationOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrganisationWhereInputObjectSchema.optional(), cursor: OrganisationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OrganisationScalarFieldEnumSchema, OrganisationScalarFieldEnumSchema.array()]).optional() }).strict();