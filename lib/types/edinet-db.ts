import { z } from "zod"
// import { meta } from "zod/v4/core"

export const SearchResultSchema = z.object({
  credit_rating: z.string(),
  credit_score: z.int(),
  edinet_code: z.string(),
  industry: z.string(),
  name: z.string(),
  name_en: z.string(),
  name_ja: z.string(),
  sec_code: z.string(),
})

export const SearchResponseSchema = z.object({
  data: z.array(SearchResultSchema),
  meta: z.object({
    query: z.string(),
    total: z.int(),
  }),
})

export const FinancialsResponseSchema = z.object({
  fiscal_year: z.number(),
  accounting_standard: z.string(),
  
  // Per Share Metrics
  bps: z.number(),
  adjusted_bps: z.number(),
  eps: z.number(),
  adjusted_eps: z.number(),
  dividend_per_share: z.number(),
  adjusted_dividend_per_share: z.number(),
  
  // Financial Position
  total_assets: z.number(),
  net_assets: z.number(),
  total_liabilities: z.number(),
  cash: z.number(),
  equity_ratio_official: z.number(),
  
  // Income Statement / Performance
  revenue: z.number(),
  ordinary_income: z.number(),
  net_income: z.number(),
  comprehensive_income: z.number(),
  roe_official: z.number(),
  payout_ratio: z.number().nullable().optional(), // Nullable based on your meta data notes
  per: z.number().nullable().optional(),
  
  // Cash Flow
  cf_operating: z.number(),
  cf_investing: z.number(),
  cf_financing: z.number(),
  
  // Other
  shares_issued: z.number(),
  split_adjustment_factor: z.number(),
  num_employees: z.number(),
  
  // Flags
  is_restated_bps: z.boolean(),
  is_restated_eps: z.boolean(),
  is_restated_diluted_eps: z.boolean(),
}).transform((data) => ({
  ...data,
  // You can keep or update your custom transforms here
  other_assets: data.total_assets - data.cash,
  shareholders_equity: data.net_assets,
  debt_to_equity_ratio: data.total_liabilities / data.net_assets,
  isBalanced: Math.abs(data.total_assets - (data.total_liabilities + data.net_assets)) < 1000,
}));

export const FinancialsApiResponseSchema = z.object({
  data: z.array(FinancialsResponseSchema),
  meta: z.object({
    data_notes: z.array(z.string()),
    data_source: z.string(),
    edinet_code: z.string(),
    fiscal_years: z.array(z.number()), // Note: renamed from 'fiscal_year' to 'fiscal_years' to match data
    period: z.string(),
  }),
});

export type SearchResult = z.infer<typeof SearchResultSchema>

export type Financials = z.infer<typeof FinancialsResponseSchema>