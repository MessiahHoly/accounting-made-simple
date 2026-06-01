import { fetchEquities } from "@/lib/data/j-quants";
import { Organisation } from "./organisation";
import { searchForCompany } from "@/lib/data/fmp";
import Error from "../organisations/[equityCode]/ui/Error";
import { transformFmpCompanyToEquityObject } from "@/lib/utils/utils";

export default async function Equities({ query, language }: { query: string, language?: string }) {
  const response = query.length > 0 ? await fetchEquities() : { data: [] };
  const responseFromFmp = query.length > 0 ? await searchForCompany(query) : { data: [] };

  if ("error" in response) {
    return (
      <Error error={response.error} />
    );
  }

  if ("error" in responseFromFmp) {
    return (
      <Error error={responseFromFmp.error} />
    );
  }

  const filteredEquities = response.data.filter(({ CoName, CoNameEn, Code }) =>
    CoName.toLowerCase().includes(query.toLowerCase())
    || Code.toLowerCase().includes(query.toLowerCase())
    || CoNameEn.toLowerCase().includes(query.toLowerCase())
  );

  const companiesFromFmp = responseFromFmp.data.map(company => {
    return { ...transformFmpCompanyToEquityObject(company), exchangeFullName: company.exchangeFullName };
  });

  return (
    <div className="flex flex-col gap-4">
      {filteredEquities.map((eq) => (
        <Organisation key={eq.Code} equity={eq} language={language} exchangeFullName="Tokyo Stock Exchange" source="j-quants" />
      ))}
      {companiesFromFmp.map((company) => (
        <Organisation key={company.Code} equity={company} language={language} exchangeFullName={company.exchangeFullName} source="fmp" />
      ))}
    </div>
  );
}