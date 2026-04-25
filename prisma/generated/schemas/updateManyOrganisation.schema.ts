import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { OrganisationUpdateManyMutationInputObjectSchema as OrganisationUpdateManyMutationInputObjectSchema } from './objects/OrganisationUpdateManyMutationInput.schema';
import { OrganisationWhereInputObjectSchema as OrganisationWhereInputObjectSchema } from './objects/OrganisationWhereInput.schema';

export const OrganisationUpdateManySchema: z.ZodType<Prisma.OrganisationUpdateManyArgs> = z.object({ data: OrganisationUpdateManyMutationInputObjectSchema, where: OrganisationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.OrganisationUpdateManyArgs>;

export const OrganisationUpdateManyZodSchema = z.object({ data: OrganisationUpdateManyMutationInputObjectSchema, where: OrganisationWhereInputObjectSchema.optional() }).strict();