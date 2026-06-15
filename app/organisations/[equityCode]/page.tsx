import {
  fetchEquity, fetchFinanceSummary,
} from "@/lib/data/j-quants"
import { notFound } from "next/navigation"
import {
  fetchBalanceSheets,
  searchCompany
} from "@/lib/data/edinet-db"
import Error from "../../ui/Error"
import { fetchCompanyProfile, fetchFinancialsAsReported } from "@/lib/data/finnhub"
import { FinnhubDashboard } from "./ui/FinnhubDashboard"
import { JQuantsDashboard } from "./ui/JQuantsDashboard"

export default async function Page({ params, searchParams }: {
  params: Promise<{ equityCode: string }>, searchParams: Promise<{ source: 'j-quants' | 'finnhub', language?: string }>
}) {
  const [{ equityCode }, { source, language }] = await Promise.all([params, searchParams])

  // ==========================================
  // BRANCH A: FINNHUB DATA FETCHING
  // ==========================================
  if (source === "finnhub") {
    const [financialsResponse, companyProfileResponse] = await Promise.all([
      fetchFinancialsAsReported(equityCode),
      fetchCompanyProfile(equityCode)
    ])

    if ("error" in financialsResponse) return <Error error={financialsResponse.error} />
    if ("error" in companyProfileResponse) return <Error error={companyProfileResponse.error} />

    const { data: financials } = financialsResponse
    const { data: companyProfile } = companyProfileResponse

    console.log(financials); // <-- Log the financials data for debugging

    if (!financials || financials.length === 0) return notFound()

    return (
      <FinnhubDashboard
        financials={financials}
        companyProfile={companyProfile}
        language={language}
      />
    )
  }

  // ==========================================
  // BRANCH B: J-QUANTS DATA FETCHING
  // ==========================================
  const [financeResponse, equityResponse, searchResponse] = await Promise.all([
    fetchFinanceSummary(equityCode),
    fetchEquity(equityCode),
    searchCompany(equityCode)
  ])

  if ("error" in financeResponse) return <Error error={financeResponse.error} />
  if ("error" in equityResponse) return <Error error={equityResponse.error} />
  if ("error" in searchResponse) return <Error error={searchResponse.error} />

  const { data: financeSummaries } = financeResponse
  const { data: equity } = equityResponse
  const { data: searchResults } = searchResponse

  if (!financeSummaries || financeSummaries.length === 0 || searchResults.length === 0) {
    return notFound()
  }

  const { edinet_code } = searchResults[0]
  const balanceSheetResponse = await fetchBalanceSheets(edinet_code)

  if ("error" in balanceSheetResponse) return <Error error={balanceSheetResponse.error} />
  const { data: balanceSheets } = balanceSheetResponse

  return (
    <JQuantsDashboard
      balanceSheets={balanceSheets}
      financeSummaries={financeSummaries}
      equity={equity}
      language={language}
    />
  )
}