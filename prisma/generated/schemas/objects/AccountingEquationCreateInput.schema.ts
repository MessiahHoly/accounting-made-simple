import * as z from 'zod';
import { Prisma } from '../../../../generated/prisma/client';
import { UserCreateNestedOneWithoutAccountingEquationsInputObjectSchema as UserCreateNestedOneWithoutAccountingEquationsInputObjectSchema } from './UserCreateNestedOneWithoutAccountingEquationsInput.schema';
import { OrganisationCreateNestedOneWithoutAccountingEquationsInputObjectSchema as OrganisationCreateNestedOneWithoutAccountingEquationsInputObjectSchema } from './OrganisationCreateNestedOneWithoutAccountingEquationsInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.string().optional(),
  assets: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'assets' must be a Decimal",
}),
  liabilities: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'liabilities' must be a Decimal",
}),
  ownersEquity: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'ownersEquity' must be a Decimal",
}),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAccountingEquationsInputObjectSchema),
  organisation: z.lazy(() => OrganisationCreateNestedOneWithoutAccountingEquationsInputObjectSchema)
}).strict();
export const AccountingEquationCreateInputObjectSchema: z.ZodType<Prisma.AccountingEquationCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountingEquationCreateInput>;
export const AccountingEquationCreateInputObjectZodSchema = makeSchema();
