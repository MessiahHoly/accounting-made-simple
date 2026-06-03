import { z } from 'zod';

// 1. Define the raw schema matching the API structure exactly
const RawMatchSchema = z.object({
  '1. symbol': z.string(),
  '2. name': z.string(),
  '3. type': z.string(),
  '4. region': z.string(),
  '5. marketOpen': z.string(),
  '6. marketClose': z.string(),
  '7. timezone': z.string(),
  '8. currency': z.string(),
  '9. matchScore': z.string().transform((val) => parseFloat(val)),
});

// 2. Transform the object to clean up the keys
export const TickerMatchSchema = RawMatchSchema.transform((raw) => ({
// export const CleanMatchSchema = RawMatchSchema.transform((raw) => ({
  symbol: raw['1. symbol'],
  name: raw['2. name'],
  type: raw['3. type'],
  region: raw['4. region'],
  marketOpen: raw['5. marketOpen'],
  marketClose: raw['6. marketClose'],
  timezone: raw['7. timezone'],
  currency: raw['8. currency'],
  matchScore: raw['9. matchScore'], // Already converted to a number above
}));

// 3. Main response schema using the clean matches
export const AlphaVantageSearchResponseSchema = z.object({
  bestMatches: z.array(TickerMatchSchema),
});

// Type inference will now automatically reflect the clean, renamed object keys!
export type TickerMatch = z.infer<typeof TickerMatchSchema>;
export type AlphaVantageSearchResponse = z.infer<typeof AlphaVantageSearchResponseSchema>;
