import { fetchOrganisation } from "@/lib/data/organisation"
import { formatCurrency } from "@/lib/utils/utils"
// import { Decimal } from "@prisma/client/runtime/client"
import { notFound } from "next/navigation"

export default async function Page({ params }: { params: Promise<{ organisationId: string }> }) {
  const { organisationId } = await params
  const organisation = await fetchOrganisation(organisationId)

  if (!organisation) return notFound()

  const { accountingEquations } = organisation

  // const toCurrency = (value: Decimal) => new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(Number(value))

  return (
    <main>
      <h1>{organisation?.name || organisationId}</h1>
      <h2>Accounting Equations</h2>
      <ul>
        {accountingEquations.map(({ id, asOf, assets, liabilities, ownersEquity }) => (
          <li key={id}>
            <strong>{asOf.toLocaleDateString()}</strong>
            <p>Assets: {formatCurrency(assets)}</p>
            <p>Liabilities: {formatCurrency(liabilities)}</p>
            <p>Owners' Equity: {formatCurrency(ownersEquity)}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}