import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { AccountingEquationUpdateManyWithoutOrganisationNestedInputObjectSchema as AccountingEquationUpdateManyWithoutOrganisationNestedInputObjectSchema } from './AccountingEquationUpdateManyWithoutOrganisationNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string().min(1, 'Organisation name cannot be empty'), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  accountingEquations: z.lazy(() => AccountingEquationUpdateManyWithoutOrganisationNestedInputObjectSchema).optional()
}).strict();
export const OrganisationUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.OrganisationUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationUpdateWithoutUserInput>;
export const OrganisationUpdateWithoutUserInputObjectZodSchema = makeSchema();
