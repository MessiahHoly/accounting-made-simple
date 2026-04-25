import * as z from 'zod';
export const OrganisationUpsertResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.string(),
  user: z.unknown(),
  accountingEquations: z.array(z.unknown())
});