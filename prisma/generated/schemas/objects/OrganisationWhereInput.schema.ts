import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { AccountingEquationListRelationFilterObjectSchema as AccountingEquationListRelationFilterObjectSchema } from './AccountingEquationListRelationFilter.schema'

const organisationwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => OrganisationWhereInputObjectSchema), z.lazy(() => OrganisationWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OrganisationWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OrganisationWhereInputObjectSchema), z.lazy(() => OrganisationWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string().min(1, 'Organisation name cannot be empty')]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  accountingEquations: z.lazy(() => AccountingEquationListRelationFilterObjectSchema).optional()
}).strict();
export const OrganisationWhereInputObjectSchema: z.ZodType<Prisma.OrganisationWhereInput> = organisationwhereinputSchema as unknown as z.ZodType<Prisma.OrganisationWhereInput>;
export const OrganisationWhereInputObjectZodSchema = organisationwhereinputSchema;
