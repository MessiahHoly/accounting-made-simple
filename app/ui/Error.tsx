import BackButton from "@/app/ui/back-button"

export default function Error({ error }: { error?: string }) {
  return (
    <section>
      <div className="p-4 md:p-8 max-w-screen-2xl mx-auto w-full overflow-hidden">
        <h1>An error occurred</h1>
        <p>{error}</p>
        <BackButton text="Okay..." />
      </div>
    </section>
  )
}