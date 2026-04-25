import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { OrganisationWhereUniqueInputObjectSchema as OrganisationWhereUniqueInputObjectSchema } from './OrganisationWhereUniqueInput.schema';
import { OrganisationCreateWithoutAccountingEquationsInputObjectSchema as OrganisationCreateWithoutAccountingEquationsInputObjectSchema } from './OrganisationCreateWithoutAccountingEquationsInput.schema';
import { OrganisationUncheckedCreateWithoutAccountingEquationsInputObjectSchema as OrganisationUncheckedCreateWithoutAccountingEquationsInputObjectSchema } from './OrganisationUncheckedCreateWithoutAccountingEquationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrganisationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OrganisationCreateWithoutAccountingEquationsInputObjectSchema), z.lazy(() => OrganisationUncheckedCreateWithoutAccountingEquationsInputObjectSchema)])
}).strict();
export const OrganisationCreateOrConnectWithoutAccountingEquationsInputObjectSchema: z.ZodType<Prisma.OrganisationCreateOrConnectWithoutAccountingEquationsInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganisationCreateOrConnectWithoutAccountingEquationsInput>;
export const OrganisationCreateOrConnectWithoutAccountingEquationsInputObjectZodSchema = makeSchema();
