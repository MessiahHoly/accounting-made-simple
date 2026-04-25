import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AccountingEquationSelectObjectSchema as AccountingEquationSelectObjectSchema } from './AccountingEquationSelect.schema';
import { AccountingEquationIncludeObjectSchema as AccountingEquationIncludeObjectSchema } from './AccountingEquationInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AccountingEquationSelectObjectSchema).optional(),
  include: z.lazy(() => AccountingEquationIncludeObjectSchema).optional()
}).strict();
export const AccountingEquationArgsObjectSchema = makeSchema();
export const AccountingEquationArgsObjectZodSchema = makeSchema();
