import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutOrganisationsNestedInputObjectSchema as UserUpdateOneRequiredWithoutOrganisationsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutOrganisationsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string().min(1, 'Organisation name cannot be empty'), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutOrganisationsNestedInputObjectSchema).optional()
}).strict();
export const OrganisationUpdateWithoutAccountingEquationsInputObjectSchema: z.ZodType<Prisma.OrganisationUpdateWithoutAccountingEquationsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationUpdateWithoutAccountingEquationsInput>;
export const OrganisationUpdateWithoutAccountingEquationsInputObjectZodSchema = makeSchema();
