import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OrganisationWhereUniqueInputObjectSchema as OrganisationWhereUniqueInputObjectSchema } from './OrganisationWhereUniqueInput.schema';
import { OrganisationUpdateWithoutUserInputObjectSchema as OrganisationUpdateWithoutUserInputObjectSchema } from './OrganisationUpdateWithoutUserInput.schema';
import { OrganisationUncheckedUpdateWithoutUserInputObjectSchema as OrganisationUncheckedUpdateWithoutUserInputObjectSchema } from './OrganisationUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganisationWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => OrganisationUpdateWithoutUserInputObjectSchema), z.lazy(() => OrganisationUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const OrganisationUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.OrganisationUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationUpdateWithWhereUniqueWithoutUserInput>;
export const OrganisationUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
