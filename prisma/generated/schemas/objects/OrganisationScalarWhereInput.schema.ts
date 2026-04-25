import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const organisationscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => OrganisationScalarWhereInputObjectSchema), z.lazy(() => OrganisationScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OrganisationScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OrganisationScalarWhereInputObjectSchema), z.lazy(() => OrganisationScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const OrganisationScalarWhereInputObjectSchema: z.ZodType<Prisma.OrganisationScalarWhereInput> = organisationscalarwhereinputSchema as unknown as z.ZodType<Prisma.OrganisationScalarWhereInput>;
export const OrganisationScalarWhereInputObjectZodSchema = organisationscalarwhereinputSchema;
