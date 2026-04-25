import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { OrganisationSelectObjectSchema as OrganisationSelectObjectSchema } from './objects/OrganisationSelect.schema';
import { OrganisationCreateManyInputObjectSchema as OrganisationCreateManyInputObjectSchema } from './objects/OrganisationCreateManyInput.schema';

export const OrganisationCreateManyAndReturnSchema: z.ZodType<Prisma.OrganisationCreateManyAndReturnArgs> = z.object({ select: OrganisationSelectObjectSchema.optional(), data: z.union([ OrganisationCreateManyInputObjectSchema, z.array(OrganisationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.OrganisationCreateManyAndReturnArgs>;

export const OrganisationCreateManyAndReturnZodSchema = z.object({ select: OrganisationSelectObjectSchema.optional(), data: z.union([ OrganisationCreateManyInputObjectSchema, z.array(OrganisationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();