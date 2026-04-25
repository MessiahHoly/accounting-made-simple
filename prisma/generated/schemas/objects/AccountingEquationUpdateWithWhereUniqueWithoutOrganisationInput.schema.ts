import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AccountingEquationWhereUniqueInputObjectSchema as AccountingEquationWhereUniqueInputObjectSchema } from './AccountingEquationWhereUniqueInput.schema';
import { AccountingEquationUpdateWithoutOrganisationInputObjectSchema as AccountingEquationUpdateWithoutOrganisationInputObjectSchema } from './AccountingEquationUpdateWithoutOrganisationInput.schema';
import { AccountingEquationUncheckedUpdateWithoutOrganisationInputObjectSchema as AccountingEquationUncheckedUpdateWithoutOrganisationInputObjectSchema } from './AccountingEquationUncheckedUpdateWithoutOrganisationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AccountingEquationWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AccountingEquationUpdateWithoutOrganisationInputObjectSchema), z.lazy(() => AccountingEquationUncheckedUpdateWithoutOrganisationInputObjectSchema)])
}).strict();
export const AccountingEquationUpdateWithWhereUniqueWithoutOrganisationInputObjectSchema: z.ZodType<Prisma.AccountingEquationUpdateWithWhereUniqueWithoutOrganisationInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountingEquationUpdateWithWhereUniqueWithoutOrganisationInput>;
export const AccountingEquationUpdateWithWhereUniqueWithoutOrganisationInputObjectZodSchema = makeSchema();
