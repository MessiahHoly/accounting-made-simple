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
