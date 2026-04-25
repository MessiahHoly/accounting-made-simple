import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string()
}).strict();
export const OrganisationUncheckedCreateWithoutAccountingEquationsInputObjectSchema: z.ZodType<Prisma.OrganisationUncheckedCreateWithoutAccountingEquationsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationUncheckedCreateWithoutAccountingEquationsInput>;
export const OrganisationUncheckedCreateWithoutAccountingEquationsInputObjectZodSchema = makeSchema();
