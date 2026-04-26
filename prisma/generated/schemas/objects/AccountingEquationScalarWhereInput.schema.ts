import * as z from 'zod';
import { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const accountingequationscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AccountingEquationScalarWhereInputObjectSchema), z.lazy(() => AccountingEquationScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AccountingEquationScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AccountingEquationScalarWhereInputObjectSchema), z.lazy(() => AccountingEquationScalarWhereInputObjectSchema).array()]).optional(),
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
  asOf: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  organisationId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const AccountingEquationScalarWhereInputObjectSchema: z.ZodType<Prisma.AccountingEquationScalarWhereInput> = accountingequationscalarwhereinputSchema as unknown as z.ZodType<Prisma.AccountingEquationScalarWhereInput>;
export const AccountingEquationScalarWhereInputObjectZodSchema = accountingequationscalarwhereinputSchema;
