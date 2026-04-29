import { fetchOrganisation } from "@/lib/data/organisation"
import { notFound } from "next/navigation"

export default async function Page({ params }: { params: Promise<{ organisationId: string }> }) {
  const { organisationId } = await params
  const organisation = await fetchOrganisation(organisationId)

  if (!organisation) return notFound()

  const { accountingEquations } = organisation

  return (
    <main>
      <h1>{organisation?.name || organisationId}</h1>
      <h2>Accounting Equations</h2>
      <ul>
        {accountingEquations.map(({ id, asOf, assets, liabilities, ownersEquity }) => (
          <li key={id}>
            <strong>{asOf.toLocaleDateString()}</strong>
            <p>Assets: {assets.toString()}</p>
            <p>Liabilities: {liabilities.toString()}</p>
            <p>Owners' Equity: {ownersEquity.toString()}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}