import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OrganisationCreateWithoutUserInputObjectSchema as OrganisationCreateWithoutUserInputObjectSchema } from './OrganisationCreateWithoutUserInput.schema';
import { OrganisationUncheckedCreateWithoutUserInputObjectSchema as OrganisationUncheckedCreateWithoutUserInputObjectSchema } from './OrganisationUncheckedCreateWithoutUserInput.schema';
import { OrganisationCreateOrConnectWithoutUserInputObjectSchema as OrganisationCreateOrConnectWithoutUserInputObjectSchema } from './OrganisationCreateOrConnectWithoutUserInput.schema';
import { OrganisationCreateManyUserInputEnvelopeObjectSchema as OrganisationCreateManyUserInputEnvelopeObjectSchema } from './OrganisationCreateManyUserInputEnvelope.schema';
import { OrganisationWhereUniqueInputObjectSchema as OrganisationWhereUniqueInputObjectSchema } from './OrganisationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganisationCreateWithoutUserInputObjectSchema), z.lazy(() => OrganisationCreateWithoutUserInputObjectSchema).array(), z.lazy(() => OrganisationUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => OrganisationUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrganisationCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => OrganisationCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OrganisationCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => OrganisationWhereUniqueInputObjectSchema), z.lazy(() => OrganisationWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const OrganisationCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.OrganisationCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationCreateNestedManyWithoutUserInput>;
export const OrganisationCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
