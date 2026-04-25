import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  userId: z.literal(true).optional()
}).strict();
export const OrganisationMaxAggregateInputObjectSchema: z.ZodType<Prisma.OrganisationMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationMaxAggregateInputType>;
export const OrganisationMaxAggregateInputObjectZodSchema = makeSchema();
