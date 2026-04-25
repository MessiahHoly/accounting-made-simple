import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserCreateNestedOneWithoutOrganisationsInputObjectSchema as UserCreateNestedOneWithoutOrganisationsInputObjectSchema } from './UserCreateNestedOneWithoutOrganisationsInput.schema';
import { AccountingEquationCreateNestedManyWithoutOrganisationInputObjectSchema as AccountingEquationCreateNestedManyWithoutOrganisationInputObjectSchema } from './AccountingEquationCreateNestedManyWithoutOrganisationInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'Organisation name cannot be empty'),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutOrganisationsInputObjectSchema),
  accountingEquations: z.lazy(() => AccountingEquationCreateNestedManyWithoutOrganisationInputObjectSchema).optional()
}).strict();
export const OrganisationCreateInputObjectSchema: z.ZodType<Prisma.OrganisationCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationCreateInput>;
export const OrganisationCreateInputObjectZodSchema = makeSchema();
