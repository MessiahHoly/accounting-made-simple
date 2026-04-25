import * as z from 'zod';
import { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { OrganisationScalarRelationFilterObjectSchema as OrganisationScalarRelationFilterObjectSchema } from './OrganisationScalarRelationFilter.schema';
import { OrganisationWhereInputObjectSchema as OrganisationWhereInputObjectSchema } from './OrganisationWhereInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const accountingequationwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AccountingEquationWhereInputObjectSchema), z.lazy(() => AccountingEquationWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AccountingEquationWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AccountingEquationWhereInputObjectSchema), z.lazy(() => AccountingEquationWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  assets: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'assets' must be a Decimal",
})]).optional(),
  liabilities: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'liabilities' must be a Decimal",
})]).optional(),
  ownersEquity: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'ownersEquity' must be a Decimal",
})]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  organisationId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  organisation: z.union([z.lazy(() => OrganisationScalarRelationFilterObjectSchema), z.lazy(() => OrganisationWhereInputObjectSchema)]).optional()
}).strict();
export const AccountingEquationWhereInputObjectSchema: z.ZodType<Prisma.AccountingEquationWhereInput> = accountingequationwhereinputSchema as unknown as z.ZodType<Prisma.AccountingEquationWhereInput>;
export const AccountingEquationWhereInputObjectZodSchema = accountingequationwhereinputSchema;
