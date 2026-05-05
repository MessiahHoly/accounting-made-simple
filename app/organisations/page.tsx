// import { fetchEquities } from "@/lib/data/j-quants";
import Search from "./ui/search";
import { Suspense } from "react";
import SearchSkeleton from "./ui/searchSkelton";
import Equities from "./ui/equities";

export default async function Page( props: { searchParams?: Promise<{ query?: string }> } ) {
// export default async function Page({ props }: { props: { searchParams?: Promise<{ query?: string }> } }) {
  console.log("Page component received props:", props);
  const searchParams = await props?.searchParams;
  // console.log("Received searchParams:", searchParams);
  const query = searchParams?.query || "";
  // console.log("Page received query:", query);

  return (
    <main className="p-4 w-full max-w-md mx-auto">
      <h1>Organisations</h1>
      <Search placeholder="Search organisations..." />
      <Suspense key={query} fallback={<SearchSkeleton />}>
        <Equities query={query} />
      </Suspense>
    </main>
  );
}