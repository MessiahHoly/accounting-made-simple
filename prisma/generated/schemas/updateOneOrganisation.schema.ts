import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { OrganisationSelectObjectSchema as OrganisationSelectObjectSchema } from './objects/OrganisationSelect.schema';
import { OrganisationIncludeObjectSchema as OrganisationIncludeObjectSchema } from './objects/OrganisationInclude.schema';
import { OrganisationUpdateInputObjectSchema as OrganisationUpdateInputObjectSchema } from './objects/OrganisationUpdateInput.schema';
import { OrganisationUncheckedUpdateInputObjectSchema as OrganisationUncheckedUpdateInputObjectSchema } from './objects/OrganisationUncheckedUpdateInput.schema';
import { OrganisationWhereUniqueInputObjectSchema as OrganisationWhereUniqueInputObjectSchema } from './objects/OrganisationWhereUniqueInput.schema';

export const OrganisationUpdateOneSchema: z.ZodType<Prisma.OrganisationUpdateArgs> = z.object({ select: OrganisationSelectObjectSchema.optional(), include: OrganisationIncludeObjectSchema.optional(), data: z.union([OrganisationUpdateInputObjectSchema, OrganisationUncheckedUpdateInputObjectSchema]), where: OrganisationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OrganisationUpdateArgs>;

export const OrganisationUpdateOneZodSchema = z.object({ select: OrganisationSelectObjectSchema.optional(), include: OrganisationIncludeObjectSchema.optional(), data: z.union([OrganisationUpdateInputObjectSchema, OrganisationUncheckedUpdateInputObjectSchema]), where: OrganisationWhereUniqueInputObjectSchema }).strict();