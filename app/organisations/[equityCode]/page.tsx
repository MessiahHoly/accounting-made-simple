import { fetchEquity, fetchFinanceSummary } from "@/lib/data/j-quants"
// import { fetchOrganisation } from "@/lib/data/organisation"
import { notFound } from "next/navigation"

export default async function Page({ params }: { params: Promise<{ equityCode: string }> }) {
  const { equityCode } = await params
  const [financeResponse, equityResponse] = await Promise.all([fetchFinanceSummary(equityCode), fetchEquity(equityCode)])
  // const response = await fetchFinanceSummary(equityCode)

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

  // console.log("Finance summaries fetched successfully:", financeSummaries)

  // const { accountingEquations } = organisation

  return (
    <main className="p-4">
      <h1>{equity.CoName}</h1>
      <p>{equity.Code} - {equity.CoNameEn}</p>
      <h2>Accounting Equations</h2>
      {/* <ul>
        {accountingEquations.map((eq) => (
          <AccountingEquationRow key={eq.id} accountingEquation={eq} />
        ))}
      </ul> */}
    </main>
  )
}