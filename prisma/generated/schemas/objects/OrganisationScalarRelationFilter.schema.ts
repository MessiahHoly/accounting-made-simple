import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OrganisationWhereInputObjectSchema as OrganisationWhereInputObjectSchema } from './OrganisationWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => OrganisationWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => OrganisationWhereInputObjectSchema).optional()
}).strict();
export const OrganisationScalarRelationFilterObjectSchema: z.ZodType<Prisma.OrganisationScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationScalarRelationFilter>;
export const OrganisationScalarRelationFilterObjectZodSchema = makeSchema();
