import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AccountingEquationUncheckedCreateNestedManyWithoutOrganisationInputObjectSchema as AccountingEquationUncheckedCreateNestedManyWithoutOrganisationInputObjectSchema } from './AccountingEquationUncheckedCreateNestedManyWithoutOrganisationInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accountingEquations: z.lazy(() => AccountingEquationUncheckedCreateNestedManyWithoutOrganisationInputObjectSchema).optional()
}).strict();
export const OrganisationUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.OrganisationUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationUncheckedCreateWithoutUserInput>;
export const OrganisationUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
