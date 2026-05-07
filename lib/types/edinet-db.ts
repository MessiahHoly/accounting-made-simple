import { z } from "zod"
import { meta } from "zod/v4/core"

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
  // Assets
  current_assets: z.number(),
  noncurrent_assets: z.number(),
  total_assets: z.number(),
  cash: z.number().optional(),
  inventories: z.number().optional(),
  // Liabilities
  current_liabilities: z.number(),
  noncurrent_liabilities: z.number(),
  total_liabilities: z.number(),
  // Net Assets
  net_assets: z.number(),
  shareholders_equity: z.number(),
}).transform((data) => ({
  ...data,
  debt_to_equity_ratio: data.total_liabilities / data.shareholders_equity,
  isBalanced: Math.abs(data.total_assets - (data.total_liabilities + data.net_assets)) < 1000,
}))

export const FinancialsApiResponseSchema = z.object({
  data: z.array(FinancialsResponseSchema),
  meta: z.object({
    data_notes: z.array(z.string()),
    data_source: z.string(),
    edinet_code: z.string(),
    fiscal_year: z.array(z.number()),
    period:z.string(),
  }),
})

export type SearchResult = z.infer<typeof SearchResultSchema>

export type Financials = z.infer<typeof FinancialsResponseSchema>