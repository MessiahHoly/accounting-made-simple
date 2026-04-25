import { fetchOrganisation } from "@/lib/data/organisation"
import { notFound } from "next/navigation"

export default async function Page({ params }: { params: Promise<{ organisationId: string }> }) {
  const { organisationId } = await params
  const organisation = await fetchOrganisation(organisationId)

  if (!organisation) return notFound()

  return (
    <main>
      <h1>{organisation?.name || organisationId}</h1>
    </main>
  )
}