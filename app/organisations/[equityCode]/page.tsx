import {
  fetchEquity, fetchFinanceSummary,
} from "@/lib/data/j-quants"
import { notFound } from "next/navigation"
import AccountingEquationRow from "./ui/AccountingEquation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  fetchBalanceSheets,
  searchCompany
} from "@/lib/data/edinet-db"
import FinancialTable from "./ui/BalanceSheet"

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

  //TODO: update next.js

  if ("error" in balanceSheetResponse) {
    console.error("Error fetching balance sheet:", balanceSheetResponse.error)
    return <div>Error: {balanceSheetResponse.error}</div>
  }

  const { data: balanceSheets } = balanceSheetResponse

  // return (
  //   <main className="p-4 md:p-8 max-w-screen-2xl mx-auto w-full overflow-hidden">
  //   {/* <main className="p-4"> */}
  //     <Button asChild variant="outline" className="mb-8">
  //       <Link href="/organisations" className="no-underline">
  //         Back to Search
  //       </Link>
  //     </Button>
  //     <h1>{equity.CoName}</h1>
  //     <p>{equity.Code} - {equity.CoNameEn}</p>
  //     <h2>Accounting Equations</h2>
  //     <ul>
  //       {financeSummaries.map(({ Code, CurPerEn, TA, Eq }) => (
  //         <AccountingEquationRow
  //           key={`${Code}-${CurPerEn}`}
  //           accountingEquation={{ asOf: CurPerEn, assets: Number(TA), liabilities: Number(TA) - Number(Eq), ownersEquity: Number(Eq) }}
  //         />
  //       ))}
  //     </ul>
  //     <FinancialTable data={balanceSheets} />
  //   </main>
  // )

  return (
    /* Add max-w-screen-xl (or 7xl) and overflow-hidden to keep the page contained */
    <main className="p-4 md:p-8 max-w-screen-2xl mx-auto w-full overflow-hidden">
      <Button asChild variant="outline" className="mb-8">
        <Link href="/organisations" className="no-underline">
          Back to Search
        </Link>
      </Button>

      <div className="mb-8">
        <h1 className="text-3xl font-bold">{equity.CoName}</h1>
        <p className="text-muted-foreground">{equity.Code} - {equity.CoNameEn}</p>
      </div>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Accounting Equations</h2>
        <ul className="space-y-2">
          {financeSummaries.map(({ Code, CurPerEn, TA, Eq }) => (
            <AccountingEquationRow
              key={`${Code}-${CurPerEn}`}
              accountingEquation={{
                asOf: CurPerEn,
                assets: Number(TA),
                liabilities: Number(TA) - Number(Eq),
                ownersEquity: Number(Eq)
              }}
            />
          ))}
        </ul>
      </section>

      {/* The table component below will now handle its own internal scrolling */}
      <FinancialTable data={balanceSheets} />
    </main>
  )
}