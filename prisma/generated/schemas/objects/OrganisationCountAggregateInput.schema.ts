import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const OrganisationCountAggregateInputObjectSchema: z.ZodType<Prisma.OrganisationCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationCountAggregateInputType>;
export const OrganisationCountAggregateInputObjectZodSchema = makeSchema();
