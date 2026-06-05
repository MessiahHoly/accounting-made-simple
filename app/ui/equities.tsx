import { fetchEquities } from "@/lib/data/j-quants";
import { Organisation } from "./organisation";
// import { searchForCompany } from "@/lib/data/fmp";
import Error from "../organisations/[equityCode]/ui/Error";
import { transformFmpCompanyToEquityObject } from "@/lib/utils/utils";
import { searchSymbols } from "@/lib/data/finnhub";
// import { searchSymbols } from "@/lib/data/alpha-vantage";

export default async function Equities({ query, language }: { query: string, language?: string }) {
  const response = query.length > 0 ? await fetchEquities() : { data: [] };
  // const responseFromFmp = query.length > 0 ? await searchForCompany(query) : { data: [] };
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

  // console.log(responseFromFinnhub);

  const companiesFromFinnhub = responseFromFinnhub.data.map(data => {
    // return { ...transformFmpCompanyToEquityObject(ticker), region: ticker.region };
    return {
      Code: data.symbol,
      CoName: data.description,
      CoNameEn: data.description,
      region: data.type,
    };
  });

  // console.log(companiesFromFinnhub);

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