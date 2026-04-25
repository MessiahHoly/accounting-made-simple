import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AccountingEquationCreateWithoutOrganisationInputObjectSchema as AccountingEquationCreateWithoutOrganisationInputObjectSchema } from './AccountingEquationCreateWithoutOrganisationInput.schema';
import { AccountingEquationUncheckedCreateWithoutOrganisationInputObjectSchema as AccountingEquationUncheckedCreateWithoutOrganisationInputObjectSchema } from './AccountingEquationUncheckedCreateWithoutOrganisationInput.schema';
import { AccountingEquationCreateOrConnectWithoutOrganisationInputObjectSchema as AccountingEquationCreateOrConnectWithoutOrganisationInputObjectSchema } from './AccountingEquationCreateOrConnectWithoutOrganisationInput.schema';
import { AccountingEquationCreateManyOrganisationInputEnvelopeObjectSchema as AccountingEquationCreateManyOrganisationInputEnvelopeObjectSchema } from './AccountingEquationCreateManyOrganisationInputEnvelope.schema';
import { AccountingEquationWhereUniqueInputObjectSchema as AccountingEquationWhereUniqueInputObjectSchema } from './AccountingEquationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AccountingEquationCreateWithoutOrganisationInputObjectSchema), z.lazy(() => AccountingEquationCreateWithoutOrganisationInputObjectSchema).array(), z.lazy(() => AccountingEquationUncheckedCreateWithoutOrganisationInputObjectSchema), z.lazy(() => AccountingEquationUncheckedCreateWithoutOrganisationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AccountingEquationCreateOrConnectWithoutOrganisationInputObjectSchema), z.lazy(() => AccountingEquationCreateOrConnectWithoutOrganisationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AccountingEquationCreateManyOrganisationInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AccountingEquationWhereUniqueInputObjectSchema), z.lazy(() => AccountingEquationWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AccountingEquationCreateNestedManyWithoutOrganisationInputObjectSchema: z.ZodType<Prisma.AccountingEquationCreateNestedManyWithoutOrganisationInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountingEquationCreateNestedManyWithoutOrganisationInput>;
export const AccountingEquationCreateNestedManyWithoutOrganisationInputObjectZodSchema = makeSchema();
