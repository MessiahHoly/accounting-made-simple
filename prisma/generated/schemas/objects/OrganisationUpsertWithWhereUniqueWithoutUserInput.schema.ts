import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OrganisationWhereUniqueInputObjectSchema as OrganisationWhereUniqueInputObjectSchema } from './OrganisationWhereUniqueInput.schema';
import { OrganisationUpdateWithoutUserInputObjectSchema as OrganisationUpdateWithoutUserInputObjectSchema } from './OrganisationUpdateWithoutUserInput.schema';
import { OrganisationUncheckedUpdateWithoutUserInputObjectSchema as OrganisationUncheckedUpdateWithoutUserInputObjectSchema } from './OrganisationUncheckedUpdateWithoutUserInput.schema';
import { OrganisationCreateWithoutUserInputObjectSchema as OrganisationCreateWithoutUserInputObjectSchema } from './OrganisationCreateWithoutUserInput.schema';
import { OrganisationUncheckedCreateWithoutUserInputObjectSchema as OrganisationUncheckedCreateWithoutUserInputObjectSchema } from './OrganisationUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganisationWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => OrganisationUpdateWithoutUserInputObjectSchema), z.lazy(() => OrganisationUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => OrganisationCreateWithoutUserInputObjectSchema), z.lazy(() => OrganisationUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const OrganisationUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.OrganisationUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationUpsertWithWhereUniqueWithoutUserInput>;
export const OrganisationUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
