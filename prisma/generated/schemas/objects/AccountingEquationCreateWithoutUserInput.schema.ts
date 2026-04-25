import * as z from 'zod';
import { Prisma } from '../../../../generated/prisma/client';
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
  updatedAt: z.coerce.date().optional(),
  organisation: z.lazy(() => OrganisationCreateNestedOneWithoutAccountingEquationsInputObjectSchema)
}).strict();
export const AccountingEquationCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.AccountingEquationCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountingEquationCreateWithoutUserInput>;
export const AccountingEquationCreateWithoutUserInputObjectZodSchema = makeSchema();
