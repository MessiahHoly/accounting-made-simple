import { z } from 'zod'

export const FinancialSummarySchema = z.object({
  TA: z.coerce.number(),
  Eq: z.coerce.number(),
  NP: z.coerce.number(),
  Sales: z.coerce.number(),
  CurPerEn: z.coerce.date(),
  Code: z.string(),
})

const ProcessedFinancialSummarySchema = FinancialSummarySchema.extend({
  metric: z.object({
    roe: z.number(),
    assetTurnover: z.number()
  })
})

export const FinancialSummaryListResponseSchema = z.object({
  data: z.array(FinancialSummarySchema),
})

export type FinancialSummary = z.infer<typeof ProcessedFinancialSummarySchema>;

export const EquitySchema = z.object({
  Code: z.string(),
  CoName: z.string(),
  CoNameEn: z.string(),
})

export const EquityListResponseSchema = z.object({
  data: z.array(EquitySchema),
})

export type Equity = z.infer<typeof EquitySchema>;