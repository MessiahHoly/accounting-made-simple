import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OrganisationCreateWithoutAccountingEquationsInputObjectSchema as OrganisationCreateWithoutAccountingEquationsInputObjectSchema } from './OrganisationCreateWithoutAccountingEquationsInput.schema';
import { OrganisationUncheckedCreateWithoutAccountingEquationsInputObjectSchema as OrganisationUncheckedCreateWithoutAccountingEquationsInputObjectSchema } from './OrganisationUncheckedCreateWithoutAccountingEquationsInput.schema';
import { OrganisationCreateOrConnectWithoutAccountingEquationsInputObjectSchema as OrganisationCreateOrConnectWithoutAccountingEquationsInputObjectSchema } from './OrganisationCreateOrConnectWithoutAccountingEquationsInput.schema';
import { OrganisationUpsertWithoutAccountingEquationsInputObjectSchema as OrganisationUpsertWithoutAccountingEquationsInputObjectSchema } from './OrganisationUpsertWithoutAccountingEquationsInput.schema';
import { OrganisationWhereUniqueInputObjectSchema as OrganisationWhereUniqueInputObjectSchema } from './OrganisationWhereUniqueInput.schema';
import { OrganisationUpdateToOneWithWhereWithoutAccountingEquationsInputObjectSchema as OrganisationUpdateToOneWithWhereWithoutAccountingEquationsInputObjectSchema } from './OrganisationUpdateToOneWithWhereWithoutAccountingEquationsInput.schema';
import { OrganisationUpdateWithoutAccountingEquationsInputObjectSchema as OrganisationUpdateWithoutAccountingEquationsInputObjectSchema } from './OrganisationUpdateWithoutAccountingEquationsInput.schema';
import { OrganisationUncheckedUpdateWithoutAccountingEquationsInputObjectSchema as OrganisationUncheckedUpdateWithoutAccountingEquationsInputObjectSchema } from './OrganisationUncheckedUpdateWithoutAccountingEquationsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganisationCreateWithoutAccountingEquationsInputObjectSchema), z.lazy(() => OrganisationUncheckedCreateWithoutAccountingEquationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganisationCreateOrConnectWithoutAccountingEquationsInputObjectSchema).optional(),
  upsert: z.lazy(() => OrganisationUpsertWithoutAccountingEquationsInputObjectSchema).optional(),
  connect: z.lazy(() => OrganisationWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OrganisationUpdateToOneWithWhereWithoutAccountingEquationsInputObjectSchema), z.lazy(() => OrganisationUpdateWithoutAccountingEquationsInputObjectSchema), z.lazy(() => OrganisationUncheckedUpdateWithoutAccountingEquationsInputObjectSchema)]).optional()
}).strict();
export const OrganisationUpdateOneRequiredWithoutAccountingEquationsNestedInputObjectSchema: z.ZodType<Prisma.OrganisationUpdateOneRequiredWithoutAccountingEquationsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationUpdateOneRequiredWithoutAccountingEquationsNestedInput>;
export const OrganisationUpdateOneRequiredWithoutAccountingEquationsNestedInputObjectZodSchema = makeSchema();
