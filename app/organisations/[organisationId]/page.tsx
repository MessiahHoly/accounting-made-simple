export default async function Page({ params }: { params: Promise<{ organisationId: string }> }) {
  const { organisationId } = await params

  return (
    <main>
      <h1>{organisationId}</h1>
    </main>
  )
}