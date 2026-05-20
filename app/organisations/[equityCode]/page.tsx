import {
  fetchEquity, fetchFinanceSummary,
} from "@/lib/data/j-quants"
import { notFound } from "next/navigation"
// import AccountingEquationRow from "./ui/AccountingEquation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  fetchBalanceSheets,
  searchCompany
} from "@/lib/data/edinet-db"
import FinancialTable from "./ui/BalanceSheet"
import FinancialChart from "./ui/FinancialChart"
import AccouningEquations from "./ui/AccountingEquations"
import { fetchOpenRouter } from "@/lib/data/open-router"

export default async function Page({ params }: { params: Promise<{ equityCode: string }> }) {
  const { equityCode } = await params
  const [financeResponse, equityResponse, searchResponse
  ] = await Promise.all([
    fetchFinanceSummary(equityCode),
    fetchEquity(equityCode),
    searchCompany(equityCode)
  ])

  if ("error" in financeResponse) {
    console.error("Error fetching finance summary:", financeResponse.error)
    return <div>Error: {financeResponse.error}</div>
  }

  if ("error" in equityResponse) {
    console.error("Error fetching equity data:", equityResponse.error)
    return <div>Error: {equityResponse.error}</div>
  }

  if ("error" in searchResponse) {
    console.error("Error searching company:", searchResponse.error)
    return <div>Error: {searchResponse.error}</div>
  }

  const { data: financeSummaries } = financeResponse
  const { data: equity } = equityResponse
  const { data: searchResults } = searchResponse

  if (!financeSummaries || financeSummaries.length === 0 || searchResults.length === 0) return notFound()

  const { edinet_code } = searchResults[0]
  const balanceSheetResponse = await fetchBalanceSheets(edinet_code)

  if ("error" in balanceSheetResponse) {
    console.error("Error fetching balance sheet:", balanceSheetResponse.error)
    return <div>Error: {balanceSheetResponse.error}</div>
  }

  const { data: balanceSheets } = balanceSheetResponse

  await fetchOpenRouter()

  return (
    <main className="p-4 md:p-8 max-w-screen-2xl mx-auto w-full overflow-hidden">
      <Button asChild variant="outline" className="mb-8">
        <Link href="/" className="no-underline">
          Home
        </Link>
      </Button>

      <div className="mb-8">
        <h1 className="text-3xl font-bold">{equity.CoName}</h1>
        <p className="text-muted-foreground">{equity.Code} - {equity.CoNameEn}</p>
      </div>

      <div className="mb-12">
        <FinancialChart data={financeSummaries} />
      </div>

      <FinancialTable data={balanceSheets} />
      
      <AccouningEquations financeSummaries={financeSummaries} />
    </main>
  )
}