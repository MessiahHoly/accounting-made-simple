import {
  fetchEquity, fetchFinanceSummary,
} from "@/lib/data/j-quants"
import { notFound } from "next/navigation"
import AccountingEquationRow from "./ui/AccountingEquation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  fetchBalanceSheets,
  // fetchBalanceSheet,
  searchCompany
} from "@/lib/data/edinet-db"
import FinancialTable from "./ui/BalanceSheet"
// import BalanceSheet from "./ui/BalanceSheet"
// import { BalanceSheet } from "./ui/BalanceSheet"

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
  // console.log("EDINET Code:", edinet_code)
  const balanceSheetResponse = await fetchBalanceSheets(edinet_code)
  // console.log("Balance Sheet Response:", balanceSheetResponse)

  //TODO: update next.js

  if ("error" in balanceSheetResponse) {
    console.error("Error fetching balance sheet:", balanceSheetResponse.error)
    return <div>Error: {balanceSheetResponse.error}</div>
  }

  const { data: balanceSheets } = balanceSheetResponse
  // console.log("Balance Sheet Data:", balanceSheets)

  return (
    <main className="p-4">
      <Button asChild variant="outline" className="mb-8">
        <Link href="/organisations" className="no-underline">
          Back to Search
        </Link>
      </Button>
      <h1>{equity.CoName}</h1>
      <p>{equity.Code} - {equity.CoNameEn}</p>
      <h2>Accounting Equations</h2>
      <ul>
        {financeSummaries.map(({ Code, CurPerEn, TA, Eq }) => (
          <AccountingEquationRow
            key={`${Code}-${CurPerEn}`}
            accountingEquation={{ asOf: CurPerEn, assets: Number(TA), liabilities: Number(TA) - Number(Eq), ownersEquity: Number(Eq) }}
          />
        ))}
      </ul>
      <FinancialTable data={balanceSheets} />
    </main>
  )
}