import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserCreateNestedOneWithoutOrganisationsInputObjectSchema as UserCreateNestedOneWithoutOrganisationsInputObjectSchema } from './UserCreateNestedOneWithoutOrganisationsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'Organisation name cannot be empty'),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutOrganisationsInputObjectSchema)
}).strict();
export const OrganisationCreateWithoutAccountingEquationsInputObjectSchema: z.ZodType<Prisma.OrganisationCreateWithoutAccountingEquationsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationCreateWithoutAccountingEquationsInput>;
export const OrganisationCreateWithoutAccountingEquationsInputObjectZodSchema = makeSchema();
