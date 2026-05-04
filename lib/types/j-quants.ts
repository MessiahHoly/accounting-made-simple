import { z } from 'zod'

export const FinancialSummarySchema = z.object({
  TA: z.string().transform((value) => parseFloat(value)),
  Eq: z.string().transform((value) => parseFloat(value)),
  CurPerEn: z.string().transform((value) => new Date(value)),
  Code: z.string(),
})

export const FinancialSummaryListResponseSchema = z.object({
  data: z.array(FinancialSummarySchema),
})

export type FinancialSummary = z.infer<typeof FinancialSummarySchema>;

export const EquitySchema = z.object({
  Code: z.string(),
  CoName: z.string(),
  CoNameEn:z.string(),
})

export const EquityListResponseSchema = z.object({
  data: z.array(EquitySchema),
})

export type Equity = z.infer<typeof EquitySchema>;