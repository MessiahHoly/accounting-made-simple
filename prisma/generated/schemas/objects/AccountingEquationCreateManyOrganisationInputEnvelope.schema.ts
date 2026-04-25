import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AccountingEquationCreateManyOrganisationInputObjectSchema as AccountingEquationCreateManyOrganisationInputObjectSchema } from './AccountingEquationCreateManyOrganisationInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AccountingEquationCreateManyOrganisationInputObjectSchema), z.lazy(() => AccountingEquationCreateManyOrganisationInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AccountingEquationCreateManyOrganisationInputEnvelopeObjectSchema: z.ZodType<Prisma.AccountingEquationCreateManyOrganisationInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AccountingEquationCreateManyOrganisationInputEnvelope>;
export const AccountingEquationCreateManyOrganisationInputEnvelopeObjectZodSchema = makeSchema();
