import { Input } from "@/components/ui/input";
import { fetchEquities } from "@/lib/data/j-quants";
import Search from "./ui/search";

export default async function Page() {
  const equities = await fetchEquities();
  // console.log("Equities data:", equities);

  return (
    <main className="p-4 w-full max-w-md mx-auto">
      <h1>Organisations</h1>
      {/* <Input placeholder="Search organisations..." /> */}
      <Search placeholder="Search organisations..." />
    </main>
  );
}