import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { OrganisationOrderByWithRelationInputObjectSchema as OrganisationOrderByWithRelationInputObjectSchema } from './objects/OrganisationOrderByWithRelationInput.schema';
import { OrganisationWhereInputObjectSchema as OrganisationWhereInputObjectSchema } from './objects/OrganisationWhereInput.schema';
import { OrganisationWhereUniqueInputObjectSchema as OrganisationWhereUniqueInputObjectSchema } from './objects/OrganisationWhereUniqueInput.schema';
import { OrganisationCountAggregateInputObjectSchema as OrganisationCountAggregateInputObjectSchema } from './objects/OrganisationCountAggregateInput.schema';

export const OrganisationCountSchema: z.ZodType<Prisma.OrganisationCountArgs> = z.object({ orderBy: z.union([OrganisationOrderByWithRelationInputObjectSchema, OrganisationOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrganisationWhereInputObjectSchema.optional(), cursor: OrganisationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), OrganisationCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.OrganisationCountArgs>;

export const OrganisationCountZodSchema = z.object({ orderBy: z.union([OrganisationOrderByWithRelationInputObjectSchema, OrganisationOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrganisationWhereInputObjectSchema.optional(), cursor: OrganisationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), OrganisationCountAggregateInputObjectSchema ]).optional() }).strict();