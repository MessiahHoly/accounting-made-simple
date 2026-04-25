import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OrganisationWhereUniqueInputObjectSchema as OrganisationWhereUniqueInputObjectSchema } from './OrganisationWhereUniqueInput.schema';
import { OrganisationCreateWithoutUserInputObjectSchema as OrganisationCreateWithoutUserInputObjectSchema } from './OrganisationCreateWithoutUserInput.schema';
import { OrganisationUncheckedCreateWithoutUserInputObjectSchema as OrganisationUncheckedCreateWithoutUserInputObjectSchema } from './OrganisationUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganisationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrganisationCreateWithoutUserInputObjectSchema), z.lazy(() => OrganisationUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const OrganisationCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.OrganisationCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationCreateOrConnectWithoutUserInput>;
export const OrganisationCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
