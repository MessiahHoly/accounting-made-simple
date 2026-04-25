import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { AccountingEquationUncheckedUpdateManyWithoutOrganisationNestedInputObjectSchema as AccountingEquationUncheckedUpdateManyWithoutOrganisationNestedInputObjectSchema } from './AccountingEquationUncheckedUpdateManyWithoutOrganisationNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  accountingEquations: z.lazy(() => AccountingEquationUncheckedUpdateManyWithoutOrganisationNestedInputObjectSchema).optional()
}).strict();
export const OrganisationUncheckedUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.OrganisationUncheckedUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationUncheckedUpdateWithoutUserInput>;
export const OrganisationUncheckedUpdateWithoutUserInputObjectZodSchema = makeSchema();
