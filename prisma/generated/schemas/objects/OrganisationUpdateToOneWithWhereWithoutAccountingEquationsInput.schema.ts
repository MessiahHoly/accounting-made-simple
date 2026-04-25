import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OrganisationWhereInputObjectSchema as OrganisationWhereInputObjectSchema } from './OrganisationWhereInput.schema';
import { OrganisationUpdateWithoutAccountingEquationsInputObjectSchema as OrganisationUpdateWithoutAccountingEquationsInputObjectSchema } from './OrganisationUpdateWithoutAccountingEquationsInput.schema';
import { OrganisationUncheckedUpdateWithoutAccountingEquationsInputObjectSchema as OrganisationUncheckedUpdateWithoutAccountingEquationsInputObjectSchema } from './OrganisationUncheckedUpdateWithoutAccountingEquationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganisationWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => OrganisationUpdateWithoutAccountingEquationsInputObjectSchema), z.lazy(() => OrganisationUncheckedUpdateWithoutAccountingEquationsInputObjectSchema)])
}).strict();
export const OrganisationUpdateToOneWithWhereWithoutAccountingEquationsInputObjectSchema: z.ZodType<Prisma.OrganisationUpdateToOneWithWhereWithoutAccountingEquationsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationUpdateToOneWithWhereWithoutAccountingEquationsInput>;
export const OrganisationUpdateToOneWithWhereWithoutAccountingEquationsInputObjectZodSchema = makeSchema();
