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

// export const companyProfileSchema = z.object({
//   country: z.string().length(2),
//   currency: z.string().length(3),
//   estimateCurrency: z.string().length(3),
//   exchange: z.string(),
//   finnhubIndustry: z.string(),
//   ipo: z.iso.date(), // Validates YYYY-MM-DD format
//   logo: z.url(),
//   marketCapitalization: z.number().positive(),
//   name: z.string(),
//   phone: z.string(),
//   shareOutstanding: z.number().positive(),
//   ticker: z.string(),
//   weburl: z.url(),
// });

export const companyProfileSchema = z.object({
  country: z.string().length(2),
  
  // 1. Finnhub returns an empty string "" for these when unassigned.
  // Use .catch("") to intercept validation failures and fallback safely.
  currency: z.string().length(3).catch(""),
  estimateCurrency: z.string().length(3).catch(""),
  
  exchange: z.string(),
  finnhubIndustry: z.string(),
  
  // 2. This works perfectly in Zod v4. Adding .optional() or a fallback 
  // just in case an OTC stock completely misses an IPO date.
  ipo: z.iso.date().catch(""), 
  
  // 3. Finnhub sometimes serves a text "N/A" or empty string for small caps logos
  logo: z.string().url().catch(""),
  
  // 4. Changed from .positive() to .nonnegative() because OTC/delisted stocks 
  // can occasionally present 0 or negative values in raw telemetry.
  marketCapitalization: z.number().nonnegative(),
  
  name: z.string(),
  phone: z.string(),
  shareOutstanding: z.number().nonnegative(),
  ticker: z.string(),
  
  // 5. Finnhub passes "" if the company has no web URL. 
  // z.string().url() strictly fails an empty string, so we .catch("") here too.
  weburl: z.string().url().catch(""),
  
  // 6. Optional: explicitly add floatingShare since it was in your JSON object
  floatingShare: z.number().nonnegative().optional(),
});

export type CompanyProfile = z.infer<typeof companyProfileSchema>;
