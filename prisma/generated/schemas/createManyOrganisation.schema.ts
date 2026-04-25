import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { OrganisationCreateManyInputObjectSchema as OrganisationCreateManyInputObjectSchema } from './objects/OrganisationCreateManyInput.schema';

export const OrganisationCreateManySchema: z.ZodType<Prisma.OrganisationCreateManyArgs> = z.object({ data: z.union([ OrganisationCreateManyInputObjectSchema, z.array(OrganisationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.OrganisationCreateManyArgs>;

export const OrganisationCreateManyZodSchema = z.object({ data: z.union([ OrganisationCreateManyInputObjectSchema, z.array(OrganisationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();