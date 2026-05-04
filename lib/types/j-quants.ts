import { z } from 'zod'

export const FinancialSummarySchema = z.object({
  TA: z.string().transform((value) => parseFloat(value)),
  Eq: z.string().transform((value) => parseFloat(value)),
  CurPerEn: z.string(),
  Code: z.string(),
})
// export const FinancialSummarySchema = z.object({
//   TA: z.string(),
//   Eq: z.string(),
//   CurPerEn: z.string(),
//   Code: z.string(),
// })

// export const ApiResponseSchema = z.object({
//   data: z.array(FinancialSummarySchema),
//   message: z.string(),
//   status: z.number(),
// })

export const ApiResponseSchema = z.object({
  data: z.array(FinancialSummarySchema),
})

export type FinancialSummary = z.infer<typeof FinancialSummarySchema>;

// export type JQuantsApiResponse = z.infer<typeof ApiResponseSchema>;
