import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OrganisationCountOutputTypeCountAccountingEquationsArgsObjectSchema as OrganisationCountOutputTypeCountAccountingEquationsArgsObjectSchema } from './OrganisationCountOutputTypeCountAccountingEquationsArgs.schema'

const makeSchema = () => z.object({
  accountingEquations: z.union([z.boolean(), z.lazy(() => OrganisationCountOutputTypeCountAccountingEquationsArgsObjectSchema)]).optional()
}).strict();
export const OrganisationCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.OrganisationCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationCountOutputTypeSelect>;
export const OrganisationCountOutputTypeSelectObjectZodSchema = makeSchema();
