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

//TODO: fix sbi shinsei bank

export default async function Page({ params, searchParams }: {
  params: Promise<{ equityCode: string }>, searchParams: Promise<{ language?: string }>
}) {
  // export default async function Page({ params }: { params: Promise<{ equityCode: string, language?: string }> }) {
  const [{ equityCode }, { language }] = await Promise.all([params, searchParams])
  // const { equityCode } = await params
  console.log("Language for analysis:", language)
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
      <Button asChild variant="outline" className="mb-8">
        <Link href="/" className="no-underline">
          Home
        </Link>
      </Button>

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