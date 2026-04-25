import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OrganisationScalarWhereInputObjectSchema as OrganisationScalarWhereInputObjectSchema } from './OrganisationScalarWhereInput.schema';
import { OrganisationUpdateManyMutationInputObjectSchema as OrganisationUpdateManyMutationInputObjectSchema } from './OrganisationUpdateManyMutationInput.schema';
import { OrganisationUncheckedUpdateManyWithoutUserInputObjectSchema as OrganisationUncheckedUpdateManyWithoutUserInputObjectSchema } from './OrganisationUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganisationScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => OrganisationUpdateManyMutationInputObjectSchema), z.lazy(() => OrganisationUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const OrganisationUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.OrganisationUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationUpdateManyWithWhereWithoutUserInput>;
export const OrganisationUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
