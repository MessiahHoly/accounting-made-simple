import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OrganisationSelectObjectSchema as OrganisationSelectObjectSchema } from './OrganisationSelect.schema';
import { OrganisationIncludeObjectSchema as OrganisationIncludeObjectSchema } from './OrganisationInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => OrganisationSelectObjectSchema).optional(),
  include: z.lazy(() => OrganisationIncludeObjectSchema).optional()
}).strict();
export const OrganisationArgsObjectSchema = makeSchema();
export const OrganisationArgsObjectZodSchema = makeSchema();
