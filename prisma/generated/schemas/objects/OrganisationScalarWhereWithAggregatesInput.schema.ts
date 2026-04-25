import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const organisationscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => OrganisationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => OrganisationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OrganisationScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OrganisationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => OrganisationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().min(1, 'Organisation name cannot be empty')]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const OrganisationScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.OrganisationScalarWhereWithAggregatesInput> = organisationscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.OrganisationScalarWhereWithAggregatesInput>;
export const OrganisationScalarWhereWithAggregatesInputObjectZodSchema = organisationscalarwherewithaggregatesinputSchema;
