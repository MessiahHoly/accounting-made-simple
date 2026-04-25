import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AccountingEquationWhereUniqueInputObjectSchema as AccountingEquationWhereUniqueInputObjectSchema } from './AccountingEquationWhereUniqueInput.schema';
import { AccountingEquationUpdateWithoutOrganisationInputObjectSchema as AccountingEquationUpdateWithoutOrganisationInputObjectSchema } from './AccountingEquationUpdateWithoutOrganisationInput.schema';
import { AccountingEquationUncheckedUpdateWithoutOrganisationInputObjectSchema as AccountingEquationUncheckedUpdateWithoutOrganisationInputObjectSchema } from './AccountingEquationUncheckedUpdateWithoutOrganisationInput.schema';
import { AccountingEquationCreateWithoutOrganisationInputObjectSchema as AccountingEquationCreateWithoutOrganisationInputObjectSchema } from './AccountingEquationCreateWithoutOrganisationInput.schema';
import { AccountingEquationUncheckedCreateWithoutOrganisationInputObjectSchema as AccountingEquationUncheckedCreateWithoutOrganisationInputObjectSchema } from './AccountingEquationUncheckedCreateWithoutOrganisationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AccountingEquationWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AccountingEquationUpdateWithoutOrganisationInputObjectSchema), z.lazy(() => AccountingEquationUncheckedUpdateWithoutOrganisationInputObjectSchema)]),
  create: z.union([z.lazy(() => AccountingEquationCreateWithoutOrganisationInputObjectSchema), z.lazy(() => AccountingEquationUncheckedCreateWithoutOrganisationInputObjectSchema)])
}).strict();
export const AccountingEquationUpsertWithWhereUniqueWithoutOrganisationInputObjectSchema: z.ZodType<Prisma.AccountingEquationUpsertWithWhereUniqueWithoutOrganisationInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountingEquationUpsertWithWhereUniqueWithoutOrganisationInput>;
export const AccountingEquationUpsertWithWhereUniqueWithoutOrganisationInputObjectZodSchema = makeSchema();
