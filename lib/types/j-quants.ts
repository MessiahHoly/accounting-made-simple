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
  // TA: z.coerce.number(),
  // Eq: z.coerce.number(),
  // NP: z.coerce.number(),
  // Sales: z.coerce.number(),
  CurPerEn: z.coerce.date(),
  Code: z.string(),
})

const ProcessedFinancialSummarySchema = FinancialSummarySchema.extend({
  metric: z.object({
    roe: z.number(),
    assetTurnover: z.number()
  })
})

// export const FinancialSummaryListResponseSchema = z.object({
//   data: z.array(FinancialSummarySchema),
//   // data: z.array(z.unknown()).transform((arr) => {
//   //   return arr.filter((item) => {
//   //     const result = FinancialSummarySchema.safeParse(item); 
//   //     return result.success;
//   //   });
//   // }),
// })

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


// export const FinancialSummaryListResponseSchema = z.object({
//   // 1. Pass the real schema to z.array() so TypeScript types it automatically
//   data: z.array(FinancialSummarySchema.catch(null as any))
//     // 2. Filter out the items that caught an error and turned into null
//     .transform((items) => items.filter((item): item is z.infer<typeof FinancialSummarySchema> => item !== null)),
// });

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