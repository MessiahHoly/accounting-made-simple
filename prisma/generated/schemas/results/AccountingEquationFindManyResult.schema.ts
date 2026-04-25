import * as z from 'zod';
export const AccountingEquationFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  assets: z.number(),
  liabilities: z.number(),
  ownersEquity: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.string(),
  user: z.unknown(),
  organisationId: z.string(),
  organisation: z.unknown()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});