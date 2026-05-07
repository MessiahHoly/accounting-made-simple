import {
  fetchEquity, fetchFinanceSummary,
} from "@/lib/data/j-quants"
import { notFound } from "next/navigation"
import AccountingEquationRow from "./ui/AccountingEquation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  // fetchBalanceSheet,
  searchCompany
} from "@/lib/data/edinet-db"

export default async function Page({ params }: { params: Promise<{ equityCode: string }> }) {
  const { equityCode } = await params
  // console.log("Fetching data for equity code:", equityCode)
  const [financeResponse, equityResponse, searchResponse
  ] = await Promise.all([
    fetchFinanceSummary(equityCode),
    fetchEquity(equityCode),
    // fetchBalanceSheet("E02144")
    searchCompany(equityCode)
  ])

  // console.log(searchResponse)

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
  // if (!financeSummaries || financeSummaries.length === 0) return notFound()
  
  const { edinet_code } = searchResults[0]
  // console.log("EDINET code for the company:", edinet_code)

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
    </main>
  )
}