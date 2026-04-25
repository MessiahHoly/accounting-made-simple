import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OrganisationUpdateWithoutAccountingEquationsInputObjectSchema as OrganisationUpdateWithoutAccountingEquationsInputObjectSchema } from './OrganisationUpdateWithoutAccountingEquationsInput.schema';
import { OrganisationUncheckedUpdateWithoutAccountingEquationsInputObjectSchema as OrganisationUncheckedUpdateWithoutAccountingEquationsInputObjectSchema } from './OrganisationUncheckedUpdateWithoutAccountingEquationsInput.schema';
import { OrganisationCreateWithoutAccountingEquationsInputObjectSchema as OrganisationCreateWithoutAccountingEquationsInputObjectSchema } from './OrganisationCreateWithoutAccountingEquationsInput.schema';
import { OrganisationUncheckedCreateWithoutAccountingEquationsInputObjectSchema as OrganisationUncheckedCreateWithoutAccountingEquationsInputObjectSchema } from './OrganisationUncheckedCreateWithoutAccountingEquationsInput.schema';
import { OrganisationWhereInputObjectSchema as OrganisationWhereInputObjectSchema } from './OrganisationWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => OrganisationUpdateWithoutAccountingEquationsInputObjectSchema), z.lazy(() => OrganisationUncheckedUpdateWithoutAccountingEquationsInputObjectSchema)]),
  create: z.union([z.lazy(() => OrganisationCreateWithoutAccountingEquationsInputObjectSchema), z.lazy(() => OrganisationUncheckedCreateWithoutAccountingEquationsInputObjectSchema)]),
  where: z.lazy(() => OrganisationWhereInputObjectSchema).optional()
}).strict();
export const OrganisationUpsertWithoutAccountingEquationsInputObjectSchema: z.ZodType<Prisma.OrganisationUpsertWithoutAccountingEquationsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationUpsertWithoutAccountingEquationsInput>;
export const OrganisationUpsertWithoutAccountingEquationsInputObjectZodSchema = makeSchema();
