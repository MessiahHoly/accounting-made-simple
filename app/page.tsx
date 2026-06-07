import { Suspense } from "react";
import Search from "./ui/search";
import SearchSkeleton from "./ui/searchSkelton";
import Equities from "./ui/equities";
import { LanguageCombobox } from "./ui/language-combobox";

export default async function Home(props: { searchParams?: Promise<{ query?: string, language?: string }> }) {
  const searchParams = await props?.searchParams;
  const query = searchParams?.query || "";
  const language = searchParams?.language;

  return (
    <main className="p-4 w-full max-w-md mx-auto flex flex-col gap-8">
      <h4>Search organisations for financial insights</h4>
      {/* <p>Assets = Liabilities + Owner's Equity</p> */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <Search placeholder="Search for organisations..." />
          <LanguageCombobox />
        </div>
        <Suspense key={query} fallback={<SearchSkeleton />}>
          <Equities query={query} language={language} />
        </Suspense>
      </div>
    </main>
  );
}
