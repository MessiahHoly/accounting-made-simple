import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const OrganisationWhereUniqueInputObjectSchema: z.ZodType<Prisma.OrganisationWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationWhereUniqueInput>;
export const OrganisationWhereUniqueInputObjectZodSchema = makeSchema();
