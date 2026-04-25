import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  userId: z.literal(true).optional()
}).strict();
export const OrganisationMinAggregateInputObjectSchema: z.ZodType<Prisma.OrganisationMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationMinAggregateInputType>;
export const OrganisationMinAggregateInputObjectZodSchema = makeSchema();
