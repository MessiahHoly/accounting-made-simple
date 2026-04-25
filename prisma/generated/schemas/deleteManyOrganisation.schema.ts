import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { OrganisationWhereInputObjectSchema as OrganisationWhereInputObjectSchema } from './objects/OrganisationWhereInput.schema';

export const OrganisationDeleteManySchema: z.ZodType<Prisma.OrganisationDeleteManyArgs> = z.object({ where: OrganisationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.OrganisationDeleteManyArgs>;

export const OrganisationDeleteManyZodSchema = z.object({ where: OrganisationWhereInputObjectSchema.optional() }).strict();