import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AccountingEquationUncheckedCreateNestedManyWithoutOrganisationInputObjectSchema as AccountingEquationUncheckedCreateNestedManyWithoutOrganisationInputObjectSchema } from './AccountingEquationUncheckedCreateNestedManyWithoutOrganisationInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'Organisation name cannot be empty'),
  createdAt: z.coerce.date().optional(),
  userId: z.string(),
  accountingEquations: z.lazy(() => AccountingEquationUncheckedCreateNestedManyWithoutOrganisationInputObjectSchema).optional()
}).strict();
export const OrganisationUncheckedCreateInputObjectSchema: z.ZodType<Prisma.OrganisationUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationUncheckedCreateInput>;
export const OrganisationUncheckedCreateInputObjectZodSchema = makeSchema();
