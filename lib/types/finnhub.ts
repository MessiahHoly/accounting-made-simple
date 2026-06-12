import { z } from 'zod';

const SearchSchema = z.object({
  description: z.string(),
  displaySymbol: z.string(),
  symbol: z.string(),
  type: z.string(),
});

export const SearchResponseSchema = z.object({
  count: z.number().int().nonnegative(),
  result: z.array(SearchSchema),
});

export type SearchItem = z.infer<typeof SearchSchema>;
export type SearchResponse = z.infer<typeof SearchResponseSchema>;

/**
 * Helper to safely convert any incoming input (string, null, empty) to a number.
 * If the value results in NaN (like an empty string "" or "N/A"), it defaults to 0.
 */
const safeNullableNumericCoercion = z.preprocess((val) => {
  if (typeof val === "number" && !isNaN(val)) return val;
  if (typeof val === "string" && val.trim() !== "") {
    const parsed = Number(val.trim());
    return isNaN(parsed) ? null : parsed;
  }
  return null;
}, z.number().nullable());

export const FinancialMetricSchema = z.object({
  concept: z.string(),
  label: z.string().nullable(), // <-- Made nullable to handle cases where label might be missing or empty
  // label: z.string(),
  unit: z.string(),
  value: safeNullableNumericCoercion, // <-- Fixes "received NaN" by turning it into 0
});

export const FinancialReportSchema = z.object({
  bs: z.array(FinancialMetricSchema),
  cf: z.array(FinancialMetricSchema),
  ic: z.array(FinancialMetricSchema),
});

export const HistoricalFilingSchema = z.object({
  acceptedDate: z.string(),
  accessNumber: z.string(),
  cik: z.string(),
  endDate: z.string(),
  filedDate: z.string(),
  form: z.string(),
  quarter: safeNullableNumericCoercion, // <-- Fixes "received NaN" by turning it into 0
  report: FinancialReportSchema,
  startDate: z.string().optional(),
  symbol: z.string().optional(),
  year: z.preprocess((val) => (val === undefined ? undefined : Number(val)), z.number().optional()),
});

export const FinnhubServerResponseSchema = z.object({
  cik: z.string(),
  symbol: z.string(),
  data: z.array(HistoricalFilingSchema),
});

export type FinancialMetric = z.infer<typeof FinancialMetricSchema>;
export type FinancialReport = z.infer<typeof FinancialReportSchema>;
export type HistoricalFiling = z.infer<typeof HistoricalFilingSchema>;
export type FinnhubServerResponse = z.infer<typeof FinnhubServerResponseSchema>;

//TODO: fix error on http://localhost:3000/organisations/UAL?source=finnhub

export const companyProfileSchema = z.object({
  country: z.string().length(2),
  currency: z.string().length(3),
  estimateCurrency: z.string().length(3),
  exchange: z.string(),
  finnhubIndustry: z.string(),
  //TODO: fix obsolete date()
  ipo: z.string().date(), // Validates YYYY-MM-DD format (introduced in Zod v3.23+)
  logo: z.string().url(),
  marketCapitalization: z.number().positive(),
  name: z.string(),
  phone: z.string(),
  shareOutstanding: z.number().positive(),
  ticker: z.string(),
  weburl: z.string().url(),
});

export type CompanyProfile = z.infer<typeof companyProfileSchema>;
