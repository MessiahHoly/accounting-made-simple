import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AccountingEquationWhereUniqueInputObjectSchema as AccountingEquationWhereUniqueInputObjectSchema } from './AccountingEquationWhereUniqueInput.schema';
import { AccountingEquationCreateWithoutOrganisationInputObjectSchema as AccountingEquationCreateWithoutOrganisationInputObjectSchema } from './AccountingEquationCreateWithoutOrganisationInput.schema';
import { AccountingEquationUncheckedCreateWithoutOrganisationInputObjectSchema as AccountingEquationUncheckedCreateWithoutOrganisationInputObjectSchema } from './AccountingEquationUncheckedCreateWithoutOrganisationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AccountingEquationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AccountingEquationCreateWithoutOrganisationInputObjectSchema), z.lazy(() => AccountingEquationUncheckedCreateWithoutOrganisationInputObjectSchema)])
}).strict();
export const AccountingEquationCreateOrConnectWithoutOrganisationInputObjectSchema: z.ZodType<Prisma.AccountingEquationCreateOrConnectWithoutOrganisationInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountingEquationCreateOrConnectWithoutOrganisationInput>;
export const AccountingEquationCreateOrConnectWithoutOrganisationInputObjectZodSchema = makeSchema();
