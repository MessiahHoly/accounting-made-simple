import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AccountingEquationCreateNestedManyWithoutOrganisationInputObjectSchema as AccountingEquationCreateNestedManyWithoutOrganisationInputObjectSchema } from './AccountingEquationCreateNestedManyWithoutOrganisationInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'Organisation name cannot be empty'),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accountingEquations: z.lazy(() => AccountingEquationCreateNestedManyWithoutOrganisationInputObjectSchema).optional()
}).strict();
export const OrganisationCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.OrganisationCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationCreateWithoutUserInput>;
export const OrganisationCreateWithoutUserInputObjectZodSchema = makeSchema();
