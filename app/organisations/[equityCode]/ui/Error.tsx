import BackButton from "@/app/ui/back-button"

export default function Error({ error }: { error?: string }) {
  // console.error("Error in page component:", error)
  return (
    <section>
      {/* <section className="p-4 md:p-8 max-w-screen-2xl mx-auto w-full overflow-hidden"> */}
      <div className="p-4 md:p-8 max-w-screen-2xl mx-auto w-full overflow-hidden">
        <h1>An error occurred</h1>
        <p>{error}</p>
        <BackButton text="Okay..." />
      </div>
    </section>
  )
}

//TODO: move this function to app/ui