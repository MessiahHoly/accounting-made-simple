// import { Input } from "@/components/ui/input";
import { fetchEquities } from "@/lib/data/j-quants";
import Search from "./ui/search";
import { Suspense } from "react";
import SearchSkeleton from "./ui/searchSkelton";

export default async function Page({ props }: { props: { searchParams?: Promise<{ query?: string }> } }) {
  // const equities = await fetchEquities();
  const [equities, searchParams] = await Promise.all([fetchEquities(), props.searchParams]);
  const query = searchParams?.query || "";

  return (
    <main className="p-4 w-full max-w-md mx-auto">
      <h1>Organisations</h1>
      <Search placeholder="Search organisations..." />
      <Suspense key={query} fallback={<SearchSkeleton />}>
        <ul className="mt-4 space-y-2">
          {equities
            .filter((eq) => eq.name.toLowerCase().includes(query.toLowerCase()))
            .map((eq) => (
              <li key={eq.code} className="p-2 border rounded">
                <strong>{eq.name}</strong> ({eq.code})
              </li>
            ))}
        </ul>
      </Suspense>
    </main>
  );
}