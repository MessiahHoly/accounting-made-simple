// import { getAccountingEquation } from "@/lib/utils/utils";

import { Suspense } from "react";
import Search from "./ui/search";
import SearchSkeleton from "./ui/searchSkelton";
import Equities from "./ui/equities";

//TODO: move search, search skelton and equities component 

export default async function Home(props: { searchParams?: Promise<{ query?: string }> }) {
  const searchParams = await props?.searchParams;
  const query = searchParams?.query || "";

  return (
    <main className="p-4 w-full max-w-md mx-auto">
      <p>Assets = Liabilities + Owner's Equity</p>
      <div className="flex flex-col gap-10">
        <Search placeholder="Search organisations..." />
        <Suspense key={query} fallback={<SearchSkeleton />}>
          <Equities query={query} />
        </Suspense>
      </div>
    </main>
  );
}
