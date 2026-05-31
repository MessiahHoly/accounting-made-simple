import { z } from 'zod'

const stringToNumber = z.preprocess(val => {
  if (val === "") return undefined
  return val
}, z.coerce.number())

export const FinancialSummarySchema = z.object({
  TA: stringToNumber,
  Eq: stringToNumber,
  NP: stringToNumber,
  Sales: stringToNumber,
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
  data: z.array(
    // 1. Tell Zod that null is a valid value for this step
    FinancialSummarySchema.nullable().catch(null) 
  ).transform((items) => {
    // 2. TypeScript automatically infers items as (FinancialSummary | null)[]
    return items.filter((item): item is z.infer<typeof FinancialSummarySchema> => {
      return item !== null;
    });
  }),
});

export type FinancialSummary = z.infer<typeof ProcessedFinancialSummarySchema>;

const EquitySchema = z.object({
// export const EquitySchema = z.object({
  Code: z.string(),
  CoName: z.string(),
  CoNameEn: z.string(),
})

export const EquityListResponseSchema = z.object({
  data: z.array(EquitySchema),
})

export type Equity = z.infer<typeof EquitySchema>;