import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OrganisationCountOutputTypeSelectObjectSchema as OrganisationCountOutputTypeSelectObjectSchema } from './OrganisationCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => OrganisationCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const OrganisationCountOutputTypeArgsObjectSchema = makeSchema();
export const OrganisationCountOutputTypeArgsObjectZodSchema = makeSchema();
