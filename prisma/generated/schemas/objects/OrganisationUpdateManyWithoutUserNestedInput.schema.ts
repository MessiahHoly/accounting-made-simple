import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OrganisationCreateWithoutUserInputObjectSchema as OrganisationCreateWithoutUserInputObjectSchema } from './OrganisationCreateWithoutUserInput.schema';
import { OrganisationUncheckedCreateWithoutUserInputObjectSchema as OrganisationUncheckedCreateWithoutUserInputObjectSchema } from './OrganisationUncheckedCreateWithoutUserInput.schema';
import { OrganisationCreateOrConnectWithoutUserInputObjectSchema as OrganisationCreateOrConnectWithoutUserInputObjectSchema } from './OrganisationCreateOrConnectWithoutUserInput.schema';
import { OrganisationUpsertWithWhereUniqueWithoutUserInputObjectSchema as OrganisationUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './OrganisationUpsertWithWhereUniqueWithoutUserInput.schema';
import { OrganisationCreateManyUserInputEnvelopeObjectSchema as OrganisationCreateManyUserInputEnvelopeObjectSchema } from './OrganisationCreateManyUserInputEnvelope.schema';
import { OrganisationWhereUniqueInputObjectSchema as OrganisationWhereUniqueInputObjectSchema } from './OrganisationWhereUniqueInput.schema';
import { OrganisationUpdateWithWhereUniqueWithoutUserInputObjectSchema as OrganisationUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './OrganisationUpdateWithWhereUniqueWithoutUserInput.schema';
import { OrganisationUpdateManyWithWhereWithoutUserInputObjectSchema as OrganisationUpdateManyWithWhereWithoutUserInputObjectSchema } from './OrganisationUpdateManyWithWhereWithoutUserInput.schema';
import { OrganisationScalarWhereInputObjectSchema as OrganisationScalarWhereInputObjectSchema } from './OrganisationScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganisationCreateWithoutUserInputObjectSchema), z.lazy(() => OrganisationCreateWithoutUserInputObjectSchema).array(), z.lazy(() => OrganisationUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => OrganisationUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrganisationCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => OrganisationCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => OrganisationUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => OrganisationUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OrganisationCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => OrganisationWhereUniqueInputObjectSchema), z.lazy(() => OrganisationWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => OrganisationWhereUniqueInputObjectSchema), z.lazy(() => OrganisationWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => OrganisationWhereUniqueInputObjectSchema), z.lazy(() => OrganisationWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => OrganisationWhereUniqueInputObjectSchema), z.lazy(() => OrganisationWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => OrganisationUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => OrganisationUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => OrganisationUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => OrganisationUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => OrganisationScalarWhereInputObjectSchema), z.lazy(() => OrganisationScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const OrganisationUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.OrganisationUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationUpdateManyWithoutUserNestedInput>;
export const OrganisationUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
