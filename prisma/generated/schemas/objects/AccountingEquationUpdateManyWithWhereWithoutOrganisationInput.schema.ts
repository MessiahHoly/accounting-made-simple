import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AccountingEquationScalarWhereInputObjectSchema as AccountingEquationScalarWhereInputObjectSchema } from './AccountingEquationScalarWhereInput.schema';
import { AccountingEquationUpdateManyMutationInputObjectSchema as AccountingEquationUpdateManyMutationInputObjectSchema } from './AccountingEquationUpdateManyMutationInput.schema';
import { AccountingEquationUncheckedUpdateManyWithoutOrganisationInputObjectSchema as AccountingEquationUncheckedUpdateManyWithoutOrganisationInputObjectSchema } from './AccountingEquationUncheckedUpdateManyWithoutOrganisationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AccountingEquationScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AccountingEquationUpdateManyMutationInputObjectSchema), z.lazy(() => AccountingEquationUncheckedUpdateManyWithoutOrganisationInputObjectSchema)])
}).strict();
export const AccountingEquationUpdateManyWithWhereWithoutOrganisationInputObjectSchema: z.ZodType<Prisma.AccountingEquationUpdateManyWithWhereWithoutOrganisationInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountingEquationUpdateManyWithWhereWithoutOrganisationInput>;
export const AccountingEquationUpdateManyWithWhereWithoutOrganisationInputObjectZodSchema = makeSchema();
