import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AccountingEquationCreateWithoutOrganisationInputObjectSchema as AccountingEquationCreateWithoutOrganisationInputObjectSchema } from './AccountingEquationCreateWithoutOrganisationInput.schema';
import { AccountingEquationUncheckedCreateWithoutOrganisationInputObjectSchema as AccountingEquationUncheckedCreateWithoutOrganisationInputObjectSchema } from './AccountingEquationUncheckedCreateWithoutOrganisationInput.schema';
import { AccountingEquationCreateOrConnectWithoutOrganisationInputObjectSchema as AccountingEquationCreateOrConnectWithoutOrganisationInputObjectSchema } from './AccountingEquationCreateOrConnectWithoutOrganisationInput.schema';
import { AccountingEquationUpsertWithWhereUniqueWithoutOrganisationInputObjectSchema as AccountingEquationUpsertWithWhereUniqueWithoutOrganisationInputObjectSchema } from './AccountingEquationUpsertWithWhereUniqueWithoutOrganisationInput.schema';
import { AccountingEquationCreateManyOrganisationInputEnvelopeObjectSchema as AccountingEquationCreateManyOrganisationInputEnvelopeObjectSchema } from './AccountingEquationCreateManyOrganisationInputEnvelope.schema';
import { AccountingEquationWhereUniqueInputObjectSchema as AccountingEquationWhereUniqueInputObjectSchema } from './AccountingEquationWhereUniqueInput.schema';
import { AccountingEquationUpdateWithWhereUniqueWithoutOrganisationInputObjectSchema as AccountingEquationUpdateWithWhereUniqueWithoutOrganisationInputObjectSchema } from './AccountingEquationUpdateWithWhereUniqueWithoutOrganisationInput.schema';
import { AccountingEquationUpdateManyWithWhereWithoutOrganisationInputObjectSchema as AccountingEquationUpdateManyWithWhereWithoutOrganisationInputObjectSchema } from './AccountingEquationUpdateManyWithWhereWithoutOrganisationInput.schema';
import { AccountingEquationScalarWhereInputObjectSchema as AccountingEquationScalarWhereInputObjectSchema } from './AccountingEquationScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AccountingEquationCreateWithoutOrganisationInputObjectSchema), z.lazy(() => AccountingEquationCreateWithoutOrganisationInputObjectSchema).array(), z.lazy(() => AccountingEquationUncheckedCreateWithoutOrganisationInputObjectSchema), z.lazy(() => AccountingEquationUncheckedCreateWithoutOrganisationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AccountingEquationCreateOrConnectWithoutOrganisationInputObjectSchema), z.lazy(() => AccountingEquationCreateOrConnectWithoutOrganisationInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AccountingEquationUpsertWithWhereUniqueWithoutOrganisationInputObjectSchema), z.lazy(() => AccountingEquationUpsertWithWhereUniqueWithoutOrganisationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AccountingEquationCreateManyOrganisationInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AccountingEquationWhereUniqueInputObjectSchema), z.lazy(() => AccountingEquationWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AccountingEquationWhereUniqueInputObjectSchema), z.lazy(() => AccountingEquationWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AccountingEquationWhereUniqueInputObjectSchema), z.lazy(() => AccountingEquationWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AccountingEquationWhereUniqueInputObjectSchema), z.lazy(() => AccountingEquationWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AccountingEquationUpdateWithWhereUniqueWithoutOrganisationInputObjectSchema), z.lazy(() => AccountingEquationUpdateWithWhereUniqueWithoutOrganisationInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AccountingEquationUpdateManyWithWhereWithoutOrganisationInputObjectSchema), z.lazy(() => AccountingEquationUpdateManyWithWhereWithoutOrganisationInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AccountingEquationScalarWhereInputObjectSchema), z.lazy(() => AccountingEquationScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AccountingEquationUpdateManyWithoutOrganisationNestedInputObjectSchema: z.ZodType<Prisma.AccountingEquationUpdateManyWithoutOrganisationNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountingEquationUpdateManyWithoutOrganisationNestedInput>;
export const AccountingEquationUpdateManyWithoutOrganisationNestedInputObjectZodSchema = makeSchema();
