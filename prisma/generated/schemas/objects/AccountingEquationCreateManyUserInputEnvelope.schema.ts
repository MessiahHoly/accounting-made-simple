import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AccountingEquationCreateManyUserInputObjectSchema as AccountingEquationCreateManyUserInputObjectSchema } from './AccountingEquationCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AccountingEquationCreateManyUserInputObjectSchema), z.lazy(() => AccountingEquationCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AccountingEquationCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.AccountingEquationCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AccountingEquationCreateManyUserInputEnvelope>;
export const AccountingEquationCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
