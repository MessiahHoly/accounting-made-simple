import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OrganisationCreateWithoutAccountingEquationsInputObjectSchema as OrganisationCreateWithoutAccountingEquationsInputObjectSchema } from './OrganisationCreateWithoutAccountingEquationsInput.schema';
import { OrganisationUncheckedCreateWithoutAccountingEquationsInputObjectSchema as OrganisationUncheckedCreateWithoutAccountingEquationsInputObjectSchema } from './OrganisationUncheckedCreateWithoutAccountingEquationsInput.schema';
import { OrganisationCreateOrConnectWithoutAccountingEquationsInputObjectSchema as OrganisationCreateOrConnectWithoutAccountingEquationsInputObjectSchema } from './OrganisationCreateOrConnectWithoutAccountingEquationsInput.schema';
import { OrganisationWhereUniqueInputObjectSchema as OrganisationWhereUniqueInputObjectSchema } from './OrganisationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OrganisationCreateWithoutAccountingEquationsInputObjectSchema), z.lazy(() => OrganisationUncheckedCreateWithoutAccountingEquationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OrganisationCreateOrConnectWithoutAccountingEquationsInputObjectSchema).optional(),
  connect: z.lazy(() => OrganisationWhereUniqueInputObjectSchema).optional()
}).strict();
export const OrganisationCreateNestedOneWithoutAccountingEquationsInputObjectSchema: z.ZodType<Prisma.OrganisationCreateNestedOneWithoutAccountingEquationsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationCreateNestedOneWithoutAccountingEquationsInput>;
export const OrganisationCreateNestedOneWithoutAccountingEquationsInputObjectZodSchema = makeSchema();
