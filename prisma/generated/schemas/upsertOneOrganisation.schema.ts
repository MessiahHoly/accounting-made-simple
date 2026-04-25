import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { OrganisationSelectObjectSchema as OrganisationSelectObjectSchema } from './objects/OrganisationSelect.schema';
import { OrganisationIncludeObjectSchema as OrganisationIncludeObjectSchema } from './objects/OrganisationInclude.schema';
import { OrganisationWhereUniqueInputObjectSchema as OrganisationWhereUniqueInputObjectSchema } from './objects/OrganisationWhereUniqueInput.schema';
import { OrganisationCreateInputObjectSchema as OrganisationCreateInputObjectSchema } from './objects/OrganisationCreateInput.schema';
import { OrganisationUncheckedCreateInputObjectSchema as OrganisationUncheckedCreateInputObjectSchema } from './objects/OrganisationUncheckedCreateInput.schema';
import { OrganisationUpdateInputObjectSchema as OrganisationUpdateInputObjectSchema } from './objects/OrganisationUpdateInput.schema';
import { OrganisationUncheckedUpdateInputObjectSchema as OrganisationUncheckedUpdateInputObjectSchema } from './objects/OrganisationUncheckedUpdateInput.schema';

export const OrganisationUpsertOneSchema: z.ZodType<Prisma.OrganisationUpsertArgs> = z.object({ select: OrganisationSelectObjectSchema.optional(), include: OrganisationIncludeObjectSchema.optional(), where: OrganisationWhereUniqueInputObjectSchema, create: z.union([ OrganisationCreateInputObjectSchema, OrganisationUncheckedCreateInputObjectSchema ]), update: z.union([ OrganisationUpdateInputObjectSchema, OrganisationUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.OrganisationUpsertArgs>;

export const OrganisationUpsertOneZodSchema = z.object({ select: OrganisationSelectObjectSchema.optional(), include: OrganisationIncludeObjectSchema.optional(), where: OrganisationWhereUniqueInputObjectSchema, create: z.union([ OrganisationCreateInputObjectSchema, OrganisationUncheckedCreateInputObjectSchema ]), update: z.union([ OrganisationUpdateInputObjectSchema, OrganisationUncheckedUpdateInputObjectSchema ]) }).strict();