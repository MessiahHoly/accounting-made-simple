import { fetchOrganisation } from "@/lib/data/organisation"
// import { formatCurrency } from "@/lib/utils/utils"
import { notFound } from "next/navigation"
import AccountingEquationRow from "./ui/AccountingEquation"

export default async function Page({ params }: { params: Promise<{ organisationId: string }> }) {
  const { organisationId } = await params
  const organisation = await fetchOrganisation(organisationId)

  if (!organisation) return notFound()

  const { accountingEquations } = organisation

  return (
    <main className="p-4">
      <h1>{organisation?.name || organisationId}</h1>
      <h2>Accounting Equations</h2>
      <ul>
        {accountingEquations.map((eq) => (
          <AccountingEquationRow key={eq.id} accountingEquation={eq} />
        ))}
      </ul>
    </main>
  )
}