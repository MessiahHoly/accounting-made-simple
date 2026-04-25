import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OrganisationCreateManyUserInputObjectSchema as OrganisationCreateManyUserInputObjectSchema } from './OrganisationCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => OrganisationCreateManyUserInputObjectSchema), z.lazy(() => OrganisationCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const OrganisationCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.OrganisationCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationCreateManyUserInputEnvelope>;
export const OrganisationCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
