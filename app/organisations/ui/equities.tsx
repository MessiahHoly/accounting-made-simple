import { fetchEquities } from "@/lib/data/j-quants";
import { Organisation } from "./organisation";

export default async function Equities({ query }: { query: string }) {
  const response = query.length > 0 ? await fetchEquities() : { data: [] };
  // const response = await fetchEquities();

  if ("error" in response) {
    return (
      <div>
        <h2>Error</h2>
        <p>{response.error}</p>
      </div>
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
        <Organisation key={eq.Code} equity={eq} />
      ))}
    </div>
  );
}