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

// Helper to handle numeric strings that might be "None"
const financialNumber = z
  .string()
  .transform((val) => (val === "None" ? null : Number(val)));

const BalanceSheetSchema = z.object({
  fiscalDateEnding: z.iso.date(), // Validates YYYY-MM-DD
  reportedCurrency: z.string().length(3), // e.g., "USD"
  totalAssets: financialNumber,
  totalCurrentAssets: financialNumber,
  cashAndCashEquivalentsAtCarryingValue: financialNumber,
  cashAndShortTermInvestments: financialNumber,
  inventory: financialNumber,
  currentNetReceivables: financialNumber,
  totalNonCurrentAssets: financialNumber,
  propertyPlantEquipment: financialNumber,
  accumulatedDepreciationAmortizationPPE: financialNumber,
  intangibleAssets: financialNumber,
  intangibleAssetsExcludingGoodwill: financialNumber,
  goodwill: financialNumber,
  investments: financialNumber,
  longTermInvestments: financialNumber,
  shortTermInvestments: financialNumber,
  otherCurrentAssets: financialNumber,
  otherNonCurrentAssets: financialNumber,
  totalLiabilities: financialNumber,
  totalCurrentLiabilities: financialNumber,
  currentAccountsPayable: financialNumber,
  deferredRevenue: financialNumber,
  currentDebt: financialNumber,
  shortTermDebt: financialNumber,
  totalNonCurrentLiabilities: financialNumber,
  capitalLeaseObligations: financialNumber,
  longTermDebt: financialNumber,
  currentLongTermDebt: financialNumber,
  longTermDebtNoncurrent: financialNumber,
  shortLongTermDebtTotal: financialNumber,
  otherCurrentLiabilities: financialNumber,
  otherNonCurrentLiabilities: financialNumber,
  totalShareholderEquity: financialNumber,
  treasuryStock: financialNumber,
  retainedEarnings: financialNumber,
  commonStock: financialNumber,
  commonStockSharesOutstanding: financialNumber,
});

export const StockFinancialsSchema = z.object({
  symbol: z.string().min(1),
  annualReports: z.array(BalanceSheetSchema),
});

// Infer the TypeScript types from the schema
export type BalanceSheet = z.infer<typeof BalanceSheetSchema>;
export type StockFinancials = z.infer<typeof StockFinancialsSchema>;

export const CompanyOverviewSchema = z.object({
  Symbol: z.string(),
  AssetType: z.string(),
  Name: z.string(),
  Description: z.string(),
  CIK: z.string(),
  Exchange: z.string(),
  Currency: z.string(),
  Country: z.string(),
  Sector: z.string(),
  Industry: z.string(),
  Address: z.string(),
  OfficialSite: z.string().url(),
  FiscalYearEnd: z.string(),
  LatestQuarter: z.string().pipe(z.coerce.date()),
  
  // Financial metrics handled safely as numbers
  MarketCapitalization: z.string().transform(Number),
  EBITDA: z.string().transform(Number),
  PERatio: z.string().transform(Number),
  PEGRatio: z.string().transform(Number),
  BookValue: z.string().transform(Number),
  DividendPerShare: z.string().transform(Number),
  DividendYield: z.string().transform(Number),
  EPS: z.string().transform(Number),
  RevenuePerShareTTM: z.string().transform(Number),
  ProfitMargin: z.string().transform(Number),
  OperatingMarginTTM: z.string().transform(Number),
  ReturnOnAssetsTTM: z.string().transform(Number),
  ReturnOnEquityTTM: z.string().transform(Number),
  RevenueTTM: z.string().transform(Number),
  GrossProfitTTM: z.string().transform(Number),
  DilutedEPSTTM: z.string().transform(Number),
  QuarterlyEarningsGrowthYOY: z.string().transform(Number),
  QuarterlyRevenueGrowthYOY: z.string().transform(Number),
  AnalystTargetPrice: z.string().transform(Number),
  
  // Ratings and breakdowns
  AnalystRatingStrongBuy: z.string().transform(Number),
  AnalystRatingBuy: z.string().transform(Number),
  AnalystRatingHold: z.string().transform(Number),
  AnalystRatingSell: z.string().transform(Number),
  AnalystRatingStrongSell: z.string().transform(Number),
  
  // Market performance figures
  TrailingPE: z.string().transform(Number),
  ForwardPE: z.string().transform(Number),
  PriceToSalesRatioTTM: z.string().transform(Number),
  PriceToBookRatio: z.string().transform(Number),
  EVToRevenue: z.string().transform(Number),
  EVToEBITDA: z.string().transform(Number),
  Beta: z.string().transform(Number),
  "52WeekHigh": z.string().transform(Number),
  "52WeekLow": z.string().transform(Number),
  "50DayMovingAverage": z.string().transform(Number),
  "200DayMovingAverage": z.string().transform(Number),
  SharesOutstanding: z.string().transform(Number),
  SharesFloat: z.string().transform(Number),
  PercentInsiders: z.string().transform(Number),
  PercentInstitutions: z.string().transform(Number),
  
  // Date tracking strings coerced into Date objects
  DividendDate: z.string().pipe(z.coerce.date()),
  ExDividendDate: z.string().pipe(z.coerce.date()),
});

export type CompanyOverview = z.infer<typeof CompanyOverviewSchema>;
