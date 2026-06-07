import {
  fetchEquity, fetchFinanceSummary,
} from "@/lib/data/j-quants"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  fetchBalanceSheets,
  searchCompany
} from "@/lib/data/edinet-db"
import FinancialTable from "./ui/BalanceSheet"
import FinancialChart from "./ui/FinancialChart"
import AccouningEquations from "./ui/AccountingEquations"
import GeminiFinancialAnalysis from "./ui/GeminiFinancialAnalysis"
import { Suspense } from "react"
import AiIsThinking from "./ui/AiIsThinking"
import Error from "./ui/Error"
import { fetchCompanyProfile, fetchFinancialsAsReported } from "@/lib/data/finnhub"
import FinancialDashboard from "./ui/FinancialDashboard"

export default async function Page({ params, searchParams }: {
  params: Promise<{ equityCode: string }>, searchParams: Promise<{ source: 'j-quants' | 'finnhub', language?: string }>
}) {
  const [{ equityCode }, { source, language }] = await Promise.all([params, searchParams])

  if (source === "finnhub") {
    const [financialsResponse, companyProfileResponse] = await Promise.all([
      fetchFinancialsAsReported(equityCode), fetchCompanyProfile(equityCode)])

    if ("error" in financialsResponse) {
      return <Error error={financialsResponse.error} />
    }

    if ("error" in companyProfileResponse) {
      return <Error error={companyProfileResponse.error} />
    }

    const { data: financials } = financialsResponse
    const { data: companyProfile } = companyProfileResponse

    if (!financials || financials.length === 0) return notFound()

    //TODO: componentse the following

    return (
      <main className="p-4 md:p-8 max-w-screen-2xl mx-auto w-full overflow-hidden">
        {/* 1. Global fixed layer that covers the viewport width */}
        <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
          {/* 2. Centered inner container matching your main layout constraints */}
          <div className="max-w-screen-2xl mx-auto px-4 md:px-8 w-full pt-4 md:pt-8">
            {/* 3. The actual interactive button */}
            <div className="pointer-events-auto inline-block">
              <Button asChild variant="outline" className="shadow-md bg-background">
                <Link href="/" className="no-underline">
                  Home
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Placeholder spacer so your content doesn't jump under the floating button */}
        <div className="h-10 mb-8" />

        {companyProfile && (
          <div className="mb-8">
            <h1 className="text-3xl font-bold">{companyProfile.name}</h1>
            <p className="text-muted-foreground">{companyProfile.ticker} - {companyProfile.exchange}</p>
          </div>
        )}

        <Suspense fallback={<AiIsThinking />}>
          <GeminiFinancialAnalysis balanceSheets={financials} language={language} />
        </Suspense>

        <FinancialDashboard rawData={financials} />
      </main>
    )
  }

  const [financeResponse, equityResponse, searchResponse
  ] = await Promise.all([
    fetchFinanceSummary(equityCode),
    fetchEquity(equityCode),
    searchCompany(equityCode)
  ])

  if ("error" in financeResponse) {
    return <Error error={financeResponse.error} />
  }

  if ("error" in equityResponse) {
    return <Error error={equityResponse.error} />
  }

  if ("error" in searchResponse) {
    return <Error error={searchResponse.error} />
  }

  const { data: financeSummaries } = financeResponse
  const { data: equity } = equityResponse
  const { data: searchResults } = searchResponse

  if (!financeSummaries || financeSummaries.length === 0 || searchResults.length === 0) return notFound()

  const { edinet_code } = searchResults[0]
  const balanceSheetResponse = await fetchBalanceSheets(edinet_code)

  if ("error" in balanceSheetResponse) {
    return <Error error={balanceSheetResponse.error} />
  }

  const { data: balanceSheets } = balanceSheetResponse

  return (
    <main className="p-4 md:p-8 max-w-screen-2xl mx-auto w-full overflow-hidden">
      {/* 1. Global fixed layer that covers the viewport width */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        {/* 2. Centered inner container matching your main layout constraints */}
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 w-full pt-4 md:pt-8">
          {/* 3. The actual interactive button */}
          <div className="pointer-events-auto inline-block">
            <Button asChild variant="outline" className="shadow-md bg-background">
              <Link href="/" className="no-underline">
                Home
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Placeholder spacer so your content doesn't jump under the floating button */}
      <div className="h-10 mb-8" />

      {equity && (
        <div className="mb-8">
          <h1 className="text-3xl font-bold">{equity.CoName}</h1>
          <p className="text-muted-foreground">{equity.Code} - {equity.CoNameEn}</p>
        </div>
      )}

      <Suspense fallback={<AiIsThinking />}>
        <GeminiFinancialAnalysis balanceSheets={balanceSheets} language={language} />
      </Suspense>

      <div className="mb-12">
        <FinancialChart data={financeSummaries} />
      </div>

      <FinancialTable data={balanceSheets} />

      <AccouningEquations financeSummaries={financeSummaries} />

    </main>
  )
}