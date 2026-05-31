import { fetchEquities } from "@/lib/data/j-quants";
import { Organisation } from "./organisation";
import { searchForCompany } from "@/lib/data/fmp";
import Error from "../organisations/[equityCode]/ui/Error";

export default async function Equities({ query, language }: { query: string, language?: string }) {
  const response = query.length > 0 ? await fetchEquities() : { data: [] };
  const responseFromFmp = await searchForCompany(query);

  if ("error" in response) {
    return (
      // <div>
      //   <h2>Error</h2>
      //   <p>{response.error}</p>
      // </div>
      <Error error={response.error} />
    );
  }

  if("error" in responseFromFmp) {
    return (
      <Error error={responseFromFmp.error} />
    );
  }

  const filteredEquities = response.data.filter(({ CoName, CoNameEn, Code }) =>
    CoName.toLowerCase().includes(query.toLowerCase())
    || Code.toLowerCase().includes(query.toLowerCase())
    || CoNameEn.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-4">
      {filteredEquities.map((eq) => (
        <Organisation key={eq.Code} equity={eq} language={language} />
      ))}
    </div>
  );
}