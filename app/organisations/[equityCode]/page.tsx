import {
  fetchEquity, fetchFinanceSummary,
} from "@/lib/data/j-quants"
import { notFound } from "next/navigation"
import AccountingEquationRow from "./ui/AccountingEquation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { fetchBalanceSheet } from "@/lib/data/edinet-db"

export default async function Page({ params }: { params: Promise<{ equityCode: string }> }) {
  const { equityCode } = await params
  // console.log("Fetching data for equity code:", equityCode)
  const [financeResponse, equityResponse, balanceSheetResponse
  ] = await Promise.all([
    fetchFinanceSummary(equityCode),
    fetchEquity(equityCode),
    fetchBalanceSheet("E02144")
  ])

  console.log(balanceSheetResponse)

  if ("error" in financeResponse) {
    console.error("Error fetching finance summary:", financeResponse.error)
    return <div>Error: {financeResponse.error}</div>
  }

  if ("error" in equityResponse) {
    console.error("Error fetching equity data:", equityResponse.error)
    return <div>Error: {equityResponse.error}</div>
  }

  const { data: financeSummaries } = financeResponse
  const { data: equity } = equityResponse

  if (!financeSummaries || financeSummaries.length === 0) return notFound()

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
            // key={Code}
            accountingEquation={{ asOf: CurPerEn, assets: Number(TA), liabilities: Number(TA) - Number(Eq), ownersEquity: Number(Eq) }}
          />
        ))}
      </ul>
    </main>
  )
}