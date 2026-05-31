import { z } from 'zod'

const CompanySchema = z.object({
  symbol: z.string(),
  name: z.string(),
  currency: z.string(),
  exchangeFullName: z.string(),
  exchange: z.string(),
})

export const CompanyResponseSchema = z.array(CompanySchema)
// export const CompanyResponseSchema = z.object({
//   data: z.array(CompanySchema),
// })

export type Company = z.infer<typeof CompanySchema>

// export type CompanySearchResponse = z.infer<typeof CompanySearchResponseSchema>