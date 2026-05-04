import { z } from 'zod'

export const FinancialSummarySchema = z.object({
  TA: z.string().transform((value) => parseFloat(value)),
  Eq: z.string().transform((value) => parseFloat(value)),
  CurPerEn: z.string().transform((value) => new Date(value)),
  Code: z.string(),
})

export const ApiResponseSchema = z.object({
  data: z.array(FinancialSummarySchema),
})

export type FinancialSummary = z.infer<typeof FinancialSummarySchema>;
