import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AccountingEquationWhereInputObjectSchema as AccountingEquationWhereInputObjectSchema } from './AccountingEquationWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AccountingEquationWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountAccountingEquationsArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountAccountingEquationsArgsObjectZodSchema = makeSchema();
