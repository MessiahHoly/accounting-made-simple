import { z } from 'zod'

// export type JQuantsFinancialSummary = {
//   Code: string; // Stock code
//   CurPerEn: string; // Current period end date
//   TA: string; // Total assets
//   Eq: string; // Equity
// };

export const JQuantsFinancialSummarySchema = z.object({
  TA:z.string(),
  Eq:z.string(),
  CurPerEn:z.string(),
  Code:z.string(),
})

export const JQuantsFinancialSummaryApiResponseSchema = z.object({
  data: z.array(JQuantsFinancialSummarySchema),
  message: z.string(),
  status: z.number(),
})

export type JQuantsApiResponse = z.infer<typeof JQuantsFinancialSummaryApiResponseSchema>;

export type JQuantsFinancialSummary = z.infer<typeof JQuantsFinancialSummarySchema>;

// export type JQuantsFinancialSummaryApiResponse = {
//   data: JQuantsFinancialSummary[];
//   message: string;
//   status: number;
// };

// export type AccountingEquationData = {
//   assets: number;
//   equity: number;
//   liabilities: number;
//   code: string;
//   asOf: string; // Date of the financial data
// };