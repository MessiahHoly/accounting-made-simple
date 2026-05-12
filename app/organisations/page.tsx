import Search from "./ui/search";
import { Suspense } from "react";
import SearchSkeleton from "./ui/searchSkelton";
import Equities from "./ui/equities";

export default async function Page(props: { searchParams?: Promise<{ query?: string }> }) {
  const searchParams = await props?.searchParams;
  const query = searchParams?.query || "";

  return (
    <main className="p-4 w-full max-w-md mx-auto">
      <h1>Organisations</h1>
      <div className="flex flex-col gap-10">
        <Search placeholder="Search organisations..." />
        <Suspense key={query} fallback={<SearchSkeleton />}>
          <Equities query={query} />
        </Suspense>
      </div>
    </main>
  );
}