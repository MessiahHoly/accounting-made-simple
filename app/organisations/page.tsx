import { Input } from "@/components/ui/input";
import { fetchEquities } from "@/lib/data/j-quants";

export default async function Page() {
  const equities = await fetchEquities();
  console.log("Equities data:", equities);

  return (
    <main className="p-4 w-full max-w-md mx-auto">
      <h1>Organisations</h1>
      {/* <p>This is the organisations page.</p> */}
      <Input placeholder="Search organisations..." />
    </main>
  );
}