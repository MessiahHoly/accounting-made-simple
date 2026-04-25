import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { OrganisationSelectObjectSchema as OrganisationSelectObjectSchema } from './objects/OrganisationSelect.schema';
import { OrganisationIncludeObjectSchema as OrganisationIncludeObjectSchema } from './objects/OrganisationInclude.schema';
import { OrganisationWhereUniqueInputObjectSchema as OrganisationWhereUniqueInputObjectSchema } from './objects/OrganisationWhereUniqueInput.schema';

export const OrganisationFindUniqueOrThrowSchema: z.ZodType<Prisma.OrganisationFindUniqueOrThrowArgs> = z.object({ select: OrganisationSelectObjectSchema.optional(), include: OrganisationIncludeObjectSchema.optional(), where: OrganisationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OrganisationFindUniqueOrThrowArgs>;

export const OrganisationFindUniqueOrThrowZodSchema = z.object({ select: OrganisationSelectObjectSchema.optional(), include: OrganisationIncludeObjectSchema.optional(), where: OrganisationWhereUniqueInputObjectSchema }).strict();