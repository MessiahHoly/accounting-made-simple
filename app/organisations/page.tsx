import { fetchEquities } from "@/lib/data/j-quants";

export default async function Page() {
  await fetchEquities();

  return (
    <div>
      <h1>Organisations</h1>
      <p>This is the organisations page.</p>
    </div>
  );
}