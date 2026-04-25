import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { OrganisationSelectObjectSchema as OrganisationSelectObjectSchema } from './objects/OrganisationSelect.schema';
import { OrganisationIncludeObjectSchema as OrganisationIncludeObjectSchema } from './objects/OrganisationInclude.schema';
import { OrganisationCreateInputObjectSchema as OrganisationCreateInputObjectSchema } from './objects/OrganisationCreateInput.schema';
import { OrganisationUncheckedCreateInputObjectSchema as OrganisationUncheckedCreateInputObjectSchema } from './objects/OrganisationUncheckedCreateInput.schema';

export const OrganisationCreateOneSchema: z.ZodType<Prisma.OrganisationCreateArgs> = z.object({ select: OrganisationSelectObjectSchema.optional(), include: OrganisationIncludeObjectSchema.optional(), data: z.union([OrganisationCreateInputObjectSchema, OrganisationUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.OrganisationCreateArgs>;

export const OrganisationCreateOneZodSchema = z.object({ select: OrganisationSelectObjectSchema.optional(), include: OrganisationIncludeObjectSchema.optional(), data: z.union([OrganisationCreateInputObjectSchema, OrganisationUncheckedCreateInputObjectSchema]) }).strict();