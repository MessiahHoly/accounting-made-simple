import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AccountingEquationWhereInputObjectSchema as AccountingEquationWhereInputObjectSchema } from './AccountingEquationWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => AccountingEquationWhereInputObjectSchema).optional(),
  some: z.lazy(() => AccountingEquationWhereInputObjectSchema).optional(),
  none: z.lazy(() => AccountingEquationWhereInputObjectSchema).optional()
}).strict();
export const AccountingEquationListRelationFilterObjectSchema: z.ZodType<Prisma.AccountingEquationListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AccountingEquationListRelationFilter>;
export const AccountingEquationListRelationFilterObjectZodSchema = makeSchema();
