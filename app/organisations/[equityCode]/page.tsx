import { fetchFinanceSummary } from "@/lib/data/j-quants"
import { fetchOrganisation } from "@/lib/data/organisation"
// import { formatCurrency } from "@/lib/utils/utils"
import { notFound } from "next/navigation"
// import AccountingEquationRow from "./ui/AccountingEquation"

export default async function Page({ params }: { params: Promise<{ equityCode: string }> }) {
  const { equityCode } = await params
  // console.log("Page component received equityCode:", equityCode)
  // const organisation = await fetchOrganisation(organisationId)
  const response = await fetchFinanceSummary(equityCode)
  // const financeSummary = await fetchFinanceSummary(equityCode)

  if ("error" in response) {
    console.error("Error fetching finance summary:", response.error)
    return <div>Error: {response.error}</div>
  }

  const { data: financeSummaries } = response

  if (!financeSummaries || financeSummaries.length === 0) return notFound()

  console.log("Finance summaries fetched successfully:", financeSummaries)

  // if () return notFound()
  // if (!organisation) return notFound()

  const { accountingEquations } = organisation

  return (
    <main className="p-4">
      <h1>{organisation?.name || organisationId}</h1>
      <h2>Accounting Equations</h2>
      <ul>
        {accountingEquations.map((eq) => (
          <AccountingEquationRow key={eq.id} accountingEquation={eq} />
        ))}
        {/* {accountingEquations.map(({ id, asOf, assets, liabilities, ownersEquity }) => (
          <li key={id}>
            <strong>{asOf.toLocaleDateString()}</strong>
            <p>Assets: {formatCurrency(assets)}</p>
            <p>Liabilities: {formatCurrency(liabilities)}</p>
            <p>Owners' Equity: {formatCurrency(ownersEquity)}</p>
          </li>
        ))} */}
      </ul>
    </main>
  )
}