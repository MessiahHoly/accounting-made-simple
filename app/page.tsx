import { Suspense } from "react";
import Search from "./ui/search";
import SearchSkeleton from "./ui/searchSkelton";
import Equities from "./ui/equities";
import { LanguageCombobox } from "./ui/language-combobox";

export default async function Home(props: { searchParams?: Promise<{ query?: string, language?: string }> }) {
  // export default async function Home(props: { searchParams?: Promise<{ query?: string }> }) {
  const searchParams = await props?.searchParams;
  const query = searchParams?.query || "";
  const language = searchParams?.language;

  // console.log(language)

  return (
    <main className="p-4 w-full max-w-md mx-auto">
      <p>Assets = Liabilities + Owner's Equity</p>
      <div className="flex flex-col gap-10">
        <Search placeholder="Search organisations..." />
        <LanguageCombobox />
        <Suspense key={query} fallback={<SearchSkeleton />}>
          <Equities query={query} language={language} />
        </Suspense>
      </div>
    </main>
  );
}
