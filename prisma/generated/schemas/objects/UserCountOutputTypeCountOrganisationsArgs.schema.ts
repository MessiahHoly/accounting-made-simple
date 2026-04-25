import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OrganisationWhereInputObjectSchema as OrganisationWhereInputObjectSchema } from './OrganisationWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganisationWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountOrganisationsArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountOrganisationsArgsObjectZodSchema = makeSchema();
