import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { OrganisationSelectObjectSchema as OrganisationSelectObjectSchema } from './objects/OrganisationSelect.schema';
import { OrganisationUpdateManyMutationInputObjectSchema as OrganisationUpdateManyMutationInputObjectSchema } from './objects/OrganisationUpdateManyMutationInput.schema';
import { OrganisationWhereInputObjectSchema as OrganisationWhereInputObjectSchema } from './objects/OrganisationWhereInput.schema';

export const OrganisationUpdateManyAndReturnSchema: z.ZodType<Prisma.OrganisationUpdateManyAndReturnArgs> = z.object({ select: OrganisationSelectObjectSchema.optional(), data: OrganisationUpdateManyMutationInputObjectSchema, where: OrganisationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.OrganisationUpdateManyAndReturnArgs>;

export const OrganisationUpdateManyAndReturnZodSchema = z.object({ select: OrganisationSelectObjectSchema.optional(), data: OrganisationUpdateManyMutationInputObjectSchema, where: OrganisationWhereInputObjectSchema.optional() }).strict();