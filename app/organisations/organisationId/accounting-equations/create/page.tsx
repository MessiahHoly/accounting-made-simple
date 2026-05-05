import { fetchOrganisation } from "@/lib/data/organisation";
import { AccountingEquationForm } from "./ui/accounting-equation-form";

export default async function Page({ params }: { params: Promise<{ organisationId: string }> }) {
  const { organisationId } = await params;
  const organisation = await fetchOrganisation(organisationId);

  if (!organisation) {
    return (
      <main className="w-full max-w-md px-4">
        <h1>Organisation Not Found</h1>
        <p>The organisation you are looking for does not exist.</p>
      </main>
    );
  }

  return (
    <main className="w-full max-w-md px-4">
      <h1>Create Accounting Equation for {organisation.name}</h1>
      <AccountingEquationForm organisationId={organisationId} />
    </main>
  )
}