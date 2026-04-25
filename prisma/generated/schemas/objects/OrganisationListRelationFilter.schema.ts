import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OrganisationWhereInputObjectSchema as OrganisationWhereInputObjectSchema } from './OrganisationWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => OrganisationWhereInputObjectSchema).optional(),
  some: z.lazy(() => OrganisationWhereInputObjectSchema).optional(),
  none: z.lazy(() => OrganisationWhereInputObjectSchema).optional()
}).strict();
export const OrganisationListRelationFilterObjectSchema: z.ZodType<Prisma.OrganisationListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationListRelationFilter>;
export const OrganisationListRelationFilterObjectZodSchema = makeSchema();
