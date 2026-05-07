import { z } from "zod"

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

export type SearchResult = z.infer<typeof SearchResultSchema>