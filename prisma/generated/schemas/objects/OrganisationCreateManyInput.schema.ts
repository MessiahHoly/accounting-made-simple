import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'Organisation name cannot be empty'),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string()
}).strict();
export const OrganisationCreateManyInputObjectSchema: z.ZodType<Prisma.OrganisationCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationCreateManyInput>;
export const OrganisationCreateManyInputObjectZodSchema = makeSchema();
