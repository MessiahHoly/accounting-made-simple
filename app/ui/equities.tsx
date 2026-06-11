import { fetchEquities } from "@/lib/data/j-quants";
import { Organisation } from "./organisation";
import Error from "./Error";
// import { transformFmpCompanyToEquityObject } from "@/lib/utils/utils";
import { searchSymbols } from "@/lib/data/finnhub";
import { filterOutFinnhubUnsupportedSymbols } from "@/lib/utils/utils";

export default async function Equities({ query, language }: { query: string, language?: string }) {
  const response = query.length > 0 ? await fetchEquities() : { data: [] };
  const responseFromFinnhub = query.length > 0 ? await searchSymbols(query) : { data: [] };

  if ("error" in response) {
    return (
      <Error error={response.error} />
    ); 
  }

  if ("error" in responseFromFinnhub) {
    return (
      <Error error={responseFromFinnhub.error} />
    );
  }

  const filteredEquities = response.data.filter(({ CoName, CoNameEn, Code }) =>
    CoName.toLowerCase().includes(query.toLowerCase())
    || Code.toLowerCase().includes(query.toLowerCase())
    || CoNameEn.toLowerCase().includes(query.toLowerCase())
  );

  const filteredFinnhubEquities = filterOutFinnhubUnsupportedSymbols(responseFromFinnhub.data)

  const companiesFromFinnhub = filteredFinnhubEquities.map(data => {
  // const companiesFromFinnhub = responseFromFinnhub.data.map(data => {
    return {
      Code: data.symbol,
      CoName: data.description,
      CoNameEn: data.description,
      region: data.type,
    };
  });

  return (
    <div className="flex flex-col gap-4">
      {filteredEquities.map((eq) => (
        <Organisation key={eq.Code} equity={eq} language={language} region="Japan" source="j-quants" />
      ))}
      {companiesFromFinnhub.map((company) => (
        <Organisation key={company.Code} equity={company} language={language} region={company.region} source="finnhub" />
      ))}
    </div>
  );
}