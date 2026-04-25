import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'Organisation name cannot be empty'),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const OrganisationCreateManyUserInputObjectSchema: z.ZodType<Prisma.OrganisationCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationCreateManyUserInput>;
export const OrganisationCreateManyUserInputObjectZodSchema = makeSchema();
