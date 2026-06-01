import { z } from 'zod'

const CompanySchema = z.object({
  symbol: z.string(),
  name: z.string(),
  currency: z.string(),
  exchangeFullName: z.string(),
  exchange: z.string(),
})

const IncomeStatementSchema = z.object({
  // Fix 1: Use top-level z.iso.date() instead of z.string().date()
  date: z.iso.date(), 
  symbol: z.string().min(1),
  reportedCurrency: z.string().length(3),
  
  // Fix 2: SEC CIKs can be verified via regex directly on a base string
  cik: z.string().regex(/^\d{10}$/), 
  
  // Fix 3: Custom messages now use the 'error' key instead of 'message'
  filingDate: z.iso.date({ error: "Invalid filing date format" }),
  
  // Fix 4: For dates with timestamps ("2025-10-31 06:01:26"), use datetime
  acceptedDate: z.iso.datetime({ local: true }), 
  
  fiscalYear: z.string().regex(/^\d{4}$/),
  period: z.string().min(1),
  revenue: z.number(),
  costOfRevenue: z.number(),
  grossProfit: z.number(),
  researchAndDevelopmentExpenses: z.number(),
  generalAndAdministrativeExpenses: z.number(),
  sellingAndMarketingExpenses: z.number(),
  sellingGeneralAndAdministrativeExpenses: z.number(),
  otherExpenses: z.number(),
  operatingExpenses: z.number(),
  costAndExpenses: z.number(),
  netInterestIncome: z.number(),
  interestIncome: z.number(),
  interestExpense: z.number(),
  depreciationAndAmortization: z.number(),
  ebitda: z.number(),
  ebit: z.number(),
  nonOperatingIncomeExcludingInterest: z.number(),
  operatingIncome: z.number(),
  totalOtherIncomeExpensesNet: z.number(),
  incomeBeforeTax: z.number(),
  incomeTaxExpense: z.number(),
  netIncomeFromContinuingOperations: z.number(),
  netIncomeFromDiscontinuedOperations: z.number(),
  otherAdjustmentsToNetIncome: z.number(),
  netIncome: z.number(),
  netIncomeDeductions: z.number(),
  bottomLineNetIncome: z.number(),
  eps: z.number(),
  epsDiluted: z.number(),
  weightedAverageShsOut: z.number(),
  weightedAverageShsOutDil: z.number(),
});

export const CompanyResponseSchema = z.array(CompanySchema)
export const IncomeStatementListSchema = z.array(IncomeStatementSchema);

export type Company = z.infer<typeof CompanySchema>
export type IncomeStatement = z.infer<typeof IncomeStatementSchema>