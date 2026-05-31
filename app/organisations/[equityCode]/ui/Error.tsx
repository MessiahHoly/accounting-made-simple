import BackButton from "@/app/ui/back-button"

export default function Error({ error }: { error?: string }) {
  // console.error("Error in page component:", error)
  return (
    <section>
      <h1>An error occurred</h1>
      <p>{error}</p>
      <BackButton text="Okay..." />
    </section>
  )
}

//TODO: move this function to app/ui