import { fetchEquities } from "@/lib/data/j-quants";

export default async function Page() {
  const equities = await fetchEquities();
  console.log("Equities data:", equities);

  return (
    <div>
      <h1>Organisations</h1>
      <p>This is the organisations page.</p>
    </div>
  );
}