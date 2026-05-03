import { z } from 'zod'

// export type JQuantsFinancialSummary = {
//   Code: string; // Stock code
//   CurPerEn: string; // Current period end date
//   TA: string; // Total assets
//   Eq: string; // Equity
// };

//TODO: use zod data transformation to convert TA and Eq to numbers, and CurPerEn to Date. This way, you can work with the data more easily in your calculations.
// 3. Data TransformationNotice your TA (Total Assets) and Eq (Equity) are strings in the API, but you likely want them as numbers for calculations. Zod allows you to transform data during the validation step:typescript// You can turn that string into a number automatically
// TA: z.string().transform((val) => parseFloat(val))

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